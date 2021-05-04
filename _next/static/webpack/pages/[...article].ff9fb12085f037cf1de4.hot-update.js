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
  var dateIso = new Date(date).toDateString();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Head__WEBPACK_IMPORTED_MODULE_13__["default"], {
      lang: lang,
      nav: nav,
      slug: slug,
      title: title,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
      links: links.tools,
      lang: lang,
      slug: slug
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
                  lineNumber: 49,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                  itemProp: "datePublished",
                  dateTime: dateIso,
                  children: dateStr
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Share__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  link: link,
                  title: title,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Remark__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  content: content,
                  lang: lang
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recommendation__WEBPACK_IMPORTED_MODULE_9__["default"], {
              linksArticles: links.articles,
              linksNews: links.news
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Comments__WEBPACK_IMPORTED_MODULE_10__["default"], {
            desc: global.comments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        links: links.footer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicGFnZSIsImxpbmtzIiwibGFuZyIsIm5hdiIsInNsdWciLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwiZ2xvYmFsIiwiam9iIiwibGluayIsImRhdGUiLCJnZXRMYXlvdXQiLCJkYXRlU3RyIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsIndlZWtkYXkiLCJ5ZWFyIiwiZGF5IiwibW9udGgiLCJkYXRlSXNvIiwidG9EYXRlU3RyaW5nIiwidG9vbHMiLCJzbCIsImxheW91dCIsInNhIiwiYXJ0aWNsZSIsImFydGljbGVzIiwibmV3cyIsImNvbW1lbnRzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQUVaO0FBQUE7O0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDO0FBQUEsTUFES0MsS0FDTCxRQURLQSxLQUNMO0FBQUEsTUFEWUMsSUFDWixRQURZQSxJQUNaO0FBQUEsTUFDT0MsR0FEUCxHQUNrRkgsSUFEbEYsQ0FDT0csR0FEUDtBQUFBLE1BQ1lDLElBRFosR0FDa0ZKLElBRGxGLENBQ1lJLElBRFo7QUFBQSxNQUNrQkMsS0FEbEIsR0FDa0ZMLElBRGxGLENBQ2tCSyxLQURsQjtBQUFBLE1BQ3lCQyxPQUR6QixHQUNrRk4sSUFEbEYsQ0FDeUJNLE9BRHpCO0FBQUEsTUFDa0NDLFdBRGxDLEdBQ2tGUCxJQURsRixDQUNrQ08sV0FEbEM7QUFBQSxNQUMrQ0MsS0FEL0MsR0FDa0ZSLElBRGxGLENBQytDUSxLQUQvQztBQUFBLE1BQ3NEQyxNQUR0RCxHQUNrRlQsSUFE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RUFBRUksT0FBakI7QUFBMEIsc0JBQUksRUFBRUo7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBV0UscUVBQUMsdURBQUQ7QUFBZ0IsMkJBQWEsRUFBRUQsS0FBSyxDQUFDNEIsUUFBckM7QUFBK0MsdUJBQVMsRUFBRTVCLEtBQUssQ0FBQzZCO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBY0UscUVBQUMsa0RBQUQ7QUFBVSxnQkFBSSxFQUFFckIsTUFBTSxDQUFDc0I7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFvQkUscUVBQUMsZ0RBQUQ7QUFBUSxhQUFLLEVBQUU5QixLQUFLLENBQUMrQjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBeUJFLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQSxrQkFERjtBQTZCRDtLQS9DdUJqQyxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS5mZjlmYjEyMDg1ZjAzN2NmMWRlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGMgZnJvbSAnLi90b29scy9DYWxjJ1xyXG5pbXBvcnQgVHJhbnNmZXIgZnJvbSAnLi90b29scy9UcmFuc2ZlcidcclxuaW1wb3J0IFRpbWVyIGZyb20gJy4vdG9vbHMvVGltZXInXHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi90b29scy9TY3JlZW4nXHJcbmltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi90b29scy9TdG9wd2F0Y2gnXHJcbmltcG9ydCBNZXRyb25vbSBmcm9tICcuL3Rvb2xzL01ldHJvbm9tJ1xyXG5cclxuaW1wb3J0IFJlbWFyayBmcm9tICcuL1JlbWFyaydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgUmVjb21tZW5kYXRpb24gZnJvbSAnLi9SZWNvbW1lbmRhdGlvbidcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vQ29tbWVudHMnXHJcbmltcG9ydCBTaGFyZSBmcm9tICcuL1NoYXJlJ1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnXHJcbmltcG9ydCBIZWFkIGZyb20gJy4vSGVhZCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuXHJcbmltcG9ydCBzbCBmcm9tICcuLi9zdHlsZXMvbGF5b3V0LnN0eWwnXHJcbmltcG9ydCBzYSBmcm9tICcuLi9zdHlsZXMvYXJ0aWNsZS5zdHlsJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtcclxuICBwYWdlLCBsaW5rcywgbGFuZ1xyXG59KSB7XHJcbiAgY29uc3QgeyBuYXYsIHNsdWcsIHRpdGxlLCBjb250ZW50LCBkZXNjcmlwdGlvbiwgcHJvcHMsIGdsb2JhbCwgam9iLCBsaW5rLCBkYXRlIH0gPSBwYWdlXHJcbiAgY29uc3QgZ2V0TGF5b3V0ID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChzbHVnKSB7XHJcbiAgICAgIGNhc2UgJ2NhbGMnOiByZXR1cm4gPENhbGMgcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICd0cmFuc2Zlcic6IHJldHVybiA8VHJhbnNmZXIgcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICdzY3JlZW4nOiByZXR1cm4gPFNjcmVlbiBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3N0b3B3YXRjaCc6IHJldHVybiA8U3RvcHdhdGNoIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAndGltZXInOlxyXG4gICAgICBjYXNlICdhbGFybSc6IHJldHVybiA8VGltZXIgcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICdtZXRyb25vbSc6IHJldHVybiA8TWV0cm9ub20gcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBkZWZhdWx0OiByZXR1cm5cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgZGF0ZVN0ciA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogXCJsb25nXCIsIHllYXI6IFwibnVtZXJpY1wiLCBkYXk6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIgfSlcclxuICBjb25zdCBkYXRlSXNvID0gbmV3IERhdGUoZGF0ZSkudG9EYXRlU3RyaW5nKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgbGFuZz17bGFuZ30gbmF2PXtuYXZ9IHNsdWc9e3NsdWd9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8TmF2aWdhdGlvbiBsaW5rcz17bGlua3MudG9vbHN9IGxhbmc9e2xhbmd9IHNsdWc9e3NsdWd9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzbC5sYXlvdXR9PlxyXG4gICAgICAgIHtnZXRMYXlvdXQoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2EuYXJ0aWNsZX0gaXRlbVNjb3BlID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHRpbWUgaXRlbVByb3A9XCJkYXRlUHVibGlzaGVkXCIgZGF0ZVRpbWU9e2RhdGVJc299PntkYXRlU3RyfTwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFNoYXJlIGxpbms9e2xpbmt9IHRpdGxlPXt0aXRsZX0gbGFuZz17bGFuZ30gLz5cclxuICAgICAgICAgICAgICAgICAgPFJlbWFyayBjb250ZW50PXtjb250ZW50fSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFJlY29tbWVuZGF0aW9uIGxpbmtzQXJ0aWNsZXM9e2xpbmtzLmFydGljbGVzfSBsaW5rc05ld3M9e2xpbmtzLm5ld3N9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q29tbWVudHMgZGVzYz17Z2xvYmFsLmNvbW1lbnRzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciBsaW5rcz17bGlua3MuZm9vdGVyfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvb2x0aXAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9