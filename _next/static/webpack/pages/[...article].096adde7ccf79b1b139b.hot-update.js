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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbIkNhbGMiLCJwcm9wcyIsInVzZVN0YXRlIiwicmVzdWx0IiwicmVzdWx0Q2hhbmdlIiwidHJ1ZVJlc3VsdCIsInRydWVSZXN1bHRDaGFuZ2UiLCJpbnB1dCIsImlucHV0Q2hhbmdlIiwiaGlzdG9yeSIsImhpc3RvcnlDaGFuZ2UiLCJtZW1vcnkiLCJtZW1vcnlDaGFuZ2UiLCJhbmltYXRlUmVzdWx0IiwiYW5pbWF0ZVJlc3VsdEMiLCJibG9jayIsInVzZVJlZiIsInJlZiIsInVzZUVmZmVjdCIsInN0b3JlSGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlTWVtIiwiY3VycmVudCIsImZvY3VzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRlc2MiLCJlcnJvciIsInJlcGxhY2VkSW5wdXQiLCJyZXBsYWNlIiwibWV4cCIsImV2YWwiLCJlIiwibWVzc2FnZSIsInNlYXJjaCIsInByZXNzQnV0dG9uIiwiY29kZSIsInNoaWZ0IiwiYWx0IiwiY3RybCIsImlucHV0Q29kZSIsImdldFRydWVDb2RlIiwiaGlzdG9yeUNsZWFyIiwibWVtQ2xlYXIiLCJ1bmRlZmluZWQiLCJyIiwiZCIsIkRhdGUiLCJub3ciLCJzbGljZSIsInEiLCJTdHJpbmciLCJwb3MxIiwic2VsZWN0aW9uU3RhcnQiLCJwb3MyIiwic2VsZWN0aW9uRW5kIiwiZ2V0UnN0IiwiaW5zZXJ0IiwibmV3SW5wdXQiLCJuZXdQb3MiLCJzZXRUaW1lb3V0IiwiYnV0dG9ucyIsImMiLCJuIiwiY29sb3IiLCJjb3B5Q29kZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImZvY3VzSW5wdXQiLCJwYXN0ZUlucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJzIiwic2hpZnRLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwiY2FsYyIsImFuaW0iLCJtYXAiLCJidXR0b24iLCJ3aGl0ZSIsImVxdWFsbHkiLCJ0IiwicmlnaHQiLCJjbGVhciIsIm9iaiIsImVtcHR5IiwiZW1wdHlIaXN0b3J5IiwiZW1wdHlNZW1vcnkiLCJzdHIxIiwic3RyMiIsInNlbGVjdGlvbiIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImJlZ2luU3RyMiIsImVuZFN0cjEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsRUFBRCxDQUREO0FBQUEsTUFDL0JDLE1BRCtCO0FBQUEsTUFDdkJDLFlBRHVCLGlCQUNLOzs7QUFETCxtQkFFQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUUvQkcsVUFGK0I7QUFBQSxNQUVuQkMsZ0JBRm1CLGtCQUVhOzs7QUFGYixtQkFHVEosc0RBQVEsQ0FBQyxFQUFELENBSEM7QUFBQSxNQUcvQkssS0FIK0I7QUFBQSxNQUd4QkMsV0FId0I7O0FBQUEsbUJBSUxOLHNEQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJL0JPLE9BSitCO0FBQUEsTUFJdEJDLGFBSnNCOztBQUFBLG1CQUtQUixzREFBUSxDQUFDLEVBQUQsQ0FMRDtBQUFBLE1BSy9CUyxNQUwrQjtBQUFBLE1BS3ZCQyxZQUx1Qjs7QUFBQSxtQkFNRVYsc0RBQVEsQ0FBQyxLQUFELENBTlY7QUFBQSxNQU0vQlcsYUFOK0I7QUFBQSxNQU1oQkMsY0FOZ0I7O0FBUXRDLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBakI7QUFDQSxRQUFJ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YSxhQUFPLE1BQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsYUFBTyxHQUFQOztBQUNiO0FBQVMsYUFBTyxNQUFQO0FBNURYO0FBOEREIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS4wOTZhZGRlN2NjZjc5YjFiMTM5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy9jYWxjLnN0eWwnXHJcbmltcG9ydCBtZXhwIGZyb20gJ21hdGgtZXhwcmVzc2lvbi1ldmFsdWF0b3InXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHJlc3VsdENoYW5nZV0gPSB1c2VTdGF0ZSgnJykvL9CS0YvQstC+0LTQuNGC0YHRjyDQsiDRgNC10LfRg9C70YzRgtCw0YLQtVxyXG4gIGNvbnN0IFt0cnVlUmVzdWx0LCB0cnVlUmVzdWx0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKS8v0J/QvtGB0LvQtdC00L3QtdC1INGD0YHQv9C10YjQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQtdGB0LvQuCDQv9Cw0YDRgdC10YAg0L3QtSDQv9C+0L3QuNC80LDQtdGCXHJcbiAgY29uc3QgW2lucHV0LCBpbnB1dENoYW5nZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaGlzdG9yeSwgaGlzdG9yeUNoYW5nZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbWVtb3J5LCBtZW1vcnlDaGFuZ2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2FuaW1hdGVSZXN1bHQsIGFuaW1hdGVSZXN1bHRDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZUhpcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYWxjSGlzdG9yeScpXHJcbiAgICBpZiAoc3RvcmVIaXMgIT09IG51bGwpIGhpc3RvcnlDaGFuZ2UoSlNPTi5wYXJzZShzdG9yZUhpcykpXHJcbiAgICBjb25zdCBzdG9yZU1lbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYWxjTWVtJylcclxuICAgIGlmIChzdG9yZU1lbSAhPT0gbnVsbCkgbWVtb3J5Q2hhbmdlKEpTT04ucGFyc2Uoc3RvcmVNZW0pKVxyXG4gICAgcmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY01lbScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpXHJcbiAgfSwgW21lbW9yeV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjSGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKVxyXG4gIH0sIFtoaXN0b3J5XSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IHByb3BzLmRlc2MuZXJyb3JcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2VkSW5wdXQgPSBpbnB1dFxyXG4gICAgICAgIC5yZXBsYWNlKC9cXCUvZ20sICcqMC4wMSonKS8vYWRkZWQgcGVyY2VudFxyXG4gICAgICAgIC5yZXBsYWNlKC9bXi8qXisoLV17MX0oPz1sb2d8bG58c2lufGNvc3x0YW4pL2dtLCAnJCYqJykvL2ZpeGVkIG1lbW9yeSBsZWFrXHJcbiAgICAgIHJlc3VsdCA9IG1leHAuZXZhbChyZXBsYWNlZElucHV0KVxyXG4gICAgICB0cnVlUmVzdWx0Q2hhbmdlKHJlc3VsdClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUubWVzc2FnZSA9PT0gJykgaXMgbm90IGFsbG93ZWQgYWZ0ZXIgKCcpIHtcclxuICAgICAgICByZXN1bHQgPSBcIlwiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnNlYXJjaCgvKFxcK3xcXC18XFwqfFxcL3xcXCV8XFxeKSQvKSAhPT0gLTEpIHJlc3VsdCA9IHRydWVSZXN1bHRcclxuICAgICAgICBpZiAoaW5wdXQgPT09ICcnKSByZXN1bHQgPSAnJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHRDaGFuZ2UocmVzdWx0KVxyXG4gIH0sIFtpbnB1dF0pXHJcblxyXG4gIGNvbnN0IHByZXNzQnV0dG9uID0gKGNvZGUsIHNoaWZ0ID0gZmFsc2UsIGFsdCA9IGZhbHNlLCBjdHJsID0gZmFsc2UpID0+IGFsdCA/IG51bGwgOiBpbnB1dENvZGUoZ2V0VHJ1ZUNvZGUoY29kZSwgc2hpZnQsIGN0cmwpKVxyXG4gIGNvbnN0IGhpc3RvcnlDbGVhciA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjSGlzdG9yeScsICcnKVxyXG4gICAgaGlzdG9yeUNoYW5nZShbXSlcclxuICB9XHJcbiAgY29uc3QgbWVtQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY01lbScsICcnKVxyXG4gICAgbWVtb3J5Q2hhbmdlKFtdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5wdXRDb2RlID0gKGNvZGUpID0+IHtcclxuICAgIGlmIChjb2RlID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgaWYgKGNvZGUgPT09ICdub25lJykgcmV0dXJuXHJcbiAgICBpZiAoY29kZSA9PT0gJ20nKSB7XHJcbiAgICAgIGlmICh0cnVlUmVzdWx0ID09PSAnJykgcmV0dXJuXHJcbiAgICAgIG1lbW9yeUNoYW5nZShbeyByOiB0cnVlUmVzdWx0LCBkOiBEYXRlLm5vdygpIH0sIC4uLm1lbW9yeS5zbGljZSgwLCA5KV0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICc9Jykge1xyXG4gICAgICBhbmltYXRlUmVzdWx0Qyh0cnVlKVxyXG4gICAgICBpZiAoaGlzdG9yeVswXSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0ICE9PSAnJyAmJiBpbnB1dCAhPT0gaGlzdG9yeVswXS5xICYmIHRydWVSZXN1bHQgIT09IGhpc3RvcnlbMF0ucikgaGlzdG9yeUNoYW5nZShbeyBxOiBpbnB1dCwgcjogdHJ1ZVJlc3VsdCwgZDogRGF0ZS5ub3coKSB9LCAuLi5oaXN0b3J5LnNsaWNlKDAsIDkpXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJ3JtJyAmJiBtZW1vcnlbMF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0Q29kZShTdHJpbmcobWVtb3J5WzBdLnIpKVxyXG4gICAgLyppZiAoY29kZSA9PT0gJ2N0cmx2JykgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICBpbnB1dENvZGUoU3RyaW5nKHRleHQpKVxyXG4gICAgfSkqL1xyXG5cclxuICAgIGNvbnN0IHBvczEgPSByZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydFxyXG4gICAgY29uc3QgcG9zMiA9IHJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZFxyXG4gICAgZnVuY3Rpb24gZ2V0UnN0KCkge1xyXG4gICAgICBpZiAoYW5pbWF0ZVJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdENoYW5nZSgnJylcclxuICAgICAgICBhbmltYXRlUmVzdWx0QyhmYWxzZSlcclxuICAgICAgICByZXR1cm4gaW5zZXJ0KFN0cmluZyhjb2RlKSwgU3RyaW5nKHRydWVSZXN1bHQpLCBwb3MxLCBwb3MyKVxyXG4gICAgICB9IHJldHVybiBpbnNlcnQoU3RyaW5nKGNvZGUpLCBpbnB1dCwgcG9zMSwgcG9zMilcclxuICAgIH1cclxuICAgIGNvbnN0IHsgbmV3SW5wdXQsIG5ld1BvcyB9ID0gZ2V0UnN0KClcclxuICAgIGlucHV0Q2hhbmdlKG5ld0lucHV0KVxyXG4gICAgcmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0ID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kID0gbmV3UG9zXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgYnV0dG9ucyA9IFtcclxuICAgIHsgYzogXCJsblwiLCBuOiBcImxuXCIgfSxcclxuICAgIHsgYzogXCIoXCIsIG46IFwiKFwiIH0sXHJcbiAgICB7IGM6IFwiKVwiLCBuOiBcIilcIiB9LFxyXG4gICAgeyBjOiBcImNcIiwgbjogXCJDXCIgfSxcclxuICAgIHsgYzogXCJtXCIsIG46IFwiTVwiIH0sXHJcbiAgICB7IGM6IFwiLS1cIiwgbjogXCLihpBcIiB9LFxyXG4gICAgeyBjOiBcIiVcIiwgbjogXCIlXCIgfSxcclxuICAgIHsgYzogXCJsb2dcIiwgbjogXCJsb2dcIiB9LFxyXG4gICAgeyBjOiBcInRhblwiLCBuOiBcInRnXCIgfSxcclxuICAgIHsgYzogXCJeXCIsIG46IFwiXlwiIH0sXHJcbiAgICB7IGM6IFwiN1wiLCBuOiBcIjdcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI4XCIsIG46IFwiOFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjlcIiwgbjogXCI5XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiL1wiLCBuOiBcIi9cIiB9LFxyXG4gICAgeyBjOiBcImVcIiwgbjogXCJlXCIgfSxcclxuICAgIHsgYzogXCJjb3NcIiwgbjogXCJjb3NcIiB9LFxyXG4gICAgeyBjOiBcInNxcnRcIiwgbjogXCLiiJpcIiB9LFxyXG4gICAgeyBjOiBcIjRcIiwgbjogXCI0XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiNVwiLCBuOiBcIjVcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI2XCIsIG46IFwiNlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIipcIiwgbjogXCIqXCIgfSxcclxuICAgIHsgYzogXCJwaVwiLCBuOiBcIs+AXCIgfSxcclxuICAgIHsgYzogXCJzaW5cIiwgbjogXCJzaW5cIiB9LFxyXG4gICAgeyBjOiBcIiFcIiwgbjogXCIhXCIgfSxcclxuICAgIHsgYzogXCIxXCIsIG46IFwiMVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjJcIiwgbjogXCIyXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiM1wiLCBuOiBcIjNcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCItXCIsIG46IFwiLVwiIH0sXHJcbiAgICB7fSxcclxuICAgIHsgYzogXCJybVwiLCBuOiBcIlJNXCIgfSxcclxuICAgIHsgYzogXCJyYW5kXCIsIG46IFwicmFuZFwiIH0sXHJcbiAgICB7IGM6IFwiLlwiLCBuOiBcIi5cIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIwXCIsIG46IFwiMFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIj1cIiwgbjogXCI9XCIsIGNvbG9yOiBmYWxzZSB9LFxyXG4gICAgeyBjOiBcIitcIiwgbjogXCIrXCIgfSxcclxuICBdXHJcbiAgZnVuY3Rpb24gY29weUNvZGUoKSB7IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGAke3Jlc3VsdH1gKSB9XHJcbiAgZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHsgcmVmLmN1cnJlbnQuZm9jdXMoKSB9XHJcbiAgZnVuY3Rpb24gcGFzdGVJbnB1dChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoIC0gMSA9PT0gaW5wdXQubGVuZ3RoKSByZXR1cm4gZmFsc2VcclxuICAgIGlucHV0Q29kZShTdHJpbmcoZS50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiByZWY9e2Jsb2NrfSBjbGFzc05hbWU9e3MuYmxvY2t9IHRhYkluZGV4PXstMX0gb25DbGljaz17Zm9jdXNJbnB1dH0gb25LZXlEb3duPXtlID0+IHByZXNzQnV0dG9uKGUuY29kZSwgZS5zaGlmdEtleSwgZS5hbHRLZXksIGUuY3RybEtleSl9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2FsY30gPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthbmltYXRlUmVzdWx0ID8gcy5hbmltIDogJyd9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWZ9IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e3Bhc3RlSW5wdXR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17Y29weUNvZGV9PntyZXN1bHR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtidXR0b25zLm1hcChidXR0b24gPT4gPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbi5jb2xvciA9PT0gdW5kZWZpbmVkID8gJycgOiBidXR0b24uY29sb3IgPyBzLndoaXRlIDogcy5lcXVhbGx5fSBrZXk9e2J1dHRvbi5jfSBkYXRhLXRvb2x0aXA9e2J1dHRvbi50fSBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoYnV0dG9uLmMpfT57YnV0dG9uLm59PC9idXR0b24+KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5yaWdodH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oaXN0b3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGlzdG9yeUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7aGlzdG9yeS5tYXAob2JqID0+XHJcbiAgICAgICAgICA8ZGl2IGtleT17b2JqLmR9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGlucHV0Q2hhbmdlKFN0cmluZyhvYmoucSkpfT57b2JqLnF9PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPiA9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhoaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eUhpc3Rvcnl9PC9kaXY+IDogbnVsbCl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubWVtb3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bWVtQ2xlYXJ9Pntwcm9wcy5kZXNjLmNsZWFyfTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHttZW1vcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhtZW1vcnkubGVuZ3RoID09PSAwID8gPGRpdiBjbGFzc05hbWU9e3MuZW1wdHl9Pntwcm9wcy5kZXNjLmVtcHR5TWVtb3J5fTwvZGl2PiA6IG51bGwpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5cclxuLy/QmNC30LzQtdC90LXQvdC40LUg0YHRgtGA0L7QutC4INCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQutC+0LTQsFxyXG5mdW5jdGlvbiBpbnNlcnQoY29kZSwgaW5wdXQsIHBvczEsIHBvczIpIHtcclxuICBsZXQgc3RyMSA9IGlucHV0LnNsaWNlKDAsIHBvczEpXHJcbiAgbGV0IHN0cjIgPSBpbnB1dC5zbGljZShwb3MyKVxyXG4gIGxldCBzZWxlY3Rpb24gPSBpbnB1dC5zbGljZShwb3MxLCBwb3MyKVxyXG4gIGxldCBuZXdQb3MgPSBwb3MxXHJcblxyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSAnKyc6XHJcbiAgICBjYXNlICctJzpcclxuICAgIGNhc2UgJyonOlxyXG4gICAgY2FzZSAnLyc6XHJcbiAgICBjYXNlICclJzpcclxuICAgIGNhc2UgJ14nOlxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlXHJcbiAgICAgIGlmIChzdHIxLnNlYXJjaCgvKFxcK3xcXC18XFwqfFxcL3xcXCV8XFxeKSQvKSAhPT0gLTEpIHsgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpIH0gZWxzZSBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnMCc6XHJcbiAgICBjYXNlICcxJzpcclxuICAgIGNhc2UgJzInOlxyXG4gICAgY2FzZSAnMyc6XHJcbiAgICBjYXNlICc0JzpcclxuICAgIGNhc2UgJzUnOlxyXG4gICAgY2FzZSAnNic6XHJcbiAgICBjYXNlICc3JzpcclxuICAgIGNhc2UgJzgnOlxyXG4gICAgY2FzZSAnOSc6XHJcbiAgICBjYXNlICdlJzpcclxuICAgIGNhc2UgJyEnOlxyXG4gICAgY2FzZSAnLic6IHNlbGVjdGlvbiA9IGNvZGU7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdzcXJ0Jzogc2VsZWN0aW9uID0gXCJeKDEvKVwiOyBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnY29zJzpcclxuICAgIGNhc2UgJ3Npbic6XHJcbiAgICBjYXNlICd0YW4nOlxyXG4gICAgICBpZiAocG9zMSAhPT0gcG9zMikgbmV3UG9zICs9IHNlbGVjdGlvbi5sZW5ndGggKyAxXHJcbiAgICAgIHNlbGVjdGlvbiA9IGNvZGUgKyBgKCR7c2VsZWN0aW9ufSlgXHJcbiAgICAgIG5ld1BvcyArPSA0XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdjJzogcmV0dXJuIHsgbmV3SW5wdXQ6ICcnLCBuZXdQb3M6IDAgfVxyXG4gICAgY2FzZSAncmFuZCc6IHNlbGVjdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkgLyAxMDAwMDA7IG5ld1BvcyA9ICs3XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcoJzogc2VsZWN0aW9uID0gYCgke3NlbGVjdGlvbn0pYDsgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJyknOiBzZWxlY3Rpb24gPSAnKSc7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICctLSc6XHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgYmVnaW5TdHIyID0gc3RyMi5zbGljZSgwLCAxKVxyXG4gICAgICAgIGNvbnN0IGVuZFN0cjEgPSBzdHIxLnNsaWNlKC0yKVxyXG4gICAgICAgIGlmIChlbmRTdHIxID09PSAnaW4nIHx8IGVuZFN0cjEgPT09ICdvcycgfHwgZW5kU3RyMSA9PT0gJ29nJyB8fCBlbmRTdHIxID09PSAnYW4nKSB7XHJcbiAgICAgICAgICBzdHIxID0gc3RyMS5zbGljZSgwLCAtMylcclxuICAgICAgICAgIG5ld1BvcyA9IG5ld1BvcyAtIDJcclxuICAgICAgICB9IGVsc2UgaWYgKGVuZFN0cjFbMV0gPT09ICcoJyAmJiBiZWdpblN0cjIgPT09ICcpJykge1xyXG4gICAgICAgICAgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpXHJcbiAgICAgICAgICBzdHIyID0gc3RyMi5zbGljZSgxKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5kU3RyMSA9PT0gJ2xuJyB8fCBlbmRTdHIxID09PSAncGknKSB7XHJcbiAgICAgICAgICBzdHIxID0gc3RyMS5zbGljZSgwLCAtMilcclxuICAgICAgICAgIG5ld1Bvcy0tXHJcbiAgICAgICAgfSBlbHNlIHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKTsgaWYgKHBvczEgIT09IDApIG5ld1Bvcy0tXHJcbiAgICAgIH0gZWxzZSBzZWxlY3Rpb24gPSAnJ1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnZGVsZXRlJzpcclxuICAgICAgaWYgKHBvczEgPT09IHBvczIpIHtcclxuICAgICAgICBjb25zdCBiZWdpblN0cjIgPSBzdHIyLnNsaWNlKDAsIDIpXHJcbiAgICAgICAgaWYgKGJlZ2luU3RyMiA9PT0gJ3NpJyB8fCBiZWdpblN0cjIgPT09ICdjbycgfHwgYmVnaW5TdHIyID09PSAndGEnIHx8IGJlZ2luU3RyMiA9PT0gJ2xvJykge1xyXG4gICAgICAgICAgc3RyMiA9IHN0cjIuc2xpY2UoMylcclxuICAgICAgICB9IGVsc2UgaWYgKGJlZ2luU3RyMiA9PT0gJ2xuJyB8fCBiZWdpblN0cjIgPT09ICdwaScpIHtcclxuICAgICAgICAgIHN0cjIgPSBzdHIyLnNsaWNlKDIpXHJcbiAgICAgICAgfSBlbHNlIHN0cjIgPSBzdHIyLnNsaWNlKDEpXHJcbiAgICAgIH0gZWxzZSBzZWxlY3Rpb24gPSAnJ1xyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDogc2VsZWN0aW9uID0gY29kZTsgbmV3UG9zICs9IGNvZGUubGVuZ3RoXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0lucHV0ID0gc3RyMSArIHNlbGVjdGlvbiArIHN0cjJcclxuICByZXR1cm4geyBuZXdJbnB1dCwgbmV3UG9zIH1cclxufVxyXG5cclxuLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LrQvtC00LAg0L/QviDQtNC10LnRgdGC0LLQuNGOXHJcbmZ1bmN0aW9uIGdldFRydWVDb2RlKGNvZGUsIHNoaWZ0LCBjdHJsKSB7XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlICdCYWNrc3BhY2UnOiByZXR1cm4gJy0tJ1xyXG4gICAgY2FzZSAnRGVsZXRlJzogcmV0dXJuICdkZWxldGUnXHJcbiAgICBjYXNlICdOdW1wYWQxJzogcmV0dXJuICcxJ1xyXG4gICAgY2FzZSAnTnVtcGFkMic6IHJldHVybiAnMidcclxuICAgIGNhc2UgJ051bXBhZDMnOiByZXR1cm4gJzMnXHJcbiAgICBjYXNlICdOdW1wYWQ0JzogcmV0dXJuICc0J1xyXG4gICAgY2FzZSAnTnVtcGFkNSc6IHJldHVybiAnNSdcclxuICAgIGNhc2UgJ051bXBhZDYnOiByZXR1cm4gJzYnXHJcbiAgICBjYXNlICdOdW1wYWQ3JzogcmV0dXJuICc3J1xyXG4gICAgY2FzZSAnTnVtcGFkOCc6IHJldHVybiAnOCdcclxuICAgIGNhc2UgJ051bXBhZDknOiByZXR1cm4gJzknXHJcbiAgICBjYXNlICdOdW1wYWQwJzogcmV0dXJuICcwJ1xyXG4gICAgY2FzZSAnTnVtcGFkRGVjaW1hbCc6IHJldHVybiAnLidcclxuICAgIGNhc2UgJ051bXBhZEVudGVyJzogcmV0dXJuICc9J1xyXG4gICAgY2FzZSAnTnVtcGFkQWRkJzogcmV0dXJuICcrJ1xyXG4gICAgY2FzZSAnTnVtcGFkU3VidHJhY3QnOiByZXR1cm4gJy0nXHJcbiAgICBjYXNlICdOdW1wYWRNdWx0aXBseSc6IHJldHVybiAnKidcclxuICAgIGNhc2UgJ051bXBhZERpdmlkZSc6IHJldHVybiAnLydcclxuXHJcbiAgICBjYXNlICdEaWdpdDAnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKSdcclxuICAgICAgcmV0dXJuICcwJ1xyXG4gICAgY2FzZSAnRGlnaXQxJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyEnXHJcbiAgICAgIHJldHVybiAnMSdcclxuICAgIGNhc2UgJ0RpZ2l0Mic6IHJldHVybiAnMidcclxuICAgIGNhc2UgJ0RpZ2l0Myc6IHJldHVybiAnMydcclxuICAgIGNhc2UgJ0RpZ2l0NCc6IHJldHVybiAnNCdcclxuICAgIGNhc2UgJ0RpZ2l0NSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICclJ1xyXG4gICAgICByZXR1cm4gJzUnXHJcbiAgICBjYXNlICdEaWdpdDYnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnXidcclxuICAgICAgcmV0dXJuICc2J1xyXG4gICAgY2FzZSAnRGlnaXQ3JzogcmV0dXJuICc3J1xyXG4gICAgY2FzZSAnRGlnaXQ4JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyonXHJcbiAgICAgIHJldHVybiAnOCdcclxuICAgIGNhc2UgJ0RpZ2l0OSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcoJ1xyXG4gICAgICByZXR1cm4gJzknXHJcbiAgICBjYXNlICdNaW51cyc6IHJldHVybiAnLSdcclxuICAgIGNhc2UgJ0VxdWFsJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJysnXHJcbiAgICBjYXNlICdFbnRlcic6IHJldHVybiAnPSdcclxuICAgIGNhc2UgJ1BlcmlvZCc6IHJldHVybiAnLidcclxuICAgIGNhc2UgJ1NsYXNoJzogcmV0dXJuICcvJ1xyXG4gICAgY2FzZSAnS2V5Uyc6IHJldHVybiAnc2luJ1xyXG4gICAgY2FzZSAnS2V5Qyc6IGlmICghY3RybCkgcmV0dXJuICdjb3MnXHJcbiAgICAgIHJldHVyblxyXG4gICAgY2FzZSAnS2V5VCc6IHJldHVybiAndGFuJ1xyXG4gICAgY2FzZSAnS2V5UCc6IHJldHVybiAncGknXHJcbiAgICBjYXNlICdLZXlFJzogcmV0dXJuICdlJ1xyXG4gICAgY2FzZSAnS2V5TCc6IGlmIChzaGlmdCkgeyByZXR1cm4gJ2xvZycgfSBlbHNlIHJldHVybiAnbG4nXHJcbiAgICBjYXNlICdLZXlWJzogaWYgKGN0cmwpIHJldHVybiAnY3RybHYnXHJcbiAgICAgIHJldHVyblxyXG4gICAgY2FzZSAnS2V5TSc6IGlmIChzaGlmdCkgcmV0dXJuICdybSc7IHJldHVybiAnbSdcclxuICAgIGNhc2UgJ0tleVInOiByZXR1cm4gJ3JhbmQnXHJcbiAgICBjYXNlICdIb21lJzogcmV0dXJuICdjJ1xyXG4gICAgZGVmYXVsdDogcmV0dXJuICdub25lJ1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=