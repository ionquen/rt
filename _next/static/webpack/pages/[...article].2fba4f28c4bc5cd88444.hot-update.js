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







var timers = [15, 30, 60, 90, 120, 150, 180, 300, 420, 600, 900, 1200, 1800, 2700, 3600, 7200, 10800, 21600, 32400, 43200, 64800, 86400];
var now = new Date();
var h = now.getHours() * 60;
var alarms = [];

for (var i = 0; i < 96; i++) {
  if (h + i * 15 >= 24 * 60) {
    alarms.push(h - 24 * 60 + i * 15);
  } else alarms.push(h + i * 15);
}

function Stopwatch(_ref) {
  _s();

  var _this = this;

  var props = _ref.props,
      slug = _ref.slug;

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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.value.hours !== undefined ? props.value.hours : 0),
      newH = _useState6[0],
      newHC = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.value.min !== undefined ? props.value.min : 0),
      newMin = _useState7[0],
      newMinC = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.value.sec !== undefined ? props.value.sec : 0),
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
    isTimerC(slug === 'timer');
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

    for (var _i = 0; _i < max; _i++) {
      result.push(_i);
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
        lineNumber: 128,
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
        lineNumber: 129,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
        elem: block.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
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
          lineNumber: 134,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return isTimerC(false);
          },
          children: props.desc.alarm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc["long"].hours
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return newHC(function (prevState) {
                return prevState !== 0 ? prevState - 1 : 23;
              });
            },
            children: "-"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
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
                lineNumber: 141,
                columnNumber: 104
              }, _this);
            }), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return newHC(function (prevState) {
                return prevState !== 23 ? prevState + 1 : 0;
              });
            },
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc["long"].min
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
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
            lineNumber: 146,
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
                lineNumber: 147,
                columnNumber: 108
              }, _this);
            }), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
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
            lineNumber: 148,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc["long"].sec
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
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
            lineNumber: 152,
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
                lineNumber: 153,
                columnNumber: 108
              }, _this);
            }), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
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
            lineNumber: 154,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: newName,
          onChange: newNameChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc.sound
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
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
                children: sound.n
              }, sound.l, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 34
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 11
          }, this), currentPlaying === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-tooltip": props.desc.test,
            onClick: function onClick() {
              return currentPlayingC(defaultSound);
            },
            children: "\u25BA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-tooltip": props.desc.off,
            onClick: function onClick() {
              return currentPlayingC(null);
            },
            children: "\u25A0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: add,
          children: props.desc.add
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
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
          lineNumber: 176,
          columnNumber: 26
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuxiliaryList, {
      changeOnTimer: changeOnTimer,
      changeOnAlarm: changeOnAlarm,
      props: props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Popup, {
      currentAlarms: currentAlarms,
      stopCurrentAlarms: stopCurrentAlarms,
      props: props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 10
  }, this);
} //Лист с разными метками времени для будильника и таймера 

