/**
 * Created by t_mehes on 30/6/17.
 */

import config from './config';

export default ['$scope', 'tradeStoreService', function ($scope, tradeStoreService) {
  $scope.config = config;
  $scope.trades = tradeStoreService.store.trades || [];
}];
