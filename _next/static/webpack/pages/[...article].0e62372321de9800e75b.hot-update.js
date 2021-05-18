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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.hours !== undefined ? props.hours : 0),
      newH = _useState6[0],
      newHC = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.min !== undefined ? props.min : 0),
      newMin = _useState7[0],
      newMinC = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.sec !== undefined ? props.sec : 0),
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
                return prevState !== 0 ? prevState - 1 : 23;
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
                return prevState !== 23 ? prevState + 1 : 0;
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

_s(Stopwatch, "NTY1mTa7k/VR0f0UxVRUOyAdqTY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UaW1lci5qcyJdLCJuYW1lcyI6WyJTdG9wd2F0Y2giLCJwcm9wcyIsInNsdWciLCJ1c2VTdGF0ZSIsImFsYXJtcyIsImFsYXJtc0MiLCJkZWZhdWx0U291bmQiLCJkZWZhdWx0U291bmRDIiwiaXNUaW1lciIsImlzVGltZXJDIiwibmV3TmFtZSIsIm5ld05hbWVDIiwibmV3TmFtZUNoYW5nZWRCeVVzZXIiLCJuZXdOYW1lQ2hhbmdlZEJ5VXNlckMiLCJob3VycyIsInVuZGVmaW5lZCIsIm5ld0giLCJuZXdIQyIsIm1pbiIsIm5ld01pbiIsIm5ld01pbkMiLCJzZWMiLCJuZXdTZWMiLCJuZXdTZWNDIiwiY3VycmVudEFsYXJtcyIsImN1cnJlbnRBbGFybXNDIiwiY3VycmVudFBsYXlpbmciLCJjdXJyZW50UGxheWluZ0MiLCJjdXJyZW50UGxheWluZ0VsZW0iLCJjdXJyZW50UGxheWluZ0VsZW1DIiwiYmxvY2siLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJzdG9yZUl0ZW1zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlU291bmQiLCJxdWVyeSIsImFydGljbGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicGF1c2UiLCJuZXdBdWRpbyIsIkF1ZGlvIiwibG9vcCIsInBsYXkiLCJkZXNjIiwidGltZXJPbiIsImluc3RhbnQiLCJhbGFybU9uIiwiYWRkIiwic3RhcnRlZCIsIkRhdGUiLCJub3ciLCJ0aW1lc3RhbXAiLCJwcmV2U3RhdGUiLCJpZCIsImFjdGl2ZSIsIm5hbWUiLCJzb3VuZCIsImZpbmlzaCIsImdldEZpbmlzaFRpbWVzdGFtcCIsImFsYXJtRGVsZXRlIiwiZmlsdGVyIiwib2JqIiwiY2hhbmdlRmllbGQiLCJmaWVsZCIsInZhbHVlIiwibWFwIiwidGltZXJEaXNwYXRjaCIsImVsZW0iLCJzdG9wQ3VycmVudEFsYXJtcyIsImNoYW5nZU9uVGltZXIiLCJ0aW1lIiwiY2hhbmdlT25BbGFybSIsInNvdW5kcyIsIk9iamVjdCIsImVudHJpZXMiLCJsIiwibiIsImdldE51bWJlcnMiLCJtYXgiLCJyZXN1bHQiLCJpIiwicHVzaCIsIm5ld05hbWVDaGFuZ2UiLCJlIiwicyIsImNsb2NrIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJsYWJlbHMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiY3VycmVudCIsInNlbGVjdDIiLCJ0aW1lciIsImFsYXJtIiwiTnVtYmVyIiwidGFyZ2V0IiwidGVzdCIsIm9mZiIsImVsZW1lbnRzIiwiQXV4aWxpYXJ5TGlzdCIsInRpbWVycyIsImgiLCJnZXRIb3VycyIsIm0iLCJNYXRoIiwiY2VpbCIsImdldE1pbnV0ZXMiLCJsaXN0IiwiUG9wdXAiLCJwb3B1cCIsImRpc3BsYXkiLCJncmVlbiIsIkVsZW1lbnQiLCJzZXRUaW1lb3V0Iiwid2FrZXVwIiwiY2xlYXJUaW1lb3V0Iiwib24iLCJzdGFydGVkVGltZSIsImZpbmlzaFRpbWUiLCJsZWZ0VGltZSIsInJlZCIsInJlcGVhdCIsImRhdGUiLCJnZXRTZWNvbmRzIiwibW9kdWxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FBb0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ3ZCQyxzREFBUSxDQUFDLEVBQUQsQ0FEZTtBQUFBLE1BQzFDQyxNQUQwQztBQUFBLE1BQ2xDQyxPQURrQzs7QUFBQSxtQkFFWEYsc0RBQVEsQ0FBQyxhQUFELENBRkc7QUFBQSxNQUUxQ0csWUFGMEM7QUFBQSxNQUU1QkMsYUFGNEI7O0FBQUEsbUJBR3JCSixzREFBUSxDQUFDLEtBQUQsQ0FI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OiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uMGU2MjM3MjMyMWRlOTgwMGU3NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL3RpbWVyLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi4vU3ZnJ1xyXG5pbXBvcnQgeyBDbG9jayB9IGZyb20gJy4vU3RvcHdhdGNoJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcHdhdGNoKHsgcHJvcHMsIHNsdWcgfSkge1xyXG4gIGNvbnN0IFthbGFybXMsIGFsYXJtc0NdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2RlZmF1bHRTb3VuZCwgZGVmYXVsdFNvdW5kQ10gPSB1c2VTdGF0ZSgndHJhbnF1aWxpdHknKVxyXG4gIGNvbnN0IFtpc1RpbWVyLCBpc1RpbWVyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbmV3TmFtZSwgbmV3TmFtZUNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW25ld05hbWVDaGFuZ2VkQnlVc2VyLCBuZXdOYW1lQ2hhbmdlZEJ5VXNlckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW25ld0gsIG5ld0hDXSA9IHVzZVN0YXRlKHByb3BzLmhvdXJzICE9PSB1bmRlZmluZWQgPyBwcm9wcy5ob3VycyA6IDApXHJcbiAgY29uc3QgW25ld01pbiwgbmV3TWluQ10gPSB1c2VTdGF0ZShwcm9wcy5taW4gIT09IHVuZGVmaW5lZCA/IHByb3BzLm1pbiA6IDApXHJcbiAgY29uc3QgW25ld1NlYywgbmV3U2VjQ10gPSB1c2VTdGF0ZShwcm9wcy5zZWMgIT09IHVuZGVmaW5lZCA/IHByb3BzLnNlYyA6IDApXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50QWxhcm1zLCBjdXJyZW50QWxhcm1zQ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtjdXJyZW50UGxheWluZywgY3VycmVudFBsYXlpbmdDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2N1cnJlbnRQbGF5aW5nRWxlbSwgY3VycmVudFBsYXlpbmdFbGVtQ10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGFybUl0ZW1zJylcclxuICAgIGlmIChzdG9yZUl0ZW1zID09PSBudWxsKSByZXR1cm5cclxuICAgIGFsYXJtc0MoSlNPTi5wYXJzZShzdG9yZUl0ZW1zKSlcclxuICAgIGNvbnN0IHN0b3JlU291bmQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxhcm1Tb3VuZCcpXHJcbiAgICBpZiAoc3RvcmVTb3VuZCA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBkZWZhdWx0U291bmRDKHN0b3JlU291bmQpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlzVGltZXJDKHNsdWcgPT09ICd0aW1lcicpXHJcbiAgfSwgW3JvdXRlci5xdWVyeS5hcnRpY2xlXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsYXJtSXRlbXMnLCBKU09OLnN0cmluZ2lmeShhbGFybXMpKVxyXG4gIH0sIFthbGFybXNdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxhcm1Tb3VuZCcsIGRlZmF1bHRTb3VuZClcclxuICB9LCBbZGVmYXVsdFNvdW5kXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nRWxlbSAhPT0gbnVsbCkgY3VycmVudFBsYXlpbmdFbGVtLnBhdXNlKClcclxuICAgIGlmIChjdXJyZW50UGxheWluZyA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBjb25zdCBuZXdBdWRpbyA9IG5ldyBBdWRpbyhgL3NvdW5kcy8ke2N1cnJlbnRQbGF5aW5nfS5tcDNgKVxyXG4gICAgbmV3QXVkaW8ubG9vcCA9IHRydWVcclxuICAgIG5ld0F1ZGlvLnBsYXkoKVxyXG4gICAgY3VycmVudFBsYXlpbmdFbGVtQyhuZXdBdWRpbylcclxuICB9LCBbY3VycmVudFBsYXlpbmddKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmV3TmFtZUNoYW5nZWRCeVVzZXIpIHJldHVyblxyXG4gICAgaWYgKGlzVGltZXIpIHtcclxuICAgICAgbmV3TmFtZUMoYCR7cHJvcHMuZGVzYy50aW1lck9ufSAke25ld0ggPT09IDAgPyBgYCA6IGAke25ld0ggPCAxMCA/IFwiMFwiICsgbmV3SCA6IG5ld0h9ICR7cHJvcHMuZGVzYy5zaG9ydC5ob3Vyc30uIGB9JHtuZXdNaW4gPT09IDAgPyBgYCA6IGAke25ld01pbiA8IDEwID8gXCIwXCIgKyBuZXdNaW4gOiBuZXdNaW59ICR7cHJvcHMuZGVzYy5zaG9ydC5taW59LiBgfSR7bmV3U2VjID09PSAwID8gKG5ld0ggIT09IDAgfHwgbmV3TWluICE9PSAwID8gYGAgOiBwcm9wcy5kZXNjLnNob3J0Lmluc3RhbnQpIDogYCR7bmV3U2VjIDwgMTAgPyBcIjBcIiArIG5ld1NlYyA6IG5ld1NlY30gJHtwcm9wcy5kZXNjLnNob3J0LnNlY30uYH1gKVxyXG4gICAgfSBlbHNlXHJcbiAgICAgIG5ld05hbWVDKGAke3Byb3BzLmRlc2MuYWxhcm1Pbn0gJHtuZXdIIDwgMTAgPyBcIjBcIiArIG5ld0ggOiBuZXdIfToke25ld01pbiA8IDEwID8gXCIwXCIgKyBuZXdNaW4gOiBuZXdNaW59JHtuZXdTZWMgPT09IDAgPyBgYCA6IGA6JHtuZXdTZWMgPCAxMCA/IFwiMFwiICsgbmV3U2VjIDogbmV3U2VjfWB9YClcclxuICB9LCBbbmV3SCwgbmV3TWluLCBuZXdTZWMsIGlzVGltZXJdKVxyXG5cclxuICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICBjb25zdCBzdGFydGVkID0gRGF0ZS5ub3coKVxyXG4gICAgY29uc3QgdGltZXN0YW1wID0gKChuZXdNaW4gKyBuZXdIICogNjApICogNjAgKyBuZXdTZWMpICogMTAwMFxyXG4gICAgYWxhcm1zQyhwcmV2U3RhdGUgPT4gW3tcclxuICAgICAgaWQ6IHN0YXJ0ZWQsXHJcbiAgICAgIHN0YXJ0ZWQsXHJcbiAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICBuYW1lOiBuZXdOYW1lLFxyXG4gICAgICBpc1RpbWVyOiBpc1RpbWVyLFxyXG4gICAgICBzb3VuZDogZGVmYXVsdFNvdW5kLFxyXG4gICAgICBmaW5pc2g6IGdldEZpbmlzaFRpbWVzdGFtcChpc1RpbWVyLCBzdGFydGVkLCB0aW1lc3RhbXApLFxyXG4gICAgfSwgLi4ucHJldlN0YXRlXSlcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyhmYWxzZSlcclxuICB9XHJcbiAgZnVuY3Rpb24gYWxhcm1EZWxldGUoaWQpIHtcclxuICAgIGFsYXJtc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZS5maWx0ZXIob2JqID0+IG9iai5pZCAhPT0gaWQpKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjaGFuZ2VGaWVsZChpZCwgZmllbGQsIHZhbHVlKSB7XHJcbiAgICBhbGFybXNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUubWFwKG9iaiA9PiBvYmouaWQgPT09IGlkID8geyAuLi5vYmosIFtmaWVsZF06IHZhbHVlIH0gOiBvYmopKVxyXG4gIH1cclxuICBmdW5jdGlvbiB0aW1lckRpc3BhdGNoKGlkKSB7XHJcbiAgICBjb25zdCBlbGVtID0gYWxhcm1zLmZpbHRlcihvYmogPT4gb2JqLmlkID09PSBpZClbMF1cclxuICAgIGlmIChlbGVtID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgY3VycmVudFBsYXlpbmdDKGVsZW0uc291bmQpXHJcbiAgICBjdXJyZW50QWxhcm1zQyhlbGVtLmZpbmlzaClcclxuICB9XHJcbiAgZnVuY3Rpb24gc3RvcEN1cnJlbnRBbGFybXMoKSB7XHJcbiAgICBjdXJyZW50QWxhcm1zQyhudWxsKVxyXG4gICAgY3VycmVudFBsYXlpbmdDKG51bGwpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZU9uVGltZXIodGltZSkge1xyXG4gICAgbmV3TmFtZUNoYW5nZWRCeVVzZXJDKGZhbHNlKVxyXG4gICAgaXNUaW1lckModHJ1ZSlcclxuICAgIG5ld0hDKCh0aW1lIC8gMzYwMCkgfCAwKVxyXG4gICAgbmV3TWluQygodGltZSAvIDYwICUgNjApIHwgMClcclxuICAgIG5ld1NlY0MoKHRpbWUgJSA2MCkgfCAwKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjaGFuZ2VPbkFsYXJtKHRpbWUpIHtcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyhmYWxzZSlcclxuICAgIGlzVGltZXJDKGZhbHNlKVxyXG4gICAgbmV3SEMoKHRpbWUgLyA2MCkgfCAwKVxyXG4gICAgbmV3TWluQygodGltZSAlIDYwKSB8IDApXHJcbiAgICBuZXdTZWNDKDApXHJcbiAgfVxyXG4gIGNvbnN0IHNvdW5kcyA9IE9iamVjdC5lbnRyaWVzKHByb3BzLnNvdW5kKS5tYXAob2JqID0+ICh7IGw6IG9ialswXSwgbjogb2JqWzFdIH0pKVxyXG4gIGZ1bmN0aW9uIGdldE51bWJlcnMobWF4KSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICByZXN1bHQucHVzaChpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuICBmdW5jdGlvbiBuZXdOYW1lQ2hhbmdlKGUpIHtcclxuICAgIG5ld05hbWVDaGFuZ2VkQnlVc2VyQyh0cnVlKVxyXG4gICAgbmV3TmFtZUMoZS52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNsb2NrfT5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17bmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDB9IHBhdXNlZD17ZmFsc2V9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgICA8ZGl2PntuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5uZXd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNUaW1lciA/ICcnIDogcy5zZWxlY3QyfT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGlzVGltZXJDKHRydWUpfT57cHJvcHMuZGVzYy50aW1lcn08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGlzVGltZXJDKGZhbHNlKX0+e3Byb3BzLmRlc2MuYWxhcm19PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvbmcuaG91cnN9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5ld0hDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDAgPyBwcmV2U3RhdGUgLSAxIDogMjMpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuZXdIfSBvbkNoYW5nZT17ZSA9PiBuZXdIQyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+IHtnZXROdW1iZXJzKDI0KS5tYXAobiA9PiA8b3B0aW9uIGtleT17bn0gdmFsdWU9e259PntufTwvb3B0aW9uPil9IDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdIQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSAyMyA/IHByZXZTdGF0ZSArIDEgOiAwKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvbmcubWlufTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdNaW5DKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDAgPyBwcmV2U3RhdGUgLSAxIDogNTkpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuZXdNaW59IG9uQ2hhbmdlPXtlID0+IG5ld01pbkMoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PiB7Z2V0TnVtYmVycyg2MCkubWFwKG4gPT4gPG9wdGlvbiBrZXk9e259IHZhbHVlPXtufT57bn08L29wdGlvbj4pfSA8L3NlbGVjdD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3TWluQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSA1OSA/IHByZXZTdGF0ZSArIDEgOiAwKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvbmcuc2VjfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXdTZWNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgIT09IDAgPyBwcmV2U3RhdGUgLSAxIDogNTkpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuZXdTZWN9IG9uQ2hhbmdlPXtlID0+IG5ld1NlY0MoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PiB7Z2V0TnVtYmVycyg2MCkubWFwKG4gPT4gPG9wdGlvbiBrZXk9e259IHZhbHVlPXtufT57bn08L29wdGlvbj4pfSA8L3NlbGVjdD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV3U2VjQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlICE9PSA1OSA/IHByZXZTdGF0ZSArIDEgOiAwKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25ld05hbWV9IG9uQ2hhbmdlPXtuZXdOYW1lQ2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5zb3VuZH08L2Rpdj5cclxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNvdW5kXCIgdmFsdWU9e2RlZmF1bHRTb3VuZH0gb25DaGFuZ2U9e2UgPT4gZGVmYXVsdFNvdW5kQyhlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICB7c291bmRzLm1hcChzb3VuZCA9PiA8b3B0aW9uIGtleT17c291bmQubH0gdmFsdWU9e3NvdW5kLmx9ID57c291bmQubn08L29wdGlvbj4pfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICB7Y3VycmVudFBsYXlpbmcgPT09IG51bGwgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50ZXN0fSBvbkNsaWNrPXsoKSA9PiBjdXJyZW50UGxheWluZ0MoZGVmYXVsdFNvdW5kKX0+4pa6PC9idXR0b24+IDpcclxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2Mub2ZmfSBvbkNsaWNrPXsoKSA9PiBjdXJyZW50UGxheWluZ0MobnVsbCl9PuKWoDwvYnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkfT57cHJvcHMuZGVzYy5hZGR9PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5lbGVtZW50c30+XHJcbiAgICAgIHthbGFybXMubWFwKG9iaiA9PiA8RWxlbWVudCBrZXk9e29iai5pZH0gey4uLm9ian0gc291bmQ9e3NvdW5kcy5maWx0ZXIoZWxlbSA9PiBlbGVtLmwgPT09IG9iai5zb3VuZClbMF0ubn0gdGltZXJEaXNwYXRjaD17dGltZXJEaXNwYXRjaH0gY2hhbmdlRmllbGQ9e2NoYW5nZUZpZWxkfSBhbGFybURlbGV0ZT17YWxhcm1EZWxldGV9IHByb3BzPXtwcm9wc30gLz4pfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8QXV4aWxpYXJ5TGlzdCBjaGFuZ2VPblRpbWVyPXtjaGFuZ2VPblRpbWVyfSBjaGFuZ2VPbkFsYXJtPXtjaGFuZ2VPbkFsYXJtfSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICA8UG9wdXAgY3VycmVudEFsYXJtcz17Y3VycmVudEFsYXJtc30gc3RvcEN1cnJlbnRBbGFybXM9e3N0b3BDdXJyZW50QWxhcm1zfSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgPC9kaXY+XHJcbn1cclxuLy/Qm9C40YHRgiDRgSDRgNCw0LfQvdGL0LzQuCDQvNC10YLQutCw0LzQuCDQstGA0LXQvNC10L3QuCDQtNC70Y8g0LHRg9C00LjQu9GM0L3QuNC60LAg0Lgg0YLQsNC50LzQtdGA0LAgXHJcbmZ1bmN0aW9uIEF1eGlsaWFyeUxpc3QoeyBjaGFuZ2VPblRpbWVyLCBjaGFuZ2VPbkFsYXJtLCBwcm9wcyB9KSB7XHJcbiAgY29uc3QgdGltZXJzID0gWzE1LCAzMCwgNjAsIDkwLCAxMjAsIDE1MCwgMTgwLCAzMDAsIDQyMCwgNjAwLCA5MDAsIDEyMDAsIDE4MDAsIDI3MDAsIDM2MDAsIDcyMDAsIDEwODAwLCAyMTYwMCwgMzI0MDAsIDQzMjAwLCA2NDgwMCwgODY0MDBdXHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IGggPSBub3cuZ2V0SG91cnMoKSAqIDYwXHJcbiAgY29uc3QgbSA9IE1hdGguY2VpbChub3cuZ2V0TWludXRlcygpIC8gMTUpXHJcbiAgY29uc3QgYWxhcm1zID0gW11cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgYWxhcm1zLnB1c2goaCArIChtICsgaSkgKiAxNSlcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDE4MDsgaSA8IDE1MDA7IGkgPSBpICsgNjApIHtcclxuICAgIGlmIChoICsgaSA+PSAyNCAqIDYwKSB7XHJcbiAgICAgIGFsYXJtcy5wdXNoKGggLSAyNCAqIDYwICsgaSlcclxuICAgIH0gZWxzZSBhbGFybXMucHVzaChoICsgaSlcclxuICB9XHJcbiAgYWxhcm1zLm1hcChlbGVtID0+IGVsZW0gKiA2MClcclxuICByZXR1cm4gPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxpc3R9PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLmFsYXJtT259PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2FsYXJtcy5tYXAodGltZSA9PiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZU9uQWxhcm0odGltZSl9IGtleT17dGltZX0+eyh0aW1lIC8gNjApIHwgMH06e3RpbWUgJSA2MCA9PT0gMCA/IGAwMGAgOiB0aW1lICUgNjB9PC9idXR0b24+KX1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy50aW1lck9ufTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aW1lcnMubWFwKHRpbWVyID0+IDxidXR0b24gb25DbGljaz17KCkgPT4gY2hhbmdlT25UaW1lcih0aW1lcil9IGtleT17dGltZXJ9Pnt0aW1lciA8IDYwID8gdGltZXIgOiB0aW1lciA8IDM2MDAgPyB0aW1lciAvIDYwIDogdGltZXIgLyAzNjAwfSB7dGltZXIgPCA2MCA/IHByb3BzLmRlc2Muc2hvcnQuc2VjIDogdGltZXIgPCAzNjAwID8gcHJvcHMuZGVzYy5zaG9ydC5taW4gOiBwcm9wcy5kZXNjLnNob3J0LmhvdXJzfTwvYnV0dG9uPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC8+XHJcbn1cclxuLy/QntC/0L7QstC10YnQtdC90LjQtVxyXG5mdW5jdGlvbiBQb3B1cCh7IGN1cnJlbnRBbGFybXMsIHN0b3BDdXJyZW50QWxhcm1zLCBwcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgJHtzLnBvcHVwfSAke2N1cnJlbnRBbGFybXMgPyBzLmRpc3BsYXkgOiBcIlwifWB9PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y3VycmVudEFsYXJtcyA/XHJcbiAgICAgICAgICA8Q2xvY2sgdGltZXN0YW1wPXtEYXRlLm5vdygpIC0gY3VycmVudEFsYXJtcyArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBkaXNwbGF5TXM9e2ZhbHNlfSBwYXVzZWQ9e3RydWV9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPiA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmdyZWVufSBvbkNsaWNrPXtzdG9wQ3VycmVudEFsYXJtc30+e3Byb3BzLmRlc2Mub2ZmfTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBFbGVtZW50KHsgaWQsIHN0YXJ0ZWQsIHRpbWVzdGFtcCwgYWN0aXZlLCBzb3VuZCwgbmFtZSwgdGltZXJEaXNwYXRjaCwgaXNUaW1lciwgY2hhbmdlRmllbGQsIGFsYXJtRGVsZXRlLCBmaW5pc2gsIHByb3BzIH0pIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KHdha2V1cCwgZmluaXNoIC0gRGF0ZS5ub3coKSlcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIH1cclxuICB9LCBbYWN0aXZlXSlcclxuICBmdW5jdGlvbiB3YWtldXAoKSB7XHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIGZhbHNlKVxyXG4gICAgdGltZXJEaXNwYXRjaChpZClcclxuICB9XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ3N0YXJ0ZWQnLCBub3cpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2ZpbmlzaCcsIGdldEZpbmlzaFRpbWVzdGFtcChpc1RpbWVyLCBub3csIHRpbWVzdGFtcCkpXHJcbiAgICBjaGFuZ2VGaWVsZChpZCwgJ2FjdGl2ZScsIHRydWUpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9mZigpIHtcclxuICAgIGNoYW5nZUZpZWxkKGlkLCAnYWN0aXZlJywgZmFsc2UpXHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGtleT17aWR9PlxyXG4gICAgPGRpdj57aXNUaW1lciA/IHByb3BzLmRlc2MudGltZXIgOiBwcm9wcy5kZXNjLmFsYXJtfTwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAge25hbWV9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2Muc3RhcnRlZFRpbWV9PC9kaXY+XHJcbiAgICAgIDxDbG9jayB0aW1lc3RhbXA9e0RhdGUubm93KCkgLSBzdGFydGVkICsgbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDB9IHBhdXNlZD17dHJ1ZX0gZGlzcGxheU1zPXtmYWxzZX0gb25seVRpbWU9e3RydWV9IGxhYmVscz17cHJvcHMuZGVzYy5sYWJlbHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+e3Byb3BzLmRlc2MuZmluaXNoVGltZX08L2Rpdj5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17RGF0ZS5ub3coKSAtIGZpbmlzaCArIG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwfSBwYXVzZWQ9e3RydWV9IGRpc3BsYXlNcz17ZmFsc2V9IG9ubHlUaW1lPXt0cnVlfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2Pntwcm9wcy5kZXNjLnNvdW5kfTwvZGl2PlxyXG4gICAgICA8ZGl2Pntzb3VuZH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj57cHJvcHMuZGVzYy5sZWZ0VGltZX08L2Rpdj5cclxuICAgICAgPENsb2NrIHRpbWVzdGFtcD17YWN0aXZlID8gZmluaXNoIDogbnVsbH0gcGF1c2VkPXthY3RpdmUgPT09IGZhbHNlfSBvbmx5VGltZT17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICAge2FjdGl2ZSA/XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLnJlZH0gb25DbGljaz17b2ZmfT57cHJvcHMuZGVzYy5vZmZ9PC9idXR0b24+IDpcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuZ3JlZW59IG9uQ2xpY2s9e29ufT57cHJvcHMuZGVzYy5yZXBlYXR9PC9idXR0b24+XHJcbiAgICB9XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5yZWR9IG9uQ2xpY2s9eygpID0+IGFsYXJtRGVsZXRlKGlkKX0+e3Byb3BzLmRlc2MuZGVsZXRlfTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG59XHJcbi8v0J/QvtC70YPRh9C40YLRjCDRhNC40L3QsNC70YzQvdGD0Y4g0LzQtdGC0LrRgyDQstGA0LXQvNC10L3QuCAo0L7QutC+0L3Rh9Cw0L3QuNC1INGC0LDQudC80LXRgNCwKVxyXG5mdW5jdGlvbiBnZXRGaW5pc2hUaW1lc3RhbXAoaXNUaW1lciwgc3RhcnRlZCwgdGltZXN0YW1wKSB7XHJcbiAgaWYgKGlzVGltZXIpIHJldHVybiBzdGFydGVkICsgdGltZXN0YW1wICsgMTBcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RhcnRlZClcclxuICBjb25zdCBzID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuICBjb25zdCBtID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICBjb25zdCBoID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgY29uc3QgbW9kdWxvID0gKChoICogNjAgKyBtKSAqIDYwICsgcykgKiAxMDAwXHJcbiAgaWYgKG1vZHVsbyA8IHRpbWVzdGFtcCkge1xyXG4gICAgcmV0dXJuIHRpbWVzdGFtcCAtIG1vZHVsbyArIHN0YXJ0ZWRcclxuICB9IGVsc2UgcmV0dXJuIHRpbWVzdGFtcCAtIG1vZHVsbyArICgzNjAwMDAwICogMjQpICsgc3RhcnRlZFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==