webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Remark.js":
/*!******************************!*\
  !*** ./components/Remark.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Remark; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-react */ "./node_modules/remark-react/index.js");
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ "./node_modules/remark-gfm/index.js");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_md_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/md.styl */ "./styles/md.styl");
/* harmony import */ var _styles_md_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_md_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rehype-stringify */ "./node_modules/rehype-stringify/index.js");
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rehype_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-rehype */ "./node_modules/remark-rehype/index.js");
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remark_rehype__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components */ "./components/Components.js");

var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Remark.js";


 //import remarkgfm from 'remark-grid-tables'






function Remark(_ref) {
  var content = _ref.content,
      lang = _ref.lang;
  var remark = unified__WEBPACK_IMPORTED_MODULE_1___default()().use(remark_parse__WEBPACK_IMPORTED_MODULE_2___default.a).use(remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a).use(remark_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
    remarkReactComponents: {
      a: function a(props) {
        return Object(_Components__WEBPACK_IMPORTED_MODULE_8__["CustomLink"])(props, lang);
      },
      p: _Components__WEBPACK_IMPORTED_MODULE_8__["Paragraph"],
      h2: _Components__WEBPACK_IMPORTED_MODULE_8__["H2"],
      h3: _Components__WEBPACK_IMPORTED_MODULE_8__["H3"],
      strong: _Components__WEBPACK_IMPORTED_MODULE_8__["Strong"],
      em: _Components__WEBPACK_IMPORTED_MODULE_8__["Em"],
      img: _Components__WEBPACK_IMPORTED_MODULE_8__["Img"],
      ul: _Components__WEBPACK_IMPORTED_MODULE_8__["Ul"],
      ol: _Components__WEBPACK_IMPORTED_MODULE_8__["Ol"],
      table: _Components__WEBPACK_IMPORTED_MODULE_8__["Table"],
      td: _Components__WEBPACK_IMPORTED_MODULE_8__["Td"],
      tr: _Components__WEBPACK_IMPORTED_MODULE_8__["Tr"],
      thead: _Components__WEBPACK_IMPORTED_MODULE_8__["Thead"],
      tbody: _Components__WEBPACK_IMPORTED_MODULE_8__["Tbody"],
      pre: _Components__WEBPACK_IMPORTED_MODULE_8__["Pre"]
    }
  }).processSync(content).result;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_5___default.a.block,
    children: remark
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
_c = Remark;

var _c;

