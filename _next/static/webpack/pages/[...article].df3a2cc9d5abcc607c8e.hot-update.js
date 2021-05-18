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
  _s2();

  var _this2 = this;

  var changeOnTimer = _ref2.changeOnTimer,
      changeOnAlarm = _ref2.changeOnAlarm,
      props = _ref2.props;
  var m = Math.ceil(now.getMinutes() / 15);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.alarmOn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: alarms.map(function (time) {
          var htext = time / 60 | 0;
          var mtext = time % 60 === 0 ? "00" : time % 60;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "".concat(router.asPath, "/").concat(htext, "-").concat(mtext, "/"),
            onClick: function onClick(e) {
              e.preventDefault();
              changeOnAlarm(time);
            },
            children: [htext, ":", mtext]
          }, time, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 18
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.timerOn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
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
            lineNumber: 201,
            columnNumber: 30
          }, _this2);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 198,
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
          lineNumber: 212,
          columnNumber: 11
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.green,
          onClick: stopCurrentAlarms,
          children: props.desc.off
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 208,
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
      lineNumber: 244,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.startedTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: Date.now() - started + new Date().getTimezoneOffset() * 60000,
        paused: true,
        displayMs: false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.finishTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: Date.now() - finish + new Date().getTimezoneOffset() * 60000,
        paused: true,
        displayMs: false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.sound
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: sound
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: props.desc.leftTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_7__["Clock"], {
        timestamp: active ? finish : null,
        paused: active === false,
        onlyTime: true,
        labels: props.desc.labels
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 5
    }, this), active ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.red,
      onClick: off,
      children: props.desc.off
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.green,
      onClick: on,
      children: props.desc.repeat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_tools_timer_styl__WEBPACK_IMPORTED_MODULE_5___default.a.red,
      onClick: function onClick() {
        return alarmDelete(id);
      },
      children: props.desc["delete"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 5
    }, this)]
  }, id, true, {
    fileName: _jsxFileName,
    lineNumber: 243,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UaW1lci5qcyJdLCJuYW1lcyI6WyJ0aW1lcnMiLCJub3ciLCJEYXRlIiwiaCIsImdldEhvdXJzIiwiYWxhcm1zIiwiaSIsInB1c2giLCJTdG9wd2F0Y2giLCJwcm9wcyIsInNsdWciLCJ1c2VTdGF0ZSIsImFsYXJtc0MiLCJkZWZhdWx0U291bmQiLCJkZWZhdWx0U291bmRDIiwiaXNUaW1lciIsImlzVGltZXJDIiwibmV3TmFtZSIsIm5ld05hbWVDIiwibmV3TmFtZUNoYW5nZWRCeVVzZXIiLCJuZXdOYW1lQ2hhbmdlZEJ5VXNlckMiLCJ2YWx1ZSIsImhvdXJzIiwidW5kZWZpbmVkIiwibmV3SCIsIm5ld0hDIiwibWluIiwibmV3TWluIiwibmV3TWluQyIsInNlYyIsIm5ld1NlYyIsIm5ld1NlY0MiLCJjdXJyZW50QWxhcm1zIiwiY3VycmVudEFsYXJtc0MiLCJjdXJyZW50UGxheWluZyIsImN1cnJlbnRQbGF5aW5nQyIsImN1cnJlbnRQbGF5aW5nRWxlbSIsImN1cnJlbnRQbGF5aW5nRWxlbUMiLCJibG9jayIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzdG9yZUl0ZW1zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlU291bmQiLCJxdWVyeSIsImFydGljbGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicGF1c2UiLCJuZXdBdWRpbyIsIkF1ZGlvIiwibG9vcCIsInBsYXkiLCJkZXNjIiwidGltZXJPbiIsImluc3RhbnQiLCJhbGFybU9uIiwiYWRkIiwic3RhcnRlZCIsInRpbWVzdGFtcCIsInByZXZTdGF0ZSIsImlkIiwiYWN0aXZlIiwibmFtZSIsInNvdW5kIiwiZmluaXNoIiwiZ2V0RmluaXNoVGltZXN0YW1wIiwiYWxhcm1EZWxldGUiLCJmaWx0ZXIiLCJvYmoiLCJjaGFuZ2VGaWVsZCIsImZpZWxkIiwibWFwIiwidGltZXJEaXNwYXRjaCIsImVsZW0iLCJzdG9wQ3VycmVudEFsYXJtcyIsImNoYW5nZU9uVGltZXIiLCJ0aW1lIiwiY2hhbmdlT25BbGFybSIsInNvdW5kcyIsIk9iamVjdCIsImVudHJpZXMiLCJsIiwibiIsImdldE51bWJlcnMiLCJtYXgiLCJyZXN1bHQiLCJuZXdOYW1lQ2hhbmdlIiwiZSIsInMiLCJjbG9jayIsImdldFRpbWV6b25lT2Zmc2V0IiwibGFiZWxzIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsImN1cnJlbnQiLCJzZWxlY3QyIiwidGltZXIiLCJhbGFybSIsIk51bWJlciIsInRhcmdldCIsInRlc3QiLCJvZmYiLCJlbGVtZW50cyIsIkF1eGlsaWFyeUxpc3QiLCJtIiwiTWF0aCIsImNlaWwiLCJnZXRNaW51dGVzIiwibGlzdCIsImh0ZXh0IiwibXRleHQiLCJhc1BhdGgiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwicG9wdXAiLCJkaXNwbGF5IiwiZ3JlZW4iLCJFbGVtZW50Iiwic2V0VGltZW91dCIsIndha2V1cCIsImNsZWFyVGltZW91dCIsIm9uIiwic3RhcnRlZFRpbWUiLCJmaW5pc2hUaW1lIiwibGVmdFRpbWUiLCJyZWQiLCJyZXBlYXQiLCJkYXRlIiwiZ2V0U2Vjb25kcyIsIm1vZHVsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxFQUErQyxHQUEvQyxFQUFvRCxJQUFwRCxFQUEwRCxJQUExRCxFQUFnRSxJQUFoRSxFQUFzRSxJQUF0RSxFQUE0RSxJQUE1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QWYsR0FBb0JuQixDQUFyQixJQUEwQixJQUF6Qzs7QUFDQSxNQUFJNEMsTUFBTSxHQUFHMUUsU0FBYixFQUF3QjtBQUN0QixXQUFPQSxTQUFTLEdBQUcwRSxNQUFaLEdBQXFCM0UsT0FBNUI7QUFDRCxHQUZELE1BRU8sT0FBT0MsU0FBUyxHQUFHMEUsTUFBWixHQUFzQixVQUFVLEVBQWhDLEdBQXNDM0UsT0FBN0M7QUFDUiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uZGYzYTJjYzlkNWFiY2M2MDdjOGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL3RpbWVyLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi4vU3ZnJ1xyXG5pbXBvcnQgeyBDbG9jayB9IGZyb20gJy4vU3RvcHdhdGNoJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5cclxuY29uc3QgdGltZXJzID0gWzE1LCAzMCwgNjAsIDkwLCAxMjAsIDE1MCwgMTgwLCAzMDAsIDQyMCwgNjAwLCA5MDAsIDEyMDAsIDE4MDAsIDI3MDAsIDM2MDAsIDcyMDAsIDEwODAwLCAyMTYwMCwgMzI0MDAsIDQzMjAwLCA2NDgwMCwgODY0MDBdXHJcblxyXG5jb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbmNvbnN0IGggPSBub3cuZ2V0SG91cnMoKSAqIDYwXHJcbmNvbnN0IGFsYXJtcyA9IFtdXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgOTY7IGkrKykge1xyXG4gIGlmIChoICsgaSAqIDE1ID49IDI0ICogNjApIHtcclxuICAgIGFsYXJtcy5wdXNoKGggLSAyNCAqIDYwICsgaSAqIDE1KVxyXG4gIH0gZWxzZSBhbGFybXMucHVzaChoICsgaSAqIDE1KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9wd2F0Y2goeyBwcm9wcywgc2x1ZyB9KSB7XHJcbiAgY29uc3QgW2FsYXJtcywgYWxhcm1zQ10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZGVmYXVsdFNvdW5kLCBkZWZhdWx0U291bmRDXSA9IHVzZVN0YXRlKCd0cmFucXVpbGl0eScpXHJcbiAgY29uc3QgW2lzVGltZXIsIGlzVGltZXJDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtuZXdOYW1lLCBuZXdOYW1lQ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbmV3TmFtZUNoYW5nZWRCeVVzZXIsIG5ld05hbWVDaGFuZ2VkQnlVc2VyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbmV3SCwgbmV3SENdID0gdXNlU3RhdGUocHJvcHMudmFsdWUuaG91cnMgIT09IHVuZGVmaW5lZCA/IHByb3BzLnZhbHVlLmhvdXJzIDogMClcclxuICBjb25zdCBbbmV3TWluLCBuZXdNaW5DXSA9IHVzZVN0YXRlKHByb3BzLnZhbHVlLm1pbiAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUubWluIDogMClcclxuICBjb25zdCBbbmV3U2VjLCBuZXdTZWNDXSA9IHVzZVN0YXRlKHByb3BzLnZhbHVlLnNlYyAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUuc2VjIDogMClcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRBbGFybXMsIGN1cnJlbnRBbGFybXNDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2N1cnJlbnRQbGF5aW5nLCBjdXJyZW50UGxheWluZ0NdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbY3VycmVudFBsYXlpbmdFbGVtLCBjdXJyZW50UGxheWluZ0VsZW1DXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKG51bGwpXHJcbiAgY29uc29sZS5sb2cocm91dGVyKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZUl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsYXJtSXRlbXMnKVxyXG4gICAgaWYgKHN0b3JlSXRlbXMgPT09IG51bGwpIHJldHVyblxyXG4gICAgYWxhcm1zQyhKU09OLnBhcnNlKHN0b3JlSXRlbXMpKVxyXG4gICAgY29uc3Qgc3RvcmVTb3VuZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGFybVNvdW5kJylcclxuICAgIGlmIChzdG9yZVNvdW5kID09PSBudWxsKSByZXR1cm5cclxuICAgIGRlZmF1bHRTb3VuZEMoc3RvcmVTb3VuZClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNUaW1lckMoc2x1ZyA9PT0gJ3RpbWVyJylcclxuICB9LCBbcm91dGVyLnF1ZXJ5LmFydGljbGVdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxhcm1JdGVtcycsIEpTT04uc3RyaW5naWZ5KGFsYXJtcykpXHJcbiAgfSwgW2FsYXJtc10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGFybVNvdW5kJywgZGVmYXVsdFNvdW5kKVxyXG4gIH0sIFtkZWZhdWx0U291bmRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBsYXlpbmdFbGVtICE9PSBudWxsKSBjdXJyZW50UGxheWluZ0VsZW0ucGF1c2UoKVxyXG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nID09PSBudWxsKSByZXR1cm5cclxuICAgIGNvbnN0IG5ld0F1ZGlvID0gbmV3IEF1ZGlvKGAvc291bmRzLyR7Y3VycmVudFBsYXlpbmd9Lm1wM2ApXHJcbiAgICBuZXdBdWRpby5sb29wID0gdHJ1ZVxyXG4gICAgbmV3QXVkaW8ucGxheSgpXHJcbiAgICBjdXJyZW50UGxheWluZ0VsZW1DKG5ld0F1ZGlvKVxyXG4gIH0sIFtjdXJyZW50UGxheWluZ10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChuZXdOYW1lQ2hhbmdlZEJ5VXNlcikgcmV0dXJuXHJcbiAgICBpZiAoaXNUaW1lcikge1xyXG4gICAgICBuZXdOYW1lQyhgJHtwcm9wcy5kZXNjLnRpbWVyT259ICR7bmV3SCA9PT0gMCA/IGBgIDogYCR7bmV3SCA8IDEwID8gXCIwXCIgKyBuZXdIIDogbmV3SH0gJHtwcm9wcy5kZXNjLnNob3J0LmhvdXJzfS4gYH0ke25ld01pbiA9PT0gMCA/IGBgIDogYCR7bmV3TWluIDwgMTAgPyBcIjBcIiArIG5ld01pbiA6IG5ld01pbn0gJHtwcm9wcy5kZXNjLnNob3J0Lm1pbn0uIGB9JHtuZXdTZWMgPT09IDAgPyAobmV3SCAhPT0gMCB8fCBuZXdNaW4gIT09IDAgPyBgYCA6IHByb3BzLmRlc2Muc2hvcnQuaW5zdGFudCkgOiBgJHtuZXdTZWMgPCAxMCA/IFwiMFwiICsgbmV3U2VjIDogbmV3U2VjfSAke3Byb3BzLmRlc2Muc2hvcnQuc2VjfS5gfWApXHJcbiAgICB9IGVsc2VcclxuICAgICAgbmV3TmFtZUMoYCR7cHJvcHMuZGVzYy5hbGFybU9ufSAke25ld0ggPCAxMCA/IFwiMFwiICsgbmV3SCA6IG5ld0h9OiR7bmV3TWluIDwgMTAgPyBcIjBcIiArIG5ld01pbiA6IG5ld01pbn0ke25ld1NlYyA9PT0gMCA/IGBgIDogYDoke25ld1NlYyA8IDEwID8gXCIwXCIgKyBuZXdTZWMgOiBuZXdTZWN9YH1gKVxyXG4gIH0sIFtuZXdILCBuZXdNaW4sIG5ld1NlYywgaXNUaW1lcl0pXHJcblxyXG4gIGZ1bmN0aW9uIGFkZCgpIHtcclxuICAgIGNvbnN0IHN0YXJ0ZWQgPSBEYXRlLm5vdygpXHJcbiAgICBjb25zdCB0aW1lc3RhbXAgPSAoKG5ld01pbiArIG5ld0ggKiA2MCkgKiA2MCArIG5ld1NlYykgKiAxMDAwXHJcbiAgICBhbGFybXNDKHByZXZTdGF0ZSA9PiBbe1xyXG4gICAgICBpZDogc3RhcnRlZCxcclxuICAgICAgc3RhcnRlZCxcclxuICAgICAgdGltZXN0YW1wLFxyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIG5hbWU6IG5ld05hbWUsXHJcbiAgICAgIGlzVGltZXI6IGlzVGltZXIsXHJcbiAgICAgIHNvdW5kOiBkZWZhdWx0U291bmQsXHJcbiAgICAgIGZpbmlzaDogZ2V0RmluaXNoVGltZXN0YW1wKGlzVGltZXIsIHN0YXJ0ZWQsIHRpbWVzdGFtcCksXHJcbiAgICB9LCAuLi5wcmV2U3RhdGVdKVxyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKGZhbHNlKVxyXG4gIH1cclxuICBmdW5jdGlvbiBhbGFybURlbGV0ZShpZCkge1xyXG4gICAgYWxhcm1zQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLmZpbHRlcihvYmogPT4gb2JqLmlkICE9PSBpZCkpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZUZpZWxkKGlkLCBmaWVsZCwgdmFsdWUpIHtcclxuICAgIGFsYXJtc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZS5tYXAob2JqID0+IG9iai5pZCA9PT0gaWQgPyB7IC4uLm9iaiwgW2ZpZWxkXTogdmFsdWUgfSA6IG9iaikpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHRpbWVyRGlzcGF0Y2goaWQpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBhbGFybXMuZmlsdGVyKG9iaiA9PiBvYmouaWQgPT09IGlkKVswXVxyXG4gICAgaWYgKGVsZW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICBjdXJyZW50UGxheWluZ0MoZWxlbS5zb3VuZClcclxuICAgIGN1cnJlbnRBbGFybXNDKGVsZW0uZmluaXNoKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzdG9wQ3VycmVudEFsYXJtcygpIHtcclxuICAgIGN1cnJlbnRBbGFybXNDKG51bGwpXHJcbiAgICBjdXJyZW50UGxheWluZ0MobnVsbClcclxuICB9XHJcbiAgZnVuY3Rpb24gY2hhbmdlT25UaW1lcih0aW1lKSB7XHJcbiAgICBuZXdOYW1lQ2hhbmdlZEJ5VXNlckMoZmFsc2UpXHJcbiAgICBpc1RpbWVyQyh0cnVlKVxyXG4gICAgbmV3SEMoKHRpbWUgLyAzNjAwKSB8IDApXHJcbiAgICBuZXdNaW5DKCh0aW1lIC8gNjAgJSA2MCkgfCAwKVxyXG4gICAgbmV3U2VjQygodGltZSAlIDYwKSB8IDApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZU9uQWxhcm0odGltZSkge1xyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKGZhbHNlKVxyXG4gICAgaXNUaW1lckMoZmFsc2UpXHJcbiAgICBuZXdIQygodGltZSAvIDYwKSB8IDApXHJcbiAgICBuZXdNaW5DKCh0aW1lICUgNjApIHwgMClcclxuICAgIG5ld1NlY0MoMClcclxuICB9XHJcbiAgY29uc3Qgc291bmRzID0gT2JqZWN0LmVudHJpZXMocHJvcHMuc291bmQpLm1hcChvYmogPT4gKHsgbDogb2JqWzBdLCBuOiBvYmpbMV0gfSkpXHJcbiAgZnVuY3Rpb24gZ2V0TnVtYmVycyhtYXgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld05hbWVDaGFuZ2UoZSkge1xyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKHRydWUpXHJcbiAgICBuZXdOYW1lQyhlLnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9IHJlZj17YmxvY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2xvY2t9PlxyXG4gICAgICA8Q2xvY2sgdGltZXN0YW1wPXtuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMH0gcGF1c2VkPXtmYWxzZX0gZGlzcGxheU1zPXtmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICAgIDxkaXY+e25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgIDxGdWxsc2NyZWVuIGVsZW09e2Jsb2NrLmN1cnJlbnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5ld30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1RpbWVyID8gJycgOiBzLnNlbGVjdDJ9PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaXNUaW1lckModHJ1ZSl9Pntwcm9wcy5kZXNjLnRpbWVyfTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaXNUaW1lckMoZmFsc2UpfT57cHJvcHMuZGVzYy5hbGFybX08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9uZy5ob3Vyc308L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3SEMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMCA/IHByZXZTdGF0ZSAtIDEgOiAyMyl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld0h9IG9uQ2hhbmdlPXtlID0+IG5ld0hDKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT4ge2dldE51bWJlcnMoMjQpLm1hcChuID0+IDxvcHRpb24ga2V5PXtufSB2YWx1ZT17bn0+e259PC9vcHRpb24+KX0gPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld0hDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDIzID8gcHJldlN0YXRlICsgMSA6IDApfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9uZy5taW59PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld01pbkMocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMCA/IHByZXZTdGF0ZSAtIDEgOiA1OSl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld01pbn0gb25DaGFuZ2U9e2UgPT4gbmV3TWluQyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+IHtnZXROdW1iZXJzKDYwKS5tYXAobiA9PiA8b3B0aW9uIGtleT17bn0gdmFsdWU9e259PntufTwvb3B0aW9uPil9IDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdNaW5DKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDU5ID8gcHJldlN0YXRlICsgMSA6IDApfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9uZy5zZWN9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld1NlY0MocHJldlN0YXRlID0+IHByZXZTdGF0ZSAhPT0gMCA/IHByZXZTdGF0ZSAtIDEgOiA1OSl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld1NlY30gb25DaGFuZ2U9e2UgPT4gbmV3U2VjQyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+IHtnZXROdW1iZXJzKDYwKS5tYXAobiA9PiA8b3B0aW9uIGtleT17bn0gdmFsdWU9e259PntufTwvb3B0aW9uPil9IDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdTZWNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDU5ID8gcHJldlN0YXRlICsgMSA6IDApfT4rPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubmFtZX08L2Rpdj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3TmFtZX0gb25DaGFuZ2U9e25ld05hbWVDaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLnNvdW5kfTwvZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwic291bmRcIiB2YWx1ZT17ZGVmYXVsdFNvdW5kfSBvbkNoYW5nZT17ZSA9PiBkZWZhdWx0U291bmRDKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgIHtzb3VuZHMubWFwKHNvdW5kID0+IDxvcHRpb24ga2V5PXtzb3VuZC5sfSB2YWx1ZT17c291bmQubH0gPntzb3VuZC5ufTwvb3B0aW9uPil9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIHtjdXJyZW50UGxheWluZyA9PT0gbnVsbCA/XHJcbiAgICAgICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRlc3R9IG9uQ2xpY2s9eygpID0+IGN1cnJlbnRQbGF5aW5nQyhkZWZhdWx0U291bmQpfT7ilro8L2J1dHRvbj4gOlxyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5vZmZ9IG9uQ2xpY2s9eygpID0+IGN1cnJlbnRQbGF5aW5nQyhudWxsKX0+4pagPC9idXR0b24+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGR9Pntwcm9wcy5kZXNjLmFkZH08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmVsZW1lbnRzfT5cclxuICAgICAge2FsYXJtcy5tYXAob2JqID0+IDxFbGVtZW50IGtleT17b2JqLmlkfSB7Li4ub2JqfSBzb3VuZD17c291bmRzLmZpbHRlcihlbGVtID0+IGVsZW0ubCA9PT0gb2JqLnNvdW5kKVswXS5ufSB0aW1lckRpc3BhdGNoPXt0aW1lckRpc3BhdGNofSBjaGFuZ2VGaWVsZD17Y2hhbmdlRmllbGR9IGFsYXJtRGVsZXRlPXthbGFybURlbGV0ZX0gcHJvcHM9e3Byb3BzfSAvPil9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxBdXhpbGlhcnlMaXN0IGNoYW5nZU9uVGltZXI9e2NoYW5nZU9uVGltZXJ9IGNoYW5nZU9uQWxhcm09e2NoYW5nZU9uQWxhcm19IHByb3BzPXtwcm9wc30gLz5cclxuICAgIDxQb3B1cCBjdXJyZW50QWxhcm1zPXtjdXJyZW50QWxhcm1zfSBzdG9wQ3VycmVudEFsYXJtcz17c3RvcEN1cnJlbnRBbGFybXN9IHByb3BzPXtwcm9wc30gLz5cclxuICA8L2Rpdj5cclxufVxyXG4vL9Cb0LjRgdGCINGBINGA0LDQt9C90YvQvNC4INC80LXRgtC60LDQvNC4INCy0YDQtdC80LXQvdC4INC00LvRjyDQsdGD0LTQuNC70YzQvdC40LrQsCDQuCDRgtCw0LnQvNC10YDQsCBcclxuZnVuY3Rpb24gQXV4aWxpYXJ5TGlzdCh7IGNoYW5nZU9uVGltZXIsIGNoYW5nZU9uQWxhcm0sIHByb3BzIH0pIHtcclxuICBjb25zdCBtID0gTWF0aC5jZWlsKG5vdy5nZXRNaW51dGVzKCkgLyAxNSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIobnVsbClcclxuICByZXR1cm4gPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxpc3R9PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLmFsYXJtT259PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2FsYXJtcy5tYXAodGltZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBodGV4dCA9ICh0aW1lIC8gNjApIHwgMFxyXG4gICAgICAgICAgY29uc3QgbXRleHQgPSB0aW1lICUgNjAgPT09IDAgPyBgMDBgIDogdGltZSAlIDYwXHJcbiAgICAgICAgICByZXR1cm4gPGEgaHJlZj17YCR7cm91dGVyLmFzUGF0aH0vJHtodGV4dH0tJHttdGV4dH0vYH0gb25DbGljaz17ZSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgY2hhbmdlT25BbGFybSh0aW1lKSB9fSBrZXk9e3RpbWV9PntodGV4dH06e210ZXh0fTwvYT5cclxuICAgICAgICB9KX1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy50aW1lck9ufTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aW1lcnMubWFwKHRpbWVyID0+IDxidXR0b24gb25DbGljaz17KCkgPT4gY2hhbmdlT25UaW1lcih0aW1lcil9IGtleT17dGltZXJ9Pnt0aW1lciA8IDYwID8gdGltZXIgOiB0aW1lciA8IDM2MDAgPyB0aW1lciAvIDYwIDogdGltZXIgLyAzNjAwfSB7dGltZXIgPCA2MCA/IHByb3BzLmRlc2Muc2hvcnQuc2VjIDogdGltZXIgPCAzNjAwID8gcHJvcHMuZGVzYy5zaG9ydC5taW4gOiBwcm9wcy5kZXNjLnNob3J0LmhvdXJzfTwvYnV0dG9uPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC8+XHJcbn1cclxuLy/QntC/0L7QstC10YnQtdC90LjQtVxyXG5mdW5jdGlvbiBQb3B1cCh7IGN1cnJlbnRBbGFybXMsIHN0b3BDdXJyZW50QWxhcm1zLCBwcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgJHtzLnBvcHVwfSAke2N1cnJlbnRBbGFybXMgPyBzLmRpc3BsYXkgOiBcIlwifWB9PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y3VycmVudEFsYXJtcyA/XHJcbiAgICAgICAgICA8Q2xvY2sgdGltZXN0YW1wPXtEYXRlLm5vdygpIC0gY3VycmVudEFsYXJtcyArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBkaXNwbGF5TXM9e2ZhbHNlfSBwYXVzZWQ9e3RydWV9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPiA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmdyZWVufSBvbkNsaWNrPXtzdG9wQ3VycmVudEFsYXJtc30+e3Byb3BzLmRlc2Mub2ZmfTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBFbGVtZW50KHsgaWQsIHN0YXJ0ZWQsIHRpbWVzdGFtcCwgYWN0aXZlLCBzb3VuZCwgbmFtZSwgdGltZXJEaXNwYXRjaCwgaXNUaW1lciwgY2hhbmdlRmllbGQsIGFsYXJtRGVsZXRlLCBmaW5pc2gsIHByb3BzIH0pIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KHdha2V1cCwgZmluaXNoIC0gRGF0ZS5ub3coKSlcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIH1cclxuICB9LCBbYWN0aXZlXSlcclxuICBmdW5jdGlvbiB3YWtldXAoKSB7XHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIGZhbHNlKVxyXG4gICAgdGltZXJEaXNwYXRjaChpZClcclxuICB9XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ3N0YXJ0ZWQnLCBub3cpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2ZpbmlzaCcsIGdldEZpbmlzaFRpbWVzdGFtcChpc1RpbWVyLCBub3csIHRpbWVzdGFtcCkpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIHRydWUpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9mZigpIHtcclxuICAgIGNoYW5nZUZpZWxkKGlkLCAnYWN0aXZlJywgZmFsc2UpXHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGtleT17aWR9PlxyXG4gICAgPGRpdj57aXNUaW1lciA/IHByb3BzLmRlc2MudGltZXIgOiBwcm9wcy5kZXNjLmFsYXJtfTwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAge25hbWV9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2Muc3RhcnRlZFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e0RhdGUubm93KCkgLSBzdGFydGVkICsgbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDB9IHBhdXNlZD17dHJ1ZX0gZGlzcGxheU1zPXtmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MuZmluaXNoVGltZX08L2Rpdj5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17RGF0ZS5ub3coKSAtIGZpbmlzaCArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBwYXVzZWQ9e3RydWV9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLnNvdW5kfTwvZGl2PlxyXG4gICAgICA8ZGl2Pntzb3VuZH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5sZWZ0VGltZX08L2Rpdj5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17YWN0aXZlID8gZmluaXNoIDogbnVsbH0gcGF1c2VkPXthY3RpdmUgPT09IGZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICAge2FjdGl2ZSA/XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLnJlZH0gb25DbGljaz17b2ZmfT57cHJvcHMuZGVzYy5vZmZ9PC9idXR0b24+IDpcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuZ3JlZW59IG9uQ2xpY2s9e29ufT57cHJvcHMuZGVzYy5yZXBlYXR9PC9idXR0b24+XHJcbiAgICB9XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5yZWR9IG9uQ2xpY2s9eygpID0+IGFsYXJtRGVsZXRlKGlkKX0+e3Byb3BzLmRlc2MuZGVsZXRlfTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG59XHJcbi8v0J/QvtC70YPRh9C40YLRjCDRhNC40L3QsNC70YzQvdGD0Y4g0LzQtdGC0LrRgyDQstGA0LXQvNC10L3QuCAo0L7QutC+0L3Rh9Cw0L3QuNC1INGC0LDQudC80LXRgNCwKVxyXG5mdW5jdGlvbiBnZXRGaW5pc2hUaW1lc3RhbXAoaXNUaW1lciwgc3RhcnRlZCwgdGltZXN0YW1wKSB7XHJcbiAgaWYgKGlzVGltZXIpIHJldHVybiBzdGFydGVkICsgdGltZXN0YW1wICsgMTBcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RhcnRlZClcclxuICBjb25zdCBzID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuICBjb25zdCBtID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICBjb25zdCBoID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgY29uc3QgbW9kdWxvID0gKChoICogNjAgKyBtKSAqIDYwICsgcykgKiAxMDAwXHJcbiAgaWYgKG1vZHVsbyA8IHRpbWVzdGFtcCkge1xyXG4gICAgcmV0dXJuIHRpbWVzdGFtcCAtIG1vZHVsbyArIHN0YXJ0ZWRcclxuICB9IGVsc2UgcmV0dXJuIHRpbWVzdGFtcCAtIG1vZHVsbyArICgzNjAwMDAwICogMjQpICsgc3RhcnRlZFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==