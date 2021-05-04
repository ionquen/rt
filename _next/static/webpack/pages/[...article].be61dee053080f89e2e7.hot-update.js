webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_navigation_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/navigation.styl */ "./styles/navigation.styl");
/* harmony import */ var _styles_navigation_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_navigation_styl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Svg */ "./components/Svg.js");



var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Navigation.js",
    _s = $RefreshSig$();







function Navigation(_ref) {
  _s();

  var _this = this;

  var links = _ref.links,
      lang = _ref.lang,
      slug = _ref.slug;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      hide = _useState[0],
      hideC = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var mql = window.matchMedia('(max-width: 800px)');

    function f(e) {
      hideC(e.matches);
    }

    mql.addEventListener('change', f);
    return function () {
      return mql.removeEventListener('change', f);
    };
  }, []);

  function change() {
    hideC(function (prev) {
      return !prev;
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "".concat(_styles_navigation_styl__WEBPACK_IMPORTED_MODULE_4___default.a.block, " ").concat(hide ? _styles_navigation_styl__WEBPACK_IMPORTED_MODULE_4___default.a.hide : ''),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: lang + '/' + (link === '/' ? '' : link),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
              name: "regtool.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "RegTool.net"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 18
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), links.map(function (elem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: lang + '/' + (elem.link === '/' ? '' : elem.link),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "".concat(slug === elem.slug ? _styles_navigation_styl__WEBPACK_IMPORTED_MODULE_4___default.a.openedPage : ''),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
                name: elem.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 20
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: elem["short"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 20
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this)
        }, elem.link, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: change,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "var/".concat(hide ? 'menu' : 'x', ".svg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 32
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Navigation, "kKh+pMg+dkz9EBYq7Ke75UDkPQw=");

_c = Navigation;

var _c;

$RefreshReg$(_c, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJsaW5rcyIsImxhbmciLCJzbHVnIiwidXNlU3RhdGUiLCJoaWRlIiwiaGlkZUMiLCJ1c2VFZmZlY3QiLCJtcWwiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiZiIsImUiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGFuZ2UiLCJwcmV2IiwicyIsImJsb2NrIiwibGluayIsIm1hcCIsImVsZW0iLCJvcGVuZWRQYWdlIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQTJDO0FBQUE7O0FBQUE7O0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDbENDLHNEQUFRLENBQUMsSUFBRCxDQUQwQjtBQUFBLE1BQ2pEQyxJQURpRDtBQUFBLE1BQzNDQyxLQUQyQzs7QUFFeERDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxVQUFQLENBQWtCLG9CQUFsQixDQUFWOztBQUNBLGFBQVNDLENBQVQsQ0FBV0MsQ0FBWCxFQUFjO0FBQ1pOLFdBQUssQ0FBQ00sQ0FBQyxDQUFDQyxPQUFILENBQUw7QUFDRDs7QUFDREwsT0FBRyxDQUFDTSxnQkFBSixDQUFxQixRQUFyQixFQUErQkgsQ0FBL0I7QUFDQSxXQUFPO0FBQUEsYUFBTUgsR0FBRyxDQUFDTyxtQkFBSixDQUF3QixRQUF4QixFQUFrQ0osQ0FBbEMsQ0FBTjtBQUFBLEtBQVA7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVFBLFdBQVNLLE1BQVQsR0FBa0I7QUFDaEJWLFNBQUssQ0FBQyxVQUFBVyxJQUFJO0FBQUEsYUFBSSxDQUFDQSxJQUFMO0FBQUEsS0FBTCxDQUFMO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsWUFBS0MsOERBQUMsQ0FBQ0MsS0FBUCxjQUFnQmQsSUFBSSxHQUFHYSw4REFBQyxDQUFDYixJQUFMLEdBQVksRUFBaEMsQ0FBZDtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFSCxJQUFJLEdBQUcsR0FBUCxJQUFja0IsSUFBSSxLQUFLLEdBQVQsR0FBZSxFQUFmLEdBQW9CQSxJQUFsQyxDQUFaO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUFBLG1DQUNFLHFFQUFDLDRDQUFEO0FBQUssa0JBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBQSxtQ0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBU0duQixLQUFLLENBQUNvQixHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLDRCQUNiLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFcEIsSUFBSSxHQUFHLEdBQVAsSUFBY29CLElBQUksQ0FBQ0YsSUFBTCxLQUFjLEdBQWQsR0FBb0IsRUFBcEIsR0FBeUJFLElBQUksQ0FBQ0YsSUFBNUMsQ0FBWjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsWUFBS2pCLElBQUksS0FBS21CLElBQUksQ0FBQ25CLElBQWQsR0FBcUJlLDhEQUFDLENBQUNLLFVBQXZCLEdBQW9DLEVBQXpDLENBQVo7QUFBQSxvQ0FDRTtBQUFBLHFDQUFLLHFFQUFDLDRDQUFEO0FBQUssb0JBQUksRUFBRUQsSUFBSSxDQUFDRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUdFO0FBQUEscUNBQUs7QUFBQSwwQkFBT0YsSUFBSTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQW9FQSxJQUFJLENBQUNGLElBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkLENBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFvQkU7QUFBUSxhQUFPLEVBQUVKLE1BQWpCO0FBQUEsNkJBQXlCLHFFQUFDLDRDQUFEO0FBQUssWUFBSSxnQkFBU1gsSUFBSSxHQUFHLE1BQUgsR0FBWSxHQUF6QjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBLGtCQURGO0FBd0JEOztHQXJDdUJMLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLmJlNjFkZWUwNTMwODBmODllMmU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcyBmcm9tICcuLi9zdHlsZXMvbmF2aWdhdGlvbi5zdHlsJ1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuL1N2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oeyBsaW5rcywgbGFuZywgc2x1ZyB9KSB7XHJcbiAgY29uc3QgW2hpZGUsIGhpZGVDXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogODAwcHgpJylcclxuICAgIGZ1bmN0aW9uIGYoZSkge1xyXG4gICAgICBoaWRlQyhlLm1hdGNoZXMpXHJcbiAgICB9XHJcbiAgICBtcWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZilcclxuICAgIHJldHVybiAoKSA9PiBtcWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZilcclxuICB9LCBbXSlcclxuICBmdW5jdGlvbiBjaGFuZ2UoKSB7XHJcbiAgICBoaWRlQyhwcmV2ID0+ICFwcmV2KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake3MuYmxvY2t9ICR7aGlkZSA/IHMuaGlkZSA6ICcnfWB9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xhbmcgKyAnLycgKyAobGluayA9PT0gJy8nID8gJycgOiBsaW5rKX0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8U3ZnIG5hbWU9XCJyZWd0b29sLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxzcGFuPlJlZ1Rvb2wubmV0PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7bGlua3MubWFwKGVsZW0gPT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2xhbmcgKyAnLycgKyAoZWxlbS5saW5rID09PSAnLycgPyAnJyA6IGVsZW0ubGluayl9IGtleT17ZWxlbS5saW5rfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtzbHVnID09PSBlbGVtLnNsdWcgPyBzLm9wZW5lZFBhZ2UgOiAnJ31gfT5cclxuICAgICAgICAgICAgICA8ZGl2PjxTdmcgbmFtZT17ZWxlbS5pbWFnZX0gLz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj48c3Bhbj57ZWxlbS5zaG9ydH08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjaGFuZ2V9PjxTdmcgbmFtZT17YHZhci8ke2hpZGUgPyAnbWVudScgOiAneCd9LnN2Z2B9IC8+PC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==