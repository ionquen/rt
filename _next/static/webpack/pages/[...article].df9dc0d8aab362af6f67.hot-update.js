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
      link = page.link,
      date = page.date;

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

  var dateStr = new Date(date).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long"
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Head__WEBPACK_IMPORTED_MODULE_13__["default"], {
      lang: lang,
      nav: nav,
      slug: slug,
      title: title,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
      links: links.tools,
      lang: lang,
      slug: slug
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_layout_styl__WEBPACK_IMPORTED_MODULE_15___default.a.layout,
      children: [getLayout(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_article_styl__WEBPACK_IMPORTED_MODULE_16___default.a.article,
        itemScope: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                  itemProp: "datePublished",
                  dateTime: "",
                  children: "23.03.2022"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Share__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  link: link,
                  title: title,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Remark__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  content: content,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recommendation__WEBPACK_IMPORTED_MODULE_9__["default"], {
              linksArticles: links.articles,
              linksNews: links.news
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Comments__WEBPACK_IMPORTED_MODULE_10__["default"], {
            desc: global.comments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        links: links.footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicGFnZSIsImxpbmtzIiwibGFuZyIsIm5hdiIsInNsdWciLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwiZ2xvYmFsIiwiam9iIiwibGluayIsImRhdGUiLCJnZXRMYXlvdXQiLCJkYXRlU3RyIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsIndlZWtkYXkiLCJ5ZWFyIiwiZGF5IiwibW9udGgiLCJ0b29scyIsInNsIiwibGF5b3V0Iiwic2EiLCJhcnRpY2xlIiwiYXJ0aWNsZXMiLCJuZXdzIiwiY29tbWVudHMiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BRVo7QUFBQTs7QUFBQSxNQUREQyxJQUNDLFFBRERBLElBQ0M7QUFBQSxNQURLQyxLQUNMLFFBREtBLEtBQ0w7QUFBQSxNQURZQyxJQUNaLFFBRFlBLElBQ1o7QUFBQSxNQUNPQyxHQURQLEdBQ2tGSCxJQURsRixDQUNPRyxHQURQO0FBQUEsTUFDWUMsSUFEWixHQUNrRkosSUFEbEYsQ0FDWUksSUFEWjtBQUFBLE1BQ2tCQyxLQURsQixHQUNrRkwsSUFEbEYsQ0FDa0JLLEtBRGxCO0FBQUEsTUFDeUJDLE9BRHpCLEdBQ2tGTixJQURsRixDQUN5Qk0sT0FEekI7QUFBQSxNQUNrQ0MsV0FEbEMsR0FDa0ZQLElBRGxGLENBQ2tDTyxXQURsQztBQUFBLE1BQytDQyxLQUQvQyxHQUNrRlIsSUFEbEYsQ0FDK0NRLEtBRC9DO0FBQUEsTUFDc0RDLE1BRHRELEdBQ2tGVCxJQURsRixDQUNzRFMsTUFEdEQ7QUFBQSxNQUM4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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBV0UscUVBQUMsdURBQUQ7QUFBZ0IsMkJBQWEsRUFBRUQsS0FBSyxDQUFDMEIsUUFBckM7QUFBK0MsdUJBQVMsRUFBRTFCLEtBQUssQ0FBQzJCO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBY0UscUVBQUMsa0RBQUQ7QUFBVSxnQkFBSSxFQUFFbkIsTUFBTSxDQUFDb0I7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFvQkUscUVBQUMsZ0RBQUQ7QUFBUSxhQUFLLEVBQUU1QixLQUFLLENBQUM2QjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBeUJFLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQSxrQkFERjtBQTZCRDtLQTlDdUIvQixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS5kZjlkYzBkOGFhYjM2MmFmNmY2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGMgZnJvbSAnLi90b29scy9DYWxjJ1xyXG5pbXBvcnQgVHJhbnNmZXIgZnJvbSAnLi90b29scy9UcmFuc2ZlcidcclxuaW1wb3J0IFRpbWVyIGZyb20gJy4vdG9vbHMvVGltZXInXHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi90b29scy9TY3JlZW4nXHJcbmltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi90b29scy9TdG9wd2F0Y2gnXHJcbmltcG9ydCBNZXRyb25vbSBmcm9tICcuL3Rvb2xzL01ldHJvbm9tJ1xyXG5cclxuaW1wb3J0IFJlbWFyayBmcm9tICcuL1JlbWFyaydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgUmVjb21tZW5kYXRpb24gZnJvbSAnLi9SZWNvbW1lbmRhdGlvbidcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vQ29tbWVudHMnXHJcbmltcG9ydCBTaGFyZSBmcm9tICcuL1NoYXJlJ1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnXHJcbmltcG9ydCBIZWFkIGZyb20gJy4vSGVhZCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuXHJcbmltcG9ydCBzbCBmcm9tICcuLi9zdHlsZXMvbGF5b3V0LnN0eWwnXHJcbmltcG9ydCBzYSBmcm9tICcuLi9zdHlsZXMvYXJ0aWNsZS5zdHlsJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtcclxuICBwYWdlLCBsaW5rcywgbGFuZ1xyXG59KSB7XHJcbiAgY29uc3QgeyBuYXYsIHNsdWcsIHRpdGxlLCBjb250ZW50LCBkZXNjcmlwdGlvbiwgcHJvcHMsIGdsb2JhbCwgam9iLCBsaW5rLCBkYXRlIH0gPSBwYWdlXHJcbiAgY29uc3QgZ2V0TGF5b3V0ID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChzbHVnKSB7XHJcbiAgICAgIGNhc2UgJ2NhbGMnOiByZXR1cm4gPENhbGMgcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICd0cmFuc2Zlcic6IHJldHVybiA8VHJhbnNmZXIgcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICdzY3JlZW4nOiByZXR1cm4gPFNjcmVlbiBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3N0b3B3YXRjaCc6IHJldHVybiA8U3RvcHdhdGNoIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAndGltZXInOlxyXG4gICAgICBjYXNlICdhbGFybSc6IHJldHVybiA8VGltZXIgcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICdtZXRyb25vbSc6IHJldHVybiA8TWV0cm9ub20gcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBkZWZhdWx0OiByZXR1cm5cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgZGF0ZVN0ciA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogXCJsb25nXCIsIHllYXI6IFwibnVtZXJpY1wiLCBkYXk6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgbGFuZz17bGFuZ30gbmF2PXtuYXZ9IHNsdWc9e3NsdWd9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8TmF2aWdhdGlvbiBsaW5rcz17bGlua3MudG9vbHN9IGxhbmc9e2xhbmd9IHNsdWc9e3NsdWd9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzbC5sYXlvdXR9PlxyXG4gICAgICAgIHtnZXRMYXlvdXQoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2EuYXJ0aWNsZX0gaXRlbVNjb3BlID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHRpbWUgaXRlbVByb3A9XCJkYXRlUHVibGlzaGVkXCIgZGF0ZVRpbWU9XCJcIj4yMy4wMy4yMDIyPC90aW1lPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U2hhcmUgbGluaz17bGlua30gdGl0bGU9e3RpdGxlfSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8UmVtYXJrIGNvbnRlbnQ9e2NvbnRlbnR9IGxhbmc9e2xhbmd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UmVjb21tZW5kYXRpb24gbGlua3NBcnRpY2xlcz17bGlua3MuYXJ0aWNsZXN9IGxpbmtzTmV3cz17bGlua3MubmV3c30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDb21tZW50cyBkZXNjPXtnbG9iYWwuY29tbWVudHN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIGxpbmtzPXtsaW5rcy5mb290ZXJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VG9vbHRpcCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=