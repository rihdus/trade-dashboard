// var angular = require('angular');
module.exports = routesConfig;

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/app/pricing');

  $stateProvider
    .state('app', {
      url: '/app',
      controller: 'AppController',
      controllerAs: 'App',
      // templateUrl: 'app/containers/App.html',
      templateProvider: ['$q', function ($q) {
        var deferred = $q.defer();
        require.ensure([], function (require) {
          deferred.resolve(require('../src/app/containers/App.html'));
        });
        return deferred.promise;
      }]
    })
    .state('app.pricing', {
      url: '/pricing',
      resolve: {
        pricingConfig: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
          var deferred = $q.defer();
          require.ensure([], function (require) {
            var chunk = require('../src/app/module/pricing/index');
            $ocLazyLoad.load({
              name: chunk.default.config.name
            });
            deferred.resolve(chunk.default);
          });
          return deferred.promise;
        }]
      },
      templateProvider: ['pricingConfig', function (pricingConfig) {
        return pricingConfig.template;
      }],
      controllerProvider: ['pricingConfig', function (pricingConfig) {
        return pricingConfig.controller;
      }]
    })
    .state('app.trades', {
      url: '/trade',
      resolve: {
        config: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
          var deferred = $q.defer();
          require.ensure([], function (require) {
            var chunk = require('../src/app/module/trades/index');
            $ocLazyLoad.load({name: chunk.default.config.name});
            deferred.resolve(chunk.default);
          });
          return deferred.promise;
        }]
      },
      templateProvider: ['config', function (config) {
        return config.tradeListTemplate;
      }],
      controllerProvider: ['config', function (config) {
        return config.controller;
      }]
    })
  ;
}


/**
 * Expected module chunk format by the lazy loader:
 * - The chunk much export a config object by default.
 * - The config object must provide the name of the module as a string property.
 *
 * sample:
 * {
 *  default: {
 *    config: {
 *      name: "myModule",
 *    }
 *  }
 * }
 *
 * */

function lazyLoaderService(modulePath) {
  return ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
    var deferred = $q.defer();
    require.ensure([], function (require) {
      var chunk = require(modulePath);
      $ocLazyLoad.load({
        name: chunk.default.config.name
      });
      deferred.resolve(chunk.default);
    });
    return deferred.promise;
  }];
}
