webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/tools/Timer.js":
/*!***********************************!*\
  !*** ./components/tools/Timer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stopwatch; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/tools/timer.styl */ "./styles/tools/timer.styl");
/* harmony import */ var _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Svg */ "./components/Svg.js");
/* harmony import */ var _Stopwatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Stopwatch */ "./components/tools/Stopwatch.js");
/* harmony import */ var _elements_fullscreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/fullscreen */ "./components/elements/fullscreen.js");





var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\tools\\Timer.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Stopwatch(_ref) {
  _s();

  var _this = this;

  var props = _ref.props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      alarms = _useState[0],
      alarmsC = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('tranquility'),
      defaultSound = _useState2[0],
      defaultSoundC = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isTimer = _useState3[0],
      isTimerC = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      newName = _useState4[0],
      newNameC = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      newNameChangedByUser = _useState5[0],
      newNameChangedByUserC = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      newH = _useState6[0],
      newHC = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      newMin = _useState7[0],
      newMinC = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      newSec = _useState8[0],
      newSecC = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      currentAlarms = _useState9[0],
      currentAlarmsC = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      currentPlaying = _useState10[0],
      currentPlayingC = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      currentPlayingElem = _useState11[0],
      currentPlayingElemC = _useState11[1];

  var block = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var storeItems = localStorage.getItem('alarmItems');
    if (storeItems === null) return;
    alarmsC(JSON.parse(storeItems));
    var storeSound = localStorage.getItem('alarmSound');
    if (storeSound === null) return;
    defaultSoundC(storeSound);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    isTimerC(router.query.article === 'timer');
  }, [router.query.article]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    localStorage.setItem('alarmItems', JSON.stringify(alarms));
  }, [alarms]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    localStorage.setItem('alarmSound', defaultSound);
  }, [defaultSound]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (currentPlayingElem !== null) currentPlayingElem.pause();
    if (currentPlaying === null) return;
    var newAudio = new Audio("/sounds/".concat(currentPlaying, ".mp3"));
    newAudio.loop = true;
    newAudio.play();
    currentPlayingElemC(newAudio);
  }, [currentPlaying]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (newNameChangedByUser) return;

    if (isTimer) {
      newNameC("".concat(props.desc.timerOn, " ").concat(newH === 0 ? "" : "".concat(newH < 10 ? "0" + newH : newH, " ").concat(props.desc["short"].hours, ". ")).concat(newMin === 0 ? "" : "".concat(newMin < 10 ? "0" + newMin : newMin, " ").concat(props.desc["short"].min, ". ")).concat(newSec === 0 ? newH !== 0 || newMin !== 0 ? "" : props.desc["short"].instant : "".concat(newSec < 10 ? "0" + newSec : newSec, " ").concat(props.desc["short"].sec, ".")));
    } else newNameC("".concat(props.desc.alarmOn, " ").concat(newH < 10 ? "0" + newH : newH, ":").concat(newMin < 10 ? "0" + newMin : newMin).concat(newSec === 0 ? "" : ":".concat(newSec < 10 ? "0" + newSec : newSec)));
  }, [newH, newMin, newSec, isTimer]);

  function add() {
    var started = Date.now();
    var timestamp = ((newMin + newH * 60) * 60 + newSec) * 1000;
    alarmsC(function (prevState) {
      return [{
        id: started,
        started: started,
        timestamp: timestamp,
        active: true,
        name: newName,
        isTimer: isTimer,
        sound: defaultSound,
        finish: getFinishTimestamp(isTimer, started, timestamp)
      }].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevState));
    });
    newNameChangedByUserC(false);
  }

  function alarmDelete(id) {
    alarmsC(function (prevState) {
      return prevState.filter(function (obj) {
        return obj.id !== id;
      });
    });
  }

  function changeField(id, field, value) {
    alarmsC(function (prevState) {
      return prevState.map(function (obj) {
        return obj.id === id ? _objectSpread(_objectSpread({}, obj), {}, Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, field, value)) : obj;
      });
    });
  }

  function timerDispatch(id) {
    var elem = alarms.filter(function (obj) {
      return obj.id === id;
    })[0];
    if (elem === undefined) return;
    currentPlayingC(elem.sound);
    currentAlarmsC(elem.finish);
  }

  function stopCurrentAlarms() {
    currentAlarmsC(null);
    currentPlayingC(null);
  }

  function changeOnTimer(time) {
    newNameChangedByUserC(false);
    isTimerC(true);
    newHC(time / 3600 | 0);
    newMinC(time / 60 % 60 | 0);
    newSecC(time % 60 | 0);
  }

  function changeOnAlarm(time) {
    newNameChangedByUserC(false);
    isTimerC(false);
    newHC(time / 60 | 0);
    newMinC(time % 60 | 0);
    newSecC(0);
  }

  var sounds = Object.entries(props.sound).map(function (obj) {
    return {
      l: obj[0],
      n: obj[1]
    };
  });

  function getNumbers(max) {
    var result = [];

    for (var i = 0; i < max; i++) {
      result.push(i);
    }

    return result;
  }

  function newNameChange(e) {
    newNameChangedByUserC(true);
    newNameC(e.value);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.block,
    ref: block,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.clock,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: new Date().getTimezoneOffset() * 60000,
        paused: false,
        displayMs: false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: new Date().toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
        elem: block.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a["new"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: isTimer ? '' : _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return isTimerC(true);
          },
          children: props.desc.timer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return isTimerC(false);
          },
          children: props.desc.alarm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc["long"].hours
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return newHC(function (prevState) {
                return prevState !== 0 ? prevState - 1 : 24;
              });
            },
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            value: newH,
            onChange: function onChange(e) {
              return newHC(Number(e.target.value));
            },
            children: [" ", getNumbers(24).map(function (n) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: n,
                children: n
              }, n, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 104
              }, _this);
            }), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return newHC(function (prevState) {
                return prevState !== 24 ? prevState + 1 : 0;
              });
            },
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc["long"].min
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return newMinC(function (prevState) {
                return prevState !== 0 ? prevState - 1 : 59;
              });
            },
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            value: newMin,
            onChange: function onChange(e) {
              return newMinC(Number(e.target.value));
            },
            children: [" ", getNumbers(60).map(function (n) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: n,
                children: n
              }, n, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 108
              }, _this);
            }), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return newMinC(function (prevState) {
                return prevState !== 59 ? prevState + 1 : 0;
              });
            },
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc["long"].sec
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return newSecC(function (prevState) {
                return prevState !== 0 ? prevState - 1 : 59;
              });
            },
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            value: newSec,
            onChange: function onChange(e) {
              return newSecC(Number(e.target.value));
            },
            children: [" ", getNumbers(60).map(function (n) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: n,
                children: n
              }, n, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 108
              }, _this);
            }), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return newSecC(function (prevState) {
                return prevState !== 59 ? prevState + 1 : 0;
              });
            },
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: newName,
          onChange: newNameChange
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc.sound
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            name: "sound",
            value: defaultSound,
            onChange: function onChange(e) {
              return defaultSoundC(e.target.value);
            },
            children: sounds.map(function (sound) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: sound.l,
                selected: sound.l === defaultSound,
                children: sound.n
              }, sound.l, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 34
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 11
          }, this), currentPlaying === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-tooltip": props.desc.test,
            onClick: function onClick() {
              return currentPlayingC(defaultSound);
            },
            children: "\u25BA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-tooltip": props.desc.off,
            onClick: function onClick() {
              return currentPlayingC(null);
            },
            children: "\u25A0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: add,
          children: props.desc.add
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.elements,
      children: alarms.map(function (obj) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Element, _objectSpread(_objectSpread({}, obj), {}, {
          sound: sounds.filter(function (elem) {
            return elem.l === obj.sound;
          })[0].n,
          timerDispatch: timerDispatch,
          changeField: changeField,
          alarmDelete: alarmDelete,
          props: props
        }), obj.id, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 26
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuxiliaryList, {
      changeOnTimer: changeOnTimer,
      changeOnAlarm: changeOnAlarm,
      props: props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Popup, {
      currentAlarms: currentAlarms,
      stopCurrentAlarms: stopCurrentAlarms,
      props: props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 10
  }, this);
} //Лист с разными метками времени для будильника и таймера 

