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
          var label = timer < 60 ? 's' : timer < 3600 ? 'm' : 'h';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UaW1lci5qcyJdLCJuYW1lcyI6WyJ0aW1lcnMiLCJub3ciLCJEYXRlIiwiaCIsImdldEhvdXJzIiwiYWxhcm1zIiwiaSIsInB1c2giLCJTdG9wd2F0Y2giLCJwcm9wcyIsInNsdWciLCJ1c2VTdGF0ZSIsImFsYXJtc0MiLCJkZWZhdWx0U291bmQiLCJkZWZhdWx0U291bmRDIiwiaXNUaW1lciIsImlzVGltZXJDIiwibmV3TmFtZSIsIm5ld05hbWVDIiwibmV3TmFtZUNoYW5nZWRCeVVzZXIiLCJuZXdOYW1lQ2hhbmdlZEJ5VXNlckMiLCJ2YWx1ZSIsImhvdXJzIiwidW5kZWZpbmVkIiwibmV3SCIsIm5ld0hDIiwibWluIiwibmV3TWluIiwibmV3TWluQyIsInNlYyIsIm5ld1NlYyIsIm5ld1NlY0MiLCJjdXJyZW50QWxhcm1zIiwiY3VycmVudEFsYXJtc0MiLCJjdXJyZW50UGxheWluZyIsImN1cnJlbnRQbGF5aW5nQyIsImN1cnJlbnRQbGF5aW5nRWxlbSIsImN1cnJlbnRQbGF5aW5nRWxlbUMiLCJibG9jayIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInN0b3JlSXRlbXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RvcmVTb3VuZCIsInF1ZXJ5IiwiYXJ0aWNsZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwYXVzZSIsIm5ld0F1ZGlvIiwiQXVkaW8iLCJsb29wIiwicGxheSIsImRlc2MiLCJ0aW1lck9uIiwiaW5zdGFudCIsImFsYXJtT24iLCJhZGQiLCJzdGFydGVkIiwidGltZXN0YW1wIiwicHJldlN0YXRlIiwiaWQiLCJhY3RpdmUiLCJuYW1lIiwic291bmQiLCJmaW5pc2giLCJnZXRGaW5pc2hUaW1lc3RhbXAiLCJhbGFybURlbGV0ZSIsImZpbHRlciIsIm9iaiIsImNoYW5nZUZpZWxkIiwiZmllbGQiLCJtYXAiLCJ0aW1lckRpc3BhdGNoIiwiZWxlbSIsInN0b3BDdXJyZW50QWxhcm1zIiwiY2hhbmdlT25UaW1lciIsInRpbWUiLCJjaGFuZ2VPbkFsYXJtIiwic291bmRzIiwiT2JqZWN0IiwiZW50cmllcyIsImwiLCJuIiwiZ2V0TnVtYmVycyIsIm1heCIsInJlc3VsdCIsIm5ld05hbWVDaGFuZ2UiLCJlIiwicyIsImNsb2NrIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJsYWJlbHMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiY3VycmVudCIsInNlbGVjdDIiLCJ0aW1lciIsImFsYXJtIiwiTnVtYmVyIiwidGFyZ2V0IiwidGVzdCIsIm9mZiIsImVsZW1lbnRzIiwiQXV4aWxpYXJ5TGlzdCIsImxpc3QiLCJodGV4dCIsIm10ZXh0IiwicHJldmVudERlZmF1bHQiLCJudW0iLCJsYWJlbCIsIlBvcHVwIiwicG9wdXAiLCJkaXNwbGF5IiwiZ3JlZW4iLCJFbGVtZW50Iiwic2V0VGltZW91dCIsIndha2V1cCIsImNsZWFyVGltZW91dCIsIm9uIiwic3RhcnRlZFRpbWUiLCJmaW5pc2hUaW1lIiwibGVmdFRpbWUiLCJyZWQiLCJyZXBlYXQiLCJkYXRlIiwiZ2V0U2Vjb25kcyIsIm0iLCJnZXRNaW51dGVzIiwibW9kdWxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLEVBQStDLEdBQS9DLEVBQW9ELElBQXBELEVBQTBELElBQTFELEVBQWdFLElBQWhFLEVBQXNFLElBQXRFLEVBQTRFLElBQTVFLEVBQWtGLEtBQWxGLEVBQXlGLEtBQXpG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K0IsQ0FBQyxHQUFHdUMsSUFBSSxDQUFDQyxVQUFMLEVBQVY7QUFDQSxNQUFNQyxDQUFDLEdBQUdGLElBQUksQ0FBQ0csVUFBTCxFQUFWO0FBQ0EsTUFBTXJJLENBQUMsR0FBR2tJLElBQUksQ0FBQ2pJLFFBQUwsRUFBVjtBQUNBLE1BQU1xSSxNQUFNLEdBQUcsQ0FBQyxDQUFDdEksQ0FBQyxHQUFHLEVBQUosR0FBU29JLENBQVYsSUFBZSxFQUFmLEdBQW9CekMsQ0FBckIsSUFBMEIsSUFBekM7O0FBQ0EsTUFBSTJDLE1BQU0sR0FBR3pFLFNBQWIsRUFBd0I7QUFDdEIsV0FBT0EsU0FBUyxHQUFHeUUsTUFBWixHQUFxQjFFLE9BQTVCO0FBQ0QsR0FGRCxNQUVPLE9BQU9DLFNBQVMsR0FBR3lFLE1BQVosR0FBc0IsVUFBVSxFQUFoQyxHQUFzQzFFLE9BQTdDO0FBQ1IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjUyNjNhMzVlMTE5NDJmYzc5NTEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy90aW1lci5zdHlsJ1xyXG5pbXBvcnQgU3ZnIGZyb20gJy4uL1N2ZydcclxuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICcuL1N0b3B3YXRjaCdcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuY29uc3QgdGltZXJzID0gWzE1LCAzMCwgNjAsIDkwLCAxMjAsIDE1MCwgMTgwLCAzMDAsIDQyMCwgNjAwLCA5MDAsIDEyMDAsIDE4MDAsIDI3MDAsIDM2MDAsIDcyMDAsIDEwODAwLCAyMTYwMCwgMzI0MDAsIDQzMjAwLCA2NDgwMCwgODY0MDBdXHJcblxyXG5jb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbmNvbnN0IGggPSBub3cuZ2V0SG91cnMoKSAqIDYwXHJcbmNvbnN0IGFsYXJtcyA9IFtdXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgOTY7IGkrKykge1xyXG4gIGlmIChoICsgaSAqIDE1ID49IDI0ICogNjApIHtcclxuICAgIGFsYXJtcy5wdXNoKGggLSAyNCAqIDYwICsgaSAqIDE1KVxyXG4gIH0gZWxzZSBhbGFybXMucHVzaChoICsgaSAqIDE1KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9wd2F0Y2goeyBwcm9wcywgc2x1ZyB9KSB7XHJcbiAgY29uc3QgW2FsYXJtcywgYWxhcm1zQ10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZGVmYXVsdFNvdW5kLCBkZWZhdWx0U291bmRDXSA9IHVzZVN0YXRlKCd0cmFucXVpbGl0eScpXHJcbiAgY29uc3QgW2lzVGltZXIsIGlzVGltZXJDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtuZXdOYW1lLCBuZXdOYW1lQ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbmV3TmFtZUNoYW5nZWRCeVVzZXIsIG5ld05hbWVDaGFuZ2VkQnlVc2VyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbmV3SCwgbmV3SENdID0gdXNlU3RhdGUocHJvcHMudmFsdWUuaG91cnMgIT09IHVuZGVmaW5lZCA/IHByb3BzLnZhbHVlLmhvdXJzIDogMClcclxuICBjb25zdCBbbmV3TWluLCBuZXdNaW5DXSA9IHVzZVN0YXRlKHByb3BzLnZhbHVlLm1pbiAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUubWluIDogMClcclxuICBjb25zdCBbbmV3U2VjLCBuZXdTZWNDXSA9IHVzZVN0YXRlKHByb3BzLnZhbHVlLnNlYyAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUuc2VjIDogMClcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRBbGFybXMsIGN1cnJlbnRBbGFybXNDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2N1cnJlbnRQbGF5aW5nLCBjdXJyZW50UGxheWluZ0NdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbY3VycmVudFBsYXlpbmdFbGVtLCBjdXJyZW50UGxheWluZ0VsZW1DXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxhcm1JdGVtcycpXHJcbiAgICBpZiAoc3RvcmVJdGVtcyA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBhbGFybXNDKEpTT04ucGFyc2Uoc3RvcmVJdGVtcykpXHJcbiAgICBjb25zdCBzdG9yZVNvdW5kID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsYXJtU291bmQnKVxyXG4gICAgaWYgKHN0b3JlU291bmQgPT09IG51bGwpIHJldHVyblxyXG4gICAgZGVmYXVsdFNvdW5kQyhzdG9yZVNvdW5kKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc1RpbWVyQyhzbHVnID09PSAndGltZXInKVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuYXJ0aWNsZV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGFybUl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYWxhcm1zKSlcclxuICB9LCBbYWxhcm1zXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsYXJtU291bmQnLCBkZWZhdWx0U291bmQpXHJcbiAgfSwgW2RlZmF1bHRTb3VuZF0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50UGxheWluZ0VsZW0gIT09IG51bGwpIGN1cnJlbnRQbGF5aW5nRWxlbS5wYXVzZSgpXHJcbiAgICBpZiAoY3VycmVudFBsYXlpbmcgPT09IG51bGwpIHJldHVyblxyXG4gICAgY29uc3QgbmV3QXVkaW8gPSBuZXcgQXVkaW8oYC9zb3VuZHMvJHtjdXJyZW50UGxheWluZ30ubXAzYClcclxuICAgIG5ld0F1ZGlvLmxvb3AgPSB0cnVlXHJcbiAgICBuZXdBdWRpby5wbGF5KClcclxuICAgIGN1cnJlbnRQbGF5aW5nRWxlbUMobmV3QXVkaW8pXHJcbiAgfSwgW2N1cnJlbnRQbGF5aW5nXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5ld05hbWVDaGFuZ2VkQnlVc2VyKSByZXR1cm5cclxuICAgIGlmIChpc1RpbWVyKSB7XHJcbiAgICAgIG5ld05hbWVDKGAke3Byb3BzLmRlc2MudGltZXJPbn0gJHtuZXdIID09PSAwID8gYGAgOiBgJHtuZXdIIDwgMTAgPyBcIjBcIiArIG5ld0ggOiBuZXdIfSAke3Byb3BzLmRlc2Muc2hvcnQuaG91cnN9LiBgfSR7bmV3TWluID09PSAwID8gYGAgOiBgJHtuZXdNaW4gPCAxMCA/IFwiMFwiICsgbmV3TWluIDogbmV3TWlufSAke3Byb3BzLmRlc2Muc2hvcnQubWlufS4gYH0ke25ld1NlYyA9PT0gMCA/IChuZXdIICE9PSAwIHx8IG5ld01pbiAhPT0gMCA/IGBgIDogcHJvcHMuZGVzYy5zaG9ydC5pbnN0YW50KSA6IGAke25ld1NlYyA8IDEwID8gXCIwXCIgKyBuZXdTZWMgOiBuZXdTZWN9ICR7cHJvcHMuZGVzYy5zaG9ydC5zZWN9LmB9YClcclxuICAgIH0gZWxzZVxyXG4gICAgICBuZXdOYW1lQyhgJHtwcm9wcy5kZXNjLmFsYXJtT259ICR7bmV3SCA8IDEwID8gXCIwXCIgKyBuZXdIIDogbmV3SH06JHtuZXdNaW4gPCAxMCA/IFwiMFwiICsgbmV3TWluIDogbmV3TWlufSR7bmV3U2VjID09PSAwID8gYGAgOiBgOiR7bmV3U2VjIDwgMTAgPyBcIjBcIiArIG5ld1NlYyA6IG5ld1NlY31gfWApXHJcbiAgfSwgW25ld0gsIG5ld01pbiwgbmV3U2VjLCBpc1RpbWVyXSlcclxuXHJcbiAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgY29uc3Qgc3RhcnRlZCA9IERhdGUubm93KClcclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9ICgobmV3TWluICsgbmV3SCAqIDYwKSAqIDYwICsgbmV3U2VjKSAqIDEwMDBcclxuICAgIGFsYXJtc0MocHJldlN0YXRlID0+IFt7XHJcbiAgICAgIGlkOiBzdGFydGVkLFxyXG4gICAgICBzdGFydGVkLFxyXG4gICAgICB0aW1lc3RhbXAsXHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgbmFtZTogbmV3TmFtZSxcclxuICAgICAgaXNUaW1lcjogaXNUaW1lcixcclxuICAgICAgc291bmQ6IGRlZmF1bHRTb3VuZCxcclxuICAgICAgZmluaXNoOiBnZXRGaW5pc2hUaW1lc3RhbXAoaXNUaW1lciwgc3RhcnRlZCwgdGltZXN0YW1wKSxcclxuICAgIH0sIC4uLnByZXZTdGF0ZV0pXHJcbiAgICBuZXdOYW1lQ2hhbmdlZEJ5VXNlckMoZmFsc2UpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFsYXJtRGVsZXRlKGlkKSB7XHJcbiAgICBhbGFybXNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUuZmlsdGVyKG9iaiA9PiBvYmouaWQgIT09IGlkKSlcclxuICB9XHJcbiAgZnVuY3Rpb24gY2hhbmdlRmllbGQoaWQsIGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgYWxhcm1zQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLm1hcChvYmogPT4gb2JqLmlkID09PSBpZCA/IHsgLi4ub2JqLCBbZmllbGRdOiB2YWx1ZSB9IDogb2JqKSlcclxuICB9XHJcbiAgZnVuY3Rpb24gdGltZXJEaXNwYXRjaChpZCkge1xyXG4gICAgY29uc3QgZWxlbSA9IGFsYXJtcy5maWx0ZXIob2JqID0+IG9iai5pZCA9PT0gaWQpWzBdXHJcbiAgICBpZiAoZWxlbSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgIGN1cnJlbnRQbGF5aW5nQyhlbGVtLnNvdW5kKVxyXG4gICAgY3VycmVudEFsYXJtc0MoZWxlbS5maW5pc2gpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHN0b3BDdXJyZW50QWxhcm1zKCkge1xyXG4gICAgY3VycmVudEFsYXJtc0MobnVsbClcclxuICAgIGN1cnJlbnRQbGF5aW5nQyhudWxsKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjaGFuZ2VPblRpbWVyKHRpbWUpIHtcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyhmYWxzZSlcclxuICAgIGlzVGltZXJDKHRydWUpXHJcbiAgICBuZXdIQygodGltZSAvIDM2MDApIHwgMClcclxuICAgIG5ld01pbkMoKHRpbWUgLyA2MCAlIDYwKSB8IDApXHJcbiAgICBuZXdTZWNDKCh0aW1lICUgNjApIHwgMClcclxuICB9XHJcbiAgZnVuY3Rpb24gY2hhbmdlT25BbGFybSh0aW1lKSB7XHJcbiAgICBuZXdOYW1lQ2hhbmdlZEJ5VXNlckMoZmFsc2UpXHJcbiAgICBpc1RpbWVyQyhmYWxzZSlcclxuICAgIG5ld0hDKCh0aW1lIC8gNjApIHwgMClcclxuICAgIG5ld01pbkMoKHRpbWUgJSA2MCkgfCAwKVxyXG4gICAgbmV3U2VjQygwKVxyXG4gIH1cclxuICBjb25zdCBzb3VuZHMgPSBPYmplY3QuZW50cmllcyhwcm9wcy5zb3VuZCkubWFwKG9iaiA9PiAoeyBsOiBvYmpbMF0sIG46IG9ialsxXSB9KSlcclxuICBmdW5jdGlvbiBnZXROdW1iZXJzKG1heCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcclxuICAgICAgcmVzdWx0LnB1c2goaSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcbiAgZnVuY3Rpb24gbmV3TmFtZUNoYW5nZShlKSB7XHJcbiAgICBuZXdOYW1lQ2hhbmdlZEJ5VXNlckModHJ1ZSlcclxuICAgIG5ld05hbWVDKGUudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5ibG9ja30gcmVmPXtibG9ja30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jbG9ja30+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e25ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBwYXVzZWQ9e2ZhbHNlfSBkaXNwbGF5TXM9e2ZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgICAgPGRpdj57bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubmV3fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVGltZXIgPyAnJyA6IHMuc2VsZWN0Mn0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpc1RpbWVyQyh0cnVlKX0+e3Byb3BzLmRlc2MudGltZXJ9PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpc1RpbWVyQyhmYWxzZSl9Pntwcm9wcy5kZXNjLmFsYXJtfTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sb25nLmhvdXJzfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdIQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSAwID8gcHJldlN0YXRlIC0gMSA6IDIzKX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bmV3SH0gb25DaGFuZ2U9e2UgPT4gbmV3SEMoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PiB7Z2V0TnVtYmVycygyNCkubWFwKG4gPT4gPG9wdGlvbiBrZXk9e259IHZhbHVlPXtufT57bn08L29wdGlvbj4pfSA8L3NlbGVjdD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3SEMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMjMgPyBwcmV2U3RhdGUgKyAxIDogMCl9Pis8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sb25nLm1pbn08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3TWluQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSAwID8gcHJldlN0YXRlIC0gMSA6IDU5KX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bmV3TWlufSBvbkNoYW5nZT17ZSA9PiBuZXdNaW5DKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT4ge2dldE51bWJlcnMoNjApLm1hcChuID0+IDxvcHRpb24ga2V5PXtufSB2YWx1ZT17bn0+e259PC9vcHRpb24+KX0gPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld01pbkMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gNTkgPyBwcmV2U3RhdGUgKyAxIDogMCl9Pis8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sb25nLnNlY308L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3U2VjQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSAwID8gcHJldlN0YXRlIC0gMSA6IDU5KX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bmV3U2VjfSBvbkNoYW5nZT17ZSA9PiBuZXdTZWNDKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT4ge2dldE51bWJlcnMoNjApLm1hcChuID0+IDxvcHRpb24ga2V5PXtufSB2YWx1ZT17bn0+e259PC9vcHRpb24+KX0gPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld1NlY0MocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gNTkgPyBwcmV2U3RhdGUgKyAxIDogMCl9Pis8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuZXdOYW1lfSBvbkNoYW5nZT17bmV3TmFtZUNoYW5nZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2Muc291bmR9PC9kaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzb3VuZFwiIHZhbHVlPXtkZWZhdWx0U291bmR9IG9uQ2hhbmdlPXtlID0+IGRlZmF1bHRTb3VuZEMoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAge3NvdW5kcy5tYXAoc291bmQgPT4gPG9wdGlvbiBrZXk9e3NvdW5kLmx9IHZhbHVlPXtzb3VuZC5sfSA+e3NvdW5kLm59PC9vcHRpb24+KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAge2N1cnJlbnRQbGF5aW5nID09PSBudWxsID9cclxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGVzdH0gb25DbGljaz17KCkgPT4gY3VycmVudFBsYXlpbmdDKGRlZmF1bHRTb3VuZCl9PuKWujwvYnV0dG9uPiA6XHJcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLm9mZn0gb25DbGljaz17KCkgPT4gY3VycmVudFBsYXlpbmdDKG51bGwpfT7ilqA8L2J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZH0+e3Byb3BzLmRlc2MuYWRkfTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuZWxlbWVudHN9PlxyXG4gICAgICB7YWxhcm1zLm1hcChvYmogPT4gPEVsZW1lbnQga2V5PXtvYmouaWR9IHsuLi5vYmp9IHNvdW5kPXtzb3VuZHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5sID09PSBvYmouc291bmQpWzBdLm59IHRpbWVyRGlzcGF0Y2g9e3RpbWVyRGlzcGF0Y2h9IGNoYW5nZUZpZWxkPXtjaGFuZ2VGaWVsZH0gYWxhcm1EZWxldGU9e2FsYXJtRGVsZXRlfSBwcm9wcz17cHJvcHN9IC8+KX1cclxuICAgIDwvZGl2PlxyXG4gICAgPEF1eGlsaWFyeUxpc3QgY2hhbmdlT25UaW1lcj17Y2hhbmdlT25UaW1lcn0gY2hhbmdlT25BbGFybT17Y2hhbmdlT25BbGFybX0gcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgPFBvcHVwIGN1cnJlbnRBbGFybXM9e2N1cnJlbnRBbGFybXN9IHN0b3BDdXJyZW50QWxhcm1zPXtzdG9wQ3VycmVudEFsYXJtc30gcHJvcHM9e3Byb3BzfSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcbi8v0JvQuNGB0YIg0YEg0YDQsNC30L3Ri9C80Lgg0LzQtdGC0LrQsNC80Lgg0LLRgNC10LzQtdC90Lgg0LTQu9GPINCx0YPQtNC40LvRjNC90LjQutCwINC4INGC0LDQudC80LXRgNCwIFxyXG5mdW5jdGlvbiBBdXhpbGlhcnlMaXN0KHsgY2hhbmdlT25UaW1lciwgY2hhbmdlT25BbGFybSwgcHJvcHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcihudWxsKVxyXG4gIHJldHVybiA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MuYWxhcm1Pbn08L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YWxhcm1zLm1hcCh0aW1lID0+IHtcclxuICAgICAgICAgIGNvbnN0IGh0ZXh0ID0gKHRpbWUgLyA2MCkgfCAwXHJcbiAgICAgICAgICBjb25zdCBtdGV4dCA9IHRpbWUgJSA2MCA9PT0gMCA/IGAwMGAgOiB0aW1lICUgNjBcclxuICAgICAgICAgIHJldHVybiA8YSBocmVmPXtgLyR7cm91dGVyLnF1ZXJ5LmFydGljbGVbMF19LyR7cHJvcHMuYWxhcm19LyR7aHRleHR9LSR7bXRleHR9L2B9IG9uQ2xpY2s9e2UgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGNoYW5nZU9uQWxhcm0odGltZSkgfX0ga2V5PXt0aW1lfT57aHRleHR9OnttdGV4dH08L2E+XHJcbiAgICAgICAgfSl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MudGltZXJPbn08L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGltZXJzLm1hcCh0aW1lciA9PiB7XHJcbiAgICAgICAgICBjb25zdCBudW0gPSB0aW1lciA8IDYwID8gdGltZXIgOiB0aW1lciA8IDM2MDAgPyB0aW1lciAvIDYwIDogdGltZXIgLyAzNjAwXHJcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IHRpbWVyIDwgNjAgPyAncycgOiB0aW1lciA8IDM2MDAgPyAnbScgOiAnaCdcclxuICAgICAgICAgIHJldHVybiA8YSBocmVmPXtgLyR7cm91dGVyLnF1ZXJ5LmFydGljbGVbMF19LyR7cHJvcHMudGltZXJ9LyR7bnVtfSR7bGFiZWx9L2B9IG9uQ2xpY2s9e2UgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGNoYW5nZU9uVGltZXIodGltZXIpIH19IGtleT17dGltZXJ9PntudW19IHt0aW1lciA8IDYwID8gcHJvcHMuZGVzYy5zaG9ydC5zZWMgOiB0aW1lciA8IDM2MDAgPyBwcm9wcy5kZXNjLnNob3J0Lm1pbiA6IHByb3BzLmRlc2Muc2hvcnQuaG91cnN9PC9hPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvPlxyXG59XHJcbi8v0J7Qv9C+0LLQtdGJ0LXQvdC40LVcclxuZnVuY3Rpb24gUG9wdXAoeyBjdXJyZW50QWxhcm1zLCBzdG9wQ3VycmVudEFsYXJtcywgcHJvcHMgfSkge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7cy5wb3B1cH0gJHtjdXJyZW50QWxhcm1zID8gcy5kaXNwbGF5IDogXCJcIn1gfT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2N1cnJlbnRBbGFybXMgP1xyXG4gICAgICAgICAgPENsb2NrIHRpbWVzdGFtcD17RGF0ZS5ub3coKSAtIGN1cnJlbnRBbGFybXMgKyBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gZGlzcGxheU1zPXtmYWxzZX0gcGF1c2VkPXt0cnVlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5ncmVlbn0gb25DbGljaz17c3RvcEN1cnJlbnRBbGFybXN9Pntwcm9wcy5kZXNjLm9mZn08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZnVuY3Rpb24gRWxlbWVudCh7IGlkLCBzdGFydGVkLCB0aW1lc3RhbXAsIGFjdGl2ZSwgc291bmQsIG5hbWUsIHRpbWVyRGlzcGF0Y2gsIGlzVGltZXIsIGNoYW5nZUZpZWxkLCBhbGFybURlbGV0ZSwgZmluaXNoLCBwcm9wcyB9KSB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCh3YWtldXAsIGZpbmlzaCAtIERhdGUubm93KCkpXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZV0pXHJcbiAgZnVuY3Rpb24gd2FrZXVwKCkge1xyXG4gICAgY2hhbmdlRmllbGQoaWQsICdhY3RpdmUnLCBmYWxzZSlcclxuICAgIHRpbWVyRGlzcGF0Y2goaWQpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgY2hhbmdlRmllbGQoaWQsICdzdGFydGVkJywgbm93KVxyXG4gICAgY2hhbmdlRmllbGQoaWQsICdmaW5pc2gnLCBnZXRGaW5pc2hUaW1lc3RhbXAoaXNUaW1lciwgbm93LCB0aW1lc3RhbXApKVxyXG4gICAgY2hhbmdlRmllbGQoaWQsICdhY3RpdmUnLCB0cnVlKVxyXG4gIH1cclxuICBmdW5jdGlvbiBvZmYoKSB7XHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIGZhbHNlKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBrZXk9e2lkfT5cclxuICAgIDxkaXY+e2lzVGltZXIgPyBwcm9wcy5kZXNjLnRpbWVyIDogcHJvcHMuZGVzYy5hbGFybX08L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIHtuYW1lfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLnN0YXJ0ZWRUaW1lfTwvZGl2PlxyXG4gICAgICA8Q2xvY2sgdGltZXN0YW1wPXtEYXRlLm5vdygpIC0gc3RhcnRlZCArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBwYXVzZWQ9e3RydWV9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLmZpbmlzaFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e0RhdGUubm93KCkgLSBmaW5pc2ggKyBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gcGF1c2VkPXt0cnVlfSBkaXNwbGF5TXM9e2ZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5zb3VuZH08L2Rpdj5cclxuICAgICAgPGRpdj57c291bmR9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MubGVmdFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e2FjdGl2ZSA/IGZpbmlzaCA6IG51bGx9IHBhdXNlZD17YWN0aXZlID09PSBmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIHthY3RpdmUgP1xyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5yZWR9IG9uQ2xpY2s9e29mZn0+e3Byb3BzLmRlc2Mub2ZmfTwvYnV0dG9uPiA6XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmdyZWVufSBvbkNsaWNrPXtvbn0+e3Byb3BzLmRlc2MucmVwZWF0fTwvYnV0dG9uPlxyXG4gICAgfVxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MucmVkfSBvbkNsaWNrPXsoKSA9PiBhbGFybURlbGV0ZShpZCl9Pntwcm9wcy5kZXNjLmRlbGV0ZX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxufVxyXG4vL9Cf0L7Qu9GD0YfQuNGC0Ywg0YTQuNC90LDQu9GM0L3Rg9GOINC80LXRgtC60YMg0LLRgNC10LzQtdC90LggKNC+0LrQvtC90YfQsNC90LjQtSDRgtCw0LnQvNC10YDQsClcclxuZnVuY3Rpb24gZ2V0RmluaXNoVGltZXN0YW1wKGlzVGltZXIsIHN0YXJ0ZWQsIHRpbWVzdGFtcCkge1xyXG4gIGlmIChpc1RpbWVyKSByZXR1cm4gc3RhcnRlZCArIHRpbWVzdGFtcCArIDEwXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0YXJ0ZWQpXHJcbiAgY29uc3QgcyA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcbiAgY29uc3QgbSA9IGRhdGUuZ2V0TWludXRlcygpXHJcbiAgY29uc3QgaCA9IGRhdGUuZ2V0SG91cnMoKVxyXG4gIGNvbnN0IG1vZHVsbyA9ICgoaCAqIDYwICsgbSkgKiA2MCArIHMpICogMTAwMFxyXG4gIGlmIChtb2R1bG8gPCB0aW1lc3RhbXApIHtcclxuICAgIHJldHVybiB0aW1lc3RhbXAgLSBtb2R1bG8gKyBzdGFydGVkXHJcbiAgfSBlbHNlIHJldHVybiB0aW1lc3RhbXAgLSBtb2R1bG8gKyAoMzYwMDAwMCAqIDI0KSArIHN0YXJ0ZWRcclxufSJdLCJzb3VyY2VSb290IjoiIn0=