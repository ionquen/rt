webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");


var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Head.js";

function Layout(_ref) {
  var lang = _ref.lang,
      nav = _ref.nav,
      slug = _ref.slug,
      title = _ref.title,
      description = _ref.description,
      link = _ref.link,
      date = _ref.date;

  function getManifestRel(lang, nav) {
    if (nav !== undefined) return "/manifest/manifest-".concat(lang, "-").concat(nav, ".json");
    return "/manifest/manifest-".concat(lang, ".json");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
      title: title,
      description: description,
      additionalLinkTags: [{
        rel: 'manifest',
        href: getManifestRel(lang, nav ? slug : undefined)
      }],
      openGraph: {
        url: "https://regtool.net/".concat(lang, "/").concat(link === '/' ? '' : link),
        title: title,
        description: description,
        site_name: 'Regtool.net - полезные онлайн инструменты',
        type: "article",
        article: {
          modifiedTime: new Date(date).toISOString()
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
false,

/***/ "./node_modules/react-ga/dist/esm/core.js":
false,

/***/ "./node_modules/react-ga/dist/esm/index.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/redactEmail.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImxhbmciLCJuYXYiLCJzbHVnIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJkYXRlIiwiZ2V0TWFuaWZlc3RSZWwiLCJ1bmRlZmluZWQiLCJyZWwiLCJocmVmIiwidXJsIiwic2l0ZV9uYW1lIiwidHlwZSIsImFydGljbGUiLCJtb2RpZmllZFRpbWUiLCJEYXRlIiwidG9JU09TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR2UsU0FBU0EsTUFBVCxPQUVaO0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDO0FBQUEsTUFES0MsR0FDTCxRQURLQSxHQUNMO0FBQUEsTUFEVUMsSUFDVixRQURVQSxJQUNWO0FBQUEsTUFEZ0JDLEtBQ2hCLFFBRGdCQSxLQUNoQjtBQUFBLE1BRHVCQyxXQUN2QixRQUR1QkEsV0FDdkI7QUFBQSxNQURvQ0MsSUFDcEMsUUFEb0NBLElBQ3BDO0FBQUEsTUFEMENDLElBQzFDLFFBRDBDQSxJQUMxQzs7QUFDRCxXQUFTQyxjQUFULENBQXdCUCxJQUF4QixFQUE4QkMsR0FBOUIsRUFBbUM7QUFDakMsUUFBSUEsR0FBRyxLQUFLTyxTQUFaLEVBQXVCLG9DQUE2QlIsSUFBN0IsY0FBcUNDLEdBQXJDO0FBQ3ZCLHdDQUE2QkQsSUFBN0I7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsV0FBSyxFQUFFRyxLQURUO0FBRUUsaUJBQVcsRUFBRUMsV0FGZjtBQUdFLHdCQUFrQixFQUFFLENBQUM7QUFDbkJLLFdBQUcsRUFBRSxVQURjO0FBRW5CQyxZQUFJLEVBQUVILGNBQWMsQ0FBQ1AsSUFBRCxFQUFPQyxHQUFHLEdBQUdDLElBQUgsR0FBVU0sU0FBcEI7QUFGRCxPQUFELENBSHRCO0FBUUUsZUFBUyxFQUFFO0FBQ1RHLFdBQUcsZ0NBQXlCWCxJQUF6QixjQUFpQ0ssSUFBSSxLQUFLLEdBQVQsR0FBZSxFQUFmLEdBQW9CQSxJQUFyRCxDQURNO0FBRVRGLGFBQUssRUFBRUEsS0FGRTtBQUdUQyxtQkFBVyxFQUFFQSxXQUhKO0FBSVRRLGlCQUFTLEVBQUUsMkNBSkY7QUFLVEMsWUFBSSxFQUFFLFNBTEc7QUFNVEMsZUFBTyxFQUFFO0FBQ1BDLHNCQUFZLEVBQUUsSUFBSUMsSUFBSixDQUFTVixJQUFULEVBQWVXLFdBQWY7QUFEUDtBQU5BO0FBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBdUJEO0tBOUJ1QmxCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjVhZjRhNjMwYzQzZjE1OTA5OWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtcclxuICBsYW5nLCBuYXYsIHNsdWcsIHRpdGxlLCBkZXNjcmlwdGlvbiwgbGluaywgZGF0ZVxyXG59KSB7XHJcbiAgZnVuY3Rpb24gZ2V0TWFuaWZlc3RSZWwobGFuZywgbmF2KSB7XHJcbiAgICBpZiAobmF2ICE9PSB1bmRlZmluZWQpIHJldHVybiBgL21hbmlmZXN0L21hbmlmZXN0LSR7bGFuZ30tJHtuYXZ9Lmpzb25gXHJcbiAgICByZXR1cm4gYC9tYW5pZmVzdC9tYW5pZmVzdC0ke2xhbmd9Lmpzb25gXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dFNlb1xyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgYWRkaXRpb25hbExpbmtUYWdzPXtbe1xyXG4gICAgICAgICAgcmVsOiAnbWFuaWZlc3QnLFxyXG4gICAgICAgICAgaHJlZjogZ2V0TWFuaWZlc3RSZWwobGFuZywgbmF2ID8gc2x1ZyA6IHVuZGVmaW5lZClcclxuICAgICAgICB9XHJcbiAgICAgICAgXX1cclxuICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgIHVybDogYGh0dHBzOi8vcmVndG9vbC5uZXQvJHtsYW5nfS8ke2xpbmsgPT09ICcvJyA/ICcnIDogbGlua31gLFxyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgc2l0ZV9uYW1lOiAnUmVndG9vbC5uZXQgLSDQv9C+0LvQtdC30L3Ri9C1INC+0L3Qu9Cw0LnQvSDQuNC90YHRgtGA0YPQvNC10L3RgtGLJyxcclxuICAgICAgICAgIHR5cGU6IFwiYXJ0aWNsZVwiLFxyXG4gICAgICAgICAgYXJ0aWNsZToge1xyXG4gICAgICAgICAgICBtb2RpZmllZFRpbWU6IG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==