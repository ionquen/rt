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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicGFnZSIsImxpbmtzIiwibGFuZyIsIm5hdiIsInNsdWciLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInByb3BzIiwiZ2xvYmFsIiwiam9iIiwibGluayIsImRhdGUiLCJnZXRMYXlvdXQiLCJkYXRlU3RyIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsInllYXIiLCJkYXkiLCJtb250aCIsImRhdGVJc28iLCJ0b0lTT1N0cmluZyIsInRvb2xzIiwic2wiLCJsYXlvdXQiLCJzYSIsImFydGljbGUiLCJhcnRpY2xlcyIsIm5ld3MiLCJjb21tZW50cyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FFWjtBQUFBOztBQUFBLE1BRERDLElBQ0MsUUFEREEsSUFDQztBQUFBLE1BREtDLEtBQ0wsUUFES0EsS0FDTDtBQUFBLE1BRFlDLElBQ1osUUFEWUEsSUFDWjtBQUFBLE1BQ09DLEdBRFAsR0FDa0ZILElBRGxGLENBQ09HLEdBRFA7QUFBQSxNQUNZQyxJQURaLEdBQ2tGSixJQURsRixDQUNZSSxJQURaO0FBQUEsTUFDa0JDLEtBRGxCLEdBQ2tGTCxJQURsRixDQUNrQkssS0FEbEI7QUFBQSxNQUN5QkMsT0FEekIsR0FDa0ZOLElBRGxGLENBQ3lCTSxPQUR6QjtBQUFBLE1BQ2tDQyxXQURsQyxHQUNrRlAsSUFEbEYsQ0FDa0NPLFdBRGxDO0FBQUEsTUFDK0NDLEtBRC9DLEdBQ2tGUixJQURsRixDQUMrQ1EsS0FEL0M7QUFBQSxNQUNzREMsTUFEdEQsR0FDa0ZULElBRGxGLENBQ3NEUyxN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QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFXRSxxRUFBQyx1REFBRDtBQUFnQiwyQkFBYSxFQUFFRCxLQUFLLENBQUMyQixRQUFyQztBQUErQyx1QkFBUyxFQUFFM0IsS0FBSyxDQUFDNEI7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFjRSxxRUFBQyxrREFBRDtBQUFVLGdCQUFJLEVBQUVwQixNQUFNLENBQUNxQjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQW9CRSxxRUFBQyxnREFBRDtBQUFRLGFBQUssRUFBRTdCLEtBQUssQ0FBQzhCO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUF5QkUscUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRjtBQUFBLGtCQURGO0FBNkJEO0tBL0N1QmhDLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLmIxZDkzZWU3YzFiMDI4N2QwZjc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsYyBmcm9tICcuL3Rvb2xzL0NhbGMnXHJcbmltcG9ydCBUcmFuc2ZlciBmcm9tICcuL3Rvb2xzL1RyYW5zZmVyJ1xyXG5pbXBvcnQgVGltZXIgZnJvbSAnLi90b29scy9UaW1lcidcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL3Rvb2xzL1NjcmVlbidcclxuaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL3Rvb2xzL1N0b3B3YXRjaCdcclxuaW1wb3J0IE1ldHJvbm9tIGZyb20gJy4vdG9vbHMvTWV0cm9ub20nXHJcblxyXG5pbXBvcnQgUmVtYXJrIGZyb20gJy4vUmVtYXJrJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcbmltcG9ydCBSZWNvbW1lbmRhdGlvbiBmcm9tICcuL1JlY29tbWVuZGF0aW9uJ1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cydcclxuaW1wb3J0IFNoYXJlIGZyb20gJy4vU2hhcmUnXHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi9IZWFkJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5cclxuaW1wb3J0IHNsIGZyb20gJy4uL3N0eWxlcy9sYXlvdXQuc3R5bCdcclxuaW1wb3J0IHNhIGZyb20gJy4uL3N0eWxlcy9hcnRpY2xlLnN0eWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xyXG4gIHBhZ2UsIGxpbmtzLCBsYW5nXHJcbn0pIHtcclxuICBjb25zdCB7IG5hdiwgc2x1ZywgdGl0bGUsIGNvbnRlbnQsIGRlc2NyaXB0aW9uLCBwcm9wcywgZ2xvYmFsLCBqb2IsIGxpbmssIGRhdGUgfSA9IHBhZ2VcclxuICBjb25zdCBnZXRMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHNsdWcpIHtcclxuICAgICAgY2FzZSAnY2FsYyc6IHJldHVybiA8Q2FsYyBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3RyYW5zZmVyJzogcmV0dXJuIDxUcmFuc2ZlciBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ3NjcmVlbic6IHJldHVybiA8U2NyZWVuIHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgY2FzZSAnc3RvcHdhdGNoJzogcmV0dXJuIDxTdG9wd2F0Y2ggcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICBjYXNlICd0aW1lcic6XHJcbiAgICAgIGNhc2UgJ2FsYXJtJzogcmV0dXJuIDxUaW1lciBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGNhc2UgJ21ldHJvbm9tJzogcmV0dXJuIDxNZXRyb25vbSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBkYXRlU3RyID0gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB5ZWFyOiBcIm51bWVyaWNcIiwgZGF5OiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiIH0pXHJcbiAgY29uc3QgZGF0ZUlzbyA9IG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgbGFuZz17bGFuZ30gbmF2PXtuYXZ9IHNsdWc9e3NsdWd9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8TmF2aWdhdGlvbiBsaW5rcz17bGlua3MudG9vbHN9IGxhbmc9e2xhbmd9IHNsdWc9e3NsdWd9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzbC5sYXlvdXR9PlxyXG4gICAgICAgIHtnZXRMYXlvdXQoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2EuYXJ0aWNsZX0gaXRlbVNjb3BlID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHRpbWUgaXRlbVByb3A9XCJkYXRlUHVibGlzaGVkXCIgZGF0ZVRpbWU9e2RhdGVJc299PntkYXRlU3RyfTwvdGltZT5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFNoYXJlIGxpbms9e2xpbmt9IHRpdGxlPXt0aXRsZX0gbGFuZz17bGFuZ30gLz5cclxuICAgICAgICAgICAgICAgICAgPFJlbWFyayBjb250ZW50PXtjb250ZW50fSBsYW5nPXtsYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFJlY29tbWVuZGF0aW9uIGxpbmtzQXJ0aWNsZXM9e2xpbmtzLmFydGljbGVzfSBsaW5rc05ld3M9e2xpbmtzLm5ld3N9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Q29tbWVudHMgZGVzYz17Z2xvYmFsLmNvbW1lbnRzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciBsaW5rcz17bGlua3MuZm9vdGVyfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRvb2x0aXAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9