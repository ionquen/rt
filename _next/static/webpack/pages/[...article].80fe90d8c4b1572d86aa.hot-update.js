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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbImJ1dHRvbnMiLCJjIiwibiIsImNvbG9yIiwiQ2FsYyIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN1bHQiLCJyZXN1bHRDaGFuZ2UiLCJ0cnVlUmVzdWx0IiwidHJ1ZVJlc3VsdENoYW5nZSIsImlucHV0IiwiaW5wdXRDaGFuZ2UiLCJoaXN0b3J5IiwiaGlzdG9yeUNoYW5nZSIsIm1lbW9yeSIsIm1lbW9yeUNoYW5nZSIsImFuaW1hdGVSZXN1bHQiLCJhbmltYXRlUmVzdWx0QyIsImJsb2NrIiwidXNlUmVmIiwicmVmIiwidXNlRWZmZWN0Iiwic3RvcmVIaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RvcmVNZW0iLCJjdXJyZW50IiwiZm9jdXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVzYyIsImVycm9yIiwicmVwbGFjZWRJbnB1dCIsInJlcGxhY2UiLCJtZXhwIiwiZXZhbCIsImUiLCJtZXNzYWdlIiwic2VhcmNoIiwicHJlc3NCdXR0b24iLCJjb2RlIiwic2hpZnQiLCJhbHQiLCJjdHJsIiwiaW5wdXRDb2RlIiwiZ2V0VHJ1ZUNvZGUiLCJoaXN0b3J5Q2xlYXIiLCJtZW1DbGVhciIsImNvcHlDb2RlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZm9jdXNJbnB1dCIsInBhc3RlSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIlN0cmluZyIsInVuZGVmaW5lZCIsInIiLCJkIiwiRGF0ZSIsIm5vdyIsInNsaWNlIiwicSIsInBvczEiLCJzZWxlY3Rpb25TdGFydCIsInBvczIiLCJzZWxlY3Rpb25FbmQiLCJnZXRGaW5hbElucHV0IiwiaW5zZXJ0Q29kZSIsIm5ld0lucHV0IiwibmV3UG9zIiwic2V0VGltZW91dCIsInMiLCJjYWxjIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwiYW5pbSIsIm1hcCIsImJ1dHRvbiIsIndoaXRlIiwiZXF1YWxseSIsInQiLCJyaWdodCIsImNsZWFyIiwib2JqIiwiZW1wdHkiLCJlbXB0eUhpc3RvcnkiLCJlbXB0eU1lbW9yeSIsInN0cjEiLCJzdHIyIiwic2VsZWN0aW9uIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiYmVnaW5TdHIyIiwiZW5kU3RyMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFBRUMsR0FBQyxFQUFFLElBQUw7QUFBV0MsR0FBQyxFQUFFO0FBQWQsQ0FEYyxFQUVkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBRmMsRUFHZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQUhjLEVBSWQ7QUFBRUQsR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFO0FBQWIsQ0FKYyxFQUtkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBTGMsRUFNZDtBQUFFRCxHQUFDLEVBQUUsSUFBTDtBQUFXQyxHQUFDLEVBQUU7QUFBZCxDQU5jLEVBT2Q7QUFBRUQsR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFO0FBQWIsQ0FQYyxFQVFkO0FBQUVELEdBQUMsRUFBRSxLQUFMO0FBQVlDLEdBQUMsRUFBRTtBQUFmLENBUmMsRUFTZDtBQUFFRCxHQUFDLEVBQUUsS0FBTDtBQUFZQyxHQUFDLEVBQUU7QUFBZixDQVRjLEVBVWQ7QUFBRUQsR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFO0FBQWIsQ0FWYyxFQVdkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRSxHQUFiO0FBQWtCQyxPQUFLLEVBQUU7QUFBekIsQ0FYYyxFQVlkO0FBQUVGLEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRSxHQUFi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QUFDWCxhQUFPLEdBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQWUsYUFBTyxHQUFQOztBQUNmLFNBQUssUUFBTDtBQUNFLFVBQUlBLEtBQUosRUFBVyxPQUFPLEdBQVA7QUFDWCxhQUFPLEdBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsVUFBSUEsS0FBSixFQUFXLE9BQU8sR0FBUDtBQUNYLGFBQU8sR0FBUDs7QUFDRixTQUFLLE9BQUw7QUFBYyxhQUFPLEdBQVA7O0FBQ2QsU0FBSyxPQUFMO0FBQ0UsVUFBSUEsS0FBSixFQUFXLE9BQU8sR0FBUDs7QUFDYixTQUFLLE9BQUw7QUFBYyxhQUFPLEdBQVA7O0FBQ2QsU0FBSyxRQUFMO0FBQWUsYUFBTyxHQUFQOztBQUNmLFNBQUssT0FBTDtBQUFjLGFBQU8sR0FBUDs7QUFDZCxTQUFLLE1BQUw7QUFBYSxhQUFPLEtBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsVUFBSSxDQUFDRSxJQUFMLEVBQVcsT0FBTyxLQUFQO0FBQ3RCOztBQUNGLFNBQUssTUFBTDtBQUFhLGFBQU8sS0FBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxhQUFPLElBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsYUFBTyxHQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLFVBQUlGLEtBQUosRUFBVztBQUFFLGVBQU8sS0FBUDtBQUFjLE9BQTNCLE1BQWlDLE9BQU8sSUFBUDs7QUFDOUMsU0FBSyxNQUFMO0FBQWEsVUFBSUEsS0FBSixFQUFXLE9BQU8sSUFBUDtBQUFhLGFBQU8sR0FBUDs7QUFDckMsU0FBSyxNQUFMO0FBQWEsYUFBTyxNQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLGFBQU8sR0FBUDs7QUFDYjtBQUFTLGFBQU8sTUFBUDtBQTFEWDtBQTRERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uODBmZTkwZDhjNGIxNTcyZDg2YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvY2FsYy5zdHlsJ1xyXG5pbXBvcnQgbWV4cCBmcm9tICdtYXRoLWV4cHJlc3Npb24tZXZhbHVhdG9yJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5jb25zdCBidXR0b25zID0gW1xyXG4gIHsgYzogXCJsblwiLCBuOiBcImxuXCIgfSxcclxuICB7IGM6IFwiKFwiLCBuOiBcIihcIiB9LFxyXG4gIHsgYzogXCIpXCIsIG46IFwiKVwiIH0sXHJcbiAgeyBjOiBcImNcIiwgbjogXCJDXCIgfSxcclxuICB7IGM6IFwibVwiLCBuOiBcIk1cIiB9LFxyXG4gIHsgYzogXCItLVwiLCBuOiBcIuKGkFwiIH0sXHJcbiAgeyBjOiBcIiVcIiwgbjogXCIlXCIgfSxcclxuICB7IGM6IFwibG9nXCIsIG46IFwibG9nXCIgfSxcclxuICB7IGM6IFwidGFuXCIsIG46IFwidGdcIiB9LFxyXG4gIHsgYzogXCJeXCIsIG46IFwiXlwiIH0sXHJcbiAgeyBjOiBcIjdcIiwgbjogXCI3XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjhcIiwgbjogXCI4XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjlcIiwgbjogXCI5XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIi9cIiwgbjogXCIvXCIgfSxcclxuICB7IGM6IFwiZVwiLCBuOiBcImVcIiB9LFxyXG4gIHsgYzogXCJjb3NcIiwgbjogXCJjb3NcIiB9LFxyXG4gIHsgYzogXCJzcXJ0XCIsIG46IFwi4oiaXCIgfSxcclxuICB7IGM6IFwiNFwiLCBuOiBcIjRcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiNVwiLCBuOiBcIjVcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiNlwiLCBuOiBcIjZcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiKlwiLCBuOiBcIipcIiB9LFxyXG4gIHsgYzogXCJwaVwiLCBuOiBcIs+AXCIgfSxcclxuICB7IGM6IFwic2luXCIsIG46IFwic2luXCIgfSxcclxuICB7IGM6IFwiIVwiLCBuOiBcIiFcIiB9LFxyXG4gIHsgYzogXCIxXCIsIG46IFwiMVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCIyXCIsIG46IFwiMlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCIzXCIsIG46IFwiM1wiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCItXCIsIG46IFwiLVwiIH0sXHJcbiAge30sXHJcbiAgeyBjOiBcInJtXCIsIG46IFwiUk1cIiB9LFxyXG4gIHsgYzogXCJyYW5kXCIsIG46IFwicmFuZFwiIH0sXHJcbiAgeyBjOiBcIi5cIiwgbjogXCIuXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjBcIiwgbjogXCIwXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIj1cIiwgbjogXCI9XCIsIGNvbG9yOiBmYWxzZSB9LFxyXG4gIHsgYzogXCIrXCIsIG46IFwiK1wiIH0sXHJcbl1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsYyh7IHByb3BzIH0pIHtcclxuICBjb25zdCBbcmVzdWx0LCByZXN1bHRDaGFuZ2VdID0gdXNlU3RhdGUoJycpLy/QktGL0LLQvtC00LjRgtGB0Y8g0LIg0YDQtdC30YPQu9GM0YLQsNGC0LVcclxuICBjb25zdCBbdHJ1ZVJlc3VsdCwgdHJ1ZVJlc3VsdENoYW5nZV0gPSB1c2VTdGF0ZSgnJykvL9Cf0L7RgdC70LXQtNC90LXQtSDRg9GB0L/QtdGI0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0LXRgdC70Lgg0L/QsNGA0YHQtdGAINC90LUg0L/QvtC90LjQvNCw0LXRglxyXG4gIGNvbnN0IFtpbnB1dCwgaW5wdXRDaGFuZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2hpc3RvcnksIGhpc3RvcnlDaGFuZ2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21lbW9yeSwgbWVtb3J5Q2hhbmdlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthbmltYXRlUmVzdWx0LCBhbmltYXRlUmVzdWx0Q10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVIaXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsY0hpc3RvcnknKVxyXG4gICAgaWYgKHN0b3JlSGlzICE9PSBudWxsKSBoaXN0b3J5Q2hhbmdlKEpTT04ucGFyc2Uoc3RvcmVIaXMpKVxyXG4gICAgY29uc3Qgc3RvcmVNZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsY01lbScpXHJcbiAgICBpZiAoc3RvcmVNZW0gIT09IG51bGwpIG1lbW9yeUNoYW5nZShKU09OLnBhcnNlKHN0b3JlTWVtKSlcclxuICAgIHJlZi5jdXJyZW50LmZvY3VzKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNNZW0nLCBKU09OLnN0cmluZ2lmeShtZW1vcnkpKVxyXG4gIH0sIFttZW1vcnldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY0hpc3RvcnknLCBKU09OLnN0cmluZ2lmeShoaXN0b3J5KSlcclxuICB9LCBbaGlzdG9yeV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBwcm9wcy5kZXNjLmVycm9yXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXBsYWNlZElucHV0ID0gaW5wdXRcclxuICAgICAgICAucmVwbGFjZSgvXFwlL2dtLCAnKjAuMDEqJykvL2FkZGVkIHBlcmNlbnRcclxuICAgICAgICAucmVwbGFjZSgvW14vKl4rKC1dezF9KD89bG9nfGxufHNpbnxjb3N8dGFuKS9nbSwgJyQmKicpLy9maXhlZCBtZW1vcnkgbGVha1xyXG4gICAgICByZXN1bHQgPSBtZXhwLmV2YWwocmVwbGFjZWRJbnB1dClcclxuICAgICAgdHJ1ZVJlc3VsdENoYW5nZShyZXN1bHQpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlLm1lc3NhZ2UgPT09ICcpIGlzIG5vdCBhbGxvd2VkIGFmdGVyICgnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpbnB1dC5zZWFyY2goLyhcXCt8XFwtfFxcKnxcXC98XFwlfFxcXikkLykgIT09IC0xKSByZXN1bHQgPSB0cnVlUmVzdWx0XHJcbiAgICAgICAgaWYgKGlucHV0ID09PSAnJykgcmVzdWx0ID0gJydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0Q2hhbmdlKHJlc3VsdClcclxuICB9LCBbaW5wdXRdKVxyXG5cclxuICBmdW5jdGlvbiBwcmVzc0J1dHRvbihjb2RlLCBzaGlmdCA9IGZhbHNlLCBhbHQgPSBmYWxzZSwgY3RybCA9IGZhbHNlKSB7IGFsdCA/IG51bGwgOiBpbnB1dENvZGUoZ2V0VHJ1ZUNvZGUoY29kZSwgc2hpZnQsIGN0cmwpKSB9XHJcbiAgZnVuY3Rpb24gaGlzdG9yeUNsZWFyKCkgeyBoaXN0b3J5Q2hhbmdlKFtdKSB9XHJcbiAgZnVuY3Rpb24gbWVtQ2xlYXIoKSB7IG1lbW9yeUNoYW5nZShbXSkgfVxyXG4gIGZ1bmN0aW9uIGNvcHlDb2RlKCkgeyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChgJHtyZXN1bHR9YCkgfVxyXG4gIGZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7IHJlZi5jdXJyZW50LmZvY3VzKCkgfVxyXG4gIGZ1bmN0aW9uIHBhc3RlSW5wdXQoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCAtIDEgPT09IGlucHV0Lmxlbmd0aCkgcmV0dXJuIGZhbHNlXHJcbiAgICBpbnB1dENoYW5nZShTdHJpbmcoZS50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuICBjb25zdCBpbnB1dENvZGUgPSAoY29kZSkgPT4ge1xyXG4gICAgaWYgKGNvZGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICBpZiAoY29kZSA9PT0gJ25vbmUnKSByZXR1cm5cclxuICAgIGlmIChjb2RlID09PSAnbScpIHtcclxuICAgICAgaWYgKHRydWVSZXN1bHQgPT09ICcnKSByZXR1cm5cclxuICAgICAgbWVtb3J5Q2hhbmdlKFt7IHI6IHRydWVSZXN1bHQsIGQ6IERhdGUubm93KCkgfSwgLi4ubWVtb3J5LnNsaWNlKDAsIDkpXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJz0nKSB7XHJcbiAgICAgIGFuaW1hdGVSZXN1bHRDKHRydWUpXHJcbiAgICAgIGlmIChoaXN0b3J5WzBdID09PSB1bmRlZmluZWQgfHwgaW5wdXQgIT09ICcnICYmIGlucHV0ICE9PSBoaXN0b3J5WzBdLnEgJiYgdHJ1ZVJlc3VsdCAhPT0gaGlzdG9yeVswXS5yKSBoaXN0b3J5Q2hhbmdlKFt7IHE6IGlucHV0LCByOiB0cnVlUmVzdWx0LCBkOiBEYXRlLm5vdygpIH0sIC4uLmhpc3Rvcnkuc2xpY2UoMCwgOSldKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAncm0nICYmIG1lbW9yeVswXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaW5wdXRDb2RlKFN0cmluZyhtZW1vcnlbMF0ucikpXHJcblxyXG4gICAgY29uc3QgcG9zMSA9IHJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0XHJcbiAgICBjb25zdCBwb3MyID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kXHJcbiAgICBmdW5jdGlvbiBnZXRGaW5hbElucHV0KCkge1xyXG4gICAgICBpZiAoYW5pbWF0ZVJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdENoYW5nZSgnJylcclxuICAgICAgICBhbmltYXRlUmVzdWx0QyhmYWxzZSlcclxuICAgICAgICByZXR1cm4gaW5zZXJ0Q29kZShTdHJpbmcoY29kZSksIFN0cmluZyh0cnVlUmVzdWx0KSwgcG9zMSwgcG9zMilcclxuICAgICAgfSByZXR1cm4gaW5zZXJ0Q29kZShTdHJpbmcoY29kZSksIGlucHV0LCBwb3MxLCBwb3MyKVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBuZXdJbnB1dCwgbmV3UG9zIH0gPSBnZXRGaW5hbElucHV0KClcclxuICAgIGlucHV0Q2hhbmdlKG5ld0lucHV0KVxyXG4gICAgZm9jdXNJbnB1dCgpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnQgPSByZWYuY3VycmVudC5zZWxlY3Rpb25FbmQgPSBuZXdQb3NcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtibG9ja30gY2xhc3NOYW1lPXtzLmJsb2NrfSB0YWJJbmRleD17LTF9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2FsY30gb25DbGljaz17Zm9jdXNJbnB1dH0gb25LZXlEb3duPXtlID0+IHByZXNzQnV0dG9uKGUuY29kZSwgZS5zaGlmdEtleSwgZS5hbHRLZXksIGUuY3RybEtleSl9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthbmltYXRlUmVzdWx0ID8gcy5hbmltIDogJyd9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWZ9IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e3Bhc3RlSW5wdXR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17Y29weUNvZGV9PntyZXN1bHR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtidXR0b25zLm1hcChidXR0b24gPT4gPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbi5jb2xvciA9PT0gdW5kZWZpbmVkID8gJycgOiBidXR0b24uY29sb3IgPyBzLndoaXRlIDogcy5lcXVhbGx5fSBrZXk9e2J1dHRvbi5jfSBkYXRhLXRvb2x0aXA9e2J1dHRvbi50fSBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoYnV0dG9uLmMpfT57YnV0dG9uLm59PC9idXR0b24+KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5yaWdodH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oaXN0b3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGlzdG9yeUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7aGlzdG9yeS5tYXAob2JqID0+XHJcbiAgICAgICAgICA8ZGl2IGtleT17b2JqLmR9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGlucHV0Q2hhbmdlKFN0cmluZyhvYmoucSkpfT57b2JqLnF9PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPiA9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhoaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eUhpc3Rvcnl9PC9kaXY+IDogbnVsbCl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubWVtb3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bWVtQ2xlYXJ9Pntwcm9wcy5kZXNjLmNsZWFyfTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHttZW1vcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhtZW1vcnkubGVuZ3RoID09PSAwID8gPGRpdiBjbGFzc05hbWU9e3MuZW1wdHl9Pntwcm9wcy5kZXNjLmVtcHR5TWVtb3J5fTwvZGl2PiA6IG51bGwpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5cclxuLy/QmNC30LzQtdC90LXQvdC40LUg0YHRgtGA0L7QutC4INCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQutC+0LTQsFxyXG5mdW5jdGlvbiBpbnNlcnRDb2RlKGNvZGUsIGlucHV0LCBwb3MxLCBwb3MyKSB7XHJcbiAgbGV0IHN0cjEgPSBpbnB1dC5zbGljZSgwLCBwb3MxKVxyXG4gIGxldCBzdHIyID0gaW5wdXQuc2xpY2UocG9zMilcclxuICBsZXQgc2VsZWN0aW9uID0gaW5wdXQuc2xpY2UocG9zMSwgcG9zMilcclxuICBsZXQgbmV3UG9zID0gcG9zMVxyXG5cclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgJysnOlxyXG4gICAgY2FzZSAnLSc6XHJcbiAgICBjYXNlICcqJzpcclxuICAgIGNhc2UgJy8nOlxyXG4gICAgY2FzZSAnJSc6XHJcbiAgICBjYXNlICdeJzpcclxuICAgICAgc2VsZWN0aW9uID0gY29kZVxyXG4gICAgICBpZiAoc3RyMS5zZWFyY2goLyhcXCt8XFwtfFxcKnxcXC98XFwlfFxcXikkLykgIT09IC0xKSB7IHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKSB9IGVsc2UgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJzAnOlxyXG4gICAgY2FzZSAnMSc6XHJcbiAgICBjYXNlICcyJzpcclxuICAgIGNhc2UgJzMnOlxyXG4gICAgY2FzZSAnNCc6XHJcbiAgICBjYXNlICc1JzpcclxuICAgIGNhc2UgJzYnOlxyXG4gICAgY2FzZSAnNyc6XHJcbiAgICBjYXNlICc4JzpcclxuICAgIGNhc2UgJzknOlxyXG4gICAgY2FzZSAnZSc6XHJcbiAgICBjYXNlICchJzpcclxuICAgIGNhc2UgJy4nOiBzZWxlY3Rpb24gPSBjb2RlOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnc3FydCc6IHNlbGVjdGlvbiA9IFwiXigxLylcIjsgbmV3UG9zICs9IDRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2Nvcyc6XHJcbiAgICBjYXNlICdzaW4nOlxyXG4gICAgY2FzZSAndGFuJzpcclxuICAgICAgaWYgKHBvczEgIT09IHBvczIpIG5ld1BvcyArPSBzZWxlY3Rpb24ubGVuZ3RoICsgMVxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlICsgYCgke3NlbGVjdGlvbn0pYFxyXG4gICAgICBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnYyc6IHJldHVybiB7IG5ld0lucHV0OiAnJywgbmV3UG9zOiAwIH1cclxuICAgIGNhc2UgJ3JhbmQnOiBzZWxlY3Rpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApIC8gMTAwMDAwOyBuZXdQb3MgPSArN1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnKCc6IHNlbGVjdGlvbiA9IGAoJHtzZWxlY3Rpb259KWA7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcpJzogc2VsZWN0aW9uID0gJyknOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnLS0nOlxyXG4gICAgICBpZiAocG9zMSA9PT0gcG9zMikge1xyXG4gICAgICAgIGNvbnN0IGJlZ2luU3RyMiA9IHN0cjIuc2xpY2UoMCwgMSlcclxuICAgICAgICBjb25zdCBlbmRTdHIxID0gc3RyMS5zbGljZSgtMilcclxuICAgICAgICBpZiAoZW5kU3RyMSA9PT0gJ2luJyB8fCBlbmRTdHIxID09PSAnb3MnIHx8IGVuZFN0cjEgPT09ICdvZycgfHwgZW5kU3RyMSA9PT0gJ2FuJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTMpXHJcbiAgICAgICAgICBuZXdQb3MgPSBuZXdQb3MgLSAyXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRTdHIxWzFdID09PSAnKCcgJiYgYmVnaW5TdHIyID09PSAnKScpIHtcclxuICAgICAgICAgIHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKVxyXG4gICAgICAgICAgc3RyMiA9IHN0cjIuc2xpY2UoMSlcclxuICAgICAgICB9IGVsc2UgaWYgKGVuZFN0cjEgPT09ICdsbicgfHwgZW5kU3RyMSA9PT0gJ3BpJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTIpXHJcbiAgICAgICAgICBuZXdQb3MtLVxyXG4gICAgICAgIH0gZWxzZSBzdHIxID0gc3RyMS5zbGljZSgwLCAtMSk7IGlmIChwb3MxICE9PSAwKSBuZXdQb3MtLVxyXG4gICAgICB9IGVsc2Ugc2VsZWN0aW9uID0gJydcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgYmVnaW5TdHIyID0gc3RyMi5zbGljZSgwLCAyKVxyXG4gICAgICAgIGlmIChiZWdpblN0cjIgPT09ICdzaScgfHwgYmVnaW5TdHIyID09PSAnY28nIHx8IGJlZ2luU3RyMiA9PT0gJ3RhJyB8fCBiZWdpblN0cjIgPT09ICdsbycpIHtcclxuICAgICAgICAgIHN0cjIgPSBzdHIyLnNsaWNlKDMpXHJcbiAgICAgICAgfSBlbHNlIGlmIChiZWdpblN0cjIgPT09ICdsbicgfHwgYmVnaW5TdHIyID09PSAncGknKSB7XHJcbiAgICAgICAgICBzdHIyID0gc3RyMi5zbGljZSgyKVxyXG4gICAgICAgIH0gZWxzZSBzdHIyID0gc3RyMi5zbGljZSgxKVxyXG4gICAgICB9IGVsc2Ugc2VsZWN0aW9uID0gJydcclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6IHNlbGVjdGlvbiA9IGNvZGU7IG5ld1BvcyArPSBjb2RlLmxlbmd0aFxyXG4gIH1cclxuICBjb25zdCBuZXdJbnB1dCA9IHN0cjEgKyBzZWxlY3Rpb24gKyBzdHIyXHJcbiAgcmV0dXJuIHsgbmV3SW5wdXQsIG5ld1BvcyB9XHJcbn1cclxuXHJcbi8v0J/QvtC70YPRh9C10L3QuNC1INC60L7QtNCwINC/0L4g0LTQtdC50YHRgtCy0LjRjlxyXG5mdW5jdGlvbiBnZXRUcnVlQ29kZShjb2RlLCBzaGlmdCwgY3RybCkge1xyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSAnQmFja3NwYWNlJzogcmV0dXJuICctLSdcclxuICAgIGNhc2UgJ0RlbGV0ZSc6IHJldHVybiAnZGVsZXRlJ1xyXG4gICAgY2FzZSAnTnVtcGFkMSc6IHJldHVybiAnMSdcclxuICAgIGNhc2UgJ051bXBhZDInOiByZXR1cm4gJzInXHJcbiAgICBjYXNlICdOdW1wYWQzJzogcmV0dXJuICczJ1xyXG4gICAgY2FzZSAnTnVtcGFkNCc6IHJldHVybiAnNCdcclxuICAgIGNhc2UgJ051bXBhZDUnOiByZXR1cm4gJzUnXHJcbiAgICBjYXNlICdOdW1wYWQ2JzogcmV0dXJuICc2J1xyXG4gICAgY2FzZSAnTnVtcGFkNyc6IHJldHVybiAnNydcclxuICAgIGNhc2UgJ051bXBhZDgnOiByZXR1cm4gJzgnXHJcbiAgICBjYXNlICdOdW1wYWQ5JzogcmV0dXJuICc5J1xyXG4gICAgY2FzZSAnTnVtcGFkMCc6IHJldHVybiAnMCdcclxuICAgIGNhc2UgJ051bXBhZERlY2ltYWwnOiByZXR1cm4gJy4nXHJcbiAgICBjYXNlICdOdW1wYWRFbnRlcic6IHJldHVybiAnPSdcclxuICAgIGNhc2UgJ051bXBhZEFkZCc6IHJldHVybiAnKydcclxuICAgIGNhc2UgJ051bXBhZFN1YnRyYWN0JzogcmV0dXJuICctJ1xyXG4gICAgY2FzZSAnTnVtcGFkTXVsdGlwbHknOiByZXR1cm4gJyonXHJcbiAgICBjYXNlICdOdW1wYWREaXZpZGUnOiByZXR1cm4gJy8nXHJcblxyXG4gICAgY2FzZSAnRGlnaXQwJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyknXHJcbiAgICAgIHJldHVybiAnMCdcclxuICAgIGNhc2UgJ0RpZ2l0MSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICchJ1xyXG4gICAgICByZXR1cm4gJzEnXHJcbiAgICBjYXNlICdEaWdpdDInOiByZXR1cm4gJzInXHJcbiAgICBjYXNlICdEaWdpdDMnOiByZXR1cm4gJzMnXHJcbiAgICBjYXNlICdEaWdpdDQnOiByZXR1cm4gJzQnXHJcbiAgICBjYXNlICdEaWdpdDUnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnJSdcclxuICAgICAgcmV0dXJuICc1J1xyXG4gICAgY2FzZSAnRGlnaXQ2JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJ14nXHJcbiAgICAgIHJldHVybiAnNidcclxuICAgIGNhc2UgJ0RpZ2l0Nyc6IHJldHVybiAnNydcclxuICAgIGNhc2UgJ0RpZ2l0OCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcqJ1xyXG4gICAgICByZXR1cm4gJzgnXHJcbiAgICBjYXNlICdEaWdpdDknOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKCdcclxuICAgICAgcmV0dXJuICc5J1xyXG4gICAgY2FzZSAnTWludXMnOiByZXR1cm4gJy0nXHJcbiAgICBjYXNlICdFcXVhbCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcrJ1xyXG4gICAgY2FzZSAnRW50ZXInOiByZXR1cm4gJz0nXHJcbiAgICBjYXNlICdQZXJpb2QnOiByZXR1cm4gJy4nXHJcbiAgICBjYXNlICdTbGFzaCc6IHJldHVybiAnLydcclxuICAgIGNhc2UgJ0tleVMnOiByZXR1cm4gJ3NpbidcclxuICAgIGNhc2UgJ0tleUMnOiBpZiAoIWN0cmwpIHJldHVybiAnY29zJ1xyXG4gICAgICByZXR1cm5cclxuICAgIGNhc2UgJ0tleVQnOiByZXR1cm4gJ3RhbidcclxuICAgIGNhc2UgJ0tleVAnOiByZXR1cm4gJ3BpJ1xyXG4gICAgY2FzZSAnS2V5RSc6IHJldHVybiAnZSdcclxuICAgIGNhc2UgJ0tleUwnOiBpZiAoc2hpZnQpIHsgcmV0dXJuICdsb2cnIH0gZWxzZSByZXR1cm4gJ2xuJ1xyXG4gICAgY2FzZSAnS2V5TSc6IGlmIChzaGlmdCkgcmV0dXJuICdybSc7IHJldHVybiAnbSdcclxuICAgIGNhc2UgJ0tleVInOiByZXR1cm4gJ3JhbmQnXHJcbiAgICBjYXNlICdIb21lJzogcmV0dXJuICdjJ1xyXG4gICAgZGVmYXVsdDogcmV0dXJuICdub25lJ1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=