_s(Stopwatch, "FLDFckcrwJL8jADPjckmmjUxtFk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Stopwatch;

function AuxiliaryList(_ref2) {
  var _this2 = this;

  var changeOnTimer = _ref2.changeOnTimer,
      changeOnAlarm = _ref2.changeOnAlarm,
      props = _ref2.props;
  var m = Math.ceil(now.getMinutes() / 15);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.alarmOn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
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
            lineNumber: 189,
            columnNumber: 29
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.timerOn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
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
            lineNumber: 196,
            columnNumber: 30
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
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
          lineNumber: 207,
          columnNumber: 11
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.green,
          onClick: stopCurrentAlarms,
          children: props.desc.off
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 203,
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
      lineNumber: 239,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.startedTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: Date.now() - started + new Date().getTimezoneOffset() * 60000,
        paused: true,
        displayMs: false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.finishTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: Date.now() - finish + new Date().getTimezoneOffset() * 60000,
        paused: true,
        displayMs: false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.sound
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: sound
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.leftTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: active ? finish : null,
        paused: active === false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 5
    }, this), active ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.red,
      onClick: off,
      children: props.desc.off
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 7
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.green,
      onClick: on,
      children: props.desc.repeat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.red,
      onClick: function onClick() {
        return alarmDelete(id);
      },
      children: props.desc["delete"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 5
    }, this)]
  }, id, true, {
    fileName: _jsxFileName,
    lineNumber: 238,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UaW1lci5qcyJdLCJuYW1lcyI6WyJ0aW1lcnMiLCJub3ciLCJEYXRlIiwiaCIsImdldEhvdXJzIiwiYWxhcm1zIiwiaSIsInB1c2giLCJTdG9wd2F0Y2giLCJwcm9wcyIsInNsdWciLCJ1c2VTdGF0ZSIsImFsYXJtc0MiLCJkZWZhdWx0U291bmQiLCJkZWZhdWx0U291bmRDIiwiaXNUaW1lciIsImlzVGltZXJDIiwibmV3TmFtZSIsIm5ld05hbWVDIiwibmV3TmFtZUNoYW5nZWRCeVVzZXIiLCJuZXdOYW1lQ2hhbmdlZEJ5VXNlckMiLCJ2YWx1ZSIsImhvdXJzIiwidW5kZWZpbmVkIiwibmV3SCIsIm5ld0hDIiwibWluIiwibmV3TWluIiwibmV3TWluQyIsInNlYyIsIm5ld1NlYyIsIm5ld1NlY0MiLCJjdXJyZW50QWxhcm1zIiwiY3VycmVudEFsYXJtc0MiLCJjdXJyZW50UGxheWluZyIsImN1cnJlbnRQbGF5aW5nQyIsImN1cnJlbnRQbGF5aW5nRWxlbSIsImN1cnJlbnRQbGF5aW5nRWxlbUMiLCJibG9jayIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInN0b3JlSXRlbXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RvcmVTb3VuZCIsInF1ZXJ5IiwiYXJ0aWNsZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwYXVzZSIsIm5ld0F1ZGlvIiwiQXVkaW8iLCJsb29wIiwicGxheSIsImRlc2MiLCJ0aW1lck9uIiwiaW5zdGFudCIsImFsYXJtT24iLCJhZGQiLCJzdGFydGVkIiwidGltZXN0YW1wIiwicHJldlN0YXRlIiwiaWQiLCJhY3RpdmUiLCJuYW1lIiwic291bmQiLCJmaW5pc2giLCJnZXRGaW5pc2hUaW1lc3RhbXAiLCJhbGFybURlbGV0ZSIsImZpbHRlciIsIm9iaiIsImNoYW5nZUZpZWxkIiwiZmllbGQiLCJtYXAiLCJ0aW1lckRpc3BhdGNoIiwiZWxlbSIsInN0b3BDdXJyZW50QWxhcm1zIiwiY2hhbmdlT25UaW1lciIsInRpbWUiLCJjaGFuZ2VPbkFsYXJtIiwic291bmRzIiwiT2JqZWN0IiwiZW50cmllcyIsImwiLCJuIiwiZ2V0TnVtYmVycyIsIm1heCIsInJlc3VsdCIsIm5ld05hbWVDaGFuZ2UiLCJlIiwicyIsImNsb2NrIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJsYWJlbHMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiY3VycmVudCIsInNlbGVjdDIiLCJ0aW1lciIsImFsYXJtIiwiTnVtYmVyIiwidGFyZ2V0IiwidGVzdCIsIm9mZiIsImVsZW1lbnRzIiwiQXV4aWxpYXJ5TGlzdCIsIm0iLCJNYXRoIiwiY2VpbCIsImdldE1pbnV0ZXMiLCJsaXN0IiwiUG9wdXAiLCJwb3B1cCIsImRpc3BsYXkiLCJncmVlbiIsIkVsZW1lbnQiLCJzZXRUaW1lb3V0Iiwid2FrZXVwIiwiY2xlYXJUaW1lb3V0Iiwib24iLCJzdGFydGVkVGltZSIsImZpbmlzaFRpbWUiLCJsZWZ0VGltZSIsInJlZCIsInJlcGVhdCIsImRhdGUiLCJnZXRTZWNvbmRzIiwibW9kdWxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckMsRUFBMEMsR0FBMUMsRUFBK0MsR0FBL0MsRUFBb0QsSUFBcEQsRUFBMEQsSUFBMUQsRUFBZ0UsSUFBaEUsRUFBc0UsSUFBdEUsRUFBNEUsSUFBNUUsRUFBa0YsS0FBbEYsRUFBeUYsS0FBekYsRUFBZ0csS0FBaEcsRUFBdUcsS0FBdkcsRUFBOEcsS0FBOUcsRUFBcUgsS0FBckgsQ0FBZjtBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVo7QUFDQSxJQUFNQyxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csUUFBSixLQUFpQixFQUEzQjtBQUNBLElBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixNQUFJSCxDQUFDLEdBQUdHLENBQUMsR0FBRyxFQUFSLElBQWMsS0FBSyxFQUF2QixFQUEyQjtBQUN6QkQsVUFBTSxDQUFDRSxJQUFQLENBQVlKLENBQUMsR0FBRyxLQUFLLEVBQVQsR0FBY0csQ0FBQyxHQUFHLEVBQTlCO0FBQ0QsR0FGRCxNQUVPRCxNQUFNLENBQUNFLElBQVAsQ0FBWUosQ0FBQyxHQUFHRyxDQUFDLEdBQUcsRUFBcEI7QUFDUjs7QUFFYyxTQUFTRSxTQUFULE9BQW9DO0FBQUE7O0FBQUE7O0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUN2QkMsc0RBQVEsQ0FBQyxFQUFELENBRGU7QUFBQSxNQUMxQ04sTUFEMEM7QUFBQSxNQUNsQ08sT0FEa0M7O0FBQUEsbUJBRVhELHNEQUFRLENBQUMsYUFBRCxDQUZHO0FBQUEsTUFFMUNFLFlBRjBDO0FBQUEsTUFFNUJDLGFBRjRCOztBQUFBLG1CQUdyQkgsc0RBQVEsQ0FBQyxLQUFELENBSGE7QUFBQSxNQUcxQ0ksT0FIMEM7QUFBQSxNQUdqQ0MsUUFIaUM7O0FBQUEsbUJBSXJCTCxzREFBUSxDQUFDLEVBQUQsQ0FKYTtBQUFBLE1BSTFDTSxPQUowQztBQUFBLE1BSWpDQyxRQUppQzs7QUFBQSxtQkFLS1Asc0RBQVEsQ0FBQyxLQUFELENBTGI7QUFBQSxNQUsxQ1Esb0JBTDBDO0FBQUEsTUFLcEJDLHFCQUxvQjs7QUFBQSxtQkFNM0JULHNEQUFRLENBQUNGLEtBQUssQ0FBQ1ksS0FBTixDQUFZQyxLQUFaLEtBQXNCQyxTQUF0QixHQUFrQ2QsS0FBSyxDQUFDWSxLQUFOLENBQVlDLEtBQTlDLEdBQXNELENBQXZELENBTm1CO0FBQUEsTUFNMUNFLElBTjBDO0FBQUEsTUFNcENDLEtBTm9DOztBQUFBLG1CQU92QmQsc0RBQVEsQ0FBQ0YsS0FBSyxDQUFDWSxLQUFOLENBQVlLLEdBQVosS0FBb0JILFNBQXBCLEdBQWdDZCxLQUFLLENBQUNZLEtBQU4sQ0FBWUssR0FBNUMsR0FBa0QsQ0FBbkQsQ0FQZTtBQUFBLE1BTzFDQyxNQVAwQztBQUFBLE1BT2xDQyxPQVBrQzs7QUFBQSxtQkFRdkJqQixzREFBUSxDQUFDRixLQUFLLENBQUNZLEtBQU4sQ0FBWVEsR0FBWixLQUFvQk4sU0FBcEIsR0FBZ0NkLEtBQUssQ0FBQ1ksS0FBTixDQUFZUSxHQUE1QyxHQUFrRCxDQUFuRCxDQVJlO0FBQUEsTUFRMUNDLE1BUjBDO0FBQUEsTUFRbENDLE9BUmtDOztBQUFBLG1CQVVUcEIsc0RBQVEsQ0FBQyxJQUFELENBVkM7QUFBQSxNQVUxQ3FCLGFBVjBDO0FBQUEsTUFVM0JDLGNBVjJCOztBQUFBLG9CQVdQdEIsc0RBQVEsQ0FBQyxJQUFELENBWEQ7QUFBQSxNQVcxQ3VCLGNBWDBDO0FBQUEsTUFXMUJDLGVBWDBCOztBQUFBLG9CQVlDeEIsc0RBQVEsQ0FBQyxJQUFELENBWlQ7QUFBQSxNQVkxQ3lCLGtCQVowQztBQUFBLE1BWXRCQyxtQkFac0I7O0FBY2pELE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxDQUFDLElBQUQsQ0FBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsQ0FBbkI7QUFDQSxRQUFJRixVQUFVLEtBQUssSUFBbkIsRUFBeUI7QUFDekIvQixXQUFPLENBQUNrQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osVUFBWCxDQUFELENBQVA7QUFDQSxRQUFNSyxVQUFVLEdBQUdKLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQUFuQjtBQUNBLFFBQUlHLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN6QmxDLGlCQUFhLENBQUNrQyxVQUFELENBQWI7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBUUFOLHlEQUFTLENBQUMsWUFBTTtBQUNkMUIsWUFBUSxDQUFDTixJQUFJLEtBQUssT0FBVixDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUM4QixNQUFNLENBQUNTLEtBQVAsQ0FBYUMsT0FBZCxDQUZNLENBQVQ7QUFHQVIseURBQVMsQ0FBQyxZQUFNO0FBQ2RFLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUNMLElBQUksQ0FBQ00sU0FBTCxDQUFlL0MsTUFBZixDQUFuQztBQUNELEdBRlEsRUFFTixDQUFDQSxNQUFELENBRk0sQ0FBVDtBQUdBcUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RFLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUN0QyxZQUFuQztBQUNELEdBRlEsRUFFTixDQUFDQSxZQUFELENBRk0sQ0FBVDtBQUdBNkIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSU4sa0JBQWtCLEtBQUssSUFBM0IsRUFBaUNBLGtCQUFrQixDQUFDaUIsS0FBbkI7QUFDakMsUUFBSW5CLGNBQWMsS0FBSyxJQUF2QixFQUE2QjtBQUM3QixRQUFNb0IsUUFBUSxHQUFHLElBQUlDLEtBQUosbUJBQXFCckIsY0FBckIsVUFBakI7QUFDQW9CLFlBQVEsQ0FBQ0UsSUFBVCxHQUFnQixJQUFoQjtBQUNBRixZQUFRLENBQUNHLElBQVQ7QUFDQXBCLHVCQUFtQixDQUFDaUIsUUFBRCxDQUFuQjtBQUNELEdBUFEsRUFPTixDQUFDcEIsY0FBRCxDQVBNLENBQVQ7QUFRQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSXZCLG9CQUFKLEVBQTBCOztBQUMxQixRQUFJSixPQUFKLEVBQWE7QUFDWEcsY0FBUSxXQUFJVCxLQUFLLENBQUNpRCxJQUFOLENBQVdDLE9BQWYsY0FBMEJuQyxJQUFJLEtBQUssQ0FBVCxrQkFBcUJBLElBQUksR0FBRyxFQUFQLEdBQVksTUFBTUEsSUFBbEIsR0FBeUJBLElBQTlDLGNBQXNEZixLQUFLLENBQUNpRCxJQUFOLFVBQWlCcEMsS0FBdkUsT0FBMUIsU0FBNkdLLE1BQU0sS0FBSyxDQUFYLGtCQUF1QkEsTUFBTSxHQUFHLEVBQVQsR0FBYyxNQUFNQSxNQUFwQixHQUE2QkEsTUFBcEQsY0FBOERsQixLQUFLLENBQUNpRCxJQUFOLFVBQWlCaEMsR0FBL0UsT0FBN0csU0FBc01JLE1BQU0sS0FBSyxDQUFYLEdBQWdCTixJQUFJLEtBQUssQ0FBVCxJQUFjRyxNQUFNLEtBQUssQ0FBekIsUUFBa0NsQixLQUFLLENBQUNpRCxJQUFOLFVBQWlCRSxPQUFuRSxhQUFpRjlCLE1BQU0sR0FBRyxFQUFULEdBQWMsTUFBTUEsTUFBcEIsR0FBNkJBLE1BQTlHLGNBQXdIckIsS0FBSyxDQUFDaUQsSUFBTixVQUFpQjdCLEdBQXpJLE1BQXRNLEVBQVI7QUFDRCxLQUZELE1BR0VYLFFBQVEsV0FBSVQsS0FBSyxDQUFDaUQsSUFBTixDQUFXRyxPQUFmLGNBQTBCckMsSUFBSSxHQUFHLEVBQVAsR0FBWSxNQUFNQSxJQUFsQixHQUF5QkEsSUFBbkQsY0FBMkRHLE1BQU0sR0FBRyxFQUFULEdBQWMsTUFBTUEsTUFBcEIsR0FBNkJBLE1BQXhGLFNBQWlHRyxNQUFNLEtBQUssQ0FBWCxtQkFBd0JBLE1BQU0sR0FBRyxFQUFULEdBQWMsTUFBTUEsTUFBcEIsR0FBNkJBLE1BQXJELENBQWpHLEVBQVI7QUFDSCxHQU5RLEVBTU4sQ0FBQ04sSUFBRCxFQUFPRyxNQUFQLEVBQWVHLE1BQWYsRUFBdUJmLE9BQXZCLENBTk0sQ0FBVDs7QUFRQSxXQUFTK0MsR0FBVCxHQUFlO0FBQ2IsUUFBTUMsT0FBTyxHQUFHN0QsSUFBSSxDQUFDRCxHQUFMLEVBQWhCO0FBQ0EsUUFBTStELFNBQVMsR0FBRyxDQUFDLENBQUNyQyxNQUFNLEdBQUdILElBQUksR0FBRyxFQUFqQixJQUF1QixFQUF2QixHQUE0Qk0sTUFBN0IsSUFBdUMsSUFBekQ7QUFDQWxCLFdBQU8sQ0FBQyxVQUFBcUQsU0FBUztBQUFBLGNBQUs7QUFDcEJDLFVBQUUsRUFBRUgsT0FEZ0I7QUFFcEJBLGVBQU8sRUFBUEEsT0FGb0I7QUFHcEJDLGlCQUFTLEVBQVRBLFNBSG9CO0FBSXBCRyxjQUFNLEVBQUUsSUFKWTtBQUtwQkMsWUFBSSxFQUFFbkQsT0FMYztBQU1wQkYsZUFBTyxFQUFFQSxPQU5XO0FBT3BCc0QsYUFBSyxFQUFFeEQsWUFQYTtBQVFwQnlELGNBQU0sRUFBRUMsa0JBQWtCLENBQUN4RCxPQUFELEVBQVVnRCxPQUFWLEVBQW1CQyxTQUFuQjtBQVJOLE9BQUwsOElBU1hDLFNBVFc7QUFBQSxLQUFWLENBQVA7QUFVQTdDLHlCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDRDs7QUFDRCxXQUFTb0QsV0FBVCxDQUFxQk4sRUFBckIsRUFBeUI7QUFDdkJ0RCxXQUFPLENBQUMsVUFBQXFELFNBQVM7QUFBQSxhQUFJQSxTQUFTLENBQUNRLE1BQVYsQ0FBaUIsVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ1IsRUFBSixLQUFXQSxFQUFmO0FBQUEsT0FBcEIsQ0FBSjtBQUFBLEtBQVYsQ0FBUDtBQUNEOztBQUNELFdBQVNTLFdBQVQsQ0FBcUJULEVBQXJCLEVBQXlCVSxLQUF6QixFQUFnQ3ZELEtBQWhDLEVBQXVDO0FBQ3JDVCxXQUFPLENBQUMsVUFBQXFELFNBQVM7QUFBQSxhQUFJQSxTQUFTLENBQUNZLEdBQVYsQ0FBYyxVQUFBSCxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDUixFQUFKLEtBQVdBLEVBQVgsbUNBQXFCUSxHQUFyQiw2SUFBMkJFLEtBQTNCLEVBQW1DdkQsS0FBbkMsS0FBNkNxRCxHQUFqRDtBQUFBLE9BQWpCLENBQUo7QUFBQSxLQUFWLENBQVA7QUFDRDs7QUFDRCxXQUFTSSxhQUFULENBQXVCWixFQUF2QixFQUEyQjtBQUN6QixRQUFNYSxJQUFJLEdBQUcxRSxNQUFNLENBQUNvRSxNQUFQLENBQWMsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ1IsRUFBSixLQUFXQSxFQUFmO0FBQUEsS0FBakIsRUFBb0MsQ0FBcEMsQ0FBYjtBQUNBLFFBQUlhLElBQUksS0FBS3hELFNBQWIsRUFBd0I7QUFDeEJZLG1CQUFlLENBQUM0QyxJQUFJLENBQUNWLEtBQU4sQ0FBZjtBQUNBcEMsa0JBQWMsQ0FBQzhDLElBQUksQ0FBQ1QsTUFBTixDQUFkO0FBQ0Q7O0FBQ0QsV0FBU1UsaUJBQVQsR0FBNkI7QUFDM0IvQyxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBRSxtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNEOztBQUNELFdBQVM4QyxhQUFULENBQXVCQyxJQUF2QixFQUE2QjtBQUMzQjlELHlCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDQUosWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBUyxTQUFLLENBQUV5RCxJQUFJLEdBQUcsSUFBUixHQUFnQixDQUFqQixDQUFMO0FBQ0F0RCxXQUFPLENBQUVzRCxJQUFJLEdBQUcsRUFBUCxHQUFZLEVBQWIsR0FBbUIsQ0FBcEIsQ0FBUDtBQUNBbkQsV0FBTyxDQUFFbUQsSUFBSSxHQUFHLEVBQVIsR0FBYyxDQUFmLENBQVA7QUFDRDs7QUFDRCxXQUFTQyxhQUFULENBQXVCRCxJQUF2QixFQUE2QjtBQUMzQjlELHlCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDQUosWUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNBUyxTQUFLLENBQUV5RCxJQUFJLEdBQUcsRUFBUixHQUFjLENBQWYsQ0FBTDtBQUNBdEQsV0FBTyxDQUFFc0QsSUFBSSxHQUFHLEVBQVIsR0FBYyxDQUFmLENBQVA7QUFDQW5ELFdBQU8sQ0FBQyxDQUFELENBQVA7QUFDRDs7QUFDRCxNQUFNcUQsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZTdFLEtBQUssQ0FBQzRELEtBQXJCLEVBQTRCUSxHQUE1QixDQUFnQyxVQUFBSCxHQUFHO0FBQUEsV0FBSztBQUFFYSxPQUFDLEVBQUViLEdBQUcsQ0FBQyxDQUFELENBQVI7QUFBYWMsT0FBQyxFQUFFZCxHQUFHLENBQUMsQ0FBRDtBQUFuQixLQUFMO0FBQUEsR0FBbkMsQ0FBZjs7QUFDQSxXQUFTZSxVQUFULENBQW9CQyxHQUFwQixFQUF5QjtBQUN2QixRQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFDQSxTQUFLLElBQUlyRixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHb0YsR0FBcEIsRUFBeUJwRixFQUFDLEVBQTFCLEVBQThCO0FBQzVCcUYsWUFBTSxDQUFDcEYsSUFBUCxDQUFZRCxFQUFaO0FBQ0Q7O0FBQ0QsV0FBT3FGLE1BQVA7QUFDRDs7QUFDRCxXQUFTQyxhQUFULENBQXVCQyxDQUF2QixFQUEwQjtBQUN4QnpFLHlCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDQUYsWUFBUSxDQUFDMkUsQ0FBQyxDQUFDeEUsS0FBSCxDQUFSO0FBQ0Q7O0FBQ0Qsc0JBQU87QUFBSyxhQUFTLEVBQUV5RSwrREFBQyxDQUFDeEQsS0FBbEI7QUFBeUIsT0FBRyxFQUFFQSxLQUE5QjtBQUFBLDRCQUNMO0FBQUssZUFBUyxFQUFFd0QsK0RBQUMsQ0FBQ0MsS0FBbEI7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFPLGlCQUFTLEVBQUUsSUFBSTdGLElBQUosR0FBVzhGLGlCQUFYLEtBQWlDLEtBQW5EO0FBQTBELGNBQU0sRUFBRSxLQUFsRTtBQUF5RSxpQkFBUyxFQUFFLEtBQXBGO0FBQTJGLGdCQUFRLEVBQUUsSUFBckc7QUFBMkcsY0FBTSxFQUFFdkYsS0FBSyxDQUFDaUQsSUFBTixDQUFXdUM7QUFBOUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBTSxJQUFJL0YsSUFBSixHQUFXZ0csa0JBQVgsQ0FBOEIzRSxTQUE5QixFQUF5QztBQUFFNEUsaUJBQU8sRUFBRSxNQUFYO0FBQW1CQyxjQUFJLEVBQUUsU0FBekI7QUFBb0NDLGVBQUssRUFBRSxNQUEzQztBQUFtREMsYUFBRyxFQUFFO0FBQXhELFNBQXpDO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsNERBQUQ7QUFBWSxZQUFJLEVBQUVoRSxLQUFLLENBQUNpRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUFNTDtBQUFLLGVBQVMsRUFBRVQsK0RBQUMsT0FBakI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUUvRSxPQUFPLEdBQUcsRUFBSCxHQUFRK0UsK0RBQUMsQ0FBQ1UsT0FBakM7QUFBQSxnQ0FDRTtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTXhGLFFBQVEsQ0FBQyxJQUFELENBQWQ7QUFBQSxXQUFqQjtBQUFBLG9CQUF3Q1AsS0FBSyxDQUFDaUQsSUFBTixDQUFXK0M7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNekYsUUFBUSxDQUFDLEtBQUQsQ0FBZDtBQUFBLFdBQWpCO0FBQUEsb0JBQXlDUCxLQUFLLENBQUNpRCxJQUFOLENBQVdnRDtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUEsc0JBQU1qRyxLQUFLLENBQUNpRCxJQUFOLFNBQWdCcEM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQVEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNRyxLQUFLLENBQUMsVUFBQXdDLFNBQVM7QUFBQSx1QkFBSUEsU0FBUyxLQUFLLENBQWQsR0FBa0JBLFNBQVMsR0FBRyxDQUE5QixHQUFrQyxFQUF0QztBQUFBLGVBQVYsQ0FBWDtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0U7QUFBUSxpQkFBSyxFQUFFekMsSUFBZjtBQUFxQixvQkFBUSxFQUFFLGtCQUFBcUUsQ0FBQztBQUFBLHFCQUFJcEUsS0FBSyxDQUFDa0YsTUFBTSxDQUFDZCxDQUFDLENBQUNlLE1BQUYsQ0FBU3ZGLEtBQVYsQ0FBUCxDQUFUO0FBQUEsYUFBaEM7QUFBQSw0QkFBcUVvRSxVQUFVLENBQUMsRUFBRCxDQUFWLENBQWVaLEdBQWYsQ0FBbUIsVUFBQVcsQ0FBQztBQUFBLGtDQUFJO0FBQWdCLHFCQUFLLEVBQUVBLENBQXZCO0FBQUEsMEJBQTJCQTtBQUEzQixpQkFBYUEsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFKO0FBQUEsYUFBcEIsQ0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU0vRCxLQUFLLENBQUMsVUFBQXdDLFNBQVM7QUFBQSx1QkFBSUEsU0FBUyxLQUFLLEVBQWQsR0FBbUJBLFNBQVMsR0FBRyxDQUEvQixHQUFtQyxDQUF2QztBQUFBLGVBQVYsQ0FBWDtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQUEsa0NBQ0U7QUFBQSxzQkFBTXhELEtBQUssQ0FBQ2lELElBQU4sU0FBZ0JoQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1FLE9BQU8sQ0FBQyxVQUFBcUMsU0FBUztBQUFBLHVCQUFJQSxTQUFTLEtBQUssQ0FBZCxHQUFrQkEsU0FBUyxHQUFHLENBQTlCLEdBQWtDLEVBQXRDO0FBQUEsZUFBVixDQUFiO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFRLGlCQUFLLEVBQUV0QyxNQUFmO0FBQXVCLG9CQUFRLEVBQUUsa0JBQUFrRSxDQUFDO0FBQUEscUJBQUlqRSxPQUFPLENBQUMrRSxNQUFNLENBQUNkLENBQUMsQ0FBQ2UsTUFBRixDQUFTdkYsS0FBVixDQUFQLENBQVg7QUFBQSxhQUFsQztBQUFBLDRCQUF5RW9FLFVBQVUsQ0FBQyxFQUFELENBQVYsQ0FBZVosR0FBZixDQUFtQixVQUFBVyxDQUFDO0FBQUEsa0NBQUk7QUFBZ0IscUJBQUssRUFBRUEsQ0FBdkI7QUFBQSwwQkFBMkJBO0FBQTNCLGlCQUFhQSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUo7QUFBQSxhQUFwQixDQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFJRTtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBTTVELE9BQU8sQ0FBQyxVQUFBcUMsU0FBUztBQUFBLHVCQUFJQSxTQUFTLEtBQUssRUFBZCxHQUFtQkEsU0FBUyxHQUFHLENBQS9CLEdBQW1DLENBQXZDO0FBQUEsZUFBVixDQUFiO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBYUU7QUFBQSxrQ0FDRTtBQUFBLHNCQUFNeEQsS0FBSyxDQUFDaUQsSUFBTixTQUFnQjdCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUUsT0FBTyxDQUFDLFVBQUFrQyxTQUFTO0FBQUEsdUJBQUlBLFNBQVMsS0FBSyxDQUFkLEdBQWtCQSxTQUFTLEdBQUcsQ0FBOUIsR0FBa0MsRUFBdEM7QUFBQSxlQUFWLENBQWI7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQVEsaUJBQUssRUFBRW5DLE1BQWY7QUFBdUIsb0JBQVEsRUFBRSxrQkFBQStELENBQUM7QUFBQSxxQkFBSTlELE9BQU8sQ0FBQzRFLE1BQU0sQ0FBQ2QsQ0FBQyxDQUFDZSxNQUFGLENBQVN2RixLQUFWLENBQVAsQ0FBWDtBQUFBLGFBQWxDO0FBQUEsNEJBQXlFb0UsVUFBVSxDQUFDLEVBQUQsQ0FBVixDQUFlWixHQUFmLENBQW1CLFVBQUFXLENBQUM7QUFBQSxrQ0FBSTtBQUFnQixxQkFBSyxFQUFFQSxDQUF2QjtBQUFBLDBCQUEyQkE7QUFBM0IsaUJBQWFBLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBSjtBQUFBLGFBQXBCLENBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQUlFO0FBQVEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNekQsT0FBTyxDQUFDLFVBQUFrQyxTQUFTO0FBQUEsdUJBQUlBLFNBQVMsS0FBSyxFQUFkLEdBQW1CQSxTQUFTLEdBQUcsQ0FBL0IsR0FBbUMsQ0FBdkM7QUFBQSxlQUFWLENBQWI7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUF5QkU7QUFBQSxnQ0FDRTtBQUFBLG9CQUFNeEQsS0FBSyxDQUFDaUQsSUFBTixDQUFXVTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFLLEVBQUVuRCxPQUExQjtBQUFtQyxrQkFBUSxFQUFFMkU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkYsZUE2QkU7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUEsc0JBQU1uRixLQUFLLENBQUNpRCxJQUFOLENBQVdXO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFRLGdCQUFJLEVBQUMsT0FBYjtBQUFxQixpQkFBSyxFQUFFeEQsWUFBNUI7QUFBMEMsb0JBQVEsRUFBRSxrQkFBQWdGLENBQUM7QUFBQSxxQkFBSS9FLGFBQWEsQ0FBQytFLENBQUMsQ0FBQ2UsTUFBRixDQUFTdkYsS0FBVixDQUFqQjtBQUFBLGFBQXJEO0FBQUEsc0JBQ0crRCxNQUFNLENBQUNQLEdBQVAsQ0FBVyxVQUFBUixLQUFLO0FBQUEsa0NBQUk7QUFBc0IscUJBQUssRUFBRUEsS0FBSyxDQUFDa0IsQ0FBbkM7QUFBQSwwQkFBd0NsQixLQUFLLENBQUNtQjtBQUE5QyxpQkFBYW5CLEtBQUssQ0FBQ2tCLENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUo7QUFBQSxhQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFLR3JELGNBQWMsS0FBSyxJQUFuQixnQkFDQztBQUFRLDRCQUFjekIsS0FBSyxDQUFDaUQsSUFBTixDQUFXbUQsSUFBakM7QUFBdUMsbUJBQU8sRUFBRTtBQUFBLHFCQUFNMUUsZUFBZSxDQUFDdEIsWUFBRCxDQUFyQjtBQUFBLGFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGdCQUVDO0FBQVEsNEJBQWNKLEtBQUssQ0FBQ2lELElBQU4sQ0FBV29ELEdBQWpDO0FBQXNDLG1CQUFPLEVBQUU7QUFBQSxxQkFBTTNFLGVBQWUsQ0FBQyxJQUFELENBQXJCO0FBQUEsYUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBV0U7QUFBUSxpQkFBTyxFQUFFMkIsR0FBakI7QUFBQSxvQkFBdUJyRCxLQUFLLENBQUNpRCxJQUFOLENBQVdJO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5LLGVBaURMO0FBQUssZUFBUyxFQUFFZ0MsK0RBQUMsQ0FBQ2lCLFFBQWxCO0FBQUEsZ0JBQ0cxRyxNQUFNLENBQUN3RSxHQUFQLENBQVcsVUFBQUgsR0FBRztBQUFBLDRCQUFJLHFFQUFDLE9BQUQsa0NBQTBCQSxHQUExQjtBQUErQixlQUFLLEVBQUVVLE1BQU0sQ0FBQ1gsTUFBUCxDQUFjLFVBQUFNLElBQUk7QUFBQSxtQkFBSUEsSUFBSSxDQUFDUSxDQUFMLEtBQVdiLEdBQUcsQ0FBQ0wsS0FBbkI7QUFBQSxXQUFsQixFQUE0QyxDQUE1QyxFQUErQ21CLENBQXJGO0FBQXdGLHVCQUFhLEVBQUVWLGFBQXZHO0FBQXNILHFCQUFXLEVBQUVILFdBQW5JO0FBQWdKLHFCQUFXLEVBQUVILFdBQTdKO0FBQTBLLGVBQUssRUFBRS9EO0FBQWpMLFlBQWNpRSxHQUFHLENBQUNSLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpESyxlQW9ETCxxRUFBQyxhQUFEO0FBQWUsbUJBQWEsRUFBRWUsYUFBOUI7QUFBNkMsbUJBQWEsRUFBRUUsYUFBNUQ7QUFBMkUsV0FBSyxFQUFFMUU7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBESyxlQXFETCxxRUFBQyxLQUFEO0FBQU8sbUJBQWEsRUFBRXVCLGFBQXRCO0FBQXFDLHVCQUFpQixFQUFFZ0QsaUJBQXhEO0FBQTJFLFdBQUssRUFBRXZFO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyREs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUF1REQsQyxDQUNEOztHQW5Ld0JELFM7VUFlUGlDLHFEOzs7S0FmT2pDLFM7O0FBb0t4QixTQUFTd0csYUFBVCxRQUFnRTtBQUFBOztBQUFBLE1BQXZDL0IsYUFBdUMsU0FBdkNBLGFBQXVDO0FBQUEsTUFBeEJFLGFBQXdCLFNBQXhCQSxhQUF3QjtBQUFBLE1BQVQxRSxLQUFTLFNBQVRBLEtBQVM7QUFDOUQsTUFBTXdHLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVsSCxHQUFHLENBQUNtSCxVQUFKLEtBQW1CLEVBQTdCLENBQVY7QUFDQSxzQkFBTztBQUFBLDRCQUNMO0FBQUssZUFBUyxFQUFFdEIsK0RBQUMsQ0FBQ3VCLElBQWxCO0FBQUEsOEJBQ0U7QUFBQSxrQkFBTTVHLEtBQUssQ0FBQ2lELElBQU4sQ0FBV0c7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFDR3hELE1BQU0sQ0FBQ3dFLEdBQVAsQ0FBVyxVQUFBSyxJQUFJO0FBQUEsOEJBQUk7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1DLGFBQWEsQ0FBQ0QsSUFBRCxDQUFuQjtBQUFBLGFBQWpCO0FBQUEsdUJBQXlEQSxJQUFJLEdBQUcsRUFBUixHQUFjLENBQXRFLE9BQTBFQSxJQUFJLEdBQUcsRUFBUCxLQUFjLENBQWQsVUFBeUJBLElBQUksR0FBRyxFQUExRztBQUFBLGFBQWlEQSxJQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFKO0FBQUEsU0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxlQVFMO0FBQUssZUFBUyxFQUFFWSwrREFBQyxDQUFDdUIsSUFBbEI7QUFBQSw4QkFDRTtBQUFBLGtCQUFNNUcsS0FBSyxDQUFDaUQsSUFBTixDQUFXQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUNHM0QsTUFBTSxDQUFDNkUsR0FBUCxDQUFXLFVBQUE0QixLQUFLO0FBQUEsOEJBQUk7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU14QixhQUFhLENBQUN3QixLQUFELENBQW5CO0FBQUEsYUFBakI7QUFBQSx1QkFBMERBLEtBQUssR0FBRyxFQUFSLEdBQWFBLEtBQWIsR0FBcUJBLEtBQUssR0FBRyxJQUFSLEdBQWVBLEtBQUssR0FBRyxFQUF2QixHQUE0QkEsS0FBSyxHQUFHLElBQW5ILE9BQTBIQSxLQUFLLEdBQUcsRUFBUixHQUFhaEcsS0FBSyxDQUFDaUQsSUFBTixVQUFpQjdCLEdBQTlCLEdBQW9DNEUsS0FBSyxHQUFHLElBQVIsR0FBZWhHLEtBQUssQ0FBQ2lELElBQU4sVUFBaUJoQyxHQUFoQyxHQUFzQ2pCLEtBQUssQ0FBQ2lELElBQU4sVUFBaUJwQyxLQUFyTjtBQUFBLGFBQWtEbUYsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSjtBQUFBLFNBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJLO0FBQUEsa0JBQVA7QUFlRCxDLENBQ0Q7OztNQWxCU08sYTs7QUFtQlQsU0FBU00sS0FBVCxRQUE0RDtBQUFBLE1BQTNDdEYsYUFBMkMsU0FBM0NBLGFBQTJDO0FBQUEsTUFBNUJnRCxpQkFBNEIsU0FBNUJBLGlCQUE0QjtBQUFBLE1BQVR2RSxLQUFTLFNBQVRBLEtBQVM7QUFDMUQsc0JBQU87QUFBSyxhQUFTLFlBQUtxRiwrREFBQyxDQUFDeUIsS0FBUCxjQUFnQnZGLGFBQWEsR0FBRzhELCtEQUFDLENBQUMwQixPQUFMLEdBQWUsRUFBNUMsQ0FBZDtBQUFBLDJCQUNMO0FBQUEsOEJBQ0U7QUFBQSxrQkFDR3hGLGFBQWEsZ0JBQ1oscUVBQUMsZ0RBQUQ7QUFBTyxtQkFBUyxFQUFFOUIsSUFBSSxDQUFDRCxHQUFMLEtBQWErQixhQUFiLEdBQTZCLElBQUk5QixJQUFKLEdBQVc4RixpQkFBWCxLQUFpQyxLQUFoRjtBQUF1RixtQkFBUyxFQUFFLEtBQWxHO0FBQXlHLGdCQUFNLEVBQUUsSUFBakg7QUFBdUgsa0JBQVEsRUFBRSxJQUFqSTtBQUF1SSxnQkFBTSxFQUFFdkYsS0FBSyxDQUFDaUQsSUFBTixDQUFXdUM7QUFBMUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEWSxHQUMySjtBQUYzSztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBRUgsK0RBQUMsQ0FBQzJCLEtBQXJCO0FBQTRCLGlCQUFPLEVBQUV6QyxpQkFBckM7QUFBQSxvQkFBeUR2RSxLQUFLLENBQUNpRCxJQUFOLENBQVdvRDtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVlEOztNQWJRUSxLOztBQWVULFNBQVNJLE9BQVQsUUFBbUk7QUFBQTs7QUFBQSxNQUFoSHhELEVBQWdILFNBQWhIQSxFQUFnSDtBQUFBLE1BQTVHSCxPQUE0RyxTQUE1R0EsT0FBNEc7QUFBQSxNQUFuR0MsU0FBbUcsU0FBbkdBLFNBQW1HO0FBQUEsTUFBeEZHLE1BQXdGLFNBQXhGQSxNQUF3RjtBQUFBLE1BQWhGRSxLQUFnRixTQUFoRkEsS0FBZ0Y7QUFBQSxNQUF6RUQsSUFBeUUsU0FBekVBLElBQXlFO0FBQUEsTUFBbkVVLGFBQW1FLFNBQW5FQSxhQUFtRTtBQUFBLE1BQXBEL0QsT0FBb0QsU0FBcERBLE9BQW9EO0FBQUEsTUFBM0M0RCxXQUEyQyxTQUEzQ0EsV0FBMkM7QUFBQSxNQUE5QkgsV0FBOEIsU0FBOUJBLFdBQThCO0FBQUEsTUFBakJGLE1BQWlCLFNBQWpCQSxNQUFpQjtBQUFBLE1BQVQ3RCxLQUFTLFNBQVRBLEtBQVM7QUFFaklpQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJeUIsTUFBSixFQUFZO0FBQ1YsVUFBTXNDLEtBQUssR0FBR2tCLFVBQVUsQ0FBQ0MsTUFBRCxFQUFTdEQsTUFBTSxHQUFHcEUsSUFBSSxDQUFDRCxHQUFMLEVBQWxCLENBQXhCO0FBQ0EsYUFBTztBQUFBLGVBQU00SCxZQUFZLENBQUNwQixLQUFELENBQWxCO0FBQUEsT0FBUDtBQUNEO0FBQ0YsR0FMUSxFQUtOLENBQUN0QyxNQUFELENBTE0sQ0FBVDs7QUFNQSxXQUFTeUQsTUFBVCxHQUFrQjtBQUNoQmpELGVBQVcsQ0FBQ1QsRUFBRCxFQUFLLFFBQUwsRUFBZSxLQUFmLENBQVg7QUFDQVksaUJBQWEsQ0FBQ1osRUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsV0FBUzRELEVBQVQsR0FBYztBQUNaLFFBQU03SCxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBTCxFQUFaO0FBQ0EwRSxlQUFXLENBQUNULEVBQUQsRUFBSyxTQUFMLEVBQWdCakUsR0FBaEIsQ0FBWDtBQUNBMEUsZUFBVyxDQUFDVCxFQUFELEVBQUssUUFBTCxFQUFlSyxrQkFBa0IsQ0FBQ3hELE9BQUQsRUFBVWQsR0FBVixFQUFlK0QsU0FBZixDQUFqQyxDQUFYO0FBQ0FXLGVBQVcsQ0FBQ1QsRUFBRCxFQUFLLFFBQUwsRUFBZSxJQUFmLENBQVg7QUFDRDs7QUFDRCxXQUFTNEMsR0FBVCxHQUFlO0FBQ2JuQyxlQUFXLENBQUNULEVBQUQsRUFBSyxRQUFMLEVBQWUsS0FBZixDQUFYO0FBQ0Q7O0FBQ0Qsc0JBQU87QUFBQSw0QkFDTDtBQUFBLGdCQUFNbkQsT0FBTyxHQUFHTixLQUFLLENBQUNpRCxJQUFOLENBQVcrQyxLQUFkLEdBQXNCaEcsS0FBSyxDQUFDaUQsSUFBTixDQUFXZ0Q7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBRUw7QUFBQSxnQkFDR3RDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLLGVBS0w7QUFBQSw4QkFDRTtBQUFBLGtCQUFNM0QsS0FBSyxDQUFDaUQsSUFBTixDQUFXcUU7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTyxpQkFBUyxFQUFFN0gsSUFBSSxDQUFDRCxHQUFMLEtBQWE4RCxPQUFiLEdBQXVCLElBQUk3RCxJQUFKLEdBQVc4RixpQkFBWCxLQUFpQyxLQUExRTtBQUFpRixjQUFNLEVBQUUsSUFBekY7QUFBK0YsaUJBQVMsRUFBRSxLQUExRztBQUFpSCxnQkFBUSxFQUFFLElBQTNIO0FBQWlJLGNBQU0sRUFBRXZGLEtBQUssQ0FBQ2lELElBQU4sQ0FBV3VDO0FBQXBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSyxlQVNMO0FBQUEsOEJBQ0U7QUFBQSxrQkFBTXhGLEtBQUssQ0FBQ2lELElBQU4sQ0FBV3NFO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGdEQUFEO0FBQU8saUJBQVMsRUFBRTlILElBQUksQ0FBQ0QsR0FBTCxLQUFhcUUsTUFBYixHQUFzQixJQUFJcEUsSUFBSixHQUFXOEYsaUJBQVgsS0FBaUMsS0FBekU7QUFBZ0YsY0FBTSxFQUFFLElBQXhGO0FBQThGLGlCQUFTLEVBQUUsS0FBekc7QUFBZ0gsZ0JBQVEsRUFBRSxJQUExSDtBQUFnSSxjQUFNLEVBQUV2RixLQUFLLENBQUNpRCxJQUFOLENBQVd1QztBQUFuSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEssZUFhTDtBQUFBLDhCQUNFO0FBQUEsa0JBQU14RixLQUFLLENBQUNpRCxJQUFOLENBQVdXO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJLLGVBaUJMO0FBQUEsOEJBQ0U7QUFBQSxrQkFBTTVELEtBQUssQ0FBQ2lELElBQU4sQ0FBV3VFO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGdEQUFEO0FBQU8saUJBQVMsRUFBRTlELE1BQU0sR0FBR0csTUFBSCxHQUFZLElBQXBDO0FBQTBDLGNBQU0sRUFBRUgsTUFBTSxLQUFLLEtBQTdEO0FBQW9FLGdCQUFRLEVBQUUsSUFBOUU7QUFBb0YsY0FBTSxFQUFFMUQsS0FBSyxDQUFDaUQsSUFBTixDQUFXdUM7QUFBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSyxFQXFCSjlCLE1BQU0sZ0JBQ0w7QUFBUSxlQUFTLEVBQUUyQiwrREFBQyxDQUFDb0MsR0FBckI7QUFBMEIsYUFBTyxFQUFFcEIsR0FBbkM7QUFBQSxnQkFBeUNyRyxLQUFLLENBQUNpRCxJQUFOLENBQVdvRDtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZ0JBRUw7QUFBUSxlQUFTLEVBQUVoQiwrREFBQyxDQUFDMkIsS0FBckI7QUFBNEIsYUFBTyxFQUFFSyxFQUFyQztBQUFBLGdCQUEwQ3JILEtBQUssQ0FBQ2lELElBQU4sQ0FBV3lFO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkcsZUF5Qkw7QUFBUSxlQUFTLEVBQUVyQywrREFBQyxDQUFDb0MsR0FBckI7QUFBMEIsYUFBTyxFQUFFO0FBQUEsZUFBTTFELFdBQVcsQ0FBQ04sRUFBRCxDQUFqQjtBQUFBLE9BQW5DO0FBQUEsZ0JBQTJEekQsS0FBSyxDQUFDaUQsSUFBTjtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJLO0FBQUEsS0FBVVEsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUEyQkQsQyxDQUNEOzs7SUFqRFN3RCxPOztNQUFBQSxPOztBQWtEVCxTQUFTbkQsa0JBQVQsQ0FBNEJ4RCxPQUE1QixFQUFxQ2dELE9BQXJDLEVBQThDQyxTQUE5QyxFQUF5RDtBQUN2RCxNQUFJakQsT0FBSixFQUFhLE9BQU9nRCxPQUFPLEdBQUdDLFNBQVYsR0FBc0IsRUFBN0I7QUFDYixNQUFNb0UsSUFBSSxHQUFHLElBQUlsSSxJQUFKLENBQVM2RCxPQUFULENBQWI7QUFDQSxNQUFNK0IsQ0FBQyxHQUFHc0MsSUFBSSxDQUFDQyxVQUFMLEVBQVY7QUFDQSxNQUFNcEIsQ0FBQyxHQUFHbUIsSUFBSSxDQUFDaEIsVUFBTCxFQUFWO0FBQ0EsTUFBTWpILENBQUMsR0FBR2lJLElBQUksQ0FBQ2hJLFFBQUwsRUFBVjtBQUNBLE1BQU1rSSxNQUFNLEdBQUcsQ0FBQyxDQUFDbkksQ0FBQyxHQUFHLEVBQUosR0FBUzhHLENBQVYsSUFBZSxFQUFmLEdBQW9CbkIsQ0FBckIsSUFBMEIsSUFBekM7O0FBQ0EsTUFBSXdDLE1BQU0sR0FBR3RFLFNBQWIsRUFBd0I7QUFDdEIsV0FBT0EsU0FBUyxHQUFHc0UsTUFBWixHQUFxQnZFLE9BQTVCO0FBQ0QsR0FGRCxNQUVPLE9BQU9DLFNBQVMsR0FBR3NFLE1BQVosR0FBc0IsVUFBVSxFQUFoQyxHQUFzQ3ZFLE9BQTdDO0FBQ1IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjJmYmE0ZjI4YzRiYzVjZDg4NDQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy90aW1lci5zdHlsJ1xyXG5pbXBvcnQgU3ZnIGZyb20gJy4uL1N2ZydcclxuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICcuL1N0b3B3YXRjaCdcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuXHJcbmNvbnN0IHRpbWVycyA9IFsxNSwgMzAsIDYwLCA5MCwgMTIwLCAxNTAsIDE4MCwgMzAwLCA0MjAsIDYwMCwgOTAwLCAxMjAwLCAxODAwLCAyNzAwLCAzNjAwLCA3MjAwLCAxMDgwMCwgMjE2MDAsIDMyNDAwLCA0MzIwMCwgNjQ4MDAsIDg2NDAwXVxyXG5cclxuY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG5jb25zdCBoID0gbm93LmdldEhvdXJzKCkgKiA2MFxyXG5jb25zdCBhbGFybXMgPSBbXVxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDk2OyBpKyspIHtcclxuICBpZiAoaCArIGkgKiAxNSA+PSAyNCAqIDYwKSB7XHJcbiAgICBhbGFybXMucHVzaChoIC0gMjQgKiA2MCArIGkgKiAxNSlcclxuICB9IGVsc2UgYWxhcm1zLnB1c2goaCArIGkgKiAxNSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcHdhdGNoKHsgcHJvcHMsIHNsdWcgfSkge1xyXG4gIGNvbnN0IFthbGFybXMsIGFsYXJtc0NdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2RlZmF1bHRTb3VuZCwgZGVmYXVsdFNvdW5kQ10gPSB1c2VTdGF0ZSgndHJhbnF1aWxpdHknKVxyXG4gIGNvbnN0IFtpc1RpbWVyLCBpc1RpbWVyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbmV3TmFtZSwgbmV3TmFtZUNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW25ld05hbWVDaGFuZ2VkQnlVc2VyLCBuZXdOYW1lQ2hhbmdlZEJ5VXNlckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW25ld0gsIG5ld0hDXSA9IHVzZVN0YXRlKHByb3BzLnZhbHVlLmhvdXJzICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZS5ob3VycyA6IDApXHJcbiAgY29uc3QgW25ld01pbiwgbmV3TWluQ10gPSB1c2VTdGF0ZShwcm9wcy52YWx1ZS5taW4gIT09IHVuZGVmaW5lZCA/IHByb3BzLnZhbHVlLm1pbiA6IDApXHJcbiAgY29uc3QgW25ld1NlYywgbmV3U2VjQ10gPSB1c2VTdGF0ZShwcm9wcy52YWx1ZS5zZWMgIT09IHVuZGVmaW5lZCA/IHByb3BzLnZhbHVlLnNlYyA6IDApXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50QWxhcm1zLCBjdXJyZW50QWxhcm1zQ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtjdXJyZW50UGxheWluZywgY3VycmVudFBsYXlpbmdDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2N1cnJlbnRQbGF5aW5nRWxlbSwgY3VycmVudFBsYXlpbmdFbGVtQ10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGFybUl0ZW1zJylcclxuICAgIGlmIChzdG9yZUl0ZW1zID09PSBudWxsKSByZXR1cm5cclxuICAgIGFsYXJtc0MoSlNPTi5wYXJzZShzdG9yZUl0ZW1zKSlcclxuICAgIGNvbnN0IHN0b3JlU291bmQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxhcm1Tb3VuZCcpXHJcbiAgICBpZiAoc3RvcmVTb3VuZCA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBkZWZhdWx0U291bmRDKHN0b3JlU291bmQpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlzVGltZXJDKHNsdWcgPT09ICd0aW1lcicpXHJcbiAgfSwgW3JvdXRlci5xdWVyeS5hcnRpY2xlXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsYXJtSXRlbXMnLCBKU09OLnN0cmluZ2lmeShhbGFybXMpKVxyXG4gIH0sIFthbGFybXNdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxhcm1Tb3VuZCcsIGRlZmF1bHRTb3VuZClcclxuICB9LCBbZGVmYXVsdFNvdW5kXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nRWxlbSAhPT0gbnVsbCkgY3VycmVudFBsYXlpbmdFbGVtLnBhdXNlKClcclxuICAgIGlmIChjdXJyZW50UGxheWluZyA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBjb25zdCBuZXdBdWRpbyA9IG5ldyBBdWRpbyhgL3NvdW5kcy8ke2N1cnJlbnRQbGF5aW5nfS5tcDNgKVxyXG4gICAgbmV3QXVkaW8ubG9vcCA9IHRydWVcclxuICAgIG5ld0F1ZGlvLnBsYXkoKVxyXG4gICAgY3VycmVudFBsYXlpbmdFbGVtQyhuZXdBdWRpbylcclxuICB9LCBbY3VycmVudFBsYXlpbmddKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmV3TmFtZUNoYW5nZWRCeVVzZXIpIHJldHVyblxyXG4gICAgaWYgKGlzVGltZXIpIHtcclxuICAgICAgbmV3TmFtZUMoYCR7cHJvcHMuZGVzYy50aW1lck9ufSAke25ld0ggPT09IDAgPyBgYCA6IGAke25ld0ggPCAxMCA/IFwiMFwiICsgbmV3SCA6IG5ld0h9ICR7cHJvcHMuZGVzYy5zaG9ydC5ob3Vyc30uIGB9JHtuZXdNaW4gPT09IDAgPyBgYCA6IGAke25ld01pbiA8IDEwID8gXCIwXCIgKyBuZXdNaW4gOiBuZXdNaW59ICR7cHJvcHMuZGVzYy5zaG9ydC5taW59LiBgfSR7bmV3U2VjID09PSAwID8gKG5ld0ggIT09IDAgfHwgbmV3TWluICE9PSAwID8gYGAgOiBwcm9wcy5kZXNjLnNob3J0Lmluc3RhbnQpIDogYCR7bmV3U2VjIDwgMTAgPyBcIjBcIiArIG5ld1NlYyA6IG5ld1NlY30gJHtwcm9wcy5kZXNjLnNob3J0LnNlY30uYH1gKVxyXG4gICAgfSBlbHNlXHJcbiAgICAgIG5ld05hbWVDKGAke3Byb3BzLmRlc2MuYWxhcm1Pbn0gJHtuZXdIIDwgMTAgPyBcIjBcIiArIG5ld0ggOiBuZXdIfToke25ld01pbiA8IDEwID8gXCIwXCIgKyBuZXdNaW4gOiBuZXdNaW59JHtuZXdTZWMgPT09IDAgPyBgYCA6IGA6JHtuZXdTZWMgPCAxMCA/IFwiMFwiICsgbmV3U2VjIDogbmV3U2VjfWB9YClcclxuICB9LCBbbmV3SCwgbmV3TWluLCBuZXdTZWMsIGlzVGltZXJdKVxyXG5cclxuICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICBjb25zdCBzdGFydGVkID0gRGF0ZS5ub3coKVxyXG4gICAgY29uc3QgdGltZXN0YW1wID0gKChuZXdNaW4gKyBuZXdIICogNjApICogNjAgKyBuZXdTZWMpICogMTAwMFxyXG4gICAgYWxhcm1zQyhwcmV2U3RhdGUgPT4gW3tcclxuICAgICAgaWQ6IHN0YXJ0ZWQsXHJcbiAgICAgIHN0YXJ0ZWQsXHJcbiAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBuYW1lOiBuZXdOYW1lLFxyXG4gICAgICBpc1RpbWVyOiBpc1RpbWVyLFxyXG4gICAgICBzb3VuZDogZGVmYXVsdFNvdW5kLFxyXG4gICAgICBmaW5pc2g6IGdldEZpbmlzaFRpbWVzdGFtcChpc1RpbWVyLCBzdGFydGVkLCB0aW1lc3RhbXApLFxyXG4gICAgfSwgLi4ucHJldlN0YXRlXSlcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyhmYWxzZSlcclxuICB9XHJcbiAgZnVuY3Rpb24gYWxhcm1EZWxldGUoaWQpIHtcclxuICAgIGFsYXJtc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZS5maWx0ZXIob2JqID0+IG9iai5pZCAhPT0gaWQpKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjaGFuZ2VGaWVsZChpZCwgZmllbGQsIHZhbHVlKSB7XHJcbiAgICBhbGFybXNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUubWFwKG9iaiA9PiBvYmouaWQgPT09IGlkID8geyAuLi5vYmosIFtmaWVsZF06IHZhbHVlIH0gOiBvYmopKVxyXG4gIH1cclxuICBmdW5jdGlvbiB0aW1lckRpc3BhdGNoKGlkKSB7XHJcbiAgICBjb25zdCBlbGVtID0gYWxhcm1zLmZpbHRlcihvYmogPT4gb2JqLmlkID09PSBpZClbMF1cclxuICAgIGlmIChlbGVtID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgY3VycmVudFBsYXlpbmdDKGVsZW0uc291bmQpXHJcbiAgICBjdXJyZW50QWxhcm1zQyhlbGVtLmZpbmlzaClcclxuICB9XHJcbiAgZnVuY3Rpb24gc3RvcEN1cnJlbnRBbGFybXMoKSB7XHJcbiAgICBjdXJyZW50QWxhcm1zQyhudWxsKVxyXG4gICAgY3VycmVudFBsYXlpbmdDKG51bGwpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZU9uVGltZXIodGltZSkge1xyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKGZhbHNlKVxyXG4gICAgaXNUaW1lckModHJ1ZSlcclxuICAgIG5ld0hDKCh0aW1lIC8gMzYwMCkgfCAwKVxyXG4gICAgbmV3TWluQygodGltZSAvIDYwICUgNjApIHwgMClcclxuICAgIG5ld1NlY0MoKHRpbWUgJSA2MCkgfCAwKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjaGFuZ2VPbkFsYXJtKHRpbWUpIHtcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyhmYWxzZSlcclxuICAgIGlzVGltZXJDKGZhbHNlKVxyXG4gICAgbmV3SEMoKHRpbWUgLyA2MCkgfCAwKVxyXG4gICAgbmV3TWluQygodGltZSAlIDYwKSB8IDApXHJcbiAgICBuZXdTZWNDKDApXHJcbiAgfVxyXG4gIGNvbnN0IHNvdW5kcyA9IE9iamVjdC5lbnRyaWVzKHByb3BzLnNvdW5kKS5tYXAob2JqID0+ICh7IGw6IG9ialswXSwgbjogb2JqWzFdIH0pKVxyXG4gIGZ1bmN0aW9uIGdldE51bWJlcnMobWF4KSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICByZXN1bHQucHVzaChpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuICBmdW5jdGlvbiBuZXdOYW1lQ2hhbmdlKGUpIHtcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyh0cnVlKVxyXG4gICAgbmV3TmFtZUMoZS52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNsb2NrfT5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17bmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDB9IHBhdXNlZD17ZmFsc2V9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgICA8ZGl2PntuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5uZXd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNUaW1lciA/ICcnIDogcy5zZWxlY3QyfT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGlzVGltZXJDKHRydWUpfT57cHJvcHMuZGVzYy50aW1lcn08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGlzVGltZXJDKGZhbHNlKX0+e3Byb3BzLmRlc2MuYWxhcm19PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvbmcuaG91cnN9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld0hDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDAgPyBwcmV2U3RhdGUgLSAxIDogMjMpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuZXdIfSBvbkNoYW5nZT17ZSA9PiBuZXdIQyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+IHtnZXROdW1iZXJzKDI0KS5tYXAobiA9PiA8b3B0aW9uIGtleT17bn0gdmFsdWU9e259PntufTwvb3B0aW9uPil9IDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdIQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSAyMyA/IHByZXZTdGF0ZSArIDEgOiAwKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvbmcubWlufTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdNaW5DKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDAgPyBwcmV2U3RhdGUgLSAxIDogNTkpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuZXdNaW59IG9uQ2hhbmdlPXtlID0+IG5ld01pbkMoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PiB7Z2V0TnVtYmVycyg2MCkubWFwKG4gPT4gPG9wdGlvbiBrZXk9e259IHZhbHVlPXtufT57bn08L29wdGlvbj4pfSA8L3NlbGVjdD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3TWluQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSA1OSA/IHByZXZTdGF0ZSArIDEgOiAwKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvbmcuc2VjfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdTZWNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDAgPyBwcmV2U3RhdGUgLSAxIDogNTkpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuZXdTZWN9IG9uQ2hhbmdlPXtlID0+IG5ld1NlY0MoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PiB7Z2V0TnVtYmVycyg2MCkubWFwKG4gPT4gPG9wdGlvbiBrZXk9e259IHZhbHVlPXtufT57bn08L29wdGlvbj4pfSA8L3NlbGVjdD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3U2VjQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSA1OSA/IHByZXZTdGF0ZSArIDEgOiAwKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25ld05hbWV9IG9uQ2hhbmdlPXtuZXdOYW1lQ2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5zb3VuZH08L2Rpdj5cclxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNvdW5kXCIgdmFsdWU9e2RlZmF1bHRTb3VuZH0gb25DaGFuZ2U9e2UgPT4gZGVmYXVsdFNvdW5kQyhlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICB7c291bmRzLm1hcChzb3VuZCA9PiA8b3B0aW9uIGtleT17c291bmQubH0gdmFsdWU9e3NvdW5kLmx9ID57c291bmQubn08L29wdGlvbj4pfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICB7Y3VycmVudFBsYXlpbmcgPT09IG51bGwgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50ZXN0fSBvbkNsaWNrPXsoKSA9PiBjdXJyZW50UGxheWluZ0MoZGVmYXVsdFNvdW5kKX0+4pa6PC9idXR0b24+IDpcclxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2Mub2ZmfSBvbkNsaWNrPXsoKSA9PiBjdXJyZW50UGxheWluZ0MobnVsbCl9PuKWoDwvYnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkfT57cHJvcHMuZGVzYy5hZGR9PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5lbGVtZW50c30+XHJcbiAgICAgIHthbGFybXMubWFwKG9iaiA9PiA8RWxlbWVudCBrZXk9e29iai5pZH0gey4uLm9ian0gc291bmQ9e3NvdW5kcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmwgPT09IG9iai5zb3VuZClbMF0ubn0gdGltZXJEaXNwYXRjaD17dGltZXJEaXNwYXRjaH0gY2hhbmdlRmllbGQ9e2NoYW5nZUZpZWxkfSBhbGFybURlbGV0ZT17YWxhcm1EZWxldGV9IHByb3BzPXtwcm9wc30gLz4pfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8QXV4aWxpYXJ5TGlzdCBjaGFuZ2VPblRpbWVyPXtjaGFuZ2VPblRpbWVyfSBjaGFuZ2VPbkFsYXJtPXtjaGFuZ2VPbkFsYXJtfSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICA8UG9wdXAgY3VycmVudEFsYXJtcz17Y3VycmVudEFsYXJtc30gc3RvcEN1cnJlbnRBbGFybXM9e3N0b3BDdXJyZW50QWxhcm1zfSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgPC9kaXY+XHJcbn1cclxuLy/Qm9C40YHRgiDRgSDRgNCw0LfQvdGL0LzQuCDQvNC10YLQutCw0LzQuCDQstGA0LXQvNC10L3QuCDQtNC70Y8g0LHRg9C00LjQu9GM0L3QuNC60LAg0Lgg0YLQsNC50LzQtdGA0LAgXHJcbmZ1bmN0aW9uIEF1eGlsaWFyeUxpc3QoeyBjaGFuZ2VPblRpbWVyLCBjaGFuZ2VPbkFsYXJtLCBwcm9wcyB9KSB7XHJcbiAgY29uc3QgbSA9IE1hdGguY2VpbChub3cuZ2V0TWludXRlcygpIC8gMTUpXHJcbiAgcmV0dXJuIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5hbGFybU9ufTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthbGFybXMubWFwKHRpbWUgPT4gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VPbkFsYXJtKHRpbWUpfSBrZXk9e3RpbWV9PnsodGltZSAvIDYwKSB8IDB9Ont0aW1lICUgNjAgPT09IDAgPyBgMDBgIDogdGltZSAlIDYwfTwvYnV0dG9uPil9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MudGltZXJPbn08L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGltZXJzLm1hcCh0aW1lciA9PiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZU9uVGltZXIodGltZXIpfSBrZXk9e3RpbWVyfT57dGltZXIgPCA2MCA/IHRpbWVyIDogdGltZXIgPCAzNjAwID8gdGltZXIgLyA2MCA6IHRpbWVyIC8gMzYwMH0ge3RpbWVyIDwgNjAgPyBwcm9wcy5kZXNjLnNob3J0LnNlYyA6IHRpbWVyIDwgMzYwMCA/IHByb3BzLmRlc2Muc2hvcnQubWluIDogcHJvcHMuZGVzYy5zaG9ydC5ob3Vyc308L2J1dHRvbj4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvPlxyXG59XHJcbi8v0J7Qv9C+0LLQtdGJ0LXQvdC40LVcclxuZnVuY3Rpb24gUG9wdXAoeyBjdXJyZW50QWxhcm1zLCBzdG9wQ3VycmVudEFsYXJtcywgcHJvcHMgfSkge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7cy5wb3B1cH0gJHtjdXJyZW50QWxhcm1zID8gcy5kaXNwbGF5IDogXCJcIn1gfT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2N1cnJlbnRBbGFybXMgP1xyXG4gICAgICAgICAgPENsb2NrIHRpbWVzdGFtcD17RGF0ZS5ub3coKSAtIGN1cnJlbnRBbGFybXMgKyBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gZGlzcGxheU1zPXtmYWxzZX0gcGF1c2VkPXt0cnVlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5ncmVlbn0gb25DbGljaz17c3RvcEN1cnJlbnRBbGFybXN9Pntwcm9wcy5kZXNjLm9mZn08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZnVuY3Rpb24gRWxlbWVudCh7IGlkLCBzdGFydGVkLCB0aW1lc3RhbXAsIGFjdGl2ZSwgc291bmQsIG5hbWUsIHRpbWVyRGlzcGF0Y2gsIGlzVGltZXIsIGNoYW5nZUZpZWxkLCBhbGFybURlbGV0ZSwgZmluaXNoLCBwcm9wcyB9KSB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCh3YWtldXAsIGZpbmlzaCAtIERhdGUubm93KCkpXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZV0pXHJcbiAgZnVuY3Rpb24gd2FrZXVwKCkge1xyXG4gICAgY2hhbmdlRmllbGQoaWQsICdhY3RpdmUnLCBmYWxzZSlcclxuICAgIHRpbWVyRGlzcGF0Y2goaWQpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgY2hhbmdlRmllbGQoaWQsICdzdGFydGVkJywgbm93KVxyXG4gICAgY2hhbmdlRmllbGQoaWQsICdmaW5pc2gnLCBnZXRGaW5pc2hUaW1lc3RhbXAoaXNUaW1lciwgbm93LCB0aW1lc3RhbXApKVxyXG4gICAgY2hhbmdlRmllbGQoaWQsICdhY3RpdmUnLCB0cnVlKVxyXG4gIH1cclxuICBmdW5jdGlvbiBvZmYoKSB7XHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIGZhbHNlKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBrZXk9e2lkfT5cclxuICAgIDxkaXY+e2lzVGltZXIgPyBwcm9wcy5kZXNjLnRpbWVyIDogcHJvcHMuZGVzYy5hbGFybX08L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIHtuYW1lfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLnN0YXJ0ZWRUaW1lfTwvZGl2PlxyXG4gICAgICA8Q2xvY2sgdGltZXN0YW1wPXtEYXRlLm5vdygpIC0gc3RhcnRlZCArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBwYXVzZWQ9e3RydWV9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLmZpbmlzaFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e0RhdGUubm93KCkgLSBmaW5pc2ggKyBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gcGF1c2VkPXt0cnVlfSBkaXNwbGF5TXM9e2ZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5zb3VuZH08L2Rpdj5cclxuICAgICAgPGRpdj57c291bmR9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MubGVmdFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e2FjdGl2ZSA/IGZpbmlzaCA6IG51bGx9IHBhdXNlZD17YWN0aXZlID09PSBmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIHthY3RpdmUgP1xyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5yZWR9IG9uQ2xpY2s9e29mZn0+e3Byb3BzLmRlc2Mub2ZmfTwvYnV0dG9uPiA6XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmdyZWVufSBvbkNsaWNrPXtvbn0+e3Byb3BzLmRlc2MucmVwZWF0fTwvYnV0dG9uPlxyXG4gICAgfVxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MucmVkfSBvbkNsaWNrPXsoKSA9PiBhbGFybURlbGV0ZShpZCl9Pntwcm9wcy5kZXNjLmRlbGV0ZX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxufVxyXG4vL9Cf0L7Qu9GD0YfQuNGC0Ywg0YTQuNC90LDQu9GM0L3Rg9GOINC80LXRgtC60YMg0LLRgNC10LzQtdC90LggKNC+0LrQvtC90YfQsNC90LjQtSDRgtCw0LnQvNC10YDQsClcclxuZnVuY3Rpb24gZ2V0RmluaXNoVGltZXN0YW1wKGlzVGltZXIsIHN0YXJ0ZWQsIHRpbWVzdGFtcCkge1xyXG4gIGlmIChpc1RpbWVyKSByZXR1cm4gc3RhcnRlZCArIHRpbWVzdGFtcCArIDEwXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0YXJ0ZWQpXHJcbiAgY29uc3QgcyA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcbiAgY29uc3QgbSA9IGRhdGUuZ2V0TWludXRlcygpXHJcbiAgY29uc3QgaCA9IGRhdGUuZ2V0SG91cnMoKVxyXG4gIGNvbnN0IG1vZHVsbyA9ICgoaCAqIDYwICsgbSkgKiA2MCArIHMpICogMTAwMFxyXG4gIGlmIChtb2R1bG8gPCB0aW1lc3RhbXApIHtcclxuICAgIHJldHVybiB0aW1lc3RhbXAgLSBtb2R1bG8gKyBzdGFydGVkXHJcbiAgfSBlbHNlIHJldHVybiB0aW1lc3RhbXAgLSBtb2R1bG8gKyAoMzYwMDAwMCAqIDI0KSArIHN0YXJ0ZWRcclxufSJdLCJzb3VyY2VSb290IjoiIn0=