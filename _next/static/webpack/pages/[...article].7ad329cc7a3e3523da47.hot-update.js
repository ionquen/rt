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
              onChange: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9DYWxjLmpzIl0sIm5hbWVzIjpbIkNhbGMiLCJwcm9wcyIsInVzZVN0YXRlIiwicmVzdWx0IiwicmVzdWx0Q2hhbmdlIiwidHJ1ZVJlc3VsdCIsInRydWVSZXN1bHRDaGFuZ2UiLCJpbnB1dCIsImlucHV0Q2hhbmdlIiwiaGlzdG9yeSIsImhpc3RvcnlDaGFuZ2UiLCJtZW1vcnkiLCJtZW1vcnlDaGFuZ2UiLCJhbmltYXRlUmVzdWx0IiwiYW5pbWF0ZVJlc3VsdEMiLCJibG9jayIsInVzZVJlZiIsInJlZiIsInVzZUVmZmVjdCIsInN0b3JlSGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlTWVtIiwiY3VycmVudCIsImZvY3VzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRlc2MiLCJlcnJvciIsIm1leHAiLCJldmFsIiwiZSIsIm1lc3NhZ2UiLCJzZWFyY2giLCJwcmVzc0J1dHRvbiIsImNvZGUiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJpbnB1dENvZGUiLCJnZXRUcnVlQ29kZSIsImhpc3RvcnlDbGVhciIsIm1lbUNsZWFyIiwidW5kZWZpbmVkIiwiciIsImQiLCJEYXRlIiwibm93Iiwic2xpY2UiLCJxIiwiU3RyaW5nIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwicmVhZFRleHQiLCJ0aGVuIiwidGV4dCIsInBvczEiLCJzZWxlY3Rpb25TdGFydCIsInBvczIiLCJzZWxlY3Rpb25FbmQiLCJnZXRSc3QiLCJpbnNlcnQiLCJuZXdJbnB1dCIsIm5ld1BvcyIsInNldFRpbWVvdXQiLCJidXR0b25zIiwiYyIsIm4iLCJjb2xvciIsImNvcHlDb2RlIiwid3JpdGVUZXh0IiwiZm9jdXNJbnB1dCIsInMiLCJzaGlmdEtleSIsImFsdEtleSIsImN0cmxLZXkiLCJjYWxjIiwiYW5pbSIsIm1hcCIsImJ1dHRvbiIsIndoaXRlIiwiZXF1YWxseSIsInQiLCJyaWdodCIsImNsZWFyIiwib2JqIiwibGVuZ3RoIiwiZW1wdHkiLCJlbXB0eUhpc3RvcnkiLCJlbXB0eU1lbW9yeSIsInN0cjEiLCJzdHIyIiwic2VsZWN0aW9uIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQy9CQyxNQUQrQjtBQUFBLE1BQ3ZCQyxZQUR1QixpQkFDSzs7O0FBREwsbUJBRUNGLHNEQUFRLENBQUMsRUFBRCxDQUZUO0FBQUEsTUFFL0JHLFVBRitCO0FBQUEsTUFFbkJDLGdCQUZtQixrQkFFYTs7O0FBRmIsbUJBR1RKLHNEQUFRLENBQUMsRUFBRCxDQUhDO0FBQUEsTUFHL0JLLEtBSCtCO0FBQUEsTUFHeEJDLFdBSHdCOztBQUFBLG1CQUlMTixzREFBUSxDQUFDLEVBQUQsQ0FKSDtBQUFBLE1BSS9CTyxPQUorQjtBQUFBLE1BSXRCQyxhQUpzQjs7QUFBQSxtQkFLUFIsc0RBQVEsQ0FBQyxFQUFELENBTEQ7QUFBQSxNQUsvQlMsTUFMK0I7QUFBQSxNQUt2QkMsWUFMdUI7O0FBQUEsbUJBTUVWLHNEQUFRLENBQUMsS0FBRCxDQU5WO0FBQUEsTUFNL0JXLGFBTitCO0FBQUEsTUFNaEJDLGNBTmdCOztBQVF0QyxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0FFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQWpCO0FBQ0EsUUFBSUYsUUFBUSxLQUFLLElBQWpCLEVBQXVCVCxhQUFhLENBQUNZLElBQUksQ0FBQ0MsS0FBTCxD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LFNBQUssTUFBTDtBQUFhLGFBQU8sS0FBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxVQUFJLENBQUNFLElBQUwsRUFBVyxPQUFPLEtBQVA7QUFDdEI7O0FBQ0YsU0FBSyxNQUFMO0FBQWEsYUFBTyxLQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLGFBQU8sSUFBUDs7QUFDYixTQUFLLE1BQUw7QUFBYSxhQUFPLEdBQVA7O0FBQ2IsU0FBSyxNQUFMO0FBQWEsYUFBTyxLQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLFVBQUlBLElBQUosRUFBVSxPQUFPLE9BQVA7QUFDckI7O0FBQ0YsU0FBSyxNQUFMO0FBQWEsVUFBSUYsS0FBSixFQUFXLE9BQU8sSUFBUDtBQUFhLGFBQU8sR0FBUDs7QUFDckMsU0FBSyxNQUFMO0FBQWEsYUFBTyxNQUFQOztBQUNiLFNBQUssTUFBTDtBQUFhLGFBQU8sR0FBUDs7QUFDYjtBQUFTLGFBQU8sTUFBUDtBQTVEWDtBQThERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uN2FkMzI5Y2M3YTNlMzUyM2RhNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvY2FsYy5zdHlsJ1xyXG5pbXBvcnQgbWV4cCBmcm9tICdtYXRoLWV4cHJlc3Npb24tZXZhbHVhdG9yJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsYyh7IHByb3BzIH0pIHtcclxuICBjb25zdCBbcmVzdWx0LCByZXN1bHRDaGFuZ2VdID0gdXNlU3RhdGUoJycpLy/QktGL0LLQvtC00LjRgtGB0Y8g0LIg0YDQtdC30YPQu9GM0YLQsNGC0LVcclxuICBjb25zdCBbdHJ1ZVJlc3VsdCwgdHJ1ZVJlc3VsdENoYW5nZV0gPSB1c2VTdGF0ZSgnJykvL9Cf0L7RgdC70LXQtNC90LXQtSDRg9GB0L/QtdGI0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0LXRgdC70Lgg0L/QsNGA0YHQtdGAINC90LUg0L/QvtC90LjQvNCw0LXRglxyXG4gIGNvbnN0IFtpbnB1dCwgaW5wdXRDaGFuZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2hpc3RvcnksIGhpc3RvcnlDaGFuZ2VdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21lbW9yeSwgbWVtb3J5Q2hhbmdlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthbmltYXRlUmVzdWx0LCBhbmltYXRlUmVzdWx0Q10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVIaXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsY0hpc3RvcnknKVxyXG4gICAgaWYgKHN0b3JlSGlzICE9PSBudWxsKSBoaXN0b3J5Q2hhbmdlKEpTT04ucGFyc2Uoc3RvcmVIaXMpKVxyXG4gICAgY29uc3Qgc3RvcmVNZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsY01lbScpXHJcbiAgICBpZiAoc3RvcmVNZW0gIT09IG51bGwpIG1lbW9yeUNoYW5nZShKU09OLnBhcnNlKHN0b3JlTWVtKSlcclxuICAgIHJlZi5jdXJyZW50LmZvY3VzKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNNZW0nLCBKU09OLnN0cmluZ2lmeShtZW1vcnkpKVxyXG4gIH0sIFttZW1vcnldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY0hpc3RvcnknLCBKU09OLnN0cmluZ2lmeShoaXN0b3J5KSlcclxuICB9LCBbaGlzdG9yeV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBwcm9wcy5kZXNjLmVycm9yXHJcbiAgICB0cnkge1xyXG4gICAgICByZXN1bHQgPSBtZXhwLmV2YWwoaW5wdXQpXHJcbiAgICAgIHRydWVSZXN1bHRDaGFuZ2UocmVzdWx0KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoZS5tZXNzYWdlID09PSAnKSBpcyBub3QgYWxsb3dlZCBhZnRlciAoJykge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaW5wdXQuc2VhcmNoKC8oXFwrfFxcLXxcXCp8XFwvfFxcJXxcXF4pJC8pICE9PSAtMSkgcmVzdWx0ID0gdHJ1ZVJlc3VsdFxyXG4gICAgICAgIGlmIChpbnB1dCA9PT0gJycpIHJlc3VsdCA9ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3VsdENoYW5nZShyZXN1bHQpXHJcbiAgfSwgW2lucHV0XSlcclxuXHJcbiAgY29uc3QgcHJlc3NCdXR0b24gPSAoY29kZSwgc2hpZnQgPSBmYWxzZSwgYWx0ID0gZmFsc2UsIGN0cmwgPSBmYWxzZSkgPT4gYWx0ID8gbnVsbCA6IGlucHV0Q29kZShnZXRUcnVlQ29kZShjb2RlLCBzaGlmdCwgY3RybCkpXHJcbiAgY29uc3QgaGlzdG9yeUNsZWFyID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhbGNIaXN0b3J5JywgJycpXHJcbiAgICBoaXN0b3J5Q2hhbmdlKFtdKVxyXG4gIH1cclxuICBjb25zdCBtZW1DbGVhciA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYWxjTWVtJywgJycpXHJcbiAgICBtZW1vcnlDaGFuZ2UoW10pXHJcbiAgfVxyXG5cclxuICBjb25zdCBpbnB1dENvZGUgPSAoY29kZSkgPT4ge1xyXG4gICAgaWYgKGNvZGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICBpZiAoY29kZSA9PT0gJ25vbmUnKSByZXR1cm5cclxuICAgIGlmIChjb2RlID09PSAnbScpIHtcclxuICAgICAgaWYgKHRydWVSZXN1bHQgPT09ICcnKSByZXR1cm5cclxuICAgICAgbWVtb3J5Q2hhbmdlKFt7IHI6IHRydWVSZXN1bHQsIGQ6IERhdGUubm93KCkgfSwgLi4ubWVtb3J5LnNsaWNlKDAsIDkpXSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJz0nKSB7XHJcbiAgICAgIGFuaW1hdGVSZXN1bHRDKHRydWUpXHJcbiAgICAgIGlmIChoaXN0b3J5WzBdID09PSB1bmRlZmluZWQgfHwgaW5wdXQgIT09ICcnICYmIGlucHV0ICE9PSBoaXN0b3J5WzBdLnEgJiYgdHJ1ZVJlc3VsdCAhPT0gaGlzdG9yeVswXS5yKSBoaXN0b3J5Q2hhbmdlKFt7IHE6IGlucHV0LCByOiB0cnVlUmVzdWx0LCBkOiBEYXRlLm5vdygpIH0sIC4uLmhpc3Rvcnkuc2xpY2UoMCwgOSldKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAncm0nKSByZXR1cm4gaW5wdXRDb2RlKFN0cmluZyhtZW1vcnlbMF0ucikpXHJcbiAgICBpZiAoY29kZSA9PT0gJ2N0cmx2JykgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICBpbnB1dENvZGUoU3RyaW5nKHRleHQpKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBwb3MxID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnRcclxuICAgIGNvbnN0IHBvczIgPSByZWYuY3VycmVudC5zZWxlY3Rpb25FbmRcclxuICAgIGZ1bmN0aW9uIGdldFJzdCgpIHtcclxuICAgICAgaWYgKGFuaW1hdGVSZXN1bHQpIHtcclxuICAgICAgICByZXN1bHRDaGFuZ2UoJycpXHJcbiAgICAgICAgYW5pbWF0ZVJlc3VsdEMoZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuIGluc2VydChTdHJpbmcoY29kZSksIFN0cmluZyh0cnVlUmVzdWx0KSwgcG9zMSwgcG9zMilcclxuICAgICAgfSByZXR1cm4gaW5zZXJ0KFN0cmluZyhjb2RlKSwgaW5wdXQsIHBvczEsIHBvczIpXHJcbiAgICB9XHJcbiAgICBjb25zdCB7IG5ld0lucHV0LCBuZXdQb3MgfSA9IGdldFJzdCgpXHJcbiAgICBpbnB1dENoYW5nZShuZXdJbnB1dClcclxuICAgIHJlZi5jdXJyZW50LmZvY3VzKClcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydCA9IHJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZCA9IG5ld1Bvc1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBbXHJcbiAgICB7fSxcclxuICAgIHsgYzogXCIoXCIsIG46IFwiKFwiIH0sXHJcbiAgICB7IGM6IFwiKVwiLCBuOiBcIilcIiB9LFxyXG4gICAgeyBjOiBcImNcIiwgbjogXCJDXCIgfSxcclxuICAgIHsgYzogXCJtXCIsIG46IFwiTVwiIH0sXHJcbiAgICB7IGM6IFwiLS1cIiwgbjogXCLihpBcIiB9LFxyXG4gICAgeyBjOiBcIiVcIiwgbjogXCIlXCIgfSxcclxuICAgIHsgYzogXCJsb2dcIiwgbjogXCJsb2dcIiB9LFxyXG4gICAgeyBjOiBcInRhblwiLCBuOiBcInRnXCIgfSxcclxuICAgIHsgYzogXCJeXCIsIG46IFwiXlwiIH0sXHJcbiAgICB7IGM6IFwiN1wiLCBuOiBcIjdcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI4XCIsIG46IFwiOFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjlcIiwgbjogXCI5XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiL1wiLCBuOiBcIi9cIiB9LFxyXG4gICAgeyBjOiBcImVcIiwgbjogXCJlXCIgfSxcclxuICAgIHsgYzogXCJjb3NcIiwgbjogXCJjb3NcIiB9LFxyXG4gICAgeyBjOiBcInNxcnRcIiwgbjogXCLiiJpcIiB9LFxyXG4gICAgeyBjOiBcIjRcIiwgbjogXCI0XCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiNVwiLCBuOiBcIjVcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCI2XCIsIG46IFwiNlwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIipcIiwgbjogXCIqXCIgfSxcclxuICAgIHsgYzogXCJwaVwiLCBuOiBcIs+AXCIgfSxcclxuICAgIHsgYzogXCJzaW5cIiwgbjogXCJzaW5cIiB9LFxyXG4gICAgeyBjOiBcIiFcIiwgbjogXCIhXCIgfSxcclxuICAgIHsgYzogXCIxXCIsIG46IFwiMVwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIjJcIiwgbjogXCIyXCIsIGNvbG9yOiB0cnVlIH0sXHJcbiAgICB7IGM6IFwiM1wiLCBuOiBcIjNcIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCItXCIsIG46IFwiLVwiIH0sXHJcbiAgICB7fSxcclxuICAgIHsgYzogXCJybVwiLCBuOiBcIlJNXCIgfSxcclxuICAgIHsgYzogXCJyYW5kXCIsIG46IFwicmFuZFwiIH0sXHJcbiAgICB7IGM6IFwiLlwiLCBuOiBcIi5cIiwgY29sb3I6IHRydWUgfSxcclxuICAgIHsgYzogXCIwXCIsIG46IFwiMFwiLCBjb2xvcjogdHJ1ZSB9LFxyXG4gICAgeyBjOiBcIj1cIiwgbjogXCI9XCIsIGNvbG9yOiBmYWxzZSB9LFxyXG4gICAgeyBjOiBcIitcIiwgbjogXCIrXCIgfSxcclxuICBdXHJcbiAgZnVuY3Rpb24gY29weUNvZGUoKSB7IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGAke3Jlc3VsdH1gKSB9XHJcbiAgZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHsgcmVmLmN1cnJlbnQuZm9jdXMoKSB9XHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtibG9ja30gY2xhc3NOYW1lPXtzLmJsb2NrfSB0YWJJbmRleD17LTF9IG9uQ2xpY2s9e2ZvY3VzSW5wdXR9IG9uS2V5RG93bj17ZSA9PiBwcmVzc0J1dHRvbihlLmNvZGUsIGUuc2hpZnRLZXksIGUuYWx0S2V5LCBlLmN0cmxLZXkpfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNhbGN9ID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YW5pbWF0ZVJlc3VsdCA/IHMuYW5pbSA6ICcnfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17cmVmfSB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17Y29weUNvZGV9PntyZXN1bHR9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtidXR0b25zLm1hcChidXR0b24gPT4gPGJ1dHRvbiBjbGFzc05hbWU9e2J1dHRvbi5jb2xvciA9PT0gdW5kZWZpbmVkID8gJycgOiBidXR0b24uY29sb3IgPyBzLndoaXRlIDogcy5lcXVhbGx5fSBrZXk9e2J1dHRvbi5jfSBkYXRhLXRvb2x0aXA9e2J1dHRvbi50fSBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoYnV0dG9uLmMpfT57YnV0dG9uLm59PC9idXR0b24+KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5yaWdodH0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oaXN0b3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGlzdG9yeUNsZWFyfT57cHJvcHMuZGVzYy5jbGVhcn08L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7aGlzdG9yeS5tYXAob2JqID0+XHJcbiAgICAgICAgICA8ZGl2IGtleT17b2JqLmR9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGlucHV0Q2hhbmdlKFN0cmluZyhvYmoucSkpfT57b2JqLnF9PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPiA9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhoaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IDxkaXYgY2xhc3NOYW1lPXtzLmVtcHR5fT57cHJvcHMuZGVzYy5lbXB0eUhpc3Rvcnl9PC9kaXY+IDogbnVsbCl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MucmlnaHR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubWVtb3J5fTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bWVtQ2xlYXJ9Pntwcm9wcy5kZXNjLmNsZWFyfTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHttZW1vcnkubWFwKG9iaiA9PlxyXG4gICAgICAgICAgPGRpdiBrZXk9e29iai5kfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpbnB1dENvZGUoU3RyaW5nKG9iai5yKSl9PntvYmoucn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgeyhtZW1vcnkubGVuZ3RoID09PSAwID8gPGRpdiBjbGFzc05hbWU9e3MuZW1wdHl9Pntwcm9wcy5kZXNjLmVtcHR5TWVtb3J5fTwvZGl2PiA6IG51bGwpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5cclxuLy/QmNC30LzQtdC90LXQvdC40LUg0YHRgtGA0L7QutC4INCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQutC+0LTQsFxyXG5mdW5jdGlvbiBpbnNlcnQoY29kZSwgaW5wdXQsIHBvczEsIHBvczIpIHtcclxuICBsZXQgc3RyMSA9IGlucHV0LnNsaWNlKDAsIHBvczEpXHJcbiAgbGV0IHN0cjIgPSBpbnB1dC5zbGljZShwb3MyKVxyXG4gIGxldCBzZWxlY3Rpb24gPSBpbnB1dC5zbGljZShwb3MxLCBwb3MyKVxyXG4gIGxldCBuZXdQb3MgPSBwb3MxXHJcblxyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSAnKyc6XHJcbiAgICBjYXNlICctJzpcclxuICAgIGNhc2UgJyonOlxyXG4gICAgY2FzZSAnLyc6XHJcbiAgICBjYXNlICclJzpcclxuICAgIGNhc2UgJ14nOlxyXG4gICAgICBzZWxlY3Rpb24gPSBjb2RlXHJcbiAgICAgIGlmIChzdHIxLnNlYXJjaCgvKFxcK3xcXC18XFwqfFxcL3xcXCV8XFxeKSQvKSAhPT0gLTEpIHsgc3RyMSA9IHN0cjEuc2xpY2UoMCwgLTEpIH0gZWxzZSBuZXdQb3MrK1xyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnMCc6XHJcbiAgICBjYXNlICcxJzpcclxuICAgIGNhc2UgJzInOlxyXG4gICAgY2FzZSAnMyc6XHJcbiAgICBjYXNlICc0JzpcclxuICAgIGNhc2UgJzUnOlxyXG4gICAgY2FzZSAnNic6XHJcbiAgICBjYXNlICc3JzpcclxuICAgIGNhc2UgJzgnOlxyXG4gICAgY2FzZSAnOSc6XHJcbiAgICBjYXNlICdlJzpcclxuICAgIGNhc2UgJyEnOlxyXG4gICAgY2FzZSAnLic6IHNlbGVjdGlvbiA9IGNvZGU7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdzcXJ0Jzogc2VsZWN0aW9uID0gXCJeKDEvKVwiOyBuZXdQb3MgKz0gNFxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnY29zJzpcclxuICAgIGNhc2UgJ3Npbic6XHJcbiAgICBjYXNlICd0YW4nOlxyXG4gICAgICBpZiAocG9zMSAhPT0gcG9zMikgbmV3UG9zICs9IHNlbGVjdGlvbi5sZW5ndGggKyAxXHJcbiAgICAgIHNlbGVjdGlvbiA9IGNvZGUgKyBgKCR7c2VsZWN0aW9ufSlgXHJcbiAgICAgIG5ld1BvcyArPSA0XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICdjJzogcmV0dXJuIHsgbmV3SW5wdXQ6ICcnLCBuZXdQb3M6IDAgfVxyXG4gICAgY2FzZSAncmFuZCc6IHNlbGVjdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkgLyAxMDAwMDA7IG5ld1BvcyA9ICs3XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICcoJzogc2VsZWN0aW9uID0gJygpJzsgbmV3UG9zKytcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJyknOiBzZWxlY3Rpb24gPSAnKSc7IG5ld1BvcysrXHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlICctLSc6XHJcbiAgICAgIHNlbGVjdGlvbiA9ICcnXHJcbiAgICAgIGlmIChwb3MxID09PSBwb3MyKSBzdHIxID0gc3RyMS5zbGljZSgwLCAtMSk7IGlmIChwb3MxICE9PSAwKSBuZXdQb3MtLVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnZGVsZXRlJzpcclxuICAgICAgc2VsZWN0aW9uID0gJydcclxuICAgICAgaWYgKHBvczEgPT09IHBvczIpIHN0cjIgPSBzdHIyLnNsaWNlKDEpXHJcbiAgICAgIGJyZWFrXHJcbiAgICBkZWZhdWx0OiBzZWxlY3Rpb24gPSBjb2RlOyBuZXdQb3MgKz0gY29kZS5sZW5ndGhcclxuICB9XHJcbiAgY29uc3QgbmV3SW5wdXQgPSBzdHIxICsgc2VsZWN0aW9uICsgc3RyMlxyXG4gIHJldHVybiB7IG5ld0lucHV0LCBuZXdQb3MgfVxyXG59XHJcblxyXG4vL9Cf0L7Qu9GD0YfQtdC90LjQtSDQutC+0LTQsCDQv9C+INC00LXQudGB0YLQstC40Y5cclxuZnVuY3Rpb24gZ2V0VHJ1ZUNvZGUoY29kZSwgc2hpZnQsIGN0cmwpIHtcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgJ0JhY2tzcGFjZSc6IHJldHVybiAnLS0nXHJcbiAgICBjYXNlICdEZWxldGUnOiByZXR1cm4gJ2RlbGV0ZSdcclxuICAgIGNhc2UgJ051bXBhZDEnOiByZXR1cm4gJzEnXHJcbiAgICBjYXNlICdOdW1wYWQyJzogcmV0dXJuICcyJ1xyXG4gICAgY2FzZSAnTnVtcGFkMyc6IHJldHVybiAnMydcclxuICAgIGNhc2UgJ051bXBhZDQnOiByZXR1cm4gJzQnXHJcbiAgICBjYXNlICdOdW1wYWQ1JzogcmV0dXJuICc1J1xyXG4gICAgY2FzZSAnTnVtcGFkNic6IHJldHVybiAnNidcclxuICAgIGNhc2UgJ051bXBhZDcnOiByZXR1cm4gJzcnXHJcbiAgICBjYXNlICdOdW1wYWQ4JzogcmV0dXJuICc4J1xyXG4gICAgY2FzZSAnTnVtcGFkOSc6IHJldHVybiAnOSdcclxuICAgIGNhc2UgJ051bXBhZDAnOiByZXR1cm4gJzAnXHJcbiAgICBjYXNlICdOdW1wYWREZWNpbWFsJzogcmV0dXJuICcuJ1xyXG4gICAgY2FzZSAnTnVtcGFkRW50ZXInOiByZXR1cm4gJz0nXHJcbiAgICBjYXNlICdOdW1wYWRBZGQnOiByZXR1cm4gJysnXHJcbiAgICBjYXNlICdOdW1wYWRTdWJ0cmFjdCc6IHJldHVybiAnLSdcclxuICAgIGNhc2UgJ051bXBhZE11bHRpcGx5JzogcmV0dXJuICcqJ1xyXG4gICAgY2FzZSAnTnVtcGFkRGl2aWRlJzogcmV0dXJuICcvJ1xyXG5cclxuICAgIGNhc2UgJ0RpZ2l0MCc6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICcpJ1xyXG4gICAgICByZXR1cm4gJzAnXHJcbiAgICBjYXNlICdEaWdpdDEnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnISdcclxuICAgICAgcmV0dXJuICcxJ1xyXG4gICAgY2FzZSAnRGlnaXQyJzogcmV0dXJuICcyJ1xyXG4gICAgY2FzZSAnRGlnaXQzJzogcmV0dXJuICczJ1xyXG4gICAgY2FzZSAnRGlnaXQ0JzogcmV0dXJuICc0J1xyXG4gICAgY2FzZSAnRGlnaXQ1JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJyUnXHJcbiAgICAgIHJldHVybiAnNSdcclxuICAgIGNhc2UgJ0RpZ2l0Nic6XHJcbiAgICAgIGlmIChzaGlmdCkgcmV0dXJuICdeJ1xyXG4gICAgICByZXR1cm4gJzYnXHJcbiAgICBjYXNlICdEaWdpdDcnOiByZXR1cm4gJzcnXHJcbiAgICBjYXNlICdEaWdpdDgnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKidcclxuICAgICAgcmV0dXJuICc4J1xyXG4gICAgY2FzZSAnRGlnaXQ5JzpcclxuICAgICAgaWYgKHNoaWZ0KSByZXR1cm4gJygnXHJcbiAgICAgIHJldHVybiAnOSdcclxuICAgIGNhc2UgJ01pbnVzJzogcmV0dXJuICctJ1xyXG4gICAgY2FzZSAnRXF1YWwnOlxyXG4gICAgICBpZiAoc2hpZnQpIHJldHVybiAnKydcclxuICAgIGNhc2UgJ0VudGVyJzogcmV0dXJuICc9J1xyXG4gICAgY2FzZSAnUGVyaW9kJzogcmV0dXJuICcuJ1xyXG4gICAgY2FzZSAnU2xhc2gnOiByZXR1cm4gJy8nXHJcbiAgICBjYXNlICdLZXlTJzogcmV0dXJuICdzaW4nXHJcbiAgICBjYXNlICdLZXlDJzogaWYgKCFjdHJsKSByZXR1cm4gJ2NvcydcclxuICAgICAgcmV0dXJuXHJcbiAgICBjYXNlICdLZXlUJzogcmV0dXJuICd0YW4nXHJcbiAgICBjYXNlICdLZXlQJzogcmV0dXJuICdwaSdcclxuICAgIGNhc2UgJ0tleUUnOiByZXR1cm4gJ2UnXHJcbiAgICBjYXNlICdLZXlMJzogcmV0dXJuICdsb2cnXHJcbiAgICBjYXNlICdLZXlWJzogaWYgKGN0cmwpIHJldHVybiAnY3RybHYnXHJcbiAgICAgIHJldHVyblxyXG4gICAgY2FzZSAnS2V5TSc6IGlmIChzaGlmdCkgcmV0dXJuICdybSc7IHJldHVybiAnbSdcclxuICAgIGNhc2UgJ0tleVInOiByZXR1cm4gJ3JhbmQnXHJcbiAgICBjYXNlICdIb21lJzogcmV0dXJuICdjJ1xyXG4gICAgZGVmYXVsdDogcmV0dXJuICdub25lJ1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=