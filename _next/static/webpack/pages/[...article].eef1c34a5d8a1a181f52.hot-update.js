webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Comments.js":
/*!********************************!*\
  !*** ./components/Comments.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comments; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_comments_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/comments.styl */ "./styles/comments.styl");
/* harmony import */ var _styles_comments_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_comments_styl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! disqus-react */ "./node_modules/disqus-react/lib/index.js");
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Comments.js",
    _s = $RefreshSig$();




function Comments(_ref) {
  _s();

  var _this = this;

  var lang = _ref.lang,
      link = _ref.link,
      desc = _ref.desc,
      slug = _ref.slug;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      block = _useState[0],
      blockC = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      display = _useState2[0],
      displayC = _useState2[1];

  var url = lang + '/' + (slug === 'index' ? '' : slug);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (display) {
      blockC( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(disqus_react__WEBPACK_IMPORTED_MODULE_2__["DiscussionEmbed"], {
        shortname: "regtool",
        config: {
          url: "https://regtool.net/".concat(url),
          identifier: url,
          language: lang
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 14
      }, _this));
    }
  }, [lang, slug]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function scrollE(e) {
      console.log(e);

      if (e) {
        displayC(true);
        remove();
      }
    }

    document.addEventListener('scroll', scrollE);

    function remove() {
      try {
        document.removeEventListener('scroll', scrollE);
      } catch (_unused) {}
    }

    return function () {
      return remove();
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_comments_styl__WEBPACK_IMPORTED_MODULE_1___default.a.comments,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: desc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, this), block]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 10
  }, this);
}

_s(Comments, "gQ3mYYF4u9GitmCtoc1KMdX6WPo=");

_c = Comments;

var _c;

$RefreshReg$(_c, "Comments");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJDb21tZW50cyIsImxhbmciLCJsaW5rIiwiZGVzYyIsInNsdWciLCJ1c2VTdGF0ZSIsImJsb2NrIiwiYmxvY2tDIiwiZGlzcGxheSIsImRpc3BsYXlDIiwidXJsIiwidXNlRWZmZWN0IiwiaWRlbnRpZmllciIsImxhbmd1YWdlIiwic2Nyb2xsRSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInMiLCJjb21tZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FBOEM7QUFBQTs7QUFBQTs7QUFBQSxNQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDbkNDLHNEQUFRLENBQUMsSUFBRCxDQUQyQjtBQUFBLE1BQ3BEQyxLQURvRDtBQUFBLE1BQzdDQyxNQUQ2Qzs7QUFBQSxtQkFFL0JGLHNEQUFRLENBQUMsS0FBRCxDQUZ1QjtBQUFBLE1BRXBERyxPQUZvRDtBQUFBLE1BRTNDQyxRQUYyQzs7QUFHM0QsTUFBTUMsR0FBRyxHQUFHVCxJQUFJLEdBQUcsR0FBUCxJQUFjRyxJQUFJLEtBQUssT0FBVCxHQUFtQixFQUFuQixHQUF3QkEsSUFBdEMsQ0FBWjtBQUNBTyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSCxPQUFKLEVBQWE7QUFDWEQsWUFBTSxlQUFDLHFFQUFDLDREQUFEO0FBQ0wsaUJBQVMsRUFBQyxTQURMO0FBRUwsY0FBTSxFQUNKO0FBQ0VHLGFBQUcsZ0NBQXlCQSxHQUF6QixDQURMO0FBRUVFLG9CQUFVLEVBQUVGLEdBRmQ7QUFHRUcsa0JBQVEsRUFBRVo7QUFIWjtBQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBRCxDQUFOO0FBU0Q7QUFDRixHQVpRLEVBWU4sQ0FBQ0EsSUFBRCxFQUFPRyxJQUFQLENBWk0sQ0FBVDtBQWFBTyx5REFBUyxDQUFDLFlBQU07QUFDZCxhQUFTRyxPQUFULENBQWlCQyxDQUFqQixFQUFvQjtBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7O0FBQ0EsVUFBSUEsQ0FBSixFQUFPO0FBQ0xOLGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FTLGNBQU07QUFDUDtBQUNGOztBQUNEQyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DTixPQUFwQzs7QUFDQSxhQUFTSSxNQUFULEdBQWtCO0FBQ2hCLFVBQUk7QUFBRUMsZ0JBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNQLE9BQXZDO0FBQWlELE9BQXZELENBQXdELGdCQUFNLENBQUc7QUFDbEU7O0FBQ0QsV0FBTztBQUFBLGFBQU1JLE1BQU0sRUFBWjtBQUFBLEtBQVA7QUFDRCxHQWJRLEVBYU4sRUFiTSxDQUFUO0FBY0Esc0JBQU87QUFBSyxhQUFTLEVBQUVJLDREQUFDLENBQUNDLFFBQWxCO0FBQUEsNEJBQ0w7QUFBQSxnQkFBTXBCO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLEVBRUpHLEtBRkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLRDs7R0FwQ3VCTixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS5lZWYxYzM0YTVkOGExYTE4MWY1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHMgZnJvbSAnLi4vc3R5bGVzL2NvbW1lbnRzLnN0eWwnXHJcbmltcG9ydCB7IERpc2N1c3Npb25FbWJlZCB9IGZyb20gJ2Rpc3F1cy1yZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudHMoeyBsYW5nLCBsaW5rLCBkZXNjLCBzbHVnIH0pIHtcclxuICBjb25zdCBbYmxvY2ssIGJsb2NrQ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtkaXNwbGF5LCBkaXNwbGF5Q10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB1cmwgPSBsYW5nICsgJy8nICsgKHNsdWcgPT09ICdpbmRleCcgPyAnJyA6IHNsdWcpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkaXNwbGF5KSB7XHJcbiAgICAgIGJsb2NrQyg8RGlzY3Vzc2lvbkVtYmVkXHJcbiAgICAgICAgc2hvcnRuYW1lPSdyZWd0b29sJ1xyXG4gICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogYGh0dHBzOi8vcmVndG9vbC5uZXQvJHt1cmx9YCxcclxuICAgICAgICAgICAgaWRlbnRpZmllcjogdXJsLFxyXG4gICAgICAgICAgICBsYW5ndWFnZTogbGFuZ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gLz4pXHJcbiAgICB9XHJcbiAgfSwgW2xhbmcsIHNsdWddKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxFKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgaWYgKGUpIHtcclxuICAgICAgICBkaXNwbGF5Qyh0cnVlKVxyXG4gICAgICAgIHJlbW92ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEUpXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHRyeSB7IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEUpIH0gY2F0Y2ggeyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gcmVtb3ZlKClcclxuICB9LCBbXSlcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuY29tbWVudHN9PlxyXG4gICAgPGRpdj57ZGVzY308L2Rpdj5cclxuICAgIHtibG9ja31cclxuXHJcbiAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9