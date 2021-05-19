webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Components.js":
/*!**********************************!*\
  !*** ./components/Components.js ***!
  \**********************************/
/*! exports provided: H2, H3, CustomLink, Paragraph, Strong, Em, Img, Ul, Ol, Table, Thead, Tbody, Td, Tr, Pre, Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLink", function() { return CustomLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return Strong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Em", function() { return Em; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ol", function() { return Ol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thead", function() { return Thead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tbody", function() { return Tbody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Td", function() { return Td; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tr", function() { return Tr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_md_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/md.styl */ "./styles/md.styl");
/* harmony import */ var _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_md_styl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Components.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function H2(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.h2,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
_c = H2;
function H3(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.h3,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
_c2 = H3;
function CustomLink(_ref3, lang) {
  var children = _ref3.children,
      href = _ref3.href;
  var no = {};

  if (/^https\:\/\//.test(href)) {
    no.rel = "nofollow noopener noreferrer";
    no.target = "_blank";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: no.rel === undefined ? '/' + lang + '/' + href : href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", _objectSpread(_objectSpread({
      className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.a
    }, no), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, this);
}
_c3 = CustomLink;
function Paragraph(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.p,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c4 = Paragraph;
function Strong(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.strong,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c5 = Strong;
function Em(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.em,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c6 = Em;
function Img(_ref7) {
  var src = _ref7.src,
      alt = _ref7.alt;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.img,
    alt: alt,
    src: __webpack_require__("./img sync recursive ^\\.\\/.*$")("./" + src)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c7 = Img;
function Ul(_ref8) {
  var children = _ref8.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.ul,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_c8 = Ul;
function Ol(_ref9) {
  var children = _ref9.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ol", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.ol,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_c9 = Ol;
function Table(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("table", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.table,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_c10 = Table;
function Thead(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("thead", {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_c11 = Thead;
function Tbody(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tbody", {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_c12 = Tbody;
function Td(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c13 = Td;
function Tr(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_c14 = Tr;
function Pre(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("pre", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.pre,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_c15 = Pre;
function Code(_ref10) {
  var children = _ref10.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("code", {
    translate: "no",
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.code,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_c16 = Code;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;

$RefreshReg$(_c, "H2");
$RefreshReg$(_c2, "H3");
$RefreshReg$(_c3, "CustomLink");
$RefreshReg$(_c4, "Paragraph");
$RefreshReg$(_c5, "Strong");
$RefreshReg$(_c6, "Em");
$RefreshReg$(_c7, "Img");
$RefreshReg$(_c8, "Ul");
$RefreshReg$(_c9, "Ol");
$RefreshReg$(_c10, "Table");
$RefreshReg$(_c11, "Thead");
$RefreshReg$(_c12, "Tbody");
$RefreshReg$(_c13, "Td");
$RefreshReg$(_c14, "Tr");
$RefreshReg$(_c15, "Pre");
$RefreshReg$(_c16, "Code");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzLmpzIl0sIm5hbWVzIjpbIkgyIiwiY2hpbGRyZW4iLCJzIiwiaDIiLCJIMyIsImgzIiwiQ3VzdG9tTGluayIsImxhbmciLCJocmVmIiwibm8iLCJ0ZXN0IiwicmVsIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiYSIsIlBhcmFncmFwaCIsInAiLCJTdHJvbmciLCJzdHJvbmciLCJFbSIsImVtIiwiSW1nIiwic3JjIiwiYWx0IiwiaW1nIiwicmVxdWlyZSIsIlVsIiwidWwiLCJPbCIsIm9sIiwiVGFibGUiLCJwcm9wcyIsInRhYmxlIiwiVGhlYWQiLCJUYm9keSIsIlRkIiwiVHIiLCJQcmUiLCJwcmUiLCJDb2RlIiwiY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLFNBQVNBLEVBQVQsT0FBMEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDL0Isc0JBQU87QUFBSSxhQUFTLEVBQUVDLHNEQUFDLENBQUNDLEVBQWpCO0FBQUEsY0FDSkY7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFHRDtLQUplRCxFO0FBS1QsU0FBU0ksRUFBVCxRQUEwQjtBQUFBLE1BQVpILFFBQVksU0FBWkEsUUFBWTtBQUMvQixzQkFBTztBQUFJLGFBQVMsRUFBRUMsc0RBQUMsQ0FBQ0csRUFBakI7QUFBQSxjQUNKSjtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdEO01BSmVHLEU7QUFLVCxTQUFTRSxVQUFULFFBQXdDQyxJQUF4QyxFQUE4QztBQUFBLE1BQXhCTixRQUF3QixTQUF4QkEsUUFBd0I7QUFBQSxNQUFkTyxJQUFjLFNBQWRBLElBQWM7QUFDbkQsTUFBTUMsRUFBRSxHQUFHLEVBQVg7O0FBQ0EsTUFBSSxlQUFlQyxJQUFmLENBQW9CRixJQUFwQixDQUFKLEVBQStCO0FBQzdCQyxNQUFFLENB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LFNBQVNDLEVBQVQsQ0FBWUwsS0FBWixFQUFtQjtBQUN4QixzQkFBTztBQUFBLGNBQUtBLEtBQUssQ0FBQzlCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7T0FGZW1DLEU7QUFHVCxTQUFTQyxHQUFULENBQWFOLEtBQWIsRUFBb0I7QUFDekIsc0JBQU87QUFBSyxhQUFTLEVBQUU3QixzREFBQyxDQUFDb0MsR0FBbEI7QUFBQSxjQUF3QlAsS0FBSyxDQUFDOUI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7T0FGZW9DLEc7QUFHVCxTQUFTRSxJQUFULFNBQTRCO0FBQUEsTUFBWnRDLFFBQVksVUFBWkEsUUFBWTtBQUNqQyxzQkFBTztBQUFNLGFBQVMsRUFBQyxJQUFoQjtBQUFxQixhQUFTLEVBQUVDLHNEQUFDLENBQUNzQyxJQUFsQztBQUFBLGNBQXlDdkM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7T0FGZXNDLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLmE1MWE5ZTJhMjVmZWFmMDZhYjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcyBmcm9tICcuLi9zdHlsZXMvbWQuc3R5bCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5leHBvcnQgZnVuY3Rpb24gSDIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxoMiBjbGFzc05hbWU9e3MuaDJ9PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvaDI+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEgzKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8aDMgY2xhc3NOYW1lPXtzLmgzfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2gzPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21MaW5rKHsgY2hpbGRyZW4sIGhyZWYgfSwgbGFuZykge1xyXG4gIGNvbnN0IG5vID0ge31cclxuICBpZiAoL15odHRwc1xcOlxcL1xcLy8udGVzdChocmVmKSkge1xyXG4gICAgbm8ucmVsID0gXCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgIG5vLnRhcmdldCA9IFwiX2JsYW5rXCJcclxuICB9XHJcbiAgcmV0dXJuIDxMaW5rIGhyZWY9e25vLnJlbCA9PT0gdW5kZWZpbmVkID8gJy8nICsgbGFuZyArICcvJyArIGhyZWYgOiBocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17cy5hfSB7Li4ubm99PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJhZ3JhcGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxwIGNsYXNzTmFtZT17cy5wfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L3A+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFN0cm9uZyh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLnN0cm9uZ30+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9zcGFuPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBFbSh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLmVtfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L3NwYW4+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEltZyh7IHNyYywgYWx0IH0pIHtcclxuICByZXR1cm4gPGltZyBjbGFzc05hbWU9e3MuaW1nfSBhbHQ9e2FsdH0gc3JjPXtyZXF1aXJlKCcuLi9pbWcvJyArIHNyYyl9IC8+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFVsKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8dWwgY2xhc3NOYW1lPXtzLnVsfT57Y2hpbGRyZW59PC91bD5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gT2woeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxvbCBjbGFzc05hbWU9e3Mub2x9PntjaGlsZHJlbn08L29sPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xyXG4gIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPXtzLnRhYmxlfT57cHJvcHMuY2hpbGRyZW59PC90YWJsZT5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlYWQocHJvcHMpIHtcclxuICByZXR1cm4gPHRoZWFkPntwcm9wcy5jaGlsZHJlbn08L3RoZWFkPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBUYm9keShwcm9wcykge1xyXG4gIHJldHVybiA8dGJvZHk+e3Byb3BzLmNoaWxkcmVufTwvdGJvZHk+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFRkKHByb3BzKSB7XHJcbiAgcmV0dXJuIDx0ZD57cHJvcHMuY2hpbGRyZW59PC90ZD5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVHIocHJvcHMpIHtcclxuICByZXR1cm4gPHRyPntwcm9wcy5jaGlsZHJlbn08L3RyPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQcmUocHJvcHMpIHtcclxuICByZXR1cm4gPHByZSBjbGFzc05hbWU9e3MucHJlfT57cHJvcHMuY2hpbGRyZW59PC9wcmU+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENvZGUoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxjb2RlIHRyYW5zbGF0ZT1cIm5vXCIgY2xhc3NOYW1lPXtzLmNvZGV9PntjaGlsZHJlbn08L2NvZGU+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9