_s(Stopwatch, "v3O2alKZ+sFgnML0pUkzpUfDDq4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Stopwatch;

function AuxiliaryList(_ref2) {
  var _this2 = this;

  var changeOnTimer = _ref2.changeOnTimer,
      changeOnAlarm = _ref2.changeOnAlarm,
      props = _ref2.props;
  var timers = [15, 30, 60, 90, 120, 150, 180, 300, 420, 600, 900, 1200, 1800, 2700, 3600, 7200, 10800, 21600, 32400, 43200, 64800, 86400];
  var now = new Date();
  var h = now.getHours() * 60;
  var m = Math.ceil(now.getMinutes() / 15);
  var alarms = [];

  for (var i = 0; i < 8; i++) {
    alarms.push(h + (m + i) * 15);
  }

  for (var _i = 180; _i < 1500; _i = _i + 60) {
    if (h + _i >= 24 * 60) {
      alarms.push(h - 24 * 60 + _i);
    } else alarms.push(h + _i);
  }

  alarms.map(function (elem) {
    return elem * 60;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.alarmOn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: alarms.map(function (time) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return changeOnAlarm(time);
            },
            children: [time / 60 | 0, ":", time % 60 === 0 ? "00" : time % 60]
          }, time, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 29
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.timerOn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: timers.map(function (timer) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return changeOnTimer(timer);
            },
            children: [timer < 60 ? timer : timer < 3600 ? timer / 60 : timer / 3600, " ", timer < 60 ? props.desc["short"].sec : timer < 3600 ? props.desc["short"].min : props.desc["short"].hours]
          }, timer, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 30
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }, this)]
  }, void 0, true);
} //Оповещение


_c2 = AuxiliaryList;

function Popup(_ref3) {
  var currentAlarms = _ref3.currentAlarms,
      stopCurrentAlarms = _ref3.stopCurrentAlarms,
      props = _ref3.props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "".concat(_styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.popup, " ").concat(currentAlarms ? _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.display : ""),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: currentAlarms ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
          timestamp: Date.now() - currentAlarms + new Date().getTimezoneOffset() * 60000,
          displayMs: false,
          paused: true,
          onlyTime: true,
          labels: props.desc.labels
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.green,
          onClick: stopCurrentAlarms,
          children: props.desc.off
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 205,
    columnNumber: 10
  }, this);
}

_c3 = Popup;

