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
              lineNumber: 137,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: copyCode,
            children: result
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
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
              lineNumber: 142,
              columnNumber: 34
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
        elem: block.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.history
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: historyClear,
          children: props.desc.clear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
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
              lineNumber: 155,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: " = "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return inputCode(String(obj.r));
              },
              children: obj.r
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 13
            }, _this)]
          }, obj.d, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 11
          }, _this);
        }), history.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
          children: props.desc.emptyHistory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 34
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.memory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: memClear,
          children: props.desc.clear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
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
              lineNumber: 171,
              columnNumber: 13
            }, _this)
          }, obj.d, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 11
          }, _this);
        }), memory.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
          children: props.desc.emptyMemory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbIkNhbGMiLCJwcm9wcyIsInVzZVN0YXRlIiwicmVzdWx0IiwicmVzdWx0Q2hhbmdlIiwidHJ1ZVJlc3VsdCIsInRydWVSZXN1bHRDaGFuZ2UiLCJpbnB1dCIsImlucHV0Q2hhbmdlIiwiaGlzdG9yeSIsImhpc3RvcnlDaGFuZ2UiLCJtZW1vcnkiLCJtZW1vcnlDaGFuZ2UiLCJhbmltYXRlUmVzdWx0IiwiYW5pbWF0ZVJlc3VsdEMiLCJibG9jayIsInVzZVJlZiIsInJlZiIsInVzZUVmZmVjdCIsInN0b3JlSGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlTWVtIiwiY3VycmVudCIsImZvY3VzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRlc2MiLCJlcnJvciIsInJlcGxhY2VkSW5wdXQiLCJyZXBsYWNlIiwibWV4cCIsImV2YWwiLCJlIiwibWVzc2FnZSIsInNlYXJjaCIsInByZXNzQnV0dG9uIiwiY29kZSIsInNoaWZ0IiwiYWx0IiwiY3RybCIsImlucHV0Q29kZSIsImdldFRydWVDb2RlIiwiaGlzdG9yeUNsZWFyIiwibWVtQ2xlYXIiLCJ1bmRlZmluZWQiLCJyIiwiZCIsIkRhdGUiLCJub3ciLCJzbGljZSIsInEiLCJTdHJpbmciLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJyZWFkVGV4dCIsInRoZW4iLCJ0ZXh0IiwicG9zMSIsInNlbGVjdGlvblN0YXJ0IiwicG9zMiIsInNlbGVjdGlvbkVuZCIsImdldFJzdCIsImluc2VydCIsIm5ld0lucHV0IiwibmV3UG9zIiwic2V0VGltZW91dCIsImJ1dHRvbnMiLCJjIiwibiIsImNvbG9yIiwiY29weUNvZGUiLCJ3cml0ZVRleHQiLCJmb2N1c0lucHV0IiwicyIsInNoaWZ0S2V5IiwiYWx0S2V5IiwiY3RybEtleSIsImNhbGMiLCJhbmltIiwibWFwIiwiYnV0dG9uIiwid2hpdGUiLCJlcXVhbGx5IiwidCIsInJpZ2h0IiwiY2xlYXIiLCJvYmoiLCJsZW5ndGgiLCJlbXB0eSIsImVtcHR5SGlzdG9yeSIsImVtcHR5TWVtb3J5Iiwic3RyMSIsInN0cjIiLCJzZWxlY3Rpb24iLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJiZWdpblN0cjIiLCJlbmRTdHIxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQy9CQyxNQUQrQjtBQUFBLE1BQ3ZCQyxZQUR1QixpQkFDSzs7O0FBREwsbUJBRUNGLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFL0JHLFVBRitCO0FBQUEsTUFFbkJDLGdCQUZtQixrQkFFYTs7O0FBRmIsbUJBR1RKLHNEQUFRLENBQUMsRUFBRCxDQUhDO0FBQUEsTUFHL0JLLEtBSCtCO0FBQUEsTUFHeEJDLFdBSHdCOztBQUFBLG1CQUlMTixzREFBUSxDQUFDLEVBQUQsQ0FKSDtBQUFBLE1BSS9CTyxPQUorQjtBQUFBLE1BSXRCQyxhQUpzQjs7QUFBQSxtQkFLUFIsc0RBQVEsQ0FBQyxFQUFELENBTEQ7QUFBQSxNQUsvQlMsTUFMK0I7QUFBQSxNQUt2QkMsWUFMdUI7O0FBQUEsbUJBTUVWLHNEQUFRLENBQUMsS0FBRCxDQU5WO0FBQUEsTUFNL0JXLGFBTitCO0FBQUEsTUFNaEJDLGNBTmdCOztBQVF0QyxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0FFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQWpCO0FBQ0EsUUFBSUYsUUFB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QUFQO0FBNURYO0FBOEREIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS4yNTZjZTE5OTMxNzdiY2UwNDg2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy9jYWxjLnN0eWwnXHJcbmltcG9ydCBtZXhwIGZyb20gJ21hdGgtZXhwcmVzc2lvbi1ldmFsdWF0b3InXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHJlc3VsdENoYW5nZV0gPSB1c2VTdGF0ZSgnJykvL9CS0YvQstC+0LTQuNGC0YHRjyDQsiDRgNC10LfRg9C70YzRgtCw0YLQtVxyXG4gIGNvbnN0IFt0cnVlUmVzdWx0LCB0cnVlUmVzdWx0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKS8v0J/QvtGB0LvQtdC00L3QtdC1INGD0YHQv9C10YjQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQtdGB0LvQuCDQv9Cw0YDRgdC10YAg0L3QtSDQv9C+0L3QuNC80LDQtdGCXHJcbiAgY29uc3QgW2lucHV0LCBpbnB1dENoYW5nZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaGlzdG9yeSwgaGlzdG9yeUNoYW5nZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbWVtb3J5LCBtZW1vcnlDaGFuZ2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2FuaW1hdGVSZXN1bHQsIGFuaW1hdGVSZXN1bHRDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZUhpcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYWxjSGlzdG9yeScpXHJcbiAgICBpZiAoc3RvcmVIaXMgIT09IG51bGwpIGhpc3RvcnlDaGFuZ2UoSlNPTi5wYXJzZShzdG9yZUhpcykpXHJcbiAgICBjb25zdCBzdG9yZU1lbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYWxjTWVtJylcclxuICAgIGlmIChzdG9yZU1lbSAhPT0gbnVsbCkgbWVtb3J5Q2hhbmdlKEpTT04ucGFyc2Uoc3RvcmVNZW0pKVxyXG4gICAgcmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY01lbScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpXHJcbiAgfSwgW21lbW9yeV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjSGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKVxyXG4gIH0sIFtoaXN0b3J5XSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IHByb3BzLmRlc2MuZXJyb3JcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2VkSW5wdXQgPSBpbnB1dFxyXG4gICAgICAgIC5yZXBsYWNlKC9cXCUvZ20sICcqMC4wMSonKS8vYWRkZWQgcGVyY2VudFxyXG4gICAgICAgIC5yZXBsYWNlKC9bXi8qXisoLV17MX0oPz1sb2d8bG58c2lufGNvc3x0YW4pL2dtLCAnJCYqJykvL2ZpeGVkIG1lbW9yeSBsZWFrXHJcbiAgICAgIHJlc3VsdCA9IG1leHAuZXZhbChyZXBsYWNlZElucHV0KVxyXG4gICAgICB0cnVlUmVzdWx0Q2hhbmdlKHJlc3VsdClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUubWVzc2FnZSA9PT0gJykgaXMgbm90IGFsbG93ZWQgYWZ0ZXIgKCcpIHtcclxuICAgICAgICByZXN1bHQgPSBcIlwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnNlYXJjaCgvKFxcK3xcXC18XFwqfFxcL3xcXCV8XFxeKSQvKSAhPT0gLTEpIHJlc3VsdCA9IHRydWVSZXN1bHRcclxuICAgICAgICBpZiAoaW5wdXQgPT09ICcnKSByZXN1bHQgPSAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHRDaGFuZ2UocmVzdWx0KVxyXG4gIH0sIFtpbnB1dF0pXHJcblxyXG4gIGNvbnN0IHByZXNzQnV0dG9uID0gKGNvZGUsIHNoaWZ0ID0gZmFsc2UsIGFsdCA9IGZhbHNlLCBjdHJsID0gZmFsc2UpID0+IGFsdCA/IG51bGwgOiBpbnB1dENvZGUoZ2V0VHJ1ZUNvZGUoY29kZSwgc2hpZnQsIGN0cmwpKVxyXG4gIGNvbnN0IGhpc3RvcnlDbGVhciA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjSGlzdG9yeScsICcnKVxyXG4gICAgaGlzdG9yeUNoYW5nZShbXSlcclxuICB9XHJcbiAgY29uc3QgbWVtQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY01lbScsICcnKVxyXG4gICAgbWVtb3J5Q2hhbmdlKFtdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5wdXRDb2RlID0gKGNvZGUpID0+IHtcclxuICAgIGlmIChjb2RlID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgaWYgKGNvZGUgPT09ICdub25lJykgcmV0dXJuXHJcbiAgICBpZiAoY29kZSA9PT0gJ20nKSB7XHJcbiAgICAgIGlmICh0cnVlUmVzdWx0ID09PSAnJykgcmV0dXJuXHJcbiAgICAgIG1lbW9yeUNoYW5nZShbeyByOiB0cnVlUmVzdWx0LCBkOiBEYXRlLm5vdygpIH0sIC4uLm1lbW9yeS5zbGljZSgwLCA5KV0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICc9Jykge1xyXG4gICAgICBhbmltYXRlUmVzdWx0Qyh0cnVlKVxyXG4gICAgICBpZiAoaGlzdG9yeVswXSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0ICE9PSAnJyAmJiBpbnB1dCAhPT0gaGlzdG9yeVswXS5xICYmIHRydWVSZXN1bHQgIT09IGhpc3RvcnlbMF0ucikgaGlzdG9yeUNoYW5nZShbeyBxOiBpbnB1dCwgcjogdHJ1ZVJlc3VsdCwgZDogRGF0ZS5ub3coKSB9LCAuLi5oaXN0b3J5LnNsaWNlKDAsIDkpXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJ3JtJyAmJiBtZW1vcnlbMF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0Q29kZShTdHJpbmcobWVtb3J5WzBdLnIpKVxyXG4gICAgaWYgKGNvZGUgPT09ICdjdHJsdicpIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgaW5wdXRDb2RlKFN0cmluZyh0ZXh0KSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcG9zMSA9IHJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0XHJcbiAgICBjb25zdCBwb3MyID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kXHJcbiAgICBmdW5jdGlvbiBnZXRSc3QoKSB7XHJcbiAgICAgIGlmIChhbmltYXRlUmVzdWx0KSB7XHJcbiAgICAgICAgcmVzdWx0Q2hhbmdlKCcnKVxyXG4gICAgICAgIGFuaW1hdGVSZXN1bHRDKGZhbHNlKVxyXG4gICAgICAgIHJldHVybiBpbnNlcnQoU3RyaW5nKGNvZGUpLCBTdHJpbmcodHJ1ZVJlc3VsdCksIHBvczEsIHBvczIpXHJcbiAgICAgIH0gcmV0dXJuIGluc2VydChTdHJpbmcoY29kZSksIGlucHV0LCBwb3MxLCBwb3MyKVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBuZXdJbnB1dCwgbmV3UG9zIH0gPSBnZXRSc3QoKVxyXG4gICAgaW5wdXRDaGFuZ2UobmV3SW5wdXQpXHJcbiAgICByZWYuY3VycmVudC5mb2N1cygpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnQgPSByZWYuY3VycmVudC5zZWxlY3Rpb25FbmQgPSBuZXdQb3NcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gW1xyXG4gICAgeyBjOiBcImxuXCIsIG46IFwibG5cIiB9LFxyXG4gICAgeyBjOiBcIihcIiwgbjogXCIoXCIgfSxcclxuICAgIHsgYzogXCIpXCIsIG46IFwiKVwiIH0sXHJcbiAgICB7IGM6IFwiY1wiLCBuOiBcIkNcIiB9LFxyXG4gICAgeyBjOiBcIm1cIiwgbjogXCJNXCIgfSxcclxuICAgIHsgYzogXCItLVwiLCBuOiBcIuKGkFwiIH0sXHJcbiAgICB7IGM6IFwiJVwiLCBuOiBcIiVcIiB9LFxyXG4gICAgeyBjOiBcImxvZ1wiLCBuOiBcImxvZ1wiIH0sXHJcbiAgICB7IGM6IFwidGFuXCIsIG46IFwidGdcIiB9LFxyXG4gICAgeyBjOiBcIl5cIiwgbjogXCJeXCIgfSxcclxuICAgIHsgYzogXCI3XCIsIG46IFwiN1wiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjhcIiwgbjogXCI4XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiOVwiLCBuOiBcIjlcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIvXCIsIG46IFwiL1wiIH0sXHJcbiAgICB7IGM6IFwiZVwiLCBuOiBcImVcIiB9LFxyXG4gICAgeyBjOiBcImNvc1wiLCBuOiBcImNvc1wiIH0sXHJcbiAgICB7IGM6IFwic3FydFwiLCBuOiBcIuKImlwiIH0sXHJcbiAgICB7IGM6IFwiNFwiLCBuOiBcIjRcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI1XCIsIG46IFwiNVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjZcIiwgbjogXCI2XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiKlwiLCBuOiBcIipcIiB9LFxyXG4gICAgeyBjOiBcInBpXCIsIG46IFwiz4BcIiB9LFxyXG4gICAgeyBjOiBcInNpblwiLCBuOiBcInNpblwiIH0sXHJcbiAgICB7IGM6IFwiIVwiLCBuOiBcIiFcIiB9LFxyXG4gICAgeyBjOiBcIjFcIiwgbjogXCIxXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiMlwiLCBuOiBcIjJcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIzXCIsIG46IFwiM1wiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIi1cIiwgbjogXCItXCIgfSxcclxuICAgIHt9LFxyXG4gICAgeyBjOiBcInJtXCIsIG46IFwiUk1cIiB9LFxyXG4gICAgeyBjOiBcInJhbmRcIiwgbjogXCJyYW5kXCIgfSxcclxuICAgIHsgYzogXCIuXCIsIG46IFwiLlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjBcIiwgbjogXCIwXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiPVwiLCBuOiBcIj1cIiwgY29sb3I6IGZhbHNlIH0sXHJcbiAgICB7IGM6IFwiK1wiLCBuOiBcIitcIiB9LFxyXG4gIF1cclxuICBmdW5jdGlvbiBjb3B5Q29kZSgpIHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYCR7cmVzdWx0fWApIH1cclxuICBmdW5jdGlvbiBmb2N1c0lucHV0KCkgeyByZWYuY3VycmVudC5mb2N1cygpIH1cclxuICByZXR1cm4gPGRpdiByZWY9e2Jsb2NrfSBjbGFzc05hbWU9e3MuYmxvY2t9IHRhYkluZGV4PXstMX0gb25DbGljaz17Zm9jdXNJbnB1dH0gb25LZXlEb3duPXtlID0+IHByZXNzQnV0dG9uKGUuY29kZSwgZS5zaGlmdEtleSwgZS5hbHRLZXksIGUuY3RybEtleSl9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2FsY30gPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthbmltYXRlUmVzdWx0ID8gcy5hbmltIDogJyd9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWZ9IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9eygpID0+IGZhbHNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NvcHlDb2RlfT57cmVzdWx0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7YnV0dG9ucy5tYXAoYnV0dG9uID0+IDxidXR0b24gY2xhc3NOYW1lPXtidXR0b24uY29sb3IgPT09IHVuZGVmaW5lZCA/ICcnIDogYnV0dG9uLmNvbG9yID8gcy53aGl0ZSA6IHMuZXF1YWxseX0ga2V5PXtidXR0b24uY30gZGF0YS10b29sdGlwPXtidXR0b24udH0gb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKGJ1dHRvbi5jKX0+e2J1dHRvbi5ufTwvYnV0dG9uPil9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGlzdG9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hpc3RvcnlDbGVhcn0+e3Byb3BzLmRlc2MuY2xlYXJ9PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2hpc3RvcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENoYW5nZShTdHJpbmcob2JqLnEpKX0+e29iai5xfTwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj4gPSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsoaGlzdG9yeS5sZW5ndGggPT09IDAgPyA8ZGl2IGNsYXNzTmFtZT17cy5lbXB0eX0+e3Byb3BzLmRlc2MuZW1wdHlIaXN0b3J5fTwvZGl2PiA6IG51bGwpfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJpZ2h0fT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLm1lbW9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21lbUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bWVtb3J5Lm1hcChvYmogPT5cclxuICAgICAgICAgIDxkaXYga2V5PXtvYmouZH0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsobWVtb3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eU1lbW9yeX08L2Rpdj4gOiBudWxsKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbi8v0JjQt9C80LXQvdC10L3QuNC1INGB0YLRgNC+0LrQuCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LrQvtC00LBcclxuZnVuY3Rpb24gaW5zZXJ0KGNvZGUsIGlucHV0LCBwb3MxLCBwb3MyKSB7XHJcbiAgbGV0IHN0cjEgPSBpbnB1dC5zbGljZSgwLCBwb3MxKVxyXG4gIGxldCBzdHIyID0gaW5wdXQuc2xpY2UocG9zMilcclxuICBsZXQgc2VsZWN0aW9uID0gaW5wdXQuc2xpY2UocG9zMSwgcG9zMilcclxuICBsZXQgbmV3UG9zID0gcG9zMVxyXG5cclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgJysnOlxyXG4gICAgY2FzZSAnLSc6XHJcbiAgICBjYXNlICcqJzpcclxuICAgIGNhc2UgJy8nOlxyXG4gICAgY2FzZSAnJSc6XHJcbiAgICBjYXNlICdeJzpcclxuICAgICAgc2VsZWN0aW9uID0gY29kZVxyXG4gICAgICBpZiAoc3RyMS5zZWFyY2goLyhcXCt8XFwtfFxcKnxcXC98XFwlfFxcXikkLykgIT09IC0xKSB7IHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKSB9IGVsc2UgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJzAnOlxyXG4gICAgY2FzZSAnMSc6XHJcbiAgICBjYXNlICcyJzpcclxuICAgIGNhc2UgJzMnOlxyXG4gICAgY2FzZSAnNCc6XHJcbiAgICBjYXNlICc1JzpcclxuICAgIGNhc2UgJzYnOlxyXG4gICAgY2FzZSAnNyc6XHJcbiAgICBjYXNlICc4JzpcclxuICAgIGNhc2UgJzknOlxyXG4gICAgY2FzZSAnZSc6XHJcbiAgICBjYXNlICchJzpcclxuICAgIGNhc2UgJy4nOiBzZWxlY3Rpb24gPSBjb2RlOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnc3FydCc6IHNlbGVjdGlvbiA9IFwiXigxLylcIjsgbmV3UG9zICs9IDRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2Nvcyc6XHJcbiAgICBjYXNlICdzaW4nOlxyXG4gICAgY2FzZSAndGFuJzpcclxuICAgICAgaWYgKHBvczEgIT09IHBvczIpIG5ld1BvcyArPSBzZWxlY3Rpb24ubGVuZ3RoICsgMVxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlICsgYCgke3NlbGVjdGlvbn0pYFxyXG4gICAgICBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnYyc6IHJldHVybiB7IG5ld0lucHV0OiAnJywgbmV3UG9zOiAwIH1cclxuICAgIGNhc2UgJ3JhbmQnOiBzZWxlY3Rpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApIC8gMTAwMDAwOyBuZXdQb3MgPSArN1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnKCc6IHNlbGVjdGlvbiA9IGAoJHtzZWxlY3Rpb259KWA7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcpJzogc2VsZWN0aW9uID0gJyknOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnLS0nOlxyXG4gICAgICBpZiAocG9zMSA9PT0gcG9zMikge1xyXG4gICAgICAgIGNvbnN0IGJlZ2luU3RyMiA9IHN0cjIuc2xpY2UoMCwgMSlcclxuICAgICAgICBjb25zdCBlbmRTdHIxID0gc3RyMS5zbGljZSgtMilcclxuICAgICAgICBpZiAoZW5kU3RyMSA9PT0gJ2luJyB8fCBlbmRTdHIxID09PSAnb3MnIHx8IGVuZFN0cjEgPT09ICdvZycgfHwgZW5kU3RyMSA9PT0gJ2FuJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTMpXHJcbiAgICAgICAgICBuZXdQb3MgPSBuZXdQb3MgLSAyXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRTdHIxWzFdID09PSAnKCcgJiYgYmVnaW5TdHIyID09PSAnKScpIHtcclxuICAgICAgICAgIHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKVxyXG4gICAgICAgICAgc3RyMiA9IHN0cjIuc2xpY2UoMSlcclxuICAgICAgICB9IGVsc2UgaWYgKGVuZFN0cjEgPT09ICdsbicgfHwgZW5kU3RyMSA9PT0gJ3BpJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTIpXHJcbiAgICAgICAgICBuZXdQb3MtLVxyXG4gICAgICAgIH0gZWxzZSBzdHIxID0gc3RyMS5zbGljZSgwLCAtMSk7IGlmIChwb3MxICE9PSAwKSBuZXdQb3MtLVxyXG4gICAgICB9IGVsc2Ugc2VsZWN0aW9uID0gJydcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgYmVnaW5TdHIyID0gc3RyMi5zbGljZSgwLCAyKVxyXG4gICAgICAgIGlmIChiZWdpblN0cjIgPT09ICdzaScgfHwgYmVnaW5TdHIyID09PSAnY28nIHx8IGJlZ2luU3RyMiA9PT0gJ3RhJyB8fCBiZWdpblN0cjIgPT09ICdsbycpIHtcclxuICAgICAgICAgIHN0cjIgPSBzdHIyLnNsaWNlKDMpXHJcbiAgICAgICAgfSBlbHNlIGlmIChiZWdpblN0cjIgPT09ICdsbicgfHwgYmVnaW5TdHIyID09PSAncGknKSB7XHJcbiAgICAgICAgICBzdHIyID0gc3RyMi5zbGljZSgyKVxyXG4gICAgICAgIH0gZWxzZSBzdHIyID0gc3RyMi5zbGljZSgxKVxyXG4gICAgICB9IGVsc2Ugc2VsZWN0aW9uID0gJydcclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6IHNlbGVjdGlvbiA9IGNvZGU7IG5ld1BvcyArPSBjb2RlLmxlbmd0aFxyXG4gIH1cclxuICBjb25zdCBuZXdJbnB1dCA9IHN0cjEgKyBzZWxlY3Rpb24gKyBzdHIyXHJcbiAgcmV0dXJuIHsgbmV3SW5wdXQsIG5ld1BvcyB9XHJcbn1cclxuXHJcbi8v0J/QvtC70YPRh9C10L3QuNC1INC60L7QtNCwINC/0L4g0LTQtdC50YHRgtCy0LjRjlxyXG5mdW5jdGlvbiBnZXRUcnVlQ29kZShjb2RlLCBzaGlmdCwgY3RybCkge1xyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSAnQmFja3NwYWNlJzogcmV0dXJuICctLSdcclxuICAgIGNhc2UgJ0RlbGV0ZSc6IHJldHVybiAnZGVsZXRlJ1xyXG4gICAgY2FzZSAnTnVtcGFkMSc6IHJldHVybiAnMSdcclxuICAgIGNhc2UgJ051bXBhZDInOiByZXR1cm4gJzInXHJcbiAgICBjYXNlICdOdW1wYWQzJzogcmV0dXJuICczJ1xyXG4gICAgY2FzZSAnTnVtcGFkNCc6IHJldHVybiAnNCdcclxuICAgIGNhc2UgJ051bXBhZDUnOiByZXR1cm4gJzUnXHJcbiAgICBjYXNlICdOdW1wYWQ2JzogcmV0dXJuICc2J1xyXG4gICAgY2FzZSAnTnVtcGFkNyc6IHJldHVybiAnNydcclxuICAgIGNhc2UgJ051bXBhZDgnOiByZXR1cm4gJzgnXHJcbiAgICBjYXNlICdOdW1wYWQ5JzogcmV0dXJuICc5J1xyXG4gICAgY2FzZSAnTnVtcGFkMCc6IHJldHVybiAnMCdcclxuICAgIGNhc2UgJ051bXBhZERlY2ltYWwnOiByZXR1cm4gJy4nXHJcbiAgICBjYXNlICdOdW1wYWRFbnRlcic6IHJldHVybiAnPSdcclxuICAgIGNhc2UgJ051bXBhZEFkZCc6IHJldHVybiAnKydcclxuICAgIGNhc2UgJ051bXBhZFN1YnRyYWN0JzogcmV0dXJuICctJ1xyXG4gICAgY2FzZSAnTnVtcGFkTXVsdGlwbHknOiByZXR1cm4gJyonXHJcbiAgICBjYXNlICdOdW1wYWREaXZpZGUnOiByZXR1cm4gJy8nXHJcblxyXG4gICAgY2FzZSAnRGlnaXQwJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyknXHJcbiAgICAgIHJldHVybiAnMCdcclxuICAgIGNhc2UgJ0RpZ2l0MSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICchJ1xyXG4gICAgICByZXR1cm4gJzEnXHJcbiAgICBjYXNlICdEaWdpdDInOiByZXR1cm4gJzInXHJcbiAgICBjYXNlICdEaWdpdDMnOiByZXR1cm4gJzMnXHJcbiAgICBjYXNlICdEaWdpdDQnOiByZXR1cm4gJzQnXHJcbiAgICBjYXNlICdEaWdpdDUnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnJSdcclxuICAgICAgcmV0dXJuICc1J1xyXG4gICAgY2FzZSAnRGlnaXQ2JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJ14nXHJcbiAgICAgIHJldHVybiAnNidcclxuICAgIGNhc2UgJ0RpZ2l0Nyc6IHJldHVybiAnNydcclxuICAgIGNhc2UgJ0RpZ2l0OCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcqJ1xyXG4gICAgICByZXR1cm4gJzgnXHJcbiAgICBjYXNlICdEaWdpdDknOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKCdcclxuICAgICAgcmV0dXJuICc5J1xyXG4gICAgY2FzZSAnTWludXMnOiByZXR1cm4gJy0nXHJcbiAgICBjYXNlICdFcXVhbCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcrJ1xyXG4gICAgY2FzZSAnRW50ZXInOiByZXR1cm4gJz0nXHJcbiAgICBjYXNlICdQZXJpb2QnOiByZXR1cm4gJy4nXHJcbiAgICBjYXNlICdTbGFzaCc6IHJldHVybiAnLydcclxuICAgIGNhc2UgJ0tleVMnOiByZXR1cm4gJ3NpbidcclxuICAgIGNhc2UgJ0tleUMnOiBpZiAoIWN0cmwpIHJldHVybiAnY29zJ1xyXG4gICAgICByZXR1cm5cclxuICAgIGNhc2UgJ0tleVQnOiByZXR1cm4gJ3RhbidcclxuICAgIGNhc2UgJ0tleVAnOiByZXR1cm4gJ3BpJ1xyXG4gICAgY2FzZSAnS2V5RSc6IHJldHVybiAnZSdcclxuICAgIGNhc2UgJ0tleUwnOiBpZiAoc2hpZnQpIHsgcmV0dXJuICdsb2cnIH0gZWxzZSByZXR1cm4gJ2xuJ1xyXG4gICAgY2FzZSAnS2V5Vic6IGlmIChjdHJsKSByZXR1cm4gJ2N0cmx2J1xyXG4gICAgICByZXR1cm5cclxuICAgIGNhc2UgJ0tleU0nOiBpZiAoc2hpZnQpIHJldHVybiAncm0nOyByZXR1cm4gJ20nXHJcbiAgICBjYXNlICdLZXlSJzogcmV0dXJuICdyYW5kJ1xyXG4gICAgY2FzZSAnSG9tZSc6IHJldHVybiAnYydcclxuICAgIGRlZmF1bHQ6IHJldHVybiAnbm9uZSdcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9