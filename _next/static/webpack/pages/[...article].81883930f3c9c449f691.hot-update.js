webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Recommendation.js":
/*!**************************************!*\
  !*** ./components/Recommendation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recommendation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_article_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/article.styl */ "./styles/article.styl");
/* harmony import */ var _styles_article_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_article_styl__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Recommendation.js";




function Recommendation(_ref) {
  var _this = this;

  var linksNews = _ref.linksNews,
      linksArticles = _ref.linksArticles,
      lang = _ref.lang;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
    className: _styles_article_styl__WEBPACK_IMPORTED_MODULE_4___default.a.recomendation,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "\u041D\u0435\u0434\u0430\u0432\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: linksNews.map(function (_ref2) {
          var link = _ref2.link,
              title = _ref2.title;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: '/' + lang + '/' + (link === '/' ? '' : link),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: [" ", title, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, _this)
          }, link, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), linksArticles === null ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "\u0412\u0430\u043C \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: linksArticles.map(function (_ref3) {
          var link = _ref3.link,
              title = _ref3.title;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: '/' + lang + '/' + (link === '/' ? '' : link),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: [" ", title, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, _this)
          }, link, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = Recommendation;

var _c;

$RefreshReg$(_c, "Recommendation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWNvbW1lbmRhdGlvbiIsImxpbmtzTmV3cyIsImxpbmtzQXJ0aWNsZXMiLCJsYW5nIiwicyIsInJlY29tZW5kYXRpb24iLCJtYXAiLCJsaW5rIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxPQUE0RDtBQUFBOztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsYUFBdUIsUUFBdkJBLGFBQXVCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3pFLHNCQUNFO0FBQU8sYUFBUyxFQUFFQywyREFBQyxDQUFDQyxhQUFwQjtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQ0dKLFNBQVMsQ0FBQ0ssR0FBVixDQUFjO0FBQUEsY0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsY0FBU0MsS0FBVCxTQUFTQSxLQUFUO0FBQUEsOEJBQ2IscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFLE1BQU1MLElBQU4sR0FBYSxHQUFiLElBQW9CSSxJQUFJLEtBQUssR0FBVCxHQUFlLEVBQWYsR0FBb0JBLElBQXhDLENBQVo7QUFBQSxtQ0FDRTtBQUFBLDhCQUFLQyxLQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQWdFRCxJQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURhO0FBQUEsU0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQVdHTCxhQUFhLEtBQUssSUFBbEIsR0FBeUIsSUFBekIsZ0JBQ0M7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFDR0EsYUFBYSxDQUFDSSxHQUFkLENBQWtCO0FBQUEsY0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsY0FBU0MsS0FBVCxTQUFTQSxLQUFUO0FBQUEsOEJBQ2pCLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRSxNQUFNTCxJQUFOLEdBQWEsR0FBYixJQUFvQkksSUFBSSxLQUFLLEdBQVQsR0FBZSxFQUFmLEdBQW9CQSxJQUF4QyxDQUFaO0FBQUEsbUNBQ0U7QUFBQSw4QkFBS0MsS0FBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFnRUQsSUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFsQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDtLQTNCdUJQLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjgxODgzOTMwZjNjOWM0NDlmNjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHMgZnJvbSAnLi4vc3R5bGVzL2FydGljbGUuc3R5bCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY29tbWVuZGF0aW9uKHsgbGlua3NOZXdzLCBsaW5rc0FydGljbGVzLCBsYW5nIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFzaWRlIGNsYXNzTmFtZT17cy5yZWNvbWVuZGF0aW9ufT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PtCd0LXQtNCw0LLQvdC+INC00L7QsdCw0LLQu9C10L3QvjwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7bGlua3NOZXdzLm1hcCgoeyBsaW5rLCB0aXRsZSB9KSA9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnLycgKyBsYW5nICsgJy8nICsgKGxpbmsgPT09ICcvJyA/ICcnIDogbGluayl9IGtleT17bGlua30+XHJcbiAgICAgICAgICAgICAgPGE+IHt0aXRsZX0gPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2xpbmtzQXJ0aWNsZXMgPT09IG51bGwgPyBudWxsIDpcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj7QktCw0Lwg0LzQvtC20LXRgiDQsdGL0YLRjCDQuNC90YLQtdGA0LXRgdC90L48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsaW5rc0FydGljbGVzLm1hcCgoeyBsaW5rLCB0aXRsZSB9KSA9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJyArIGxhbmcgKyAnLycgKyAobGluayA9PT0gJy8nID8gJycgOiBsaW5rKX0ga2V5PXtsaW5rfT5cclxuICAgICAgICAgICAgICAgIDxhPiB7dGl0bGV9IDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC9hc2lkZT5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==