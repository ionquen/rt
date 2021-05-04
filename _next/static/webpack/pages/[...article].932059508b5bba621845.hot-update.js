webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Share.js":
/*!*****************************!*\
  !*** ./components/Share.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Share; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_article_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/article.styl */ "./styles/article.styl");
/* harmony import */ var _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_article_styl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Svg */ "./components/Svg.js");

var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Share.js";



function Share(_ref) {
  var _this = this;

  var link = _ref.link,
      title = _ref.title,
      lang = _ref.lang;
  var updatedLink = "https://regtool.net/".concat(lang, "/").concat(link === '/' ? '' : link);

  function openWindow() {
    window.open(this.href, title, 'width=500,height=500,toolbar=1');
    return false;
  }

  var links = [{
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.facebook,
    href: "",
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/facebook.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, {
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.twitter,
    href: "",
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/twitter.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)
  }, {
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.whatsapp,
    href: "",
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/whatsapp.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, {
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.tg,
    href: "",
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/tg.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, {
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.vk,
    href: "https://vk.com/share.php?url=".concat(updatedLink),
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/vk.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.share,
    children: links.map(function (obj) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: obj.c,
        href: obj.href,
        rel: "nofollow noopener",
        onClick: openWindow,
        children: obj.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
_c = Share;

var _c;

$RefreshReg$(_c, "Share");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZS5qcyJdLCJuYW1lcyI6WyJTaGFyZSIsImxpbmsiLCJ0aXRsZSIsImxhbmciLCJ1cGRhdGVkTGluayIsIm9wZW5XaW5kb3ciLCJ3aW5kb3ciLCJvcGVuIiwiaHJlZiIsImxpbmtzIiwiYyIsInMiLCJmYWNlYm9vayIsImljb24iLCJ0d2l0dGVyIiwid2hhdHNhcHAiLCJ0ZyIsInZrIiwic2hhcmUiLCJtYXAiLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ25ELE1BQU1DLFdBQVcsaUNBQTBCRCxJQUExQixjQUFrQ0YsSUFBSSxLQUFLLEdBQVQsR0FBZSxFQUFmLEdBQW9CQSxJQUF0RCxDQUFqQjs7QUFDQSxXQUFTSSxVQUFULEdBQXNCO0FBQ3BCQyxVQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLQyxJQUFqQixFQUF1Qk4sS0FBdkIsRUFBOEIsZ0NBQTlCO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTU8sS0FBSyxHQUFHLENBQ1o7QUFDRUMsS0FBQyxFQUFFQywyREFBQyxDQUFDQyxRQURQO0FBRUVKLFFBQUksRUFBRSxFQUZSO0FBR0VLLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQURZLEVBTVo7QUFDRUgsS0FBQyxFQUFFQywyREFBQyxDQUFDRyxPQURQO0FBRUVOLFFBQUksRUFBRSxFQUZSO0FBR0VLLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQU5ZLEVBV1o7QUFDRUgsS0FBQyxFQUFFQywyREFBQyxDQUFDSSxRQURQO0FBRUVQLFFBQUksRUFBRSxFQUZSO0FBR0VLLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQVhZLEVBZ0JaO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0ssRUFEUDtBQUVFUixRQUFJLEVBQUUsRUFGUjtBQUdFSyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FoQlksRUFxQlo7QUFDRUgsS0FBQyxFQUFFQywyREFBQyxDQUFDTSxFQURQO0FBRUVULFFBQUkseUNBQWtDSixXQUFsQyxDQUZOO0FBR0VTLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQXJCWSxDQUFkO0FBMkJBLHNCQUNFO0FBQUssYUFBUyxFQUFFRiwyREFBQyxDQUFDTyxLQUFsQjtBQUFBLGNBQ0dULEtBQUssQ0FBQ1UsR0FBTixDQUFVLFVBQUFDLEdBQUc7QUFBQSwwQkFBSTtBQUFHLGlCQUFTLEVBQUVBLEdBQUcsQ0FBQ1YsQ0FBbEI7QUFDaEIsWUFBSSxFQUFFVSxHQUFHLENBQUNaLElBRE07QUFFaEIsV0FBRyxFQUFDLG1CQUZZO0FBR2hCLGVBQU8sRUFBRUgsVUFITztBQUFBLGtCQUlmZSxHQUFHLENBQUNQO0FBSlc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKO0FBQUEsS0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEO0tBM0N1QmIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uOTMyMDU5NTA4YjViYmE2MjE4NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzIGZyb20gJy4uL3N0eWxlcy9hcnRpY2xlLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi9TdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZSh7IGxpbmssIHRpdGxlLCBsYW5nIH0pIHtcclxuICBjb25zdCB1cGRhdGVkTGluayA9IGBodHRwczovL3JlZ3Rvb2wubmV0LyR7bGFuZ30vJHtsaW5rID09PSAnLycgPyAnJyA6IGxpbmt9YFxyXG4gIGZ1bmN0aW9uIG9wZW5XaW5kb3coKSB7XHJcbiAgICB3aW5kb3cub3Blbih0aGlzLmhyZWYsIHRpdGxlLCAnd2lkdGg9NTAwLGhlaWdodD01MDAsdG9vbGJhcj0xJylcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgYzogcy5mYWNlYm9vayxcclxuICAgICAgaHJlZjogXCJcIixcclxuICAgICAgaWNvbjogPFN2ZyBuYW1lPVwic29jaWFsL2ZhY2Vib29rLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLnR3aXR0ZXIsXHJcbiAgICAgIGhyZWY6IFwiXCIsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC90d2l0dGVyLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLndoYXRzYXBwLFxyXG4gICAgICBocmVmOiBcIlwiLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvd2hhdHNhcHAuc3ZnXCIgLz5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGM6IHMudGcsXHJcbiAgICAgIGhyZWY6IFwiXCIsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC90Zy5zdmdcIiAvPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYzogcy52ayxcclxuICAgICAgaHJlZjogYGh0dHBzOi8vdmsuY29tL3NoYXJlLnBocD91cmw9JHt1cGRhdGVkTGlua31gLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvdmsuc3ZnXCIgLz5cclxuICAgIH0sXHJcbiAgXVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5zaGFyZX0+XHJcbiAgICAgIHtsaW5rcy5tYXAob2JqID0+IDxhIGNsYXNzTmFtZT17b2JqLmN9XHJcbiAgICAgICAgaHJlZj17b2JqLmhyZWZ9XHJcbiAgICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXJcIlxyXG4gICAgICAgIG9uQ2xpY2s9e29wZW5XaW5kb3d9PlxyXG4gICAgICAgIHtvYmouaWNvbn1cclxuICAgICAgPC9hPil9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==