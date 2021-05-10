webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/tools/Stopwatch.js":
/*!***************************************!*\
  !*** ./components/tools/Stopwatch.js ***!
  \***************************************/
/*! exports provided: default, Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/tools/stopwatch.styl */ "./styles/tools/stopwatch.styl");
/* harmony import */ var _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Svg */ "./components/Svg.js");
/* harmony import */ var _elements_fullscreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/fullscreen */ "./components/elements/fullscreen.js");





var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\tools\\Stopwatch.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Stopwatch(_ref) {
  _s();

  var _this = this;

  var props = _ref.props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      timestamps = _useState[0],
      timestampsC = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      current = _useState2[0],
      currentC = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {}, void 0, false)),
      element = _useState3[0],
      elementC = _useState3[1];

  var block = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var storeItems = localStorage.getItem('watchItems');
    var storeCurrent = Number(localStorage.getItem('watchCurrent'));
    currentC(storeCurrent);
    if (storeItems === null) return;
    var allItems = JSON.parse(storeItems);
    timestampsC(allItems);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    localStorage.setItem('watchItems', JSON.stringify(timestamps));
  }, [timestamps]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    localStorage.setItem('watchCurrent', current);
  }, [current]);

  function start() {
    if (current === null) {
      var now = Date.now();
      timestampsC(function (prevState) {
        return [{
          l: [now],
          p: null,
          id: Date.now()
        }].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState));
      });
      currentC(now);
    } else {
      timestampsC(function (prevState) {
        return prevState.map(function (elem) {
          return elem.id === current && elem.p !== null ? _objectSpread(_objectSpread({}, elem), {}, {
            l: elem.l.map(function (time) {
              return time + Date.now() - elem.p;
            }),
            p: null
          }) : elem;
        });
      });
    }
  }

  function pause() {
    timestampsC(function (prevState) {
      return prevState.map(function (elem) {
        return elem.id === current ? _objectSpread(_objectSpread({}, elem), {}, {
          l: elem.l,
          p: Date.now()
        }) : elem;
      });
    });
  }

  function lap() {
    timestampsC(function (prevState) {
      return prevState.map(function (elem) {
        return elem.id === current ? _objectSpread(_objectSpread({}, elem), {}, {
          l: [].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(elem.l), [elem.p === null ? Date.now() : elem.p]),
          p: elem.p
        }) : elem;
      });
    });
  }

  function removeLap(label) {
    timestampsC(function (prevState) {
      return prevState.map(function (elem) {
        return elem.id === current ? _objectSpread(_objectSpread({}, elem), {}, {
          l: elem.l.filter(function (time) {
            return time !== label;
          }),
          p: elem.p
        }) : elem;
      });
    });
  }

  function reset(id) {
    currentC(null);
    timestampsC(function (prevState) {
      return prevState.filter(function (elem) {
        return elem.id !== id;
      });
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (current !== null) {
      var elem = timestamps.filter(function (obj) {
        return obj.id === current;
      })[0];

      if (elem !== undefined) {
        elementC( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Element, {
          timestamps: elem.p !== null ? elem.l.map(function (time) {
            return time + Date.now() - elem.p;
          }) : elem.l,
          id: elem.id,
          paused: elem.p,
          start: start,
          pause: pause,
          lap: lap,
          reset: reset,
          removeLap: removeLap,
          props: props
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 18
        }, _this));
      } else currentC(null);
    } else elementC( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Element, {
      timestamps: [null],
      paused: true,
      start: start,
      pause: pause,
      lap: lap,
      reset: reset,
      removeLap: removeLap,
      props: props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }, _this));
  }, [current, timestamps]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.block,
    ref: block,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.stopwatch,
      children: [element, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
        elem: block.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        onClick: function onClick() {
          return currentC(null);
        },
        children: props.desc.add
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: timestamps.map(function (obj) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: current === obj.id ? _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.current : '',
            onClick: function onClick() {
              return currentC(obj.id);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Clock, {
              timestamp: obj.p !== null ? obj.l[0] + Date.now() - obj.p : obj.l[0],
              paused: obj.p !== null,
              labels: props.desc.labels
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: obj.p !== null ? _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.paused : '',
              children: obj.p ? props.desc.paused : props.desc.active
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 13
            }, _this)]
          }, obj.id, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 10
  }, this);
}

_s(Stopwatch, "l3bP8hYACEznsEY7wWTr/ZEH/dY=");

