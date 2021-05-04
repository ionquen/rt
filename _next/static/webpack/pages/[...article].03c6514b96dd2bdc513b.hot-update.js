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
    window.open(e.currentTarget.href, title, 'width=800,height=500,toolbar=1');
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
    href: "whatsapp://send?text=".concat(url),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZS5qcyJdLCJuYW1lcyI6WyJTaGFyZSIsImxpbmsiLCJ0aXRsZSIsImxhbmciLCJ1cmwiLCJvcGVuV2luZG93IiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwib3BlbiIsImN1cnJlbnRUYXJnZXQiLCJocmVmIiwibGlua3MiLCJjIiwicyIsImZhY2Vib29rIiwiaWNvbiIsInR3aXR0ZXIiLCJ3aGF0c2FwcCIsInRnIiwidmsiLCJzaGFyZSIsIm1hcCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxPQUFzQztBQUFBOztBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDbkQsTUFBTUMsR0FBRyxpQ0FBMEJELElBQTFCLGNBQWtDRixJQUFJLEtBQUssR0FBVCxHQUFlLEVBQWYsR0FBb0JBLElBQXRELENBQVQ7O0FBQ0EsV0FBU0ksVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFDckJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxVQUFNLENBQUNDLElBQVAsQ0FBWUgsQ0FBQyxDQUFDSSxhQUFGLENBQWdCQyxJQUE1QixFQUFrQ1QsS0FBbEMsRUFBeUMsZ0NBQXpDO0FBQ0Q7O0FBQ0QsTUFBTVUsS0FBSyxHQUFHLENBQ1o7QUFDRUMsS0FBQyxFQUFFQywyREFBQyxDQUFDQyxRQURQO0FBRUVKLFFBQUksMERBQW1EUCxHQUFuRCxDQUZOO0FBR0VZLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQURZLEVBTVo7QUFDRUgsS0FBQyxFQUFFQywyREFBQyxDQUFDRyxPQURQO0FBRUVOLFFBQUksSUFGTjtBQUdFSyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FOWSxFQVdaO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0ksUUFEUDtBQUVFUCxRQUFJLGlDQUEwQlAsR0FBMUIsQ0FGTjtBQUdFWSxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FYWSxFQWdCWjtBQUNFSCxLQUFDLEVBQUVDLDJEQUFDLENBQUNLLEVBRFA7QUFFRVIsUUFBSSx1Q0FBZ0NQLEdBQWhDLG1CQUE0Q0YsS0FBNUMsQ0FGTjtBQUdFYyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FoQlksRUFxQlo7QUFDRUgsS0FBQyxFQUFFQywyREFBQyxDQUFDTSxFQURQO0FBRUVULFFBQUkseUNBQWtDUCxHQUFsQyxDQUZOO0FBR0VZLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQXJCWSxDQUFkO0FBMkJBLHNCQUNFO0FBQUssYUFBUyxFQUFFRiwyREFBQyxDQUFDTyxLQUFsQjtBQUFBLGNBQ0dULEtBQUssQ0FBQ1UsR0FBTixDQUFVLFVBQUFDLEdBQUc7QUFBQSwwQkFBSTtBQUFHLGlCQUFTLEVBQUVBLEdBQUcsQ0FBQ1YsQ0FBbEI7QUFFaEIsWUFBSSxFQUFFVSxHQUFHLENBQUNaLElBRk07QUFHaEIsV0FBRyxFQUFDLG1CQUhZO0FBSWhCLGVBQU8sRUFBRU4sVUFKTztBQUFBLGtCQUtma0IsR0FBRyxDQUFDUDtBQUxXLFNBQ1hPLEdBQUcsQ0FBQ1osSUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7S0E1Q3VCWCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS4wM2M2NTE0Yjk2ZGQyYmRjNTEzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHMgZnJvbSAnLi4vc3R5bGVzL2FydGljbGUuc3R5bCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuL1N2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoYXJlKHsgbGluaywgdGl0bGUsIGxhbmcgfSkge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL3JlZ3Rvb2wubmV0LyR7bGFuZ30vJHtsaW5rID09PSAnLycgPyAnJyA6IGxpbmt9YFxyXG4gIGZ1bmN0aW9uIG9wZW5XaW5kb3coZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB3aW5kb3cub3BlbihlLmN1cnJlbnRUYXJnZXQuaHJlZiwgdGl0bGUsICd3aWR0aD04MDAsaGVpZ2h0PTUwMCx0b29sYmFyPTEnKVxyXG4gIH1cclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgYzogcy5mYWNlYm9vayxcclxuICAgICAgaHJlZjogYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSMke3VybH1gLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvZmFjZWJvb2suc3ZnXCIgLz5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGM6IHMudHdpdHRlcixcclxuICAgICAgaHJlZjogYGAsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC90d2l0dGVyLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLndoYXRzYXBwLFxyXG4gICAgICBocmVmOiBgd2hhdHNhcHA6Ly9zZW5kP3RleHQ9JHt1cmx9YCxcclxuICAgICAgaWNvbjogPFN2ZyBuYW1lPVwic29jaWFsL3doYXRzYXBwLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLnRnLFxyXG4gICAgICBocmVmOiBgaHR0cHM6Ly90Lm1lL3NoYXJlL3VybD91cmw9JHt1cmx9JnRleHQ9JHt0aXRsZX1gLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvdGcuc3ZnXCIgLz5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGM6IHMudmssXHJcbiAgICAgIGhyZWY6IGBodHRwczovL3ZrLmNvbS9zaGFyZS5waHA/dXJsPSR7dXJsfWAsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC92ay5zdmdcIiAvPlxyXG4gICAgfSxcclxuICBdXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNoYXJlfT5cclxuICAgICAge2xpbmtzLm1hcChvYmogPT4gPGEgY2xhc3NOYW1lPXtvYmouY31cclxuICAgICAgICBrZXk9e29iai5ocmVmfVxyXG4gICAgICAgIGhyZWY9e29iai5ocmVmfVxyXG4gICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyXCJcclxuICAgICAgICBvbkNsaWNrPXtvcGVuV2luZG93fT5cclxuICAgICAgICB7b2JqLmljb259XHJcbiAgICAgIDwvYT4pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=