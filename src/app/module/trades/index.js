/**
 * Created by t_mehes on 30/6/17.
 */

var angular = require('angular');
import config from './config';
import store, {tradeStoreService} from './store';
import controller from './controller';
import tradeListTemplate from './index.html';

import './trade.scss';

export default {
  config: config,
  store: store,
  controller: 'tradeViewController',
  tradeListTemplate: tradeListTemplate
};

export var ngModule = angular.module(config.name, [])
  .controller('tradeViewController', controller)
;
