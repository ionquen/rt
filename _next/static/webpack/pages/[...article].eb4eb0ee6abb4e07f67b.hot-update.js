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

  function openWindow(e) {
    console.log(this);
    window.open(e.target.href, title, 'width=500,height=500,toolbar=1');
    return false;
  }

  var links = [{
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.facebook,
    href: "",
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/facebook.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, {
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.twitter,
    href: "",
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/twitter.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)
  }, {
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.whatsapp,
    href: "",
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/whatsapp.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)
  }, {
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.tg,
    href: "",
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/tg.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }, {
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.vk,
    href: "https://vk.com/share.php?url=".concat(updatedLink),
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/vk.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
        lineNumber: 42,
        columnNumber: 25
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZS5qcyJdLCJuYW1lcyI6WyJTaGFyZSIsImxpbmsiLCJ0aXRsZSIsImxhbmciLCJ1cGRhdGVkTGluayIsIm9wZW5XaW5kb3ciLCJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIm9wZW4iLCJ0YXJnZXQiLCJocmVmIiwibGlua3MiLCJjIiwicyIsImZhY2Vib29rIiwiaWNvbiIsInR3aXR0ZXIiLCJ3aGF0c2FwcCIsInRnIiwidmsiLCJzaGFyZSIsIm1hcCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxPQUFzQztBQUFBOztBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDbkQsTUFBTUMsV0FBVyxpQ0FBMEJELElBQTFCLGNBQWtDRixJQUFJLEtBQUssR0FBVCxHQUFlLEVBQWYsR0FBb0JBLElBQXRELENBQWpCOztBQUNBLFdBQVNJLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCO0FBQ3JCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZSixDQUFDLENBQUNLLE1BQUYsQ0FBU0MsSUFBckIsRUFBMkJWLEtBQTNCLEVBQWtDLGdDQUFsQztBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQU1XLEtBQUssR0FBRyxDQUNaO0FBQ0VDLEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0MsUUFEUDtBQUVFSixRQUFJLEVBQUUsRUFGUjtBQUdFSyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FEWSxFQU1aO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0csT0FEUDtBQUVFTixRQUFJLEVBQUUsRUFGUjtBQUdFSyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FOWSxFQVdaO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0ksUUFEUDtBQUVFUCxRQUFJLEVBQUUsRUFGUjtBQUdFSyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FYWSxFQWdCWjtBQUNFSCxLQUFDLEVBQUVDLDJEQUFDLENBQUNLLEVBRFA7QUFFRVIsUUFBSSxFQUFFLEVBRlI7QUFHRUssUUFBSSxlQUFFLHFFQUFDLDRDQUFEO0FBQUssVUFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLEdBaEJZLEVBcUJaO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ00sRUFEUDtBQUVFVCxRQUFJLHlDQUFrQ1IsV0FBbEMsQ0FGTjtBQUdFYSxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FyQlksQ0FBZDtBQTJCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUYsMkRBQUMsQ0FBQ08sS0FBbEI7QUFBQSxjQUNHVCxLQUFLLENBQUNVLEdBQU4sQ0FBVSxVQUFBQyxHQUFHO0FBQUEsMEJBQUk7QUFBRyxpQkFBUyxFQUFFQSxHQUFHLENBQUNWLENBQWxCO0FBQ2hCLFlBQUksRUFBRVUsR0FBRyxDQUFDWixJQURNO0FBRWhCLFdBQUcsRUFBQyxtQkFGWTtBQUdoQixlQUFPLEVBQUVQLFVBSE87QUFBQSxrQkFJZm1CLEdBQUcsQ0FBQ1A7QUFKVztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7S0E1Q3VCakIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uZWI0ZWIwZWU2YWJiNGUwN2Y2N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzIGZyb20gJy4uL3N0eWxlcy9hcnRpY2xlLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi9TdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZSh7IGxpbmssIHRpdGxlLCBsYW5nIH0pIHtcclxuICBjb25zdCB1cGRhdGVkTGluayA9IGBodHRwczovL3JlZ3Rvb2wubmV0LyR7bGFuZ30vJHtsaW5rID09PSAnLycgPyAnJyA6IGxpbmt9YFxyXG4gIGZ1bmN0aW9uIG9wZW5XaW5kb3coZSkge1xyXG4gICAgY29uc29sZS5sb2codGhpcylcclxuICAgIHdpbmRvdy5vcGVuKGUudGFyZ2V0LmhyZWYsIHRpdGxlLCAnd2lkdGg9NTAwLGhlaWdodD01MDAsdG9vbGJhcj0xJylcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgYzogcy5mYWNlYm9vayxcclxuICAgICAgaHJlZjogXCJcIixcclxuICAgICAgaWNvbjogPFN2ZyBuYW1lPVwic29jaWFsL2ZhY2Vib29rLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLnR3aXR0ZXIsXHJcbiAgICAgIGhyZWY6IFwiXCIsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC90d2l0dGVyLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLndoYXRzYXBwLFxyXG4gICAgICBocmVmOiBcIlwiLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvd2hhdHNhcHAuc3ZnXCIgLz5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGM6IHMudGcsXHJcbiAgICAgIGhyZWY6IFwiXCIsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC90Zy5zdmdcIiAvPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYzogcy52ayxcclxuICAgICAgaHJlZjogYGh0dHBzOi8vdmsuY29tL3NoYXJlLnBocD91cmw9JHt1cGRhdGVkTGlua31gLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvdmsuc3ZnXCIgLz5cclxuICAgIH0sXHJcbiAgXVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5zaGFyZX0+XHJcbiAgICAgIHtsaW5rcy5tYXAob2JqID0+IDxhIGNsYXNzTmFtZT17b2JqLmN9XHJcbiAgICAgICAgaHJlZj17b2JqLmhyZWZ9XHJcbiAgICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXJcIlxyXG4gICAgICAgIG9uQ2xpY2s9e29wZW5XaW5kb3d9PlxyXG4gICAgICAgIHtvYmouaWNvbn1cclxuICAgICAgPC9hPil9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==