_c = Stopwatch;

function Element(_ref2) {
  _s2();

  var _this2 = this;

  var timestamps = _ref2.timestamps,
      id = _ref2.id,
      paused = _ref2.paused,
      start = _ref2.start,
      pause = _ref2.pause,
      lap = _ref2.lap,
      reset = _ref2.reset,
      removeLap = _ref2.removeLap,
      props = _ref2.props;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (ref !== null) ref.current.focus();
  }, [id]);

  function hotKeys(e) {
    e.preventDefault();

    if (e.code === 'Space' || e.code === 'Enter') {
      if (e.shiftKey) {
        lap();
      } else if (paused) {
        start();
      } else pause();
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    ref: ref,
    onKeyPress: hotKeys,
    tabIndex: -1,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Clock, {
      timestamp: timestamps[0],
      paused: paused !== null,
      labels: props.desc.labels
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.green,
        onClick: start,
        children: props.desc.start
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.yellow,
        onClick: lap,
        children: props.desc.lap
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.blue,
        onClick: pause,
        children: props.desc.pause
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.red,
        onClick: function onClick() {
          return reset(id);
        },
        children: props.desc.reset
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: props.desc.lap
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: props.desc.lapTime
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: props.desc.totalTime
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: timestamps.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Clock, {
          timestamp: timestamps[timestamps.length - 1],
          paused: paused !== null,
          labels: props.desc.labels
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Clock, {
          timestamp: timestamps[0],
          paused: paused !== null,
          labels: props.desc.labels
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }, this), timestamps.map(function (item, index) {
        return index === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: index
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Clock, {
            timestamp: Date.now() - (item - timestamps[index - 1]),
            paused: true,
            labels: props.desc.labels
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Clock, {
            timestamp: Date.now() - (item - timestamps[0]),
            paused: true,
            labels: props.desc.labels
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this2)]
        }, item, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this2);
      }).reverse()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 10
  }, this);
}

_s2(Element, "8uVE59eA/r6b92xF80p7sH8rXLk=");

_c2 = Element;
function Clock(_ref3) {
  _s3();

  var timestamp = _ref3.timestamp,
      paused = _ref3.paused,
      _ref3$displayMs = _ref3.displayMs,
      displayMs = _ref3$displayMs === void 0 ? true : _ref3$displayMs,
      _ref3$onlyTime = _ref3.onlyTime,
      onlyTime = _ref3$onlyTime === void 0 ? false : _ref3$onlyTime,
      _ref3$labels = _ref3.labels,
      labels = _ref3$labels === void 0 ? {
    day: "day",
    year: "year"
  } : _ref3$labels;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      mstimer = _useState4[0],
      mstimerC = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      sectimer = _useState5[0],
      sectimerC = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      mintimer = _useState6[0],
      mintimerC = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      htimer = _useState7[0],
      htimerC = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      daytimer = _useState8[0],
      daytimerC = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      yeartimer = _useState9[0],
      yeartimerC = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function calcMs(now) {
      var ms = now % 1000 / 100 | 0;
      mstimerC(ms);
      return ms;
    }

    function calcS(now) {
      var sec = now % (60 * 1000) / 1000 | 0;
      sectimerC(sec);
      return sec;
    }

    function calcM(now) {
      var min = now % (60 * 60 * 1000) / (60 * 1000) | 0;
      mintimerC(min);
      return min;
    }

    function calcH(now) {
      var h = now % (24 * 60 * 60 * 1000) / (60 * 60 * 1000) | 0;
      htimerC(h);
      return h;
    }

    function calcD(now) {
      var d = now % (366 * 24 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000) | 0;
      daytimerC(d);
      return d;
    }

    function range(num, first, second) {
      if (num > first && num < second) return true;
      return false;
    }

    function calcTime() {
      var now = Math.abs(Date.now() - timestamp);
      if (!displayMs || !range(calcMs(now), 0, 9)) if (!range(calcS(now), 0, 59)) if (!range(calcM(now), 0, 59)) if (!range(calcH(now), 0, 23)) calcD(now);
    }

    if (timestamp === null) {
      mstimerC(0);
      sectimerC(0);
      mintimerC(0);
      htimerC(0);
      daytimerC(0);
      yeartimerC(0);
    } else {
      var now = Math.abs(Date.now() - timestamp);
      calcMs(now);
      calcS(now);
      calcM(now);
      calcH(now);
      calcD(now);
      yeartimerC(Math.floor(Math.abs(Date.now() - timestamp) / (3600 * 1000 * 24 * 365)));
    }

    if (!paused && timestamp !== null) {
      var timer = setInterval(calcTime, 50);
      return function () {
        return clearInterval(timer);
      };
    }
  }, [paused, timestamp]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_tools_stopwatch_styl__WEBPACK_IMPORTED_MODULE_4___default.a.clock,
    children: [!onlyTime && yeartimer > 0 ? yeartimer + labels.year : null, !onlyTime && daytimer > 0 ? daytimer + labels.day : null, htimer < 10 ? "0" + htimer : htimer, ":", mintimer < 10 ? "0" + mintimer : mintimer, ":", sectimer < 10 ? "0" + sectimer : sectimer, displayMs ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
      children: mstimer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 18
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 215,
    columnNumber: 10
  }, this);
}

