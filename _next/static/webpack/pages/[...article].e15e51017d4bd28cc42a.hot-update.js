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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UaW1lci5qcyJdLCJuYW1lcyI6WyJ0aW1lcnMiLCJub3ciLCJEYXRlIiwiaCIsImdldEhvdXJzIiwiYWxhcm1zIiwiaSIsInB1c2giLCJTdG9wd2F0Y2giLCJwcm9wcyIsInNsdWciLCJ1c2VTdGF0ZSIsImFsYXJtc0MiLCJkZWZhdWx0U291bmQiLCJkZWZhdWx0U291bmRDIiwiaXNUaW1lciIsImlzVGltZXJDIiwibmV3TmFtZSIsIm5ld05hbWVDIiwibmV3TmFtZUNoYW5nZWRCeVVzZXIiLCJuZXdOYW1lQ2hhbmdlZEJ5VXNlckMiLCJ2YWx1ZSIsImhvdXJzIiwidW5kZWZpbmVkIiwibmV3SCIsIm5ld0hDIiwibWluIiwibmV3TWluIiwibmV3TWluQyIsInNlYyIsIm5ld1NlYyIsIm5ld1NlY0MiLCJjdXJyZW50QWxhcm1zIiwiY3VycmVudEFsYXJtc0MiLCJjdXJyZW50UGxheWluZyIsImN1cnJlbnRQbGF5aW5nQyIsImN1cnJlbnRQbGF5aW5nRWxlbSIsImN1cnJlbnRQbGF5aW5nRWxlbUMiLCJibG9jayIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInN0b3JlSXRlbXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3RvcmVTb3VuZCIsInF1ZXJ5IiwiYXJ0aWNsZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwYXVzZSIsIm5ld0F1ZGlvIiwiQXVkaW8iLCJsb29wIiwicGxheSIsImRlc2MiLCJ0aW1lck9uIiwiaW5zdGFudCIsImFsYXJtT24iLCJhZGQiLCJzdGFydGVkIiwidGltZXN0YW1wIiwicHJldlN0YXRlIiwiaWQiLCJhY3RpdmUiLCJuYW1lIiwic291bmQiLCJmaW5pc2giLCJnZXRGaW5pc2hUaW1lc3RhbXAiLCJhbGFybURlbGV0ZSIsImZpbHRlciIsIm9iaiIsImNoYW5nZUZpZWxkIiwiZmllbGQiLCJtYXAiLCJ0aW1lckRpc3BhdGNoIiwiZWxlbSIsInN0b3BDdXJyZW50QWxhcm1zIiwiY2hhbmdlT25UaW1lciIsInRpbWUiLCJjaGFuZ2VPbkFsYXJtIiwic291bmRzIiwiT2JqZWN0IiwiZW50cmllcyIsImwiLCJuIiwiZ2V0TnVtYmVycyIsIm1heCIsInJlc3VsdCIsIm5ld05hbWVDaGFuZ2UiLCJlIiwicyIsImNsb2NrIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJsYWJlbHMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiY3VycmVudCIsInNlbGVjdDIiLCJ0aW1lciIsImFsYXJtIiwiTnVtYmVyIiwidGFyZ2V0IiwidGVzdCIsIm9mZiIsImVsZW1lbnRzIiwiQXV4aWxpYXJ5TGlzdCIsImxpc3QiLCJodGV4dCIsIm10ZXh0IiwicHJldmVudERlZmF1bHQiLCJQb3B1cCIsInBvcHVwIiwiZGlzcGxheSIsImdyZWVuIiwiRWxlbWVudCIsInNldFRpbWVvdXQiLCJ3YWtldXAiLCJjbGVhclRpbWVvdXQiLCJvbiIsInN0YXJ0ZWRUaW1lIiwiZmluaXNoVGltZSIsImxlZnRUaW1lIiwicmVkIiwicmVwZWF0IiwiZGF0ZSIsImdldFNlY29uZHMiLCJtIiwiZ2V0TWludXRlcyIsIm1vZHVsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxFQUErQyxHQUEvQyxFQUFvRCxJQUFwRCxFQUEwRCxJQUExRCxFQUFnRSxJQUFoRSxFQUFzRSxJQUF0RSxFQUE0RSxJQUE1RSxFQUFrRixLQUFsRixFQUF5RixLQUF6RixFQUFnRyxLQUFoRyxF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T0FBNUI7QUFDRCxHQUZELE1BRU8sT0FBT0MsU0FBUyxHQUFHdUUsTUFBWixHQUFzQixVQUFVLEVBQWhDLEdBQXNDeEUsT0FBN0M7QUFDUiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uZTE1ZTUxMDE3ZDRiZDI4Y2M0MmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL3RpbWVyLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi4vU3ZnJ1xyXG5pbXBvcnQgeyBDbG9jayB9IGZyb20gJy4vU3RvcHdhdGNoJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5jb25zdCB0aW1lcnMgPSBbMTUsIDMwLCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDMwMCwgNDIwLCA2MDAsIDkwMCwgMTIwMCwgMTgwMCwgMjcwMCwgMzYwMCwgNzIwMCwgMTA4MDAsIDIxNjAwLCAzMjQwMCwgNDMyMDAsIDY0ODAwLCA4NjQwMF1cclxuXHJcbmNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuY29uc3QgaCA9IG5vdy5nZXRIb3VycygpICogNjBcclxuY29uc3QgYWxhcm1zID0gW11cclxuZm9yIChsZXQgaSA9IDA7IGkgPCA5NjsgaSsrKSB7XHJcbiAgaWYgKGggKyBpICogMTUgPj0gMjQgKiA2MCkge1xyXG4gICAgYWxhcm1zLnB1c2goaCAtIDI0ICogNjAgKyBpICogMTUpXHJcbiAgfSBlbHNlIGFsYXJtcy5wdXNoKGggKyBpICogMTUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b3B3YXRjaCh7IHByb3BzLCBzbHVnIH0pIHtcclxuICBjb25zdCBbYWxhcm1zLCBhbGFybXNDXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtkZWZhdWx0U291bmQsIGRlZmF1bHRTb3VuZENdID0gdXNlU3RhdGUoJ3RyYW5xdWlsaXR5JylcclxuICBjb25zdCBbaXNUaW1lciwgaXNUaW1lckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW25ld05hbWUsIG5ld05hbWVDXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuZXdOYW1lQ2hhbmdlZEJ5VXNlciwgbmV3TmFtZUNoYW5nZWRCeVVzZXJDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtuZXdILCBuZXdIQ10gPSB1c2VTdGF0ZShwcm9wcy52YWx1ZS5ob3VycyAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUuaG91cnMgOiAwKVxyXG4gIGNvbnN0IFtuZXdNaW4sIG5ld01pbkNdID0gdXNlU3RhdGUocHJvcHMudmFsdWUubWluICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZS5taW4gOiAwKVxyXG4gIGNvbnN0IFtuZXdTZWMsIG5ld1NlY0NdID0gdXNlU3RhdGUocHJvcHMudmFsdWUuc2VjICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZS5zZWMgOiAwKVxyXG5cclxuICBjb25zdCBbY3VycmVudEFsYXJtcywgY3VycmVudEFsYXJtc0NdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbY3VycmVudFBsYXlpbmcsIGN1cnJlbnRQbGF5aW5nQ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtjdXJyZW50UGxheWluZ0VsZW0sIGN1cnJlbnRQbGF5aW5nRWxlbUNdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIobnVsbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGFybUl0ZW1zJylcclxuICAgIGlmIChzdG9yZUl0ZW1zID09PSBudWxsKSByZXR1cm5cclxuICAgIGFsYXJtc0MoSlNPTi5wYXJzZShzdG9yZUl0ZW1zKSlcclxuICAgIGNvbnN0IHN0b3JlU291bmQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxhcm1Tb3VuZCcpXHJcbiAgICBpZiAoc3RvcmVTb3VuZCA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBkZWZhdWx0U291bmRDKHN0b3JlU291bmQpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlzVGltZXJDKHNsdWcgPT09ICd0aW1lcicpXHJcbiAgfSwgW3JvdXRlci5xdWVyeS5hcnRpY2xlXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsYXJtSXRlbXMnLCBKU09OLnN0cmluZ2lmeShhbGFybXMpKVxyXG4gIH0sIFthbGFybXNdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxhcm1Tb3VuZCcsIGRlZmF1bHRTb3VuZClcclxuICB9LCBbZGVmYXVsdFNvdW5kXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nRWxlbSAhPT0gbnVsbCkgY3VycmVudFBsYXlpbmdFbGVtLnBhdXNlKClcclxuICAgIGlmIChjdXJyZW50UGxheWluZyA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBjb25zdCBuZXdBdWRpbyA9IG5ldyBBdWRpbyhgL3NvdW5kcy8ke2N1cnJlbnRQbGF5aW5nfS5tcDNgKVxyXG4gICAgbmV3QXVkaW8ubG9vcCA9IHRydWVcclxuICAgIG5ld0F1ZGlvLnBsYXkoKVxyXG4gICAgY3VycmVudFBsYXlpbmdFbGVtQyhuZXdBdWRpbylcclxuICB9LCBbY3VycmVudFBsYXlpbmddKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmV3TmFtZUNoYW5nZWRCeVVzZXIpIHJldHVyblxyXG4gICAgaWYgKGlzVGltZXIpIHtcclxuICAgICAgbmV3TmFtZUMoYCR7cHJvcHMuZGVzYy50aW1lck9ufSAke25ld0ggPT09IDAgPyBgYCA6IGAke25ld0ggPCAxMCA/IFwiMFwiICsgbmV3SCA6IG5ld0h9ICR7cHJvcHMuZGVzYy5zaG9ydC5ob3Vyc30uIGB9JHtuZXdNaW4gPT09IDAgPyBgYCA6IGAke25ld01pbiA8IDEwID8gXCIwXCIgKyBuZXdNaW4gOiBuZXdNaW59ICR7cHJvcHMuZGVzYy5zaG9ydC5taW59LiBgfSR7bmV3U2VjID09PSAwID8gKG5ld0ggIT09IDAgfHwgbmV3TWluICE9PSAwID8gYGAgOiBwcm9wcy5kZXNjLnNob3J0Lmluc3RhbnQpIDogYCR7bmV3U2VjIDwgMTAgPyBcIjBcIiArIG5ld1NlYyA6IG5ld1NlY30gJHtwcm9wcy5kZXNjLnNob3J0LnNlY30uYH1gKVxyXG4gICAgfSBlbHNlXHJcbiAgICAgIG5ld05hbWVDKGAke3Byb3BzLmRlc2MuYWxhcm1Pbn0gJHtuZXdIIDwgMTAgPyBcIjBcIiArIG5ld0ggOiBuZXdIfToke25ld01pbiA8IDEwID8gXCIwXCIgKyBuZXdNaW4gOiBuZXdNaW59JHtuZXdTZWMgPT09IDAgPyBgYCA6IGA6JHtuZXdTZWMgPCAxMCA/IFwiMFwiICsgbmV3U2VjIDogbmV3U2VjfWB9YClcclxuICB9LCBbbmV3SCwgbmV3TWluLCBuZXdTZWMsIGlzVGltZXJdKVxyXG5cclxuICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICBjb25zdCBzdGFydGVkID0gRGF0ZS5ub3coKVxyXG4gICAgY29uc3QgdGltZXN0YW1wID0gKChuZXdNaW4gKyBuZXdIICogNjApICogNjAgKyBuZXdTZWMpICogMTAwMFxyXG4gICAgYWxhcm1zQyhwcmV2U3RhdGUgPT4gW3tcclxuICAgICAgaWQ6IHN0YXJ0ZWQsXHJcbiAgICAgIHN0YXJ0ZWQsXHJcbiAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBuYW1lOiBuZXdOYW1lLFxyXG4gICAgICBpc1RpbWVyOiBpc1RpbWVyLFxyXG4gICAgICBzb3VuZDogZGVmYXVsdFNvdW5kLFxyXG4gICAgICBmaW5pc2g6IGdldEZpbmlzaFRpbWVzdGFtcChpc1RpbWVyLCBzdGFydGVkLCB0aW1lc3RhbXApLFxyXG4gICAgfSwgLi4ucHJldlN0YXRlXSlcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyhmYWxzZSlcclxuICB9XHJcbiAgZnVuY3Rpb24gYWxhcm1EZWxldGUoaWQpIHtcclxuICAgIGFsYXJtc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZS5maWx0ZXIob2JqID0+IG9iai5pZCAhPT0gaWQpKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjaGFuZ2VGaWVsZChpZCwgZmllbGQsIHZhbHVlKSB7XHJcbiAgICBhbGFybXNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUubWFwKG9iaiA9PiBvYmouaWQgPT09IGlkID8geyAuLi5vYmosIFtmaWVsZF06IHZhbHVlIH0gOiBvYmopKVxyXG4gIH1cclxuICBmdW5jdGlvbiB0aW1lckRpc3BhdGNoKGlkKSB7XHJcbiAgICBjb25zdCBlbGVtID0gYWxhcm1zLmZpbHRlcihvYmogPT4gb2JqLmlkID09PSBpZClbMF1cclxuICAgIGlmIChlbGVtID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgY3VycmVudFBsYXlpbmdDKGVsZW0uc291bmQpXHJcbiAgICBjdXJyZW50QWxhcm1zQyhlbGVtLmZpbmlzaClcclxuICB9XHJcbiAgZnVuY3Rpb24gc3RvcEN1cnJlbnRBbGFybXMoKSB7XHJcbiAgICBjdXJyZW50QWxhcm1zQyhudWxsKVxyXG4gICAgY3VycmVudFBsYXlpbmdDKG51bGwpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZU9uVGltZXIodGltZSkge1xyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKGZhbHNlKVxyXG4gICAgaXNUaW1lckModHJ1ZSlcclxuICAgIG5ld0hDKCh0aW1lIC8gMzYwMCkgfCAwKVxyXG4gICAgbmV3TWluQygodGltZSAvIDYwICUgNjApIHwgMClcclxuICAgIG5ld1NlY0MoKHRpbWUgJSA2MCkgfCAwKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjaGFuZ2VPbkFsYXJtKHRpbWUpIHtcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyhmYWxzZSlcclxuICAgIGlzVGltZXJDKGZhbHNlKVxyXG4gICAgbmV3SEMoKHRpbWUgLyA2MCkgfCAwKVxyXG4gICAgbmV3TWluQygodGltZSAlIDYwKSB8IDApXHJcbiAgICBuZXdTZWNDKDApXHJcbiAgfVxyXG4gIGNvbnN0IHNvdW5kcyA9IE9iamVjdC5lbnRyaWVzKHByb3BzLnNvdW5kKS5tYXAob2JqID0+ICh7IGw6IG9ialswXSwgbjogb2JqWzFdIH0pKVxyXG4gIGZ1bmN0aW9uIGdldE51bWJlcnMobWF4KSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICByZXN1bHQucHVzaChpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuICBmdW5jdGlvbiBuZXdOYW1lQ2hhbmdlKGUpIHtcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyh0cnVlKVxyXG4gICAgbmV3TmFtZUMoZS52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNsb2NrfT5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17bmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDB9IHBhdXNlZD17ZmFsc2V9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgICA8ZGl2PntuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5uZXd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNUaW1lciA/ICcnIDogcy5zZWxlY3QyfT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGlzVGltZXJDKHRydWUpfT57cHJvcHMuZGVzYy50aW1lcn08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGlzVGltZXJDKGZhbHNlKX0+e3Byb3BzLmRlc2MuYWxhcm19PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvbmcuaG91cnN9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld0hDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDAgPyBwcmV2U3RhdGUgLSAxIDogMjMpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuZXdIfSBvbkNoYW5nZT17ZSA9PiBuZXdIQyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+IHtnZXROdW1iZXJzKDI0KS5tYXAobiA9PiA8b3B0aW9uIGtleT17bn0gdmFsdWU9e259PntufTwvb3B0aW9uPil9IDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdIQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSAyMyA/IHByZXZTdGF0ZSArIDEgOiAwKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvbmcubWlufTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdNaW5DKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDAgPyBwcmV2U3RhdGUgLSAxIDogNTkpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuZXdNaW59IG9uQ2hhbmdlPXtlID0+IG5ld01pbkMoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PiB7Z2V0TnVtYmVycyg2MCkubWFwKG4gPT4gPG9wdGlvbiBrZXk9e259IHZhbHVlPXtufT57bn08L29wdGlvbj4pfSA8L3NlbGVjdD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3TWluQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSA1OSA/IHByZXZTdGF0ZSArIDEgOiAwKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvbmcuc2VjfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdTZWNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDAgPyBwcmV2U3RhdGUgLSAxIDogNTkpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuZXdTZWN9IG9uQ2hhbmdlPXtlID0+IG5ld1NlY0MoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PiB7Z2V0TnVtYmVycyg2MCkubWFwKG4gPT4gPG9wdGlvbiBrZXk9e259IHZhbHVlPXtufT57bn08L29wdGlvbj4pfSA8L3NlbGVjdD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3U2VjQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSA1OSA/IHByZXZTdGF0ZSArIDEgOiAwKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25ld05hbWV9IG9uQ2hhbmdlPXtuZXdOYW1lQ2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5zb3VuZH08L2Rpdj5cclxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNvdW5kXCIgdmFsdWU9e2RlZmF1bHRTb3VuZH0gb25DaGFuZ2U9e2UgPT4gZGVmYXVsdFNvdW5kQyhlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICB7c291bmRzLm1hcChzb3VuZCA9PiA8b3B0aW9uIGtleT17c291bmQubH0gdmFsdWU9e3NvdW5kLmx9ID57c291bmQubn08L29wdGlvbj4pfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICB7Y3VycmVudFBsYXlpbmcgPT09IG51bGwgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50ZXN0fSBvbkNsaWNrPXsoKSA9PiBjdXJyZW50UGxheWluZ0MoZGVmYXVsdFNvdW5kKX0+4pa6PC9idXR0b24+IDpcclxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2Mub2ZmfSBvbkNsaWNrPXsoKSA9PiBjdXJyZW50UGxheWluZ0MobnVsbCl9PuKWoDwvYnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkfT57cHJvcHMuZGVzYy5hZGR9PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5lbGVtZW50c30+XHJcbiAgICAgIHthbGFybXMubWFwKG9iaiA9PiA8RWxlbWVudCBrZXk9e29iai5pZH0gey4uLm9ian0gc291bmQ9e3NvdW5kcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmwgPT09IG9iai5zb3VuZClbMF0ubn0gdGltZXJEaXNwYXRjaD17dGltZXJEaXNwYXRjaH0gY2hhbmdlRmllbGQ9e2NoYW5nZUZpZWxkfSBhbGFybURlbGV0ZT17YWxhcm1EZWxldGV9IHByb3BzPXtwcm9wc30gLz4pfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8QXV4aWxpYXJ5TGlzdCBjaGFuZ2VPblRpbWVyPXtjaGFuZ2VPblRpbWVyfSBjaGFuZ2VPbkFsYXJtPXtjaGFuZ2VPbkFsYXJtfSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICA8UG9wdXAgY3VycmVudEFsYXJtcz17Y3VycmVudEFsYXJtc30gc3RvcEN1cnJlbnRBbGFybXM9e3N0b3BDdXJyZW50QWxhcm1zfSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgPC9kaXY+XHJcbn1cclxuLy/Qm9C40YHRgiDRgSDRgNCw0LfQvdGL0LzQuCDQvNC10YLQutCw0LzQuCDQstGA0LXQvNC10L3QuCDQtNC70Y8g0LHRg9C00LjQu9GM0L3QuNC60LAg0Lgg0YLQsNC50LzQtdGA0LAgXHJcbmZ1bmN0aW9uIEF1eGlsaWFyeUxpc3QoeyBjaGFuZ2VPblRpbWVyLCBjaGFuZ2VPbkFsYXJtLCBwcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKG51bGwpXHJcbiAgcmV0dXJuIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5hbGFybU9ufTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthbGFybXMubWFwKHRpbWUgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaHRleHQgPSAodGltZSAvIDYwKSB8IDBcclxuICAgICAgICAgIGNvbnN0IG10ZXh0ID0gdGltZSAlIDYwID09PSAwID8gYDAwYCA6IHRpbWUgJSA2MFxyXG4gICAgICAgICAgcmV0dXJuIDxhIGhyZWY9e2AvJHtyb3V0ZXIucXVlcnkuYXJ0aWNsZVswXX0vJHtwcm9wcy5hbGFybX0vJHtodGV4dH0tJHttdGV4dH0vYH0gb25DbGljaz17ZSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgY2hhbmdlT25BbGFybSh0aW1lKSB9fSBrZXk9e3RpbWV9PntodGV4dH06e210ZXh0fTwvYT5cclxuICAgICAgICB9KX1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy50aW1lck9ufTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aW1lcnMubWFwKHRpbWVyID0+IDxidXR0b24gb25DbGljaz17KCkgPT4gY2hhbmdlT25UaW1lcih0aW1lcil9IGtleT17dGltZXJ9Pnt0aW1lciA8IDYwID8gdGltZXIgOiB0aW1lciA8IDM2MDAgPyB0aW1lciAvIDYwIDogdGltZXIgLyAzNjAwfSB7dGltZXIgPCA2MCA/IHByb3BzLmRlc2Muc2hvcnQuc2VjIDogdGltZXIgPCAzNjAwID8gcHJvcHMuZGVzYy5zaG9ydC5taW4gOiBwcm9wcy5kZXNjLnNob3J0LmhvdXJzfTwvYnV0dG9uPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC8+XHJcbn1cclxuLy/QntC/0L7QstC10YnQtdC90LjQtVxyXG5mdW5jdGlvbiBQb3B1cCh7IGN1cnJlbnRBbGFybXMsIHN0b3BDdXJyZW50QWxhcm1zLCBwcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgJHtzLnBvcHVwfSAke2N1cnJlbnRBbGFybXMgPyBzLmRpc3BsYXkgOiBcIlwifWB9PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y3VycmVudEFsYXJtcyA/XHJcbiAgICAgICAgICA8Q2xvY2sgdGltZXN0YW1wPXtEYXRlLm5vdygpIC0gY3VycmVudEFsYXJtcyArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBkaXNwbGF5TXM9e2ZhbHNlfSBwYXVzZWQ9e3RydWV9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPiA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmdyZWVufSBvbkNsaWNrPXtzdG9wQ3VycmVudEFsYXJtc30+e3Byb3BzLmRlc2Mub2ZmfTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBFbGVtZW50KHsgaWQsIHN0YXJ0ZWQsIHRpbWVzdGFtcCwgYWN0aXZlLCBzb3VuZCwgbmFtZSwgdGltZXJEaXNwYXRjaCwgaXNUaW1lciwgY2hhbmdlRmllbGQsIGFsYXJtRGVsZXRlLCBmaW5pc2gsIHByb3BzIH0pIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KHdha2V1cCwgZmluaXNoIC0gRGF0ZS5ub3coKSlcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIH1cclxuICB9LCBbYWN0aXZlXSlcclxuICBmdW5jdGlvbiB3YWtldXAoKSB7XHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIGZhbHNlKVxyXG4gICAgdGltZXJEaXNwYXRjaChpZClcclxuICB9XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ3N0YXJ0ZWQnLCBub3cpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2ZpbmlzaCcsIGdldEZpbmlzaFRpbWVzdGFtcChpc1RpbWVyLCBub3csIHRpbWVzdGFtcCkpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIHRydWUpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9mZigpIHtcclxuICAgIGNoYW5nZUZpZWxkKGlkLCAnYWN0aXZlJywgZmFsc2UpXHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGtleT17aWR9PlxyXG4gICAgPGRpdj57aXNUaW1lciA/IHByb3BzLmRlc2MudGltZXIgOiBwcm9wcy5kZXNjLmFsYXJtfTwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAge25hbWV9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2Muc3RhcnRlZFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e0RhdGUubm93KCkgLSBzdGFydGVkICsgbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDB9IHBhdXNlZD17dHJ1ZX0gZGlzcGxheU1zPXtmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MuZmluaXNoVGltZX08L2Rpdj5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17RGF0ZS5ub3coKSAtIGZpbmlzaCArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBwYXVzZWQ9e3RydWV9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLnNvdW5kfTwvZGl2PlxyXG4gICAgICA8ZGl2Pntzb3VuZH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5sZWZ0VGltZX08L2Rpdj5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17YWN0aXZlID8gZmluaXNoIDogbnVsbH0gcGF1c2VkPXthY3RpdmUgPT09IGZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICAge2FjdGl2ZSA/XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLnJlZH0gb25DbGljaz17b2ZmfT57cHJvcHMuZGVzYy5vZmZ9PC9idXR0b24+IDpcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuZ3JlZW59IG9uQ2xpY2s9e29ufT57cHJvcHMuZGVzYy5yZXBlYXR9PC9idXR0b24+XHJcbiAgICB9XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5yZWR9IG9uQ2xpY2s9eygpID0+IGFsYXJtRGVsZXRlKGlkKX0+e3Byb3BzLmRlc2MuZGVsZXRlfTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG59XHJcbi8v0J/QvtC70YPRh9C40YLRjCDRhNC40L3QsNC70YzQvdGD0Y4g0LzQtdGC0LrRgyDQstGA0LXQvNC10L3QuCAo0L7QutC+0L3Rh9Cw0L3QuNC1INGC0LDQudC80LXRgNCwKVxyXG5mdW5jdGlvbiBnZXRGaW5pc2hUaW1lc3RhbXAoaXNUaW1lciwgc3RhcnRlZCwgdGltZXN0YW1wKSB7XHJcbiAgaWYgKGlzVGltZXIpIHJldHVybiBzdGFydGVkICsgdGltZXN0YW1wICsgMTBcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RhcnRlZClcclxuICBjb25zdCBzID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuICBjb25zdCBtID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICBjb25zdCBoID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgY29uc3QgbW9kdWxvID0gKChoICogNjAgKyBtKSAqIDYwICsgcykgKiAxMDAwXHJcbiAgaWYgKG1vZHVsbyA8IHRpbWVzdGFtcCkge1xyXG4gICAgcmV0dXJuIHRpbWVzdGFtcCAtIG1vZHVsbyArIHN0YXJ0ZWRcclxuICB9IGVsc2UgcmV0dXJuIHRpbWVzdGFtcCAtIG1vZHVsbyArICgzNjAwMDAwICogMjQpICsgc3RhcnRlZFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==