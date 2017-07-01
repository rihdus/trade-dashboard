var angular = require('angular');
require('oclazyload');

var App = require('./app/containers/App');
import Header from './app/components/Header';
import {tradeStoreService} from './app/module/trades/store';
import {TicketBuilder} from './app/module/trades/action';
require('angular-ui-router');
var routesConfig = require('./routes');

import './index.scss';
import '../lib/Semantic-UI/dist/semantic.css';
import '../lib/Semantic-UI/dist/semantic.js';

angular
  .module('app', ['ui.router', 'oc.lazyLoad'])
  .config(routesConfig)
  .factory('TicketBuilder', ['$q', '$document', '$compile', TicketBuilder])
  .controller('AppController', App.controller)
  .directive('headerComponent', Header)
  .service('tradeStoreService', tradeStoreService)
;
