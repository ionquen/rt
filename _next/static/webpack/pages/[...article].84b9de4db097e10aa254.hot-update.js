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





var buttons = [{
  c: "ln",
  n: "ln"
}, {
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
      var replacedInput = input.replace(/\%/gm, '*0.01*') //added percent
      .replace(/[^/*^+(-]{1}(?=log|ln|sin|cos|tan)/gm, '$&*'); //fixed memory leak

      result = math_expression_evaluator__WEBPACK_IMPORTED_MODULE_4___default.a.eval(replacedInput);
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

  function pressButton(code) {
    var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var alt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var ctrl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    alt ? null : inputCode(getTrueCode(code, shift, ctrl));
  }

  function historyClear() {
    historyChange([]);
  }

  function memClear() {
    memoryChange([]);
  }

  function copyCode() {
    navigator.clipboard.writeText("".concat(result));
  }

  function focusInput() {
    ref.current.focus();
  }

  function pasteInput(e) {
    if (e.target.value.length - 1 === input.length) return false;
    inputChange(String(e.target.value));
  }

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
    var pos1 = ref.current.selectionStart;
    var pos2 = ref.current.selectionEnd;

    function getFinalInput() {
      if (animateResult) {
        resultChange('');
        animateResultC(false);
        return insertCode(String(code), String(trueResult), pos1, pos2);
      }

      return insertCode(String(code), input, pos1, pos2);
    }

    var _getFinalInput = getFinalInput(),
        newInput = _getFinalInput.newInput,
        newPos = _getFinalInput.newPos;

    inputChange(newInput);
    focusInput();
    setTimeout(function () {
      ref.current.selectionStart = ref.current.selectionEnd = newPos;
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: block,
    className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.block,
    tabIndex: -1,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.calc,
      onClick: focusInput,
      onKeyDown: function onKeyDown(e) {
        return pressButton(e.code, e.shiftKey, e.altKey, e.ctrlKey);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: animateResult ? _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.anim : '',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              ref: ref,
              value: input,
              onChange: pasteInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "data-tooltip": props.desc.copy,
            onClick: copyCode,
            children: result
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
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
              lineNumber: 136,
              columnNumber: 34
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
        elem: block.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.history
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: historyClear,
          children: props.desc.clear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
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
              lineNumber: 149,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: " = "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return inputCode(String(obj.r));
              },
              children: obj.r
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 13
            }, _this)]
          }, obj.d, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 11
          }, _this);
        }), history.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
          children: props.desc.emptyHistory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 34
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.memory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: memClear,
          children: props.desc.clear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
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
              lineNumber: 165,
              columnNumber: 13
            }, _this)
          }, obj.d, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 11
          }, _this);
        }), memory.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
          children: props.desc.emptyMemory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 10
  }, this);
} //Изменение строки в зависимости от кода

_s(Calc, "eqfQw2lSoXdzGkAshTmLKBrIp0w=");

_c = Calc;

function insertCode(code, input, pos1, pos2) {
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
      selection = "(".concat(selection, ")");
      newPos++;
      break;

    case ')':
      selection = ')';
      newPos++;
      break;

    case '--':
      if (pos1 === pos2) {
        var beginStr2 = str2.slice(0, 1);
        var endStr1 = str1.slice(-2);

        if (endStr1 === 'in' || endStr1 === 'os' || endStr1 === 'og' || endStr1 === 'an') {
          str1 = str1.slice(0, -3);
          newPos = newPos - 2;
        } else if (endStr1[1] === '(' && beginStr2 === ')') {
          str1 = str1.slice(0, -1);
          str2 = str2.slice(1);
        } else if (endStr1 === 'ln' || endStr1 === 'pi') {
          str1 = str1.slice(0, -2);
          newPos--;
        } else str1 = str1.slice(0, -1);

        if (pos1 !== 0) newPos--;
      } else selection = '';

      break;

    case 'delete':
      if (pos1 === pos2) {
        var _beginStr = str2.slice(0, 2);

        if (_beginStr === 'si' || _beginStr === 'co' || _beginStr === 'ta' || _beginStr === 'lo') {
          str2 = str2.slice(3);
        } else if (_beginStr === 'ln' || _beginStr === 'pi') {
          str2 = str2.slice(2);
        } else str2 = str2.slice(1);
      } else selection = '';

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
      if (shift) {
        return 'log';
      } else return 'ln';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbImJ1dHRvbnMiLCJjIiwibiIsImNvbG9yIiwiQ2FsYyIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN1bHQiLCJyZXN1bHRDaGFuZ2UiLCJ0cnVlUmVzdWx0IiwidHJ1ZVJlc3VsdENoYW5nZSIsImlucHV0IiwiaW5wdXRDaGFuZ2UiLCJoaXN0b3J5IiwiaGlzdG9yeUNoYW5nZSIsIm1lbW9yeSIsIm1lbW9yeUNoYW5nZSIsImFuaW1hdGVSZXN1bHQiLCJhbmltYXRlUmVzdWx0QyIsImJsb2NrIiwidXNlUmVmIiwicmVmIiwidXNlRWZmZWN0Iiwic3RvcmVIaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RvcmVNZW0iLCJjdXJyZW50IiwiZm9jdXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVzYyIsImVycm9yIiwicmVwbGFjZWRJbnB1dCIsInJlcGxhY2UiLCJtZXhwIiwiZXZhbCIsImUiLCJtZXNzYWdlIiwic2VhcmNoIiwicHJlc3NCdXR0b24iLCJjb2RlIiwic2hpZnQiLCJhbHQiLCJjdHJsIiwiaW5wdXRDb2RlIiwiZ2V0VHJ1ZUNvZGUiLCJoaXN0b3J5Q2xlYXIiLCJtZW1DbGVhciIsImNvcHlDb2RlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZm9jdXNJbnB1dCIsInBhc3RlSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIlN0cmluZyIsInVuZGVmaW5lZCIsInIiLCJkIiwiRGF0ZSIsIm5vdyIsInNsaWNlIiwicSIsInBvczEiLCJzZWxlY3Rpb25TdGFydCIsInBvczIiLCJzZWxlY3Rpb25FbmQiLCJnZXRGaW5hbElucHV0IiwiaW5zZXJ0Q29kZSIsIm5ld0lucHV0IiwibmV3UG9zIiwic2V0VGltZW91dCIsInMiLCJjYWxjIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwiYW5pbSIsImNvcHkiLCJtYXAiLCJidXR0b24iLCJ3aGl0ZSIsImVxdWFsbHkiLCJ0IiwicmlnaHQiLCJjbGVhciIsIm9iaiIsImVtcHR5IiwiZW1wdHlIaXN0b3J5IiwiZW1wdHlNZW1vcnkiLCJzdHIxIiwic3RyMiIsInNlbGVjdGlvbiIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImJlZ2luU3RyMiIsImVuZFN0cjEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQUVDLEdBQUMsRUFBRSxJQUFMO0FBQVdDLEdBQUMsRUFBRTtBQUFkLENBRGMsRUFFZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQUZjLEVBR2Q7QUFBRUQsR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFO0FBQWIsQ0FIYyxFQUlkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBSmMsRUFLZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQUxjLEVBTWQ7QUFBRUQsR0FBQyxFQUFFLElBQUw7QUFBV0MsR0FBQyxFQUFFO0FBQWQsQ0FOYyxFQU9kO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBUGMsRUFRZDtBQUFFRCxHQUFDLEVBQUUsS0FBTDtBQUFZQyxHQUFDLEVBQUU7QUFBZixDQVJjLEVBU2Q7QUFBRUQsR0FBQyxFQUFFLEtBQUw7QUFBWUMsR0FBQyxFQUFFO0FBQWYsQ0FUYyxFQVVkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBVmMsRUFXZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUUsR0FBYjtBQUFrQkMsT0FBSyxFQUFFO0FBQXpCLENBWGMsRUFZZDtBQUFFRixHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVB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TyxHQUFQOztBQUNGLFNBQUssUUFBTDtBQUNFLFVBQUlBLEtBQUosRUFBVyxPQUFPLEdBQVA7QUFDWCxhQUFPLEdBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQWUsYUFBTyxHQUFQOztBQUNmLFNBQUssUUFBTDtBQUNFLFVBQUlBLEtBQUosRUFBVyxPQUFPLEdBQVA7QUFDWCxhQUFPLEdBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsVUFBSUEsS0FBSixFQUFXLE9BQU8sR0FBUDtBQUNYLGFBQU8sR0FBUDs7QUFDRixTQUFLLE9BQUw7QUFBYyxhQUFPLEdBQVA7O0FBQ2QsU0FBSyxPQUFMO0FBQ0UsVUFBSUEsS0FBSixFQUFXLE9BQU8sR0FBUDs7QUFDYixTQUFLLE9BQUw7QUFBYyxhQUFPLEdBQVA7O0FBQ2QsU0FBSyxRQUFMO0FBQWUsYUFBTyxHQUFQOztBQUNmLFNBQUssT0FBTDtBQUFjLGFBQU8sR0FBUDs7QUFDZCxTQUFLLE1BQUw7QUFBYSxhQUFPLEtBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsVUFBSSxDQUFDRSxJQUFMLEVBQVcsT0FBTyxLQUFQO0FBQ3RCOztBQUNGLFNBQUssTUFBTDtBQUFhLGFBQU8sS0FBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxhQUFPLElBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsYUFBTyxHQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLFVBQUlGLEtBQUosRUFBVztBQUFFLGVBQU8sS0FBUDtBQUFjLE9BQTNCLE1BQWlDLE9BQU8sSUFBUDs7QUFDOUMsU0FBSyxNQUFMO0FBQWEsVUFBSUEsS0FBSixFQUFXLE9BQU8sSUFBUDtBQUFhLGFBQU8sR0FBUDs7QUFDckMsU0FBSyxNQUFMO0FBQWEsYUFBTyxNQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLGFBQU8sR0FBUDs7QUFDYjtBQUFTLGFBQU8sTUFBUDtBQTFEWDtBQTRERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uODRiOWRlNGRiMDk3ZTEwYWEyNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvY2FsYy5zdHlsJ1xyXG5pbXBvcnQgbWV4cCBmcm9tICdtYXRoLWV4cHJlc3Npb24tZXZhbHVhdG9yJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5jb25zdCBidXR0b25zID0gW1xyXG4gIHsgYzogXCJsblwiLCBuOiBcImxuXCIgfSxcclxuICB7IGM6IFwiKFwiLCBuOiBcIihcIiB9LFxyXG4gIHsgYzogXCIpXCIsIG46IFwiKVwiIH0sXHJcbiAgeyBjOiBcImNcIiwgbjogXCJDXCIgfSxcclxuICB7IGM6IFwibVwiLCBuOiBcIk1cIiB9LFxyXG4gIHsgYzogXCItLVwiLCBuOiBcIuKGkFwiIH0sXHJcbiAgeyBjOiBcIiVcIiwgbjogXCIlXCIgfSxcclxuICB7IGM6IFwibG9nXCIsIG46IFwibG9nXCIgfSxcclxuICB7IGM6IFwidGFuXCIsIG46IFwidGdcIiB9LFxyXG4gIHsgYzogXCJeXCIsIG46IFwiXlwiIH0sXHJcbiAgeyBjOiBcIjdcIiwgbjogXCI3XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjhcIiwgbjogXCI4XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjlcIiwgbjogXCI5XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIi9cIiwgbjogXCIvXCIgfSxcclxuICB7IGM6IFwiZVwiLCBuOiBcImVcIiB9LFxyXG4gIHsgYzogXCJjb3NcIiwgbjogXCJjb3NcIiB9LFxyXG4gIHsgYzogXCJzcXJ0XCIsIG46IFwi4oiaXCIgfSxcclxuICB7IGM6IFwiNFwiLCBuOiBcIjRcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiNVwiLCBuOiBcIjVcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiNlwiLCBuOiBcIjZcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiKlwiLCBuOiBcIipcIiB9LFxyXG4gIHsgYzogXCJwaVwiLCBuOiBcIs+AXCIgfSxcclxuICB7IGM6IFwic2luXCIsIG46IFwic2luXCIgfSxcclxuICB7IGM6IFwiIVwiLCBuOiBcIiFcIiB9LFxyXG4gIHsgYzogXCIxXCIsIG46IFwiMVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCIyXCIsIG46IFwiMlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCIzXCIsIG46IFwiM1wiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCItXCIsIG46IFwiLVwiIH0sXHJcbiAge30sXHJcbiAgeyBjOiBcInJtXCIsIG46IFwiUk1cIiB9LFxyXG4gIHsgYzogXCJyYW5kXCIsIG46IFwicmFuZFwiIH0sXHJcbiAgeyBjOiBcIi5cIiwgbjogXCIuXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjBcIiwgbjogXCIwXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIj1cIiwgbjogXCI9XCIsIGNvbG9yOiBmYWxzZSB9LFxyXG4gIHsgYzogXCIrXCIsIG46IFwiK1wiIH0sXHJcbl1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsYyh7IHByb3BzIH0pIHtcclxuICBjb25zdCBbcmVzdWx0LCByZXN1bHRDaGFuZ2VdID0gdXNlU3RhdGUoJycpLy/QktGL0LLQvtC00LjRgtGB0Y8g0LIg0YDQtdC30YPQu9GM0YLQsNGC0LVcclxuICBjb25zdCBbdHJ1ZVJlc3VsdCwgdHJ1ZVJlc3VsdENoYW5nZV0gPSB1c2VTdGF0ZSgnJykvL9Cf0L7RgdC70LXQtNC90LXQtSDRg9GB0L/QtdGI0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0LXRgdC70Lgg0L/QsNGA0YHQtdGAINC90LUg0L/QvtC90LjQvNCw0LXRglxyXG4gIGNvbnN0IFtpbnB1dCwgaW5wdXRDaGFuZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2hpc3RvcnksIGhpc3RvcnlDaGFuZ2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21lbW9yeSwgbWVtb3J5Q2hhbmdlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthbmltYXRlUmVzdWx0LCBhbmltYXRlUmVzdWx0Q10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVIaXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsY0hpc3RvcnknKVxyXG4gICAgaWYgKHN0b3JlSGlzICE9PSBudWxsKSBoaXN0b3J5Q2hhbmdlKEpTT04ucGFyc2Uoc3RvcmVIaXMpKVxyXG4gICAgY29uc3Qgc3RvcmVNZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsY01lbScpXHJcbiAgICBpZiAoc3RvcmVNZW0gIT09IG51bGwpIG1lbW9yeUNoYW5nZShKU09OLnBhcnNlKHN0b3JlTWVtKSlcclxuICAgIHJlZi5jdXJyZW50LmZvY3VzKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNNZW0nLCBKU09OLnN0cmluZ2lmeShtZW1vcnkpKVxyXG4gIH0sIFttZW1vcnldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY0hpc3RvcnknLCBKU09OLnN0cmluZ2lmeShoaXN0b3J5KSlcclxuICB9LCBbaGlzdG9yeV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBwcm9wcy5kZXNjLmVycm9yXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXBsYWNlZElucHV0ID0gaW5wdXRcclxuICAgICAgICAucmVwbGFjZSgvXFwlL2dtLCAnKjAuMDEqJykvL2FkZGVkIHBlcmNlbnRcclxuICAgICAgICAucmVwbGFjZSgvW14vKl4rKC1dezF9KD89bG9nfGxufHNpbnxjb3N8dGFuKS9nbSwgJyQmKicpLy9maXhlZCBtZW1vcnkgbGVha1xyXG4gICAgICByZXN1bHQgPSBtZXhwLmV2YWwocmVwbGFjZWRJbnB1dClcclxuICAgICAgdHJ1ZVJlc3VsdENoYW5nZShyZXN1bHQpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlLm1lc3NhZ2UgPT09ICcpIGlzIG5vdCBhbGxvd2VkIGFmdGVyICgnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpbnB1dC5zZWFyY2goLyhcXCt8XFwtfFxcKnxcXC98XFwlfFxcXikkLykgIT09IC0xKSByZXN1bHQgPSB0cnVlUmVzdWx0XHJcbiAgICAgICAgaWYgKGlucHV0ID09PSAnJykgcmVzdWx0ID0gJydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0Q2hhbmdlKHJlc3VsdClcclxuICB9LCBbaW5wdXRdKVxyXG5cclxuICBmdW5jdGlvbiBwcmVzc0J1dHRvbihjb2RlLCBzaGlmdCA9IGZhbHNlLCBhbHQgPSBmYWxzZSwgY3RybCA9IGZhbHNlKSB7IGFsdCA/IG51bGwgOiBpbnB1dENvZGUoZ2V0VHJ1ZUNvZGUoY29kZSwgc2hpZnQsIGN0cmwpKSB9XHJcbiAgZnVuY3Rpb24gaGlzdG9yeUNsZWFyKCkgeyBoaXN0b3J5Q2hhbmdlKFtdKSB9XHJcbiAgZnVuY3Rpb24gbWVtQ2xlYXIoKSB7IG1lbW9yeUNoYW5nZShbXSkgfVxyXG4gIGZ1bmN0aW9uIGNvcHlDb2RlKCkgeyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChgJHtyZXN1bHR9YCkgfVxyXG4gIGZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7IHJlZi5jdXJyZW50LmZvY3VzKCkgfVxyXG4gIGZ1bmN0aW9uIHBhc3RlSW5wdXQoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCAtIDEgPT09IGlucHV0Lmxlbmd0aCkgcmV0dXJuIGZhbHNlXHJcbiAgICBpbnB1dENoYW5nZShTdHJpbmcoZS50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuICBjb25zdCBpbnB1dENvZGUgPSAoY29kZSkgPT4ge1xyXG4gICAgaWYgKGNvZGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICBpZiAoY29kZSA9PT0gJ25vbmUnKSByZXR1cm5cclxuICAgIGlmIChjb2RlID09PSAnbScpIHtcclxuICAgICAgaWYgKHRydWVSZXN1bHQgPT09ICcnKSByZXR1cm5cclxuICAgICAgbWVtb3J5Q2hhbmdlKFt7IHI6IHRydWVSZXN1bHQsIGQ6IERhdGUubm93KCkgfSwgLi4ubWVtb3J5LnNsaWNlKDAsIDkpXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJz0nKSB7XHJcbiAgICAgIGFuaW1hdGVSZXN1bHRDKHRydWUpXHJcbiAgICAgIGlmIChoaXN0b3J5WzBdID09PSB1bmRlZmluZWQgfHwgaW5wdXQgIT09ICcnICYmIGlucHV0ICE9PSBoaXN0b3J5WzBdLnEgJiYgdHJ1ZVJlc3VsdCAhPT0gaGlzdG9yeVswXS5yKSBoaXN0b3J5Q2hhbmdlKFt7IHE6IGlucHV0LCByOiB0cnVlUmVzdWx0LCBkOiBEYXRlLm5vdygpIH0sIC4uLmhpc3Rvcnkuc2xpY2UoMCwgOSldKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAncm0nICYmIG1lbW9yeVswXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaW5wdXRDb2RlKFN0cmluZyhtZW1vcnlbMF0ucikpXHJcblxyXG4gICAgY29uc3QgcG9zMSA9IHJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0XHJcbiAgICBjb25zdCBwb3MyID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kXHJcbiAgICBmdW5jdGlvbiBnZXRGaW5hbElucHV0KCkge1xyXG4gICAgICBpZiAoYW5pbWF0ZVJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdENoYW5nZSgnJylcclxuICAgICAgICBhbmltYXRlUmVzdWx0QyhmYWxzZSlcclxuICAgICAgICByZXR1cm4gaW5zZXJ0Q29kZShTdHJpbmcoY29kZSksIFN0cmluZyh0cnVlUmVzdWx0KSwgcG9zMSwgcG9zMilcclxuICAgICAgfSByZXR1cm4gaW5zZXJ0Q29kZShTdHJpbmcoY29kZSksIGlucHV0LCBwb3MxLCBwb3MyKVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBuZXdJbnB1dCwgbmV3UG9zIH0gPSBnZXRGaW5hbElucHV0KClcclxuICAgIGlucHV0Q2hhbmdlKG5ld0lucHV0KVxyXG4gICAgZm9jdXNJbnB1dCgpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnQgPSByZWYuY3VycmVudC5zZWxlY3Rpb25FbmQgPSBuZXdQb3NcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtibG9ja30gY2xhc3NOYW1lPXtzLmJsb2NrfSB0YWJJbmRleD17LTF9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2FsY30gb25DbGljaz17Zm9jdXNJbnB1dH0gb25LZXlEb3duPXtlID0+IHByZXNzQnV0dG9uKGUuY29kZSwgZS5zaGlmdEtleSwgZS5hbHRLZXksIGUuY3RybEtleSl9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthbmltYXRlUmVzdWx0ID8gcy5hbmltIDogJyd9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWZ9IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e3Bhc3RlSW5wdXR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLmNvcHl9IG9uQ2xpY2s9e2NvcHlDb2RlfT57cmVzdWx0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7YnV0dG9ucy5tYXAoYnV0dG9uID0+IDxidXR0b24gY2xhc3NOYW1lPXtidXR0b24uY29sb3IgPT09IHVuZGVmaW5lZCA/ICcnIDogYnV0dG9uLmNvbG9yID8gcy53aGl0ZSA6IHMuZXF1YWxseX0ga2V5PXtidXR0b24uY30gZGF0YS10b29sdGlwPXtidXR0b24udH0gb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKGJ1dHRvbi5jKX0+e2J1dHRvbi5ufTwvYnV0dG9uPil9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGlzdG9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hpc3RvcnlDbGVhcn0+e3Byb3BzLmRlc2MuY2xlYXJ9PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2hpc3RvcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENoYW5nZShTdHJpbmcob2JqLnEpKX0+e29iai5xfTwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj4gPSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsoaGlzdG9yeS5sZW5ndGggPT09IDAgPyA8ZGl2IGNsYXNzTmFtZT17cy5lbXB0eX0+e3Byb3BzLmRlc2MuZW1wdHlIaXN0b3J5fTwvZGl2PiA6IG51bGwpfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJpZ2h0fT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLm1lbW9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21lbUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bWVtb3J5Lm1hcChvYmogPT5cclxuICAgICAgICAgIDxkaXYga2V5PXtvYmouZH0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsobWVtb3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eU1lbW9yeX08L2Rpdj4gOiBudWxsKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbi8v0JjQt9C80LXQvdC10L3QuNC1INGB0YLRgNC+0LrQuCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LrQvtC00LBcclxuZnVuY3Rpb24gaW5zZXJ0Q29kZShjb2RlLCBpbnB1dCwgcG9zMSwgcG9zMikge1xyXG4gIGxldCBzdHIxID0gaW5wdXQuc2xpY2UoMCwgcG9zMSlcclxuICBsZXQgc3RyMiA9IGlucHV0LnNsaWNlKHBvczIpXHJcbiAgbGV0IHNlbGVjdGlvbiA9IGlucHV0LnNsaWNlKHBvczEsIHBvczIpXHJcbiAgbGV0IG5ld1BvcyA9IHBvczFcclxuXHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlICcrJzpcclxuICAgIGNhc2UgJy0nOlxyXG4gICAgY2FzZSAnKic6XHJcbiAgICBjYXNlICcvJzpcclxuICAgIGNhc2UgJyUnOlxyXG4gICAgY2FzZSAnXic6XHJcbiAgICAgIHNlbGVjdGlvbiA9IGNvZGVcclxuICAgICAgaWYgKHN0cjEuc2VhcmNoKC8oXFwrfFxcLXxcXCp8XFwvfFxcJXxcXF4pJC8pICE9PSAtMSkgeyBzdHIxID0gc3RyMS5zbGljZSgwLCAtMSkgfSBlbHNlIG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcwJzpcclxuICAgIGNhc2UgJzEnOlxyXG4gICAgY2FzZSAnMic6XHJcbiAgICBjYXNlICczJzpcclxuICAgIGNhc2UgJzQnOlxyXG4gICAgY2FzZSAnNSc6XHJcbiAgICBjYXNlICc2JzpcclxuICAgIGNhc2UgJzcnOlxyXG4gICAgY2FzZSAnOCc6XHJcbiAgICBjYXNlICc5JzpcclxuICAgIGNhc2UgJ2UnOlxyXG4gICAgY2FzZSAnISc6XHJcbiAgICBjYXNlICcuJzogc2VsZWN0aW9uID0gY29kZTsgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ3NxcnQnOiBzZWxlY3Rpb24gPSBcIl4oMS8pXCI7IG5ld1BvcyArPSA0XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdjb3MnOlxyXG4gICAgY2FzZSAnc2luJzpcclxuICAgIGNhc2UgJ3Rhbic6XHJcbiAgICAgIGlmIChwb3MxICE9PSBwb3MyKSBuZXdQb3MgKz0gc2VsZWN0aW9uLmxlbmd0aCArIDFcclxuICAgICAgc2VsZWN0aW9uID0gY29kZSArIGAoJHtzZWxlY3Rpb259KWBcclxuICAgICAgbmV3UG9zICs9IDRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2MnOiByZXR1cm4geyBuZXdJbnB1dDogJycsIG5ld1BvczogMCB9XHJcbiAgICBjYXNlICdyYW5kJzogc2VsZWN0aW9uID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSAvIDEwMDAwMDsgbmV3UG9zID0gKzdcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJygnOiBzZWxlY3Rpb24gPSBgKCR7c2VsZWN0aW9ufSlgOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnKSc6IHNlbGVjdGlvbiA9ICcpJzsgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJy0tJzpcclxuICAgICAgaWYgKHBvczEgPT09IHBvczIpIHtcclxuICAgICAgICBjb25zdCBiZWdpblN0cjIgPSBzdHIyLnNsaWNlKDAsIDEpXHJcbiAgICAgICAgY29uc3QgZW5kU3RyMSA9IHN0cjEuc2xpY2UoLTIpXHJcbiAgICAgICAgaWYgKGVuZFN0cjEgPT09ICdpbicgfHwgZW5kU3RyMSA9PT0gJ29zJyB8fCBlbmRTdHIxID09PSAnb2cnIHx8IGVuZFN0cjEgPT09ICdhbicpIHtcclxuICAgICAgICAgIHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0zKVxyXG4gICAgICAgICAgbmV3UG9zID0gbmV3UG9zIC0gMlxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5kU3RyMVsxXSA9PT0gJygnICYmIGJlZ2luU3RyMiA9PT0gJyknKSB7XHJcbiAgICAgICAgICBzdHIxID0gc3RyMS5zbGljZSgwLCAtMSlcclxuICAgICAgICAgIHN0cjIgPSBzdHIyLnNsaWNlKDEpXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRTdHIxID09PSAnbG4nIHx8IGVuZFN0cjEgPT09ICdwaScpIHtcclxuICAgICAgICAgIHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0yKVxyXG4gICAgICAgICAgbmV3UG9zLS1cclxuICAgICAgICB9IGVsc2Ugc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpOyBpZiAocG9zMSAhPT0gMCkgbmV3UG9zLS1cclxuICAgICAgfSBlbHNlIHNlbGVjdGlvbiA9ICcnXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdkZWxldGUnOlxyXG4gICAgICBpZiAocG9zMSA9PT0gcG9zMikge1xyXG4gICAgICAgIGNvbnN0IGJlZ2luU3RyMiA9IHN0cjIuc2xpY2UoMCwgMilcclxuICAgICAgICBpZiAoYmVnaW5TdHIyID09PSAnc2knIHx8IGJlZ2luU3RyMiA9PT0gJ2NvJyB8fCBiZWdpblN0cjIgPT09ICd0YScgfHwgYmVnaW5TdHIyID09PSAnbG8nKSB7XHJcbiAgICAgICAgICBzdHIyID0gc3RyMi5zbGljZSgzKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYmVnaW5TdHIyID09PSAnbG4nIHx8IGJlZ2luU3RyMiA9PT0gJ3BpJykge1xyXG4gICAgICAgICAgc3RyMiA9IHN0cjIuc2xpY2UoMilcclxuICAgICAgICB9IGVsc2Ugc3RyMiA9IHN0cjIuc2xpY2UoMSlcclxuICAgICAgfSBlbHNlIHNlbGVjdGlvbiA9ICcnXHJcbiAgICAgIGJyZWFrXHJcbiAgICBkZWZhdWx0OiBzZWxlY3Rpb24gPSBjb2RlOyBuZXdQb3MgKz0gY29kZS5sZW5ndGhcclxuICB9XHJcbiAgY29uc3QgbmV3SW5wdXQgPSBzdHIxICsgc2VsZWN0aW9uICsgc3RyMlxyXG4gIHJldHVybiB7IG5ld0lucHV0LCBuZXdQb3MgfVxyXG59XHJcblxyXG4vL9Cf0L7Qu9GD0YfQtdC90LjQtSDQutC+0LTQsCDQv9C+INC00LXQudGB0YLQstC40Y5cclxuZnVuY3Rpb24gZ2V0VHJ1ZUNvZGUoY29kZSwgc2hpZnQsIGN0cmwpIHtcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgJ0JhY2tzcGFjZSc6IHJldHVybiAnLS0nXHJcbiAgICBjYXNlICdEZWxldGUnOiByZXR1cm4gJ2RlbGV0ZSdcclxuICAgIGNhc2UgJ051bXBhZDEnOiByZXR1cm4gJzEnXHJcbiAgICBjYXNlICdOdW1wYWQyJzogcmV0dXJuICcyJ1xyXG4gICAgY2FzZSAnTnVtcGFkMyc6IHJldHVybiAnMydcclxuICAgIGNhc2UgJ051bXBhZDQnOiByZXR1cm4gJzQnXHJcbiAgICBjYXNlICdOdW1wYWQ1JzogcmV0dXJuICc1J1xyXG4gICAgY2FzZSAnTnVtcGFkNic6IHJldHVybiAnNidcclxuICAgIGNhc2UgJ051bXBhZDcnOiByZXR1cm4gJzcnXHJcbiAgICBjYXNlICdOdW1wYWQ4JzogcmV0dXJuICc4J1xyXG4gICAgY2FzZSAnTnVtcGFkOSc6IHJldHVybiAnOSdcclxuICAgIGNhc2UgJ051bXBhZDAnOiByZXR1cm4gJzAnXHJcbiAgICBjYXNlICdOdW1wYWREZWNpbWFsJzogcmV0dXJuICcuJ1xyXG4gICAgY2FzZSAnTnVtcGFkRW50ZXInOiByZXR1cm4gJz0nXHJcbiAgICBjYXNlICdOdW1wYWRBZGQnOiByZXR1cm4gJysnXHJcbiAgICBjYXNlICdOdW1wYWRTdWJ0cmFjdCc6IHJldHVybiAnLSdcclxuICAgIGNhc2UgJ051bXBhZE11bHRpcGx5JzogcmV0dXJuICcqJ1xyXG4gICAgY2FzZSAnTnVtcGFkRGl2aWRlJzogcmV0dXJuICcvJ1xyXG5cclxuICAgIGNhc2UgJ0RpZ2l0MCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcpJ1xyXG4gICAgICByZXR1cm4gJzAnXHJcbiAgICBjYXNlICdEaWdpdDEnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnISdcclxuICAgICAgcmV0dXJuICcxJ1xyXG4gICAgY2FzZSAnRGlnaXQyJzogcmV0dXJuICcyJ1xyXG4gICAgY2FzZSAnRGlnaXQzJzogcmV0dXJuICczJ1xyXG4gICAgY2FzZSAnRGlnaXQ0JzogcmV0dXJuICc0J1xyXG4gICAgY2FzZSAnRGlnaXQ1JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyUnXHJcbiAgICAgIHJldHVybiAnNSdcclxuICAgIGNhc2UgJ0RpZ2l0Nic6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICdeJ1xyXG4gICAgICByZXR1cm4gJzYnXHJcbiAgICBjYXNlICdEaWdpdDcnOiByZXR1cm4gJzcnXHJcbiAgICBjYXNlICdEaWdpdDgnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKidcclxuICAgICAgcmV0dXJuICc4J1xyXG4gICAgY2FzZSAnRGlnaXQ5JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJygnXHJcbiAgICAgIHJldHVybiAnOSdcclxuICAgIGNhc2UgJ01pbnVzJzogcmV0dXJuICctJ1xyXG4gICAgY2FzZSAnRXF1YWwnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKydcclxuICAgIGNhc2UgJ0VudGVyJzogcmV0dXJuICc9J1xyXG4gICAgY2FzZSAnUGVyaW9kJzogcmV0dXJuICcuJ1xyXG4gICAgY2FzZSAnU2xhc2gnOiByZXR1cm4gJy8nXHJcbiAgICBjYXNlICdLZXlTJzogcmV0dXJuICdzaW4nXHJcbiAgICBjYXNlICdLZXlDJzogaWYgKCFjdHJsKSByZXR1cm4gJ2NvcydcclxuICAgICAgcmV0dXJuXHJcbiAgICBjYXNlICdLZXlUJzogcmV0dXJuICd0YW4nXHJcbiAgICBjYXNlICdLZXlQJzogcmV0dXJuICdwaSdcclxuICAgIGNhc2UgJ0tleUUnOiByZXR1cm4gJ2UnXHJcbiAgICBjYXNlICdLZXlMJzogaWYgKHNoaWZ0KSB7IHJldHVybiAnbG9nJyB9IGVsc2UgcmV0dXJuICdsbidcclxuICAgIGNhc2UgJ0tleU0nOiBpZiAoc2hpZnQpIHJldHVybiAncm0nOyByZXR1cm4gJ20nXHJcbiAgICBjYXNlICdLZXlSJzogcmV0dXJuICdyYW5kJ1xyXG4gICAgY2FzZSAnSG9tZSc6IHJldHVybiAnYydcclxuICAgIGRlZmF1bHQ6IHJldHVybiAnbm9uZSdcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9