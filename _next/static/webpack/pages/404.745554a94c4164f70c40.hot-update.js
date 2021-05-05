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




var __N_SSG = true;
function Page404(_ref) {
  var lang = _ref.lang,
      links = _ref.links;

  function getDesc(lang) {
    switch (lang) {
      case 'ru':
        return 'Произошёл переход по несуществующей ссылке. Вы можете вернуться обратно или перейти на другие страницы:';

      default:
        return 'Произошёл переход по несуществующей ссылке. Вы можете вернуться обратно или перейти на другие страницы:';
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
      links: links.tools,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_error_styl__WEBPACK_IMPORTED_MODULE_4___default.a.block,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "\u041E\u0448\u0438\u0431\u043A\u0430 404"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: getDesc(lang)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Recommendation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        linksArticles: null,
        linksNews: links.news
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        links: links.footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbIlBhZ2U0MDQiLCJsYW5nIiwibGlua3MiLCJnZXREZXNjIiwidG9vbHMiLCJzIiwiYmxvY2siLCJuZXdzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU0EsT0FBVCxPQUFrQztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDL0MsV0FBU0MsT0FBVCxDQUFpQkYsSUFBakIsRUFBdUI7QUFDckIsWUFBUUEsSUFBUjtBQUNFLFdBQUssSUFBTDtBQUFXLGVBQU8seUdBQVA7O0FBQ1g7QUFBUyxlQUFPLHlHQUFQO0FBRlg7QUFJRDs7QUFDRCxzQkFBTztBQUFBLDRCQUNMLHFFQUFDLDhEQUFEO0FBQVksV0FBSyxFQUFFQyxLQUFLLENBQUNFLEtBQXpCO0FBQWdDLFVBQUksRUFBRUg7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBRUw7QUFBSyxlQUFTLEVBQUVJLHlEQUFDLENBQUNDLEtBQWxCO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQU1ILE9BQU8sQ0FBQ0YsSUFBRDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSxxRUFBQyxrRUFBRDtBQUFnQixxQkFBYSxFQUFFLElBQS9CO0FBQXFDLGlCQUFTLEVBQUVDLEtBQUssQ0FBQ0s7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0UscUVBQUMsMERBQUQ7QUFBUSxhQUFLLEVBQUVMLEtBQUssQ0FBQ007QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBYUQ7S0FwQnVCUixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC43NDU1NTRhOTRjNDE2NGY3MGM0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgUmVjb21tZW5kYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbidcclxuaW1wb3J0IHsgZ2V0VG9vbHMsIGdldEZvb3RlciwgZ2V0TmV3cyB9IGZyb20gJy4uL2xpYi9uYXYnXHJcbmltcG9ydCBzIGZyb20gJy4uL3N0eWxlcy9lcnJvci5zdHlsJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZTQwNCh7IGxhbmcsIGxpbmtzIH0pIHtcclxuICBmdW5jdGlvbiBnZXREZXNjKGxhbmcpIHtcclxuICAgIHN3aXRjaCAobGFuZykge1xyXG4gICAgICBjYXNlICdydSc6IHJldHVybiAn0J/RgNC+0LjQt9C+0YjRkdC7INC/0LXRgNC10YXQvtC0INC/0L4g0L3QtdGB0YPRidC10YHRgtCy0YPRjtGJ0LXQuSDRgdGB0YvQu9C60LUuINCS0Ysg0LzQvtC20LXRgtC1INCy0LXRgNC90YPRgtGM0YHRjyDQvtCx0YDQsNGC0L3QviDQuNC70Lgg0L/QtdGA0LXQudGC0Lgg0L3QsCDQtNGA0YPQs9C40LUg0YHRgtGA0LDQvdC40YbRizonXHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiAn0J/RgNC+0LjQt9C+0YjRkdC7INC/0LXRgNC10YXQvtC0INC/0L4g0L3QtdGB0YPRidC10YHRgtCy0YPRjtGJ0LXQuSDRgdGB0YvQu9C60LUuINCS0Ysg0LzQvtC20LXRgtC1INCy0LXRgNC90YPRgtGM0YHRjyDQvtCx0YDQsNGC0L3QviDQuNC70Lgg0L/QtdGA0LXQudGC0Lgg0L3QsCDQtNGA0YPQs9C40LUg0YHRgtGA0LDQvdC40YbRizonXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPE5hdmlnYXRpb24gbGlua3M9e2xpbmtzLnRvb2xzfSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+0J7RiNC40LHQutCwIDQwNDwvZGl2PlxyXG4gICAgICAgIDxkaXY+e2dldERlc2MobGFuZyl9PC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFJlY29tbWVuZGF0aW9uIGxpbmtzQXJ0aWNsZXM9e251bGx9IGxpbmtzTmV3cz17bGlua3MubmV3c30gLz5cclxuICAgICAgPEZvb3RlciBsaW5rcz17bGlua3MuZm9vdGVyfSAvPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgbGFuZyA9IFwicnVcIlxyXG4gIGNvbnN0IHRvb2xzID0gZ2V0VG9vbHMobGFuZylcclxuICBjb25zdCBmb290ZXIgPSBnZXRGb290ZXIobGFuZylcclxuICBjb25zdCBuZXdzID0gZ2V0TmV3cyhsYW5nLCAyMClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGlua3M6IHsgdG9vbHMsIGZvb3RlciwgbmV3cyB9LFxyXG4gICAgICBsYW5nLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=