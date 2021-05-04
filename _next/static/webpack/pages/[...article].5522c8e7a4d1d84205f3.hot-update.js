webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_Calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/Calc */ "./components/tools/Calc.js");
/* harmony import */ var _tools_Transfer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/Transfer */ "./components/tools/Transfer.js");
/* harmony import */ var _tools_Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/Timer */ "./components/tools/Timer.js");
/* harmony import */ var _tools_Screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/Screen */ "./components/tools/Screen.js");
/* harmony import */ var _tools_Stopwatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/Stopwatch */ "./components/tools/Stopwatch.js");
/* harmony import */ var _tools_Metronom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/Metronom */ "./components/tools/Metronom.js");
/* harmony import */ var _Remark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Remark */ "./components/Remark.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var _Recommendation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Recommendation */ "./components/Recommendation.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Comments */ "./components/Comments.js");
/* harmony import */ var _Share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Share */ "./components/Share.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Tooltip */ "./components/Tooltip.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/layout.styl */ "./styles/layout.styl");
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_styl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_article_styl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/article.styl */ "./styles/article.styl");
/* harmony import */ var _styles_article_styl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_article_styl__WEBPACK_IMPORTED_MODULE_16__);


var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Layout.js";
















function Layout(_ref) {
  var _this = this;

  var page = _ref.page,
      links = _ref.links,
      lang = _ref.lang;
  var nav = page.nav,
      slug = page.slug,
      title = page.title,
      content = page.content,
      description = page.description,
      props = page.props,
      global = page.global,
      job = page.job,
      link = page.link;

  var getLayout = function getLayout() {
    switch (slug) {
      case 'calc':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Calc__WEBPACK_IMPORTED_MODULE_1__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 27
        }, _this);

      case 'transfer':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Transfer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 31
        }, _this);

      case 'screen':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Screen__WEBPACK_IMPORTED_MODULE_4__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 29
        }, _this);

      case 'stopwatch':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Stopwatch__WEBPACK_IMPORTED_MODULE_5__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 32
        }, _this);

      case 'timer':
      case 'alarm':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Timer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 28
        }, _this);

      case 'metronom':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Metronom__WEBPACK_IMPORTED_MODULE_6__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 31
        }, _this);

      default:
        return;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Head__WEBPACK_IMPORTED_MODULE_13__["default"], {
      lang: lang,
      nav: nav,
      slug: slug,
      title: title,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
      links: links.tools,
      lang: lang,
      slug: slug
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layout_styl__WEBPACK_IMPORTED_MODULE_15___default.a.layout,
      children: [getLayout(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_article_styl__WEBPACK_IMPORTED_MODULE_16___default.a.article,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                  children: "23.03.2022"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Share__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  link: link,
                  title: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Remark__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  content: content,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recommendation__WEBPACK_IMPORTED_MODULE_9__["default"], {
              linksArticles: links.articles,
              linksNews: links.news
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Comments__WEBPACK_IMPORTED_MODULE_10__["default"], {
            desc: global.comments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        links: links.footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicGFnZSIsImxpbmtzIiwibGFuZyIsIm5hdiIsInNsdWciLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwiZ2xvYmFsIiwiam9iIiwibGluayIsImdldExheW91dCIsInRvb2xzIiwic2wiLCJsYXlvdXQiLCJzYSIsImFydGljbGUiLCJhcnRpY2xlcyIsIm5ld3MiLCJjb21tZW50cyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FFWjtBQUFBOztBQUFBLE1BRERDLElBQ0MsUUFEREEsSUFDQztBQUFBLE1BREtDLEtBQ0wsUUFES0EsS0FDTDtBQUFBLE1BRFlDLElBQ1osUUFEWUEsSUFDWjtBQUFBLE1BQ09DLEdBRFAsR0FDNEVILElBRDVFLENBQ09HLEdBRFA7QUFBQSxNQUNZQyxJQURaLEdBQzRFSixJQUQ1RSxDQUNZSSxJQURaO0FBQUEsTUFDa0JDLEtBRGxCLEdBQzRFTCxJQUQ1RSxDQUNrQkssS0FEbEI7QUFBQSxNQUN5QkMsT0FEekIsR0FDNEVOLElBRDVFLENBQ3lCTSxPQUR6QjtBQUFBLE1BQ2tDQyxXQURsQyxHQUM0RVAsSUFENUUsQ0FDa0NPLFdBRGxDO0FBQUEsTUFDK0NDLEtBRC9DLEdBQzRFUixJQUQ1RSxDQUMrQ1EsS0FEL0M7QUFBQSxNQUNzREMsTUFEdEQsR0FDNEVULElBRDVFLENBQ3NEUyxNQUR0RDtBQUFBLE1BQzhEQyxHQUQ5RCxHQUM0RVYsSUFENUUsQ0FDOERVLEdBRDlEO0FBQUEsTUFDbUVDLElBRG5FLEdBQzRFWCxJQUQ1RSxDQUNtRVcsSUFEbkU7O0FBRUQsTUFB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QTtBQUFBO0FBQUEsWUFIRixlQXlCRSxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUEsa0JBREY7QUE2QkQ7S0E3Q3VCdEIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uNTUyMmM4ZTdhNGQxZDg0MjA1ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjIGZyb20gJy4vdG9vbHMvQ2FsYydcclxuaW1wb3J0IFRyYW5zZmVyIGZyb20gJy4vdG9vbHMvVHJhbnNmZXInXHJcbmltcG9ydCBUaW1lciBmcm9tICcuL3Rvb2xzL1RpbWVyJ1xyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vdG9vbHMvU2NyZWVuJ1xyXG5pbXBvcnQgU3RvcHdhdGNoIGZyb20gJy4vdG9vbHMvU3RvcHdhdGNoJ1xyXG5pbXBvcnQgTWV0cm9ub20gZnJvbSAnLi90b29scy9NZXRyb25vbSdcclxuXHJcbmltcG9ydCBSZW1hcmsgZnJvbSAnLi9SZW1hcmsnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcclxuaW1wb3J0IFJlY29tbWVuZGF0aW9uIGZyb20gJy4vUmVjb21tZW5kYXRpb24nXHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJ1xyXG5pbXBvcnQgU2hhcmUgZnJvbSAnLi9TaGFyZSdcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuL0hlYWQnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcblxyXG5pbXBvcnQgc2wgZnJvbSAnLi4vc3R5bGVzL2xheW91dC5zdHlsJ1xyXG5pbXBvcnQgc2EgZnJvbSAnLi4vc3R5bGVzL2FydGljbGUuc3R5bCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XHJcbiAgcGFnZSwgbGlua3MsIGxhbmdcclxufSkge1xyXG4gIGNvbnN0IHsgbmF2LCBzbHVnLCB0aXRsZSwgY29udGVudCwgZGVzY3JpcHRpb24sIHByb3BzLCBnbG9iYWwsIGpvYiwgbGluayB9ID0gcGFnZVxyXG4gIGNvbnN0IGdldExheW91dCA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoc2x1Zykge1xyXG4gICAgICBjYXNlICdjYWxjJzogcmV0dXJuIDxDYWxjIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAndHJhbnNmZXInOiByZXR1cm4gPFRyYW5zZmVyIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAnc2NyZWVuJzogcmV0dXJuIDxTY3JlZW4gcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICdzdG9wd2F0Y2gnOiByZXR1cm4gPFN0b3B3YXRjaCBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3RpbWVyJzpcclxuICAgICAgY2FzZSAnYWxhcm0nOiByZXR1cm4gPFRpbWVyIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAnbWV0cm9ub20nOiByZXR1cm4gPE1ldHJvbm9tIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgZGVmYXVsdDogcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZCBsYW5nPXtsYW5nfSBuYXY9e25hdn0gc2x1Zz17c2x1Z30gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDxOYXZpZ2F0aW9uIGxpbmtzPXtsaW5rcy50b29sc30gbGFuZz17bGFuZ30gc2x1Zz17c2x1Z30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3NsLmxheW91dH0+XHJcbiAgICAgICAge2dldExheW91dCgpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzYS5hcnRpY2xlfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHRpbWU+MjMuMDMuMjAyMjwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFNoYXJlIGxpbms9e2xpbmt9IHRpdGxlPXt0aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPFJlbWFyayBjb250ZW50PXtjb250ZW50fSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFJlY29tbWVuZGF0aW9uIGxpbmtzQXJ0aWNsZXM9e2xpbmtzLmFydGljbGVzfSBsaW5rc05ld3M9e2xpbmtzLm5ld3N9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q29tbWVudHMgZGVzYz17Z2xvYmFsLmNvbW1lbnRzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciBsaW5rcz17bGlua3MuZm9vdGVyfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvb2x0aXAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9