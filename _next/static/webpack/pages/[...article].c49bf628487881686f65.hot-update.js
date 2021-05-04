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
  var url = "https://regtool.net/".concat(lang, "/").concat(link === '/' ? '' : link);

  function openWindow(e) {
    e.preventDefault();
    window.open(e.currentTarget.href, title, 'width=500,height=500,toolbar=1');
  }

  var links = [{
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.facebook,
    href: "https://www.facebook.com/sharer/sharer.php?u=#".concat(url),
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
    href: "https://t.me/share/url?url=".concat(url, "&text=").concat(title),
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "social/tg.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, {
    c: _styles_article_styl__WEBPACK_IMPORTED_MODULE_2___default.a.vk,
    href: "https://vk.com/share.php?url=".concat(url),
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
      }, obj.href, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZS5qcyJdLCJuYW1lcyI6WyJTaGFyZSIsImxpbmsiLCJ0aXRsZSIsImxhbmciLCJ1cmwiLCJvcGVuV2luZG93IiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwib3BlbiIsImN1cnJlbnRUYXJnZXQiLCJocmVmIiwibGlua3MiLCJjIiwicyIsImZhY2Vib29rIiwiaWNvbiIsInR3aXR0ZXIiLCJ3aGF0c2FwcCIsInRnIiwidmsiLCJzaGFyZSIsIm1hcCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxPQUFzQztBQUFBOztBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDbkQsTUFBTUMsR0FBRyxpQ0FBMEJELElBQTFCLGNBQWtDRixJQUFJLEtBQUssR0FBVCxHQUFlLEVBQWYsR0FBb0JBLElBQXRELENBQVQ7O0FBQ0EsV0FBU0ksVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFDckJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxVQUFNLENBQUNDLElBQVAsQ0FBWUgsQ0FBQyxDQUFDSSxhQUFGLENBQWdCQyxJQUE1QixFQUFrQ1QsS0FBbEMsRUFBeUMsZ0NBQXpDO0FBQ0Q7O0FBQ0QsTUFBTVUsS0FBSyxHQUFHLENBQ1o7QUFDRUMsS0FBQyxFQUFFQywyREFBQyxDQUFDQyxRQURQO0FBRUVKLFFBQUksMERBQW1EUCxHQUFuRCxDQUZOO0FBR0VZLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQURZLEVBTVo7QUFDRUgsS0FBQyxFQUFFQywyREFBQyxDQUFDRyxPQURQO0FBRUVOLFFBQUksSUFGTjtBQUdFSyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FOWSxFQVdaO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0ksUUFEUDtBQUVFUCxRQUFJLElBRk47QUFHRUssUUFBSSxlQUFFLHFFQUFDLDRDQUFEO0FBQUssVUFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLEdBWFksRUFnQlo7QUFDRUgsS0FBQyxFQUFFQywyREFBQyxDQUFDSyxFQURQO0FBRUVSLFFBQUksdUNBQWdDUCxHQUFoQyxtQkFBNENGLEtBQTVDLENBRk47QUFHRWMsUUFBSSxlQUFFLHFFQUFDLDRDQUFEO0FBQUssVUFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLEdBaEJZLEVBcUJaO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ00sRUFEUDtBQUVFVCxRQUFJLHlDQUFrQ1AsR0FBbEMsQ0FGTjtBQUdFWSxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FyQlksQ0FBZDtBQTJCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUYsMkRBQUMsQ0FBQ08sS0FBbEI7QUFBQSxjQUNHVCxLQUFLLENBQUNVLEdBQU4sQ0FBVSxVQUFBQyxHQUFHO0FBQUEsMEJBQUk7QUFBRyxpQkFBUyxFQUFFQSxHQUFHLENBQUNWLENBQWxCO0FBRWhCLFlBQUksRUFBRVUsR0FBRyxDQUFDWixJQUZNO0FBR2hCLFdBQUcsRUFBQyxtQkFIWTtBQUloQixlQUFPLEVBQUVOLFVBSk87QUFBQSxrQkFLZmtCLEdBQUcsQ0FBQ1A7QUFMVyxTQUNYTyxHQUFHLENBQUNaLElBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKO0FBQUEsS0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEO0tBNUN1QlgsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uYzQ5YmY2Mjg0ODc4ODE2ODZmNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzIGZyb20gJy4uL3N0eWxlcy9hcnRpY2xlLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi9TdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZSh7IGxpbmssIHRpdGxlLCBsYW5nIH0pIHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yZWd0b29sLm5ldC8ke2xhbmd9LyR7bGluayA9PT0gJy8nID8gJycgOiBsaW5rfWBcclxuICBmdW5jdGlvbiBvcGVuV2luZG93KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgd2luZG93Lm9wZW4oZS5jdXJyZW50VGFyZ2V0LmhyZWYsIHRpdGxlLCAnd2lkdGg9NTAwLGhlaWdodD01MDAsdG9vbGJhcj0xJylcclxuICB9XHJcbiAgY29uc3QgbGlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIGM6IHMuZmFjZWJvb2ssXHJcbiAgICAgIGhyZWY6IGBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0jJHt1cmx9YCxcclxuICAgICAgaWNvbjogPFN2ZyBuYW1lPVwic29jaWFsL2ZhY2Vib29rLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLnR3aXR0ZXIsXHJcbiAgICAgIGhyZWY6IGBgLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvdHdpdHRlci5zdmdcIiAvPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYzogcy53aGF0c2FwcCxcclxuICAgICAgaHJlZjogYGAsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC93aGF0c2FwcC5zdmdcIiAvPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYzogcy50ZyxcclxuICAgICAgaHJlZjogYGh0dHBzOi8vdC5tZS9zaGFyZS91cmw/dXJsPSR7dXJsfSZ0ZXh0PSR7dGl0bGV9YCxcclxuICAgICAgaWNvbjogPFN2ZyBuYW1lPVwic29jaWFsL3RnLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLnZrLFxyXG4gICAgICBocmVmOiBgaHR0cHM6Ly92ay5jb20vc2hhcmUucGhwP3VybD0ke3VybH1gLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvdmsuc3ZnXCIgLz5cclxuICAgIH0sXHJcbiAgXVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5zaGFyZX0+XHJcbiAgICAgIHtsaW5rcy5tYXAob2JqID0+IDxhIGNsYXNzTmFtZT17b2JqLmN9XHJcbiAgICAgICAga2V5PXtvYmouaHJlZn1cclxuICAgICAgICBocmVmPXtvYmouaHJlZn1cclxuICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lclwiXHJcbiAgICAgICAgb25DbGljaz17b3BlbldpbmRvd30+XHJcbiAgICAgICAge29iai5pY29ufVxyXG4gICAgICA8L2E+KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9