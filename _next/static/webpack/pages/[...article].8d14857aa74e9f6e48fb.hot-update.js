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

    body.addEventListener('scroll', scrollE);

    function remove() {
      try {
        body.removeEventListener('scroll', scrollE);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50cy5qcyJdLCJuYW1lcyI6WyJDb21tZW50cyIsImxhbmciLCJsaW5rIiwiZGVzYyIsInNsdWciLCJ1c2VTdGF0ZSIsImJsb2NrIiwiYmxvY2tDIiwiZGlzcGxheSIsImRpc3BsYXlDIiwidXJsIiwidXNlRWZmZWN0IiwiaWRlbnRpZmllciIsImxhbmd1YWdlIiwic2Nyb2xsRSIsImUiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicyIsImNvbW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUE4QztBQUFBOztBQUFBOztBQUFBLE1BQTFCQyxJQUEwQixRQUExQkEsSUFBMEI7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsSUFBYyxRQUFkQSxJQUFjO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNuQ0Msc0RBQVEsQ0FBQyxJQUFELENBRDJCO0FBQUEsTUFDcERDLEtBRG9EO0FBQUEsTUFDN0NDLE1BRDZDOztBQUFBLG1CQUUvQkYsc0RBQVEsQ0FBQyxLQUFELENBRnVCO0FBQUEsTUFFcERHLE9BRm9EO0FBQUEsTUFFM0NDLFFBRjJDOztBQUczRCxNQUFNQyxHQUFHLEdBQUdULElBQUksR0FBRyxHQUFQLElBQWNHLElBQUksS0FBSyxPQUFULEdBQW1CLEVBQW5CLEdBQXdCQSxJQUF0QyxDQUFaO0FBQ0FPLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlILE9BQUosRUFBYTtBQUNYRCxZQUFNLGVBQUMscUVBQUMsNERBQUQ7QUFDTCxpQkFBUyxFQUFDLFNBREw7QUFFTCxjQUFNLEVBQ0o7QUFDRUcsYUFBRyxnQ0FBeUJBLEdBQXpCLENBREw7QUFFRUUsb0JBQVUsRUFBRUYsR0FGZDtBQUdFRyxrQkFBUSxFQUFFWjtBQUhaO0FBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELENBQU47QUFTRDtBQUNGLEdBWlEsRUFZTixDQUFDQSxJQUFELEVBQU9HLElBQVAsQ0FaTSxDQUFUO0FBYUFPLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNHLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjs7QUFDQSxVQUFJQSxDQUFKLEVBQU87QUFDTE4sZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDQVMsY0FBTTtBQUNQO0FBQ0Y7O0FBQ0RDLFFBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0NOLE9BQWhDOztBQUNBLGFBQVNJLE1BQVQsR0FBa0I7QUFDaEIsVUFBSTtBQUFFQyxZQUFJLENBQUNFLG1CQUFMLENBQXlCLFFBQXpCLEVBQW1DUCxPQUFuQztBQUE2QyxPQUFuRCxDQUFvRCxnQkFBTSxDQUFHO0FBQzlEOztBQUNELFdBQU87QUFBQSxhQUFNSSxNQUFNLEVBQVo7QUFBQSxLQUFQO0FBQ0QsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWNBLHNCQUFPO0FBQUssYUFBUyxFQUFFSSw0REFBQyxDQUFDQyxRQUFsQjtBQUFBLDRCQUNMO0FBQUEsZ0JBQU1wQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxFQUVKRyxLQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBS0Q7O0dBcEN1Qk4sUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uOGQxNDg1N2FhNzRlOWY2ZTQ4ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzIGZyb20gJy4uL3N0eWxlcy9jb21tZW50cy5zdHlsJ1xyXG5pbXBvcnQgeyBEaXNjdXNzaW9uRW1iZWQgfSBmcm9tICdkaXNxdXMtcmVhY3QnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHsgbGFuZywgbGluaywgZGVzYywgc2x1ZyB9KSB7XHJcbiAgY29uc3QgW2Jsb2NrLCBibG9ja0NdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZGlzcGxheSwgZGlzcGxheUNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgdXJsID0gbGFuZyArICcvJyArIChzbHVnID09PSAnaW5kZXgnID8gJycgOiBzbHVnKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGlzcGxheSkge1xyXG4gICAgICBibG9ja0MoPERpc2N1c3Npb25FbWJlZFxyXG4gICAgICAgIHNob3J0bmFtZT0ncmVndG9vbCdcclxuICAgICAgICBjb25maWc9e1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IGBodHRwczovL3JlZ3Rvb2wubmV0LyR7dXJsfWAsXHJcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IHVybCxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IGxhbmdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IC8+KVxyXG4gICAgfVxyXG4gIH0sIFtsYW5nLCBzbHVnXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gc2Nyb2xsRShlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgZGlzcGxheUModHJ1ZSlcclxuICAgICAgICByZW1vdmUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEUpXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHRyeSB7IGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsRSkgfSBjYXRjaCB7IH1cclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiByZW1vdmUoKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5jb21tZW50c30+XHJcbiAgICA8ZGl2PntkZXNjfTwvZGl2PlxyXG4gICAge2Jsb2NrfVxyXG5cclxuICA8L2Rpdj5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=