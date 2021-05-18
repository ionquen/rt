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
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ref.current.focus();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbImJ1dHRvbnMiLCJjIiwibiIsImNvbG9yIiwiQ2FsYyIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN1bHQiLCJyZXN1bHRDaGFuZ2UiLCJ0cnVlUmVzdWx0IiwidHJ1ZVJlc3VsdENoYW5nZSIsImlucHV0IiwiaW5wdXRDaGFuZ2UiLCJoaXN0b3J5IiwiaGlzdG9yeUNoYW5nZSIsIm1lbW9yeSIsIm1lbW9yeUNoYW5nZSIsImFuaW1hdGVSZXN1bHQiLCJhbmltYXRlUmVzdWx0QyIsImJsb2NrIiwidXNlUmVmIiwicmVmIiwidXNlRWZmZWN0Iiwic3RvcmVIaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RvcmVNZW0iLCJjdXJyZW50IiwiZm9jdXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVzYyIsImVycm9yIiwicmVwbGFjZWRJbnB1dCIsInJlcGxhY2UiLCJtZXhwIiwiZXZhbCIsImUiLCJtZXNzYWdlIiwic2VhcmNoIiwicHJlc3NCdXR0b24iLCJjb2RlIiwic2hpZnQiLCJhbHQiLCJjdHJsIiwiaW5wdXRDb2RlIiwiZ2V0VHJ1ZUNvZGUiLCJoaXN0b3J5Q2xlYXIiLCJtZW1DbGVhciIsImNvcHlDb2RlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZm9jdXNJbnB1dCIsInRlc3QiLCJ1c2VyQWdlbnQiLCJwYXN0ZUlucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJTdHJpbmciLCJ1bmRlZmluZWQiLCJyIiwiZCIsIkRhdGUiLCJub3ciLCJzbGljZSIsInEiLCJwb3MxIiwic2VsZWN0aW9uU3RhcnQiLCJwb3MyIiwic2VsZWN0aW9uRW5kIiwiZ2V0RmluYWxJbnB1dCIsImluc2VydENvZGUiLCJuZXdJbnB1dCIsIm5ld1BvcyIsInNldFRpbWVvdXQiLCJzIiwiY2FsYyIsInNoaWZ0S2V5IiwiYWx0S2V5IiwiY3RybEtleSIsImFuaW0iLCJjb3B5IiwibWFwIiwiYnV0dG9uIiwid2hpdGUiLCJlcXVhbGx5IiwidCIsInJpZ2h0IiwiY2xlYXIiLCJvYmoiLCJlbXB0eSIsImVtcHR5SGlzdG9yeSIsImVtcHR5TWVtb3J5Iiwic3RyMSIsInN0cjIiLCJzZWxlY3Rpb24iLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJiZWdpblN0cjIiLCJlbmRTdHIxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxHQUFDLEVBQUUsSUFBTDtBQUFXQyxHQUFDLEVBQUU7QUFBZCxDQURjLEVBRWQ7QUFBRUQsR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFO0FBQWIsQ0FGYyxFQUdkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBSGMsRUFJZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQUpjLEVBS2Q7QUFBRUQsR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFO0FBQWIsQ0FMYyxFQU1kO0FBQUVELEdBQUMsRUFBRSxJQUFMO0FBQVdDLEdBQUMsRUFBRTtBQUFkLENBTmMsRUFPZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQVBjLEVBUWQ7QUFBRUQsR0FBQyxFQUFFLEtBQUw7QUFBWUMsR0FBQyxFQUFFO0FBQWYsQ0FSYyxFQVNkO0FBQUVELEdBQUMsRUFBRSxLQUFMO0FBQVlDLEdBQUMsRUFBRTtBQUFmLENBVGMsRUFVZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQVZjLEVBV2Q7QUFBRUQsR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFLEdBQWI7QUFBa0JDLE9BQUssRUFBRTtBQUF6QixDQVhjLEVBWWQ7QUFBRUYsR0FBQyxFQUFF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Ijoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjIxODBmNWU1NDIxNjJkMGQ0MDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL2NhbGMuc3R5bCdcclxuaW1wb3J0IG1leHAgZnJvbSAnbWF0aC1leHByZXNzaW9uLWV2YWx1YXRvcidcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuY29uc3QgYnV0dG9ucyA9IFtcclxuICB7IGM6IFwibG5cIiwgbjogXCJsblwiIH0sXHJcbiAgeyBjOiBcIihcIiwgbjogXCIoXCIgfSxcclxuICB7IGM6IFwiKVwiLCBuOiBcIilcIiB9LFxyXG4gIHsgYzogXCJjXCIsIG46IFwiQ1wiIH0sXHJcbiAgeyBjOiBcIm1cIiwgbjogXCJNXCIgfSxcclxuICB7IGM6IFwiLS1cIiwgbjogXCLihpBcIiB9LFxyXG4gIHsgYzogXCIlXCIsIG46IFwiJVwiIH0sXHJcbiAgeyBjOiBcImxvZ1wiLCBuOiBcImxvZ1wiIH0sXHJcbiAgeyBjOiBcInRhblwiLCBuOiBcInRnXCIgfSxcclxuICB7IGM6IFwiXlwiLCBuOiBcIl5cIiB9LFxyXG4gIHsgYzogXCI3XCIsIG46IFwiN1wiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCI4XCIsIG46IFwiOFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCI5XCIsIG46IFwiOVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCIvXCIsIG46IFwiL1wiIH0sXHJcbiAgeyBjOiBcImVcIiwgbjogXCJlXCIgfSxcclxuICB7IGM6IFwiY29zXCIsIG46IFwiY29zXCIgfSxcclxuICB7IGM6IFwic3FydFwiLCBuOiBcIuKImlwiIH0sXHJcbiAgeyBjOiBcIjRcIiwgbjogXCI0XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjVcIiwgbjogXCI1XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjZcIiwgbjogXCI2XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIipcIiwgbjogXCIqXCIgfSxcclxuICB7IGM6IFwicGlcIiwgbjogXCLPgFwiIH0sXHJcbiAgeyBjOiBcInNpblwiLCBuOiBcInNpblwiIH0sXHJcbiAgeyBjOiBcIiFcIiwgbjogXCIhXCIgfSxcclxuICB7IGM6IFwiMVwiLCBuOiBcIjFcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiMlwiLCBuOiBcIjJcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiM1wiLCBuOiBcIjNcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiLVwiLCBuOiBcIi1cIiB9LFxyXG4gIHt9LFxyXG4gIHsgYzogXCJybVwiLCBuOiBcIlJNXCIgfSxcclxuICB7IGM6IFwicmFuZFwiLCBuOiBcInJhbmRcIiB9LFxyXG4gIHsgYzogXCIuXCIsIG46IFwiLlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCIwXCIsIG46IFwiMFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCI9XCIsIG46IFwiPVwiLCBjb2xvcjogZmFsc2UgfSxcclxuICB7IGM6IFwiK1wiLCBuOiBcIitcIiB9LFxyXG5dXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGMoeyBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW3Jlc3VsdCwgcmVzdWx0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKS8v0JLRi9Cy0L7QtNC40YLRgdGPINCyINGA0LXQt9GD0LvRjNGC0LDRgtC1XHJcbiAgY29uc3QgW3RydWVSZXN1bHQsIHRydWVSZXN1bHRDaGFuZ2VdID0gdXNlU3RhdGUoJycpLy/Qn9C+0YHQu9C10LTQvdC10LUg0YPRgdC/0LXRiNC90L7QtSDQt9C90LDRh9C10L3QuNC1INC10YHQu9C4INC/0LDRgNGB0LXRgCDQvdC1INC/0L7QvdC40LzQsNC10YJcclxuICBjb25zdCBbaW5wdXQsIGlucHV0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtoaXN0b3J5LCBoaXN0b3J5Q2hhbmdlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttZW1vcnksIG1lbW9yeUNoYW5nZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYW5pbWF0ZVJlc3VsdCwgYW5pbWF0ZVJlc3VsdENdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlSGlzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbGNIaXN0b3J5JylcclxuICAgIGlmIChzdG9yZUhpcyAhPT0gbnVsbCkgaGlzdG9yeUNoYW5nZShKU09OLnBhcnNlKHN0b3JlSGlzKSlcclxuICAgIGNvbnN0IHN0b3JlTWVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbGNNZW0nKVxyXG4gICAgaWYgKHN0b3JlTWVtICE9PSBudWxsKSBtZW1vcnlDaGFuZ2UoSlNPTi5wYXJzZShzdG9yZU1lbSkpXHJcbiAgICByZWYuY3VycmVudC5mb2N1cygpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjTWVtJywgSlNPTi5zdHJpbmdpZnkobWVtb3J5KSlcclxuICB9LCBbbWVtb3J5XSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNIaXN0b3J5JywgSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpXHJcbiAgfSwgW2hpc3RvcnldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gcHJvcHMuZGVzYy5lcnJvclxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVwbGFjZWRJbnB1dCA9IGlucHV0XHJcbiAgICAgICAgLnJlcGxhY2UoL1xcJS9nbSwgJyowLjAxKicpLy9hZGRlZCBwZXJjZW50XHJcbiAgICAgICAgLnJlcGxhY2UoL1teLypeKygtXXsxfSg/PWxvZ3xsbnxzaW58Y29zfHRhbikvZ20sICckJionKS8vZml4ZWQgbWVtb3J5IGxlYWtcclxuICAgICAgcmVzdWx0ID0gbWV4cC5ldmFsKHJlcGxhY2VkSW5wdXQpXHJcbiAgICAgIHRydWVSZXN1bHRDaGFuZ2UocmVzdWx0KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoZS5tZXNzYWdlID09PSAnKSBpcyBub3QgYWxsb3dlZCBhZnRlciAoJykge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaW5wdXQuc2VhcmNoKC8oXFwrfFxcLXxcXCp8XFwvfFxcJXxcXF4pJC8pICE9PSAtMSkgcmVzdWx0ID0gdHJ1ZVJlc3VsdFxyXG4gICAgICAgIGlmIChpbnB1dCA9PT0gJycpIHJlc3VsdCA9ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3VsdENoYW5nZShyZXN1bHQpXHJcbiAgfSwgW2lucHV0XSlcclxuXHJcbiAgZnVuY3Rpb24gcHJlc3NCdXR0b24oY29kZSwgc2hpZnQgPSBmYWxzZSwgYWx0ID0gZmFsc2UsIGN0cmwgPSBmYWxzZSkgeyBhbHQgPyBudWxsIDogaW5wdXRDb2RlKGdldFRydWVDb2RlKGNvZGUsIHNoaWZ0LCBjdHJsKSkgfVxyXG4gIGZ1bmN0aW9uIGhpc3RvcnlDbGVhcigpIHsgaGlzdG9yeUNoYW5nZShbXSkgfVxyXG4gIGZ1bmN0aW9uIG1lbUNsZWFyKCkgeyBtZW1vcnlDaGFuZ2UoW10pIH1cclxuICBmdW5jdGlvbiBjb3B5Q29kZSgpIHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYCR7cmVzdWx0fWApIH1cclxuICBmdW5jdGlvbiBmb2N1c0lucHV0KCkgeyBpZiAoIS9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxCQnxQbGF5Qm9va3xJRU1vYmlsZXxXaW5kb3dzIFBob25lfEtpbmRsZXxTaWxrfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSByZWYuY3VycmVudC5mb2N1cygpIH1cclxuICBmdW5jdGlvbiBwYXN0ZUlucHV0KGUpIHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggLSAxID09PSBpbnB1dC5sZW5ndGgpIHJldHVybiBmYWxzZVxyXG4gICAgaW5wdXRDaGFuZ2UoU3RyaW5nKGUudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcbiAgY29uc3QgaW5wdXRDb2RlID0gKGNvZGUpID0+IHtcclxuICAgIGlmIChjb2RlID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgaWYgKGNvZGUgPT09ICdub25lJykgcmV0dXJuXHJcbiAgICBpZiAoY29kZSA9PT0gJ20nKSB7XHJcbiAgICAgIGlmICh0cnVlUmVzdWx0ID09PSAnJykgcmV0dXJuXHJcbiAgICAgIG1lbW9yeUNoYW5nZShbeyByOiB0cnVlUmVzdWx0LCBkOiBEYXRlLm5vdygpIH0sIC4uLm1lbW9yeS5zbGljZSgwLCA5KV0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICc9Jykge1xyXG4gICAgICBhbmltYXRlUmVzdWx0Qyh0cnVlKVxyXG4gICAgICBpZiAoaGlzdG9yeVswXSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0ICE9PSAnJyAmJiBpbnB1dCAhPT0gaGlzdG9yeVswXS5xICYmIHRydWVSZXN1bHQgIT09IGhpc3RvcnlbMF0ucikgaGlzdG9yeUNoYW5nZShbeyBxOiBpbnB1dCwgcjogdHJ1ZVJlc3VsdCwgZDogRGF0ZS5ub3coKSB9LCAuLi5oaXN0b3J5LnNsaWNlKDAsIDkpXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJ3JtJyAmJiBtZW1vcnlbMF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0Q29kZShTdHJpbmcobWVtb3J5WzBdLnIpKVxyXG5cclxuICAgIGNvbnN0IHBvczEgPSByZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydFxyXG4gICAgY29uc3QgcG9zMiA9IHJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZFxyXG4gICAgZnVuY3Rpb24gZ2V0RmluYWxJbnB1dCgpIHtcclxuICAgICAgaWYgKGFuaW1hdGVSZXN1bHQpIHtcclxuICAgICAgICByZXN1bHRDaGFuZ2UoJycpXHJcbiAgICAgICAgYW5pbWF0ZVJlc3VsdEMoZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuIGluc2VydENvZGUoU3RyaW5nKGNvZGUpLCBTdHJpbmcodHJ1ZVJlc3VsdCksIHBvczEsIHBvczIpXHJcbiAgICAgIH0gcmV0dXJuIGluc2VydENvZGUoU3RyaW5nKGNvZGUpLCBpbnB1dCwgcG9zMSwgcG9zMilcclxuICAgIH1cclxuICAgIGNvbnN0IHsgbmV3SW5wdXQsIG5ld1BvcyB9ID0gZ2V0RmluYWxJbnB1dCgpXHJcbiAgICBpbnB1dENoYW5nZShuZXdJbnB1dClcclxuICAgIGZvY3VzSW5wdXQoKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0ID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kID0gbmV3UG9zXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8ZGl2IHJlZj17YmxvY2t9IGNsYXNzTmFtZT17cy5ibG9ja30gdGFiSW5kZXg9ey0xfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhbGN9IG9uQ2xpY2s9e2ZvY3VzSW5wdXR9IG9uS2V5RG93bj17ZSA9PiBwcmVzc0J1dHRvbihlLmNvZGUsIGUuc2hpZnRLZXksIGUuYWx0S2V5LCBlLmN0cmxLZXkpfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YW5pbWF0ZVJlc3VsdCA/IHMuYW5pbSA6ICcnfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17cmVmfSB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtwYXN0ZUlucHV0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5jb3B5fSBvbkNsaWNrPXtjb3B5Q29kZX0+e3Jlc3VsdH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2J1dHRvbnMubWFwKGJ1dHRvbiA9PiA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uLmNvbG9yID09PSB1bmRlZmluZWQgPyAnJyA6IGJ1dHRvbi5jb2xvciA/IHMud2hpdGUgOiBzLmVxdWFsbHl9IGtleT17YnV0dG9uLmN9IGRhdGEtdG9vbHRpcD17YnV0dG9uLnR9IG9uQ2xpY2s9eygpID0+IGlucHV0Q29kZShidXR0b24uYyl9PntidXR0b24ubn08L2J1dHRvbj4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGdWxsc2NyZWVuIGVsZW09e2Jsb2NrLmN1cnJlbnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJpZ2h0fT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmhpc3Rvcnl9PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoaXN0b3J5Q2xlYXJ9Pntwcm9wcy5kZXNjLmNsZWFyfTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtoaXN0b3J5Lm1hcChvYmogPT5cclxuICAgICAgICAgIDxkaXYga2V5PXtvYmouZH0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDaGFuZ2UoU3RyaW5nKG9iai5xKSl9PntvYmoucX08L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+ID0gPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGlucHV0Q29kZShTdHJpbmcob2JqLnIpKX0+e29iai5yfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICB7KGhpc3RvcnkubGVuZ3RoID09PSAwID8gPGRpdiBjbGFzc05hbWU9e3MuZW1wdHl9Pntwcm9wcy5kZXNjLmVtcHR5SGlzdG9yeX08L2Rpdj4gOiBudWxsKX1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5yaWdodH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5tZW1vcnl9PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttZW1DbGVhcn0+e3Byb3BzLmRlc2MuY2xlYXJ9PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge21lbW9yeS5tYXAob2JqID0+XHJcbiAgICAgICAgICA8ZGl2IGtleT17b2JqLmR9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGlucHV0Q29kZShTdHJpbmcob2JqLnIpKX0+e29iai5yfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICB7KG1lbW9yeS5sZW5ndGggPT09IDAgPyA8ZGl2IGNsYXNzTmFtZT17cy5lbXB0eX0+e3Byb3BzLmRlc2MuZW1wdHlNZW1vcnl9PC9kaXY+IDogbnVsbCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcblxyXG4vL9CY0LfQvNC10L3QtdC90LjQtSDRgdGC0YDQvtC60Lgg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC60L7QtNCwXHJcbmZ1bmN0aW9uIGluc2VydENvZGUoY29kZSwgaW5wdXQsIHBvczEsIHBvczIpIHtcclxuICBsZXQgc3RyMSA9IGlucHV0LnNsaWNlKDAsIHBvczEpXHJcbiAgbGV0IHN0cjIgPSBpbnB1dC5zbGljZShwb3MyKVxyXG4gIGxldCBzZWxlY3Rpb24gPSBpbnB1dC5zbGljZShwb3MxLCBwb3MyKVxyXG4gIGxldCBuZXdQb3MgPSBwb3MxXHJcblxyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSAnKyc6XHJcbiAgICBjYXNlICctJzpcclxuICAgIGNhc2UgJyonOlxyXG4gICAgY2FzZSAnLyc6XHJcbiAgICBjYXNlICclJzpcclxuICAgIGNhc2UgJ14nOlxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlXHJcbiAgICAgIGlmIChzdHIxLnNlYXJjaCgvKFxcK3xcXC18XFwqfFxcL3xcXCV8XFxeKSQvKSAhPT0gLTEpIHsgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpIH0gZWxzZSBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnMCc6XHJcbiAgICBjYXNlICcxJzpcclxuICAgIGNhc2UgJzInOlxyXG4gICAgY2FzZSAnMyc6XHJcbiAgICBjYXNlICc0JzpcclxuICAgIGNhc2UgJzUnOlxyXG4gICAgY2FzZSAnNic6XHJcbiAgICBjYXNlICc3JzpcclxuICAgIGNhc2UgJzgnOlxyXG4gICAgY2FzZSAnOSc6XHJcbiAgICBjYXNlICdlJzpcclxuICAgIGNhc2UgJyEnOlxyXG4gICAgY2FzZSAnLic6IHNlbGVjdGlvbiA9IGNvZGU7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdzcXJ0Jzogc2VsZWN0aW9uID0gXCJeKDEvKVwiOyBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnY29zJzpcclxuICAgIGNhc2UgJ3Npbic6XHJcbiAgICBjYXNlICd0YW4nOlxyXG4gICAgICBpZiAocG9zMSAhPT0gcG9zMikgbmV3UG9zICs9IHNlbGVjdGlvbi5sZW5ndGggKyAxXHJcbiAgICAgIHNlbGVjdGlvbiA9IGNvZGUgKyBgKCR7c2VsZWN0aW9ufSlgXHJcbiAgICAgIG5ld1BvcyArPSA0XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdjJzogcmV0dXJuIHsgbmV3SW5wdXQ6ICcnLCBuZXdQb3M6IDAgfVxyXG4gICAgY2FzZSAncmFuZCc6IHNlbGVjdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkgLyAxMDAwMDA7IG5ld1BvcyA9ICs3XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcoJzogc2VsZWN0aW9uID0gYCgke3NlbGVjdGlvbn0pYDsgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJyknOiBzZWxlY3Rpb24gPSAnKSc7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICctLSc6XHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgYmVnaW5TdHIyID0gc3RyMi5zbGljZSgwLCAxKVxyXG4gICAgICAgIGNvbnN0IGVuZFN0cjEgPSBzdHIxLnNsaWNlKC0yKVxyXG4gICAgICAgIGlmIChlbmRTdHIxID09PSAnaW4nIHx8IGVuZFN0cjEgPT09ICdvcycgfHwgZW5kU3RyMSA9PT0gJ29nJyB8fCBlbmRTdHIxID09PSAnYW4nKSB7XHJcbiAgICAgICAgICBzdHIxID0gc3RyMS5zbGljZSgwLCAtMylcclxuICAgICAgICAgIG5ld1BvcyA9IG5ld1BvcyAtIDJcclxuICAgICAgICB9IGVsc2UgaWYgKGVuZFN0cjFbMV0gPT09ICcoJyAmJiBiZWdpblN0cjIgPT09ICcpJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpXHJcbiAgICAgICAgICBzdHIyID0gc3RyMi5zbGljZSgxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5kU3RyMSA9PT0gJ2xuJyB8fCBlbmRTdHIxID09PSAncGknKSB7XHJcbiAgICAgICAgICBzdHIxID0gc3RyMS5zbGljZSgwLCAtMilcclxuICAgICAgICAgIG5ld1Bvcy0tXHJcbiAgICAgICAgfSBlbHNlIHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKTsgaWYgKHBvczEgIT09IDApIG5ld1Bvcy0tXHJcbiAgICAgIH0gZWxzZSBzZWxlY3Rpb24gPSAnJ1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnZGVsZXRlJzpcclxuICAgICAgaWYgKHBvczEgPT09IHBvczIpIHtcclxuICAgICAgICBjb25zdCBiZWdpblN0cjIgPSBzdHIyLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgaWYgKGJlZ2luU3RyMiA9PT0gJ3NpJyB8fCBiZWdpblN0cjIgPT09ICdjbycgfHwgYmVnaW5TdHIyID09PSAndGEnIHx8IGJlZ2luU3RyMiA9PT0gJ2xvJykge1xyXG4gICAgICAgICAgc3RyMiA9IHN0cjIuc2xpY2UoMylcclxuICAgICAgICB9IGVsc2UgaWYgKGJlZ2luU3RyMiA9PT0gJ2xuJyB8fCBiZWdpblN0cjIgPT09ICdwaScpIHtcclxuICAgICAgICAgIHN0cjIgPSBzdHIyLnNsaWNlKDIpXHJcbiAgICAgICAgfSBlbHNlIHN0cjIgPSBzdHIyLnNsaWNlKDEpXHJcbiAgICAgIH0gZWxzZSBzZWxlY3Rpb24gPSAnJ1xyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDogc2VsZWN0aW9uID0gY29kZTsgbmV3UG9zICs9IGNvZGUubGVuZ3RoXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0lucHV0ID0gc3RyMSArIHNlbGVjdGlvbiArIHN0cjJcclxuICByZXR1cm4geyBuZXdJbnB1dCwgbmV3UG9zIH1cclxufVxyXG5cclxuLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LrQvtC00LAg0L/QviDQtNC10LnRgdGC0LLQuNGOXHJcbmZ1bmN0aW9uIGdldFRydWVDb2RlKGNvZGUsIHNoaWZ0LCBjdHJsKSB7XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlICdCYWNrc3BhY2UnOiByZXR1cm4gJy0tJ1xyXG4gICAgY2FzZSAnRGVsZXRlJzogcmV0dXJuICdkZWxldGUnXHJcbiAgICBjYXNlICdOdW1wYWQxJzogcmV0dXJuICcxJ1xyXG4gICAgY2FzZSAnTnVtcGFkMic6IHJldHVybiAnMidcclxuICAgIGNhc2UgJ051bXBhZDMnOiByZXR1cm4gJzMnXHJcbiAgICBjYXNlICdOdW1wYWQ0JzogcmV0dXJuICc0J1xyXG4gICAgY2FzZSAnTnVtcGFkNSc6IHJldHVybiAnNSdcclxuICAgIGNhc2UgJ051bXBhZDYnOiByZXR1cm4gJzYnXHJcbiAgICBjYXNlICdOdW1wYWQ3JzogcmV0dXJuICc3J1xyXG4gICAgY2FzZSAnTnVtcGFkOCc6IHJldHVybiAnOCdcclxuICAgIGNhc2UgJ051bXBhZDknOiByZXR1cm4gJzknXHJcbiAgICBjYXNlICdOdW1wYWQwJzogcmV0dXJuICcwJ1xyXG4gICAgY2FzZSAnTnVtcGFkRGVjaW1hbCc6IHJldHVybiAnLidcclxuICAgIGNhc2UgJ051bXBhZEVudGVyJzogcmV0dXJuICc9J1xyXG4gICAgY2FzZSAnTnVtcGFkQWRkJzogcmV0dXJuICcrJ1xyXG4gICAgY2FzZSAnTnVtcGFkU3VidHJhY3QnOiByZXR1cm4gJy0nXHJcbiAgICBjYXNlICdOdW1wYWRNdWx0aXBseSc6IHJldHVybiAnKidcclxuICAgIGNhc2UgJ051bXBhZERpdmlkZSc6IHJldHVybiAnLydcclxuXHJcbiAgICBjYXNlICdEaWdpdDAnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKSdcclxuICAgICAgcmV0dXJuICcwJ1xyXG4gICAgY2FzZSAnRGlnaXQxJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyEnXHJcbiAgICAgIHJldHVybiAnMSdcclxuICAgIGNhc2UgJ0RpZ2l0Mic6IHJldHVybiAnMidcclxuICAgIGNhc2UgJ0RpZ2l0Myc6IHJldHVybiAnMydcclxuICAgIGNhc2UgJ0RpZ2l0NCc6IHJldHVybiAnNCdcclxuICAgIGNhc2UgJ0RpZ2l0NSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICclJ1xyXG4gICAgICByZXR1cm4gJzUnXHJcbiAgICBjYXNlICdEaWdpdDYnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnXidcclxuICAgICAgcmV0dXJuICc2J1xyXG4gICAgY2FzZSAnRGlnaXQ3JzogcmV0dXJuICc3J1xyXG4gICAgY2FzZSAnRGlnaXQ4JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyonXHJcbiAgICAgIHJldHVybiAnOCdcclxuICAgIGNhc2UgJ0RpZ2l0OSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcoJ1xyXG4gICAgICByZXR1cm4gJzknXHJcbiAgICBjYXNlICdNaW51cyc6IHJldHVybiAnLSdcclxuICAgIGNhc2UgJ0VxdWFsJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJysnXHJcbiAgICBjYXNlICdFbnRlcic6IHJldHVybiAnPSdcclxuICAgIGNhc2UgJ1BlcmlvZCc6IHJldHVybiAnLidcclxuICAgIGNhc2UgJ1NsYXNoJzogcmV0dXJuICcvJ1xyXG4gICAgY2FzZSAnS2V5Uyc6IHJldHVybiAnc2luJ1xyXG4gICAgY2FzZSAnS2V5Qyc6IGlmICghY3RybCkgcmV0dXJuICdjb3MnXHJcbiAgICAgIHJldHVyblxyXG4gICAgY2FzZSAnS2V5VCc6IHJldHVybiAndGFuJ1xyXG4gICAgY2FzZSAnS2V5UCc6IHJldHVybiAncGknXHJcbiAgICBjYXNlICdLZXlFJzogcmV0dXJuICdlJ1xyXG4gICAgY2FzZSAnS2V5TCc6IGlmIChzaGlmdCkgeyByZXR1cm4gJ2xvZycgfSBlbHNlIHJldHVybiAnbG4nXHJcbiAgICBjYXNlICdLZXlNJzogaWYgKHNoaWZ0KSByZXR1cm4gJ3JtJzsgcmV0dXJuICdtJ1xyXG4gICAgY2FzZSAnS2V5Uic6IHJldHVybiAncmFuZCdcclxuICAgIGNhc2UgJ0hvbWUnOiByZXR1cm4gJ2MnXHJcbiAgICBkZWZhdWx0OiByZXR1cm4gJ25vbmUnXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==