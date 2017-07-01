webpackJsonp([1],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngModule", function() { return ngModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_html__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trade_scss__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trade_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__trade_scss__);
/**
 * Created by t_mehes on 30/6/17.
 */

var angular = __webpack_require__(11);







/* harmony default export */ __webpack_exports__["default"] = ({
  config: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_1__store__["b" /* default */],
  controller: 'tradeViewController',
  tradeListTemplate: __WEBPACK_IMPORTED_MODULE_3__index_html___default.a
});

var ngModule = angular.module(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].name, [])
  .controller('tradeViewController', __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* default */])
;


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by t_mehes on 30/6/17.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'trade',
  list: {}
});


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(103)();
// imports


// module
exports.push([module.i, ".tc-amount{font-size:26px}.tc-currency{position:relative;bottom:10px}.tc-header{margin-bottom:10px;font-size:16px}.tf-header{padding:20px 16px 10px;font-size:16px}.tf-actions,.tf-content{padding:10px 16px}.tf-panel{border:1px solid #cacaca}.tf-panel label{display:block;font-weight:600!important;margin-bottom:5px}.tfp-input label{position:relative;top:8px;left:14px}.tfp-input input{border:none!important;padding-left:0}.tfp-select .ui.dropdown{border:none}.price-panel{padding:20px 10px;text-align:center}.pp-label{letter-spacing:.1em}.pp-super{position:relative;bottom:32px;font-size:14px}.price-value--large{font-size:60px}.price-sell{background-color:#b43442;color:#fff}.price-buy{background-color:#417cbc;color:#fff}.pull-right{float:right}", ""]);

// exports


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(104)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?minimize!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js!./trade.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?minimize!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/index.js!./trade.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-section\">\n\n  <h2>Trades</h2>\n\n  <div ng-if=\"trades.length==0\"\n       class=\"ui segment\">\n    <div class=\"ui disabled dimmer\"></div>\n    <p>No Trades Today</p>\n  </div>\n\n  <div ng-if=\"trades.length>0\">\n    <p>\n      <small>Today</small>\n    </p>\n    <hr>\n    <div class=\"ui cards\" style=\"margin-bottom: 20px;\">\n      <div ng-repeat=\"trade in trades\"\n           class=\"card trade-card\">\n        <div class=\"content\">\n          <div class=\"header\"\n               ng-bind=\"trade.name\"></div>\n          <div class=\"meta\">\n            <span class=\"tc-currency\" ng-bind=\"trade.baseCurrency\"></span>\n            <span class=\"tc-amount\"><b ng-bind=\"trade.amount\"></b></span>\n          </div>\n          <div class=\"description\"\n               ng-if=\"trade.note\"\n               ng-bind=\"trade.note\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <p>\n    <small>Last Week</small>\n  </p>\n\n  <div class=\"ui cards\">\n    <div class=\"card trade-card\">\n      <div class=\"content\">\n        <div class=\"tc-header\" header\n             ng-bind=\"'Trade Name'\"></div>\n        <div class=\"meta\">\n          <span class=\"tc-currency\" ng-bind=\"'EUR'\"></span>\n          <span class=\"tc-amount\"><b ng-bind=\"'54000'\"></b></span>\n        </div>\n        <div class=\"description\"\n             ng-bind=\"'Trade num 889 - VP event 24 Aug.'\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(108);
/**
 * Created by t_mehes on 30/6/17.
 */



/* harmony default export */ __webpack_exports__["a"] = (['$scope', 'tradeStoreService', function ($scope, tradeStoreService) {
  $scope.config = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */];
  $scope.trades = tradeStoreService.store.trades || [];
}]);


/***/ })

});