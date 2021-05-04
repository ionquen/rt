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
    href: "https://twitter.com/intent/tweet?url=".concat(url),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZS5qcyJdLCJuYW1lcyI6WyJTaGFyZSIsImxpbmsiLCJ0aXRsZSIsImxhbmciLCJ1cmwiLCJvcGVuV2luZG93IiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwib3BlbiIsImN1cnJlbnRUYXJnZXQiLCJocmVmIiwibGlua3MiLCJjIiwicyIsImZhY2Vib29rIiwiaWNvbiIsInR3aXR0ZXIiLCJ3aGF0c2FwcCIsInRnIiwidmsiLCJzaGFyZSIsIm1hcCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxPQUFzQztBQUFBOztBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDbkQsTUFBTUMsR0FBRyxpQ0FBMEJELElBQTFCLGNBQWtDRixJQUFJLEtBQUssR0FBVCxHQUFlLEVBQWYsR0FBb0JBLElBQXRELENBQVQ7O0FBQ0EsV0FBU0ksVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFDckJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxVQUFNLENBQUNDLElBQVAsQ0FBWUgsQ0FBQyxDQUFDSSxhQUFGLENBQWdCQyxJQUE1QixFQUFrQ1QsS0FBbEMsRUFBeUMsZ0NBQXpDO0FBQ0Q7O0FBQ0QsTUFBTVUsS0FBSyxHQUFHLENBQ1o7QUFDRUMsS0FBQyxFQUFFQywyREFBQyxDQUFDQyxRQURQO0FBRUVKLFFBQUksMERBQW1EUCxHQUFuRCxDQUZOO0FBR0VZLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQURZLEVBTVo7QUFDRUgsS0FBQyxFQUFFQywyREFBQyxDQUFDRyxPQURQO0FBRUVOLFFBQUksaURBQTBDUCxHQUExQyxDQUZOO0FBR0VZLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQU5ZLEVBV1o7QUFDRUgsS0FBQyxFQUFFQywyREFBQyxDQUFDSSxRQURQO0FBRUVQLFFBQUksaUNBQTBCUCxHQUExQixDQUZOO0FBR0VZLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQVhZLEVBZ0JaO0FBQ0VILEtBQUMsRUFBRUMsMkRBQUMsQ0FBQ0ssRUFEUDtBQUVFUixRQUFJLHVDQUFnQ1AsR0FBaEMsbUJBQTRDRixLQUE1QyxDQUZOO0FBR0VjLFFBQUksZUFBRSxxRUFBQyw0Q0FBRDtBQUFLLFVBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQWhCWSxFQXFCWjtBQUNFSCxLQUFDLEVBQUVDLDJEQUFDLENBQUNNLEVBRFA7QUFFRVQsUUFBSSx5Q0FBa0NQLEdBQWxDLENBRk47QUFHRVksUUFBSSxlQUFFLHFFQUFDLDRDQUFEO0FBQUssVUFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSLEdBckJZLENBQWQ7QUEyQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVGLDJEQUFDLENBQUNPLEtBQWxCO0FBQUEsY0FDR1QsS0FBSyxDQUFDVSxHQUFOLENBQVUsVUFBQUMsR0FBRztBQUFBLDBCQUFJO0FBQUcsaUJBQVMsRUFBRUEsR0FBRyxDQUFDVixDQUFsQjtBQUVoQixZQUFJLEVBQUVVLEdBQUcsQ0FBQ1osSUFGTTtBQUdoQixXQUFHLEVBQUMsbUJBSFk7QUFJaEIsZUFBTyxFQUFFTixVQUpPO0FBQUEsa0JBS2ZrQixHQUFHLENBQUNQO0FBTFcsU0FDWE8sR0FBRyxDQUFDWixJQURPO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDtLQTVDdUJYLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjczMmQ1ZjFjZjczNzAzZjIwYjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcyBmcm9tICcuLi9zdHlsZXMvYXJ0aWNsZS5zdHlsJ1xyXG5pbXBvcnQgU3ZnIGZyb20gJy4vU3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hhcmUoeyBsaW5rLCB0aXRsZSwgbGFuZyB9KSB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vcmVndG9vbC5uZXQvJHtsYW5nfS8ke2xpbmsgPT09ICcvJyA/ICcnIDogbGlua31gXHJcbiAgZnVuY3Rpb24gb3BlbldpbmRvdyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHdpbmRvdy5vcGVuKGUuY3VycmVudFRhcmdldC5ocmVmLCB0aXRsZSwgJ3dpZHRoPTgwMCxoZWlnaHQ9NTAwLHRvb2xiYXI9MScpXHJcbiAgfVxyXG4gIGNvbnN0IGxpbmtzID0gW1xyXG4gICAge1xyXG4gICAgICBjOiBzLmZhY2Vib29rLFxyXG4gICAgICBocmVmOiBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9IyR7dXJsfWAsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC9mYWNlYm9vay5zdmdcIiAvPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYzogcy50d2l0dGVyLFxyXG4gICAgICBocmVmOiBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPSR7dXJsfWAsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC90d2l0dGVyLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLndoYXRzYXBwLFxyXG4gICAgICBocmVmOiBgd2hhdHNhcHA6Ly9zZW5kP3RleHQ9JHt1cmx9YCxcclxuICAgICAgaWNvbjogPFN2ZyBuYW1lPVwic29jaWFsL3doYXRzYXBwLnN2Z1wiIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBjOiBzLnRnLFxyXG4gICAgICBocmVmOiBgaHR0cHM6Ly90Lm1lL3NoYXJlL3VybD91cmw9JHt1cmx9JnRleHQ9JHt0aXRsZX1gLFxyXG4gICAgICBpY29uOiA8U3ZnIG5hbWU9XCJzb2NpYWwvdGcuc3ZnXCIgLz5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGM6IHMudmssXHJcbiAgICAgIGhyZWY6IGBodHRwczovL3ZrLmNvbS9zaGFyZS5waHA/dXJsPSR7dXJsfWAsXHJcbiAgICAgIGljb246IDxTdmcgbmFtZT1cInNvY2lhbC92ay5zdmdcIiAvPlxyXG4gICAgfSxcclxuICBdXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNoYXJlfT5cclxuICAgICAge2xpbmtzLm1hcChvYmogPT4gPGEgY2xhc3NOYW1lPXtvYmouY31cclxuICAgICAgICBrZXk9e29iai5ocmVmfVxyXG4gICAgICAgIGhyZWY9e29iai5ocmVmfVxyXG4gICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyXCJcclxuICAgICAgICBvbkNsaWNrPXtvcGVuV2luZG93fT5cclxuICAgICAgICB7b2JqLmljb259XHJcbiAgICAgIDwvYT4pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=