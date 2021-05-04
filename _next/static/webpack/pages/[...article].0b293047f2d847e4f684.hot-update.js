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
    console.log(e);
    window.open(e.currentTarget.href, title, 'width=500,height=500,toolbar=1');
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
      }, obj.href, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZS5qcyJdLCJuYW1lcyI6WyJTaGFyZSIsImxpbmsiLCJ0aXRsZSIsImxhbmciLCJ1cGRhdGVkTGluayIsIm9wZW5XaW5kb3ciLCJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIm9wZW4iLCJjdXJyZW50VGFyZ2V0IiwiaHJlZiIsImxpbmtzIiwiYyIsInMiLCJmYWNlYm9vayIsImljb24iLCJ0d2l0dGVyIiwid2hhdHNhcHAiLCJ0ZyIsInZrIiwic2hhcmUiLCJtYXAiLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ25ELE1BQU1DLFdBQVcsaUNBQTBCRCxJQUExQixjQUFrQ0YsSUFBSSxLQUFLLEdBQVQsR0FBZSxFQUFmLEdBQW9CQSxJQUF0RCxDQUFqQjs7QUFDQSxXQUFTSSxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtBQUNyQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQUcsVUFBTSxDQUFDQyxJQUFQLENBQVlKLENBQUMsQ0FBQ0ssYUFBRixDQUFnQkMsSUFBNUIsRUFBa0NWLEtBQWxDLEVBQXlDLGdDQUF6QztBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQU1XLEtBQUssR0FBRyxDQUNaO0FBQ0VDLEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0MsUUFEUDtBQUVFSixRQUFJLEVBQUUsRUFGUjtBQUdFSyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FEWSxFQU1aO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0csT0FEUDtBQUVFTixRQUFJLEVBQUUsRUFGUjtBQUdFSyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FOWSxFQVdaO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0ksUUFEUDtBQUVFUCxRQUFJLEVBQUUsRUFGUjtBQUdFSyxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FYWSxFQWdCWjtBQUNFSCxLQUFDLEVBQUVDLDJEQUFDLENBQUNLLEVBRFA7QUFFRVIsUUFBSSxFQUFFLEVBRlI7QUFHRUssUUFBSSxlQUFFLHFFQUFDLDRDQUFEO0FBQUssVUFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLEdBaEJZLEVBcUJaO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ00sRUFEUDtBQUVFVCxRQUFJLHlDQUFrQ1IsV0FBbEMsQ0FGTjtBQUdFYSxRQUFJLGVBQUUscUVBQUMsNENBQUQ7QUFBSyxVQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FyQlksQ0FBZDtBQTJCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUYsMkRBQUMsQ0FBQ08sS0FBbEI7QUFBQSxjQUNHVCxLQUFLLENBQUNVLEdBQU4sQ0FBVSxVQUFBQyxHQUFHO0FBQUEsMEJBQUk7QUFBRyxpQkFBUyxFQUFFQSxHQUFHLENBQUNWLENBQWxCO0FBRWhCLFlBQUksRUFBRVUsR0FBRyxDQUFDWixJQUZNO0FBR2hCLFdBQUcsRUFBQyxtQkFIWTtBQUloQixlQUFPLEVBQUVQLFVBSk87QUFBQSxrQkFLZm1CLEdBQUcsQ0FBQ1A7QUFMVyxTQUNYTyxHQUFHLENBQUNaLElBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKO0FBQUEsS0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEO0tBN0N1QlosSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uMGIyOTMwNDdmMmQ4NDdlNGY2ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzIGZyb20gJy4uL3N0eWxlcy9hcnRpY2xlLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi9TdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZSh7IGxpbmssIHRpdGxlLCBsYW5nIH0pIHtcclxuICBjb25zdCB1cGRhdGVkTGluayA9IGBodHRwczovL3JlZ3Rvb2wubmV0LyR7bGFuZ30vJHtsaW5rID09PSAnLycgPyAnJyA6IGxpbmt9YFxyXG4gIGZ1bmN0aW9uIG9wZW5XaW5kb3coZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIHdpbmRvdy5vcGVuKGUuY3VycmVudFRhcmdldC5ocmVmLCB0aXRsZSwgJ3dpZHRoPTUwMCxoZWlnaHQ9NTAwLHRvb2xiYXI9MScpXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgY29uc3QgbGlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIGM6IHMuZmFjZWJvb2ssXHJcbiAgICAgIGhyZWY6IFwiXCIsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC9mYWNlYm9vay5zdmdcIiAvPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYzogcy50d2l0dGVyLFxyXG4gICAgICBocmVmOiBcIlwiLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvdHdpdHRlci5zdmdcIiAvPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYzogcy53aGF0c2FwcCxcclxuICAgICAgaHJlZjogXCJcIixcclxuICAgICAgaWNvbjogPFN2ZyBuYW1lPVwic29jaWFsL3doYXRzYXBwLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLnRnLFxyXG4gICAgICBocmVmOiBcIlwiLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvdGcuc3ZnXCIgLz5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGM6IHMudmssXHJcbiAgICAgIGhyZWY6IGBodHRwczovL3ZrLmNvbS9zaGFyZS5waHA/dXJsPSR7dXBkYXRlZExpbmt9YCxcclxuICAgICAgaWNvbjogPFN2ZyBuYW1lPVwic29jaWFsL3ZrLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gIF1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Muc2hhcmV9PlxyXG4gICAgICB7bGlua3MubWFwKG9iaiA9PiA8YSBjbGFzc05hbWU9e29iai5jfVxyXG4gICAgICAgIGtleT17b2JqLmhyZWZ9XHJcbiAgICAgICAgaHJlZj17b2JqLmhyZWZ9XHJcbiAgICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXJcIlxyXG4gICAgICAgIG9uQ2xpY2s9e29wZW5XaW5kb3d9PlxyXG4gICAgICAgIHtvYmouaWNvbn1cclxuICAgICAgPC9hPil9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==