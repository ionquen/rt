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
    focusInput();
    setTimeout(function () {
      ref.current.selectionStart = ref.current.selectionEnd = newPos;
    });
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbImJ1dHRvbnMiLCJjIiwibiIsImNvbG9yIiwiQ2FsYyIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN1bHQiLCJyZXN1bHRDaGFuZ2UiLCJ0cnVlUmVzdWx0IiwidHJ1ZVJlc3VsdENoYW5nZSIsImlucHV0IiwiaW5wdXRDaGFuZ2UiLCJoaXN0b3J5IiwiaGlzdG9yeUNoYW5nZSIsIm1lbW9yeSIsIm1lbW9yeUNoYW5nZSIsImFuaW1hdGVSZXN1bHQiLCJhbmltYXRlUmVzdWx0QyIsImJsb2NrIiwidXNlUmVmIiwicmVmIiwidXNlRWZmZWN0Iiwic3RvcmVIaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RvcmVNZW0iLCJjdXJyZW50IiwiZm9jdXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVzYyIsImVycm9yIiwicmVwbGFjZWRJbnB1dCIsInJlcGxhY2UiLCJtZXhwIiwiZXZhbCIsImUiLCJtZXNzYWdlIiwic2VhcmNoIiwicHJlc3NCdXR0b24iLCJjb2RlIiwic2hpZnQiLCJhbHQiLCJjdHJsIiwiaW5wdXRDb2RlIiwiZ2V0VHJ1ZUNvZGUiLCJoaXN0b3J5Q2xlYXIiLCJtZW1DbGVhciIsImNvcHlDb2RlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZm9jdXNJbnB1dCIsInBhc3RlSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIlN0cmluZyIsInVuZGVmaW5lZCIsInIiLCJkIiwiRGF0ZSIsIm5vdyIsInNsaWNlIiwicSIsInBvczEiLCJzZWxlY3Rpb25TdGFydCIsInBvczIiLCJzZWxlY3Rpb25FbmQiLCJnZXRSc3QiLCJpbnNlcnQiLCJuZXdJbnB1dCIsIm5ld1BvcyIsInNldFRpbWVvdXQiLCJzIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwiY2FsYyIsImFuaW0iLCJtYXAiLCJidXR0b24iLCJ3aGl0ZSIsImVxdWFsbHkiLCJ0IiwicmlnaHQiLCJjbGVhciIsIm9iaiIsImVtcHR5IiwiZW1wdHlIaXN0b3J5IiwiZW1wdHlNZW1vcnkiLCJzdHIxIiwic3RyMiIsInNlbGVjdGlvbiIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImJlZ2luU3RyMiIsImVuZFN0cjEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQUVDLEdBQUMsRUFBRSxJQUFMO0FBQVdDLEdBQUMsRUFBRTtBQUFkLENBRGMsRUFFZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQUZjLEVBR2Q7QUFBRUQsR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFO0FBQWIsQ0FIYyxFQUlkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBSmMsRUFLZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQUxjLEVBTWQ7QUFBRUQsR0FBQyxFQUFFLElBQUw7QUFBV0MsR0FBQyxFQUFFO0FBQWQsQ0FOYyxFQU9kO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBUGMsRUFRZDtBQUFFRCxHQUFDLEVBQUUsS0FBTDtBQUFZQyxHQUFDLEVBQUU7QUFBZixDQVJjLEVBU2Q7QUFBRUQsR0FBQyxFQUFFLEtBQUw7QUFBWUMsR0FBQyxFQUFFO0FBQWYsQ0FUYyxFQVVkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBVmMsRUFXZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUUsR0FBYjtBQUFrQkMsT0FBSyxFQUFFO0FBQXpCLENBWGMsRUFZZDtBQUFFRixHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUUsR0FBYjtBQUFrQkMsT0FB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QUNGLFNBQUssUUFBTDtBQUFlLGFBQU8sR0FBUDs7QUFDZixTQUFLLFFBQUw7QUFDRSxVQUFJQSxLQUFKLEVBQVcsT0FBTyxHQUFQO0FBQ1gsYUFBTyxHQUFQOztBQUNGLFNBQUssUUFBTDtBQUNFLFVBQUlBLEtBQUosRUFBVyxPQUFPLEdBQVA7QUFDWCxhQUFPLEdBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQWMsYUFBTyxHQUFQOztBQUNkLFNBQUssT0FBTDtBQUNFLFVBQUlBLEtBQUosRUFBVyxPQUFPLEdBQVA7O0FBQ2IsU0FBSyxPQUFMO0FBQWMsYUFBTyxHQUFQOztBQUNkLFNBQUssUUFBTDtBQUFlLGFBQU8sR0FBUDs7QUFDZixTQUFLLE9BQUw7QUFBYyxhQUFPLEdBQVA7O0FBQ2QsU0FBSyxNQUFMO0FBQWEsYUFBTyxLQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLFVBQUksQ0FBQ0UsSUFBTCxFQUFXLE9BQU8sS0FBUDtBQUN0Qjs7QUFDRixTQUFLLE1BQUw7QUFBYSxhQUFPLEtBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsYUFBTyxJQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLGFBQU8sR0FBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxVQUFJRixLQUFKLEVBQVc7QUFBRSxlQUFPLEtBQVA7QUFBYyxPQUEzQixNQUFpQyxPQUFPLElBQVA7O0FBQzlDLFNBQUssTUFBTDtBQUFhLFVBQUlBLEtBQUosRUFBVyxPQUFPLElBQVA7QUFBYSxhQUFPLEdBQVA7O0FBQ3JDLFNBQUssTUFBTDtBQUFhLGFBQU8sTUFBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxhQUFPLEdBQVA7O0FBQ2I7QUFBUyxhQUFPLE1BQVA7QUExRFg7QUE0REQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjdkODliY2U4NGU2OGI2YTdkNzg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL2NhbGMuc3R5bCdcclxuaW1wb3J0IG1leHAgZnJvbSAnbWF0aC1leHByZXNzaW9uLWV2YWx1YXRvcidcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuY29uc3QgYnV0dG9ucyA9IFtcclxuICB7IGM6IFwibG5cIiwgbjogXCJsblwiIH0sXHJcbiAgeyBjOiBcIihcIiwgbjogXCIoXCIgfSxcclxuICB7IGM6IFwiKVwiLCBuOiBcIilcIiB9LFxyXG4gIHsgYzogXCJjXCIsIG46IFwiQ1wiIH0sXHJcbiAgeyBjOiBcIm1cIiwgbjogXCJNXCIgfSxcclxuICB7IGM6IFwiLS1cIiwgbjogXCLihpBcIiB9LFxyXG4gIHsgYzogXCIlXCIsIG46IFwiJVwiIH0sXHJcbiAgeyBjOiBcImxvZ1wiLCBuOiBcImxvZ1wiIH0sXHJcbiAgeyBjOiBcInRhblwiLCBuOiBcInRnXCIgfSxcclxuICB7IGM6IFwiXlwiLCBuOiBcIl5cIiB9LFxyXG4gIHsgYzogXCI3XCIsIG46IFwiN1wiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCI4XCIsIG46IFwiOFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCI5XCIsIG46IFwiOVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCIvXCIsIG46IFwiL1wiIH0sXHJcbiAgeyBjOiBcImVcIiwgbjogXCJlXCIgfSxcclxuICB7IGM6IFwiY29zXCIsIG46IFwiY29zXCIgfSxcclxuICB7IGM6IFwic3FydFwiLCBuOiBcIuKImlwiIH0sXHJcbiAgeyBjOiBcIjRcIiwgbjogXCI0XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjVcIiwgbjogXCI1XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjZcIiwgbjogXCI2XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIipcIiwgbjogXCIqXCIgfSxcclxuICB7IGM6IFwicGlcIiwgbjogXCLPgFwiIH0sXHJcbiAgeyBjOiBcInNpblwiLCBuOiBcInNpblwiIH0sXHJcbiAgeyBjOiBcIiFcIiwgbjogXCIhXCIgfSxcclxuICB7IGM6IFwiMVwiLCBuOiBcIjFcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiMlwiLCBuOiBcIjJcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiM1wiLCBuOiBcIjNcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiLVwiLCBuOiBcIi1cIiB9LFxyXG4gIHt9LFxyXG4gIHsgYzogXCJybVwiLCBuOiBcIlJNXCIgfSxcclxuICB7IGM6IFwicmFuZFwiLCBuOiBcInJhbmRcIiB9LFxyXG4gIHsgYzogXCIuXCIsIG46IFwiLlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCIwXCIsIG46IFwiMFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCI9XCIsIG46IFwiPVwiLCBjb2xvcjogZmFsc2UgfSxcclxuICB7IGM6IFwiK1wiLCBuOiBcIitcIiB9LFxyXG5dXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGMoeyBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW3Jlc3VsdCwgcmVzdWx0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKS8v0JLRi9Cy0L7QtNC40YLRgdGPINCyINGA0LXQt9GD0LvRjNGC0LDRgtC1XHJcbiAgY29uc3QgW3RydWVSZXN1bHQsIHRydWVSZXN1bHRDaGFuZ2VdID0gdXNlU3RhdGUoJycpLy/Qn9C+0YHQu9C10LTQvdC10LUg0YPRgdC/0LXRiNC90L7QtSDQt9C90LDRh9C10L3QuNC1INC10YHQu9C4INC/0LDRgNGB0LXRgCDQvdC1INC/0L7QvdC40LzQsNC10YJcclxuICBjb25zdCBbaW5wdXQsIGlucHV0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtoaXN0b3J5LCBoaXN0b3J5Q2hhbmdlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttZW1vcnksIG1lbW9yeUNoYW5nZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYW5pbWF0ZVJlc3VsdCwgYW5pbWF0ZVJlc3VsdENdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlSGlzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbGNIaXN0b3J5JylcclxuICAgIGlmIChzdG9yZUhpcyAhPT0gbnVsbCkgaGlzdG9yeUNoYW5nZShKU09OLnBhcnNlKHN0b3JlSGlzKSlcclxuICAgIGNvbnN0IHN0b3JlTWVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbGNNZW0nKVxyXG4gICAgaWYgKHN0b3JlTWVtICE9PSBudWxsKSBtZW1vcnlDaGFuZ2UoSlNPTi5wYXJzZShzdG9yZU1lbSkpXHJcbiAgICByZWYuY3VycmVudC5mb2N1cygpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjTWVtJywgSlNPTi5zdHJpbmdpZnkobWVtb3J5KSlcclxuICB9LCBbbWVtb3J5XSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNIaXN0b3J5JywgSlNPTi5zdHJpbmdpZnkoaGlzdG9yeSkpXHJcbiAgfSwgW2hpc3RvcnldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gcHJvcHMuZGVzYy5lcnJvclxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVwbGFjZWRJbnB1dCA9IGlucHV0XHJcbiAgICAgICAgLnJlcGxhY2UoL1xcJS9nbSwgJyowLjAxKicpLy9hZGRlZCBwZXJjZW50XHJcbiAgICAgICAgLnJlcGxhY2UoL1teLypeKygtXXsxfSg/PWxvZ3xsbnxzaW58Y29zfHRhbikvZ20sICckJionKS8vZml4ZWQgbWVtb3J5IGxlYWtcclxuICAgICAgcmVzdWx0ID0gbWV4cC5ldmFsKHJlcGxhY2VkSW5wdXQpXHJcbiAgICAgIHRydWVSZXN1bHRDaGFuZ2UocmVzdWx0KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoZS5tZXNzYWdlID09PSAnKSBpcyBub3QgYWxsb3dlZCBhZnRlciAoJykge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaW5wdXQuc2VhcmNoKC8oXFwrfFxcLXxcXCp8XFwvfFxcJXxcXF4pJC8pICE9PSAtMSkgcmVzdWx0ID0gdHJ1ZVJlc3VsdFxyXG4gICAgICAgIGlmIChpbnB1dCA9PT0gJycpIHJlc3VsdCA9ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3VsdENoYW5nZShyZXN1bHQpXHJcbiAgfSwgW2lucHV0XSlcclxuXHJcbiAgZnVuY3Rpb24gcHJlc3NCdXR0b24oY29kZSwgc2hpZnQgPSBmYWxzZSwgYWx0ID0gZmFsc2UsIGN0cmwgPSBmYWxzZSkgeyBhbHQgPyBudWxsIDogaW5wdXRDb2RlKGdldFRydWVDb2RlKGNvZGUsIHNoaWZ0LCBjdHJsKSkgfVxyXG4gIGZ1bmN0aW9uIGhpc3RvcnlDbGVhcigpIHsgaGlzdG9yeUNoYW5nZShbXSkgfVxyXG4gIGZ1bmN0aW9uIG1lbUNsZWFyKCkgeyBtZW1vcnlDaGFuZ2UoW10pIH1cclxuICBmdW5jdGlvbiBjb3B5Q29kZSgpIHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYCR7cmVzdWx0fWApIH1cclxuICBmdW5jdGlvbiBmb2N1c0lucHV0KCkgeyByZWYuY3VycmVudC5mb2N1cygpIH1cclxuICBmdW5jdGlvbiBwYXN0ZUlucHV0KGUpIHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggLSAxID09PSBpbnB1dC5sZW5ndGgpIHJldHVybiBmYWxzZVxyXG4gICAgaW5wdXRDaGFuZ2UoU3RyaW5nKGUudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcbiAgY29uc3QgaW5wdXRDb2RlID0gKGNvZGUpID0+IHtcclxuICAgIGlmIChjb2RlID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgaWYgKGNvZGUgPT09ICdub25lJykgcmV0dXJuXHJcbiAgICBpZiAoY29kZSA9PT0gJ20nKSB7XHJcbiAgICAgIGlmICh0cnVlUmVzdWx0ID09PSAnJykgcmV0dXJuXHJcbiAgICAgIG1lbW9yeUNoYW5nZShbeyByOiB0cnVlUmVzdWx0LCBkOiBEYXRlLm5vdygpIH0sIC4uLm1lbW9yeS5zbGljZSgwLCA5KV0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICc9Jykge1xyXG4gICAgICBhbmltYXRlUmVzdWx0Qyh0cnVlKVxyXG4gICAgICBpZiAoaGlzdG9yeVswXSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0ICE9PSAnJyAmJiBpbnB1dCAhPT0gaGlzdG9yeVswXS5xICYmIHRydWVSZXN1bHQgIT09IGhpc3RvcnlbMF0ucikgaGlzdG9yeUNoYW5nZShbeyBxOiBpbnB1dCwgcjogdHJ1ZVJlc3VsdCwgZDogRGF0ZS5ub3coKSB9LCAuLi5oaXN0b3J5LnNsaWNlKDAsIDkpXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJ3JtJyAmJiBtZW1vcnlbMF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0Q29kZShTdHJpbmcobWVtb3J5WzBdLnIpKVxyXG5cclxuICAgIGNvbnN0IHBvczEgPSByZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydFxyXG4gICAgY29uc3QgcG9zMiA9IHJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZFxyXG4gICAgZnVuY3Rpb24gZ2V0UnN0KCkge1xyXG4gICAgICBpZiAoYW5pbWF0ZVJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdENoYW5nZSgnJylcclxuICAgICAgICBhbmltYXRlUmVzdWx0QyhmYWxzZSlcclxuICAgICAgICByZXR1cm4gaW5zZXJ0KFN0cmluZyhjb2RlKSwgU3RyaW5nKHRydWVSZXN1bHQpLCBwb3MxLCBwb3MyKVxyXG4gICAgICB9IHJldHVybiBpbnNlcnQoU3RyaW5nKGNvZGUpLCBpbnB1dCwgcG9zMSwgcG9zMilcclxuICAgIH1cclxuICAgIGNvbnN0IHsgbmV3SW5wdXQsIG5ld1BvcyB9ID0gZ2V0UnN0KClcclxuICAgIGlucHV0Q2hhbmdlKG5ld0lucHV0KVxyXG4gICAgZm9jdXNJbnB1dCgpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnQgPSByZWYuY3VycmVudC5zZWxlY3Rpb25FbmQgPSBuZXdQb3NcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtibG9ja30gY2xhc3NOYW1lPXtzLmJsb2NrfSB0YWJJbmRleD17LTF9IG9uQ2xpY2s9e2ZvY3VzSW5wdXR9IG9uS2V5RG93bj17ZSA9PiBwcmVzc0J1dHRvbihlLmNvZGUsIGUuc2hpZnRLZXksIGUuYWx0S2V5LCBlLmN0cmxLZXkpfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhbGN9ID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YW5pbWF0ZVJlc3VsdCA/IHMuYW5pbSA6ICcnfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17cmVmfSB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtwYXN0ZUlucHV0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NvcHlDb2RlfT57cmVzdWx0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7YnV0dG9ucy5tYXAoYnV0dG9uID0+IDxidXR0b24gY2xhc3NOYW1lPXtidXR0b24uY29sb3IgPT09IHVuZGVmaW5lZCA/ICcnIDogYnV0dG9uLmNvbG9yID8gcy53aGl0ZSA6IHMuZXF1YWxseX0ga2V5PXtidXR0b24uY30gZGF0YS10b29sdGlwPXtidXR0b24udH0gb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKGJ1dHRvbi5jKX0+e2J1dHRvbi5ufTwvYnV0dG9uPil9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGlzdG9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hpc3RvcnlDbGVhcn0+e3Byb3BzLmRlc2MuY2xlYXJ9PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2hpc3RvcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENoYW5nZShTdHJpbmcob2JqLnEpKX0+e29iai5xfTwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj4gPSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsoaGlzdG9yeS5sZW5ndGggPT09IDAgPyA8ZGl2IGNsYXNzTmFtZT17cy5lbXB0eX0+e3Byb3BzLmRlc2MuZW1wdHlIaXN0b3J5fTwvZGl2PiA6IG51bGwpfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJpZ2h0fT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLm1lbW9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21lbUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bWVtb3J5Lm1hcChvYmogPT5cclxuICAgICAgICAgIDxkaXYga2V5PXtvYmouZH0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsobWVtb3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eU1lbW9yeX08L2Rpdj4gOiBudWxsKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbi8v0JjQt9C80LXQvdC10L3QuNC1INGB0YLRgNC+0LrQuCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LrQvtC00LBcclxuZnVuY3Rpb24gaW5zZXJ0KGNvZGUsIGlucHV0LCBwb3MxLCBwb3MyKSB7XHJcbiAgbGV0IHN0cjEgPSBpbnB1dC5zbGljZSgwLCBwb3MxKVxyXG4gIGxldCBzdHIyID0gaW5wdXQuc2xpY2UocG9zMilcclxuICBsZXQgc2VsZWN0aW9uID0gaW5wdXQuc2xpY2UocG9zMSwgcG9zMilcclxuICBsZXQgbmV3UG9zID0gcG9zMVxyXG5cclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgJysnOlxyXG4gICAgY2FzZSAnLSc6XHJcbiAgICBjYXNlICcqJzpcclxuICAgIGNhc2UgJy8nOlxyXG4gICAgY2FzZSAnJSc6XHJcbiAgICBjYXNlICdeJzpcclxuICAgICAgc2VsZWN0aW9uID0gY29kZVxyXG4gICAgICBpZiAoc3RyMS5zZWFyY2goLyhcXCt8XFwtfFxcKnxcXC98XFwlfFxcXikkLykgIT09IC0xKSB7IHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKSB9IGVsc2UgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJzAnOlxyXG4gICAgY2FzZSAnMSc6XHJcbiAgICBjYXNlICcyJzpcclxuICAgIGNhc2UgJzMnOlxyXG4gICAgY2FzZSAnNCc6XHJcbiAgICBjYXNlICc1JzpcclxuICAgIGNhc2UgJzYnOlxyXG4gICAgY2FzZSAnNyc6XHJcbiAgICBjYXNlICc4JzpcclxuICAgIGNhc2UgJzknOlxyXG4gICAgY2FzZSAnZSc6XHJcbiAgICBjYXNlICchJzpcclxuICAgIGNhc2UgJy4nOiBzZWxlY3Rpb24gPSBjb2RlOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnc3FydCc6IHNlbGVjdGlvbiA9IFwiXigxLylcIjsgbmV3UG9zICs9IDRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2Nvcyc6XHJcbiAgICBjYXNlICdzaW4nOlxyXG4gICAgY2FzZSAndGFuJzpcclxuICAgICAgaWYgKHBvczEgIT09IHBvczIpIG5ld1BvcyArPSBzZWxlY3Rpb24ubGVuZ3RoICsgMVxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlICsgYCgke3NlbGVjdGlvbn0pYFxyXG4gICAgICBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnYyc6IHJldHVybiB7IG5ld0lucHV0OiAnJywgbmV3UG9zOiAwIH1cclxuICAgIGNhc2UgJ3JhbmQnOiBzZWxlY3Rpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApIC8gMTAwMDAwOyBuZXdQb3MgPSArN1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnKCc6IHNlbGVjdGlvbiA9IGAoJHtzZWxlY3Rpb259KWA7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcpJzogc2VsZWN0aW9uID0gJyknOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnLS0nOlxyXG4gICAgICBpZiAocG9zMSA9PT0gcG9zMikge1xyXG4gICAgICAgIGNvbnN0IGJlZ2luU3RyMiA9IHN0cjIuc2xpY2UoMCwgMSlcclxuICAgICAgICBjb25zdCBlbmRTdHIxID0gc3RyMS5zbGljZSgtMilcclxuICAgICAgICBpZiAoZW5kU3RyMSA9PT0gJ2luJyB8fCBlbmRTdHIxID09PSAnb3MnIHx8IGVuZFN0cjEgPT09ICdvZycgfHwgZW5kU3RyMSA9PT0gJ2FuJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTMpXHJcbiAgICAgICAgICBuZXdQb3MgPSBuZXdQb3MgLSAyXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRTdHIxWzFdID09PSAnKCcgJiYgYmVnaW5TdHIyID09PSAnKScpIHtcclxuICAgICAgICAgIHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKVxyXG4gICAgICAgICAgc3RyMiA9IHN0cjIuc2xpY2UoMSlcclxuICAgICAgICB9IGVsc2UgaWYgKGVuZFN0cjEgPT09ICdsbicgfHwgZW5kU3RyMSA9PT0gJ3BpJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTIpXHJcbiAgICAgICAgICBuZXdQb3MtLVxyXG4gICAgICAgIH0gZWxzZSBzdHIxID0gc3RyMS5zbGljZSgwLCAtMSk7IGlmIChwb3MxICE9PSAwKSBuZXdQb3MtLVxyXG4gICAgICB9IGVsc2Ugc2VsZWN0aW9uID0gJydcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgYmVnaW5TdHIyID0gc3RyMi5zbGljZSgwLCAyKVxyXG4gICAgICAgIGlmIChiZWdpblN0cjIgPT09ICdzaScgfHwgYmVnaW5TdHIyID09PSAnY28nIHx8IGJlZ2luU3RyMiA9PT0gJ3RhJyB8fCBiZWdpblN0cjIgPT09ICdsbycpIHtcclxuICAgICAgICAgIHN0cjIgPSBzdHIyLnNsaWNlKDMpXHJcbiAgICAgICAgfSBlbHNlIGlmIChiZWdpblN0cjIgPT09ICdsbicgfHwgYmVnaW5TdHIyID09PSAncGknKSB7XHJcbiAgICAgICAgICBzdHIyID0gc3RyMi5zbGljZSgyKVxyXG4gICAgICAgIH0gZWxzZSBzdHIyID0gc3RyMi5zbGljZSgxKVxyXG4gICAgICB9IGVsc2Ugc2VsZWN0aW9uID0gJydcclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6IHNlbGVjdGlvbiA9IGNvZGU7IG5ld1BvcyArPSBjb2RlLmxlbmd0aFxyXG4gIH1cclxuICBjb25zdCBuZXdJbnB1dCA9IHN0cjEgKyBzZWxlY3Rpb24gKyBzdHIyXHJcbiAgcmV0dXJuIHsgbmV3SW5wdXQsIG5ld1BvcyB9XHJcbn1cclxuXHJcbi8v0J/QvtC70YPRh9C10L3QuNC1INC60L7QtNCwINC/0L4g0LTQtdC50YHRgtCy0LjRjlxyXG5mdW5jdGlvbiBnZXRUcnVlQ29kZShjb2RlLCBzaGlmdCwgY3RybCkge1xyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSAnQmFja3NwYWNlJzogcmV0dXJuICctLSdcclxuICAgIGNhc2UgJ0RlbGV0ZSc6IHJldHVybiAnZGVsZXRlJ1xyXG4gICAgY2FzZSAnTnVtcGFkMSc6IHJldHVybiAnMSdcclxuICAgIGNhc2UgJ051bXBhZDInOiByZXR1cm4gJzInXHJcbiAgICBjYXNlICdOdW1wYWQzJzogcmV0dXJuICczJ1xyXG4gICAgY2FzZSAnTnVtcGFkNCc6IHJldHVybiAnNCdcclxuICAgIGNhc2UgJ051bXBhZDUnOiByZXR1cm4gJzUnXHJcbiAgICBjYXNlICdOdW1wYWQ2JzogcmV0dXJuICc2J1xyXG4gICAgY2FzZSAnTnVtcGFkNyc6IHJldHVybiAnNydcclxuICAgIGNhc2UgJ051bXBhZDgnOiByZXR1cm4gJzgnXHJcbiAgICBjYXNlICdOdW1wYWQ5JzogcmV0dXJuICc5J1xyXG4gICAgY2FzZSAnTnVtcGFkMCc6IHJldHVybiAnMCdcclxuICAgIGNhc2UgJ051bXBhZERlY2ltYWwnOiByZXR1cm4gJy4nXHJcbiAgICBjYXNlICdOdW1wYWRFbnRlcic6IHJldHVybiAnPSdcclxuICAgIGNhc2UgJ051bXBhZEFkZCc6IHJldHVybiAnKydcclxuICAgIGNhc2UgJ051bXBhZFN1YnRyYWN0JzogcmV0dXJuICctJ1xyXG4gICAgY2FzZSAnTnVtcGFkTXVsdGlwbHknOiByZXR1cm4gJyonXHJcbiAgICBjYXNlICdOdW1wYWREaXZpZGUnOiByZXR1cm4gJy8nXHJcblxyXG4gICAgY2FzZSAnRGlnaXQwJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyknXHJcbiAgICAgIHJldHVybiAnMCdcclxuICAgIGNhc2UgJ0RpZ2l0MSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICchJ1xyXG4gICAgICByZXR1cm4gJzEnXHJcbiAgICBjYXNlICdEaWdpdDInOiByZXR1cm4gJzInXHJcbiAgICBjYXNlICdEaWdpdDMnOiByZXR1cm4gJzMnXHJcbiAgICBjYXNlICdEaWdpdDQnOiByZXR1cm4gJzQnXHJcbiAgICBjYXNlICdEaWdpdDUnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnJSdcclxuICAgICAgcmV0dXJuICc1J1xyXG4gICAgY2FzZSAnRGlnaXQ2JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJ14nXHJcbiAgICAgIHJldHVybiAnNidcclxuICAgIGNhc2UgJ0RpZ2l0Nyc6IHJldHVybiAnNydcclxuICAgIGNhc2UgJ0RpZ2l0OCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcqJ1xyXG4gICAgICByZXR1cm4gJzgnXHJcbiAgICBjYXNlICdEaWdpdDknOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKCdcclxuICAgICAgcmV0dXJuICc5J1xyXG4gICAgY2FzZSAnTWludXMnOiByZXR1cm4gJy0nXHJcbiAgICBjYXNlICdFcXVhbCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcrJ1xyXG4gICAgY2FzZSAnRW50ZXInOiByZXR1cm4gJz0nXHJcbiAgICBjYXNlICdQZXJpb2QnOiByZXR1cm4gJy4nXHJcbiAgICBjYXNlICdTbGFzaCc6IHJldHVybiAnLydcclxuICAgIGNhc2UgJ0tleVMnOiByZXR1cm4gJ3NpbidcclxuICAgIGNhc2UgJ0tleUMnOiBpZiAoIWN0cmwpIHJldHVybiAnY29zJ1xyXG4gICAgICByZXR1cm5cclxuICAgIGNhc2UgJ0tleVQnOiByZXR1cm4gJ3RhbidcclxuICAgIGNhc2UgJ0tleVAnOiByZXR1cm4gJ3BpJ1xyXG4gICAgY2FzZSAnS2V5RSc6IHJldHVybiAnZSdcclxuICAgIGNhc2UgJ0tleUwnOiBpZiAoc2hpZnQpIHsgcmV0dXJuICdsb2cnIH0gZWxzZSByZXR1cm4gJ2xuJ1xyXG4gICAgY2FzZSAnS2V5TSc6IGlmIChzaGlmdCkgcmV0dXJuICdybSc7IHJldHVybiAnbSdcclxuICAgIGNhc2UgJ0tleVInOiByZXR1cm4gJ3JhbmQnXHJcbiAgICBjYXNlICdIb21lJzogcmV0dXJuICdjJ1xyXG4gICAgZGVmYXVsdDogcmV0dXJuICdub25lJ1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=