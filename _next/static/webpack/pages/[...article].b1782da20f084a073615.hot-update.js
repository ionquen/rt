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
  /*useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-EBGGQ360XQ', {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])*/

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

_s(Layout, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicGFnZSIsImxpbmtzIiwibGFuZyIsIm5hdiIsInNsdWciLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwiZ2xvYmFsIiwiam9iIiwibGluayIsImRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRMYXlvdXQiLCJkYXRlU3RyIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsInllYXIiLCJkYXkiLCJtb250aCIsImRhdGVJc28iLCJ0b0lTT1N0cmluZyIsInRvb2xzIiwic2wiLCJsYXlvdXQiLCJzYSIsImFydGljbGUiLCJhcnRpY2xlcyIsIm5ld3MiLCJjb21tZW50cyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUVaO0FBQUE7O0FBQUE7O0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDO0FBQUEsTUFES0MsS0FDTCxRQURLQSxLQUNMO0FBQUEsTUFEWUMsSUFDWixRQURZQSxJQUNaO0FBQUEsTUFDT0MsR0FEUCxHQUNrRkgsSUFEbEYsQ0FDT0csR0FEUDtBQUFBLE1BQ1lDLElBRFosR0FDa0ZKLElBRGxGLENBQ1lJLElBRFo7QUFBQSxNQUNrQkMsS0FEbEIsR0FDa0ZMLElBRGxGLENBQ2tCSyxLQURsQjtBQUFBLE1BQ3lCQyxPQUR6QixHQUNrRk4sSUFEbEYsQ0FDeUJNLE9BRHpCO0FBQUEsTUFDa0NDLFdBRGxDLEdBQ2tGUCxJQURsRixDQUNrQ08sV0FEbEM7QUFBQSxNQUMrQ0MsS0FEL0MsR0FDa0ZSLElBRGxGLENBQytDUSxLQUQvQztBQUFBLE1BQ3NEQyxNQUR0RCxHQUNrRlQsSUFEbEYsQ0FDc0RTLE1BRHREO0FBQUEsTUFDOERDLEdBRDlELEdBQ2tGVixJQURsRixDQUM4RFUsR0FEOUQ7QUFBQSxNQUNtRUMsSUFEbkUsR0FDa0ZYLElBRGxGLENBQ21FVyxJQURuRTtBQUFBLE1BQ3lFQyxJQUR6RSxHQUNrRlosSUFEbEYsQ0FDeUVZLElBRHpFO0FBRUQsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFRWCxJQUFSO0FBQ0UsV0FBSyxNQUFMO0FBQWEsNEJBQU8scUVBQUMsbURBQUQ7QUFBTSxlQUFLLEVBQUVJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDs7QUFDYixXQUFLLFVBQUw7QUFBaUIsNEJBQU8scUVBQUMsdURBQUQ7QUFBVSxlQUFLLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBQ2pCLFdBQUssUUFBTDtBQUFlLDRCQUFPLHFFQUFDLHFEQUFEO0FBQVEsZUFBSyxFQUFFQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7O0FBQ2YsV0FBSyxXQUFMO0FBQWtCLDRCQUFPLHFFQUFDLHdEQUFEO0FBQVcsZUFBSyxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQOztBQUNsQixXQUFLLE9BQUw7QUFDQSxXQUFLLE9BQUw7QUFBYyw0QkFBTyxxRUFBQyxvREFBRDtBQUFPLGVBQUssRUFBRUE7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQOztBQUNkLFdBQUssVUFBTDtBQUFpQiw0QkFBTyxxRUFBQyx1REFBRDtBQUFVLGVBQUssRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDs7QUFDakI7QUFBUztBQVJYO0FBVUQsR0FYRDs7QUFZQSxNQUFNUSxPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTTCxJQUFULEVBQWVNLGtCQUFmLENBQWtDQyxTQUFsQyxFQUE2QztBQUFFQyxRQUFJLEVBQUUsU0FBUjtBQUFtQkMsT0FBRyxFQUFFLFNBQXhCO0FBQW1DQyxTQUFLLEVBQUU7QUFBMUMsR0FBN0MsQ0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSU4sSUFBSixDQUFTTCxJQUFULEVBQWVZLFdBQWYsRUFBaEI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDhDQUFEO0FBQU0sVUFBSSxFQUFFdEIsSUFBWjtBQUFrQixTQUFHLEVBQUVDLEdBQXZCO0FBQTRCLFVBQUksRUFBRUMsSUFBbEM7QUFBd0MsV0FBSyxFQUFFQyxLQUEvQztBQUFzRCxpQkFBVyxFQUFFRSxXQUFuRTtBQUFnRixVQUFJLEVBQUVJLElBQXRGO0FBQTRGLFVBQUksRUFBRUM7QUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsbURBQUQ7QUFBWSxXQUFLLEVBQUVYLEtBQUssQ0FBQ3dCLEtBQXpCO0FBQWdDLFVBQUksRUFBRXZCLElBQXRDO0FBQTRDLFVBQUksRUFBRUU7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyxlQUFTLEVBQUVzQiwyREFBRSxDQUFDQyxNQUFuQjtBQUFBLGlCQUNHWixTQUFTLEVBRFosZUFFRTtBQUFLLGlCQUFTLEVBQUVhLDREQUFFLENBQUNDLE9BQW5CO0FBQTRCLGlCQUFTLE1BQXJDO0FBQXNDLGdCQUFRLEVBQUMsMkJBQS9DO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUFBLG9DQUNFO0FBQUEsc0NBQ0U7QUFBQSx3Q0FDRTtBQUFJLDBCQUFRLEVBQUMsVUFBYjtBQUFBLDRCQUF5QnhCO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFNLDBCQUFRLEVBQUMsY0FBZjtBQUE4QiwwQkFBUSxFQUFFa0IsT0FBeEM7QUFBQSw0QkFBa0RQO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBS0U7QUFBQSx3Q0FDRSxxRUFBQywrQ0FBRDtBQUFPLHNCQUFJLEVBQUVMLElBQWI7QUFBbUIsdUJBQUssRUFBRU4sS0FBMUI7QUFBaUMsc0JBQUksRUFBRUg7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVFLHFFQUFDLCtDQUFEO0FBQVEseUJBQU8sRUFBRUksT0FBakI7QUFBMEIsc0JBQUksRUFBRUo7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBV0UscUVBQUMsdURBQUQ7QUFBZ0IsMkJBQWEsRUFBRUQsS0FBSyxDQUFDNkIsUUFBckM7QUFBK0MsdUJBQVMsRUFBRTdCLEtBQUssQ0FBQzhCLElBQWhFO0FBQXNFLGtCQUFJLEVBQUU3QjtBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQWNFLHFFQUFDLGtEQUFEO0FBQVUsZ0JBQUksRUFBRU8sTUFBTSxDQUFDdUIsUUFBdkI7QUFBaUMsZ0JBQUksRUFBRXJCLElBQXZDO0FBQTZDLGdCQUFJLEVBQUVUO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBb0JFLHFFQUFDLGdEQUFEO0FBQVEsYUFBSyxFQUFFRCxLQUFLLENBQUNnQyxNQUFyQjtBQUE2QixZQUFJLEVBQUUvQjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBeUJFLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQSxrQkFERjtBQTZCRDs7R0E1RHVCSCxNO1VBSVBlLHNEOzs7S0FKT2YsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uYjE3ODJkYTIwZjA4NGEwNzM2MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWxjIGZyb20gJy4vdG9vbHMvQ2FsYydcclxuaW1wb3J0IFRyYW5zZmVyIGZyb20gJy4vdG9vbHMvVHJhbnNmZXInXHJcbmltcG9ydCBUaW1lciBmcm9tICcuL3Rvb2xzL1RpbWVyJ1xyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vdG9vbHMvU2NyZWVuJ1xyXG5pbXBvcnQgU3RvcHdhdGNoIGZyb20gJy4vdG9vbHMvU3RvcHdhdGNoJ1xyXG5pbXBvcnQgTWV0cm9ub20gZnJvbSAnLi90b29scy9NZXRyb25vbSdcclxuXHJcbmltcG9ydCBSZW1hcmsgZnJvbSAnLi9SZW1hcmsnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcclxuaW1wb3J0IFJlY29tbWVuZGF0aW9uIGZyb20gJy4vUmVjb21tZW5kYXRpb24nXHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJ1xyXG5pbXBvcnQgU2hhcmUgZnJvbSAnLi9TaGFyZSdcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuL0hlYWQnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcblxyXG5pbXBvcnQgc2wgZnJvbSAnLi4vc3R5bGVzL2xheW91dC5zdHlsJ1xyXG5pbXBvcnQgc2EgZnJvbSAnLi4vc3R5bGVzL2FydGljbGUuc3R5bCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtcclxuICBwYWdlLCBsaW5rcywgbGFuZ1xyXG59KSB7XHJcbiAgY29uc3QgeyBuYXYsIHNsdWcsIHRpdGxlLCBjb250ZW50LCBkZXNjcmlwdGlvbiwgcHJvcHMsIGdsb2JhbCwgam9iLCBsaW5rLCBkYXRlIH0gPSBwYWdlXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgLyp1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5ndGFnKCdjb25maWcnLCAnRy1FQkdHUTM2MFhRJywge1xyXG4gICAgICAgIHBhZ2VfcGF0aDogdXJsLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIH1cclxuICB9LCBbcm91dGVyLmV2ZW50c10pKi9cclxuICBjb25zdCBnZXRMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHNsdWcpIHtcclxuICAgICAgY2FzZSAnY2FsYyc6IHJldHVybiA8Q2FsYyBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3RyYW5zZmVyJzogcmV0dXJuIDxUcmFuc2ZlciBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3NjcmVlbic6IHJldHVybiA8U2NyZWVuIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAnc3RvcHdhdGNoJzogcmV0dXJuIDxTdG9wd2F0Y2ggcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICd0aW1lcic6XHJcbiAgICAgIGNhc2UgJ2FsYXJtJzogcmV0dXJuIDxUaW1lciBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ21ldHJvbm9tJzogcmV0dXJuIDxNZXRyb25vbSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBkYXRlU3RyID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB5ZWFyOiBcIm51bWVyaWNcIiwgZGF5OiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiIH0pXHJcbiAgY29uc3QgZGF0ZUlzbyA9IG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgbGFuZz17bGFuZ30gbmF2PXtuYXZ9IHNsdWc9e3NsdWd9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBsaW5rPXtsaW5rfSBkYXRlPXtkYXRlfSAvPlxyXG4gICAgICA8TmF2aWdhdGlvbiBsaW5rcz17bGlua3MudG9vbHN9IGxhbmc9e2xhbmd9IHNsdWc9e3NsdWd9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzbC5sYXlvdXR9PlxyXG4gICAgICAgIHtnZXRMYXlvdXQoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2EuYXJ0aWNsZX0gaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvQXJ0aWNsZVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGl0ZW1Qcm9wPVwiaGVhZGxpbmVcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHRpbWUgaXRlbVByb3A9XCJkYXRlTW9kaWZpZWRcIiBkYXRlVGltZT17ZGF0ZUlzb30+e2RhdGVTdHJ9PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U2hhcmUgbGluaz17bGlua30gdGl0bGU9e3RpdGxlfSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8UmVtYXJrIGNvbnRlbnQ9e2NvbnRlbnR9IGxhbmc9e2xhbmd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UmVjb21tZW5kYXRpb24gbGlua3NBcnRpY2xlcz17bGlua3MuYXJ0aWNsZXN9IGxpbmtzTmV3cz17bGlua3MubmV3c30gbGFuZz17bGFuZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDb21tZW50cyBkZXNjPXtnbG9iYWwuY29tbWVudHN9IGxpbms9e2xpbmt9IGxhbmc9e2xhbmd9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIGxpbmtzPXtsaW5rcy5mb290ZXJ9IGxhbmc9e2xhbmd9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VG9vbHRpcCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=