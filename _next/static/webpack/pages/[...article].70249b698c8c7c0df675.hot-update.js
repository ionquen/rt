webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/tools/Calc.js":
/*!**********************************!*\
  !*** ./components/tools/Calc.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calc; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/tools/calc.styl */ "./styles/tools/calc.styl");
/* harmony import */ var _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var math_expression_evaluator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! math-expression-evaluator */ "./node_modules/math-expression-evaluator/src/formula_evaluator.js");
/* harmony import */ var math_expression_evaluator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(math_expression_evaluator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_fullscreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/fullscreen */ "./components/elements/fullscreen.js");



var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\tools\\Calc.js",
    _s = $RefreshSig$();





function Calc(_ref) {
  _s();

  var _this = this;

  var props = _ref.props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      result = _useState[0],
      resultChange = _useState[1]; //Выводится в результате


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      trueResult = _useState2[0],
      trueResultChange = _useState2[1]; //Последнее успешное значение если парсер не понимает


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      input = _useState3[0],
      inputChange = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      history = _useState4[0],
      historyChange = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      memory = _useState5[0],
      memoryChange = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      animateResult = _useState6[0],
      animateResultC = _useState6[1];

  var block = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var storeHis = localStorage.getItem('calcHistory');
    if (storeHis !== null) historyChange(JSON.parse(storeHis));
    var storeMem = localStorage.getItem('calcMem');
    if (storeMem !== null) memoryChange(JSON.parse(storeMem));
    ref.current.focus();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    localStorage.setItem('calcMem', JSON.stringify(memory));
  }, [memory]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    localStorage.setItem('calcHistory', JSON.stringify(history));
  }, [history]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var result = props.desc.error;

    try {
      result = math_expression_evaluator__WEBPACK_IMPORTED_MODULE_4___default.a.eval(input);
      trueResultChange(result);
    } catch (e) {
      if (e.message === ') is not allowed after (') {
        result = "";
      } else {
        if (input.search(/(\+|\-|\*|\/|\%|\^)$/) !== -1) result = trueResult;
        if (input === '') result = '';
      }
    }

    resultChange(result);
  }, [input]);

  var pressButton = function pressButton(code) {
    var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var alt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var ctrl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return alt ? null : inputCode(getTrueCode(code, shift, ctrl));
  };

  var historyClear = function historyClear() {
    localStorage.setItem('calcHistory', '');
    historyChange([]);
  };

  var memClear = function memClear() {
    localStorage.setItem('calcMem', '');
    memoryChange([]);
  };

  var inputCode = function inputCode(code) {
    if (code === undefined) return;
    if (code === 'none') return;

    if (code === 'm') {
      if (trueResult === '') return;
      memoryChange([{
        r: trueResult,
        d: Date.now()
      }].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(memory.slice(0, 9))));
      return;
    }

    if (code === '=') {
      animateResultC(true);
      if (history[0] === undefined || input !== '' && input !== history[0].q && trueResult !== history[0].r) historyChange([{
        q: input,
        r: trueResult,
        d: Date.now()
      }].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(history.slice(0, 9))));
      return;
    }

    if (code === 'rm' && memory[0] !== undefined) return inputCode(String(memory[0].r));
    if (code === 'ctrlv') return navigator.clipboard.readText().then(function (text) {
      inputCode(String(text));
    });
    var pos1 = ref.current.selectionStart;
    var pos2 = ref.current.selectionEnd;

    function getRst() {
      if (animateResult) {
        resultChange('');
        animateResultC(false);
        return insert(String(code), String(trueResult), pos1, pos2);
      }

      return insert(String(code), input, pos1, pos2);
    }

    var _getRst = getRst(),
        newInput = _getRst.newInput,
        newPos = _getRst.newPos;

    inputChange(newInput);
    ref.current.focus();
    setTimeout(function () {
      ref.current.selectionStart = ref.current.selectionEnd = newPos;
    });
  };

  var buttons = [{}, {
    c: "(",
    n: "("
  }, {
    c: ")",
    n: ")"
  }, {
    c: "c",
    n: "C"
  }, {
    c: "m",
    n: "M"
  }, {
    c: "--",
    n: "←"
  }, {
    c: "%",
    n: "%"
  }, {
    c: "log",
    n: "log"
  }, {
    c: "tan",
    n: "tg"
  }, {
    c: "^",
    n: "^"
  }, {
    c: "7",
    n: "7",
    color: true
  }, {
    c: "8",
    n: "8",
    color: true
  }, {
    c: "9",
    n: "9",
    color: true
  }, {
    c: "/",
    n: "/"
  }, {
    c: "e",
    n: "e"
  }, {
    c: "cos",
    n: "cos"
  }, {
    c: "sqrt",
    n: "√"
  }, {
    c: "4",
    n: "4",
    color: true
  }, {
    c: "5",
    n: "5",
    color: true
  }, {
    c: "6",
    n: "6",
    color: true
  }, {
    c: "*",
    n: "*"
  }, {
    c: "pi",
    n: "π"
  }, {
    c: "sin",
    n: "sin"
  }, {
    c: "!",
    n: "!"
  }, {
    c: "1",
    n: "1",
    color: true
  }, {
    c: "2",
    n: "2",
    color: true
  }, {
    c: "3",
    n: "3",
    color: true
  }, {
    c: "-",
    n: "-"
  }, {}, {
    c: "rm",
    n: "RM"
  }, {
    c: "rand",
    n: "rand"
  }, {
    c: ".",
    n: ".",
    color: true
  }, {
    c: "0",
    n: "0",
    color: true
  }, {
    c: "=",
    n: "=",
    color: false
  }, {
    c: "+",
    n: "+"
  }];

  function copyCode() {
    navigator.clipboard.writeText("".concat(result));
  }

  function focusInput() {
    ref.current.focus();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: block,
    className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.block,
    tabIndex: -1,
    onClick: focusInput,
    onKeyDown: function onKeyDown(e) {
      return pressButton(e.code, e.shiftKey, e.altKey, e.ctrlKey);
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.calc,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: animateResult ? _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.anim : '',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              ref: ref,
              value: input,
              onChange: function onChange() {
                return false;
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: copyCode,
            children: result
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: buttons.map(function (button) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: button.color === undefined ? '' : button.color ? _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.white : _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.equally,
              "data-tooltip": button.t,
              onClick: function onClick() {
                return inputCode(button.c);
              },
              children: button.n
            }, button.c, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 34
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
        elem: block.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.history
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: historyClear,
          children: props.desc.clear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [history.map(function (obj) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return inputChange(String(obj.q));
              },
              children: obj.q
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: " = "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return inputCode(String(obj.r));
              },
              children: obj.r
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 13
            }, _this)]
          }, obj.d, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 11
          }, _this);
        }), history.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
          children: props.desc.emptyHistory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 34
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.memory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: memClear,
          children: props.desc.clear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [memory.map(function (obj) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return inputCode(String(obj.r));
              },
              children: obj.r
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 13
            }, _this)
          }, obj.d, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 11
          }, _this);
        }), memory.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
          children: props.desc.emptyMemory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 10
  }, this);
} //Изменение строки в зависимости от кода

