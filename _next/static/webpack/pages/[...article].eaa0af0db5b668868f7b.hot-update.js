webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/Components.js":
/*!**********************************!*\
  !*** ./components/Components.js ***!
  \**********************************/
/*! exports provided: H2, H3, CustomLink, Paragraph, Strong, Em, Img, Table, Ul, Ol */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ol", function() { return Ol; });
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_md_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/md.styl */ "./styles/md.styl");
/* harmony import */ var _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_md_styl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\Components.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function H2(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.h2,
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.h3,
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
  if (/^https\:\/\//.test(href)) no = (Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("no"), {
    rel: "nofollow noopener noreferrer"
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: '/' + lang + '/' + href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", _objectSpread(_objectSpread({
      className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.a
    }, no), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, this);
}
_c3 = CustomLink;
function Paragraph(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.p,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c4 = Paragraph;
function Strong(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.strong,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c5 = Strong;
function Em(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.em,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c6 = Em;
function Img(_ref7) {
  var src = _ref7.src,
      alt = _ref7.alt;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.img,
    alt: alt,
    src: __webpack_require__("./img sync recursive ^\\.\\/.*$")("./" + src)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c7 = Img;
function Table(_ref8) {
  var children = _ref8.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.table,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c8 = Table;
function Ul(_ref9) {
  var children = _ref9.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.ul,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_c9 = Ul;
function Ol(_ref10) {
  var children = _ref10.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
    className: _styles_md_styl__WEBPACK_IMPORTED_MODULE_3___default.a.ol,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_c10 = Ol;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "H2");
$RefreshReg$(_c2, "H3");
$RefreshReg$(_c3, "CustomLink");
$RefreshReg$(_c4, "Paragraph");
$RefreshReg$(_c5, "Strong");
$RefreshReg$(_c6, "Em");
$RefreshReg$(_c7, "Img");
$RefreshReg$(_c8, "Table");
$RefreshReg$(_c9, "Ul");
$RefreshReg$(_c10, "Ol");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnRzLmpzIl0sIm5hbWVzIjpbIkgyIiwiY2hpbGRyZW4iLCJzIiwiaDIiLCJIMyIsImgzIiwiQ3VzdG9tTGluayIsImxhbmciLCJocmVmIiwibm8iLCJ0ZXN0IiwicmVsIiwiYSIsIlBhcmFncmFwaCIsInAiLCJTdHJvbmciLCJzdHJvbmciLCJFbSIsImVtIiwiSW1nIiwic3JjIiwiYWx0IiwiaW1nIiwicmVxdWlyZSIsIlRhYmxlIiwidGFibGUiLCJVbCIsInVsIiwiT2wiLCJvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sU0FBU0EsRUFBVCxPQUEwQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMvQixzQkFBTztBQUFJLGFBQVMsRUFBRUMsc0RBQUMsQ0FBQ0MsRUFBakI7QUFBQSxjQUNKRjtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdEO0tBSmVELEU7QUFLVCxTQUFTSSxFQUFULFFBQTBCO0FBQUEsTUFBWkgsUUFBWSxTQUFaQSxRQUFZO0FBQy9CLHNCQUFPO0FBQUksYUFBUyxFQUFFQyxzREFBQyxDQUFDRyxFQUFqQjtBQUFBLGNBQ0pKO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7TUFKZUcsRTtBQUtULFNBQVNFLFVBQVQsUUFBd0NDLElBQXhDLEVBQThDO0FBQUEsTUFBeEJOLFFBQXdCLFNBQXhCQSxRQUF3QjtBQUFBLE1BQWRPLElBQWMsU0FBZEEsSUFBYztBQUNuRCxNQUFNQyxFQUFFLEdBQUcsRUFBWDtBQUNBLE1BQUksZUFBZUMsSUFBZixDQUFvQkYsSUFBcEIsQ0FBSixFQUErQkMsRUFBRSw0SUFBRztBQUFFRSxPQUFHLEVBQUU7QUFBUCxHQUFILENBQUY7QUFDL0Isc0JBQU8scUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsTUFBTUosSUFBTixHQUFhLEdBQWIsR0FBbUJDLElBQS9CO0FBQUEsMkJBQ0w7QUFBRyxlQUFTLEVBQUVOLHNEQUFDLENBQUNVO0FBQWhCLE9BQXVCSCxFQUF2QjtBQUFBLGdCQUNHUjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLRDtNQVJlSyxVO0FBU1QsU0FBU08sU0FBVCxRQUFpQztBQUFBLE1BQVpaLFFBQVksU0FBWkEsUUFBWTtBQUN0QyxzQkFBTztBQUFHLGFBQVMsRUFBRUMsc0RBQUMsQ0FBQ1ksQ0FBaEI7QUFBQSxjQUNKYjtBQURJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdEO01BSmVZLFM7QUFLVCxTQUFTRSxNQUFULFFBQThCO0FBQUEsTUFBWmQsUUFBWSxTQUFaQSxRQUFZO0FBQ25DLHNCQUFPO0FBQU0sYUFBUyxFQUFFQyxzREFBQyxDQUFDYyxNQUFuQjtBQUFBLGNBQ0pmO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7TUFKZWMsTTtBQUtULFNBQVNFLEVBQVQsUUFBMEI7QUFBQSxNQUFaaEIsUUFBWSxTQUFaQSxRQUFZO0FBQy9CLHNCQUFPO0FBQU0sYUFBUyxFQUFFQyxzREFBQyxDQUFDZ0IsRUFBbkI7QUFBQSxjQUNKakI7QUFESTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFHRDtNQUplZ0IsRTtBQUtULFNBQVNFLEdBQVQsUUFBMkI7QUFBQSxNQUFaQyxHQUFZLFNBQVpBLEdBQVk7QUFBQSxNQUFQQyxHQUFPLFNBQVBBLEdBQU87QUFDaEMsc0JBQU87QUFBSyxhQUFTLEVBQUVuQixzREFBQyxDQUFDb0IsR0FBbEI7QUFBdUIsT0FBRyxFQUFFRCxHQUE1QjtBQUFpQyxPQUFHLEVBQUVFLHVEQUFRLElBQVMsR0FBR0gsR0FBYjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtNQUZlRCxHO0FBR1QsU0FBU0ssS0FBVCxRQUE2QjtBQUFBLE1BQVp2QixRQUFZLFNBQVpBLFFBQVk7QUFDbEMsc0JBQU87QUFBTyxhQUFTLEVBQUVDLHNEQUFDLENBQUN1QixLQUFwQjtBQUFBLGNBQTRCeEI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7TUFGZXVCLEs7QUFHVCxTQUFTRSxFQUFULFFBQTBCO0FBQUEsTUFBWnpCLFFBQVksU0FBWkEsUUFBWTtBQUMvQixzQkFBTztBQUFJLGFBQVMsRUFBRUMsc0RBQUMsQ0FBQ3lCLEVBQWpCO0FBQUEsY0FBc0IxQjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtNQUZleUIsRTtBQUdULFNBQVNFLEVBQVQsU0FBMEI7QUFBQSxNQUFaM0IsUUFBWSxVQUFaQSxRQUFZO0FBQy9CLHNCQUFPO0FBQUksYUFBUyxFQUFFQyxzREFBQyxDQUFDMkIsRUFBakI7QUFBQSxjQUFzQjVCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO09BRmUyQixFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS5lYWEwYWYwZGI1YjY2ODg2OGY3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHMgZnJvbSAnLi4vc3R5bGVzL21kLnN0eWwnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuZXhwb3J0IGZ1bmN0aW9uIEgyKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8aDIgY2xhc3NOYW1lPXtzLmgyfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2gyPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBIMyh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPGgzIGNsYXNzTmFtZT17cy5oM30+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9oMz5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tTGluayh7IGNoaWxkcmVuLCBocmVmIH0sIGxhbmcpIHtcclxuICBjb25zdCBubyA9IHt9XHJcbiAgaWYgKC9eaHR0cHNcXDpcXC9cXC8vLnRlc3QoaHJlZikpIG5vID0geyByZWw6IFwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiIH1cclxuICByZXR1cm4gPExpbmsgaHJlZj17Jy8nICsgbGFuZyArICcvJyArIGhyZWZ9PlxyXG4gICAgPGEgY2xhc3NOYW1lPXtzLmF9IHsuLi5ub30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYT5cclxuICA8L0xpbms+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcmFncmFwaCh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPHAgY2xhc3NOYW1lPXtzLnB9PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvcD5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gU3Ryb25nKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3Muc3Ryb25nfT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L3NwYW4+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEVtKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3MuZW19PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvc3Bhbj5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gSW1nKHsgc3JjLCBhbHQgfSkge1xyXG4gIHJldHVybiA8aW1nIGNsYXNzTmFtZT17cy5pbWd9IGFsdD17YWx0fSBzcmM9e3JlcXVpcmUoJy4uL2ltZy8nICsgc3JjKX0gLz5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGFibGUoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDx0YWJsZSBjbGFzc05hbWU9e3MudGFibGV9PntjaGlsZHJlbn08L3RhYmxlPlxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBVbCh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPHVsIGNsYXNzTmFtZT17cy51bH0+e2NoaWxkcmVufTwvdWw+XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIE9sKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiA8b2wgY2xhc3NOYW1lPXtzLm9sfT57Y2hpbGRyZW59PC9vbD5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=