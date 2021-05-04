webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_footer_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/footer.styl */ "./styles/footer.styl");
/* harmony import */ var _styles_footer_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_styl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Svg */ "./components/Svg.js");

var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Footer.js";




function Footer(_ref) {
  var _this = this;

  var links = _ref.links,
      lang = _ref.lang;
  var year = new Date().getFullYear();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: _styles_footer_styl__WEBPACK_IMPORTED_MODULE_2___default.a.block,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: links.map(function (_ref2) {
        var link = _ref2.link,
            _short = _ref2["short"];
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: '/' + lang + '/' + (link === '/' ? '' : link),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            rel: "nofollow noopener noreferrer",
            children: _short
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 11
          }, _this)
        }, link, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["\xA9 ", year, " regtool.net "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwibGlua3MiLCJsYW5nIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInMiLCJibG9jayIsIm1hcCIsImxpbmsiLCJzaG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDOUMsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFiO0FBQ0Esc0JBQU87QUFBUSxhQUFTLEVBQUVDLDBEQUFDLENBQUNDLEtBQXJCO0FBQUEsNEJBQ0w7QUFBQSxnQkFDR04sS0FBSyxDQUFDTyxHQUFOLENBQVU7QUFBQSxZQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFTQyxNQUFUO0FBQUEsNEJBQ1QscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUUsTUFBTVIsSUFBTixHQUFhLEdBQWIsSUFBb0JPLElBQUksS0FBSyxHQUFULEdBQWUsRUFBZixHQUFvQkEsSUFBeEMsQ0FBWjtBQUFBLGlDQUNFO0FBQUcsZUFBRyxFQUFDLDhCQUFQO0FBQUEsc0JBQXVDQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBZ0VELElBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBUUw7QUFBQSwwQkFBUU4sSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVVEO0tBWnVCSCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS42ZmM2YmZjYzliMmQ2MWIxYjg2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcyBmcm9tICcuLi9zdHlsZXMvZm9vdGVyLnN0eWwnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFN2ZyBmcm9tICcuL1N2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcih7IGxpbmtzLCBsYW5nIH0pIHtcclxuICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcbiAgcmV0dXJuIDxmb290ZXIgY2xhc3NOYW1lPXtzLmJsb2NrfT5cclxuICAgIDxkaXY+XHJcbiAgICAgIHtsaW5rcy5tYXAoKHsgbGluaywgc2hvcnQgfSkgPT5cclxuICAgICAgICA8TGluayBocmVmPXsnLycgKyBsYW5nICsgJy8nICsgKGxpbmsgPT09ICcvJyA/ICcnIDogbGluayl9IGtleT17bGlua30+XHJcbiAgICAgICAgICA8YSByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCI+e3Nob3J0fTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+wqkge3llYXJ9IHJlZ3Rvb2wubmV0IDwvZGl2PlxyXG4gIDwvZm9vdGVyPlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==