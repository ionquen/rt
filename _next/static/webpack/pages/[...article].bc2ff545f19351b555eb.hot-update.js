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
  console.log(router);
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
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: function onClick(e) {
              e.preventDefault();
              changeOnAlarm(time);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UaW1lci5qcyJdLCJuYW1lcyI6WyJ0aW1lcnMiLCJub3ciLCJEYXRlIiwiaCIsImdldEhvdXJzIiwiYWxhcm1zIiwiaSIsInB1c2giLCJTdG9wd2F0Y2giLCJwcm9wcyIsInNsdWciLCJ1c2VTdGF0ZSIsImFsYXJtc0MiLCJkZWZhdWx0U291bmQiLCJkZWZhdWx0U291bmRDIiwiaXNUaW1lciIsImlzVGltZXJDIiwibmV3TmFtZSIsIm5ld05hbWVDIiwibmV3TmFtZUNoYW5nZWRCeVVzZXIiLCJuZXdOYW1lQ2hhbmdlZEJ5VXNlckMiLCJ2YWx1ZSIsImhvdXJzIiwidW5kZWZpbmVkIiwibmV3SCIsIm5ld0hDIiwibWluIiwibmV3TWluIiwibmV3TWluQyIsInNlYyIsIm5ld1NlYyIsIm5ld1NlY0MiLCJjdXJyZW50QWxhcm1zIiwiY3VycmVudEFsYXJtc0MiLCJjdXJyZW50UGxheWluZyIsImN1cnJlbnRQbGF5aW5nQyIsImN1cnJlbnRQbGF5aW5nRWxlbSIsImN1cnJlbnRQbGF5aW5nRWxlbUMiLCJibG9jayIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzdG9yZUl0ZW1zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlU291bmQiLCJxdWVyeSIsImFydGljbGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicGF1c2UiLCJuZXdBdWRpbyIsIkF1ZGlvIiwibG9vcCIsInBsYXkiLCJkZXNjIiwidGltZXJPbiIsImluc3RhbnQiLCJhbGFybU9uIiwiYWRkIiwic3RhcnRlZCIsInRpbWVzdGFtcCIsInByZXZTdGF0ZSIsImlkIiwiYWN0aXZlIiwibmFtZSIsInNvdW5kIiwiZmluaXNoIiwiZ2V0RmluaXNoVGltZXN0YW1wIiwiYWxhcm1EZWxldGUiLCJmaWx0ZXIiLCJvYmoiLCJjaGFuZ2VGaWVsZCIsImZpZWxkIiwibWFwIiwidGltZXJEaXNwYXRjaCIsImVsZW0iLCJzdG9wQ3VycmVudEFsYXJtcyIsImNoYW5nZU9uVGltZXIiLCJ0aW1lIiwiY2hhbmdlT25BbGFybSIsInNvdW5kcyIsIk9iamVjdCIsImVudHJpZXMiLCJsIiwibiIsImdldE51bWJlcnMiLCJtYXgiLCJyZXN1bHQiLCJuZXdOYW1lQ2hhbmdlIiwiZSIsInMiLCJjbG9jayIsImdldFRpbWV6b25lT2Zmc2V0IiwibGFiZWxzIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsImN1cnJlbnQiLCJzZWxlY3QyIiwidGltZXIiLCJhbGFybSIsIk51bWJlciIsInRhcmdldCIsInRlc3QiLCJvZmYiLCJlbGVtZW50cyIsIkF1eGlsaWFyeUxpc3QiLCJtIiwiTWF0aCIsImNlaWwiLCJnZXRNaW51dGVzIiwibGlzdCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJwb3B1cCIsImRpc3BsYXkiLCJncmVlbiIsIkVsZW1lbnQiLCJzZXRUaW1lb3V0Iiwid2FrZXVwIiwiY2xlYXJUaW1lb3V0Iiwib24iLCJzdGFydGVkVGltZSIsImZpbmlzaFRpbWUiLCJsZWZ0VGltZSIsInJlZCIsInJlcGVhdCIsImRhdGUiLCJnZXRTZWNvbmRzIiwibW9kdWxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckMsRUFBMEMsR0FBMUMsRUFBK0MsR0FBL0MsRUFBb0QsSUFBcEQsRUFBMEQsSUFBMUQsRUFBZ0UsSUFBaEUsRUFBc0UsSUFBdEUsRUFBNEUsSUFBNUUsRUFBa0YsS0FBbEYsRUFBeUYsS0FBekYs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OTM1MWI1NTVlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvdGltZXIuc3R5bCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnLi9TdG9wd2F0Y2gnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5jb25zdCB0aW1lcnMgPSBbMTUsIDMwLCA2MCwgOTAsIDEyMCwgMTUwLCAxODAsIDMwMCwgNDIwLCA2MDAsIDkwMCwgMTIwMCwgMTgwMCwgMjcwMCwgMzYwMCwgNzIwMCwgMTA4MDAsIDIxNjAwLCAzMjQwMCwgNDMyMDAsIDY0ODAwLCA4NjQwMF1cclxuXHJcbmNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuY29uc3QgaCA9IG5vdy5nZXRIb3VycygpICogNjBcclxuY29uc3QgYWxhcm1zID0gW11cclxuZm9yIChsZXQgaSA9IDA7IGkgPCA5NjsgaSsrKSB7XHJcbiAgaWYgKGggKyBpICogMTUgPj0gMjQgKiA2MCkge1xyXG4gICAgYWxhcm1zLnB1c2goaCAtIDI0ICogNjAgKyBpICogMTUpXHJcbiAgfSBlbHNlIGFsYXJtcy5wdXNoKGggKyBpICogMTUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b3B3YXRjaCh7IHByb3BzLCBzbHVnIH0pIHtcclxuICBjb25zdCBbYWxhcm1zLCBhbGFybXNDXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtkZWZhdWx0U291bmQsIGRlZmF1bHRTb3VuZENdID0gdXNlU3RhdGUoJ3RyYW5xdWlsaXR5JylcclxuICBjb25zdCBbaXNUaW1lciwgaXNUaW1lckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW25ld05hbWUsIG5ld05hbWVDXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuZXdOYW1lQ2hhbmdlZEJ5VXNlciwgbmV3TmFtZUNoYW5nZWRCeVVzZXJDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtuZXdILCBuZXdIQ10gPSB1c2VTdGF0ZShwcm9wcy52YWx1ZS5ob3VycyAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUuaG91cnMgOiAwKVxyXG4gIGNvbnN0IFtuZXdNaW4sIG5ld01pbkNdID0gdXNlU3RhdGUocHJvcHMudmFsdWUubWluICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZS5taW4gOiAwKVxyXG4gIGNvbnN0IFtuZXdTZWMsIG5ld1NlY0NdID0gdXNlU3RhdGUocHJvcHMudmFsdWUuc2VjICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZS5zZWMgOiAwKVxyXG5cclxuICBjb25zdCBbY3VycmVudEFsYXJtcywgY3VycmVudEFsYXJtc0NdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbY3VycmVudFBsYXlpbmcsIGN1cnJlbnRQbGF5aW5nQ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtjdXJyZW50UGxheWluZ0VsZW0sIGN1cnJlbnRQbGF5aW5nRWxlbUNdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIobnVsbClcclxuICBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxhcm1JdGVtcycpXHJcbiAgICBpZiAoc3RvcmVJdGVtcyA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBhbGFybXNDKEpTT04ucGFyc2Uoc3RvcmVJdGVtcykpXHJcbiAgICBjb25zdCBzdG9yZVNvdW5kID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsYXJtU291bmQnKVxyXG4gICAgaWYgKHN0b3JlU291bmQgPT09IG51bGwpIHJldHVyblxyXG4gICAgZGVmYXVsdFNvdW5kQyhzdG9yZVNvdW5kKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc1RpbWVyQyhzbHVnID09PSAndGltZXInKVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuYXJ0aWNsZV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGFybUl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYWxhcm1zKSlcclxuICB9LCBbYWxhcm1zXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsYXJtU291bmQnLCBkZWZhdWx0U291bmQpXHJcbiAgfSwgW2RlZmF1bHRTb3VuZF0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50UGxheWluZ0VsZW0gIT09IG51bGwpIGN1cnJlbnRQbGF5aW5nRWxlbS5wYXVzZSgpXHJcbiAgICBpZiAoY3VycmVudFBsYXlpbmcgPT09IG51bGwpIHJldHVyblxyXG4gICAgY29uc3QgbmV3QXVkaW8gPSBuZXcgQXVkaW8oYC9zb3VuZHMvJHtjdXJyZW50UGxheWluZ30ubXAzYClcclxuICAgIG5ld0F1ZGlvLmxvb3AgPSB0cnVlXHJcbiAgICBuZXdBdWRpby5wbGF5KClcclxuICAgIGN1cnJlbnRQbGF5aW5nRWxlbUMobmV3QXVkaW8pXHJcbiAgfSwgW2N1cnJlbnRQbGF5aW5nXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5ld05hbWVDaGFuZ2VkQnlVc2VyKSByZXR1cm5cclxuICAgIGlmIChpc1RpbWVyKSB7XHJcbiAgICAgIG5ld05hbWVDKGAke3Byb3BzLmRlc2MudGltZXJPbn0gJHtuZXdIID09PSAwID8gYGAgOiBgJHtuZXdIIDwgMTAgPyBcIjBcIiArIG5ld0ggOiBuZXdIfSAke3Byb3BzLmRlc2Muc2hvcnQuaG91cnN9LiBgfSR7bmV3TWluID09PSAwID8gYGAgOiBgJHtuZXdNaW4gPCAxMCA/IFwiMFwiICsgbmV3TWluIDogbmV3TWlufSAke3Byb3BzLmRlc2Muc2hvcnQubWlufS4gYH0ke25ld1NlYyA9PT0gMCA/IChuZXdIICE9PSAwIHx8IG5ld01pbiAhPT0gMCA/IGBgIDogcHJvcHMuZGVzYy5zaG9ydC5pbnN0YW50KSA6IGAke25ld1NlYyA8IDEwID8gXCIwXCIgKyBuZXdTZWMgOiBuZXdTZWN9ICR7cHJvcHMuZGVzYy5zaG9ydC5zZWN9LmB9YClcclxuICAgIH0gZWxzZVxyXG4gICAgICBuZXdOYW1lQyhgJHtwcm9wcy5kZXNjLmFsYXJtT259ICR7bmV3SCA8IDEwID8gXCIwXCIgKyBuZXdIIDogbmV3SH06JHtuZXdNaW4gPCAxMCA/IFwiMFwiICsgbmV3TWluIDogbmV3TWlufSR7bmV3U2VjID09PSAwID8gYGAgOiBgOiR7bmV3U2VjIDwgMTAgPyBcIjBcIiArIG5ld1NlYyA6IG5ld1NlY31gfWApXHJcbiAgfSwgW25ld0gsIG5ld01pbiwgbmV3U2VjLCBpc1RpbWVyXSlcclxuXHJcbiAgZnVuY3Rpb24gYWRkKCkge1xyXG4gICAgY29uc3Qgc3RhcnRlZCA9IERhdGUubm93KClcclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9ICgobmV3TWluICsgbmV3SCAqIDYwKSAqIDYwICsgbmV3U2VjKSAqIDEwMDBcclxuICAgIGFsYXJtc0MocHJldlN0YXRlID0+IFt7XHJcbiAgICAgIGlkOiBzdGFydGVkLFxyXG4gICAgICBzdGFydGVkLFxyXG4gICAgICB0aW1lc3RhbXAsXHJcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgbmFtZTogbmV3TmFtZSxcclxuICAgICAgaXNUaW1lcjogaXNUaW1lcixcclxuICAgICAgc291bmQ6IGRlZmF1bHRTb3VuZCxcclxuICAgICAgZmluaXNoOiBnZXRGaW5pc2hUaW1lc3RhbXAoaXNUaW1lciwgc3RhcnRlZCwgdGltZXN0YW1wKSxcclxuICAgIH0sIC4uLnByZXZTdGF0ZV0pXHJcbiAgICBuZXdOYW1lQ2hhbmdlZEJ5VXNlckMoZmFsc2UpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFsYXJtRGVsZXRlKGlkKSB7XHJcbiAgICBhbGFybXNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUuZmlsdGVyKG9iaiA9PiBvYmouaWQgIT09IGlkKSlcclxuICB9XHJcbiAgZnVuY3Rpb24gY2hhbmdlRmllbGQoaWQsIGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgYWxhcm1zQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLm1hcChvYmogPT4gb2JqLmlkID09PSBpZCA/IHsgLi4ub2JqLCBbZmllbGRdOiB2YWx1ZSB9IDogb2JqKSlcclxuICB9XHJcbiAgZnVuY3Rpb24gdGltZXJEaXNwYXRjaChpZCkge1xyXG4gICAgY29uc3QgZWxlbSA9IGFsYXJtcy5maWx0ZXIob2JqID0+IG9iai5pZCA9PT0gaWQpWzBdXHJcbiAgICBpZiAoZWxlbSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgIGN1cnJlbnRQbGF5aW5nQyhlbGVtLnNvdW5kKVxyXG4gICAgY3VycmVudEFsYXJtc0MoZWxlbS5maW5pc2gpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHN0b3BDdXJyZW50QWxhcm1zKCkge1xyXG4gICAgY3VycmVudEFsYXJtc0MobnVsbClcclxuICAgIGN1cnJlbnRQbGF5aW5nQyhudWxsKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjaGFuZ2VPblRpbWVyKHRpbWUpIHtcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyhmYWxzZSlcclxuICAgIGlzVGltZXJDKHRydWUpXHJcbiAgICBuZXdIQygodGltZSAvIDM2MDApIHwgMClcclxuICAgIG5ld01pbkMoKHRpbWUgLyA2MCAlIDYwKSB8IDApXHJcbiAgICBuZXdTZWNDKCh0aW1lICUgNjApIHwgMClcclxuICB9XHJcbiAgZnVuY3Rpb24gY2hhbmdlT25BbGFybSh0aW1lKSB7XHJcbiAgICBuZXdOYW1lQ2hhbmdlZEJ5VXNlckMoZmFsc2UpXHJcbiAgICBpc1RpbWVyQyhmYWxzZSlcclxuICAgIG5ld0hDKCh0aW1lIC8gNjApIHwgMClcclxuICAgIG5ld01pbkMoKHRpbWUgJSA2MCkgfCAwKVxyXG4gICAgbmV3U2VjQygwKVxyXG4gIH1cclxuICBjb25zdCBzb3VuZHMgPSBPYmplY3QuZW50cmllcyhwcm9wcy5zb3VuZCkubWFwKG9iaiA9PiAoeyBsOiBvYmpbMF0sIG46IG9ialsxXSB9KSlcclxuICBmdW5jdGlvbiBnZXROdW1iZXJzKG1heCkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcclxuICAgICAgcmVzdWx0LnB1c2goaSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcbiAgZnVuY3Rpb24gbmV3TmFtZUNoYW5nZShlKSB7XHJcbiAgICBuZXdOYW1lQ2hhbmdlZEJ5VXNlckModHJ1ZSlcclxuICAgIG5ld05hbWVDKGUudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5ibG9ja30gcmVmPXtibG9ja30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jbG9ja30+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e25ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBwYXVzZWQ9e2ZhbHNlfSBkaXNwbGF5TXM9e2ZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgICAgPGRpdj57bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubmV3fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVGltZXIgPyAnJyA6IHMuc2VsZWN0Mn0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpc1RpbWVyQyh0cnVlKX0+e3Byb3BzLmRlc2MudGltZXJ9PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpc1RpbWVyQyhmYWxzZSl9Pntwcm9wcy5kZXNjLmFsYXJtfTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sb25nLmhvdXJzfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdIQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSAwID8gcHJldlN0YXRlIC0gMSA6IDIzKX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bmV3SH0gb25DaGFuZ2U9e2UgPT4gbmV3SEMoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PiB7Z2V0TnVtYmVycygyNCkubWFwKG4gPT4gPG9wdGlvbiBrZXk9e259IHZhbHVlPXtufT57bn08L29wdGlvbj4pfSA8L3NlbGVjdD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3SEMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMjMgPyBwcmV2U3RhdGUgKyAxIDogMCl9Pis8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sb25nLm1pbn08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3TWluQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSAwID8gcHJldlN0YXRlIC0gMSA6IDU5KX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bmV3TWlufSBvbkNoYW5nZT17ZSA9PiBuZXdNaW5DKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT4ge2dldE51bWJlcnMoNjApLm1hcChuID0+IDxvcHRpb24ga2V5PXtufSB2YWx1ZT17bn0+e259PC9vcHRpb24+KX0gPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld01pbkMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gNTkgPyBwcmV2U3RhdGUgKyAxIDogMCl9Pis8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sb25nLnNlY308L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3U2VjQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSAwID8gcHJldlN0YXRlIC0gMSA6IDU5KX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bmV3U2VjfSBvbkNoYW5nZT17ZSA9PiBuZXdTZWNDKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT4ge2dldE51bWJlcnMoNjApLm1hcChuID0+IDxvcHRpb24ga2V5PXtufSB2YWx1ZT17bn0+e259PC9vcHRpb24+KX0gPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld1NlY0MocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gNTkgPyBwcmV2U3RhdGUgKyAxIDogMCl9Pis8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuZXdOYW1lfSBvbkNoYW5nZT17bmV3TmFtZUNoYW5nZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2Muc291bmR9PC9kaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzb3VuZFwiIHZhbHVlPXtkZWZhdWx0U291bmR9IG9uQ2hhbmdlPXtlID0+IGRlZmF1bHRTb3VuZEMoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAge3NvdW5kcy5tYXAoc291bmQgPT4gPG9wdGlvbiBrZXk9e3NvdW5kLmx9IHZhbHVlPXtzb3VuZC5sfSA+e3NvdW5kLm59PC9vcHRpb24+KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAge2N1cnJlbnRQbGF5aW5nID09PSBudWxsID9cclxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGVzdH0gb25DbGljaz17KCkgPT4gY3VycmVudFBsYXlpbmdDKGRlZmF1bHRTb3VuZCl9PuKWujwvYnV0dG9uPiA6XHJcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLm9mZn0gb25DbGljaz17KCkgPT4gY3VycmVudFBsYXlpbmdDKG51bGwpfT7ilqA8L2J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZH0+e3Byb3BzLmRlc2MuYWRkfTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuZWxlbWVudHN9PlxyXG4gICAgICB7YWxhcm1zLm1hcChvYmogPT4gPEVsZW1lbnQga2V5PXtvYmouaWR9IHsuLi5vYmp9IHNvdW5kPXtzb3VuZHMuZmlsdGVyKGVsZW0gPT4gZWxlbS5sID09PSBvYmouc291bmQpWzBdLm59IHRpbWVyRGlzcGF0Y2g9e3RpbWVyRGlzcGF0Y2h9IGNoYW5nZUZpZWxkPXtjaGFuZ2VGaWVsZH0gYWxhcm1EZWxldGU9e2FsYXJtRGVsZXRlfSBwcm9wcz17cHJvcHN9IC8+KX1cclxuICAgIDwvZGl2PlxyXG4gICAgPEF1eGlsaWFyeUxpc3QgY2hhbmdlT25UaW1lcj17Y2hhbmdlT25UaW1lcn0gY2hhbmdlT25BbGFybT17Y2hhbmdlT25BbGFybX0gcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgPFBvcHVwIGN1cnJlbnRBbGFybXM9e2N1cnJlbnRBbGFybXN9IHN0b3BDdXJyZW50QWxhcm1zPXtzdG9wQ3VycmVudEFsYXJtc30gcHJvcHM9e3Byb3BzfSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcbi8v0JvQuNGB0YIg0YEg0YDQsNC30L3Ri9C80Lgg0LzQtdGC0LrQsNC80Lgg0LLRgNC10LzQtdC90Lgg0LTQu9GPINCx0YPQtNC40LvRjNC90LjQutCwINC4INGC0LDQudC80LXRgNCwIFxyXG5mdW5jdGlvbiBBdXhpbGlhcnlMaXN0KHsgY2hhbmdlT25UaW1lciwgY2hhbmdlT25BbGFybSwgcHJvcHMgfSkge1xyXG4gIGNvbnN0IG0gPSBNYXRoLmNlaWwobm93LmdldE1pbnV0ZXMoKSAvIDE1KVxyXG4gIHJldHVybiA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MuYWxhcm1Pbn08L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YWxhcm1zLm1hcCh0aW1lID0+IDxhIG9uQ2xpY2s9e2UgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGNoYW5nZU9uQWxhcm0odGltZSkgfX0ga2V5PXt0aW1lfT57KHRpbWUgLyA2MCkgfCAwfTp7dGltZSAlIDYwID09PSAwID8gYDAwYCA6IHRpbWUgJSA2MH08L2E+KX1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy50aW1lck9ufTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aW1lcnMubWFwKHRpbWVyID0+IDxidXR0b24gb25DbGljaz17KCkgPT4gY2hhbmdlT25UaW1lcih0aW1lcil9IGtleT17dGltZXJ9Pnt0aW1lciA8IDYwID8gdGltZXIgOiB0aW1lciA8IDM2MDAgPyB0aW1lciAvIDYwIDogdGltZXIgLyAzNjAwfSB7dGltZXIgPCA2MCA/IHByb3BzLmRlc2Muc2hvcnQuc2VjIDogdGltZXIgPCAzNjAwID8gcHJvcHMuZGVzYy5zaG9ydC5taW4gOiBwcm9wcy5kZXNjLnNob3J0LmhvdXJzfTwvYnV0dG9uPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC8+XHJcbn1cclxuLy/QntC/0L7QstC10YnQtdC90LjQtVxyXG5mdW5jdGlvbiBQb3B1cCh7IGN1cnJlbnRBbGFybXMsIHN0b3BDdXJyZW50QWxhcm1zLCBwcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgJHtzLnBvcHVwfSAke2N1cnJlbnRBbGFybXMgPyBzLmRpc3BsYXkgOiBcIlwifWB9PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y3VycmVudEFsYXJtcyA/XHJcbiAgICAgICAgICA8Q2xvY2sgdGltZXN0YW1wPXtEYXRlLm5vdygpIC0gY3VycmVudEFsYXJtcyArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBkaXNwbGF5TXM9e2ZhbHNlfSBwYXVzZWQ9e3RydWV9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPiA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmdyZWVufSBvbkNsaWNrPXtzdG9wQ3VycmVudEFsYXJtc30+e3Byb3BzLmRlc2Mub2ZmfTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBFbGVtZW50KHsgaWQsIHN0YXJ0ZWQsIHRpbWVzdGFtcCwgYWN0aXZlLCBzb3VuZCwgbmFtZSwgdGltZXJEaXNwYXRjaCwgaXNUaW1lciwgY2hhbmdlRmllbGQsIGFsYXJtRGVsZXRlLCBmaW5pc2gsIHByb3BzIH0pIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KHdha2V1cCwgZmluaXNoIC0gRGF0ZS5ub3coKSlcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIH1cclxuICB9LCBbYWN0aXZlXSlcclxuICBmdW5jdGlvbiB3YWtldXAoKSB7XHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIGZhbHNlKVxyXG4gICAgdGltZXJEaXNwYXRjaChpZClcclxuICB9XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ3N0YXJ0ZWQnLCBub3cpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2ZpbmlzaCcsIGdldEZpbmlzaFRpbWVzdGFtcChpc1RpbWVyLCBub3csIHRpbWVzdGFtcCkpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIHRydWUpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9mZigpIHtcclxuICAgIGNoYW5nZUZpZWxkKGlkLCAnYWN0aXZlJywgZmFsc2UpXHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGtleT17aWR9PlxyXG4gICAgPGRpdj57aXNUaW1lciA/IHByb3BzLmRlc2MudGltZXIgOiBwcm9wcy5kZXNjLmFsYXJtfTwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAge25hbWV9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2Muc3RhcnRlZFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e0RhdGUubm93KCkgLSBzdGFydGVkICsgbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDB9IHBhdXNlZD17dHJ1ZX0gZGlzcGxheU1zPXtmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MuZmluaXNoVGltZX08L2Rpdj5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17RGF0ZS5ub3coKSAtIGZpbmlzaCArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBwYXVzZWQ9e3RydWV9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLnNvdW5kfTwvZGl2PlxyXG4gICAgICA8ZGl2Pntzb3VuZH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5sZWZ0VGltZX08L2Rpdj5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17YWN0aXZlID8gZmluaXNoIDogbnVsbH0gcGF1c2VkPXthY3RpdmUgPT09IGZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICAge2FjdGl2ZSA/XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLnJlZH0gb25DbGljaz17b2ZmfT57cHJvcHMuZGVzYy5vZmZ9PC9idXR0b24+IDpcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuZ3JlZW59IG9uQ2xpY2s9e29ufT57cHJvcHMuZGVzYy5yZXBlYXR9PC9idXR0b24+XHJcbiAgICB9XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5yZWR9IG9uQ2xpY2s9eygpID0+IGFsYXJtRGVsZXRlKGlkKX0+e3Byb3BzLmRlc2MuZGVsZXRlfTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG59XHJcbi8v0J/QvtC70YPRh9C40YLRjCDRhNC40L3QsNC70YzQvdGD0Y4g0LzQtdGC0LrRgyDQstGA0LXQvNC10L3QuCAo0L7QutC+0L3Rh9Cw0L3QuNC1INGC0LDQudC80LXRgNCwKVxyXG5mdW5jdGlvbiBnZXRGaW5pc2hUaW1lc3RhbXAoaXNUaW1lciwgc3RhcnRlZCwgdGltZXN0YW1wKSB7XHJcbiAgaWYgKGlzVGltZXIpIHJldHVybiBzdGFydGVkICsgdGltZXN0YW1wICsgMTBcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RhcnRlZClcclxuICBjb25zdCBzID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuICBjb25zdCBtID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICBjb25zdCBoID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgY29uc3QgbW9kdWxvID0gKChoICogNjAgKyBtKSAqIDYwICsgcykgKiAxMDAwXHJcbiAgaWYgKG1vZHVsbyA8IHRpbWVzdGFtcCkge1xyXG4gICAgcmV0dXJuIHRpbWVzdGFtcCAtIG1vZHVsbyArIHN0YXJ0ZWRcclxuICB9IGVsc2UgcmV0dXJuIHRpbWVzdGFtcCAtIG1vZHVsbyArICgzNjAwMDAwICogMjQpICsgc3RhcnRlZFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==