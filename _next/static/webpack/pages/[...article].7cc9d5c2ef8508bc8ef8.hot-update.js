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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    hideC(true);
  }, [slug]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "".concat(_styles_navigation_styl__WEBPACK_IMPORTED_MODULE_4___default.a.block, " ").concat(hide ? _styles_navigation_styl__WEBPACK_IMPORTED_MODULE_4___default.a.hide : ''),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
              name: "regtool.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: '/' + lang + '/',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: " RegTool.net "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), links.map(function (elem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
              name: elem.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: '/' + lang + '/' + (elem.link === '/' ? '' : elem.link),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: [" ", elem["short"], " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this)
          }, elem.link, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: change,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "var/".concat(hide ? 'menu' : 'x', ".svg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 32
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Navigation, "8XhD5h40hvsuaIvFXTm3O/T3AFY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJsaW5rcyIsImxhbmciLCJzbHVnIiwidXNlU3RhdGUiLCJoaWRlIiwiaGlkZUMiLCJ1c2VFZmZlY3QiLCJtcWwiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiZiIsImUiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGFuZ2UiLCJwcmV2IiwicyIsImJsb2NrIiwibWFwIiwiZWxlbSIsImltYWdlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsT0FBMkM7QUFBQTs7QUFBQTs7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZEMsSUFBYyxRQUFkQSxJQUFjO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNsQ0Msc0RBQVEsQ0FBQyxJQUFELENBRDBCO0FBQUEsTUFDakRDLElBRGlEO0FBQUEsTUFDM0NDLEtBRDJDOztBQUV4REMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0Isb0JBQWxCLENBQVY7O0FBQ0EsYUFBU0MsQ0FBVCxDQUFXQyxDQUFYLEVBQWM7QUFDWk4sV0FBSyxDQUFDTSxDQUFDLENBQUNDLE9BQUgsQ0FBTDtBQUNEOztBQUNETCxPQUFHLENBQUNNLGdCQUFKLENBQXFCLFFBQXJCLEVBQStCSCxDQUEvQjtBQUNBLFdBQU87QUFBQSxhQUFNSCxHQUFHLENBQUNPLG1CQUFKLENBQXdCLFFBQXhCLEVBQWtDSixDQUFsQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBUUEsV0FBU0ssTUFBVCxHQUFrQjtBQUNoQlYsU0FBSyxDQUFDLFVBQUFXLElBQUk7QUFBQSxhQUFJLENBQUNBLElBQUw7QUFBQSxLQUFMLENBQUw7QUFDRDs7QUFDRFYseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFNBQUssQ0FBQyxJQUFELENBQUw7QUFDRCxHQUZRLEVBRU4sQ0FBQ0gsSUFBRCxDQUZNLENBQVQ7QUFHQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxZQUFLZSw4REFBQyxDQUFDQyxLQUFQLGNBQWdCZCxJQUFJLEdBQUdhLDhEQUFDLENBQUNiLElBQUwsR0FBWSxFQUFoQyxDQUFkO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUEsbUNBQ0UscUVBQUMsNENBQUQ7QUFBSyxrQkFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUUsTUFBTUgsSUFBTixHQUFhLEdBQXpCO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQVdHRCxLQUFLLENBQUNtQixHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLDRCQUNiO0FBQUEsa0NBQ0U7QUFBQSxtQ0FDRSxxRUFBQyw0Q0FBRDtBQUFLLGtCQUFJLEVBQUVBLElBQUksQ0FBQ0M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUUsTUFBTXBCLElBQU4sR0FBYSxHQUFiLElBQW9CbUIsSUFBSSxDQUFDRSxJQUFMLEtBQWMsR0FBZCxHQUFvQixFQUFwQixHQUF5QkYsSUFBSSxDQUFDRSxJQUFsRCxDQUFaO0FBQUEsbUNBQ0U7QUFBQSw4QkFBS0YsSUFBSSxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQTBFQSxJQUFJLENBQUNFLElBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZCxDQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBdUJFO0FBQVEsYUFBTyxFQUFFUCxNQUFqQjtBQUFBLDZCQUF5QixxRUFBQyw0Q0FBRDtBQUFLLFlBQUksZ0JBQVNYLElBQUksR0FBRyxNQUFILEdBQVksR0FBekI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQSxrQkFERjtBQTJCRDs7R0EzQ3VCTCxVOztLQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS43Y2M5ZDVjMmVmODUwOGJjOGVmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHMgZnJvbSAnLi4vc3R5bGVzL25hdmlnYXRpb24uc3R5bCdcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi9TdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgbGlua3MsIGxhbmcsIHNsdWcgfSkge1xyXG4gIGNvbnN0IFtoaWRlLCBoaWRlQ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDgwMHB4KScpXHJcbiAgICBmdW5jdGlvbiBmKGUpIHtcclxuICAgICAgaGlkZUMoZS5tYXRjaGVzKVxyXG4gICAgfVxyXG4gICAgbXFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGYpXHJcbiAgICByZXR1cm4gKCkgPT4gbXFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGYpXHJcbiAgfSwgW10pXHJcbiAgZnVuY3Rpb24gY2hhbmdlKCkge1xyXG4gICAgaGlkZUMocHJldiA9PiAhcHJldilcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhpZGVDKHRydWUpXHJcbiAgfSwgW3NsdWddKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17YCR7cy5ibG9ja30gJHtoaWRlID8gcy5oaWRlIDogJyd9YH0+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxTdmcgbmFtZT1cInJlZ3Rvb2wuc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJyArIGxhbmcgKyAnLyd9PlxyXG4gICAgICAgICAgICAgIDxhPiBSZWdUb29sLm5ldCA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICB7bGlua3MubWFwKGVsZW0gPT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8U3ZnIG5hbWU9e2VsZW0uaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnLycgKyBsYW5nICsgJy8nICsgKGVsZW0ubGluayA9PT0gJy8nID8gJycgOiBlbGVtLmxpbmspfSBrZXk9e2VsZW0ubGlua30+XHJcbiAgICAgICAgICAgICAgPGE+IHtlbGVtLnNob3J0fSA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y2hhbmdlfT48U3ZnIG5hbWU9e2B2YXIvJHtoaWRlID8gJ21lbnUnIDogJ3gnfS5zdmdgfSAvPjwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=