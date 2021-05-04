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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);



var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Layout.js",
    _s = $RefreshSig$();


















function Layout(_ref) {
  _s();

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
      link = page.link,
      date = page.date;

  var getLayout = function getLayout() {
    switch (slug) {
      case 'calc':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Calc__WEBPACK_IMPORTED_MODULE_1__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 27
        }, _this);

      case 'transfer':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Transfer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 31
        }, _this);

      case 'screen':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Screen__WEBPACK_IMPORTED_MODULE_4__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 29
        }, _this);

      case 'stopwatch':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Stopwatch__WEBPACK_IMPORTED_MODULE_5__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 32
        }, _this);

      case 'timer':
      case 'alarm':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Timer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 28
        }, _this);

      case 'metronom':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Metronom__WEBPACK_IMPORTED_MODULE_6__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 31
        }, _this);

      default:
        return;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_17__["useEffect"])(function () {
    disqus_config = function disqus_config() {
      this.page.url = lang + (link === '/' ? '' : link);
      this.page.identifier = lang + (link === '/' ? '' : link);
    };
  }, [link, lang]);
  var dateStr = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    day: "numeric",
    month: "long"
  });
  var dateIso = new Date(date).toISOString();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Head__WEBPACK_IMPORTED_MODULE_13__["default"], {
      lang: lang,
      nav: nav,
      slug: slug,
      title: title,
      description: description,
      link: link,
      date: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
      links: links.tools,
      lang: lang,
      slug: slug
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layout_styl__WEBPACK_IMPORTED_MODULE_15___default.a.layout,
      children: [getLayout(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_article_styl__WEBPACK_IMPORTED_MODULE_16___default.a.article,
        itemScope: true,
        itemType: "http://schema.org/Article",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  itemProp: "headline",
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                  itemProp: "dateModified",
                  dateTime: dateIso,
                  children: dateStr
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Share__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  link: link,
                  title: title,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Remark__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  content: content,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recommendation__WEBPACK_IMPORTED_MODULE_9__["default"], {
              linksArticles: links.articles,
              linksNews: links.news
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Comments__WEBPACK_IMPORTED_MODULE_10__["default"], {
            desc: global.comments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        links: links.footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Layout, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicGFnZSIsImxpbmtzIiwibGFuZyIsIm5hdiIsInNsdWciLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwiZ2xvYmFsIiwiam9iIiwibGluayIsImRhdGUiLCJnZXRMYXlvdXQiLCJ1c2VFZmZlY3QiLCJkaXNxdXNfY29uZmlnIiwidXJsIiwiaWRlbnRpZmllciIsImRhdGVTdHIiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidW5kZWZpbmVkIiwieWVhciIsImRheSIsIm1vbnRoIiwiZGF0ZUlzbyIsInRvSVNPU3RyaW5nIiwidG9vbHMiLCJzbCIsImxheW91dCIsInNhIiwiYXJ0aWNsZSIsImFydGljbGVzIiwibmV3cyIsImNvbW1lbnRzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FFWjtBQUFBOztBQUFBOztBQUFBLE1BRERDLElBQ0MsUUFEREEsSUFDQztBQUFBLE1BREtDLEtBQ0wsUUFES0EsS0FDTDtBQUFBLE1BRFlDLElBQ1osUUFEWUEsSUFDWjtBQUFBLE1BQ09DLEdBRFAsR0FDa0ZILElBRGxGLENBQ09HLEdBRFA7QUFBQSxNQUNZQyxJQURaLEdBQ2tGSixJQURsRixDQUNZSSxJQURaO0FBQUEsTUFDa0JDLEtBRGxCLEdBQ2tGTCxJQURsRixDQUNrQkssS0FEbEI7QUFBQSxNQUN5QkMsT0FEekIsR0FDa0ZOLElBRGxGLENBQ3lCTSxPQUR6QjtBQUFBLE1BQ2tDQyxXQURsQyxHQUNrRlAsSUFEbEYsQ0FDa0NPLFdBRGxDO0FBQUEsTUFDK0NDLEtBRC9DLEdB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QTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBeUJFLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQSxrQkFERjtBQTZCRDs7R0F0RHVCcEMsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uNjdiZDBlODRjZGFjOGQ2YmIyMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjIGZyb20gJy4vdG9vbHMvQ2FsYydcclxuaW1wb3J0IFRyYW5zZmVyIGZyb20gJy4vdG9vbHMvVHJhbnNmZXInXHJcbmltcG9ydCBUaW1lciBmcm9tICcuL3Rvb2xzL1RpbWVyJ1xyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vdG9vbHMvU2NyZWVuJ1xyXG5pbXBvcnQgU3RvcHdhdGNoIGZyb20gJy4vdG9vbHMvU3RvcHdhdGNoJ1xyXG5pbXBvcnQgTWV0cm9ub20gZnJvbSAnLi90b29scy9NZXRyb25vbSdcclxuXHJcbmltcG9ydCBSZW1hcmsgZnJvbSAnLi9SZW1hcmsnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcclxuaW1wb3J0IFJlY29tbWVuZGF0aW9uIGZyb20gJy4vUmVjb21tZW5kYXRpb24nXHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJ1xyXG5pbXBvcnQgU2hhcmUgZnJvbSAnLi9TaGFyZSdcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuL0hlYWQnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcblxyXG5pbXBvcnQgc2wgZnJvbSAnLi4vc3R5bGVzL2xheW91dC5zdHlsJ1xyXG5pbXBvcnQgc2EgZnJvbSAnLi4vc3R5bGVzL2FydGljbGUuc3R5bCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xyXG4gIHBhZ2UsIGxpbmtzLCBsYW5nXHJcbn0pIHtcclxuICBjb25zdCB7IG5hdiwgc2x1ZywgdGl0bGUsIGNvbnRlbnQsIGRlc2NyaXB0aW9uLCBwcm9wcywgZ2xvYmFsLCBqb2IsIGxpbmssIGRhdGUgfSA9IHBhZ2VcclxuICBjb25zdCBnZXRMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHNsdWcpIHtcclxuICAgICAgY2FzZSAnY2FsYyc6IHJldHVybiA8Q2FsYyBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3RyYW5zZmVyJzogcmV0dXJuIDxUcmFuc2ZlciBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3NjcmVlbic6IHJldHVybiA8U2NyZWVuIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAnc3RvcHdhdGNoJzogcmV0dXJuIDxTdG9wd2F0Y2ggcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICd0aW1lcic6XHJcbiAgICAgIGNhc2UgJ2FsYXJtJzogcmV0dXJuIDxUaW1lciBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ21ldHJvbm9tJzogcmV0dXJuIDxNZXRyb25vbSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcXVzX2NvbmZpZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5wYWdlLnVybCA9IGxhbmcgKyAobGluayA9PT0gJy8nID8gJycgOiBsaW5rKVxyXG4gICAgICB0aGlzLnBhZ2UuaWRlbnRpZmllciA9IGxhbmcgKyAobGluayA9PT0gJy8nID8gJycgOiBsaW5rKVxyXG4gICAgfVxyXG5cclxuICB9LCBbbGluaywgbGFuZ10pXHJcbiAgY29uc3QgZGF0ZVN0ciA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgeWVhcjogXCJudW1lcmljXCIsIGRheTogXCJudW1lcmljXCIsIG1vbnRoOiBcImxvbmdcIiB9KVxyXG4gIGNvbnN0IGRhdGVJc28gPSBuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkIGxhbmc9e2xhbmd9IG5hdj17bmF2fSBzbHVnPXtzbHVnfSB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gbGluaz17bGlua30gZGF0ZT17ZGF0ZX0gLz5cclxuICAgICAgPE5hdmlnYXRpb24gbGlua3M9e2xpbmtzLnRvb2xzfSBsYW5nPXtsYW5nfSBzbHVnPXtzbHVnfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c2wubGF5b3V0fT5cclxuICAgICAgICB7Z2V0TGF5b3V0KCl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NhLmFydGljbGV9IGl0ZW1TY29wZSBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL0FydGljbGVcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBpdGVtUHJvcD1cImhlYWRsaW5lXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDx0aW1lIGl0ZW1Qcm9wPVwiZGF0ZU1vZGlmaWVkXCIgZGF0ZVRpbWU9e2RhdGVJc299PntkYXRlU3RyfTwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFNoYXJlIGxpbms9e2xpbmt9IHRpdGxlPXt0aXRsZX0gbGFuZz17bGFuZ30gLz5cclxuICAgICAgICAgICAgICAgICAgPFJlbWFyayBjb250ZW50PXtjb250ZW50fSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFJlY29tbWVuZGF0aW9uIGxpbmtzQXJ0aWNsZXM9e2xpbmtzLmFydGljbGVzfSBsaW5rc05ld3M9e2xpbmtzLm5ld3N9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q29tbWVudHMgZGVzYz17Z2xvYmFsLmNvbW1lbnRzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciBsaW5rcz17bGlua3MuZm9vdGVyfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvb2x0aXAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9