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
  console.log(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_c13 = Td;
function Tr(props) {
  console.log(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_c14 = Tr;
function Pre(props) {
  //console.log(props)
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("pre", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.pre,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzLmpzIl0sIm5hbWVzIjpbIkgyIiwiY2hpbGRyZW4iLCJzIiwiaDIiLCJIMyIsImgzIiwiQ3VzdG9tTGluayIsImxhbmciLCJocmVmIiwibm8iLCJ0ZXN0IiwicmVsIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiYSIsIlBhcmFncmFwaCIsInAiLCJTdHJvbmciLCJzdHJvbmciLCJFbSIsImVtIiwiSW1nIiwic3JjIiwiYWx0IiwiaW1nIiwicmVxdWlyZSIsIlVsIiwidWwiLCJPbCIsIm9sIiwiVGFibGUiLCJwcm9wcyIsInRhYmxlIiwiVGhlYWQiLCJUYm9keSIsIlRkIiwiY29uc29sZSIsImxvZyIsIlRyIiwiUHJlIiwicHJlIiwiQ29kZSIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxTQUFTQSxFQUFULE9BQTBCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQy9CLHNCQUFPO0FBQUksYUFBUyxFQUFFQyxzREFBQyxDQUFDQyxFQUFqQjtBQUFBLGNBQ0pGO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7S0FKZUQsRTtBQUtULFNBQVNJLEVBQVQsUUFBMEI7QUFBQSxNQUFaSCxRQUFZLFNBQVpBLFFBQVk7QUFDL0Isc0JBQU87QUFBSSxhQUFTLEVBQUVDLHNEQUFDLENBQUNHLEVBQWpCO0FBQUEsY0FDSko7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFHRDtNQUplRyxFO0FBS1QsU0FBU0UsVUFBVCxRQUF3Q0MsSUFBeEMsRUFBOEM7QUFBQSxNQUF4Qk4sUUFBd0IsU0FBeEJBLFFBQXdCO0FBQUEsTUFBZE8sSUFBYyxTQUFkQSxJQUFjO0FBQ25ELE1BQU1DLEVBQUUsR0FBRyxFQUFYOztBQUNBLE1BQUksZUFBZUMsSUFBZixDQUFvQkYsSUFBcEIsQ0FBSixFQUEr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O0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7T0FIZWtDLEU7QUFJVCxTQUFTRyxFQUFULENBQVlQLEtBQVosRUFBbUI7QUFDeEJLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaO0FBQ0Esc0JBQU87QUFBQSxjQUFLQSxLQUFLLENBQUM5QjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO09BSGVxQyxFO0FBSVQsU0FBU0MsR0FBVCxDQUFhUixLQUFiLEVBQW9CO0FBQ3pCO0FBQ0Esc0JBQU87QUFBSyxhQUFTLEVBQUU3QixzREFBQyxDQUFDc0MsR0FBbEI7QUFBQSxjQUF3QlQsS0FBSyxDQUFDOUI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7T0FIZXNDLEc7QUFJVCxTQUFTRSxJQUFULFNBQTRCO0FBQUEsTUFBWnhDLFFBQVksVUFBWkEsUUFBWTtBQUNqQyxzQkFBTztBQUFNLGFBQVMsRUFBQyxJQUFoQjtBQUFxQixhQUFTLEVBQUVDLHNEQUFDLENBQUN3QyxJQUFsQztBQUFBLGNBQXlDekM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7T0FGZXdDLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjEwYTVkMjA3N2M3NjMxNmQzYjU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcyBmcm9tICcuLi9zdHlsZXMvbWQuc3R5bCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5leHBvcnQgZnVuY3Rpb24gSDIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxoMiBjbGFzc05hbWU9e3MuaDJ9PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvaDI+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEgzKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8aDMgY2xhc3NOYW1lPXtzLmgzfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2gzPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21MaW5rKHsgY2hpbGRyZW4sIGhyZWYgfSwgbGFuZykge1xyXG4gIGNvbnN0IG5vID0ge31cclxuICBpZiAoL15odHRwc1xcOlxcL1xcLy8udGVzdChocmVmKSkge1xyXG4gICAgbm8ucmVsID0gXCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgIG5vLnRhcmdldCA9IFwiX2JsYW5rXCJcclxuICB9XHJcbiAgcmV0dXJuIDxMaW5rIGhyZWY9e25vLnJlbCA9PT0gdW5kZWZpbmVkID8gJy8nICsgbGFuZyArICcvJyArIGhyZWYgOiBocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17cy5hfSB7Li4ubm99PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJhZ3JhcGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxwIGNsYXNzTmFtZT17cy5wfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L3A+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFN0cm9uZyh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLnN0cm9uZ30+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9zcGFuPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBFbSh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLmVtfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L3NwYW4+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEltZyh7IHNyYywgYWx0IH0pIHtcclxuICByZXR1cm4gPGltZyBjbGFzc05hbWU9e3MuaW1nfSBhbHQ9e2FsdH0gc3JjPXtyZXF1aXJlKCcuLi9pbWcvJyArIHNyYyl9IC8+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFVsKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8dWwgY2xhc3NOYW1lPXtzLnVsfT57Y2hpbGRyZW59PC91bD5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gT2woeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxvbCBjbGFzc05hbWU9e3Mub2x9PntjaGlsZHJlbn08L29sPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xyXG4gIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPXtzLnRhYmxlfT57cHJvcHMuY2hpbGRyZW59PC90YWJsZT5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlYWQocHJvcHMpIHtcclxuICByZXR1cm4gPHRoZWFkPntwcm9wcy5jaGlsZHJlbn08L3RoZWFkPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBUYm9keShwcm9wcykge1xyXG4gIHJldHVybiA8dGJvZHk+e3Byb3BzLmNoaWxkcmVufTwvdGJvZHk+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFRkKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgcmV0dXJuIDx0ZD57cHJvcHMuY2hpbGRyZW59PC90ZD5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVHIocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwcm9wcylcclxuICByZXR1cm4gPHRyPntwcm9wcy5jaGlsZHJlbn08L3RyPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQcmUocHJvcHMpIHtcclxuICAvL2NvbnNvbGUubG9nKHByb3BzKVxyXG4gIHJldHVybiA8cHJlIGNsYXNzTmFtZT17cy5wcmV9Pntwcm9wcy5jaGlsZHJlbn08L3ByZT5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ29kZSh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPGNvZGUgdHJhbnNsYXRlPVwibm9cIiBjbGFzc05hbWU9e3MuY29kZX0+e2NoaWxkcmVufTwvY29kZT5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=