function Element(_ref4) {
  _s2();

  var id = _ref4.id,
      started = _ref4.started,
      timestamp = _ref4.timestamp,
      active = _ref4.active,
      sound = _ref4.sound,
      name = _ref4.name,
      timerDispatch = _ref4.timerDispatch,
      isTimer = _ref4.isTimer,
      changeField = _ref4.changeField,
      alarmDelete = _ref4.alarmDelete,
      finish = _ref4.finish,
      props = _ref4.props;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (active) {
      var timer = setTimeout(wakeup, finish - Date.now());
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [active]);

  function wakeup() {
    changeField(id, 'active', false);
    timerDispatch(id);
  }

  function on() {
    var now = Date.now();
    changeField(id, 'started', now);
    changeField(id, 'finish', getFinishTimestamp(isTimer, now, timestamp));
    changeField(id, 'active', true);
  }

  function off() {
    changeField(id, 'active', false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: isTimer ? props.desc.timer : props.desc.alarm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.startedTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: Date.now() - started + new Date().getTimezoneOffset() * 60000,
        paused: true,
        displayMs: false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.finishTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: Date.now() - finish + new Date().getTimezoneOffset() * 60000,
        paused: true,
        displayMs: false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.sound
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: sound
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.leftTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: active ? finish : null,
        paused: active === false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 5
    }, this), active ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.red,
      onClick: off,
      children: props.desc.off
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.green,
      onClick: on,
      children: props.desc.repeat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.red,
      onClick: function onClick() {
        return alarmDelete(id);
      },
      children: props.desc["delete"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 5
    }, this)]
  }, id, true, {
    fileName: _jsxFileName,
    lineNumber: 240,
    columnNumber: 10
  }, this);
} //Получить финальную метку времени (окончание таймера)


