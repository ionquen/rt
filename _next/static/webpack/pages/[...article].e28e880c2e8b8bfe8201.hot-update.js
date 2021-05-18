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
/* harmony import */ var _tools_Notebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/Notebook */ "./components/tools/Notebook.js");
/* harmony import */ var _Remark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Remark */ "./components/Remark.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var _Recommendation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Recommendation */ "./components/Recommendation.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Comments */ "./components/Comments.js");
/* harmony import */ var _Share__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Share */ "./components/Share.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tooltip */ "./components/Tooltip.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/layout.styl */ "./styles/layout.styl");
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_styl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styles_article_styl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/article.styl */ "./styles/article.styl");
/* harmony import */ var _styles_article_styl__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_article_styl__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);



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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_18__["useEffect"])(function () {
    var handleRouteChange = function handleRouteChange(url) {
      window.gtag('config', 'G-EBGGQ360XQ', {
        page_path: url
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return function () {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  var getLayout = function getLayout() {
    switch (slug) {
      case 'calc':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Calc__WEBPACK_IMPORTED_MODULE_1__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 27
        }, _this);

      case 'transfer':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Transfer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 31
        }, _this);

      case 'screen':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Screen__WEBPACK_IMPORTED_MODULE_4__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }, _this);

      case 'stopwatch':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Stopwatch__WEBPACK_IMPORTED_MODULE_5__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 32
        }, _this);

      case 'timer':
      case 'alarm':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Timer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          props: props,
          slug: slug,
          links: links.sub
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 28
        }, _this);

      case 'metronom':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Metronom__WEBPACK_IMPORTED_MODULE_6__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 31
        }, _this);

      case 'notebook':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Notebook__WEBPACK_IMPORTED_MODULE_7__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 31
        }, _this);

      default:
        return;
    }
  };

  var dateStr = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    day: "numeric",
    month: "long"
  });
  var dateIso = new Date(date).toISOString();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Head__WEBPACK_IMPORTED_MODULE_14__["default"], {
      lang: lang,
      nav: nav,
      slug: slug,
      title: title,
      description: description,
      link: link,
      date: dateIso
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigation__WEBPACK_IMPORTED_MODULE_9__["default"], {
      links: links.tools,
      lang: lang,
      slug: slug
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layout_styl__WEBPACK_IMPORTED_MODULE_16___default.a.layout,
      children: [getLayout(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_article_styl__WEBPACK_IMPORTED_MODULE_17___default.a.article,
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
                  lineNumber: 66,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                  itemProp: "dateModified",
                  dateTime: dateIso,
                  children: dateStr
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Share__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  link: link,
                  title: title,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Remark__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  content: content,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recommendation__WEBPACK_IMPORTED_MODULE_10__["default"], {
              linksArticles: links.articles,
              linksNews: links.news,
              lang: lang
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Comments__WEBPACK_IMPORTED_MODULE_11__["default"], {
            desc: global.comments,
            link: link,
            lang: lang
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        links: links.footer,
        lang: lang
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Layout, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_19__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicGFnZSIsImxpbmtzIiwibGFuZyIsIm5hdiIsInNsdWciLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwiZ2xvYmFsIiwiam9iIiwibGluayIsImRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsIndpbmRvdyIsImd0YWciLCJwYWdlX3BhdGgiLCJldmVudHMiLCJvbiIsIm9mZiIsImdldExheW91dCIsInN1YiIsImRhdGVTdHIiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidW5kZWZpbmVkIiwieWVhciIsImRheSIsIm1vbnRoIiwiZGF0ZUlzbyIsInRvSVNPU3RyaW5nIiwidG9vbHMiLCJzbCIsImxheW91dCIsInNhIiwiYXJ0aWNsZSIsImFydGljbGVzIiwibmV3cyIsImNvbW1lbnRzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BRVo7QUFBQTs7QUFBQTs7QUFBQSxNQUREQyxJQUNDLFFBRERBLElBQ0M7QUFBQSxNQURLQyxLQUNMLFFBREtBLEtBQ0w7QUFBQSxNQURZQyxJQUNaLFFBRFlBLElBQ1o7QUFBQSxNQUNPQyxHQURQLEdBQ2tGSCxJQURsRixDQUNPRyxHQURQO0FBQUEsTUFDWUMsSUFEWixHQUNrRkosSUFEbEYsQ0FDWUksSUFEWjtBQUFBLE1BQ2tCQyxLQURsQixHQUNrRkwsSUFEbEYsQ0FDa0JLLEtBRGxCO0FBQUEsTUFDeUJDLE9BRHpCLEdBQ2tGTixJQURs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YSxFQUFFRCxLQUFLLENBQUN1QyxRQUFyQztBQUErQyx1QkFBUyxFQUFFdkMsS0FBSyxDQUFDd0MsSUFBaEU7QUFBc0Usa0JBQUksRUFBRXZDO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBY0UscUVBQUMsa0RBQUQ7QUFBVSxnQkFBSSxFQUFFTyxNQUFNLENBQUNpQyxRQUF2QjtBQUFpQyxnQkFBSSxFQUFFL0IsSUFBdkM7QUFBNkMsZ0JBQUksRUFBRVQ7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFvQkUscUVBQUMsZ0RBQUQ7QUFBUSxhQUFLLEVBQUVELEtBQUssQ0FBQzBDLE1BQXJCO0FBQTZCLFlBQUksRUFBRXpDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUF5QkUscUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRjtBQUFBLGtCQURGO0FBNkJEOztHQTdEdUJILE07VUFLUGUsc0Q7OztLQUxPZixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS5lMjhlODgwYzJlOGI4YmZlODIwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGMgZnJvbSAnLi90b29scy9DYWxjJ1xyXG5pbXBvcnQgVHJhbnNmZXIgZnJvbSAnLi90b29scy9UcmFuc2ZlcidcclxuaW1wb3J0IFRpbWVyIGZyb20gJy4vdG9vbHMvVGltZXInXHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi90b29scy9TY3JlZW4nXHJcbmltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi90b29scy9TdG9wd2F0Y2gnXHJcbmltcG9ydCBNZXRyb25vbSBmcm9tICcuL3Rvb2xzL01ldHJvbm9tJ1xyXG5pbXBvcnQgTm90ZWJvb2sgZnJvbSAnLi90b29scy9Ob3RlYm9vaydcclxuXHJcbmltcG9ydCBSZW1hcmsgZnJvbSAnLi9SZW1hcmsnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcclxuaW1wb3J0IFJlY29tbWVuZGF0aW9uIGZyb20gJy4vUmVjb21tZW5kYXRpb24nXHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJ1xyXG5pbXBvcnQgU2hhcmUgZnJvbSAnLi9TaGFyZSdcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuL0hlYWQnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcblxyXG5pbXBvcnQgc2wgZnJvbSAnLi4vc3R5bGVzL2xheW91dC5zdHlsJ1xyXG5pbXBvcnQgc2EgZnJvbSAnLi4vc3R5bGVzL2FydGljbGUuc3R5bCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtcclxuICBwYWdlLCBsaW5rcywgbGFuZ1xyXG59KSB7XHJcbiAgY29uc3QgeyBuYXYsIHNsdWcsIHRpdGxlLCBjb250ZW50LCBkZXNjcmlwdGlvbiwgcHJvcHMsIGdsb2JhbCwgam9iLCBsaW5rLCBkYXRlIH0gPSBwYWdlXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICB3aW5kb3cuZ3RhZygnY29uZmlnJywgJ0ctRUJHR1EzNjBYUScsIHtcclxuICAgICAgICBwYWdlX3BhdGg6IHVybCxcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5ldmVudHNdKVxyXG4gIGNvbnN0IGdldExheW91dCA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoc2x1Zykge1xyXG4gICAgICBjYXNlICdjYWxjJzogcmV0dXJuIDxDYWxjIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAndHJhbnNmZXInOiByZXR1cm4gPFRyYW5zZmVyIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAnc2NyZWVuJzogcmV0dXJuIDxTY3JlZW4gcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICdzdG9wd2F0Y2gnOiByZXR1cm4gPFN0b3B3YXRjaCBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3RpbWVyJzpcclxuICAgICAgY2FzZSAnYWxhcm0nOiByZXR1cm4gPFRpbWVyIHByb3BzPXtwcm9wc30gc2x1Zz17c2x1Z30gbGlua3M9e2xpbmtzLnN1Yn0gLz5cclxuICAgICAgY2FzZSAnbWV0cm9ub20nOiByZXR1cm4gPE1ldHJvbm9tIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAnbm90ZWJvb2snOiByZXR1cm4gPE5vdGVib29rIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgZGVmYXVsdDogcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGVTdHIgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHllYXI6IFwibnVtZXJpY1wiLCBkYXk6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIgfSlcclxuICBjb25zdCBkYXRlSXNvID0gbmV3IERhdGUoZGF0ZSkudG9JU09TdHJpbmcoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZCBsYW5nPXtsYW5nfSBuYXY9e25hdn0gc2x1Zz17c2x1Z30gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IGxpbms9e2xpbmt9IGRhdGU9e2RhdGVJc299IC8+XHJcbiAgICAgIDxOYXZpZ2F0aW9uIGxpbmtzPXtsaW5rcy50b29sc30gbGFuZz17bGFuZ30gc2x1Zz17c2x1Z30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3NsLmxheW91dH0+XHJcbiAgICAgICAge2dldExheW91dCgpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzYS5hcnRpY2xlfSBpdGVtU2NvcGUgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9BcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgaXRlbVByb3A9XCJoZWFkbGluZVwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8dGltZSBpdGVtUHJvcD1cImRhdGVNb2RpZmllZFwiIGRhdGVUaW1lPXtkYXRlSXNvfT57ZGF0ZVN0cn08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxTaGFyZSBsaW5rPXtsaW5rfSB0aXRsZT17dGl0bGV9IGxhbmc9e2xhbmd9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxSZW1hcmsgY29udGVudD17Y29udGVudH0gbGFuZz17bGFuZ30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxSZWNvbW1lbmRhdGlvbiBsaW5rc0FydGljbGVzPXtsaW5rcy5hcnRpY2xlc30gbGlua3NOZXdzPXtsaW5rcy5uZXdzfSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvbW1lbnRzIGRlc2M9e2dsb2JhbC5jb21tZW50c30gbGluaz17bGlua30gbGFuZz17bGFuZ30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgbGlua3M9e2xpbmtzLmZvb3Rlcn0gbGFuZz17bGFuZ30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUb29sdGlwIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==