$RefreshReg$(_c, "Remark");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1hcmsuanMiXSwibmFtZXMiOlsiUmVtYXJrIiwiY29udGVudCIsImxhbmciLCJyZW1hcmsiLCJ1bmlmaWVkIiwidXNlIiwicGFyc2UiLCJyZW1hcmtnZm0iLCJyZW1hcmsycmVhY3QiLCJyZW1hcmtSZWFjdENvbXBvbmVudHMiLCJhIiwicHJvcHMiLCJDdXN0b21MaW5rIiwicCIsIlBhcmFncmFwaCIsImgyIiwiSDIiLCJoMyIsIkgzIiwic3Ryb25nIiwiU3Ryb25nIiwiZW0iLCJFbSIsImltZyIsIkltZyIsInVsIiwiVWwiLCJvbCIsIk9sIiwidGFibGUiLCJUYWJsZSIsInRkIiwiVGQiLCJ0ciIsIlRyIiwidGhlYWQiLCJUaGVhZCIsInRib2R5IiwiVGJvZHkiLCJwcmUiLCJQcmUiLCJwcm9jZXNzU3luYyIsInJlc3VsdCIsInMiLCJibG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRWUsU0FBU0EsTUFBVCxPQUFtQztBQUFBLE1BQWpCQyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDaEQsTUFBTUMsTUFBTSxHQUFHQyw4Q0FBTyxHQUNuQkMsR0FEWSxDQUNSQyxtREFEUSxFQUVaRCxHQUZZLENBRVJFLGlEQUZRLEVBR1pGLEdBSFksQ0FHUkcsbURBSFEsRUFHTTtBQUNqQkMseUJBQXFCLEVBQUU7QUFDckJDLE9BQUMsRUFBRSxXQUFBQyxLQUFLO0FBQUEsZUFBSUMsOERBQVUsQ0FBQ0QsS0FBRCxFQUFRVCxJQUFSLENBQWQ7QUFBQSxPQURhO0FBRXJCVyxPQUFDLEVBQUVDLHFEQUZrQjtBQUdyQkMsUUFBRSxFQUFFQyw4Q0FIaUI7QUFJckJDLFFBQUUsRUFBRUMsOENBSmlCO0FBS3JCQyxZQUFNLEVBQUVDLGtEQUxhO0FBTXJCQyxRQUFFLEVBQUVDLDhDQU5pQjtBQU9yQkMsU0FBRyxFQUFFQywrQ0FQZ0I7QUFRckJDLFFBQUUsRUFBRUMsOENBUmlCO0FBU3JCQyxRQUFFLEVBQUVDLDhDQVRpQjtBQVVyQkMsV0FBSyxFQUFFQyxpREFWYztBQVdyQkMsUUFBRSxFQUFFQyw4Q0FYaUI7QUFZckJDLFFBQUUsRUFBRUMsOENBWmlCO0FBYXJCQyxXQUFLLEVBQUVDLGlEQWJjO0FBY3JCQyxXQUFLLEVBQUVDLGlEQWRjO0FBZXJCQyxTQUFHLEVBQUVDLCtDQUFHQTtBQWZhO0FBRE4sR0FITixFQXNCWkMsV0F0QlksQ0FzQkF4QyxPQXRCQSxFQXNCU3lDLE1BdEJ4QjtBQXdCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsc0RBQUMsQ0FBQ0MsS0FBbEI7QUFBQSxjQUNHekM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtLQTlCdUJILE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjA5YTlkMTY4OWM0Nzc3M2ZkNDQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pZmllZCBmcm9tICd1bmlmaWVkJ1xyXG5pbXBvcnQgcGFyc2UgZnJvbSAncmVtYXJrLXBhcnNlJ1xyXG5pbXBvcnQgcmVtYXJrMnJlYWN0IGZyb20gJ3JlbWFyay1yZWFjdCdcclxuLy9pbXBvcnQgcmVtYXJrZ2ZtIGZyb20gJ3JlbWFyay1ncmlkLXRhYmxlcydcclxuaW1wb3J0IHJlbWFya2dmbSBmcm9tICdyZW1hcmstZ2ZtJ1xyXG5pbXBvcnQgcyBmcm9tICcuLi9zdHlsZXMvbWQuc3R5bCdcclxuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICdyZWh5cGUtc3RyaW5naWZ5J1xyXG5pbXBvcnQgcmVtYXJrMnJlaHlwZSBmcm9tICdyZW1hcmstcmVoeXBlJ1xyXG5cclxuXHJcbmltcG9ydCB7IEN1c3RvbUxpbmssIFBhcmFncmFwaCwgSDIsIEgzLCBTdHJvbmcsIEVtLCBJbWcsIFRhYmxlLCBVbCwgT2wsIFRkLCBUciwgVGhlYWQsIFRib2R5LCBQcmUgfSBmcm9tICcuL0NvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW1hcmsoeyBjb250ZW50LCBsYW5nIH0pIHtcclxuICBjb25zdCByZW1hcmsgPSB1bmlmaWVkKClcclxuICAgIC51c2UocGFyc2UpXHJcbiAgICAudXNlKHJlbWFya2dmbSlcclxuICAgIC51c2UocmVtYXJrMnJlYWN0LCB7XHJcbiAgICAgIHJlbWFya1JlYWN0Q29tcG9uZW50czoge1xyXG4gICAgICAgIGE6IHByb3BzID0+IEN1c3RvbUxpbmsocHJvcHMsIGxhbmcpLFxyXG4gICAgICAgIHA6IFBhcmFncmFwaCxcclxuICAgICAgICBoMjogSDIsXHJcbiAgICAgICAgaDM6IEgzLFxyXG4gICAgICAgIHN0cm9uZzogU3Ryb25nLFxyXG4gICAgICAgIGVtOiBFbSxcclxuICAgICAgICBpbWc6IEltZyxcclxuICAgICAgICB1bDogVWwsXHJcbiAgICAgICAgb2w6IE9sLFxyXG4gICAgICAgIHRhYmxlOiBUYWJsZSxcclxuICAgICAgICB0ZDogVGQsXHJcbiAgICAgICAgdHI6IFRyLFxyXG4gICAgICAgIHRoZWFkOiBUaGVhZCxcclxuICAgICAgICB0Ym9keTogVGJvZHksXHJcbiAgICAgICAgcHJlOiBQcmUsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgLnByb2Nlc3NTeW5jKGNvbnRlbnQpLnJlc3VsdDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfT5cclxuICAgICAge3JlbWFya31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==