_s(Calc, "eqfQw2lSoXdzGkAshTmLKBrIp0w=");

_c = Calc;

function insert(code, input, pos1, pos2) {
  var str1 = input.slice(0, pos1);
  var str2 = input.slice(pos2);
  var selection = input.slice(pos1, pos2);
  var newPos = pos1;

  switch (code) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
    case '^':
      selection = code;

      if (str1.search(/(\+|\-|\*|\/|\%|\^)$/) !== -1) {
        str1 = str1.slice(0, -1);
      } else newPos++;

      break;

    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case 'e':
    case '!':
    case '.':
      selection = code;
      newPos++;
      break;

    case 'sqrt':
      selection = "^(1/)";
      newPos += 4;
      break;

    case 'cos':
    case 'sin':
    case 'tan':
      if (pos1 !== pos2) newPos += selection.length + 1;
      selection = code + "(".concat(selection, ")");
      newPos += 4;
      break;

    case 'c':
      return {
        newInput: '',
        newPos: 0
      };

    case 'rand':
      selection = Math.round(Math.random() * 100000) / 100000;
      newPos = +7;
      break;

    case '(':
      selection = '()';
      newPos++;
      break;

    case ')':
      selection = ')';
      newPos++;
      break;

    case '--':
      selection = '';
      if (pos1 === pos2) str1 = str1.slice(0, -1);
      if (pos1 !== 0) newPos--;
      break;

    case 'delete':
      selection = '';
      if (pos1 === pos2) str2 = str2.slice(1);
      break;

    default:
      selection = code;
      newPos += code.length;
  }

  var newInput = str1 + selection + str2;
  return {
    newInput: newInput,
    newPos: newPos
  };
} //Получение кода по действию


