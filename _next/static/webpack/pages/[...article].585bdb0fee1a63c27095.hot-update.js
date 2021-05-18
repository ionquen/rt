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
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var timers = [1, 2, 3, 5, 10, 15, 20, 30, 45, 50, 60, 90, 120, 150, 180, 300, 420, 600, 900, 1200, 1800, 2700, 3600, 5400, 7200, 10800, 21600, 32400, 43200, 64800];
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
        lineNumber: 126,
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
        lineNumber: 127,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
        elem: block.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
          lineNumber: 132,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return isTimerC(false);
          },
          children: props.desc.alarm
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc["long"].hours
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
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
            lineNumber: 138,
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
                lineNumber: 139,
                columnNumber: 104
              }, _this);
            }), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
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
            lineNumber: 140,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc["long"].min
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
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
            lineNumber: 144,
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
                lineNumber: 145,
                columnNumber: 108
              }, _this);
            }), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
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
            lineNumber: 146,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc["long"].sec
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
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
            lineNumber: 150,
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
                lineNumber: 151,
                columnNumber: 108
              }, _this);
            }), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
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
            lineNumber: 152,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: props.desc.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: newName,
          onChange: newNameChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc.sound
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
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
                lineNumber: 163,
                columnNumber: 34
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 11
          }, this), currentPlaying === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-tooltip": props.desc.test,
            onClick: function onClick() {
              return currentPlayingC(defaultSound);
            },
            children: "\u25BA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-tooltip": props.desc.off,
            onClick: function onClick() {
              return currentPlayingC(null);
            },
            children: "\u25A0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: add,
          children: props.desc.add
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
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
          lineNumber: 174,
          columnNumber: 26
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuxiliaryList, {
      changeOnTimer: changeOnTimer,
      changeOnAlarm: changeOnAlarm,
      props: props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Popup, {
      currentAlarms: currentAlarms,
      stopCurrentAlarms: stopCurrentAlarms,
      props: props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 10
  }, this);
} //Лист с разными метками времени для будильника и таймера 

_s(Stopwatch, "FLDFckcrwJL8jADPjckmmjUxtFk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Stopwatch;

function AuxiliaryList(_ref2) {
  _s2();

  var _this2 = this;

  var changeOnTimer = _ref2.changeOnTimer,
      changeOnAlarm = _ref2.changeOnAlarm,
      props = _ref2.props;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.alarmOn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: alarms.map(function (time) {
          var htext = time / 60 | 0;
          var mtext = time % 60 === 0 ? "00" : time % 60;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/".concat(router.query.article[0], "/").concat(props.alarm, "/").concat(htext, "-").concat(mtext, "/"),
            onClick: function onClick(e) {
              e.preventDefault();
              changeOnAlarm(time);
            },
            children: [htext, ":", mtext]
          }, time, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 18
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
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
          var num = timer < 60 ? timer : timer < 3600 ? timer / 60 : timer / 3600;
          var label = timer < 60 ? 'sec' : timer < 3600 ? 'min' : 'hours';
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/".concat(router.query.article[0], "/").concat(props.timer, "/").concat(num).concat(label, "/"),
            onClick: function onClick(e) {
              e.preventDefault();
              changeOnTimer(timer);
            },
            children: [num, " ", timer < 60 ? props.desc["short"].sec : timer < 3600 ? props.desc["short"].min : props.desc["short"].hours]
          }, timer, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 18
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


_s2(AuxiliaryList, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

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
          lineNumber: 213,
          columnNumber: 11
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.green,
          onClick: stopCurrentAlarms,
          children: props.desc.off
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 209,
    columnNumber: 10
  }, this);
}

_c3 = Popup;

function Element(_ref4) {
  _s3();

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
      lineNumber: 245,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.startedTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: Date.now() - started + new Date().getTimezoneOffset() * 60000,
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
        children: props.desc.finishTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: Date.now() - finish + new Date().getTimezoneOffset() * 60000,
        paused: true,
        displayMs: false,
        onlyTime: true,
        labels: props.desc.labels
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
        children: props.desc.sound
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: sound
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.leftTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: active ? finish : null,
        paused: active === false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 5
    }, this), active ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.red,
      onClick: off,
      children: props.desc.off
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.green,
      onClick: on,
      children: props.desc.repeat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.red,
      onClick: function onClick() {
        return alarmDelete(id);
      },
      children: props.desc["delete"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 5
    }, this)]
  }, id, true, {
    fileName: _jsxFileName,
    lineNumber: 244,
    columnNumber: 10
  }, this);
} //Получить финальную метку времени (окончание таймера)