_s2(Element, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c4 = Element;

function getFinishTimestamp(isTimer, started, timestamp) {
  if (isTimer) return started + timestamp + 10;
  var date = new Date(started);
  var s = date.getSeconds();
  var m = date.getMinutes();
  var h = date.getHours();
  var modulo = ((h * 60 + m) * 60 + s) * 1000;

  if (modulo < timestamp) {
    return timestamp - modulo + started;
  } else return timestamp - modulo + 3600000 * 24 + started;
}

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Stopwatch");
$RefreshReg$(_c2, "AuxiliaryList");
$RefreshReg$(_c3, "Popup");
$RefreshReg$(_c4, "Element");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UaW1lci5qcyJdLCJuYW1lcyI6WyJTdG9wd2F0Y2giLCJwcm9wcyIsInVzZVN0YXRlIiwiYWxhcm1zIiwiYWxhcm1zQyIsImRlZmF1bHRTb3VuZCIsImRlZmF1bHRTb3VuZEMiLCJpc1RpbWVyIiwiaXNUaW1lckMiLCJuZXdOYW1lIiwibmV3TmFtZUMiLCJuZXdOYW1lQ2hhbmdlZEJ5VXNlciIsIm5ld05hbWVDaGFuZ2VkQnlVc2VyQyIsIm5ld0giLCJuZXdIQyIsIm5ld01pbiIsIm5ld01pbkMiLCJuZXdTZWMiLCJuZXdTZWNDIiwiY3VycmVudEFsYXJtcyIsImN1cnJlbnRBbGFybXNDIiwiY3VycmVudFBsYXlpbmciLCJjdXJyZW50UGxheWluZ0MiLCJjdXJyZW50UGxheWluZ0VsZW0iLCJjdXJyZW50UGxheWluZ0VsZW1DIiwiYmxvY2siLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJzdG9yZUl0ZW1zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlU291bmQiLCJxdWVyeSIsImFydGljbGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicGF1c2UiLCJuZXdBdWRpbyIsIkF1ZGlvIiwibG9vcCIsInBsYXkiLCJkZXNjIiwidGltZXJPbiIsImhvdXJzIiwibWluIiwiaW5zdGFudCIsInNlYyIsImFsYXJtT24iLCJhZGQiLCJzdGFydGVkIiwiRGF0ZSIsIm5vdyIsInRpbWVzdGFtcCIsInByZXZTdGF0ZSIsImlkIiwiYWN0aXZlIiwibmFtZSIsInNvdW5kIiwiZmluaXNoIiwiZ2V0RmluaXNoVGltZXN0YW1wIiwiYWxhcm1EZWxldGUiLCJmaWx0ZXIiLCJvYmoiLCJjaGFuZ2VGaWVsZCIsImZpZWxkIiwidmFsdWUiLCJtYXAiLCJ0aW1lckRpc3BhdGNoIiwiZWxlbSIsInVuZGVmaW5lZCIsInN0b3BDdXJyZW50QWxhcm1zIiwiY2hhbmdlT25UaW1lciIsInRpbWUiLCJjaGFuZ2VPbkFsYXJtIiwic291bmRzIiwiT2JqZWN0IiwiZW50cmllcyIsImwiLCJuIiwiZ2V0TnVtYmVycyIsIm1heCIsInJlc3VsdCIsImkiLCJwdXNoIiwibmV3TmFtZUNoYW5nZSIsImUiLCJzIiwiY2xvY2siLCJnZXRUaW1lem9uZU9mZnNldCIsImxhYmVscyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJjdXJyZW50Iiwic2VsZWN0MiIsInRpbWVyIiwiYWxhcm0iLCJOdW1iZXIiLCJ0YXJnZXQiLCJ0ZXN0Iiwib2ZmIiwiZWxlbWVudHMiLCJBdXhpbGlhcnlMaXN0IiwidGltZXJzIiwiaCIsImdldEhvdXJzIiwibSIsIk1hdGgiLCJjZWlsIiwiZ2V0TWludXRlcyIsImxpc3QiLCJQb3B1cCIsInBvcHVwIiwiZGlzcGxheSIsImdyZWVuIiwiRWxlbWVudCIsInNldFRpbWVvdXQiLCJ3YWtldXAiLCJjbGVhclRpbWVvdXQiLCJvbiIsInN0YXJ0ZWRUaW1lIiwiZmluaXNoVGltZSIsImxlZnRUaW1lIiwicmVkIiwicmVwZWF0IiwiZGF0ZSIsImdldFNlY29uZHMiLCJtb2R1bG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxrQkFDakJDLHNEQUFRLENBQUMsRUFBRCxDQURTO0FBQUEsTUFDcENDLE1BRG9DO0FBQUEsTUFDNUJDLE9BRDRCOztBQUFBLG1CQUVMRixzREFBUSxDQUFDLGFBQUQsQ0FGSDtBQUFBLE1BRXBDRyxZQUZvQztBQUFBLE1BRXRCQyxhQUZzQjs7QUFBQSxtQkFHZkosc0RBQVEsQ0FBQyxLQUFELENBSE87QUFBQSxNQUdwQ0ssT0FIb0M7QUFBQSxNQUczQkMsUUFI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QUFBLGVBQU1qRSxXQUFXLENBQUNOLEVBQUQsQ0FBakI7QUFBQSxPQUFuQztBQUFBLGdCQUEyRHpELEtBQUssQ0FBQzRDLElBQU47QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCSztBQUFBLEtBQVVhLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBMkJELEMsQ0FDRDs7O0lBakRTK0QsTzs7TUFBQUEsTzs7QUFrRFQsU0FBUzFELGtCQUFULENBQTRCeEQsT0FBNUIsRUFBcUM4QyxPQUFyQyxFQUE4Q0csU0FBOUMsRUFBeUQ7QUFDdkQsTUFBSWpELE9BQUosRUFBYSxPQUFPOEMsT0FBTyxHQUFHRyxTQUFWLEdBQXNCLEVBQTdCO0FBQ2IsTUFBTTJFLElBQUksR0FBRyxJQUFJN0UsSUFBSixDQUFTRCxPQUFULENBQWI7QUFDQSxNQUFNcUMsQ0FBQyxHQUFHeUMsSUFBSSxDQUFDQyxVQUFMLEVBQVY7QUFDQSxNQUFNcEIsQ0FBQyxHQUFHbUIsSUFBSSxDQUFDaEIsVUFBTCxFQUFWO0FBQ0EsTUFBTUwsQ0FBQyxHQUFHcUIsSUFBSSxDQUFDcEIsUUFBTCxFQUFWO0FBQ0EsTUFBTXNCLE1BQU0sR0FBRyxDQUFDLENBQUN2QixDQUFDLEdBQUcsRUFBSixHQUFTRSxDQUFWLElBQWUsRUFBZixHQUFvQnRCLENBQXJCLElBQTBCLElBQXpDOztBQUNBLE1BQUkyQyxNQUFNLEdBQUc3RSxTQUFiLEVBQXdCO0FBQ3RCLFdBQU9BLFNBQVMsR0FBRzZFLE1BQVosR0FBcUJoRixPQUE1QjtBQUNELEdBRkQsTUFFTyxPQUFPRyxTQUFTLEdBQUc2RSxNQUFaLEdBQXNCLFVBQVUsRUFBaEMsR0FBc0NoRixPQUE3QztBQUNSIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS40NDhlMzUzYWVhOGViZGMyMDJkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvdGltZXIuc3R5bCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnLi9TdG9wd2F0Y2gnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9wd2F0Y2goeyBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW2FsYXJtcywgYWxhcm1zQ10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZGVmYXVsdFNvdW5kLCBkZWZhdWx0U291bmRDXSA9IHVzZVN0YXRlKCd0cmFucXVpbGl0eScpXHJcbiAgY29uc3QgW2lzVGltZXIsIGlzVGltZXJDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtuZXdOYW1lLCBuZXdOYW1lQ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbmV3TmFtZUNoYW5nZWRCeVVzZXIsIG5ld05hbWVDaGFuZ2VkQnlVc2VyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbmV3SCwgbmV3SENdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbbmV3TWluLCBuZXdNaW5DXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW25ld1NlYywgbmV3U2VjQ10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbY3VycmVudEFsYXJtcywgY3VycmVudEFsYXJtc0NdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbY3VycmVudFBsYXlpbmcsIGN1cnJlbnRQbGF5aW5nQ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtjdXJyZW50UGxheWluZ0VsZW0sIGN1cnJlbnRQbGF5aW5nRWxlbUNdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxhcm1JdGVtcycpXHJcbiAgICBpZiAoc3RvcmVJdGVtcyA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBhbGFybXNDKEpTT04ucGFyc2Uoc3RvcmVJdGVtcykpXHJcbiAgICBjb25zdCBzdG9yZVNvdW5kID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsYXJtU291bmQnKVxyXG4gICAgaWYgKHN0b3JlU291bmQgPT09IG51bGwpIHJldHVyblxyXG4gICAgZGVmYXVsdFNvdW5kQyhzdG9yZVNvdW5kKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc1RpbWVyQyhyb3V0ZXIucXVlcnkuYXJ0aWNsZSA9PT0gJ3RpbWVyJylcclxuICB9LCBbcm91dGVyLnF1ZXJ5LmFydGljbGVdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxhcm1JdGVtcycsIEpTT04uc3RyaW5naWZ5KGFsYXJtcykpXHJcbiAgfSwgW2FsYXJtc10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGFybVNvdW5kJywgZGVmYXVsdFNvdW5kKVxyXG4gIH0sIFtkZWZhdWx0U291bmRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBsYXlpbmdFbGVtICE9PSBudWxsKSBjdXJyZW50UGxheWluZ0VsZW0ucGF1c2UoKVxyXG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nID09PSBudWxsKSByZXR1cm5cclxuICAgIGNvbnN0IG5ld0F1ZGlvID0gbmV3IEF1ZGlvKGAvc291bmRzLyR7Y3VycmVudFBsYXlpbmd9Lm1wM2ApXHJcbiAgICBuZXdBdWRpby5sb29wID0gdHJ1ZVxyXG4gICAgbmV3QXVkaW8ucGxheSgpXHJcbiAgICBjdXJyZW50UGxheWluZ0VsZW1DKG5ld0F1ZGlvKVxyXG4gIH0sIFtjdXJyZW50UGxheWluZ10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChuZXdOYW1lQ2hhbmdlZEJ5VXNlcikgcmV0dXJuXHJcbiAgICBpZiAoaXNUaW1lcikge1xyXG4gICAgICBuZXdOYW1lQyhgJHtwcm9wcy5kZXNjLnRpbWVyT259ICR7bmV3SCA9PT0gMCA/IGBgIDogYCR7bmV3SCA8IDEwID8gXCIwXCIgKyBuZXdIIDogbmV3SH0gJHtwcm9wcy5kZXNjLnNob3J0LmhvdXJzfS4gYH0ke25ld01pbiA9PT0gMCA/IGBgIDogYCR7bmV3TWluIDwgMTAgPyBcIjBcIiArIG5ld01pbiA6IG5ld01pbn0gJHtwcm9wcy5kZXNjLnNob3J0Lm1pbn0uIGB9JHtuZXdTZWMgPT09IDAgPyAobmV3SCAhPT0gMCB8fCBuZXdNaW4gIT09IDAgPyBgYCA6IHByb3BzLmRlc2Muc2hvcnQuaW5zdGFudCkgOiBgJHtuZXdTZWMgPCAxMCA/IFwiMFwiICsgbmV3U2VjIDogbmV3U2VjfSAke3Byb3BzLmRlc2Muc2hvcnQuc2VjfS5gfWApXHJcbiAgICB9IGVsc2VcclxuICAgICAgbmV3TmFtZUMoYCR7cHJvcHMuZGVzYy5hbGFybU9ufSAke25ld0ggPCAxMCA/IFwiMFwiICsgbmV3SCA6IG5ld0h9OiR7bmV3TWluIDwgMTAgPyBcIjBcIiArIG5ld01pbiA6IG5ld01pbn0ke25ld1NlYyA9PT0gMCA/IGBgIDogYDoke25ld1NlYyA8IDEwID8gXCIwXCIgKyBuZXdTZWMgOiBuZXdTZWN9YH1gKVxyXG4gIH0sIFtuZXdILCBuZXdNaW4sIG5ld1NlYywgaXNUaW1lcl0pXHJcblxyXG4gIGZ1bmN0aW9uIGFkZCgpIHtcclxuICAgIGNvbnN0IHN0YXJ0ZWQgPSBEYXRlLm5vdygpXHJcbiAgICBjb25zdCB0aW1lc3RhbXAgPSAoKG5ld01pbiArIG5ld0ggKiA2MCkgKiA2MCArIG5ld1NlYykgKiAxMDAwXHJcbiAgICBhbGFybXNDKHByZXZTdGF0ZSA9PiBbe1xyXG4gICAgICBpZDogc3RhcnRlZCxcclxuICAgICAgc3RhcnRlZCxcclxuICAgICAgdGltZXN0YW1wLFxyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIG5hbWU6IG5ld05hbWUsXHJcbiAgICAgIGlzVGltZXI6IGlzVGltZXIsXHJcbiAgICAgIHNvdW5kOiBkZWZhdWx0U291bmQsXHJcbiAgICAgIGZpbmlzaDogZ2V0RmluaXNoVGltZXN0YW1wKGlzVGltZXIsIHN0YXJ0ZWQsIHRpbWVzdGFtcCksXHJcbiAgICB9LCAuLi5wcmV2U3RhdGVdKVxyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKGZhbHNlKVxyXG4gIH1cclxuICBmdW5jdGlvbiBhbGFybURlbGV0ZShpZCkge1xyXG4gICAgYWxhcm1zQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLmZpbHRlcihvYmogPT4gb2JqLmlkICE9PSBpZCkpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZUZpZWxkKGlkLCBmaWVsZCwgdmFsdWUpIHtcclxuICAgIGFsYXJtc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZS5tYXAob2JqID0+IG9iai5pZCA9PT0gaWQgPyB7IC4uLm9iaiwgW2ZpZWxkXTogdmFsdWUgfSA6IG9iaikpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHRpbWVyRGlzcGF0Y2goaWQpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBhbGFybXMuZmlsdGVyKG9iaiA9PiBvYmouaWQgPT09IGlkKVswXVxyXG4gICAgaWYgKGVsZW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICBjdXJyZW50UGxheWluZ0MoZWxlbS5zb3VuZClcclxuICAgIGN1cnJlbnRBbGFybXNDKGVsZW0uZmluaXNoKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzdG9wQ3VycmVudEFsYXJtcygpIHtcclxuICAgIGN1cnJlbnRBbGFybXNDKG51bGwpXHJcbiAgICBjdXJyZW50UGxheWluZ0MobnVsbClcclxuICB9XHJcbiAgZnVuY3Rpb24gY2hhbmdlT25UaW1lcih0aW1lKSB7XHJcbiAgICBuZXdOYW1lQ2hhbmdlZEJ5VXNlckMoZmFsc2UpXHJcbiAgICBpc1RpbWVyQyh0cnVlKVxyXG4gICAgbmV3SEMoKHRpbWUgLyAzNjAwKSB8IDApXHJcbiAgICBuZXdNaW5DKCh0aW1lIC8gNjAgJSA2MCkgfCAwKVxyXG4gICAgbmV3U2VjQygodGltZSAlIDYwKSB8IDApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZU9uQWxhcm0odGltZSkge1xyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKGZhbHNlKVxyXG4gICAgaXNUaW1lckMoZmFsc2UpXHJcbiAgICBuZXdIQygodGltZSAvIDYwKSB8IDApXHJcbiAgICBuZXdNaW5DKCh0aW1lICUgNjApIHwgMClcclxuICAgIG5ld1NlY0MoMClcclxuICB9XHJcbiAgY29uc3Qgc291bmRzID0gT2JqZWN0LmVudHJpZXMocHJvcHMuc291bmQpLm1hcChvYmogPT4gKHsgbDogb2JqWzBdLCBuOiBvYmpbMV0gfSkpXHJcbiAgZnVuY3Rpb24gZ2V0TnVtYmVycyhtYXgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld05hbWVDaGFuZ2UoZSkge1xyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKHRydWUpXHJcbiAgICBuZXdOYW1lQyhlLnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9IHJlZj17YmxvY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2xvY2t9PlxyXG4gICAgICA8Q2xvY2sgdGltZXN0YW1wPXtuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gcGF1c2VkPXtmYWxzZX0gZGlzcGxheU1zPXtmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICAgIDxkaXY+e25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgIDxGdWxsc2NyZWVuIGVsZW09e2Jsb2NrLmN1cnJlbnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5ld30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1RpbWVyID8gJycgOiBzLnNlbGVjdDJ9PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaXNUaW1lckModHJ1ZSl9Pntwcm9wcy5kZXNjLnRpbWVyfTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaXNUaW1lckMoZmFsc2UpfT57cHJvcHMuZGVzYy5hbGFybX08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9uZy5ob3Vyc308L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3SEMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMCA/IHByZXZTdGF0ZSAtIDEgOiAyNCl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld0h9IG9uQ2hhbmdlPXtlID0+IG5ld0hDKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT4ge2dldE51bWJlcnMoMjQpLm1hcChuID0+IDxvcHRpb24ga2V5PXtufSB2YWx1ZT17bn0+e259PC9vcHRpb24+KX0gPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld0hDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDI0ID8gcHJldlN0YXRlICsgMSA6IDApfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9uZy5taW59PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld01pbkMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMCA/IHByZXZTdGF0ZSAtIDEgOiA1OSl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld01pbn0gb25DaGFuZ2U9e2UgPT4gbmV3TWluQyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+IHtnZXROdW1iZXJzKDYwKS5tYXAobiA9PiA8b3B0aW9uIGtleT17bn0gdmFsdWU9e259PntufTwvb3B0aW9uPil9IDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdNaW5DKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDU5ID8gcHJldlN0YXRlICsgMSA6IDApfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9uZy5zZWN9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld1NlY0MocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMCA/IHByZXZTdGF0ZSAtIDEgOiA1OSl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld1NlY30gb25DaGFuZ2U9e2UgPT4gbmV3U2VjQyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+IHtnZXROdW1iZXJzKDYwKS5tYXAobiA9PiA8b3B0aW9uIGtleT17bn0gdmFsdWU9e259PntufTwvb3B0aW9uPil9IDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdTZWNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDU5ID8gcHJldlN0YXRlICsgMSA6IDApfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubmFtZX08L2Rpdj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3TmFtZX0gb25DaGFuZ2U9e25ld05hbWVDaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLnNvdW5kfTwvZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwic291bmRcIiB2YWx1ZT17ZGVmYXVsdFNvdW5kfSBvbkNoYW5nZT17ZSA9PiBkZWZhdWx0U291bmRDKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgIHtzb3VuZHMubWFwKHNvdW5kID0+IDxvcHRpb24ga2V5PXtzb3VuZC5sfSB2YWx1ZT17c291bmQubH0gc2VsZWN0ZWQ9e3NvdW5kLmwgPT09IGRlZmF1bHRTb3VuZH0gPntzb3VuZC5ufTwvb3B0aW9uPil9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIHtjdXJyZW50UGxheWluZyA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRlc3R9IG9uQ2xpY2s9eygpID0+IGN1cnJlbnRQbGF5aW5nQyhkZWZhdWx0U291bmQpfT7ilro8L2J1dHRvbj4gOlxyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5vZmZ9IG9uQ2xpY2s9eygpID0+IGN1cnJlbnRQbGF5aW5nQyhudWxsKX0+4pagPC9idXR0b24+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGR9Pntwcm9wcy5kZXNjLmFkZH08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmVsZW1lbnRzfT5cclxuICAgICAge2FsYXJtcy5tYXAob2JqID0+IDxFbGVtZW50IGtleT17b2JqLmlkfSB7Li4ub2JqfSBzb3VuZD17c291bmRzLmZpbHRlcihlbGVtID0+IGVsZW0ubCA9PT0gb2JqLnNvdW5kKVswXS5ufSB0aW1lckRpc3BhdGNoPXt0aW1lckRpc3BhdGNofSBjaGFuZ2VGaWVsZD17Y2hhbmdlRmllbGR9IGFsYXJtRGVsZXRlPXthbGFybURlbGV0ZX0gcHJvcHM9e3Byb3BzfSAvPil9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxBdXhpbGlhcnlMaXN0IGNoYW5nZU9uVGltZXI9e2NoYW5nZU9uVGltZXJ9IGNoYW5nZU9uQWxhcm09e2NoYW5nZU9uQWxhcm19IHByb3BzPXtwcm9wc30gLz5cclxuICAgIDxQb3B1cCBjdXJyZW50QWxhcm1zPXtjdXJyZW50QWxhcm1zfSBzdG9wQ3VycmVudEFsYXJtcz17c3RvcEN1cnJlbnRBbGFybXN9IHByb3BzPXtwcm9wc30gLz5cclxuICA8L2Rpdj5cclxufVxyXG4vL9Cb0LjRgdGCINGBINGA0LDQt9C90YvQvNC4INC80LXRgtC60LDQvNC4INCy0YDQtdC80LXQvdC4INC00LvRjyDQsdGD0LTQuNC70YzQvdC40LrQsCDQuCDRgtCw0LnQvNC10YDQsCBcclxuZnVuY3Rpb24gQXV4aWxpYXJ5TGlzdCh7IGNoYW5nZU9uVGltZXIsIGNoYW5nZU9uQWxhcm0sIHByb3BzIH0pIHtcclxuICBjb25zdCB0aW1lcnMgPSBbMTUsIDMwLCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDMwMCwgNDIwLCA2MDAsIDkwMCwgMTIwMCwgMTgwMCwgMjcwMCwgMzYwMCwgNzIwMCwgMTA4MDAsIDIxNjAwLCAzMjQwMCwgNDMyMDAsIDY0ODAwLCA4NjQwMF1cclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgaCA9IG5vdy5nZXRIb3VycygpICogNjBcclxuICBjb25zdCBtID0gTWF0aC5jZWlsKG5vdy5nZXRNaW51dGVzKCkgLyAxNSlcclxuICBjb25zdCBhbGFybXMgPSBbXVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICBhbGFybXMucHVzaChoICsgKG0gKyBpKSAqIDE1KVxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMTgwOyBpIDwgMTUwMDsgaSA9IGkgKyA2MCkge1xyXG4gICAgaWYgKGggKyBpID49IDI0ICogNjApIHtcclxuICAgICAgYWxhcm1zLnB1c2goaCAtIDI0ICogNjAgKyBpKVxyXG4gICAgfSBlbHNlIGFsYXJtcy5wdXNoKGggKyBpKVxyXG4gIH1cclxuICBhbGFybXMubWFwKGVsZW0gPT4gZWxlbSAqIDYwKVxyXG4gIHJldHVybiA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MuYWxhcm1Pbn08L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YWxhcm1zLm1hcCh0aW1lID0+IDxidXR0b24gb25DbGljaz17KCkgPT4gY2hhbmdlT25BbGFybSh0aW1lKX0ga2V5PXt0aW1lfT57KHRpbWUgLyA2MCkgfCAwfTp7dGltZSAlIDYwID09PSAwID8gYDAwYCA6IHRpbWUgJSA2MH08L2J1dHRvbj4pfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxpc3R9PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLnRpbWVyT259PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RpbWVycy5tYXAodGltZXIgPT4gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VPblRpbWVyKHRpbWVyKX0ga2V5PXt0aW1lcn0+e3RpbWVyIDwgNjAgPyB0aW1lciA6IHRpbWVyIDwgMzYwMCA/IHRpbWVyIC8gNjAgOiB0aW1lciAvIDM2MDB9IHt0aW1lciA8IDYwID8gcHJvcHMuZGVzYy5zaG9ydC5zZWMgOiB0aW1lciA8IDM2MDAgPyBwcm9wcy5kZXNjLnNob3J0Lm1pbiA6IHByb3BzLmRlc2Muc2hvcnQuaG91cnN9PC9idXR0b24+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8Lz5cclxufVxyXG4vL9Ce0L/QvtCy0LXRidC10L3QuNC1XHJcbmZ1bmN0aW9uIFBvcHVwKHsgY3VycmVudEFsYXJtcywgc3RvcEN1cnJlbnRBbGFybXMsIHByb3BzIH0pIHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake3MucG9wdXB9ICR7Y3VycmVudEFsYXJtcyA/IHMuZGlzcGxheSA6IFwiXCJ9YH0+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjdXJyZW50QWxhcm1zID9cclxuICAgICAgICAgIDxDbG9jayB0aW1lc3RhbXA9e0RhdGUubm93KCkgLSBjdXJyZW50QWxhcm1zICsgbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDB9IGRpc3BsYXlNcz17ZmFsc2V9IHBhdXNlZD17dHJ1ZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuZ3JlZW59IG9uQ2xpY2s9e3N0b3BDdXJyZW50QWxhcm1zfT57cHJvcHMuZGVzYy5vZmZ9PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVsZW1lbnQoeyBpZCwgc3RhcnRlZCwgdGltZXN0YW1wLCBhY3RpdmUsIHNvdW5kLCBuYW1lLCB0aW1lckRpc3BhdGNoLCBpc1RpbWVyLCBjaGFuZ2VGaWVsZCwgYWxhcm1EZWxldGUsIGZpbmlzaCwgcHJvcHMgfSkge1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQod2FrZXVwLCBmaW5pc2ggLSBEYXRlLm5vdygpKVxyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmVdKVxyXG4gIGZ1bmN0aW9uIHdha2V1cCgpIHtcclxuICAgIGNoYW5nZUZpZWxkKGlkLCAnYWN0aXZlJywgZmFsc2UpXHJcbiAgICB0aW1lckRpc3BhdGNoKGlkKVxyXG4gIH1cclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcclxuICAgIGNoYW5nZUZpZWxkKGlkLCAnc3RhcnRlZCcsIG5vdylcclxuICAgIGNoYW5nZUZpZWxkKGlkLCAnZmluaXNoJywgZ2V0RmluaXNoVGltZXN0YW1wKGlzVGltZXIsIG5vdywgdGltZXN0YW1wKSlcclxuICAgIGNoYW5nZUZpZWxkKGlkLCAnYWN0aXZlJywgdHJ1ZSlcclxuICB9XHJcbiAgZnVuY3Rpb24gb2ZmKCkge1xyXG4gICAgY2hhbmdlRmllbGQoaWQsICdhY3RpdmUnLCBmYWxzZSlcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYga2V5PXtpZH0+XHJcbiAgICA8ZGl2Pntpc1RpbWVyID8gcHJvcHMuZGVzYy50aW1lciA6IHByb3BzLmRlc2MuYWxhcm19PC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICB7bmFtZX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5zdGFydGVkVGltZX08L2Rpdj5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17RGF0ZS5ub3coKSAtIHN0YXJ0ZWQgKyBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gcGF1c2VkPXt0cnVlfSBkaXNwbGF5TXM9e2ZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5maW5pc2hUaW1lfTwvZGl2PlxyXG4gICAgICA8Q2xvY2sgdGltZXN0YW1wPXtEYXRlLm5vdygpIC0gZmluaXNoICsgbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDB9IHBhdXNlZD17dHJ1ZX0gZGlzcGxheU1zPXtmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2Muc291bmR9PC9kaXY+XHJcbiAgICAgIDxkaXY+e3NvdW5kfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxlZnRUaW1lfTwvZGl2PlxyXG4gICAgICA8Q2xvY2sgdGltZXN0YW1wPXthY3RpdmUgPyBmaW5pc2ggOiBudWxsfSBwYXVzZWQ9e2FjdGl2ZSA9PT0gZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7YWN0aXZlID9cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MucmVkfSBvbkNsaWNrPXtvZmZ9Pntwcm9wcy5kZXNjLm9mZn08L2J1dHRvbj4gOlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5ncmVlbn0gb25DbGljaz17b259Pntwcm9wcy5kZXNjLnJlcGVhdH08L2J1dHRvbj5cclxuICAgIH1cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLnJlZH0gb25DbGljaz17KCkgPT4gYWxhcm1EZWxldGUoaWQpfT57cHJvcHMuZGVzYy5kZWxldGV9PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbn1cclxuLy/Qn9C+0LvRg9GH0LjRgtGMINGE0LjQvdCw0LvRjNC90YPRjiDQvNC10YLQutGDINCy0YDQtdC80LXQvdC4ICjQvtC60L7QvdGH0LDQvdC40LUg0YLQsNC50LzQtdGA0LApXHJcbmZ1bmN0aW9uIGdldEZpbmlzaFRpbWVzdGFtcChpc1RpbWVyLCBzdGFydGVkLCB0aW1lc3RhbXApIHtcclxuICBpZiAoaXNUaW1lcikgcmV0dXJuIHN0YXJ0ZWQgKyB0aW1lc3RhbXAgKyAxMFxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzdGFydGVkKVxyXG4gIGNvbnN0IHMgPSBkYXRlLmdldFNlY29uZHMoKVxyXG4gIGNvbnN0IG0gPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gIGNvbnN0IGggPSBkYXRlLmdldEhvdXJzKClcclxuICBjb25zdCBtb2R1bG8gPSAoKGggKiA2MCArIG0pICogNjAgKyBzKSAqIDEwMDBcclxuICBpZiAobW9kdWxvIDwgdGltZXN0YW1wKSB7XHJcbiAgICByZXR1cm4gdGltZXN0YW1wIC0gbW9kdWxvICsgc3RhcnRlZFxyXG4gIH0gZWxzZSByZXR1cm4gdGltZXN0YW1wIC0gbW9kdWxvICsgKDM2MDAwMDAgKiAyNCkgKyBzdGFydGVkXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9