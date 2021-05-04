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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);



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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_18__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_17__["useEffect"])(function () {
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
          lineNumber: 41,
          columnNumber: 27
        }, _this);

      case 'transfer':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Transfer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 31
        }, _this);

      case 'screen':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Screen__WEBPACK_IMPORTED_MODULE_4__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }, _this);

      case 'stopwatch':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Stopwatch__WEBPACK_IMPORTED_MODULE_5__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 32
        }, _this);

      case 'timer':
      case 'alarm':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Timer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 28
        }, _this);

      case 'metronom':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tools_Metronom__WEBPACK_IMPORTED_MODULE_6__["default"], {
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
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
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
      links: links.tools,
      lang: lang,
      slug: slug
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
                  lineNumber: 64,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                  itemProp: "dateModified",
                  dateTime: dateIso,
                  children: dateStr
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Share__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  link: link,
                  title: title,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Remark__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  content: content,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recommendation__WEBPACK_IMPORTED_MODULE_9__["default"], {
              linksArticles: links.articles,
              linksNews: links.news,
              lang: lang
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Comments__WEBPACK_IMPORTED_MODULE_10__["default"], {
            desc: global.comments,
            link: link,
            lang: lang
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        links: links.footer,
        lang: lang
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Layout, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_18__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicGFnZSIsImxpbmtzIiwibGFuZyIsIm5hdiIsInNsdWciLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwiZ2xvYmFsIiwiam9iIiwibGluayIsImRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsIndpbmRvdyIsImd0YWciLCJwYWdlX3BhdGgiLCJldmVudHMiLCJvbiIsIm9mZiIsImdldExheW91dCIsImRhdGVTdHIiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidW5kZWZpbmVkIiwieWVhciIsImRheSIsIm1vbnRoIiwiZGF0ZUlzbyIsInRvSVNPU3RyaW5nIiwidG9vbHMiLCJzbCIsImxheW91dCIsInNhIiwiYXJ0aWNsZSIsImFydGljbGVzIiwibmV3cyIsImNvbW1lbnRzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BRVo7QUFBQTs7QUFBQTs7QUFBQSxNQUREQyxJQUNDLFFBRERBLElBQ0M7QUFBQSxNQURLQyxLQUNMLFFBREtBLEtBQ0w7QUFBQSxNQURZQyxJQUNaLFFBRFlBLElBQ1o7QUFBQSxNQUNPQyxHQURQLEdBQ2tGSCxJQURsRixDQUNPRyxHQURQO0FBQUEsTUFDWUMsSUFEWixHQUNrRkosSUFEbEYsQ0FDWUksSUFEWjtBQUFBLE1BQ2tCQyxLQURsQixHQUNrRkwsSUFEbEYsQ0FDa0JLLEtBRGxCO0FBQUEsTUFDeUJDLE9BRHpCLEdBQ2tGTixJQURsRixDQUN5Qk0sT0FE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QUFVLGdCQUFJLEVBQUVPLE1BQU0sQ0FBQ2dDLFFBQXZCO0FBQWlDLGdCQUFJLEVBQUU5QixJQUF2QztBQUE2QyxnQkFBSSxFQUFFVDtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQW9CRSxxRUFBQyxnREFBRDtBQUFRLGFBQUssRUFBRUQsS0FBSyxDQUFDeUMsTUFBckI7QUFBNkIsWUFBSSxFQUFFeEM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQXlCRSxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUEsa0JBREY7QUE2QkQ7O0dBNUR1QkgsTTtVQUlQZSxzRDs7O0tBSk9mLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLmVjYTg5Y2Y3YTFlYzYxNzRmMzllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsYyBmcm9tICcuL3Rvb2xzL0NhbGMnXHJcbmltcG9ydCBUcmFuc2ZlciBmcm9tICcuL3Rvb2xzL1RyYW5zZmVyJ1xyXG5pbXBvcnQgVGltZXIgZnJvbSAnLi90b29scy9UaW1lcidcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL3Rvb2xzL1NjcmVlbidcclxuaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL3Rvb2xzL1N0b3B3YXRjaCdcclxuaW1wb3J0IE1ldHJvbm9tIGZyb20gJy4vdG9vbHMvTWV0cm9ub20nXHJcblxyXG5pbXBvcnQgUmVtYXJrIGZyb20gJy4vUmVtYXJrJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcbmltcG9ydCBSZWNvbW1lbmRhdGlvbiBmcm9tICcuL1JlY29tbWVuZGF0aW9uJ1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cydcclxuaW1wb3J0IFNoYXJlIGZyb20gJy4vU2hhcmUnXHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi9IZWFkJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5cclxuaW1wb3J0IHNsIGZyb20gJy4uL3N0eWxlcy9sYXlvdXQuc3R5bCdcclxuaW1wb3J0IHNhIGZyb20gJy4uL3N0eWxlcy9hcnRpY2xlLnN0eWwnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XHJcbiAgcGFnZSwgbGlua3MsIGxhbmdcclxufSkge1xyXG4gIGNvbnN0IHsgbmF2LCBzbHVnLCB0aXRsZSwgY29udGVudCwgZGVzY3JpcHRpb24sIHByb3BzLCBnbG9iYWwsIGpvYiwgbGluaywgZGF0ZSB9ID0gcGFnZVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgICAgd2luZG93Lmd0YWcoJ2NvbmZpZycsICdHLUVCR0dRMzYwWFEnLCB7XHJcbiAgICAgICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcclxuICBjb25zdCBnZXRMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHNsdWcpIHtcclxuICAgICAgY2FzZSAnY2FsYyc6IHJldHVybiA8Q2FsYyBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3RyYW5zZmVyJzogcmV0dXJuIDxUcmFuc2ZlciBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3NjcmVlbic6IHJldHVybiA8U2NyZWVuIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAnc3RvcHdhdGNoJzogcmV0dXJuIDxTdG9wd2F0Y2ggcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICd0aW1lcic6XHJcbiAgICAgIGNhc2UgJ2FsYXJtJzogcmV0dXJuIDxUaW1lciBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ21ldHJvbm9tJzogcmV0dXJuIDxNZXRyb25vbSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBkYXRlU3RyID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB5ZWFyOiBcIm51bWVyaWNcIiwgZGF5OiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiIH0pXHJcbiAgY29uc3QgZGF0ZUlzbyA9IG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgbGFuZz17bGFuZ30gbmF2PXtuYXZ9IHNsdWc9e3NsdWd9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBsaW5rPXtsaW5rfSBkYXRlPXtkYXRlfSAvPlxyXG4gICAgICA8TmF2aWdhdGlvbiBsaW5rcz17bGlua3MudG9vbHN9IGxhbmc9e2xhbmd9IHNsdWc9e3NsdWd9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzbC5sYXlvdXR9PlxyXG4gICAgICAgIHtnZXRMYXlvdXQoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2EuYXJ0aWNsZX0gaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvQXJ0aWNsZVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGl0ZW1Qcm9wPVwiaGVhZGxpbmVcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHRpbWUgaXRlbVByb3A9XCJkYXRlTW9kaWZpZWRcIiBkYXRlVGltZT17ZGF0ZUlzb30+e2RhdGVTdHJ9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U2hhcmUgbGluaz17bGlua30gdGl0bGU9e3RpdGxlfSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8UmVtYXJrIGNvbnRlbnQ9e2NvbnRlbnR9IGxhbmc9e2xhbmd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UmVjb21tZW5kYXRpb24gbGlua3NBcnRpY2xlcz17bGlua3MuYXJ0aWNsZXN9IGxpbmtzTmV3cz17bGlua3MubmV3c30gbGFuZz17bGFuZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDb21tZW50cyBkZXNjPXtnbG9iYWwuY29tbWVudHN9IGxpbms9e2xpbmt9IGxhbmc9e2xhbmd9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIGxpbmtzPXtsaW5rcy5mb290ZXJ9IGxhbmc9e2xhbmd9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VG9vbHRpcCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=