function getTrueCode(code, shift, ctrl) {
  switch (code) {
    case 'Backspace':
      return '--';

    case 'Delete':
      return 'delete';

    case 'Numpad1':
      return '1';

    case 'Numpad2':
      return '2';

    case 'Numpad3':
      return '3';

    case 'Numpad4':
      return '4';

    case 'Numpad5':
      return '5';

    case 'Numpad6':
      return '6';

    case 'Numpad7':
      return '7';

    case 'Numpad8':
      return '8';

    case 'Numpad9':
      return '9';

    case 'Numpad0':
      return '0';

    case 'NumpadDecimal':
      return '.';

    case 'NumpadEnter':
      return '=';

    case 'NumpadAdd':
      return '+';

    case 'NumpadSubtract':
      return '-';

    case 'NumpadMultiply':
      return '*';

    case 'NumpadDivide':
      return '/';

    case 'Digit0':
      if (shift) return ')';
      return '0';

    case 'Digit1':
      if (shift) return '!';
      return '1';

    case 'Digit2':
      return '2';

    case 'Digit3':
      return '3';

    case 'Digit4':
      return '4';

    case 'Digit5':
      if (shift) return '%';
      return '5';

    case 'Digit6':
      if (shift) return '^';
      return '6';

    case 'Digit7':
      return '7';

    case 'Digit8':
      if (shift) return '*';
      return '8';

    case 'Digit9':
      if (shift) return '(';
      return '9';

    case 'Minus':
      return '-';

    case 'Equal':
      if (shift) return '+';

    case 'Enter':
      return '=';

    case 'Period':
      return '.';

    case 'Slash':
      return '/';

    case 'KeyS':
      return 'sin';

    case 'KeyC':
      if (!ctrl) return 'cos';
      return;

    case 'KeyT':
      return 'tan';

    case 'KeyP':
      return 'pi';

    case 'KeyE':
      return 'e';

    case 'KeyL':
      return 'log';

    case 'KeyV':
      if (ctrl) return 'ctrlv';
      return;

    case 'KeyM':
      if (shift) return 'rm';
      return 'm';

    case 'KeyR':
      return 'rand';

    case 'Home':
      return 'c';

    default:
      return 'none';
  }
}

var _c;

