webpackHotUpdate_N_E("pages/404",{

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page404; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Recommendation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Recommendation */ "./components/Recommendation.js");
/* harmony import */ var _styles_error_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/error.styl */ "./styles/error.styl");
/* harmony import */ var _styles_error_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_error_styl__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\Danilall\\projects\\regtool\\pages\\404.js";





function getDesc(lang) {
  switch (lang) {
    case 'ru':
      return 'Произошёл переход по несуществующей ссылке. Вы можете вернуться обратно или перейти на другие страницы:';

    default:
      return 'Произошёл переход по несуществующей ссылке. Вы можете вернуться обратно или перейти на другие страницы:';
  }
}

function getError(lang) {
  switch (lang) {
    case 'ru':
      return 'Ошибка 404';

    default:
      return 'Error 404';
  }
}

var __N_SSG = true;
function Page404(_ref) {
  var lang = _ref.lang,
      links = _ref.links;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
      links: links.tools,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_error_styl__WEBPACK_IMPORTED_MODULE_4___default.a.block,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: getError(lang)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: getDesc(lang)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Recommendation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        linksArticles: null,
        linksNews: links.news
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        links: links.footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 10
  }, this);
}
_c = Page404;

var _c;

$RefreshReg$(_c, "Page404");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbImdldERlc2MiLCJsYW5nIiwiZ2V0RXJyb3IiLCJQYWdlNDA0IiwibGlua3MiLCJ0b29scyIsInMiLCJibG9jayIsIm5ld3MiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNyQixVQUFRQSxJQUFSO0FBQ0UsU0FBSyxJQUFMO0FBQVcsYUFBTyx5R0FBUDs7QUFDWDtBQUFTLGFBQU8seUdBQVA7QUFGWDtBQUlEOztBQUNELFNBQVNDLFFBQVQsQ0FBa0JELElBQWxCLEVBQXdCO0FBQ3RCLFVBQVFBLElBQVI7QUFDRSxTQUFLLElBQUw7QUFBVyxhQUFPLFlBQVA7O0FBQ1g7QUFBUyxhQUFPLFdBQVA7QUFGWDtBQUlEOzs7QUFDYyxTQUFTRSxPQUFULE9BQWtDO0FBQUEsTUFBZkYsSUFBZSxRQUFmQSxJQUFlO0FBQUEsTUFBVEcsS0FBUyxRQUFUQSxLQUFTO0FBQy9DLHNCQUFPO0FBQUEsNEJBQ0wscUVBQUMsOERBQUQ7QUFBWSxXQUFLLEVBQUVBLEtBQUssQ0FBQ0MsS0FBekI7QUFBZ0MsVUFBSSxFQUFFSjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUFFTDtBQUFLLGVBQVMsRUFBRUsseURBQUMsQ0FBQ0MsS0FBbEI7QUFBQSw4QkFDRTtBQUFBLGdDQUNFO0FBQUEsb0JBQU1MLFFBQVEsQ0FBQ0QsSUFBRDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUFNRCxPQUFPLENBQUNDLElBQUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUUscUVBQUMsa0VBQUQ7QUFBZ0IscUJBQWEsRUFBRSxJQUEvQjtBQUFxQyxpQkFBUyxFQUFFRyxLQUFLLENBQUNJO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FLHFFQUFDLDBEQUFEO0FBQVEsYUFBSyxFQUFFSixLQUFLLENBQUNLO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQWFEO0tBZHVCTixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC5jZmE1ZTI4NTA1NTE3MmRkMDEwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgUmVjb21tZW5kYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbidcclxuaW1wb3J0IHsgZ2V0VG9vbHMsIGdldEZvb3RlciwgZ2V0TmV3cyB9IGZyb20gJy4uL2xpYi9uYXYnXHJcbmltcG9ydCBzIGZyb20gJy4uL3N0eWxlcy9lcnJvci5zdHlsJ1xyXG5cclxuZnVuY3Rpb24gZ2V0RGVzYyhsYW5nKSB7XHJcbiAgc3dpdGNoIChsYW5nKSB7XHJcbiAgICBjYXNlICdydSc6IHJldHVybiAn0J/RgNC+0LjQt9C+0YjRkdC7INC/0LXRgNC10YXQvtC0INC/0L4g0L3QtdGB0YPRidC10YHRgtCy0YPRjtGJ0LXQuSDRgdGB0YvQu9C60LUuINCS0Ysg0LzQvtC20LXRgtC1INCy0LXRgNC90YPRgtGM0YHRjyDQvtCx0YDQsNGC0L3QviDQuNC70Lgg0L/QtdGA0LXQudGC0Lgg0L3QsCDQtNGA0YPQs9C40LUg0YHRgtGA0LDQvdC40YbRizonXHJcbiAgICBkZWZhdWx0OiByZXR1cm4gJ9Cf0YDQvtC40LfQvtGI0ZHQuyDQv9C10YDQtdGF0L7QtCDQv9C+INC90LXRgdGD0YnQtdGB0YLQstGD0Y7RidC10Lkg0YHRgdGL0LvQutC1LiDQktGLINC80L7QttC10YLQtSDQstC10YDQvdGD0YLRjNGB0Y8g0L7QsdGA0LDRgtC90L4g0LjQu9C4INC/0LXRgNC10LnRgtC4INC90LAg0LTRgNGD0LPQuNC1INGB0YLRgNCw0L3QuNGG0Ys6J1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBnZXRFcnJvcihsYW5nKSB7XHJcbiAgc3dpdGNoIChsYW5nKSB7XHJcbiAgICBjYXNlICdydSc6IHJldHVybiAn0J7RiNC40LHQutCwIDQwNCdcclxuICAgIGRlZmF1bHQ6IHJldHVybiAnRXJyb3IgNDA0J1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlNDA0KHsgbGFuZywgbGlua3MgfSkge1xyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPE5hdmlnYXRpb24gbGlua3M9e2xpbmtzLnRvb2xzfSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e2dldEVycm9yKGxhbmcpfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+e2dldERlc2MobGFuZyl9PC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFJlY29tbWVuZGF0aW9uIGxpbmtzQXJ0aWNsZXM9e251bGx9IGxpbmtzTmV3cz17bGlua3MubmV3c30gLz5cclxuICAgICAgPEZvb3RlciBsaW5rcz17bGlua3MuZm9vdGVyfSAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgbGFuZyA9IFwicnVcIlxyXG4gIGNvbnN0IHRvb2xzID0gZ2V0VG9vbHMobGFuZylcclxuICBjb25zdCBmb290ZXIgPSBnZXRGb290ZXIobGFuZylcclxuICBjb25zdCBuZXdzID0gZ2V0TmV3cyhsYW5nLCAyMClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGlua3M6IHsgdG9vbHMsIGZvb3RlciwgbmV3cyB9LFxyXG4gICAgICBsYW5nLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=