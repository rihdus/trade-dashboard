/**
 * Created by t_mehes on 30/6/17.
 */
var angular = require('angular');
import config from './config';
import graph from './graph';
import pricingData from './dataService';
import controller from './controller';

export default {
  config: config,
  controller: controller,
  template: '<div class="main-section">' +
  '<h2>{{name}}</h2>' +
  '<p>Refer: http://www.nasdaqdod.com/Samples.aspx <br><a href="{{source}}">{{sourceName}}</a></p>' +
  '<graph data="data"/>' +
  '</div>'
};

export var ngModule = angular.module(config.name, [])
  .directive('graph', graph)
  .service('pricingData', pricingData)
;
