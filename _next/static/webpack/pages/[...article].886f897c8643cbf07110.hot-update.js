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

    if (code === 'rm') return inputCode(String(memory[0].r));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbIkNhbGMiLCJwcm9wcyIsInVzZVN0YXRlIiwicmVzdWx0IiwicmVzdWx0Q2hhbmdlIiwidHJ1ZVJlc3VsdCIsInRydWVSZXN1bHRDaGFuZ2UiLCJpbnB1dCIsImlucHV0Q2hhbmdlIiwiaGlzdG9yeSIsImhpc3RvcnlDaGFuZ2UiLCJtZW1vcnkiLCJtZW1vcnlDaGFuZ2UiLCJhbmltYXRlUmVzdWx0IiwiYW5pbWF0ZVJlc3VsdEMiLCJibG9jayIsInVzZVJlZiIsInJlZiIsInVzZUVmZmVjdCIsInN0b3JlSGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlTWVtIiwiY3VycmVudCIsImZvY3VzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRlc2MiLCJlcnJvciIsIm1leHAiLCJldmFsIiwiZSIsIm1lc3NhZ2UiLCJzZWFyY2giLCJwcmVzc0J1dHRvbiIsImNvZGUiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJpbnB1dENvZGUiLCJnZXRUcnVlQ29kZSIsImhpc3RvcnlDbGVhciIsIm1lbUNsZWFyIiwidW5kZWZpbmVkIiwiciIsImQiLCJEYXRlIiwibm93Iiwic2xpY2UiLCJxIiwiU3RyaW5nIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwicmVhZFRleHQiLCJ0aGVuIiwidGV4dCIsInBvczEiLCJzZWxlY3Rpb25TdGFydCIsInBvczIiLCJzZWxlY3Rpb25FbmQiLCJnZXRSc3QiLCJpbnNlcnQiLCJuZXdJbnB1dCIsIm5ld1BvcyIsInNldFRpbWVvdXQiLCJidXR0b25zIiwiYyIsIm4iLCJjb2xvciIsImNvcHlDb2RlIiwid3JpdGVUZXh0IiwiZm9jdXNJbnB1dCIsInMiLCJzaGlmdEtleSIsImFsdEtleSIsImN0cmxLZXkiLCJjYWxjIiwiYW5pbSIsIm1hcCIsImJ1dHRvbiIsIndoaXRlIiwiZXF1YWxseSIsInQiLCJyaWdodCIsImNsZWFyIiwib2JqIiwibGVuZ3RoIiwiZW1wdHkiLCJlbXB0eUhpc3RvcnkiLCJlbXB0eU1lbW9yeSIsInN0cjEiLCJzdHIyIiwic2VsZWN0aW9uIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQy9CQyxNQUQrQjtBQUFBLE1BQ3ZCQyxZQUR1QixpQkFDSzs7O0FBREwsbUJBRUNGLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFL0JHLFVBRitCO0FBQUEsTUFFbkJDLGdCQUZtQixrQkFFYTs7O0FBRmIsbUJBR1RKLHNEQUFRLENBQUMsRUFBRCxDQUhDO0FBQUEsTUFHL0JLLEtBSCtCO0FBQUEsTUFHeEJDLFdBSHdCOztBQUFBLG1CQUlMTixzREFBUSxDQUFDLEVBQUQsQ0FKSDtBQUFBLE1BSS9CTyxPQUorQjtBQUFBLE1BSXRCQyxhQUpzQjs7QUFBQSxtQkFLUFIsc0RBQVEsQ0FBQyxFQUFELENBTEQ7QUFBQSxNQUsvQlMsTUFMK0I7QUFBQSxNQUt2QkMsWUFMdUI7O0FBQUEsbUJBTUVWLHNEQUFRLENBQUMsS0FBRCxDQU5WO0FBQUEsTUFNL0JXLGFBTitCO0FBQUEsTUFNaEJDLGNBTmdCOztBQVF0QyxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0FFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQWpCO0FBQ0EsUUFBSUYsUUFBUSxLQUFLLElBQWpCLEVBQXVCVCxhQUFhLENBQUNZLElBQUksQ0FBQ0MsS0FBTCxD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LE9BQUw7QUFBYyxhQUFPLEdBQVA7O0FBQ2QsU0FBSyxNQUFMO0FBQWEsYUFBTyxLQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLFVBQUksQ0FBQ0UsSUFBTCxFQUFXLE9BQU8sS0FBUDtBQUN0Qjs7QUFDRixTQUFLLE1BQUw7QUFBYSxhQUFPLEtBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsYUFBTyxJQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLGFBQU8sR0FBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxhQUFPLEtBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsVUFBSUEsSUFBSixFQUFVLE9BQU8sT0FBUDtBQUNyQjs7QUFDRixTQUFLLE1BQUw7QUFBYSxVQUFJRixLQUFKLEVBQVcsT0FBTyxJQUFQO0FBQWEsYUFBTyxHQUFQOztBQUNyQyxTQUFLLE1BQUw7QUFBYSxhQUFPLE1BQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsYUFBTyxHQUFQOztBQUNiO0FBQVMsYUFBTyxNQUFQO0FBNURYO0FBOEREIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS44ODZmODk3Yzg2NDNjYmYwNzExMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy9jYWxjLnN0eWwnXHJcbmltcG9ydCBtZXhwIGZyb20gJ21hdGgtZXhwcmVzc2lvbi1ldmFsdWF0b3InXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtyZXN1bHQsIHJlc3VsdENoYW5nZV0gPSB1c2VTdGF0ZSgnJykvL9CS0YvQstC+0LTQuNGC0YHRjyDQsiDRgNC10LfRg9C70YzRgtCw0YLQtVxyXG4gIGNvbnN0IFt0cnVlUmVzdWx0LCB0cnVlUmVzdWx0Q2hhbmdlXSA9IHVzZVN0YXRlKCcnKS8v0J/QvtGB0LvQtdC00L3QtdC1INGD0YHQv9C10YjQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQtdGB0LvQuCDQv9Cw0YDRgdC10YAg0L3QtSDQv9C+0L3QuNC80LDQtdGCXHJcbiAgY29uc3QgW2lucHV0LCBpbnB1dENoYW5nZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaGlzdG9yeSwgaGlzdG9yeUNoYW5nZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbWVtb3J5LCBtZW1vcnlDaGFuZ2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2FuaW1hdGVSZXN1bHQsIGFuaW1hdGVSZXN1bHRDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZUhpcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYWxjSGlzdG9yeScpXHJcbiAgICBpZiAoc3RvcmVIaXMgIT09IG51bGwpIGhpc3RvcnlDaGFuZ2UoSlNPTi5wYXJzZShzdG9yZUhpcykpXHJcbiAgICBjb25zdCBzdG9yZU1lbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYWxjTWVtJylcclxuICAgIGlmIChzdG9yZU1lbSAhPT0gbnVsbCkgbWVtb3J5Q2hhbmdlKEpTT04ucGFyc2Uoc3RvcmVNZW0pKVxyXG4gICAgcmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY01lbScsIEpTT04uc3RyaW5naWZ5KG1lbW9yeSkpXHJcbiAgfSwgW21lbW9yeV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjSGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnkpKVxyXG4gIH0sIFtoaXN0b3J5XSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IHByb3BzLmRlc2MuZXJyb3JcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlc3VsdCA9IG1leHAuZXZhbChpbnB1dClcclxuICAgICAgdHJ1ZVJlc3VsdENoYW5nZShyZXN1bHQpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlLm1lc3NhZ2UgPT09ICcpIGlzIG5vdCBhbGxvd2VkIGFmdGVyICgnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJcIlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpbnB1dC5zZWFyY2goLyhcXCt8XFwtfFxcKnxcXC98XFwlfFxcXikkLykgIT09IC0xKSByZXN1bHQgPSB0cnVlUmVzdWx0XHJcbiAgICAgICAgaWYgKGlucHV0ID09PSAnJykgcmVzdWx0ID0gJydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0Q2hhbmdlKHJlc3VsdClcclxuICB9LCBbaW5wdXRdKVxyXG5cclxuICBjb25zdCBwcmVzc0J1dHRvbiA9IChjb2RlLCBzaGlmdCA9IGZhbHNlLCBhbHQgPSBmYWxzZSwgY3RybCA9IGZhbHNlKSA9PiBhbHQgPyBudWxsIDogaW5wdXRDb2RlKGdldFRydWVDb2RlKGNvZGUsIHNoaWZ0LCBjdHJsKSlcclxuICBjb25zdCBoaXN0b3J5Q2xlYXIgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY0hpc3RvcnknLCAnJylcclxuICAgIGhpc3RvcnlDaGFuZ2UoW10pXHJcbiAgfVxyXG4gIGNvbnN0IG1lbUNsZWFyID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNNZW0nLCAnJylcclxuICAgIG1lbW9yeUNoYW5nZShbXSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGlucHV0Q29kZSA9IChjb2RlKSA9PiB7XHJcbiAgICBpZiAoY29kZSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgIGlmIChjb2RlID09PSAnbm9uZScpIHJldHVyblxyXG4gICAgaWYgKGNvZGUgPT09ICdtJykge1xyXG4gICAgICBpZiAodHJ1ZVJlc3VsdCA9PT0gJycpIHJldHVyblxyXG4gICAgICBtZW1vcnlDaGFuZ2UoW3sgcjogdHJ1ZVJlc3VsdCwgZDogRGF0ZS5ub3coKSB9LCAuLi5tZW1vcnkuc2xpY2UoMCwgOSldKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAnPScpIHtcclxuICAgICAgYW5pbWF0ZVJlc3VsdEModHJ1ZSlcclxuICAgICAgaWYgKGhpc3RvcnlbMF0gPT09IHVuZGVmaW5lZCB8fCBpbnB1dCAhPT0gJycgJiYgaW5wdXQgIT09IGhpc3RvcnlbMF0ucSAmJiB0cnVlUmVzdWx0ICE9PSBoaXN0b3J5WzBdLnIpIGhpc3RvcnlDaGFuZ2UoW3sgcTogaW5wdXQsIHI6IHRydWVSZXN1bHQsIGQ6IERhdGUubm93KCkgfSwgLi4uaGlzdG9yeS5zbGljZSgwLCA5KV0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICdybScpIHJldHVybiBpbnB1dENvZGUoU3RyaW5nKG1lbW9yeVswXS5yKSlcclxuICAgIGlmIChjb2RlID09PSAnY3RybHYnKSByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgIGlucHV0Q29kZShTdHJpbmcodGV4dCkpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHBvczEgPSByZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydFxyXG4gICAgY29uc3QgcG9zMiA9IHJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZFxyXG4gICAgZnVuY3Rpb24gZ2V0UnN0KCkge1xyXG4gICAgICBpZiAoYW5pbWF0ZVJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdENoYW5nZSgnJylcclxuICAgICAgICBhbmltYXRlUmVzdWx0QyhmYWxzZSlcclxuICAgICAgICByZXR1cm4gaW5zZXJ0KFN0cmluZyhjb2RlKSwgU3RyaW5nKHRydWVSZXN1bHQpLCBwb3MxLCBwb3MyKVxyXG4gICAgICB9IHJldHVybiBpbnNlcnQoU3RyaW5nKGNvZGUpLCBpbnB1dCwgcG9zMSwgcG9zMilcclxuICAgIH1cclxuICAgIGNvbnN0IHsgbmV3SW5wdXQsIG5ld1BvcyB9ID0gZ2V0UnN0KClcclxuICAgIGlucHV0Q2hhbmdlKG5ld0lucHV0KVxyXG4gICAgcmVmLmN1cnJlbnQuZm9jdXMoKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0ID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kID0gbmV3UG9zXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgYnV0dG9ucyA9IFtcclxuICAgIHt9LFxyXG4gICAgeyBjOiBcIihcIiwgbjogXCIoXCIgfSxcclxuICAgIHsgYzogXCIpXCIsIG46IFwiKVwiIH0sXHJcbiAgICB7IGM6IFwiY1wiLCBuOiBcIkNcIiB9LFxyXG4gICAgeyBjOiBcIm1cIiwgbjogXCJNXCIgfSxcclxuICAgIHsgYzogXCItLVwiLCBuOiBcIuKGkFwiIH0sXHJcbiAgICB7IGM6IFwiJVwiLCBuOiBcIiVcIiB9LFxyXG4gICAgeyBjOiBcImxvZ1wiLCBuOiBcImxvZ1wiIH0sXHJcbiAgICB7IGM6IFwidGFuXCIsIG46IFwidGdcIiB9LFxyXG4gICAgeyBjOiBcIl5cIiwgbjogXCJeXCIgfSxcclxuICAgIHsgYzogXCI3XCIsIG46IFwiN1wiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjhcIiwgbjogXCI4XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiOVwiLCBuOiBcIjlcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIvXCIsIG46IFwiL1wiIH0sXHJcbiAgICB7IGM6IFwiZVwiLCBuOiBcImVcIiB9LFxyXG4gICAgeyBjOiBcImNvc1wiLCBuOiBcImNvc1wiIH0sXHJcbiAgICB7IGM6IFwic3FydFwiLCBuOiBcIuKImlwiIH0sXHJcbiAgICB7IGM6IFwiNFwiLCBuOiBcIjRcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI1XCIsIG46IFwiNVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjZcIiwgbjogXCI2XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiKlwiLCBuOiBcIipcIiB9LFxyXG4gICAgeyBjOiBcInBpXCIsIG46IFwiz4BcIiB9LFxyXG4gICAgeyBjOiBcInNpblwiLCBuOiBcInNpblwiIH0sXHJcbiAgICB7IGM6IFwiIVwiLCBuOiBcIiFcIiB9LFxyXG4gICAgeyBjOiBcIjFcIiwgbjogXCIxXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiMlwiLCBuOiBcIjJcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIzXCIsIG46IFwiM1wiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIi1cIiwgbjogXCItXCIgfSxcclxuICAgIHt9LFxyXG4gICAgeyBjOiBcInJtXCIsIG46IFwiUk1cIiB9LFxyXG4gICAgeyBjOiBcInJhbmRcIiwgbjogXCJyYW5kXCIgfSxcclxuICAgIHsgYzogXCIuXCIsIG46IFwiLlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjBcIiwgbjogXCIwXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiPVwiLCBuOiBcIj1cIiwgY29sb3I6IGZhbHNlIH0sXHJcbiAgICB7IGM6IFwiK1wiLCBuOiBcIitcIiB9LFxyXG4gIF1cclxuICBmdW5jdGlvbiBjb3B5Q29kZSgpIHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYCR7cmVzdWx0fWApIH1cclxuICBmdW5jdGlvbiBmb2N1c0lucHV0KCkgeyByZWYuY3VycmVudC5mb2N1cygpIH1cclxuICByZXR1cm4gPGRpdiByZWY9e2Jsb2NrfSBjbGFzc05hbWU9e3MuYmxvY2t9IHRhYkluZGV4PXstMX0gb25DbGljaz17Zm9jdXNJbnB1dH0gb25LZXlEb3duPXtlID0+IHByZXNzQnV0dG9uKGUuY29kZSwgZS5zaGlmdEtleSwgZS5hbHRLZXksIGUuY3RybEtleSl9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2FsY30gPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthbmltYXRlUmVzdWx0ID8gcy5hbmltIDogJyd9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtyZWZ9IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9eygpID0+IGZhbHNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NvcHlDb2RlfT57cmVzdWx0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7YnV0dG9ucy5tYXAoYnV0dG9uID0+IDxidXR0b24gY2xhc3NOYW1lPXtidXR0b24uY29sb3IgPT09IHVuZGVmaW5lZCA/ICcnIDogYnV0dG9uLmNvbG9yID8gcy53aGl0ZSA6IHMuZXF1YWxseX0ga2V5PXtidXR0b24uY30gZGF0YS10b29sdGlwPXtidXR0b24udH0gb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKGJ1dHRvbi5jKX0+e2J1dHRvbi5ufTwvYnV0dG9uPil9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGlzdG9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hpc3RvcnlDbGVhcn0+e3Byb3BzLmRlc2MuY2xlYXJ9PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2hpc3RvcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENoYW5nZShTdHJpbmcob2JqLnEpKX0+e29iai5xfTwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj4gPSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsoaGlzdG9yeS5sZW5ndGggPT09IDAgPyA8ZGl2IGNsYXNzTmFtZT17cy5lbXB0eX0+e3Byb3BzLmRlc2MuZW1wdHlIaXN0b3J5fTwvZGl2PiA6IG51bGwpfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJpZ2h0fT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLm1lbW9yeX08L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21lbUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bWVtb3J5Lm1hcChvYmogPT5cclxuICAgICAgICAgIDxkaXYga2V5PXtvYmouZH0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaW5wdXRDb2RlKFN0cmluZyhvYmoucikpfT57b2JqLnJ9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHsobWVtb3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eU1lbW9yeX08L2Rpdj4gOiBudWxsKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbi8v0JjQt9C80LXQvdC10L3QuNC1INGB0YLRgNC+0LrQuCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LrQvtC00LBcclxuZnVuY3Rpb24gaW5zZXJ0KGNvZGUsIGlucHV0LCBwb3MxLCBwb3MyKSB7XHJcbiAgbGV0IHN0cjEgPSBpbnB1dC5zbGljZSgwLCBwb3MxKVxyXG4gIGxldCBzdHIyID0gaW5wdXQuc2xpY2UocG9zMilcclxuICBsZXQgc2VsZWN0aW9uID0gaW5wdXQuc2xpY2UocG9zMSwgcG9zMilcclxuICBsZXQgbmV3UG9zID0gcG9zMVxyXG5cclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgJysnOlxyXG4gICAgY2FzZSAnLSc6XHJcbiAgICBjYXNlICcqJzpcclxuICAgIGNhc2UgJy8nOlxyXG4gICAgY2FzZSAnJSc6XHJcbiAgICBjYXNlICdeJzpcclxuICAgICAgc2VsZWN0aW9uID0gY29kZVxyXG4gICAgICBpZiAoc3RyMS5zZWFyY2goLyhcXCt8XFwtfFxcKnxcXC98XFwlfFxcXikkLykgIT09IC0xKSB7IHN0cjEgPSBzdHIxLnNsaWNlKDAsIC0xKSB9IGVsc2UgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJzAnOlxyXG4gICAgY2FzZSAnMSc6XHJcbiAgICBjYXNlICcyJzpcclxuICAgIGNhc2UgJzMnOlxyXG4gICAgY2FzZSAnNCc6XHJcbiAgICBjYXNlICc1JzpcclxuICAgIGNhc2UgJzYnOlxyXG4gICAgY2FzZSAnNyc6XHJcbiAgICBjYXNlICc4JzpcclxuICAgIGNhc2UgJzknOlxyXG4gICAgY2FzZSAnZSc6XHJcbiAgICBjYXNlICchJzpcclxuICAgIGNhc2UgJy4nOiBzZWxlY3Rpb24gPSBjb2RlOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnc3FydCc6IHNlbGVjdGlvbiA9IFwiXigxLylcIjsgbmV3UG9zICs9IDRcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2Nvcyc6XHJcbiAgICBjYXNlICdzaW4nOlxyXG4gICAgY2FzZSAndGFuJzpcclxuICAgICAgaWYgKHBvczEgIT09IHBvczIpIG5ld1BvcyArPSBzZWxlY3Rpb24ubGVuZ3RoICsgMVxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlICsgYCgke3NlbGVjdGlvbn0pYFxyXG4gICAgICBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnYyc6IHJldHVybiB7IG5ld0lucHV0OiAnJywgbmV3UG9zOiAwIH1cclxuICAgIGNhc2UgJ3JhbmQnOiBzZWxlY3Rpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApIC8gMTAwMDAwOyBuZXdQb3MgPSArN1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnKCc6IHNlbGVjdGlvbiA9ICcoKSc7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcpJzogc2VsZWN0aW9uID0gJyknOyBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnLS0nOlxyXG4gICAgICBzZWxlY3Rpb24gPSAnJ1xyXG4gICAgICBpZiAocG9zMSA9PT0gcG9zMikgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpOyBpZiAocG9zMSAhPT0gMCkgbmV3UG9zLS1cclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgIHNlbGVjdGlvbiA9ICcnXHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSBzdHIyID0gc3RyMi5zbGljZSgxKVxyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDogc2VsZWN0aW9uID0gY29kZTsgbmV3UG9zICs9IGNvZGUubGVuZ3RoXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0lucHV0ID0gc3RyMSArIHNlbGVjdGlvbiArIHN0cjJcclxuICByZXR1cm4geyBuZXdJbnB1dCwgbmV3UG9zIH1cclxufVxyXG5cclxuLy/Qn9C+0LvRg9GH0LXQvdC40LUg0LrQvtC00LAg0L/QviDQtNC10LnRgdGC0LLQuNGOXHJcbmZ1bmN0aW9uIGdldFRydWVDb2RlKGNvZGUsIHNoaWZ0LCBjdHJsKSB7XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlICdCYWNrc3BhY2UnOiByZXR1cm4gJy0tJ1xyXG4gICAgY2FzZSAnRGVsZXRlJzogcmV0dXJuICdkZWxldGUnXHJcbiAgICBjYXNlICdOdW1wYWQxJzogcmV0dXJuICcxJ1xyXG4gICAgY2FzZSAnTnVtcGFkMic6IHJldHVybiAnMidcclxuICAgIGNhc2UgJ051bXBhZDMnOiByZXR1cm4gJzMnXHJcbiAgICBjYXNlICdOdW1wYWQ0JzogcmV0dXJuICc0J1xyXG4gICAgY2FzZSAnTnVtcGFkNSc6IHJldHVybiAnNSdcclxuICAgIGNhc2UgJ051bXBhZDYnOiByZXR1cm4gJzYnXHJcbiAgICBjYXNlICdOdW1wYWQ3JzogcmV0dXJuICc3J1xyXG4gICAgY2FzZSAnTnVtcGFkOCc6IHJldHVybiAnOCdcclxuICAgIGNhc2UgJ051bXBhZDknOiByZXR1cm4gJzknXHJcbiAgICBjYXNlICdOdW1wYWQwJzogcmV0dXJuICcwJ1xyXG4gICAgY2FzZSAnTnVtcGFkRGVjaW1hbCc6IHJldHVybiAnLidcclxuICAgIGNhc2UgJ051bXBhZEVudGVyJzogcmV0dXJuICc9J1xyXG4gICAgY2FzZSAnTnVtcGFkQWRkJzogcmV0dXJuICcrJ1xyXG4gICAgY2FzZSAnTnVtcGFkU3VidHJhY3QnOiByZXR1cm4gJy0nXHJcbiAgICBjYXNlICdOdW1wYWRNdWx0aXBseSc6IHJldHVybiAnKidcclxuICAgIGNhc2UgJ051bXBhZERpdmlkZSc6IHJldHVybiAnLydcclxuXHJcbiAgICBjYXNlICdEaWdpdDAnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKSdcclxuICAgICAgcmV0dXJuICcwJ1xyXG4gICAgY2FzZSAnRGlnaXQxJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyEnXHJcbiAgICAgIHJldHVybiAnMSdcclxuICAgIGNhc2UgJ0RpZ2l0Mic6IHJldHVybiAnMidcclxuICAgIGNhc2UgJ0RpZ2l0Myc6IHJldHVybiAnMydcclxuICAgIGNhc2UgJ0RpZ2l0NCc6IHJldHVybiAnNCdcclxuICAgIGNhc2UgJ0RpZ2l0NSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICclJ1xyXG4gICAgICByZXR1cm4gJzUnXHJcbiAgICBjYXNlICdEaWdpdDYnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnXidcclxuICAgICAgcmV0dXJuICc2J1xyXG4gICAgY2FzZSAnRGlnaXQ3JzogcmV0dXJuICc3J1xyXG4gICAgY2FzZSAnRGlnaXQ4JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyonXHJcbiAgICAgIHJldHVybiAnOCdcclxuICAgIGNhc2UgJ0RpZ2l0OSc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcoJ1xyXG4gICAgICByZXR1cm4gJzknXHJcbiAgICBjYXNlICdNaW51cyc6IHJldHVybiAnLSdcclxuICAgIGNhc2UgJ0VxdWFsJzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJysnXHJcbiAgICBjYXNlICdFbnRlcic6IHJldHVybiAnPSdcclxuICAgIGNhc2UgJ1BlcmlvZCc6IHJldHVybiAnLidcclxuICAgIGNhc2UgJ1NsYXNoJzogcmV0dXJuICcvJ1xyXG4gICAgY2FzZSAnS2V5Uyc6IHJldHVybiAnc2luJ1xyXG4gICAgY2FzZSAnS2V5Qyc6IGlmICghY3RybCkgcmV0dXJuICdjb3MnXHJcbiAgICAgIHJldHVyblxyXG4gICAgY2FzZSAnS2V5VCc6IHJldHVybiAndGFuJ1xyXG4gICAgY2FzZSAnS2V5UCc6IHJldHVybiAncGknXHJcbiAgICBjYXNlICdLZXlFJzogcmV0dXJuICdlJ1xyXG4gICAgY2FzZSAnS2V5TCc6IHJldHVybiAnbG9nJ1xyXG4gICAgY2FzZSAnS2V5Vic6IGlmIChjdHJsKSByZXR1cm4gJ2N0cmx2J1xyXG4gICAgICByZXR1cm5cclxuICAgIGNhc2UgJ0tleU0nOiBpZiAoc2hpZnQpIHJldHVybiAncm0nOyByZXR1cm4gJ20nXHJcbiAgICBjYXNlICdLZXlSJzogcmV0dXJuICdyYW5kJ1xyXG4gICAgY2FzZSAnSG9tZSc6IHJldHVybiAnYydcclxuICAgIGRlZmF1bHQ6IHJldHVybiAnbm9uZSdcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9