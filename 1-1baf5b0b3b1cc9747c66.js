webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngModule", function() { return ngModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_html__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trade_scss__ = __webpack_require__(115);
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

/***/ 109:
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

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(104)();
// imports


// module
exports.push([module.i, ".tf-header{padding:20px 16px 10px;font-size:16px}.tf-actions,.tf-content{padding:10px 16px}.tf-panel{border:1px solid #cacaca}.tf-panel label{display:block;font-weight:600!important;margin-bottom:5px}.tfp-input label{position:relative;top:8px;left:14px}.tfp-input input{border:none!important;padding-left:0}.tfp-select .ui.dropdown{border:none}.price-panel{padding:20px 10px;text-align:center}.pp-label{letter-spacing:.1em}.pp-super{position:relative;bottom:32px;font-size:14px}.price-value--large{font-size:60px}.price-sell{background-color:#b43442;color:#fff}.price-buy{background-color:#417cbc;color:#fff}.pull-right{float:right}", ""]);

// exports


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(105)(content, {});
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

/***/ 117:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-section\">\n\n  <h2>Trades</h2>\n\n  <div ng-if=\"trades.length==0\"\n       class=\"ui segment\">\n    <div class=\"ui disabled dimmer\"></div>\n    <p>No Trades Available</p>\n  </div>\n\n  <div>\n    <div class=\"ui cards\">\n      <div ng-repeat=\"trade in trades\"\n           class=\"card\">\n        <div class=\"content\">\n          <div class=\"header\"\n               ng-bind=\"trade.name\"></div>\n          <div class=\"meta\"\n               ng-bind=\"trade.baseCurrency\"></div>\n          <div class=\"description\"\n               ng-if=\"trade.note\"\n               ng-bind=\"trade.note\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(109);
/**
 * Created by t_mehes on 30/6/17.
 */



/* harmony default export */ __webpack_exports__["a"] = (['$scope', 'tradeStoreService', function ($scope, tradeStoreService) {
  $scope.config = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */];
  $scope.trades = tradeStoreService.store.trades || [];
}]);


/***/ })

});