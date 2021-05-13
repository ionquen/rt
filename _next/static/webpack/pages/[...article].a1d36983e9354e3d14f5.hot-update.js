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
    /*if (code === 'ctrlv') return navigator.clipboard.readText().then(text => {
      inputCode(String(text))
    })*/

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

  function pasteInput(e) {
    if (e.target.value.length - 1 === input.length) return false;
    inputCode(String(e.target.value));
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
              onChange: pasteInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: copyCode,
            children: result
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
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
              lineNumber: 146,
              columnNumber: 34
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
        elem: block.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.history
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: historyClear,
          children: props.desc.clear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
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
              lineNumber: 159,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: " = "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return inputCode(String(obj.r));
              },
              children: obj.r
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 13
            }, _this)]
          }, obj.d, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 11
          }, _this);
        }), history.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
          children: props.desc.emptyHistory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 34
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.memory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: memClear,
          children: props.desc.clear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
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
              lineNumber: 175,
              columnNumber: 13
            }, _this)
          }, obj.d, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 11
          }, _this);
        }), memory.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_tools_calc_styl__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
          children: props.desc.emptyMemory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 33
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbIkNhbGMiLCJwcm9wcyIsInVzZVN0YXRlIiwicmVzdWx0IiwicmVzdWx0Q2hhbmdlIiwidHJ1ZVJlc3VsdCIsInRydWVSZXN1bHRDaGFuZ2UiLCJpbnB1dCIsImlucHV0Q2hhbmdlIiwiaGlzdG9yeSIsImhpc3RvcnlDaGFuZ2UiLCJtZW1vcnkiLCJtZW1vcnlDaGFuZ2UiLCJhbmltYXRlUmVzdWx0IiwiYW5pbWF0ZVJlc3VsdEMiLCJibG9jayIsInVzZVJlZiIsInJlZiIsInVzZUVmZmVjdCIsInN0b3JlSGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlTWVtIiwiY3VycmVudCIsImZvY3VzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRlc2MiLCJlcnJvciIsInJlcGxhY2VkSW5wdXQiLCJyZXBsYWNlIiwibWV4cCIsImV2YWwiLCJlIiwibWVzc2FnZSIsInNlYXJjaCIsInByZXNzQnV0dG9uIiwiY29kZSIsInNoaWZ0IiwiYWx0IiwiY3RybCIsImlucHV0Q29kZSIsImdldFRydWVDb2RlIiwiaGlzdG9yeUNsZWFyIiwibWVtQ2xlYXIiLCJ1bmRlZmluZWQiLCJyIiwiZCIsIkRhdGUiLCJub3ciLCJzbGljZSIsInEiLCJTdHJpbmciLCJwb3MxIiwic2VsZWN0aW9uU3RhcnQiLCJwb3MyIiwic2VsZWN0aW9uRW5kIiwiZ2V0UnN0IiwiaW5zZXJ0IiwibmV3SW5wdXQiLCJuZXdQb3MiLCJzZXRUaW1lb3V0IiwiYnV0dG9ucyIsImMiLCJuIiwiY29sb3IiLCJjb3B5Q29kZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImZvY3VzSW5wdXQiLCJwYXN0ZUlucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJzIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwiY2FsYyIsImFuaW0iLCJtYXAiLCJidXR0b24iLCJ3aGl0ZSIsImVxdWFsbHkiLCJ0IiwicmlnaHQiLCJjbGVhciIsIm9iaiIsImVtcHR5IiwiZW1wdHlIaXN0b3J5IiwiZW1wdHlNZW1vcnkiLCJzdHIxIiwic3RyMiIsInNlbGVjdGlvbiIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImJlZ2luU3RyMiIsImVuZFN0cjEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsRUFBRCxDQUREO0FBQUEsTUFDL0JDLE1BRCtCO0FBQUEsTUFDdkJDLFlBRHVCLGlCQUNLOzs7QUFETCxtQkFFQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUUvQkcsVUFGK0I7QUFBQSxNQUVuQkMsZ0JBRm1CLGtCQUVhOzs7QUFGYixtQkFHVEosc0RBQVEsQ0FBQyxFQUFELENBSEM7QUFBQSxNQUcvQkssS0FIK0I7QUFBQSxNQUd4QkMsV0FId0I7O0FBQUEsbUJBSUxOLHNEQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJL0JPLE9BSitCO0FBQUEsTUFJdEJDLGFBSnNCOztBQUFBLG1CQUtQUixzREFBUSxDQUFDLEVBQUQsQ0FMRDtBQUFBLE1BSy9CUyxNQUwrQjtBQUFBLE1BS3ZCQyxZQUx1Qjs7QUFBQSxtQkFNRVYsc0RBQVEsQ0FBQyxLQUFELENBTlY7QUFBQSxNQU0vQlcsYUFOK0I7QUFBQSxNQU1oQkMsY0FOZ0I7O0FBUXRDLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBakI7QUFDQSxRQUFJ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LGFBQU8sTUFBUDtBQTFEWDtBQTRERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uYTFkMzY5ODNlOTM1NGUzZDE0ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvY2FsYy5zdHlsJ1xyXG5pbXBvcnQgbWV4cCBmcm9tICdtYXRoLWV4cHJlc3Npb24tZXZhbHVhdG9yJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsYyh7IHByb3BzIH0pIHtcclxuICBjb25zdCBbcmVzdWx0LCByZXN1bHRDaGFuZ2VdID0gdXNlU3RhdGUoJycpLy/QktGL0LLQvtC00LjRgtGB0Y8g0LIg0YDQtdC30YPQu9GM0YLQsNGC0LVcclxuICBjb25zdCBbdHJ1ZVJlc3VsdCwgdHJ1ZVJlc3VsdENoYW5nZV0gPSB1c2VTdGF0ZSgnJykvL9Cf0L7RgdC70LXQtNC90LXQtSDRg9GB0L/QtdGI0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0LXRgdC70Lgg0L/QsNGA0YHQtdGAINC90LUg0L/QvtC90LjQvNCw0LXRglxyXG4gIGNvbnN0IFtpbnB1dCwgaW5wdXRDaGFuZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2hpc3RvcnksIGhpc3RvcnlDaGFuZ2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21lbW9yeSwgbWVtb3J5Q2hhbmdlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthbmltYXRlUmVzdWx0LCBhbmltYXRlUmVzdWx0Q10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVIaXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsY0hpc3RvcnknKVxyXG4gICAgaWYgKHN0b3JlSGlzICE9PSBudWxsKSBoaXN0b3J5Q2hhbmdlKEpTT04ucGFyc2Uoc3RvcmVIaXMpKVxyXG4gICAgY29uc3Qgc3RvcmVNZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsY01lbScpXHJcbiAgICBpZiAoc3RvcmVNZW0gIT09IG51bGwpIG1lbW9yeUNoYW5nZShKU09OLnBhcnNlKHN0b3JlTWVtKSlcclxuICAgIHJlZi5jdXJyZW50LmZvY3VzKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNNZW0nLCBKU09OLnN0cmluZ2lmeShtZW1vcnkpKVxyXG4gIH0sIFttZW1vcnldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY0hpc3RvcnknLCBKU09OLnN0cmluZ2lmeShoaXN0b3J5KSlcclxuICB9LCBbaGlzdG9yeV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBwcm9wcy5kZXNjLmVycm9yXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXBsYWNlZElucHV0ID0gaW5wdXRcclxuICAgICAgICAucmVwbGFjZSgvXFwlL2dtLCAnKjAuMDEqJykvL2FkZGVkIHBlcmNlbnRcclxuICAgICAgICAucmVwbGFjZSgvW14vKl4rKC1dezF9KD89bG9nfGxufHNpbnxjb3N8dGFuKS9nbSwgJyQmKicpLy9maXhlZCBtZW1vcnkgbGVha1xyXG4gICAgICByZXN1bHQgPSBtZXhwLmV2YWwocmVwbGFjZWRJbnB1dClcclxuICAgICAgdHJ1ZVJlc3VsdENoYW5nZShyZXN1bHQpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlLm1lc3NhZ2UgPT09ICcpIGlzIG5vdCBhbGxvd2VkIGFmdGVyICgnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpbnB1dC5zZWFyY2goLyhcXCt8XFwtfFxcKnxcXC98XFwlfFxcXikkLykgIT09IC0xKSByZXN1bHQgPSB0cnVlUmVzdWx0XHJcbiAgICAgICAgaWYgKGlucHV0ID09PSAnJykgcmVzdWx0ID0gJydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0Q2hhbmdlKHJlc3VsdClcclxuICB9LCBbaW5wdXRdKVxyXG5cclxuICBjb25zdCBwcmVzc0J1dHRvbiA9IChjb2RlLCBzaGlmdCA9IGZhbHNlLCBhbHQgPSBmYWxzZSwgY3RybCA9IGZhbHNlKSA9PiBhbHQgPyBudWxsIDogaW5wdXRDb2RlKGdldFRydWVDb2RlKGNvZGUsIHNoaWZ0LCBjdHJsKSlcclxuICBjb25zdCBoaXN0b3J5Q2xlYXIgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY0hpc3RvcnknLCAnJylcclxuICAgIGhpc3RvcnlDaGFuZ2UoW10pXHJcbiAgfVxyXG4gIGNvbnN0IG1lbUNsZWFyID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNNZW0nLCAnJylcclxuICAgIG1lbW9yeUNoYW5nZShbXSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGlucHV0Q29kZSA9IChjb2RlKSA9PiB7XHJcbiAgICBpZiAoY29kZSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgIGlmIChjb2RlID09PSAnbm9uZScpIHJldHVyblxyXG4gICAgaWYgKGNvZGUgPT09ICdtJykge1xyXG4gICAgICBpZiAodHJ1ZVJlc3VsdCA9PT0gJycpIHJldHVyblxyXG4gICAgICBtZW1vcnlDaGFuZ2UoW3sgcjogdHJ1ZVJlc3VsdCwgZDogRGF0ZS5ub3coKSB9LCAuLi5tZW1vcnkuc2xpY2UoMCwgOSldKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAnPScpIHtcclxuICAgICAgYW5pbWF0ZVJlc3VsdEModHJ1ZSlcclxuICAgICAgaWYgKGhpc3RvcnlbMF0gPT09IHVuZGVmaW5lZCB8fCBpbnB1dCAhPT0gJycgJiYgaW5wdXQgIT09IGhpc3RvcnlbMF0ucSAmJiB0cnVlUmVzdWx0ICE9PSBoaXN0b3J5WzBdLnIpIGhpc3RvcnlDaGFuZ2UoW3sgcTogaW5wdXQsIHI6IHRydWVSZXN1bHQsIGQ6IERhdGUubm93KCkgfSwgLi4uaGlzdG9yeS5zbGljZSgwLCA5KV0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICdybScgJiYgbWVtb3J5WzBdICE9PSB1bmRlZmluZWQpIHJldHVybiBpbnB1dENvZGUoU3RyaW5nKG1lbW9yeVswXS5yKSlcclxuICAgIC8qaWYgKGNvZGUgPT09ICdjdHJsdicpIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbih0ZXh0ID0+IHtcclxuICAgICAgaW5wdXRDb2RlKFN0cmluZyh0ZXh0KSlcclxuICAgIH0pKi9cclxuXHJcbiAgICBjb25zdCBwb3MxID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnRcclxuICAgIGNvbnN0IHBvczIgPSByZWYuY3VycmVudC5zZWxlY3Rpb25FbmRcclxuICAgIGZ1bmN0aW9uIGdldFJzdCgpIHtcclxuICAgICAgaWYgKGFuaW1hdGVSZXN1bHQpIHtcclxuICAgICAgICByZXN1bHRDaGFuZ2UoJycpXHJcbiAgICAgICAgYW5pbWF0ZVJlc3VsdEMoZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuIGluc2VydChTdHJpbmcoY29kZSksIFN0cmluZyh0cnVlUmVzdWx0KSwgcG9zMSwgcG9zMilcclxuICAgICAgfSByZXR1cm4gaW5zZXJ0KFN0cmluZyhjb2RlKSwgaW5wdXQsIHBvczEsIHBvczIpXHJcbiAgICB9XHJcbiAgICBjb25zdCB7IG5ld0lucHV0LCBuZXdQb3MgfSA9IGdldFJzdCgpXHJcbiAgICBpbnB1dENoYW5nZShuZXdJbnB1dClcclxuICAgIHJlZi5jdXJyZW50LmZvY3VzKClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydCA9IHJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZCA9IG5ld1Bvc1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBbXHJcbiAgICB7IGM6IFwibG5cIiwgbjogXCJsblwiIH0sXHJcbiAgICB7IGM6IFwiKFwiLCBuOiBcIihcIiB9LFxyXG4gICAgeyBjOiBcIilcIiwgbjogXCIpXCIgfSxcclxuICAgIHsgYzogXCJjXCIsIG46IFwiQ1wiIH0sXHJcbiAgICB7IGM6IFwibVwiLCBuOiBcIk1cIiB9LFxyXG4gICAgeyBjOiBcIi0tXCIsIG46IFwi4oaQXCIgfSxcclxuICAgIHsgYzogXCIlXCIsIG46IFwiJVwiIH0sXHJcbiAgICB7IGM6IFwibG9nXCIsIG46IFwibG9nXCIgfSxcclxuICAgIHsgYzogXCJ0YW5cIiwgbjogXCJ0Z1wiIH0sXHJcbiAgICB7IGM6IFwiXlwiLCBuOiBcIl5cIiB9LFxyXG4gICAgeyBjOiBcIjdcIiwgbjogXCI3XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiOFwiLCBuOiBcIjhcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI5XCIsIG46IFwiOVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIi9cIiwgbjogXCIvXCIgfSxcclxuICAgIHsgYzogXCJlXCIsIG46IFwiZVwiIH0sXHJcbiAgICB7IGM6IFwiY29zXCIsIG46IFwiY29zXCIgfSxcclxuICAgIHsgYzogXCJzcXJ0XCIsIG46IFwi4oiaXCIgfSxcclxuICAgIHsgYzogXCI0XCIsIG46IFwiNFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjVcIiwgbjogXCI1XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiNlwiLCBuOiBcIjZcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIqXCIsIG46IFwiKlwiIH0sXHJcbiAgICB7IGM6IFwicGlcIiwgbjogXCLPgFwiIH0sXHJcbiAgICB7IGM6IFwic2luXCIsIG46IFwic2luXCIgfSxcclxuICAgIHsgYzogXCIhXCIsIG46IFwiIVwiIH0sXHJcbiAgICB7IGM6IFwiMVwiLCBuOiBcIjFcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIyXCIsIG46IFwiMlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjNcIiwgbjogXCIzXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiLVwiLCBuOiBcIi1cIiB9LFxyXG4gICAge30sXHJcbiAgICB7IGM6IFwicm1cIiwgbjogXCJSTVwiIH0sXHJcbiAgICB7IGM6IFwicmFuZFwiLCBuOiBcInJhbmRcIiB9LFxyXG4gICAgeyBjOiBcIi5cIiwgbjogXCIuXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiMFwiLCBuOiBcIjBcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI9XCIsIG46IFwiPVwiLCBjb2xvcjogZmFsc2UgfSxcclxuICAgIHsgYzogXCIrXCIsIG46IFwiK1wiIH0sXHJcbiAgXVxyXG4gIGZ1bmN0aW9uIGNvcHlDb2RlKCkgeyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChgJHtyZXN1bHR9YCkgfVxyXG4gIGZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7IHJlZi5jdXJyZW50LmZvY3VzKCkgfVxyXG4gIGZ1bmN0aW9uIHBhc3RlSW5wdXQoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCAtIDEgPT09IGlucHV0Lmxlbmd0aCkgcmV0dXJuIGZhbHNlXHJcbiAgICBpbnB1dENvZGUoU3RyaW5nKGUudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtibG9ja30gY2xhc3NOYW1lPXtzLmJsb2NrfSB0YWJJbmRleD17LTF9IG9uQ2xpY2s9e2ZvY3VzSW5wdXR9IG9uS2V5RG93bj17ZSA9PiBwcmVzc0J1dHRvbihlLmNvZGUsIGUuc2hpZnRLZXksIGUuYWx0S2V5LCBlLmN0cmxLZXkpfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhbGN9ID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YW5pbWF0ZVJlc3VsdCA/IHMuYW5pbSA6ICcnfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17cmVmfSB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtwYXN0ZUlucHV0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NvcHlDb2RlfT57cmVzdWx0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7YnV0dG9ucy5tYXAoYnV0dG9uID0+IDxidXR0b24gY2xhc3NOYW1lPXtidXR0b24uY29sb3IgPT09IHVuZGVmaW5lZCA/ICcnIDogYnV0dG9uLmNvbG9yID8gcy53aGl0ZSA6IHMuZXF1YWxseX0ga2V5PXtidXR0b24uY30gZGF0YS10b29sdGlwPXtidXR0b24udH0gb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKGJ1dHRvbi5jKX0+e2J1dHRvbi5ufTwvYnV0dG9uPil9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGlzdG9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hpc3RvcnlDbGVhcn0+e3Byb3BzLmRlc2MuY2xlYXJ9PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2hpc3RvcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENoYW5nZShTdHJpbmcob2JqLnEpKX0+e29iai5xfTwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj4gPSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsoaGlzdG9yeS5sZW5ndGggPT09IDAgPyA8ZGl2IGNsYXNzTmFtZT17cy5lbXB0eX0+e3Byb3BzLmRlc2MuZW1wdHlIaXN0b3J5fTwvZGl2PiA6IG51bGwpfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJpZ2h0fT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLm1lbW9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21lbUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bWVtb3J5Lm1hcChvYmogPT5cclxuICAgICAgICAgIDxkaXYga2V5PXtvYmouZH0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsobWVtb3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eU1lbW9yeX08L2Rpdj4gOiBudWxsKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbi8v0JjQt9C80LXQvdC10L3QuNC1INGB0YLRgNC+0LrQuCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LrQvtC00LBcclxuZnVuY3Rpb24gaW5zZXJ0KGNvZGUsIGlucHV0LCBwb3MxLCBwb3MyKSB7XHJcbiAgbGV0IHN0cjEgPSBpbnB1dC5zbGljZSgwLCBwb3MxKVxyXG4gIGxldCBzdHIyID0gaW5wdXQuc2xpY2UocG9zMilcclxuICBsZXQgc2VsZWN0aW9uID0gaW5wdXQuc2xpY2UocG9zMSwgcG9zMilcclxuICBsZXQgbmV3UG9zID0gcG9zMVxyXG5cclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgJysnOlxyXG4gICAgY2FzZSAnLSc6XHJcbiAgICBjYXNlICcqJzpcclxuICAgIGNhc2UgJy8nOlxyXG4gICAgY2FzZSAnJSc6XHJcbiAgICBjYXNlICdeJzpcclxuICAgICAgc2VsZWN0aW9uID0gY29kZVxyXG4gICAgICBpZiAoc3RyMS5zZWFyY2goLyhcXCt8XFwtfFxcKnxcXC98XFwlfFxcXikkLykgIT09IC0xKSB7IHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKSB9IGVsc2UgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJzAnOlxyXG4gICAgY2FzZSAnMSc6XHJcbiAgICBjYXNlICcyJzpcclxuICAgIGNhc2UgJzMnOlxyXG4gICAgY2FzZSAnNCc6XHJcbiAgICBjYXNlICc1JzpcclxuICAgIGNhc2UgJzYnOlxyXG4gICAgY2FzZSAnNyc6XHJcbiAgICBjYXNlICc4JzpcclxuICAgIGNhc2UgJzknOlxyXG4gICAgY2FzZSAnZSc6XHJcbiAgICBjYXNlICchJzpcclxuICAgIGNhc2UgJy4nOiBzZWxlY3Rpb24gPSBjb2RlOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnc3FydCc6IHNlbGVjdGlvbiA9IFwiXigxLylcIjsgbmV3UG9zICs9IDRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2Nvcyc6XHJcbiAgICBjYXNlICdzaW4nOlxyXG4gICAgY2FzZSAndGFuJzpcclxuICAgICAgaWYgKHBvczEgIT09IHBvczIpIG5ld1BvcyArPSBzZWxlY3Rpb24ubGVuZ3RoICsgMVxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlICsgYCgke3NlbGVjdGlvbn0pYFxyXG4gICAgICBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnYyc6IHJldHVybiB7IG5ld0lucHV0OiAnJywgbmV3UG9zOiAwIH1cclxuICAgIGNhc2UgJ3JhbmQnOiBzZWxlY3Rpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApIC8gMTAwMDAwOyBuZXdQb3MgPSArN1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnKCc6IHNlbGVjdGlvbiA9IGAoJHtzZWxlY3Rpb259KWA7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcpJzogc2VsZWN0aW9uID0gJyknOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnLS0nOlxyXG4gICAgICBpZiAocG9zMSA9PT0gcG9zMikge1xyXG4gICAgICAgIGNvbnN0IGJlZ2luU3RyMiA9IHN0cjIuc2xpY2UoMCwgMSlcclxuICAgICAgICBjb25zdCBlbmRTdHIxID0gc3RyMS5zbGljZSgtMilcclxuICAgICAgICBpZiAoZW5kU3RyMSA9PT0gJ2luJyB8fCBlbmRTdHIxID09PSAnb3MnIHx8IGVuZFN0cjEgPT09ICdvZycgfHwgZW5kU3RyMSA9PT0gJ2FuJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTMpXHJcbiAgICAgICAgICBuZXdQb3MgPSBuZXdQb3MgLSAyXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmRTdHIxWzFdID09PSAnKCcgJiYgYmVnaW5TdHIyID09PSAnKScpIHtcclxuICAgICAgICAgIHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKVxyXG4gICAgICAgICAgc3RyMiA9IHN0cjIuc2xpY2UoMSlcclxuICAgICAgICB9IGVsc2UgaWYgKGVuZFN0cjEgPT09ICdsbicgfHwgZW5kU3RyMSA9PT0gJ3BpJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTIpXHJcbiAgICAgICAgICBuZXdQb3MtLVxyXG4gICAgICAgIH0gZWxzZSBzdHIxID0gc3RyMS5zbGljZSgwLCAtMSk7IGlmIChwb3MxICE9PSAwKSBuZXdQb3MtLVxyXG4gICAgICB9IGVsc2Ugc2VsZWN0aW9uID0gJydcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgYmVnaW5TdHIyID0gc3RyMi5zbGljZSgwLCAyKVxyXG4gICAgICAgIGlmIChiZWdpblN0cjIgPT09ICdzaScgfHwgYmVnaW5TdHIyID09PSAnY28nIHx8IGJlZ2luU3RyMiA9PT0gJ3RhJyB8fCBiZWdpblN0cjIgPT09ICdsbycpIHtcclxuICAgICAgICAgIHN0cjIgPSBzdHIyLnNsaWNlKDMpXHJcbiAgICAgICAgfSBlbHNlIGlmIChiZWdpblN0cjIgPT09ICdsbicgfHwgYmVnaW5TdHIyID09PSAncGknKSB7XHJcbiAgICAgICAgICBzdHIyID0gc3RyMi5zbGljZSgyKVxyXG4gICAgICAgIH0gZWxzZSBzdHIyID0gc3RyMi5zbGljZSgxKVxyXG4gICAgICB9IGVsc2Ugc2VsZWN0aW9uID0gJydcclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6IHNlbGVjdGlvbiA9IGNvZGU7IG5ld1BvcyArPSBjb2RlLmxlbmd0aFxyXG4gIH1cclxuICBjb25zdCBuZXdJbnB1dCA9IHN0cjEgKyBzZWxlY3Rpb24gKyBzdHIyXHJcbiAgcmV0dXJuIHsgbmV3SW5wdXQsIG5ld1BvcyB9XHJcbn1cclxuXHJcbi8v0J/QvtC70YPRh9C10L3QuNC1INC60L7QtNCwINC/0L4g0LTQtdC50YHRgtCy0LjRjlxyXG5mdW5jdGlvbiBnZXRUcnVlQ29kZShjb2RlLCBzaGlmdCwgY3RybCkge1xyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSAnQmFja3NwYWNlJzogcmV0dXJuICctLSdcclxuICAgIGNhc2UgJ0RlbGV0ZSc6IHJldHVybiAnZGVsZXRlJ1xyXG4gICAgY2FzZSAnTnVtcGFkMSc6IHJldHVybiAnMSdcclxuICAgIGNhc2UgJ051bXBhZDInOiByZXR1cm4gJzInXHJcbiAgICBjYXNlICdOdW1wYWQzJzogcmV0dXJuICczJ1xyXG4gICAgY2FzZSAnTnVtcGFkNCc6IHJldHVybiAnNCdcclxuICAgIGNhc2UgJ051bXBhZDUnOiByZXR1cm4gJzUnXHJcbiAgICBjYXNlICdOdW1wYWQ2JzogcmV0dXJuICc2J1xyXG4gICAgY2FzZSAnTnVtcGFkNyc6IHJldHVybiAnNydcclxuICAgIGNhc2UgJ051bXBhZDgnOiByZXR1cm4gJzgnXHJcbiAgICBjYXNlICdOdW1wYWQ5JzogcmV0dXJuICc5J1xyXG4gICAgY2FzZSAnTnVtcGFkMCc6IHJldHVybiAnMCdcclxuICAgIGNhc2UgJ051bXBhZERlY2ltYWwnOiByZXR1cm4gJy4nXHJcbiAgICBjYXNlICdOdW1wYWRFbnRlcic6IHJldHVybiAnPSdcclxuICAgIGNhc2UgJ051bXBhZEFkZCc6IHJldHVybiAnKydcclxuICAgIGNhc2UgJ051bXBhZFN1YnRyYWN0JzogcmV0dXJuICctJ1xyXG4gICAgY2FzZSAnTnVtcGFkTXVsdGlwbHknOiByZXR1cm4gJyonXHJcbiAgICBjYXNlICdOdW1wYWREaXZpZGUnOiByZXR1cm4gJy8nXHJcblxyXG4gICAgY2FzZSAnRGlnaXQwJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyknXHJcbiAgICAgIHJldHVybiAnMCdcclxuICAgIGNhc2UgJ0RpZ2l0MSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICchJ1xyXG4gICAgICByZXR1cm4gJzEnXHJcbiAgICBjYXNlICdEaWdpdDInOiByZXR1cm4gJzInXHJcbiAgICBjYXNlICdEaWdpdDMnOiByZXR1cm4gJzMnXHJcbiAgICBjYXNlICdEaWdpdDQnOiByZXR1cm4gJzQnXHJcbiAgICBjYXNlICdEaWdpdDUnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnJSdcclxuICAgICAgcmV0dXJuICc1J1xyXG4gICAgY2FzZSAnRGlnaXQ2JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJ14nXHJcbiAgICAgIHJldHVybiAnNidcclxuICAgIGNhc2UgJ0RpZ2l0Nyc6IHJldHVybiAnNydcclxuICAgIGNhc2UgJ0RpZ2l0OCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcqJ1xyXG4gICAgICByZXR1cm4gJzgnXHJcbiAgICBjYXNlICdEaWdpdDknOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKCdcclxuICAgICAgcmV0dXJuICc5J1xyXG4gICAgY2FzZSAnTWludXMnOiByZXR1cm4gJy0nXHJcbiAgICBjYXNlICdFcXVhbCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcrJ1xyXG4gICAgY2FzZSAnRW50ZXInOiByZXR1cm4gJz0nXHJcbiAgICBjYXNlICdQZXJpb2QnOiByZXR1cm4gJy4nXHJcbiAgICBjYXNlICdTbGFzaCc6IHJldHVybiAnLydcclxuICAgIGNhc2UgJ0tleVMnOiByZXR1cm4gJ3NpbidcclxuICAgIGNhc2UgJ0tleUMnOiBpZiAoIWN0cmwpIHJldHVybiAnY29zJ1xyXG4gICAgICByZXR1cm5cclxuICAgIGNhc2UgJ0tleVQnOiByZXR1cm4gJ3RhbidcclxuICAgIGNhc2UgJ0tleVAnOiByZXR1cm4gJ3BpJ1xyXG4gICAgY2FzZSAnS2V5RSc6IHJldHVybiAnZSdcclxuICAgIGNhc2UgJ0tleUwnOiBpZiAoc2hpZnQpIHsgcmV0dXJuICdsb2cnIH0gZWxzZSByZXR1cm4gJ2xuJ1xyXG4gICAgY2FzZSAnS2V5TSc6IGlmIChzaGlmdCkgcmV0dXJuICdybSc7IHJldHVybiAnbSdcclxuICAgIGNhc2UgJ0tleVInOiByZXR1cm4gJ3JhbmQnXHJcbiAgICBjYXNlICdIb21lJzogcmV0dXJuICdjJ1xyXG4gICAgZGVmYXVsdDogcmV0dXJuICdub25lJ1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=