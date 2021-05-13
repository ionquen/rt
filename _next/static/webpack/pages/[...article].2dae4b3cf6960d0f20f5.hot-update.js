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
    inputCode(String(e.target.value));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbImJ1dHRvbnMiLCJjIiwibiIsImNvbG9yIiwiQ2FsYyIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN1bHQiLCJyZXN1bHRDaGFuZ2UiLCJ0cnVlUmVzdWx0IiwidHJ1ZVJlc3VsdENoYW5nZSIsImlucHV0IiwiaW5wdXRDaGFuZ2UiLCJoaXN0b3J5IiwiaGlzdG9yeUNoYW5nZSIsIm1lbW9yeSIsIm1lbW9yeUNoYW5nZSIsImFuaW1hdGVSZXN1bHQiLCJhbmltYXRlUmVzdWx0QyIsImJsb2NrIiwidXNlUmVmIiwicmVmIiwidXNlRWZmZWN0Iiwic3RvcmVIaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RvcmVNZW0iLCJjdXJyZW50IiwiZm9jdXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVzYyIsImVycm9yIiwicmVwbGFjZWRJbnB1dCIsInJlcGxhY2UiLCJtZXhwIiwiZXZhbCIsImUiLCJtZXNzYWdlIiwic2VhcmNoIiwicHJlc3NCdXR0b24iLCJjb2RlIiwic2hpZnQiLCJhbHQiLCJjdHJsIiwiaW5wdXRDb2RlIiwiZ2V0VHJ1ZUNvZGUiLCJoaXN0b3J5Q2xlYXIiLCJtZW1DbGVhciIsImNvcHlDb2RlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZm9jdXNJbnB1dCIsInBhc3RlSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIlN0cmluZyIsInVuZGVmaW5lZCIsInIiLCJkIiwiRGF0ZSIsIm5vdyIsInNsaWNlIiwicSIsInBvczEiLCJzZWxlY3Rpb25TdGFydCIsInBvczIiLCJzZWxlY3Rpb25FbmQiLCJnZXRSc3QiLCJpbnNlcnQiLCJuZXdJbnB1dCIsIm5ld1BvcyIsInNldFRpbWVvdXQiLCJzIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwiY2FsYyIsImFuaW0iLCJtYXAiLCJidXR0b24iLCJ3aGl0ZSIsImVxdWFsbHkiLCJ0IiwicmlnaHQiLCJjbGVhciIsIm9iaiIsImVtcHR5IiwiZW1wdHlIaXN0b3J5IiwiZW1wdHlNZW1vcnkiLCJzdHIxIiwic3RyMiIsInNlbGVjdGlvbiIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImJlZ2luU3RyMiIsImVuZFN0cjEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQUVDLEdBQUMsRUFBRSxJQUFMO0FBQVdDLEdBQUMsRUFBRTtBQUFkLENBRGMsRUFFZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQUZjLEVBR2Q7QUFBRUQsR0FBQyxFQUFFLEdBQUw7QUFBVUMsR0FBQyxFQUFFO0FBQWIsQ0FIYyxFQUlkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBSmMsRUFLZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUU7QUFBYixDQUxjLEVBTWQ7QUFBRUQsR0FBQyxFQUFFLElBQUw7QUFBV0MsR0FBQyxFQUFFO0FBQWQsQ0FOYyxFQU9kO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBUGMsRUFRZDtBQUFFRCxHQUFDLEVBQUUsS0FBTDtBQUFZQyxHQUFDLEVBQUU7QUFBZixDQVJjLEVBU2Q7QUFBRUQsR0FBQyxFQUFFLEtBQUw7QUFBWUMsR0FBQyxFQUFFO0FBQWYsQ0FUYyxFQVVkO0FBQUVELEdBQUMsRUFBRSxHQUFMO0FBQVVDLEdBQUMsRUFBRTtBQUFiLENBVmMsRUFXZDtBQUFFRCxHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUUsR0FBYjtBQUFrQkMsT0FBSyxFQUFFO0FBQXpCLENBWGMsRUFZZDtBQUFFRixHQUFDLEVBQUUsR0FBTDtBQUFVQyxHQUFDLEVBQUUsR0FBYjtBQUFrQkMsT0FB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RixTQUFLLFFBQUw7QUFBZSxhQUFPLEdBQVA7O0FBQ2YsU0FBSyxRQUFMO0FBQ0UsVUFBSUEsS0FBSixFQUFXLE9BQU8sR0FBUDtBQUNYLGFBQU8sR0FBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxVQUFJQSxLQUFKLEVBQVcsT0FBTyxHQUFQO0FBQ1gsYUFBTyxHQUFQOztBQUNGLFNBQUssT0FBTDtBQUFjLGFBQU8sR0FBUDs7QUFDZCxTQUFLLE9BQUw7QUFDRSxVQUFJQSxLQUFKLEVBQVcsT0FBTyxHQUFQOztBQUNiLFNBQUssT0FBTDtBQUFjLGFBQU8sR0FBUDs7QUFDZCxTQUFLLFFBQUw7QUFBZSxhQUFPLEdBQVA7O0FBQ2YsU0FBSyxPQUFMO0FBQWMsYUFBTyxHQUFQOztBQUNkLFNBQUssTUFBTDtBQUFhLGFBQU8sS0FBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxVQUFJLENBQUNFLElBQUwsRUFBVyxPQUFPLEtBQVA7QUFDdEI7O0FBQ0YsU0FBSyxNQUFMO0FBQWEsYUFBTyxLQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLGFBQU8sSUFBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxhQUFPLEdBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsVUFBSUYsS0FBSixFQUFXO0FBQUUsZUFBTyxLQUFQO0FBQWMsT0FBM0IsTUFBaUMsT0FBTyxJQUFQOztBQUM5QyxTQUFLLE1BQUw7QUFBYSxVQUFJQSxLQUFKLEVBQVcsT0FBTyxJQUFQO0FBQWEsYUFBTyxHQUFQOztBQUNyQyxTQUFLLE1BQUw7QUFBYSxhQUFPLE1BQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsYUFBTyxHQUFQOztBQUNiO0FBQVMsYUFBTyxNQUFQO0FBMURYO0FBNEREIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS4yZGFlNGIzY2Y2OTYwZDBmMjBmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy9jYWxjLnN0eWwnXHJcbmltcG9ydCBtZXhwIGZyb20gJ21hdGgtZXhwcmVzc2lvbi1ldmFsdWF0b3InXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcbmNvbnN0IGJ1dHRvbnMgPSBbXHJcbiAgeyBjOiBcImxuXCIsIG46IFwibG5cIiB9LFxyXG4gIHsgYzogXCIoXCIsIG46IFwiKFwiIH0sXHJcbiAgeyBjOiBcIilcIiwgbjogXCIpXCIgfSxcclxuICB7IGM6IFwiY1wiLCBuOiBcIkNcIiB9LFxyXG4gIHsgYzogXCJtXCIsIG46IFwiTVwiIH0sXHJcbiAgeyBjOiBcIi0tXCIsIG46IFwi4oaQXCIgfSxcclxuICB7IGM6IFwiJVwiLCBuOiBcIiVcIiB9LFxyXG4gIHsgYzogXCJsb2dcIiwgbjogXCJsb2dcIiB9LFxyXG4gIHsgYzogXCJ0YW5cIiwgbjogXCJ0Z1wiIH0sXHJcbiAgeyBjOiBcIl5cIiwgbjogXCJeXCIgfSxcclxuICB7IGM6IFwiN1wiLCBuOiBcIjdcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiOFwiLCBuOiBcIjhcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiOVwiLCBuOiBcIjlcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiL1wiLCBuOiBcIi9cIiB9LFxyXG4gIHsgYzogXCJlXCIsIG46IFwiZVwiIH0sXHJcbiAgeyBjOiBcImNvc1wiLCBuOiBcImNvc1wiIH0sXHJcbiAgeyBjOiBcInNxcnRcIiwgbjogXCLiiJpcIiB9LFxyXG4gIHsgYzogXCI0XCIsIG46IFwiNFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCI1XCIsIG46IFwiNVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCI2XCIsIG46IFwiNlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gIHsgYzogXCIqXCIsIG46IFwiKlwiIH0sXHJcbiAgeyBjOiBcInBpXCIsIG46IFwiz4BcIiB9LFxyXG4gIHsgYzogXCJzaW5cIiwgbjogXCJzaW5cIiB9LFxyXG4gIHsgYzogXCIhXCIsIG46IFwiIVwiIH0sXHJcbiAgeyBjOiBcIjFcIiwgbjogXCIxXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjJcIiwgbjogXCIyXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIjNcIiwgbjogXCIzXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgeyBjOiBcIi1cIiwgbjogXCItXCIgfSxcclxuICB7fSxcclxuICB7IGM6IFwicm1cIiwgbjogXCJSTVwiIH0sXHJcbiAgeyBjOiBcInJhbmRcIiwgbjogXCJyYW5kXCIgfSxcclxuICB7IGM6IFwiLlwiLCBuOiBcIi5cIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiMFwiLCBuOiBcIjBcIiwgY29sb3I6IHRydWUgfSxcclxuICB7IGM6IFwiPVwiLCBuOiBcIj1cIiwgY29sb3I6IGZhbHNlIH0sXHJcbiAgeyBjOiBcIitcIiwgbjogXCIrXCIgfSxcclxuXVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHJlc3VsdENoYW5nZV0gPSB1c2VTdGF0ZSgnJykvL9CS0YvQstC+0LTQuNGC0YHRjyDQsiDRgNC10LfRg9C70YzRgtCw0YLQtVxyXG4gIGNvbnN0IFt0cnVlUmVzdWx0LCB0cnVlUmVzdWx0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKS8v0J/QvtGB0LvQtdC00L3QtdC1INGD0YHQv9C10YjQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQtdGB0LvQuCDQv9Cw0YDRgdC10YAg0L3QtSDQv9C+0L3QuNC80LDQtdGCXHJcbiAgY29uc3QgW2lucHV0LCBpbnB1dENoYW5nZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaGlzdG9yeSwgaGlzdG9yeUNoYW5nZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbWVtb3J5LCBtZW1vcnlDaGFuZ2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2FuaW1hdGVSZXN1bHQsIGFuaW1hdGVSZXN1bHRDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZUhpcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYWxjSGlzdG9yeScpXHJcbiAgICBpZiAoc3RvcmVIaXMgIT09IG51bGwpIGhpc3RvcnlDaGFuZ2UoSlNPTi5wYXJzZShzdG9yZUhpcykpXHJcbiAgICBjb25zdCBzdG9yZU1lbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYWxjTWVtJylcclxuICAgIGlmIChzdG9yZU1lbSAhPT0gbnVsbCkgbWVtb3J5Q2hhbmdlKEpTT04ucGFyc2Uoc3RvcmVNZW0pKVxyXG4gICAgcmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY01lbScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpXHJcbiAgfSwgW21lbW9yeV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjSGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKVxyXG4gIH0sIFtoaXN0b3J5XSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IHByb3BzLmRlc2MuZXJyb3JcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2VkSW5wdXQgPSBpbnB1dFxyXG4gICAgICAgIC5yZXBsYWNlKC9cXCUvZ20sICcqMC4wMSonKS8vYWRkZWQgcGVyY2VudFxyXG4gICAgICAgIC5yZXBsYWNlKC9bXi8qXisoLV17MX0oPz1sb2d8bG58c2lufGNvc3x0YW4pL2dtLCAnJCYqJykvL2ZpeGVkIG1lbW9yeSBsZWFrXHJcbiAgICAgIHJlc3VsdCA9IG1leHAuZXZhbChyZXBsYWNlZElucHV0KVxyXG4gICAgICB0cnVlUmVzdWx0Q2hhbmdlKHJlc3VsdClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUubWVzc2FnZSA9PT0gJykgaXMgbm90IGFsbG93ZWQgYWZ0ZXIgKCcpIHtcclxuICAgICAgICByZXN1bHQgPSBcIlwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnNlYXJjaCgvKFxcK3xcXC18XFwqfFxcL3xcXCV8XFxeKSQvKSAhPT0gLTEpIHJlc3VsdCA9IHRydWVSZXN1bHRcclxuICAgICAgICBpZiAoaW5wdXQgPT09ICcnKSByZXN1bHQgPSAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHRDaGFuZ2UocmVzdWx0KVxyXG4gIH0sIFtpbnB1dF0pXHJcblxyXG4gIGZ1bmN0aW9uIHByZXNzQnV0dG9uKGNvZGUsIHNoaWZ0ID0gZmFsc2UsIGFsdCA9IGZhbHNlLCBjdHJsID0gZmFsc2UpIHsgYWx0ID8gbnVsbCA6IGlucHV0Q29kZShnZXRUcnVlQ29kZShjb2RlLCBzaGlmdCwgY3RybCkpIH1cclxuICBmdW5jdGlvbiBoaXN0b3J5Q2xlYXIoKSB7IGhpc3RvcnlDaGFuZ2UoW10pIH1cclxuICBmdW5jdGlvbiBtZW1DbGVhcigpIHsgbWVtb3J5Q2hhbmdlKFtdKSB9XHJcbiAgZnVuY3Rpb24gY29weUNvZGUoKSB7IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGAke3Jlc3VsdH1gKSB9XHJcbiAgZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHsgcmVmLmN1cnJlbnQuZm9jdXMoKSB9XHJcbiAgZnVuY3Rpb24gcGFzdGVJbnB1dChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoIC0gMSA9PT0gaW5wdXQubGVuZ3RoKSByZXR1cm4gZmFsc2VcclxuICAgIGlucHV0Q29kZShTdHJpbmcoZS50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuICBjb25zdCBpbnB1dENvZGUgPSAoY29kZSkgPT4ge1xyXG4gICAgaWYgKGNvZGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICBpZiAoY29kZSA9PT0gJ25vbmUnKSByZXR1cm5cclxuICAgIGlmIChjb2RlID09PSAnbScpIHtcclxuICAgICAgaWYgKHRydWVSZXN1bHQgPT09ICcnKSByZXR1cm5cclxuICAgICAgbWVtb3J5Q2hhbmdlKFt7IHI6IHRydWVSZXN1bHQsIGQ6IERhdGUubm93KCkgfSwgLi4ubWVtb3J5LnNsaWNlKDAsIDkpXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJz0nKSB7XHJcbiAgICAgIGFuaW1hdGVSZXN1bHRDKHRydWUpXHJcbiAgICAgIGlmIChoaXN0b3J5WzBdID09PSB1bmRlZmluZWQgfHwgaW5wdXQgIT09ICcnICYmIGlucHV0ICE9PSBoaXN0b3J5WzBdLnEgJiYgdHJ1ZVJlc3VsdCAhPT0gaGlzdG9yeVswXS5yKSBoaXN0b3J5Q2hhbmdlKFt7IHE6IGlucHV0LCByOiB0cnVlUmVzdWx0LCBkOiBEYXRlLm5vdygpIH0sIC4uLmhpc3Rvcnkuc2xpY2UoMCwgOSldKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAncm0nICYmIG1lbW9yeVswXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaW5wdXRDb2RlKFN0cmluZyhtZW1vcnlbMF0ucikpXHJcblxyXG4gICAgY29uc3QgcG9zMSA9IHJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0XHJcbiAgICBjb25zdCBwb3MyID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kXHJcbiAgICBmdW5jdGlvbiBnZXRSc3QoKSB7XHJcbiAgICAgIGlmIChhbmltYXRlUmVzdWx0KSB7XHJcbiAgICAgICAgcmVzdWx0Q2hhbmdlKCcnKVxyXG4gICAgICAgIGFuaW1hdGVSZXN1bHRDKGZhbHNlKVxyXG4gICAgICAgIHJldHVybiBpbnNlcnQoU3RyaW5nKGNvZGUpLCBTdHJpbmcodHJ1ZVJlc3VsdCksIHBvczEsIHBvczIpXHJcbiAgICAgIH0gcmV0dXJuIGluc2VydChTdHJpbmcoY29kZSksIGlucHV0LCBwb3MxLCBwb3MyKVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBuZXdJbnB1dCwgbmV3UG9zIH0gPSBnZXRSc3QoKVxyXG4gICAgaW5wdXRDaGFuZ2UobmV3SW5wdXQpXHJcbiAgICBmb2N1c0lucHV0KClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydCA9IHJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZCA9IG5ld1Bvc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdiByZWY9e2Jsb2NrfSBjbGFzc05hbWU9e3MuYmxvY2t9IHRhYkluZGV4PXstMX0gb25DbGljaz17Zm9jdXNJbnB1dH0gb25LZXlEb3duPXtlID0+IHByZXNzQnV0dG9uKGUuY29kZSwgZS5zaGlmdEtleSwgZS5hbHRLZXksIGUuY3RybEtleSl9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2FsY30gPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthbmltYXRlUmVzdWx0ID8gcy5hbmltIDogJyd9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWZ9IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e3Bhc3RlSW5wdXR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17Y29weUNvZGV9PntyZXN1bHR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtidXR0b25zLm1hcChidXR0b24gPT4gPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbi5jb2xvciA9PT0gdW5kZWZpbmVkID8gJycgOiBidXR0b24uY29sb3IgPyBzLndoaXRlIDogcy5lcXVhbGx5fSBrZXk9e2J1dHRvbi5jfSBkYXRhLXRvb2x0aXA9e2J1dHRvbi50fSBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoYnV0dG9uLmMpfT57YnV0dG9uLm59PC9idXR0b24+KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5yaWdodH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oaXN0b3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGlzdG9yeUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7aGlzdG9yeS5tYXAob2JqID0+XHJcbiAgICAgICAgICA8ZGl2IGtleT17b2JqLmR9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGlucHV0Q2hhbmdlKFN0cmluZyhvYmoucSkpfT57b2JqLnF9PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPiA9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhoaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eUhpc3Rvcnl9PC9kaXY+IDogbnVsbCl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubWVtb3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bWVtQ2xlYXJ9Pntwcm9wcy5kZXNjLmNsZWFyfTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHttZW1vcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhtZW1vcnkubGVuZ3RoID09PSAwID8gPGRpdiBjbGFzc05hbWU9e3MuZW1wdHl9Pntwcm9wcy5kZXNjLmVtcHR5TWVtb3J5fTwvZGl2PiA6IG51bGwpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5cclxuLy/QmNC30LzQtdC90LXQvdC40LUg0YHRgtGA0L7QutC4INCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQutC+0LTQsFxyXG5mdW5jdGlvbiBpbnNlcnQoY29kZSwgaW5wdXQsIHBvczEsIHBvczIpIHtcclxuICBsZXQgc3RyMSA9IGlucHV0LnNsaWNlKDAsIHBvczEpXHJcbiAgbGV0IHN0cjIgPSBpbnB1dC5zbGljZShwb3MyKVxyXG4gIGxldCBzZWxlY3Rpb24gPSBpbnB1dC5zbGljZShwb3MxLCBwb3MyKVxyXG4gIGxldCBuZXdQb3MgPSBwb3MxXHJcblxyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSAnKyc6XHJcbiAgICBjYXNlICctJzpcclxuICAgIGNhc2UgJyonOlxyXG4gICAgY2FzZSAnLyc6XHJcbiAgICBjYXNlICclJzpcclxuICAgIGNhc2UgJ14nOlxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlXHJcbiAgICAgIGlmIChzdHIxLnNlYXJjaCgvKFxcK3xcXC18XFwqfFxcL3xcXCV8XFxeKSQvKSAhPT0gLTEpIHsgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpIH0gZWxzZSBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnMCc6XHJcbiAgICBjYXNlICcxJzpcclxuICAgIGNhc2UgJzInOlxyXG4gICAgY2FzZSAnMyc6XHJcbiAgICBjYXNlICc0JzpcclxuICAgIGNhc2UgJzUnOlxyXG4gICAgY2FzZSAnNic6XHJcbiAgICBjYXNlICc3JzpcclxuICAgIGNhc2UgJzgnOlxyXG4gICAgY2FzZSAnOSc6XHJcbiAgICBjYXNlICdlJzpcclxuICAgIGNhc2UgJyEnOlxyXG4gICAgY2FzZSAnLic6IHNlbGVjdGlvbiA9IGNvZGU7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdzcXJ0Jzogc2VsZWN0aW9uID0gXCJeKDEvKVwiOyBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnY29zJzpcclxuICAgIGNhc2UgJ3Npbic6XHJcbiAgICBjYXNlICd0YW4nOlxyXG4gICAgICBpZiAocG9zMSAhPT0gcG9zMikgbmV3UG9zICs9IHNlbGVjdGlvbi5sZW5ndGggKyAxXHJcbiAgICAgIHNlbGVjdGlvbiA9IGNvZGUgKyBgKCR7c2VsZWN0aW9ufSlgXHJcbiAgICAgIG5ld1BvcyArPSA0XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdjJzogcmV0dXJuIHsgbmV3SW5wdXQ6ICcnLCBuZXdQb3M6IDAgfVxyXG4gICAgY2FzZSAncmFuZCc6IHNlbGVjdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkgLyAxMDAwMDA7IG5ld1BvcyA9ICs3XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcoJzogc2VsZWN0aW9uID0gYCgke3NlbGVjdGlvbn0pYDsgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJyknOiBzZWxlY3Rpb24gPSAnKSc7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICctLSc6XHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgYmVnaW5TdHIyID0gc3RyMi5zbGljZSgwLCAxKVxyXG4gICAgICAgIGNvbnN0IGVuZFN0cjEgPSBzdHIxLnNsaWNlKC0yKVxyXG4gICAgICAgIGlmIChlbmRTdHIxID09PSAnaW4nIHx8IGVuZFN0cjEgPT09ICdvcycgfHwgZW5kU3RyMSA9PT0gJ29nJyB8fCBlbmRTdHIxID09PSAnYW4nKSB7XHJcbiAgICAgICAgICBzdHIxID0gc3RyMS5zbGljZSgwLCAtMylcclxuICAgICAgICAgIG5ld1BvcyA9IG5ld1BvcyAtIDJcclxuICAgICAgICB9IGVsc2UgaWYgKGVuZFN0cjFbMV0gPT09ICcoJyAmJiBiZWdpblN0cjIgPT09ICcpJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpXHJcbiAgICAgICAgICBzdHIyID0gc3RyMi5zbGljZSgxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5kU3RyMSA9PT0gJ2xuJyB8fCBlbmRTdHIxID09PSAncGknKSB7XHJcbiAgICAgICAgICBzdHIxID0gc3RyMS5zbGljZSgwLCAtMilcclxuICAgICAgICAgIG5ld1Bvcy0tXHJcbiAgICAgICAgfSBlbHNlIHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKTsgaWYgKHBvczEgIT09IDApIG5ld1Bvcy0tXHJcbiAgICAgIH0gZWxzZSBzZWxlY3Rpb24gPSAnJ1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnZGVsZXRlJzpcclxuICAgICAgaWYgKHBvczEgPT09IHBvczIpIHtcclxuICAgICAgICBjb25zdCBiZWdpblN0cjIgPSBzdHIyLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgaWYgKGJlZ2luU3RyMiA9PT0gJ3NpJyB8fCBiZWdpblN0cjIgPT09ICdjbycgfHwgYmVnaW5TdHIyID09PSAndGEnIHx8IGJlZ2luU3RyMiA9PT0gJ2xvJykge1xyXG4gICAgICAgICAgc3RyMiA9IHN0cjIuc2xpY2UoMylcclxuICAgICAgICB9IGVsc2UgaWYgKGJlZ2luU3RyMiA9PT0gJ2xuJyB8fCBiZWdpblN0cjIgPT09ICdwaScpIHtcclxuICAgICAgICAgIHN0cjIgPSBzdHIyLnNsaWNlKDIpXHJcbiAgICAgICAgfSBlbHNlIHN0cjIgPSBzdHIyLnNsaWNlKDEpXHJcbiAgICAgIH0gZWxzZSBzZWxlY3Rpb24gPSAnJ1xyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDogc2VsZWN0aW9uID0gY29kZTsgbmV3UG9zICs9IGNvZGUubGVuZ3RoXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0lucHV0ID0gc3RyMSArIHNlbGVjdGlvbiArIHN0cjJcclxuICByZXR1cm4geyBuZXdJbnB1dCwgbmV3UG9zIH1cclxufVxyXG5cclxuLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LrQvtC00LAg0L/QviDQtNC10LnRgdGC0LLQuNGOXHJcbmZ1bmN0aW9uIGdldFRydWVDb2RlKGNvZGUsIHNoaWZ0LCBjdHJsKSB7XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlICdCYWNrc3BhY2UnOiByZXR1cm4gJy0tJ1xyXG4gICAgY2FzZSAnRGVsZXRlJzogcmV0dXJuICdkZWxldGUnXHJcbiAgICBjYXNlICdOdW1wYWQxJzogcmV0dXJuICcxJ1xyXG4gICAgY2FzZSAnTnVtcGFkMic6IHJldHVybiAnMidcclxuICAgIGNhc2UgJ051bXBhZDMnOiByZXR1cm4gJzMnXHJcbiAgICBjYXNlICdOdW1wYWQ0JzogcmV0dXJuICc0J1xyXG4gICAgY2FzZSAnTnVtcGFkNSc6IHJldHVybiAnNSdcclxuICAgIGNhc2UgJ051bXBhZDYnOiByZXR1cm4gJzYnXHJcbiAgICBjYXNlICdOdW1wYWQ3JzogcmV0dXJuICc3J1xyXG4gICAgY2FzZSAnTnVtcGFkOCc6IHJldHVybiAnOCdcclxuICAgIGNhc2UgJ051bXBhZDknOiByZXR1cm4gJzknXHJcbiAgICBjYXNlICdOdW1wYWQwJzogcmV0dXJuICcwJ1xyXG4gICAgY2FzZSAnTnVtcGFkRGVjaW1hbCc6IHJldHVybiAnLidcclxuICAgIGNhc2UgJ051bXBhZEVudGVyJzogcmV0dXJuICc9J1xyXG4gICAgY2FzZSAnTnVtcGFkQWRkJzogcmV0dXJuICcrJ1xyXG4gICAgY2FzZSAnTnVtcGFkU3VidHJhY3QnOiByZXR1cm4gJy0nXHJcbiAgICBjYXNlICdOdW1wYWRNdWx0aXBseSc6IHJldHVybiAnKidcclxuICAgIGNhc2UgJ051bXBhZERpdmlkZSc6IHJldHVybiAnLydcclxuXHJcbiAgICBjYXNlICdEaWdpdDAnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKSdcclxuICAgICAgcmV0dXJuICcwJ1xyXG4gICAgY2FzZSAnRGlnaXQxJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyEnXHJcbiAgICAgIHJldHVybiAnMSdcclxuICAgIGNhc2UgJ0RpZ2l0Mic6IHJldHVybiAnMidcclxuICAgIGNhc2UgJ0RpZ2l0Myc6IHJldHVybiAnMydcclxuICAgIGNhc2UgJ0RpZ2l0NCc6IHJldHVybiAnNCdcclxuICAgIGNhc2UgJ0RpZ2l0NSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICclJ1xyXG4gICAgICByZXR1cm4gJzUnXHJcbiAgICBjYXNlICdEaWdpdDYnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnXidcclxuICAgICAgcmV0dXJuICc2J1xyXG4gICAgY2FzZSAnRGlnaXQ3JzogcmV0dXJuICc3J1xyXG4gICAgY2FzZSAnRGlnaXQ4JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyonXHJcbiAgICAgIHJldHVybiAnOCdcclxuICAgIGNhc2UgJ0RpZ2l0OSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcoJ1xyXG4gICAgICByZXR1cm4gJzknXHJcbiAgICBjYXNlICdNaW51cyc6IHJldHVybiAnLSdcclxuICAgIGNhc2UgJ0VxdWFsJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJysnXHJcbiAgICBjYXNlICdFbnRlcic6IHJldHVybiAnPSdcclxuICAgIGNhc2UgJ1BlcmlvZCc6IHJldHVybiAnLidcclxuICAgIGNhc2UgJ1NsYXNoJzogcmV0dXJuICcvJ1xyXG4gICAgY2FzZSAnS2V5Uyc6IHJldHVybiAnc2luJ1xyXG4gICAgY2FzZSAnS2V5Qyc6IGlmICghY3RybCkgcmV0dXJuICdjb3MnXHJcbiAgICAgIHJldHVyblxyXG4gICAgY2FzZSAnS2V5VCc6IHJldHVybiAndGFuJ1xyXG4gICAgY2FzZSAnS2V5UCc6IHJldHVybiAncGknXHJcbiAgICBjYXNlICdLZXlFJzogcmV0dXJuICdlJ1xyXG4gICAgY2FzZSAnS2V5TCc6IGlmIChzaGlmdCkgeyByZXR1cm4gJ2xvZycgfSBlbHNlIHJldHVybiAnbG4nXHJcbiAgICBjYXNlICdLZXlNJzogaWYgKHNoaWZ0KSByZXR1cm4gJ3JtJzsgcmV0dXJuICdtJ1xyXG4gICAgY2FzZSAnS2V5Uic6IHJldHVybiAncmFuZCdcclxuICAgIGNhc2UgJ0hvbWUnOiByZXR1cm4gJ2MnXHJcbiAgICBkZWZhdWx0OiByZXR1cm4gJ25vbmUnXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==