_s3(Element, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UaW1lci5qcyJdLCJuYW1lcyI6WyJ0aW1lcnMiLCJub3ciLCJEYXRlIiwiaCIsImdldEhvdXJzIiwiYWxhcm1zIiwiaSIsInB1c2giLCJTdG9wd2F0Y2giLCJwcm9wcyIsInNsdWciLCJ1c2VTdGF0ZSIsImFsYXJtc0MiLCJkZWZhdWx0U291bmQiLCJkZWZhdWx0U291bmRDIiwiaXNUaW1lciIsImlzVGltZXJDIiwibmV3TmFtZSIsIm5ld05hbWVDIiwibmV3TmFtZUNoYW5nZWRCeVVzZXIiLCJuZXdOYW1lQ2hhbmdlZEJ5VXNlckMiLCJ2YWx1ZSIsImhvdXJzIiwidW5kZWZpbmVkIiwibmV3SCIsIm5ld0hDIiwibWluIiwibmV3TWluIiwibmV3TWluQyIsInNlYyIsIm5ld1NlYyIsIm5ld1NlY0MiLCJjdXJyZW50QWxhcm1zIiwiY3VycmVudEFsYXJtc0MiLCJjdXJyZW50UGxheWluZyIsImN1cnJlbnRQbGF5aW5nQyIsImN1cnJlbnRQbGF5aW5nRWxlbSIsImN1cnJlbnRQbGF5aW5nRWxlbUMiLCJibG9jayIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInN0b3JlSXRlbXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RvcmVTb3VuZCIsInF1ZXJ5IiwiYXJ0aWNsZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwYXVzZSIsIm5ld0F1ZGlvIiwiQXVkaW8iLCJsb29wIiwicGxheSIsImRlc2MiLCJ0aW1lck9uIiwiaW5zdGFudCIsImFsYXJtT24iLCJhZGQiLCJzdGFydGVkIiwidGltZXN0YW1wIiwicHJldlN0YXRlIiwiaWQiLCJhY3RpdmUiLCJuYW1lIiwic291bmQiLCJmaW5pc2giLCJnZXRGaW5pc2hUaW1lc3RhbXAiLCJhbGFybURlbGV0ZSIsImZpbHRlciIsIm9iaiIsImNoYW5nZUZpZWxkIiwiZmllbGQiLCJtYXAiLCJ0aW1lckRpc3BhdGNoIiwiZWxlbSIsInN0b3BDdXJyZW50QWxhcm1zIiwiY2hhbmdlT25UaW1lciIsInRpbWUiLCJjaGFuZ2VPbkFsYXJtIiwic291bmRzIiwiT2JqZWN0IiwiZW50cmllcyIsImwiLCJuIiwiZ2V0TnVtYmVycyIsIm1heCIsInJlc3VsdCIsIm5ld05hbWVDaGFuZ2UiLCJlIiwicyIsImNsb2NrIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJsYWJlbHMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiY3VycmVudCIsInNlbGVjdDIiLCJ0aW1lciIsImFsYXJtIiwiTnVtYmVyIiwidGFyZ2V0IiwidGVzdCIsIm9mZiIsImVsZW1lbnRzIiwiQXV4aWxpYXJ5TGlzdCIsImxpc3QiLCJodGV4dCIsIm10ZXh0IiwicHJldmVudERlZmF1bHQiLCJudW0iLCJsYWJlbCIsIlBvcHVwIiwicG9wdXAiLCJkaXNwbGF5IiwiZ3JlZW4iLCJFbGVtZW50Iiwic2V0VGltZW91dCIsIndha2V1cCIsImNsZWFyVGltZW91dCIsIm9uIiwic3RhcnRlZFRpbWUiLCJmaW5pc2hUaW1lIiwibGVmdFRpbWUiLCJyZWQiLCJyZXBlYXQiLCJkYXRlIiwiZ2V0U2Vjb25kcyIsIm0iLCJnZXRNaW51dGVzIiwibW9kdWxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxFQUFqQyxFQUFxQyxFQUFyQyxFQUF5QyxFQUF6QyxFQUE2QyxHQUE3QyxFQUFrRCxHQUFsRCxFQUF1RCxHQUF2RCxFQUE0RCxHQUE1RCxFQUFpRSxHQUFqRSxFQUFzRSxHQUF0RSxF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QUFPZ0QsT0FBTyxHQUFHQyxTQUFWLEdBQXNCLEVBQTdCO0FBQ2IsTUFBTXFFLElBQUksR0FBRyxJQUFJbkksSUFBSixDQUFTNkQsT0FBVCxDQUFiO0FBQ0EsTUFBTStCLENBQUMsR0FBR3VDLElBQUksQ0FBQ0MsVUFBTCxFQUFWO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHRixJQUFJLENBQUNHLFVBQUwsRUFBVjtBQUNBLE1BQU1ySSxDQUFDLEdBQUdrSSxJQUFJLENBQUNqSSxRQUFMLEVBQVY7QUFDQSxNQUFNcUksTUFBTSxHQUFHLENBQUMsQ0FBQ3RJLENBQUMsR0FBRyxFQUFKLEdBQVNvSSxDQUFWLElBQWUsRUFBZixHQUFvQnpDLENBQXJCLElBQTBCLElBQXpDOztBQUNBLE1BQUkyQyxNQUFNLEdBQUd6RSxTQUFiLEVBQXdCO0FBQ3RCLFdBQU9BLFNBQVMsR0FBR3lFLE1BQVosR0FBcUIxRSxPQUE1QjtBQUNELEdBRkQsTUFFTyxPQUFPQyxTQUFTLEdBQUd5RSxNQUFaLEdBQXNCLFVBQVUsRUFBaEMsR0FBc0MxRSxPQUE3QztBQUNSIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS41ODViZGIwZmVlMWE2M2MyNzA5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvdGltZXIuc3R5bCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnLi9TdG9wd2F0Y2gnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcbmNvbnN0IHRpbWVycyA9IFsxLCAyLCAzLCA1LCAxMCwgMTUsIDIwLCAzMCwgNDUsIDUwLCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDMwMCwgNDIwLCA2MDAsIDkwMCwgMTIwMCwgMTgwMCwgMjcwMCwgMzYwMCwgNTQwMCwgNzIwMCwgMTA4MDAsIDIxNjAwLCAzMjQwMCwgNDMyMDAsIDY0ODAwXVxyXG5cclxuY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG5jb25zdCBoID0gbm93LmdldEhvdXJzKCkgKiA2MFxyXG5jb25zdCBhbGFybXMgPSBbXVxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDk2OyBpKyspIHtcclxuICBpZiAoaCArIGkgKiAxNSA+PSAyNCAqIDYwKSB7XHJcbiAgICBhbGFybXMucHVzaChoIC0gMjQgKiA2MCArIGkgKiAxNSlcclxuICB9IGVsc2UgYWxhcm1zLnB1c2goaCArIGkgKiAxNSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcHdhdGNoKHsgcHJvcHMsIHNsdWcgfSkge1xyXG4gIGNvbnN0IFthbGFybXMsIGFsYXJtc0NdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2RlZmF1bHRTb3VuZCwgZGVmYXVsdFNvdW5kQ10gPSB1c2VTdGF0ZSgndHJhbnF1aWxpdHknKVxyXG4gIGNvbnN0IFtpc1RpbWVyLCBpc1RpbWVyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbmV3TmFtZSwgbmV3TmFtZUNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW25ld05hbWVDaGFuZ2VkQnlVc2VyLCBuZXdOYW1lQ2hhbmdlZEJ5VXNlckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW25ld0gsIG5ld0hDXSA9IHVzZVN0YXRlKHByb3BzLnZhbHVlLmhvdXJzICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZS5ob3VycyA6IDApXHJcbiAgY29uc3QgW25ld01pbiwgbmV3TWluQ10gPSB1c2VTdGF0ZShwcm9wcy52YWx1ZS5taW4gIT09IHVuZGVmaW5lZCA/IHByb3BzLnZhbHVlLm1pbiA6IDApXHJcbiAgY29uc3QgW25ld1NlYywgbmV3U2VjQ10gPSB1c2VTdGF0ZShwcm9wcy52YWx1ZS5zZWMgIT09IHVuZGVmaW5lZCA/IHByb3BzLnZhbHVlLnNlYyA6IDApXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50QWxhcm1zLCBjdXJyZW50QWxhcm1zQ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtjdXJyZW50UGxheWluZywgY3VycmVudFBsYXlpbmdDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2N1cnJlbnRQbGF5aW5nRWxlbSwgY3VycmVudFBsYXlpbmdFbGVtQ10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcihudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZUl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsYXJtSXRlbXMnKVxyXG4gICAgaWYgKHN0b3JlSXRlbXMgPT09IG51bGwpIHJldHVyblxyXG4gICAgYWxhcm1zQyhKU09OLnBhcnNlKHN0b3JlSXRlbXMpKVxyXG4gICAgY29uc3Qgc3RvcmVTb3VuZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGFybVNvdW5kJylcclxuICAgIGlmIChzdG9yZVNvdW5kID09PSBudWxsKSByZXR1cm5cclxuICAgIGRlZmF1bHRTb3VuZEMoc3RvcmVTb3VuZClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNUaW1lckMoc2x1ZyA9PT0gJ3RpbWVyJylcclxuICB9LCBbcm91dGVyLnF1ZXJ5LmFydGljbGVdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxhcm1JdGVtcycsIEpTT04uc3RyaW5naWZ5KGFsYXJtcykpXHJcbiAgfSwgW2FsYXJtc10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGFybVNvdW5kJywgZGVmYXVsdFNvdW5kKVxyXG4gIH0sIFtkZWZhdWx0U291bmRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBsYXlpbmdFbGVtICE9PSBudWxsKSBjdXJyZW50UGxheWluZ0VsZW0ucGF1c2UoKVxyXG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nID09PSBudWxsKSByZXR1cm5cclxuICAgIGNvbnN0IG5ld0F1ZGlvID0gbmV3IEF1ZGlvKGAvc291bmRzLyR7Y3VycmVudFBsYXlpbmd9Lm1wM2ApXHJcbiAgICBuZXdBdWRpby5sb29wID0gdHJ1ZVxyXG4gICAgbmV3QXVkaW8ucGxheSgpXHJcbiAgICBjdXJyZW50UGxheWluZ0VsZW1DKG5ld0F1ZGlvKVxyXG4gIH0sIFtjdXJyZW50UGxheWluZ10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChuZXdOYW1lQ2hhbmdlZEJ5VXNlcikgcmV0dXJuXHJcbiAgICBpZiAoaXNUaW1lcikge1xyXG4gICAgICBuZXdOYW1lQyhgJHtwcm9wcy5kZXNjLnRpbWVyT259ICR7bmV3SCA9PT0gMCA/IGBgIDogYCR7bmV3SCA8IDEwID8gXCIwXCIgKyBuZXdIIDogbmV3SH0gJHtwcm9wcy5kZXNjLnNob3J0LmhvdXJzfS4gYH0ke25ld01pbiA9PT0gMCA/IGBgIDogYCR7bmV3TWluIDwgMTAgPyBcIjBcIiArIG5ld01pbiA6IG5ld01pbn0gJHtwcm9wcy5kZXNjLnNob3J0Lm1pbn0uIGB9JHtuZXdTZWMgPT09IDAgPyAobmV3SCAhPT0gMCB8fCBuZXdNaW4gIT09IDAgPyBgYCA6IHByb3BzLmRlc2Muc2hvcnQuaW5zdGFudCkgOiBgJHtuZXdTZWMgPCAxMCA/IFwiMFwiICsgbmV3U2VjIDogbmV3U2VjfSAke3Byb3BzLmRlc2Muc2hvcnQuc2VjfS5gfWApXHJcbiAgICB9IGVsc2VcclxuICAgICAgbmV3TmFtZUMoYCR7cHJvcHMuZGVzYy5hbGFybU9ufSAke25ld0ggPCAxMCA/IFwiMFwiICsgbmV3SCA6IG5ld0h9OiR7bmV3TWluIDwgMTAgPyBcIjBcIiArIG5ld01pbiA6IG5ld01pbn0ke25ld1NlYyA9PT0gMCA/IGBgIDogYDoke25ld1NlYyA8IDEwID8gXCIwXCIgKyBuZXdTZWMgOiBuZXdTZWN9YH1gKVxyXG4gIH0sIFtuZXdILCBuZXdNaW4sIG5ld1NlYywgaXNUaW1lcl0pXHJcblxyXG4gIGZ1bmN0aW9uIGFkZCgpIHtcclxuICAgIGNvbnN0IHN0YXJ0ZWQgPSBEYXRlLm5vdygpXHJcbiAgICBjb25zdCB0aW1lc3RhbXAgPSAoKG5ld01pbiArIG5ld0ggKiA2MCkgKiA2MCArIG5ld1NlYykgKiAxMDAwXHJcbiAgICBhbGFybXNDKHByZXZTdGF0ZSA9PiBbe1xyXG4gICAgICBpZDogc3RhcnRlZCxcclxuICAgICAgc3RhcnRlZCxcclxuICAgICAgdGltZXN0YW1wLFxyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIG5hbWU6IG5ld05hbWUsXHJcbiAgICAgIGlzVGltZXI6IGlzVGltZXIsXHJcbiAgICAgIHNvdW5kOiBkZWZhdWx0U291bmQsXHJcbiAgICAgIGZpbmlzaDogZ2V0RmluaXNoVGltZXN0YW1wKGlzVGltZXIsIHN0YXJ0ZWQsIHRpbWVzdGFtcCksXHJcbiAgICB9LCAuLi5wcmV2U3RhdGVdKVxyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKGZhbHNlKVxyXG4gIH1cclxuICBmdW5jdGlvbiBhbGFybURlbGV0ZShpZCkge1xyXG4gICAgYWxhcm1zQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLmZpbHRlcihvYmogPT4gb2JqLmlkICE9PSBpZCkpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZUZpZWxkKGlkLCBmaWVsZCwgdmFsdWUpIHtcclxuICAgIGFsYXJtc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZS5tYXAob2JqID0+IG9iai5pZCA9PT0gaWQgPyB7IC4uLm9iaiwgW2ZpZWxkXTogdmFsdWUgfSA6IG9iaikpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHRpbWVyRGlzcGF0Y2goaWQpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBhbGFybXMuZmlsdGVyKG9iaiA9PiBvYmouaWQgPT09IGlkKVswXVxyXG4gICAgaWYgKGVsZW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICBjdXJyZW50UGxheWluZ0MoZWxlbS5zb3VuZClcclxuICAgIGN1cnJlbnRBbGFybXNDKGVsZW0uZmluaXNoKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzdG9wQ3VycmVudEFsYXJtcygpIHtcclxuICAgIGN1cnJlbnRBbGFybXNDKG51bGwpXHJcbiAgICBjdXJyZW50UGxheWluZ0MobnVsbClcclxuICB9XHJcbiAgZnVuY3Rpb24gY2hhbmdlT25UaW1lcih0aW1lKSB7XHJcbiAgICBuZXdOYW1lQ2hhbmdlZEJ5VXNlckMoZmFsc2UpXHJcbiAgICBpc1RpbWVyQyh0cnVlKVxyXG4gICAgbmV3SEMoKHRpbWUgLyAzNjAwKSB8IDApXHJcbiAgICBuZXdNaW5DKCh0aW1lIC8gNjAgJSA2MCkgfCAwKVxyXG4gICAgbmV3U2VjQygodGltZSAlIDYwKSB8IDApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZU9uQWxhcm0odGltZSkge1xyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKGZhbHNlKVxyXG4gICAgaXNUaW1lckMoZmFsc2UpXHJcbiAgICBuZXdIQygodGltZSAvIDYwKSB8IDApXHJcbiAgICBuZXdNaW5DKCh0aW1lICUgNjApIHwgMClcclxuICAgIG5ld1NlY0MoMClcclxuICB9XHJcbiAgY29uc3Qgc291bmRzID0gT2JqZWN0LmVudHJpZXMocHJvcHMuc291bmQpLm1hcChvYmogPT4gKHsgbDogb2JqWzBdLCBuOiBvYmpbMV0gfSkpXHJcbiAgZnVuY3Rpb24gZ2V0TnVtYmVycyhtYXgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld05hbWVDaGFuZ2UoZSkge1xyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKHRydWUpXHJcbiAgICBuZXdOYW1lQyhlLnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9IHJlZj17YmxvY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2xvY2t9PlxyXG4gICAgICA8Q2xvY2sgdGltZXN0YW1wPXtuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gcGF1c2VkPXtmYWxzZX0gZGlzcGxheU1zPXtmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICAgIDxkaXY+e25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgIDxGdWxsc2NyZWVuIGVsZW09e2Jsb2NrLmN1cnJlbnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5ld30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1RpbWVyID8gJycgOiBzLnNlbGVjdDJ9PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaXNUaW1lckModHJ1ZSl9Pntwcm9wcy5kZXNjLnRpbWVyfTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaXNUaW1lckMoZmFsc2UpfT57cHJvcHMuZGVzYy5hbGFybX08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9uZy5ob3Vyc308L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3SEMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMCA/IHByZXZTdGF0ZSAtIDEgOiAyMyl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld0h9IG9uQ2hhbmdlPXtlID0+IG5ld0hDKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT4ge2dldE51bWJlcnMoMjQpLm1hcChuID0+IDxvcHRpb24ga2V5PXtufSB2YWx1ZT17bn0+e259PC9vcHRpb24+KX0gPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld0hDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDIzID8gcHJldlN0YXRlICsgMSA6IDApfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9uZy5taW59PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld01pbkMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMCA/IHByZXZTdGF0ZSAtIDEgOiA1OSl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld01pbn0gb25DaGFuZ2U9e2UgPT4gbmV3TWluQyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+IHtnZXROdW1iZXJzKDYwKS5tYXAobiA9PiA8b3B0aW9uIGtleT17bn0gdmFsdWU9e259PntufTwvb3B0aW9uPil9IDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdNaW5DKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDU5ID8gcHJldlN0YXRlICsgMSA6IDApfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9uZy5zZWN9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld1NlY0MocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMCA/IHByZXZTdGF0ZSAtIDEgOiA1OSl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld1NlY30gb25DaGFuZ2U9e2UgPT4gbmV3U2VjQyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+IHtnZXROdW1iZXJzKDYwKS5tYXAobiA9PiA8b3B0aW9uIGtleT17bn0gdmFsdWU9e259PntufTwvb3B0aW9uPil9IDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdTZWNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDU5ID8gcHJldlN0YXRlICsgMSA6IDApfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubmFtZX08L2Rpdj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3TmFtZX0gb25DaGFuZ2U9e25ld05hbWVDaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLnNvdW5kfTwvZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwic291bmRcIiB2YWx1ZT17ZGVmYXVsdFNvdW5kfSBvbkNoYW5nZT17ZSA9PiBkZWZhdWx0U291bmRDKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgIHtzb3VuZHMubWFwKHNvdW5kID0+IDxvcHRpb24ga2V5PXtzb3VuZC5sfSB2YWx1ZT17c291bmQubH0gPntzb3VuZC5ufTwvb3B0aW9uPil9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIHtjdXJyZW50UGxheWluZyA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRlc3R9IG9uQ2xpY2s9eygpID0+IGN1cnJlbnRQbGF5aW5nQyhkZWZhdWx0U291bmQpfT7ilro8L2J1dHRvbj4gOlxyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5vZmZ9IG9uQ2xpY2s9eygpID0+IGN1cnJlbnRQbGF5aW5nQyhudWxsKX0+4pagPC9idXR0b24+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGR9Pntwcm9wcy5kZXNjLmFkZH08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmVsZW1lbnRzfT5cclxuICAgICAge2FsYXJtcy5tYXAob2JqID0+IDxFbGVtZW50IGtleT17b2JqLmlkfSB7Li4ub2JqfSBzb3VuZD17c291bmRzLmZpbHRlcihlbGVtID0+IGVsZW0ubCA9PT0gb2JqLnNvdW5kKVswXS5ufSB0aW1lckRpc3BhdGNoPXt0aW1lckRpc3BhdGNofSBjaGFuZ2VGaWVsZD17Y2hhbmdlRmllbGR9IGFsYXJtRGVsZXRlPXthbGFybURlbGV0ZX0gcHJvcHM9e3Byb3BzfSAvPil9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxBdXhpbGlhcnlMaXN0IGNoYW5nZU9uVGltZXI9e2NoYW5nZU9uVGltZXJ9IGNoYW5nZU9uQWxhcm09e2NoYW5nZU9uQWxhcm19IHByb3BzPXtwcm9wc30gLz5cclxuICAgIDxQb3B1cCBjdXJyZW50QWxhcm1zPXtjdXJyZW50QWxhcm1zfSBzdG9wQ3VycmVudEFsYXJtcz17c3RvcEN1cnJlbnRBbGFybXN9IHByb3BzPXtwcm9wc30gLz5cclxuICA8L2Rpdj5cclxufVxyXG4vL9Cb0LjRgdGCINGBINGA0LDQt9C90YvQvNC4INC80LXRgtC60LDQvNC4INCy0YDQtdC80LXQvdC4INC00LvRjyDQsdGD0LTQuNC70YzQvdC40LrQsCDQuCDRgtCw0LnQvNC10YDQsCBcclxuZnVuY3Rpb24gQXV4aWxpYXJ5TGlzdCh7IGNoYW5nZU9uVGltZXIsIGNoYW5nZU9uQWxhcm0sIHByb3BzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIobnVsbClcclxuICByZXR1cm4gPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxpc3R9PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLmFsYXJtT259PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2FsYXJtcy5tYXAodGltZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBodGV4dCA9ICh0aW1lIC8gNjApIHwgMFxyXG4gICAgICAgICAgY29uc3QgbXRleHQgPSB0aW1lICUgNjAgPT09IDAgPyBgMDBgIDogdGltZSAlIDYwXHJcbiAgICAgICAgICByZXR1cm4gPGEgaHJlZj17YC8ke3JvdXRlci5xdWVyeS5hcnRpY2xlWzBdfS8ke3Byb3BzLmFsYXJtfS8ke2h0ZXh0fS0ke210ZXh0fS9gfSBvbkNsaWNrPXtlID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBjaGFuZ2VPbkFsYXJtKHRpbWUpIH19IGtleT17dGltZX0+e2h0ZXh0fTp7bXRleHR9PC9hPlxyXG4gICAgICAgIH0pfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxpc3R9PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLnRpbWVyT259PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RpbWVycy5tYXAodGltZXIgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbnVtID0gdGltZXIgPCA2MCA/IHRpbWVyIDogdGltZXIgPCAzNjAwID8gdGltZXIgLyA2MCA6IHRpbWVyIC8gMzYwMFxyXG4gICAgICAgICAgY29uc3QgbGFiZWwgPSB0aW1lciA8IDYwID8gJ3NlYycgOiB0aW1lciA8IDM2MDAgPyAnbWluJyA6ICdob3VycydcclxuICAgICAgICAgIHJldHVybiA8YSBocmVmPXtgLyR7cm91dGVyLnF1ZXJ5LmFydGljbGVbMF19LyR7cHJvcHMudGltZXJ9LyR7bnVtfSR7bGFiZWx9L2B9IG9uQ2xpY2s9e2UgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGNoYW5nZU9uVGltZXIodGltZXIpIH19IGtleT17dGltZXJ9PntudW19IHt0aW1lciA8IDYwID8gcHJvcHMuZGVzYy5zaG9ydC5zZWMgOiB0aW1lciA8IDM2MDAgPyBwcm9wcy5kZXNjLnNob3J0Lm1pbiA6IHByb3BzLmRlc2Muc2hvcnQuaG91cnN9PC9hPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvPlxyXG59XHJcbi8v0J7Qv9C+0LLQtdGJ0LXQvdC40LVcclxuZnVuY3Rpb24gUG9wdXAoeyBjdXJyZW50QWxhcm1zLCBzdG9wQ3VycmVudEFsYXJtcywgcHJvcHMgfSkge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7cy5wb3B1cH0gJHtjdXJyZW50QWxhcm1zID8gcy5kaXNwbGF5IDogXCJcIn1gfT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2N1cnJlbnRBbGFybXMgP1xyXG4gICAgICAgICAgPENsb2NrIHRpbWVzdGFtcD17RGF0ZS5ub3coKSAtIGN1cnJlbnRBbGFybXMgKyBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gZGlzcGxheU1zPXtmYWxzZX0gcGF1c2VkPXt0cnVlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5ncmVlbn0gb25DbGljaz17c3RvcEN1cnJlbnRBbGFybXN9Pntwcm9wcy5kZXNjLm9mZn08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZnVuY3Rpb24gRWxlbWVudCh7IGlkLCBzdGFydGVkLCB0aW1lc3RhbXAsIGFjdGl2ZSwgc291bmQsIG5hbWUsIHRpbWVyRGlzcGF0Y2gsIGlzVGltZXIsIGNoYW5nZUZpZWxkLCBhbGFybURlbGV0ZSwgZmluaXNoLCBwcm9wcyB9KSB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCh3YWtldXAsIGZpbmlzaCAtIERhdGUubm93KCkpXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZV0pXHJcbiAgZnVuY3Rpb24gd2FrZXVwKCkge1xyXG4gICAgY2hhbmdlRmllbGQoaWQsICdhY3RpdmUnLCBmYWxzZSlcclxuICAgIHRpbWVyRGlzcGF0Y2goaWQpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgY2hhbmdlRmllbGQoaWQsICdzdGFydGVkJywgbm93KVxyXG4gICAgY2hhbmdlRmllbGQoaWQsICdmaW5pc2gnLCBnZXRGaW5pc2hUaW1lc3RhbXAoaXNUaW1lciwgbm93LCB0aW1lc3RhbXApKVxyXG4gICAgY2hhbmdlRmllbGQoaWQsICdhY3RpdmUnLCB0cnVlKVxyXG4gIH1cclxuICBmdW5jdGlvbiBvZmYoKSB7XHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIGZhbHNlKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBrZXk9e2lkfT5cclxuICAgIDxkaXY+e2lzVGltZXIgPyBwcm9wcy5kZXNjLnRpbWVyIDogcHJvcHMuZGVzYy5hbGFybX08L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIHtuYW1lfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLnN0YXJ0ZWRUaW1lfTwvZGl2PlxyXG4gICAgICA8Q2xvY2sgdGltZXN0YW1wPXtEYXRlLm5vdygpIC0gc3RhcnRlZCArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBwYXVzZWQ9e3RydWV9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLmZpbmlzaFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e0RhdGUubm93KCkgLSBmaW5pc2ggKyBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gcGF1c2VkPXt0cnVlfSBkaXNwbGF5TXM9e2ZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5zb3VuZH08L2Rpdj5cclxuICAgICAgPGRpdj57c291bmR9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MubGVmdFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e2FjdGl2ZSA/IGZpbmlzaCA6IG51bGx9IHBhdXNlZD17YWN0aXZlID09PSBmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIHthY3RpdmUgP1xyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5yZWR9IG9uQ2xpY2s9e29mZn0+e3Byb3BzLmRlc2Mub2ZmfTwvYnV0dG9uPiA6XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmdyZWVufSBvbkNsaWNrPXtvbn0+e3Byb3BzLmRlc2MucmVwZWF0fTwvYnV0dG9uPlxyXG4gICAgfVxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MucmVkfSBvbkNsaWNrPXsoKSA9PiBhbGFybURlbGV0ZShpZCl9Pntwcm9wcy5kZXNjLmRlbGV0ZX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxufVxyXG4vL9Cf0L7Qu9GD0YfQuNGC0Ywg0YTQuNC90LDQu9GM0L3Rg9GOINC80LXRgtC60YMg0LLRgNC10LzQtdC90LggKNC+0LrQvtC90YfQsNC90LjQtSDRgtCw0LnQvNC10YDQsClcclxuZnVuY3Rpb24gZ2V0RmluaXNoVGltZXN0YW1wKGlzVGltZXIsIHN0YXJ0ZWQsIHRpbWVzdGFtcCkge1xyXG4gIGlmIChpc1RpbWVyKSByZXR1cm4gc3RhcnRlZCArIHRpbWVzdGFtcCArIDEwXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0YXJ0ZWQpXHJcbiAgY29uc3QgcyA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcbiAgY29uc3QgbSA9IGRhdGUuZ2V0TWludXRlcygpXHJcbiAgY29uc3QgaCA9IGRhdGUuZ2V0SG91cnMoKVxyXG4gIGNvbnN0IG1vZHVsbyA9ICgoaCAqIDYwICsgbSkgKiA2MCArIHMpICogMTAwMFxyXG4gIGlmIChtb2R1bG8gPCB0aW1lc3RhbXApIHtcclxuICAgIHJldHVybiB0aW1lc3RhbXAgLSBtb2R1bG8gKyBzdGFydGVkXHJcbiAgfSBlbHNlIHJldHVybiB0aW1lc3RhbXAgLSBtb2R1bG8gKyAoMzYwMDAwMCAqIDI0KSArIHN0YXJ0ZWRcclxufSJdLCJzb3VyY2VSb290IjoiIn0=