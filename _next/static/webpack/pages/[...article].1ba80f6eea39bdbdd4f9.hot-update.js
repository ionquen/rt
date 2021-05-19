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
function Pre(_ref10) {
  var children = _ref10.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("pre", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_2___default.a.pre,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_c15 = Pre;
function Code(_ref11) {
  var children = _ref11.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("code", {
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

/***/ }),

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
      pre: _Components__WEBPACK_IMPORTED_MODULE_8__["Pre"],
      code: _Components__WEBPACK_IMPORTED_MODULE_8__["Code"]
    }
  }).processSync(content).result;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_5___default.a.block,
    children: remark
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlbWFyay5qcyJdLCJuYW1lcyI6WyJIMiIsImNoaWxkcmVuIiwicyIsImgyIiwiSDMiLCJoMyIsIkN1c3RvbUxpbmsiLCJsYW5nIiwiaHJlZiIsIm5vIiwidGVzdCIsInJlbCIsInRhcmdldCIsInVuZGVmaW5lZCIsImEiLCJQYXJhZ3JhcGgiLCJwIiwiU3Ryb25nIiwic3Ryb25nIiwiRW0iLCJlbSIsIkltZyIsInNyYyIsImFsdCIsImltZyIsInJlcXVpcmUiLCJVbCIsInVsIiwiT2wiLCJvbCIsIlRhYmxlIiwicHJvcHMiLCJ0YWJsZSIsIlRoZWFkIiwiVGJvZHkiLCJUZCIsIlRyIiwiUHJlIiwicHJlIiwiQ29kZSIsImNvZGUiLCJSZW1hcmsiLCJjb250ZW50IiwicmVtYXJrIiwidW5pZmllZCIsInVzZSIsInBhcnNlIiwicmVtYXJrZ2ZtIiwicmVtYXJrMnJlYWN0IiwicmVtYXJrUmVhY3RDb21wb25lbnRzIiwidGQiLCJ0ciIsInRoZWFkIiwidGJvZHkiLCJwcm9jZXNzU3luYyIsInJlc3VsdCIsImJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sU0FBU0EsRUFBVCxPQUEwQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMvQixzQkFBTztBQUFJLGFBQVMsRUFBRUMsc0RBQUMsQ0FBQ0MsRUFBakI7QUFBQSxjQUNKRjtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdEO0tBSmVELEU7QUFLVCxTQUFTSSxFQUFULFFBQTBCO0FBQUEsTUFBWkgsUUFBWSxTQUFaQSxRQUFZO0FBQy9CLHNCQUFPO0FBQUksYUFBUyxFQUFFQyxzREFBQyxDQUFDRyxFQUFqQjtBQUFBLGNBQ0pKO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFB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QURRLEVBRVpELEdBRlksQ0FFUkUsaURBRlEsRUFHWkYsR0FIWSxDQUdSRyxtREFIUSxFQUdNO0FBQ2pCQyx5QkFBcUIsRUFBRTtBQUNyQm5DLE9BQUMsRUFBRSxXQUFBaUIsS0FBSztBQUFBLGVBQUl6Qiw4REFBVSxDQUFDeUIsS0FBRCxFQUFReEIsSUFBUixDQUFkO0FBQUEsT0FEYTtBQUVyQlMsT0FBQyxFQUFFRCxxREFGa0I7QUFHckJaLFFBQUUsRUFBRUgsOENBSGlCO0FBSXJCSyxRQUFFLEVBQUVELDhDQUppQjtBQUtyQmMsWUFBTSxFQUFFRCxrREFMYTtBQU1yQkcsUUFBRSxFQUFFRCw4Q0FOaUI7QUFPckJLLFNBQUcsRUFBRUgsK0NBUGdCO0FBUXJCTSxRQUFFLEVBQUVELDhDQVJpQjtBQVNyQkcsUUFBRSxFQUFFRCw4Q0FUaUI7QUFVckJJLFdBQUssRUFBRUYsaURBVmM7QUFXckJvQixRQUFFLEVBQUVmLDhDQVhpQjtBQVlyQmdCLFFBQUUsRUFBRWYsOENBWmlCO0FBYXJCZ0IsV0FBSyxFQUFFbkIsaURBYmM7QUFjckJvQixXQUFLLEVBQUVuQixpREFkYztBQWVyQkksU0FBRyxFQUFFRCwrQ0FmZ0I7QUFnQnJCRyxVQUFJLEVBQUVELGdEQUFJQTtBQWhCVztBQUROLEdBSE4sRUF1QlplLFdBdkJZLENBdUJBWixPQXZCQSxFQXVCU2EsTUF2QnhCO0FBeUJBLHNCQUNFO0FBQUssYUFBUyxFQUFFckQsc0RBQUMsQ0FBQ3NELEtBQWxCO0FBQUEsY0FDR2I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtLQS9CdUJGLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjFiYTgwZjZlZWEzOWJkYmRkNGY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcyBmcm9tICcuLi9zdHlsZXMvbWQuc3R5bCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5leHBvcnQgZnVuY3Rpb24gSDIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxoMiBjbGFzc05hbWU9e3MuaDJ9PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvaDI+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEgzKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8aDMgY2xhc3NOYW1lPXtzLmgzfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2gzPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21MaW5rKHsgY2hpbGRyZW4sIGhyZWYgfSwgbGFuZykge1xyXG4gIGNvbnN0IG5vID0ge31cclxuICBpZiAoL15odHRwc1xcOlxcL1xcLy8udGVzdChocmVmKSkge1xyXG4gICAgbm8ucmVsID0gXCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgIG5vLnRhcmdldCA9IFwiX2JsYW5rXCJcclxuICB9XHJcbiAgcmV0dXJuIDxMaW5rIGhyZWY9e25vLnJlbCA9PT0gdW5kZWZpbmVkID8gJy8nICsgbGFuZyArICcvJyArIGhyZWYgOiBocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17cy5hfSB7Li4ubm99PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJhZ3JhcGgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxwIGNsYXNzTmFtZT17cy5wfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L3A+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFN0cm9uZyh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLnN0cm9uZ30+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9zcGFuPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBFbSh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLmVtfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L3NwYW4+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEltZyh7IHNyYywgYWx0IH0pIHtcclxuICByZXR1cm4gPGltZyBjbGFzc05hbWU9e3MuaW1nfSBhbHQ9e2FsdH0gc3JjPXtyZXF1aXJlKCcuLi9pbWcvJyArIHNyYyl9IC8+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFVsKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8dWwgY2xhc3NOYW1lPXtzLnVsfT57Y2hpbGRyZW59PC91bD5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gT2woeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxvbCBjbGFzc05hbWU9e3Mub2x9PntjaGlsZHJlbn08L29sPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xyXG4gIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPXtzLnRhYmxlfT57cHJvcHMuY2hpbGRyZW59PC90YWJsZT5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlYWQocHJvcHMpIHtcclxuICByZXR1cm4gPHRoZWFkPntwcm9wcy5jaGlsZHJlbn08L3RoZWFkPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBUYm9keShwcm9wcykge1xyXG4gIHJldHVybiA8dGJvZHk+e3Byb3BzLmNoaWxkcmVufTwvdGJvZHk+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFRkKHByb3BzKSB7XHJcbiAgcmV0dXJuIDx0ZD57cHJvcHMuY2hpbGRyZW59PC90ZD5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVHIocHJvcHMpIHtcclxuICByZXR1cm4gPHRyPntwcm9wcy5jaGlsZHJlbn08L3RyPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBQcmUoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxwcmUgY2xhc3NOYW1lPXtzLnByZX0+e2NoaWxkcmVufTwvcHJlPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDb2RlKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8Y29kZSBjbGFzc05hbWU9e3MuY29kZX0+e2NoaWxkcmVufTwvY29kZT5cclxufSIsImltcG9ydCB1bmlmaWVkIGZyb20gJ3VuaWZpZWQnXHJcbmltcG9ydCBwYXJzZSBmcm9tICdyZW1hcmstcGFyc2UnXHJcbmltcG9ydCByZW1hcmsycmVhY3QgZnJvbSAncmVtYXJrLXJlYWN0J1xyXG4vL2ltcG9ydCByZW1hcmtnZm0gZnJvbSAncmVtYXJrLWdyaWQtdGFibGVzJ1xyXG5pbXBvcnQgcmVtYXJrZ2ZtIGZyb20gJ3JlbWFyay1nZm0nXHJcbmltcG9ydCBzIGZyb20gJy4uL3N0eWxlcy9tZC5zdHlsJ1xyXG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJ3JlaHlwZS1zdHJpbmdpZnknXHJcbmltcG9ydCByZW1hcmsycmVoeXBlIGZyb20gJ3JlbWFyay1yZWh5cGUnXHJcblxyXG5cclxuaW1wb3J0IHsgQ3VzdG9tTGluaywgUGFyYWdyYXBoLCBIMiwgSDMsIFN0cm9uZywgRW0sIEltZywgVGFibGUsIFVsLCBPbCwgVGQsIFRyLCBUaGVhZCwgVGJvZHksIFByZSwgQ29kZSB9IGZyb20gJy4vQ29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbWFyayh7IGNvbnRlbnQsIGxhbmcgfSkge1xyXG4gIGNvbnN0IHJlbWFyayA9IHVuaWZpZWQoKVxyXG4gICAgLnVzZShwYXJzZSlcclxuICAgIC51c2UocmVtYXJrZ2ZtKVxyXG4gICAgLnVzZShyZW1hcmsycmVhY3QsIHtcclxuICAgICAgcmVtYXJrUmVhY3RDb21wb25lbnRzOiB7XHJcbiAgICAgICAgYTogcHJvcHMgPT4gQ3VzdG9tTGluayhwcm9wcywgbGFuZyksXHJcbiAgICAgICAgcDogUGFyYWdyYXBoLFxyXG4gICAgICAgIGgyOiBIMixcclxuICAgICAgICBoMzogSDMsXHJcbiAgICAgICAgc3Ryb25nOiBTdHJvbmcsXHJcbiAgICAgICAgZW06IEVtLFxyXG4gICAgICAgIGltZzogSW1nLFxyXG4gICAgICAgIHVsOiBVbCxcclxuICAgICAgICBvbDogT2wsXHJcbiAgICAgICAgdGFibGU6IFRhYmxlLFxyXG4gICAgICAgIHRkOiBUZCxcclxuICAgICAgICB0cjogVHIsXHJcbiAgICAgICAgdGhlYWQ6IFRoZWFkLFxyXG4gICAgICAgIHRib2R5OiBUYm9keSxcclxuICAgICAgICBwcmU6IFByZSxcclxuICAgICAgICBjb2RlOiBDb2RlLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIC5wcm9jZXNzU3luYyhjb250ZW50KS5yZXN1bHQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5ibG9ja30+XHJcbiAgICAgIHtyZW1hcmt9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=