$RefreshReg$(_c, "Calc");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbIkNhbGMiLCJwcm9wcyIsInVzZVN0YXRlIiwicmVzdWx0IiwicmVzdWx0Q2hhbmdlIiwidHJ1ZVJlc3VsdCIsInRydWVSZXN1bHRDaGFuZ2UiLCJpbnB1dCIsImlucHV0Q2hhbmdlIiwiaGlzdG9yeSIsImhpc3RvcnlDaGFuZ2UiLCJtZW1vcnkiLCJtZW1vcnlDaGFuZ2UiLCJhbmltYXRlUmVzdWx0IiwiYW5pbWF0ZVJlc3VsdEMiLCJibG9jayIsInVzZVJlZiIsInJlZiIsInVzZUVmZmVjdCIsInN0b3JlSGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlTWVtIiwiY3VycmVudCIsImZvY3VzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRlc2MiLCJlcnJvciIsIm1leHAiLCJldmFsIiwiZSIsIm1lc3NhZ2UiLCJzZWFyY2giLCJwcmVzc0J1dHRvbiIsImNvZGUiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJpbnB1dENvZGUiLCJnZXRUcnVlQ29kZSIsImhpc3RvcnlDbGVhciIsIm1lbUNsZWFyIiwidW5kZWZpbmVkIiwiciIsImQiLCJEYXRlIiwibm93Iiwic2xpY2UiLCJxIiwiU3RyaW5nIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwicmVhZFRleHQiLCJ0aGVuIiwidGV4dCIsInBvczEiLCJzZWxlY3Rpb25TdGFydCIsInBvczIiLCJzZWxlY3Rpb25FbmQiLCJnZXRSc3QiLCJpbnNlcnQiLCJuZXdJbnB1dCIsIm5ld1BvcyIsInNldFRpbWVvdXQiLCJidXR0b25zIiwiYyIsIm4iLCJjb2xvciIsImNvcHlDb2RlIiwid3JpdGVUZXh0IiwiZm9jdXNJbnB1dCIsInMiLCJzaGlmdEtleSIsImFsdEtleSIsImN0cmxLZXkiLCJjYWxjIiwiYW5pbSIsIm1hcCIsImJ1dHRvbiIsIndoaXRlIiwiZXF1YWxseSIsInQiLCJyaWdodCIsImNsZWFyIiwib2JqIiwibGVuZ3RoIiwiZW1wdHkiLCJlbXB0eUhpc3RvcnkiLCJlbXB0eU1lbW9yeSIsInN0cjEiLCJzdHIyIiwic2VsZWN0aW9uIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQy9CQyxNQUQrQjtBQUFBLE1BQ3ZCQyxZQUR1QixpQkFDSzs7O0FBREwsbUJBRUNGLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFL0JHLFVBRitCO0FBQUEsTUFFbkJDLGdCQUZtQixrQkFFYTs7O0FBRmIsbUJBR1RKLHNEQUFRLENBQUMsRUFBRCxDQUhDO0FBQUEsTUFHL0JLLEtBSCtCO0FBQUEsTUFHeEJDLFdBSHdCOztBQUFBLG1CQUlMTixzREFBUSxDQUFDLEVBQUQsQ0FKSDtBQUFBLE1BSS9CTyxPQUorQjtBQUFBLE1BSXRCQyxhQUpzQjs7QUFBQSxtQkFLUFIsc0RBQVEsQ0FBQyxFQUFELENBTEQ7QUFBQSxNQUsvQlMsTUFMK0I7QUFBQSxNQUt2QkMsWUFMdUI7O0FBQUEsbUJBTUVWLHNEQUFRLENBQUMsS0FBRCxDQU5WO0FBQUEsTUFNL0JXLGFBTitCO0FBQUEsTUFNaEJDLGNBTmdCOztBQVF0QyxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0FFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQWpCO0FBQ0EsUUFBSUYsUUFBUSxLQUFLLElBQWpCLEVBQXVCVCxhQUFhLENBQUNZLElBQUksQ0FBQ0MsS0FBTCxD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O0FBQ2QsU0FBSyxRQUFMO0FBQWUsYUFBTyxHQUFQOztBQUNmLFNBQUssT0FBTDtBQUFjLGFBQU8sR0FBUDs7QUFDZCxTQUFLLE1BQUw7QUFBYSxhQUFPLEtBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsVUFBSSxDQUFDRSxJQUFMLEVBQVcsT0FBTyxLQUFQO0FBQ3RCOztBQUNGLFNBQUssTUFBTDtBQUFhLGFBQU8sS0FBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxhQUFPLElBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsYUFBTyxHQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLGFBQU8sS0FBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxVQUFJQSxJQUFKLEVBQVUsT0FBTyxPQUFQO0FBQ3JCOztBQUNGLFNBQUssTUFBTDtBQUFhLFVBQUlGLEtBQUosRUFBVyxPQUFPLElBQVA7QUFBYSxhQUFPLEdBQVA7O0FBQ3JDLFNBQUssTUFBTDtBQUFhLGFBQU8sTUFBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxhQUFPLEdBQVA7O0FBQ2I7QUFBUyxhQUFPLE1BQVA7QUE1RFg7QUE4REQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjcwMjQ5YjY5OGM4YzdjMGRmNjc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL2NhbGMuc3R5bCdcclxuaW1wb3J0IG1leHAgZnJvbSAnbWF0aC1leHByZXNzaW9uLWV2YWx1YXRvcidcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGMoeyBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW3Jlc3VsdCwgcmVzdWx0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKS8v0JLRi9Cy0L7QtNC40YLRgdGPINCyINGA0LXQt9GD0LvRjNGC0LDRgtC1XHJcbiAgY29uc3QgW3RydWVSZXN1bHQsIHRydWVSZXN1bHRDaGFuZ2VdID0gdXNlU3RhdGUoJycpLy/Qn9C+0YHQu9C10LTQvdC10LUg0YPRgdC/0LXRiNC90L7QtSDQt9C90LDRh9C10L3QuNC1INC10YHQu9C4INC/0LDRgNGB0LXRgCDQvdC1INC/0L7QvdC40LzQsNC10YJcclxuICBjb25zdCBbaW5wdXQsIGlucHV0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtoaXN0b3J5LCBoaXN0b3J5Q2hhbmdlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttZW1vcnksIG1lbW9yeUNoYW5nZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYW5pbWF0ZVJlc3VsdCwgYW5pbWF0ZVJlc3VsdENdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlSGlzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbGNIaXN0b3J5JylcclxuICAgIGlmIChzdG9yZUhpcyAhPT0gbnVsbCkgaGlzdG9yeUNoYW5nZShKU09OLnBhcnNlKHN0b3JlSGlzKSlcclxuICAgIGNvbnN0IHN0b3JlTWVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbGNNZW0nKVxyXG4gICAgaWYgKHN0b3JlTWVtICE9PSBudWxsKSBtZW1vcnlDaGFuZ2UoSlNPTi5wYXJzZShzdG9yZU1lbSkpXHJcbiAgICByZWYuY3VycmVudC5mb2N1cygpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjTWVtJywgSlNPTi5zdHJpbmdpZnkobWVtb3J5KSlcclxuICB9LCBbbWVtb3J5XSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNIaXN0b3J5JywgSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpXHJcbiAgfSwgW2hpc3RvcnldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gcHJvcHMuZGVzYy5lcnJvclxyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdWx0ID0gbWV4cC5ldmFsKGlucHV0KVxyXG4gICAgICB0cnVlUmVzdWx0Q2hhbmdlKHJlc3VsdClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUubWVzc2FnZSA9PT0gJykgaXMgbm90IGFsbG93ZWQgYWZ0ZXIgKCcpIHtcclxuICAgICAgICByZXN1bHQgPSBcIlwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnNlYXJjaCgvKFxcK3xcXC18XFwqfFxcL3xcXCV8XFxeKSQvKSAhPT0gLTEpIHJlc3VsdCA9IHRydWVSZXN1bHRcclxuICAgICAgICBpZiAoaW5wdXQgPT09ICcnKSByZXN1bHQgPSAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHRDaGFuZ2UocmVzdWx0KVxyXG4gIH0sIFtpbnB1dF0pXHJcblxyXG4gIGNvbnN0IHByZXNzQnV0dG9uID0gKGNvZGUsIHNoaWZ0ID0gZmFsc2UsIGFsdCA9IGZhbHNlLCBjdHJsID0gZmFsc2UpID0+IGFsdCA/IG51bGwgOiBpbnB1dENvZGUoZ2V0VHJ1ZUNvZGUoY29kZSwgc2hpZnQsIGN0cmwpKVxyXG4gIGNvbnN0IGhpc3RvcnlDbGVhciA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjSGlzdG9yeScsICcnKVxyXG4gICAgaGlzdG9yeUNoYW5nZShbXSlcclxuICB9XHJcbiAgY29uc3QgbWVtQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY01lbScsICcnKVxyXG4gICAgbWVtb3J5Q2hhbmdlKFtdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5wdXRDb2RlID0gKGNvZGUpID0+IHtcclxuICAgIGlmIChjb2RlID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgaWYgKGNvZGUgPT09ICdub25lJykgcmV0dXJuXHJcbiAgICBpZiAoY29kZSA9PT0gJ20nKSB7XHJcbiAgICAgIGlmICh0cnVlUmVzdWx0ID09PSAnJykgcmV0dXJuXHJcbiAgICAgIG1lbW9yeUNoYW5nZShbeyByOiB0cnVlUmVzdWx0LCBkOiBEYXRlLm5vdygpIH0sIC4uLm1lbW9yeS5zbGljZSgwLCA5KV0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICc9Jykge1xyXG4gICAgICBhbmltYXRlUmVzdWx0Qyh0cnVlKVxyXG4gICAgICBpZiAoaGlzdG9yeVswXSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0ICE9PSAnJyAmJiBpbnB1dCAhPT0gaGlzdG9yeVswXS5xICYmIHRydWVSZXN1bHQgIT09IGhpc3RvcnlbMF0ucikgaGlzdG9yeUNoYW5nZShbeyBxOiBpbnB1dCwgcjogdHJ1ZVJlc3VsdCwgZDogRGF0ZS5ub3coKSB9LCAuLi5oaXN0b3J5LnNsaWNlKDAsIDkpXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJ3JtJyAmJiBtZW1vcnlbMF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0Q29kZShTdHJpbmcobWVtb3J5WzBdLnIpKVxyXG4gICAgaWYgKGNvZGUgPT09ICdjdHJsdicpIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgaW5wdXRDb2RlKFN0cmluZyh0ZXh0KSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcG9zMSA9IHJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0XHJcbiAgICBjb25zdCBwb3MyID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kXHJcbiAgICBmdW5jdGlvbiBnZXRSc3QoKSB7XHJcbiAgICAgIGlmIChhbmltYXRlUmVzdWx0KSB7XHJcbiAgICAgICAgcmVzdWx0Q2hhbmdlKCcnKVxyXG4gICAgICAgIGFuaW1hdGVSZXN1bHRDKGZhbHNlKVxyXG4gICAgICAgIHJldHVybiBpbnNlcnQoU3RyaW5nKGNvZGUpLCBTdHJpbmcodHJ1ZVJlc3VsdCksIHBvczEsIHBvczIpXHJcbiAgICAgIH0gcmV0dXJuIGluc2VydChTdHJpbmcoY29kZSksIGlucHV0LCBwb3MxLCBwb3MyKVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBuZXdJbnB1dCwgbmV3UG9zIH0gPSBnZXRSc3QoKVxyXG4gICAgaW5wdXRDaGFuZ2UobmV3SW5wdXQpXHJcbiAgICByZWYuY3VycmVudC5mb2N1cygpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnQgPSByZWYuY3VycmVudC5zZWxlY3Rpb25FbmQgPSBuZXdQb3NcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gW1xyXG4gICAge30sXHJcbiAgICB7IGM6IFwiKFwiLCBuOiBcIihcIiB9LFxyXG4gICAgeyBjOiBcIilcIiwgbjogXCIpXCIgfSxcclxuICAgIHsgYzogXCJjXCIsIG46IFwiQ1wiIH0sXHJcbiAgICB7IGM6IFwibVwiLCBuOiBcIk1cIiB9LFxyXG4gICAgeyBjOiBcIi0tXCIsIG46IFwi4oaQXCIgfSxcclxuICAgIHsgYzogXCIlXCIsIG46IFwiJVwiIH0sXHJcbiAgICB7IGM6IFwibG9nXCIsIG46IFwibG9nXCIgfSxcclxuICAgIHsgYzogXCJ0YW5cIiwgbjogXCJ0Z1wiIH0sXHJcbiAgICB7IGM6IFwiXlwiLCBuOiBcIl5cIiB9LFxyXG4gICAgeyBjOiBcIjdcIiwgbjogXCI3XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiOFwiLCBuOiBcIjhcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI5XCIsIG46IFwiOVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIi9cIiwgbjogXCIvXCIgfSxcclxuICAgIHsgYzogXCJlXCIsIG46IFwiZVwiIH0sXHJcbiAgICB7IGM6IFwiY29zXCIsIG46IFwiY29zXCIgfSxcclxuICAgIHsgYzogXCJzcXJ0XCIsIG46IFwi4oiaXCIgfSxcclxuICAgIHsgYzogXCI0XCIsIG46IFwiNFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjVcIiwgbjogXCI1XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiNlwiLCBuOiBcIjZcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIqXCIsIG46IFwiKlwiIH0sXHJcbiAgICB7IGM6IFwicGlcIiwgbjogXCLPgFwiIH0sXHJcbiAgICB7IGM6IFwic2luXCIsIG46IFwic2luXCIgfSxcclxuICAgIHsgYzogXCIhXCIsIG46IFwiIVwiIH0sXHJcbiAgICB7IGM6IFwiMVwiLCBuOiBcIjFcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIyXCIsIG46IFwiMlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjNcIiwgbjogXCIzXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiLVwiLCBuOiBcIi1cIiB9LFxyXG4gICAge30sXHJcbiAgICB7IGM6IFwicm1cIiwgbjogXCJSTVwiIH0sXHJcbiAgICB7IGM6IFwicmFuZFwiLCBuOiBcInJhbmRcIiB9LFxyXG4gICAgeyBjOiBcIi5cIiwgbjogXCIuXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiMFwiLCBuOiBcIjBcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI9XCIsIG46IFwiPVwiLCBjb2xvcjogZmFsc2UgfSxcclxuICAgIHsgYzogXCIrXCIsIG46IFwiK1wiIH0sXHJcbiAgXVxyXG4gIGZ1bmN0aW9uIGNvcHlDb2RlKCkgeyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChgJHtyZXN1bHR9YCkgfVxyXG4gIGZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7IHJlZi5jdXJyZW50LmZvY3VzKCkgfVxyXG4gIHJldHVybiA8ZGl2IHJlZj17YmxvY2t9IGNsYXNzTmFtZT17cy5ibG9ja30gdGFiSW5kZXg9ey0xfSBvbkNsaWNrPXtmb2N1c0lucHV0fSBvbktleURvd249e2UgPT4gcHJlc3NCdXR0b24oZS5jb2RlLCBlLnNoaWZ0S2V5LCBlLmFsdEtleSwgZS5jdHJsS2V5KX0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jYWxjfSA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FuaW1hdGVSZXN1bHQgPyBzLmFuaW0gOiAnJ30+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e3JlZn0gdmFsdWU9e2lucHV0fSBvbkNoYW5nZT17KCkgPT4gZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17Y29weUNvZGV9PntyZXN1bHR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtidXR0b25zLm1hcChidXR0b24gPT4gPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbi5jb2xvciA9PT0gdW5kZWZpbmVkID8gJycgOiBidXR0b24uY29sb3IgPyBzLndoaXRlIDogcy5lcXVhbGx5fSBrZXk9e2J1dHRvbi5jfSBkYXRhLXRvb2x0aXA9e2J1dHRvbi50fSBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoYnV0dG9uLmMpfT57YnV0dG9uLm59PC9idXR0b24+KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5yaWdodH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oaXN0b3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGlzdG9yeUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7aGlzdG9yeS5tYXAob2JqID0+XHJcbiAgICAgICAgICA8ZGl2IGtleT17b2JqLmR9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGlucHV0Q2hhbmdlKFN0cmluZyhvYmoucSkpfT57b2JqLnF9PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPiA9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhoaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eUhpc3Rvcnl9PC9kaXY+IDogbnVsbCl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubWVtb3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bWVtQ2xlYXJ9Pntwcm9wcy5kZXNjLmNsZWFyfTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHttZW1vcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhtZW1vcnkubGVuZ3RoID09PSAwID8gPGRpdiBjbGFzc05hbWU9e3MuZW1wdHl9Pntwcm9wcy5kZXNjLmVtcHR5TWVtb3J5fTwvZGl2PiA6IG51bGwpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5cclxuLy/QmNC30LzQtdC90LXQvdC40LUg0YHRgtGA0L7QutC4INCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQutC+0LTQsFxyXG5mdW5jdGlvbiBpbnNlcnQoY29kZSwgaW5wdXQsIHBvczEsIHBvczIpIHtcclxuICBsZXQgc3RyMSA9IGlucHV0LnNsaWNlKDAsIHBvczEpXHJcbiAgbGV0IHN0cjIgPSBpbnB1dC5zbGljZShwb3MyKVxyXG4gIGxldCBzZWxlY3Rpb24gPSBpbnB1dC5zbGljZShwb3MxLCBwb3MyKVxyXG4gIGxldCBuZXdQb3MgPSBwb3MxXHJcblxyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSAnKyc6XHJcbiAgICBjYXNlICctJzpcclxuICAgIGNhc2UgJyonOlxyXG4gICAgY2FzZSAnLyc6XHJcbiAgICBjYXNlICclJzpcclxuICAgIGNhc2UgJ14nOlxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlXHJcbiAgICAgIGlmIChzdHIxLnNlYXJjaCgvKFxcK3xcXC18XFwqfFxcL3xcXCV8XFxeKSQvKSAhPT0gLTEpIHsgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpIH0gZWxzZSBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnMCc6XHJcbiAgICBjYXNlICcxJzpcclxuICAgIGNhc2UgJzInOlxyXG4gICAgY2FzZSAnMyc6XHJcbiAgICBjYXNlICc0JzpcclxuICAgIGNhc2UgJzUnOlxyXG4gICAgY2FzZSAnNic6XHJcbiAgICBjYXNlICc3JzpcclxuICAgIGNhc2UgJzgnOlxyXG4gICAgY2FzZSAnOSc6XHJcbiAgICBjYXNlICdlJzpcclxuICAgIGNhc2UgJyEnOlxyXG4gICAgY2FzZSAnLic6IHNlbGVjdGlvbiA9IGNvZGU7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdzcXJ0Jzogc2VsZWN0aW9uID0gXCJeKDEvKVwiOyBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnY29zJzpcclxuICAgIGNhc2UgJ3Npbic6XHJcbiAgICBjYXNlICd0YW4nOlxyXG4gICAgICBpZiAocG9zMSAhPT0gcG9zMikgbmV3UG9zICs9IHNlbGVjdGlvbi5sZW5ndGggKyAxXHJcbiAgICAgIHNlbGVjdGlvbiA9IGNvZGUgKyBgKCR7c2VsZWN0aW9ufSlgXHJcbiAgICAgIG5ld1BvcyArPSA0XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdjJzogcmV0dXJuIHsgbmV3SW5wdXQ6ICcnLCBuZXdQb3M6IDAgfVxyXG4gICAgY2FzZSAncmFuZCc6IHNlbGVjdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkgLyAxMDAwMDA7IG5ld1BvcyA9ICs3XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcoJzogc2VsZWN0aW9uID0gJygpJzsgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJyknOiBzZWxlY3Rpb24gPSAnKSc7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICctLSc6XHJcbiAgICAgIHNlbGVjdGlvbiA9ICcnXHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSBzdHIxID0gc3RyMS5zbGljZSgwLCAtMSk7IGlmIChwb3MxICE9PSAwKSBuZXdQb3MtLVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnZGVsZXRlJzpcclxuICAgICAgc2VsZWN0aW9uID0gJydcclxuICAgICAgaWYgKHBvczEgPT09IHBvczIpIHN0cjIgPSBzdHIyLnNsaWNlKDEpXHJcbiAgICAgIGJyZWFrXHJcbiAgICBkZWZhdWx0OiBzZWxlY3Rpb24gPSBjb2RlOyBuZXdQb3MgKz0gY29kZS5sZW5ndGhcclxuICB9XHJcbiAgY29uc3QgbmV3SW5wdXQgPSBzdHIxICsgc2VsZWN0aW9uICsgc3RyMlxyXG4gIHJldHVybiB7IG5ld0lucHV0LCBuZXdQb3MgfVxyXG59XHJcblxyXG4vL9Cf0L7Qu9GD0YfQtdC90LjQtSDQutC+0LTQsCDQv9C+INC00LXQudGB0YLQstC40Y5cclxuZnVuY3Rpb24gZ2V0VHJ1ZUNvZGUoY29kZSwgc2hpZnQsIGN0cmwpIHtcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgJ0JhY2tzcGFjZSc6IHJldHVybiAnLS0nXHJcbiAgICBjYXNlICdEZWxldGUnOiByZXR1cm4gJ2RlbGV0ZSdcclxuICAgIGNhc2UgJ051bXBhZDEnOiByZXR1cm4gJzEnXHJcbiAgICBjYXNlICdOdW1wYWQyJzogcmV0dXJuICcyJ1xyXG4gICAgY2FzZSAnTnVtcGFkMyc6IHJldHVybiAnMydcclxuICAgIGNhc2UgJ051bXBhZDQnOiByZXR1cm4gJzQnXHJcbiAgICBjYXNlICdOdW1wYWQ1JzogcmV0dXJuICc1J1xyXG4gICAgY2FzZSAnTnVtcGFkNic6IHJldHVybiAnNidcclxuICAgIGNhc2UgJ051bXBhZDcnOiByZXR1cm4gJzcnXHJcbiAgICBjYXNlICdOdW1wYWQ4JzogcmV0dXJuICc4J1xyXG4gICAgY2FzZSAnTnVtcGFkOSc6IHJldHVybiAnOSdcclxuICAgIGNhc2UgJ051bXBhZDAnOiByZXR1cm4gJzAnXHJcbiAgICBjYXNlICdOdW1wYWREZWNpbWFsJzogcmV0dXJuICcuJ1xyXG4gICAgY2FzZSAnTnVtcGFkRW50ZXInOiByZXR1cm4gJz0nXHJcbiAgICBjYXNlICdOdW1wYWRBZGQnOiByZXR1cm4gJysnXHJcbiAgICBjYXNlICdOdW1wYWRTdWJ0cmFjdCc6IHJldHVybiAnLSdcclxuICAgIGNhc2UgJ051bXBhZE11bHRpcGx5JzogcmV0dXJuICcqJ1xyXG4gICAgY2FzZSAnTnVtcGFkRGl2aWRlJzogcmV0dXJuICcvJ1xyXG5cclxuICAgIGNhc2UgJ0RpZ2l0MCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcpJ1xyXG4gICAgICByZXR1cm4gJzAnXHJcbiAgICBjYXNlICdEaWdpdDEnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnISdcclxuICAgICAgcmV0dXJuICcxJ1xyXG4gICAgY2FzZSAnRGlnaXQyJzogcmV0dXJuICcyJ1xyXG4gICAgY2FzZSAnRGlnaXQzJzogcmV0dXJuICczJ1xyXG4gICAgY2FzZSAnRGlnaXQ0JzogcmV0dXJuICc0J1xyXG4gICAgY2FzZSAnRGlnaXQ1JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyUnXHJcbiAgICAgIHJldHVybiAnNSdcclxuICAgIGNhc2UgJ0RpZ2l0Nic6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICdeJ1xyXG4gICAgICByZXR1cm4gJzYnXHJcbiAgICBjYXNlICdEaWdpdDcnOiByZXR1cm4gJzcnXHJcbiAgICBjYXNlICdEaWdpdDgnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKidcclxuICAgICAgcmV0dXJuICc4J1xyXG4gICAgY2FzZSAnRGlnaXQ5JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJygnXHJcbiAgICAgIHJldHVybiAnOSdcclxuICAgIGNhc2UgJ01pbnVzJzogcmV0dXJuICctJ1xyXG4gICAgY2FzZSAnRXF1YWwnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKydcclxuICAgIGNhc2UgJ0VudGVyJzogcmV0dXJuICc9J1xyXG4gICAgY2FzZSAnUGVyaW9kJzogcmV0dXJuICcuJ1xyXG4gICAgY2FzZSAnU2xhc2gnOiByZXR1cm4gJy8nXHJcbiAgICBjYXNlICdLZXlTJzogcmV0dXJuICdzaW4nXHJcbiAgICBjYXNlICdLZXlDJzogaWYgKCFjdHJsKSByZXR1cm4gJ2NvcydcclxuICAgICAgcmV0dXJuXHJcbiAgICBjYXNlICdLZXlUJzogcmV0dXJuICd0YW4nXHJcbiAgICBjYXNlICdLZXlQJzogcmV0dXJuICdwaSdcclxuICAgIGNhc2UgJ0tleUUnOiByZXR1cm4gJ2UnXHJcbiAgICBjYXNlICdLZXlMJzogcmV0dXJuICdsb2cnXHJcbiAgICBjYXNlICdLZXlWJzogaWYgKGN0cmwpIHJldHVybiAnY3RybHYnXHJcbiAgICAgIHJldHVyblxyXG4gICAgY2FzZSAnS2V5TSc6IGlmIChzaGlmdCkgcmV0dXJuICdybSc7IHJldHVybiAnbSdcclxuICAgIGNhc2UgJ0tleVInOiByZXR1cm4gJ3JhbmQnXHJcbiAgICBjYXNlICdIb21lJzogcmV0dXJuICdjJ1xyXG4gICAgZGVmYXVsdDogcmV0dXJuICdub25lJ1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=