_s3(Clock, "EXJX5odvCleLCNYdkU4mgvTMJas=");

_c3 = Clock;

var _c, _c2, _c3;

$RefreshReg$(_c, "Stopwatch");
$RefreshReg$(_c2, "Element");
$RefreshReg$(_c3, "Clock");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9TdG9wd2F0Y2guanMiXSwibmFtZXMiOlsiU3RvcHdhdGNoIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInRpbWVzdGFtcHMiLCJ0aW1lc3RhbXBzQyIsImN1cnJlbnQiLCJjdXJyZW50QyIsImVsZW1lbnQiLCJlbGVtZW50QyIsImJsb2NrIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3RvcmVJdGVtcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZUN1cnJlbnQiLCJOdW1iZXIiLCJhbGxJdGVtcyIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzdGFydCIsIm5vdyIsIkRhdGUiLCJwcmV2U3RhdGUiLCJsIiwicCIsImlkIiwibWFwIiwiZWxlbSIsInRpbWUiLCJwYXVzZSIsImxhcCIsInJlbW92ZUxhcCIsImxhYmVsIiwiZmlsdGVyIiwicmVzZXQiLCJvYmoiLCJ1bmRlZmluZWQiLCJzIiwic3RvcHdhdGNoIiwibGlzdCIsImRlc2MiLCJhZGQiLCJsYWJlbHMiLCJwYXVzZWQiLCJhY3RpdmUiLCJFbGVtZW50IiwicmVmIiwiZm9jdXMiLCJob3RLZXlzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29kZSIsInNoaWZ0S2V5IiwiZ3JlZW4iLCJ5ZWxsb3ciLCJibHVlIiwicmVkIiwibGFwVGltZSIsInRvdGFsVGltZSIsImxlbmd0aCIsIml0ZW0iLCJpbmRleCIsInJldmVyc2UiLCJDbG9jayIsInRpbWVzdGFtcCIsImRpc3BsYXlNcyIsIm9ubHlUaW1lIiwiZGF5IiwieWVhciIsIm1zdGltZXIiLCJtc3RpbWVyQyIsInNlY3RpbWVyIiwic2VjdGltZXJDIiwibWludGltZXIiLCJtaW50aW1lckMiLCJodGltZXIiLCJodGltZXJDIiwiZGF5dGltZXIiLCJkYXl0aW1lckMiLCJ5ZWFydGltZXIiLCJ5ZWFydGltZXJDIiwiY2FsY01zIiwibXMiLCJjYWxjUyIsInNlYyIsImNhbGNNIiwibWluIiwiY2FsY0giLCJoIiwiY2FsY0QiLCJkIiwicmFuZ2UiLCJudW0iLCJmaXJzdCIsInNlY29uZCIsImNhbGNUaW1lIiwiTWF0aCIsImFicyIsImZsb29yIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxFQUFELENBREM7QUFBQSxNQUNwQ0MsVUFEb0M7QUFBQSxNQUN4QkMsV0FEd0I7O0FBQUEsbUJBRWZGLHNEQUFRLENBQUMsSUFBRCxDQUZPO0FBQUEsTUFFcENHLE9BRm9DO0FBQUEsTUFFM0JDLFFBRjJCOztBQUFBLG1CQUdmSixzREFBUSxlQUFDLHVKQUFELENBSE87QUFBQSxNQUdwQ0ssT0FIb0M7QUFBQSxNQUczQkMsUUFIMkI7O0FBSTNDLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLENBQW5CO0FBQ0EsUUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQixDQUFELENBQTNCO0FBQ0FSLFlBQVEsQ0FBQ1MsWUFBRCxDQUFSO0FBQ0EsUUFBSUgsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3pCLFFBQU1LLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdQLFVBQVgsQ0FBakI7QUFDQVIsZUFBVyxDQUFDYSxRQUFELENBQVg7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBUUFOLHlEQUFTLENBQUMsWUFBTTtBQUNkRSxnQkFBWSxDQUFDTyxPQUFiLENBQXFC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LE1BQXBCLEdBQTZCQSxNQUh6QixPQUlKRixRQUFRLEdBQUcsRUFBWCxHQUFnQixNQUFNQSxRQUF0QixHQUFpQ0EsUUFKN0IsT0FLSkYsUUFBUSxHQUFHLEVBQVgsR0FBZ0IsTUFBTUEsUUFBdEIsR0FBaUNBLFFBTDdCLEVBTUpOLFNBQVMsZ0JBQUc7QUFBQSxnQkFBT0k7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsR0FBNEIsSUFOakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFTRDs7SUF4RWVOLEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLmM0NmQ3ODE4NzI4M2MzOTk4OTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvc3RvcHdhdGNoLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi4vU3ZnJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcHdhdGNoKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFt0aW1lc3RhbXBzLCB0aW1lc3RhbXBzQ10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbY3VycmVudCwgY3VycmVudENdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZWxlbWVudCwgZWxlbWVudENdID0gdXNlU3RhdGUoPD48Lz4pXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2F0Y2hJdGVtcycpXHJcbiAgICBjb25zdCBzdG9yZUN1cnJlbnQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dhdGNoQ3VycmVudCcpKVxyXG4gICAgY3VycmVudEMoc3RvcmVDdXJyZW50KVxyXG4gICAgaWYgKHN0b3JlSXRlbXMgPT09IG51bGwpIHJldHVyblxyXG4gICAgY29uc3QgYWxsSXRlbXMgPSBKU09OLnBhcnNlKHN0b3JlSXRlbXMpXHJcbiAgICB0aW1lc3RhbXBzQyhhbGxJdGVtcylcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dhdGNoSXRlbXMnLCBKU09OLnN0cmluZ2lmeSh0aW1lc3RhbXBzKSlcclxuICB9LCBbdGltZXN0YW1wc10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3YXRjaEN1cnJlbnQnLCBjdXJyZW50KVxyXG4gIH0sIFtjdXJyZW50XSlcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICAgIHRpbWVzdGFtcHNDKHByZXZTdGF0ZSA9PiBbeyBsOiBbbm93XSwgcDogbnVsbCwgaWQ6IERhdGUubm93KCkgfSwgLi4ucHJldlN0YXRlXSlcclxuICAgICAgY3VycmVudEMobm93KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGltZXN0YW1wc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZVxyXG4gICAgICAgIC5tYXAoZWxlbSA9PiBlbGVtLmlkID09PSBjdXJyZW50ICYmIGVsZW0ucCAhPT0gbnVsbCA/XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC4uLmVsZW0sIGw6IGVsZW0ubFxyXG4gICAgICAgICAgICAgIC5tYXAodGltZSA9PiB0aW1lICsgRGF0ZS5ub3coKSAtIGVsZW0ucCksXHJcbiAgICAgICAgICAgIHA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDogZWxlbSkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xyXG4gICAgdGltZXN0YW1wc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZVxyXG4gICAgICAubWFwKGVsZW0gPT4gZWxlbS5pZCA9PT0gY3VycmVudCA/XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLi4uZWxlbSwgbDogZWxlbS5sLFxyXG4gICAgICAgICAgcDogRGF0ZS5ub3coKVxyXG4gICAgICAgIH1cclxuICAgICAgICA6IGVsZW0pKVxyXG4gIH1cclxuICBmdW5jdGlvbiBsYXAoKSB7XHJcbiAgICB0aW1lc3RhbXBzQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlXHJcbiAgICAgIC5tYXAoZWxlbSA9PiBlbGVtLmlkID09PSBjdXJyZW50ID9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAuLi5lbGVtLCBsOiBbLi4uZWxlbS5sLCBlbGVtLnAgPT09IG51bGwgPyBEYXRlLm5vdygpIDogZWxlbS5wXSxcclxuICAgICAgICAgIHA6IGVsZW0ucFxyXG4gICAgICAgIH1cclxuICAgICAgICA6IGVsZW0pKVxyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVMYXAobGFiZWwpIHtcclxuICAgIHRpbWVzdGFtcHNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGVcclxuICAgICAgLm1hcChlbGVtID0+IGVsZW0uaWQgPT09IGN1cnJlbnQgP1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIC4uLmVsZW0sIGw6IGVsZW0ubC5maWx0ZXIodGltZSA9PiB0aW1lICE9PSBsYWJlbCksXHJcbiAgICAgICAgICBwOiBlbGVtLnBcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBlbGVtKSlcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVzZXQoaWQpIHtcclxuICAgIGN1cnJlbnRDKG51bGwpXHJcbiAgICB0aW1lc3RhbXBzQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLmZpbHRlcihlbGVtID0+IGVsZW0uaWQgIT09IGlkKSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgIGxldCBlbGVtID0gdGltZXN0YW1wcy5maWx0ZXIob2JqID0+IG9iai5pZCA9PT0gY3VycmVudClbMF1cclxuICAgICAgaWYgKGVsZW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsZW1lbnRDKDxFbGVtZW50IHRpbWVzdGFtcHM9e2VsZW0ucCAhPT0gbnVsbCA/IGVsZW0ubC5tYXAodGltZSA9PiB0aW1lICsgRGF0ZS5ub3coKSAtIGVsZW0ucCkgOiBlbGVtLmx9XHJcbiAgICAgICAgICBpZD17ZWxlbS5pZH0gcGF1c2VkPXtlbGVtLnB9IHN0YXJ0PXtzdGFydH0gcGF1c2U9e3BhdXNlfSBsYXA9e2xhcH0gcmVzZXQ9e3Jlc2V0fSByZW1vdmVMYXA9e3JlbW92ZUxhcH0gcHJvcHM9e3Byb3BzfSAvPilcclxuICAgICAgfSBlbHNlIGN1cnJlbnRDKG51bGwpXHJcbiAgICB9IGVsc2UgZWxlbWVudEMoPEVsZW1lbnQgdGltZXN0YW1wcz17W251bGxdfSBwYXVzZWQ9e3RydWV9IHN0YXJ0PXtzdGFydH0gcGF1c2U9e3BhdXNlfSBsYXA9e2xhcH0gcmVzZXQ9e3Jlc2V0fSByZW1vdmVMYXA9e3JlbW92ZUxhcH0gcHJvcHM9e3Byb3BzfSAvPilcclxuICB9LCBbY3VycmVudCwgdGltZXN0YW1wc10pXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnN0b3B3YXRjaH0+XHJcbiAgICAgIHtlbGVtZW50fVxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjdXJyZW50QyhudWxsKX0+XHJcbiAgICAgICAge3Byb3BzLmRlc2MuYWRkfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGltZXN0YW1wcy5tYXAob2JqID0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudCA9PT0gb2JqLmlkID8gcy5jdXJyZW50IDogJyd9XHJcbiAgICAgICAgICAgIGtleT17b2JqLmlkfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjdXJyZW50QyhvYmouaWQpfT5cclxuICAgICAgICAgICAgPENsb2NrIHRpbWVzdGFtcD17b2JqLnAgIT09IG51bGwgPyBvYmoubFswXSArIERhdGUubm93KCkgLSBvYmoucCA6IG9iai5sWzBdfSBwYXVzZWQ9e29iai5wICE9PSBudWxsfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b2JqLnAgIT09IG51bGwgPyBzLnBhdXNlZCA6ICcnfT57b2JqLnAgPyBwcm9wcy5kZXNjLnBhdXNlZCA6IHByb3BzLmRlc2MuYWN0aXZlfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZnVuY3Rpb24gRWxlbWVudCh7IHRpbWVzdGFtcHMsIGlkLCBwYXVzZWQsIHN0YXJ0LCBwYXVzZSwgbGFwLCByZXNldCwgcmVtb3ZlTGFwLCBwcm9wcyB9KSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZWYgIT09IG51bGwpIHJlZi5jdXJyZW50LmZvY3VzKClcclxuICB9LCBbaWRdKVxyXG4gIGZ1bmN0aW9uIGhvdEtleXMoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnIHx8IGUuY29kZSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICAgIGxhcCgpXHJcbiAgICAgIH0gZWxzZSBpZiAocGF1c2VkKSB7XHJcbiAgICAgICAgc3RhcnQoKVxyXG4gICAgICB9IGVsc2UgcGF1c2UoKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiByZWY9e3JlZn0gb25LZXlQcmVzcz17aG90S2V5c30gdGFiSW5kZXg9ey0xfT5cclxuICAgIDxDbG9jayB0aW1lc3RhbXA9e3RpbWVzdGFtcHNbMF19IHBhdXNlZD17cGF1c2VkICE9PSBudWxsfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuZ3JlZW59IG9uQ2xpY2s9e3N0YXJ0fT57cHJvcHMuZGVzYy5zdGFydH08L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MueWVsbG93fSBvbkNsaWNrPXtsYXB9Pntwcm9wcy5kZXNjLmxhcH08L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuYmx1ZX0gb25DbGljaz17cGF1c2V9Pntwcm9wcy5kZXNjLnBhdXNlfTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5yZWR9IG9uQ2xpY2s9eygpID0+IHJlc2V0KGlkKX0+e3Byb3BzLmRlc2MucmVzZXR9PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sYXB9PC9kaXY+XHJcbiAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sYXBUaW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+e3Byb3BzLmRlc2MudG90YWxUaW1lfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pnt0aW1lc3RhbXBzLmxlbmd0aH08L2Rpdj5cclxuICAgICAgICA8Q2xvY2sgdGltZXN0YW1wPXt0aW1lc3RhbXBzW3RpbWVzdGFtcHMubGVuZ3RoIC0gMV19IHBhdXNlZD17cGF1c2VkICE9PSBudWxsfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgICAgIDxDbG9jayB0aW1lc3RhbXA9e3RpbWVzdGFtcHNbMF19IHBhdXNlZD17cGF1c2VkICE9PSBudWxsfSBsYWJlbHM9e3Byb3BzLmRlc2MubGFiZWxzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHRpbWVzdGFtcHMubWFwKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IDAgPyBudWxsIDpcclxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtfT5cclxuICAgICAgICAgICAgPGRpdj57aW5kZXh9PC9kaXY+XHJcbiAgICAgICAgICAgIDxDbG9jayB0aW1lc3RhbXA9e0RhdGUubm93KCkgLSAoaXRlbSAtIHRpbWVzdGFtcHNbaW5kZXggLSAxXSl9IHBhdXNlZD17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgICAgICAgICAgPENsb2NrIHRpbWVzdGFtcD17RGF0ZS5ub3coKSAtIChpdGVtIC0gdGltZXN0YW1wc1swXSl9IHBhdXNlZD17dHJ1ZX0gbGFiZWxzPXtwcm9wcy5kZXNjLmxhYmVsc30gLz5cclxuICAgICAgICAgIDwvZGl2PikucmV2ZXJzZSgpXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2xvY2soeyB0aW1lc3RhbXAsIHBhdXNlZCwgZGlzcGxheU1zID0gdHJ1ZSwgb25seVRpbWUgPSBmYWxzZSwgbGFiZWxzID0geyBkYXk6IFwiZGF5XCIsIHllYXI6IFwieWVhclwiIH0gfSkge1xyXG4gIGNvbnN0IFttc3RpbWVyLCBtc3RpbWVyQ10gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtzZWN0aW1lciwgc2VjdGltZXJDXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW21pbnRpbWVyLCBtaW50aW1lckNdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbaHRpbWVyLCBodGltZXJDXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2RheXRpbWVyLCBkYXl0aW1lckNdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbeWVhcnRpbWVyLCB5ZWFydGltZXJDXSA9IHVzZVN0YXRlKDApXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGNhbGNNcyhub3cpIHtcclxuICAgICAgY29uc3QgbXMgPSAobm93ICUgMTAwMCAvIDEwMCkgfCAwXHJcbiAgICAgIG1zdGltZXJDKG1zKVxyXG4gICAgICByZXR1cm4gbXNcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhbGNTKG5vdykge1xyXG4gICAgICBjb25zdCBzZWMgPSAobm93ICUgKDYwICogMTAwMCkgLyAxMDAwKSB8IDBcclxuICAgICAgc2VjdGltZXJDKHNlYylcclxuICAgICAgcmV0dXJuIHNlY1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY00obm93KSB7XHJcbiAgICAgIGNvbnN0IG1pbiA9IChub3cgJSAoNjAgKiA2MCAqIDEwMDApIC8gKDYwICogMTAwMCkpIHwgMFxyXG4gICAgICBtaW50aW1lckMobWluKVxyXG4gICAgICByZXR1cm4gbWluXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjSChub3cpIHtcclxuICAgICAgY29uc3QgaCA9IChub3cgJSAoMjQgKiA2MCAqIDYwICogMTAwMCkgLyAoNjAgKiA2MCAqIDEwMDApKSB8IDBcclxuICAgICAgaHRpbWVyQyhoKVxyXG4gICAgICByZXR1cm4gaFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY0Qobm93KSB7XHJcbiAgICAgIGNvbnN0IGQgPSBub3cgJSAoMzY2ICogMjQgKiA2MCAqIDYwICogMTAwMCkgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkgfCAwXHJcbiAgICAgIGRheXRpbWVyQyhkKVxyXG4gICAgICByZXR1cm4gZFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmFuZ2UobnVtLCBmaXJzdCwgc2Vjb25kKSB7XHJcbiAgICAgIGlmIChudW0gPiBmaXJzdCAmJiBudW0gPCBzZWNvbmQpIHJldHVybiB0cnVlXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY1RpbWUoKSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IE1hdGguYWJzKERhdGUubm93KCkgLSB0aW1lc3RhbXApXHJcblxyXG4gICAgICBpZiAoIWRpc3BsYXlNcyB8fCAhcmFuZ2UoY2FsY01zKG5vdyksIDAsIDkpKSBpZiAoIXJhbmdlKGNhbGNTKG5vdyksIDAsIDU5KSkgaWYgKCFyYW5nZShjYWxjTShub3cpLCAwLCA1OSkpIGlmICghcmFuZ2UoY2FsY0gobm93KSwgMCwgMjMpKSBjYWxjRChub3cpXHJcbiAgICB9XHJcbiAgICBpZiAodGltZXN0YW1wID09PSBudWxsKSB7XHJcbiAgICAgIG1zdGltZXJDKDApXHJcbiAgICAgIHNlY3RpbWVyQygwKVxyXG4gICAgICBtaW50aW1lckMoMClcclxuICAgICAgaHRpbWVyQygwKVxyXG4gICAgICBkYXl0aW1lckMoMClcclxuICAgICAgeWVhcnRpbWVyQygwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgbm93ID0gTWF0aC5hYnMoRGF0ZS5ub3coKSAtIHRpbWVzdGFtcClcclxuICAgICAgY2FsY01zKG5vdylcclxuICAgICAgY2FsY1Mobm93KVxyXG4gICAgICBjYWxjTShub3cpXHJcbiAgICAgIGNhbGNIKG5vdylcclxuICAgICAgY2FsY0Qobm93KVxyXG4gICAgICB5ZWFydGltZXJDKE1hdGguZmxvb3IoTWF0aC5hYnMoRGF0ZS5ub3coKSAtIHRpbWVzdGFtcCkgLyAoMzYwMCAqIDEwMDAgKiAyNCAqIDM2NSkpKVxyXG4gICAgfVxyXG4gICAgaWYgKCFwYXVzZWQgJiYgdGltZXN0YW1wICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoY2FsY1RpbWUsIDUwKVxyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgIH1cclxuICB9LCBbcGF1c2VkLCB0aW1lc3RhbXBdKVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5jbG9ja30+XHJcbiAgICB7IW9ubHlUaW1lICYmIHllYXJ0aW1lciA+IDAgPyB5ZWFydGltZXIgKyBsYWJlbHMueWVhciA6IG51bGx9XHJcbiAgICB7IW9ubHlUaW1lICYmIGRheXRpbWVyID4gMCA/IGRheXRpbWVyICsgbGFiZWxzLmRheSA6IG51bGx9XHJcbiAgICB7aHRpbWVyIDwgMTAgPyBcIjBcIiArIGh0aW1lciA6IGh0aW1lcn06XHJcbiAgICB7bWludGltZXIgPCAxMCA/IFwiMFwiICsgbWludGltZXIgOiBtaW50aW1lcn06XHJcbiAgICB7c2VjdGltZXIgPCAxMCA/IFwiMFwiICsgc2VjdGltZXIgOiBzZWN0aW1lcn1cclxuICAgIHtkaXNwbGF5TXMgPyA8c3Bhbj57bXN0aW1lcn08L3NwYW4+IDogbnVsbH1cclxuXHJcbiAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9