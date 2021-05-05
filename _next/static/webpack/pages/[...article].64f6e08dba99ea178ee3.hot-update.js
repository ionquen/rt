webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/tools/Transfer.js":
/*!**************************************!*\
  !*** ./components/tools/Transfer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transfer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/tools/transfer.styl */ "./styles/tools/transfer.styl");
/* harmony import */ var _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _elements_fullscreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/fullscreen */ "./components/elements/fullscreen.js");
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Svg */ "./components/Svg.js");





var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\tools\\Transfer.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Transfer(_ref) {
  _s();

  var _this = this;

  var props = _ref.props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      added = _useState[0],
      addedC = _useState[1]; //Массив добавленных устройств


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      current = _useState2[0],
      currentC = _useState2[1]; //Отображаемое подключение ('' = создать новое)


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      connections = _useState3[0],
      connectionsC = _useState3[1]; //Массив ключей всех активных подключений


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      waiting = _useState4[0],
      waitingC = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      qrDisplay = _useState5[0],
      qrDisplayC = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      localCode = _useState6[0],
      localCodeC = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      userKey = _useState7[0],
      userKeyC = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      userKeyLink = _useState8[0],
      userKeyLinkC = _useState8[1];

  var block = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var ws = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var qrcode = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function copyLink() {
    navigator.clipboard.writeText("https://regtool.net".concat(router.asPath, "?key=").concat(userKey));
  }

  function copyCode() {
    navigator.clipboard.writeText("".concat(localCode));
  }

  function recreateCode(asPath) {
    //and update link
    localCodeC(Math.round(Math.random() * 100000));
    var newKey = Math.random().toString(36).substr(2);
    userKeyC(newKey);
    userKeyLinkC( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: asPath,
        query: {
          key: newKey
        }
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: ["https://regtool.net", asPath, "?key=", newKey]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 76
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 18
    }, this));
    qrDisplayC(false);
  }

  function contactEdit(key, field, value) {
    addedC(function (prevState) {
      return prevState.map(function (obj) {
        return obj.code === key ? _objectSpread(_objectSpread({}, obj), {}, Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, field, value)) : obj;
      });
    });
  }

  function qrGen() {
    qrcode__WEBPACK_IMPORTED_MODULE_6___default.a.toCanvas(qrcode.current, "https://regtool.net".concat(router.asPath, "?key=").concat(userKey));
    qrDisplayC(true);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    recreateCode(router.asPath);
    var connections1 = localStorage.getItem('transferConnections');
    if (connections1 !== null) addedC(JSON.parse(connections1));
    return function () {
      try {
        ws.current.close();
      } catch (_unused) {}
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    localStorage.setItem('transferConnections', JSON.stringify(added));
  }, [added]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (router.query.key === undefined) return;
    addedC(function (prevState) {
      return [{
        code: router.query.key,
        date: Date.now()
      }].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState));
    });
    var asPath = router.asPath.match(/^(.*)\?/)[1];
    router.replace(asPath, undefined, {
      shallow: true
    });
    showConnection(router.query.key);
    recreateCode(asPath);
  }, [router.query.key]);

  function newConnect(e) {
    e.preventDefault();
    waitingC(true);
    ws.current = new WebSocket(props.desc.server);

    ws.current.onmessage = function (e) {
      var _JSON$parse = JSON.parse(e.data),
          type = _JSON$parse.type,
          content = _JSON$parse.content;

      switch (type) {
        case 'swap':
          addedC(function (prevState) {
            return [{
              code: content,
              date: Date.now()
            }].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState));
          });
          showConnection(content);
          ws.current.close();
          waitingC(false);
      }
    };

    var code = e.target.code.value;
    var newcode = [code, localCode].sort().join('');

    ws.current.onopen = function () {
      return ws.current.send(JSON.stringify({
        type: 'swap',
        content: newcode
      }));
    };
  }

  function wsClose() {
    waitingC(false);
    ws.current.close();
  }

  function removeConnection(code) {
    addedC(added.filter(function (obj) {
      return obj.code === code ? false : true;
    }));
    currentC('');
  }

  function showConnection(key) {
    if (!connections.includes(key)) connectionsC([].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(connections), [key]));
    currentC(key);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.block,
    ref: block,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a["new"], " ").concat(current === '' ? _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.display : ''),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: props.desc.header1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: props.desc.header2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: props.desc.code.string1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [props.desc.code.yourCode, ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  onClick: copyCode,
                  "data-tooltip": props.desc.clickToCopy,
                  className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.code,
                  children: localCode
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 48
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: props.desc.code.string2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 15
              }, this), waiting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: props.desc.code.waiting
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: wsClose,
                  children: props.desc.code.retry
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, this)]
              }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.form,
                onSubmit: newConnect,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  placeholder: props.desc.code.inputCodePlaceholder,
                  autoComplete: "false",
                  type: "number",
                  name: "code"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "submit",
                  value: props.desc.code.addContact
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: props.desc.header3
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: props.desc.qr.string1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: props.desc.qr.string2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [userKeyLink, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: copyLink,
                  children: props.desc.qr.copy
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: qrDisplay ? _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.qrTrue : _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.qrFalse,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
                  ref: qrcode
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: qrGen,
                  children: props.desc.qr.generate
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: props.desc.loss
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: recreateCode,
            children: props.desc.recreate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, this), added.map(function (_ref2) {
        var code = _ref2.code,
            name = _ref2.name,
            date = _ref2.date,
            last = _ref2.last;
        return !connections.includes(code) ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Element, {
          display: current === code,
          code: code,
          name: name,
          date: date,
          last: last,
          contactEdit: contactEdit,
          props: props
        }, code, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
        elem: block.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.contacts,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return currentC('');
        },
        children: props.desc.add
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: added.map(function (obj) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick() {
                return showConnection(obj.code);
              },
              children: obj.name === undefined ? props.desc.nameless : obj.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick(e) {
                e.stopPropagation();
                removeConnection(obj.code);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                name: "var/x.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 88
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: new Date(obj.date).toLocaleTimeString(undefined, {
                month: 'short',
                day: 'numeric',
                weekday: 'short',
                year: 'numeric'
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: obj.last === undefined ? props.desc.empty : new Date(obj.last).toLocaleTimeString(undefined, {
                month: 'short',
                day: 'numeric',
                weekday: 'short',
                year: 'numeric'
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 11
            }, _this)]
          }, obj.code, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 27
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 10
  }, this);
}

_s(Transfer, "CQor0FmQrXprXtNbcp0RMaAhQvA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Transfer;

function Element(_ref3) {
  _s2();

  var _this2 = this;

  var code = _ref3.code,
      name = _ref3.name,
      date = _ref3.date,
      last = _ref3.last,
      display = _ref3.display,
      contactEdit = _ref3.contactEdit,
      props = _ref3.props;

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      chat = _useState9[0],
      chatC = _useState9[1]; //Сообщения в чате


  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      files = _useState10[0],
      filesC = _useState10[1]; //Файлы на отправку


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      filesSending = _useState11[0],
      filesSendingC = _useState11[1]; //Скрывать файлы (и не отправлять их же) если идёт их отправка


  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      status = _useState12[0],
      statusC = _useState12[1]; //0 - disconnected, 1 - establishing a connection, 2 - connected 


  var ws = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var pc = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var channel = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var chatBlock = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (chatBlock.current.scrollTop > chatBlock.current.scrollHeight - chatBlock.current.offsetHeight - 300) {
      chatBlock.current.scrollTop = chatBlock.current.scrollHeight;
    }
  }, [chat]);

  var closeAllConnections = function closeAllConnections() {
    try {
      channel.current.close();
      pc.current.close();
      ws.current.close();
    } catch (_unused2) {}
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (status === 0) {
      addMsg({
        type: 'sys',
        content: props.desc.msg.sysNew
      });
    }
  }, [status]);

  var addMsg = function addMsg(obj) {
    return chatC(function (oldState) {
      return [].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(oldState), [obj]);
    });
  };

  var fileSetAttr = function fileSetAttr(id, attr, value) {
    return chatC(function (prevState) {
      return prevState.map(function (obj) {
        return obj.id === id ? _objectSpread(_objectSpread({}, obj), {}, Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, attr, value)) : obj;
      });
    });
  };

  var fileDisplay = function fileDisplay(e) {
    return filesC(function (prevState) {
      return [].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState), Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.files));
    });
  };

  var fileExclude = function fileExclude(file) {
    return filesC(function (prevState) {
      return prevState.filter(function (f) {
        return f !== file;
      });
    });
  };

  function createAuxiliaryInfo() {
    var now = Date.now();
    return {
      date: Math.floor(now / 60000) * 60000,
      id: now % 100000
    };
  }

  function fileDownload(blob, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      return closeAllConnections();
    };
  }, []);

  function close() {
    closeAllConnections();
    statusC(0);
  }

  function start() {
    statusC(1);

    function channelSetHandlers(chnl) {
      var fileData = {};
      var currentChunk = 0;
      var chunks = [];
      var currentFile;
      var progressCoef = 1;

      chnl.onopen = function () {
        addMsg({
          type: 'sys',
          content: props.desc.msg.opened
        });
        statusC(2);
        contactEdit(code, 'last', Date.now());
      };

      chnl.onclose = function () {
        closeAllConnections();
        statusC(0);
        addMsg({
          type: 'sys',
          content: props.desc.msg.closed
        });
      };

      chnl.onmessage = function (e) {
        try {
          var _JSON$parse2 = JSON.parse(e.data),
              type = _JSON$parse2.type,
              content = _JSON$parse2.content;

          if (type === 'msg') {
            addMsg(_objectSpread({
              type: type,
              content: content,
              current: false
            }, createAuxiliaryInfo()));
          }

          if (type === 'file') {
            chunks = [];
            currentChunk = 0;
            fileData = content;
            progressCoef = Math.ceil(fileData.chunks / 100);
            if (progressCoef < 1) progressCoef = 1;
            currentFile = _objectSpread({
              type: "file",
              current: false,
              name: fileData.name,
              size: fileData.size
            }, createAuxiliaryInfo());
            addMsg(currentFile);
          }
        } catch (_unused3) {
          chunks.push(e.data);
          currentChunk++;
          if (currentChunk % progressCoef === 0) fileSetAttr(currentFile.id, 'progress', Math.round(currentChunk / progressCoef));

          if (currentChunk >= fileData.chunks) {
            fileSetAttr(currentFile.id, 'progress', 100);
            fileSetAttr(currentFile.id, 'blob', new Blob(chunks));
          }
        }
      };

      channel.current = chnl;
    } //WebSocket (establishing a connection)


    var wss = new WebSocket(props.server);

    var send = function send(type, content) {
      return wss.send(JSON.stringify({
        type: type,
        content: content
      }));
    };

    var config = {
      iceServers: Object.entries(props.iceServers).map(function (obj) {
        return obj[1];
      })
    }; //WebRTC settings

    var RTCpc = new RTCPeerConnection(config);

    RTCpc.onicecandidate = function (e) {
      if (e.candidate) {
        console.log(JSON.stringify(e.candidate));
        send("newice", e.candidate.toJSON());
      } else addMsg("Ice candidates установлены. Ожидание действий браузера.");
    };

    RTCpc.ondatachannel = function (e) {
      return channelSetHandlers(e.channel);
    };

    wss.onopen = function () {
      addMsg({
        type: 'sys',
        content: "Удалось подключиться к middle-серверу"
      });
      send('connect', code);
    };

    wss.onmessage = function (e) {
      var _JSON$parse3 = JSON.parse(e.data),
          type = _JSON$parse3.type,
          content = _JSON$parse3.content;

      switch (type) {
        case 'connect':
          addMsg({
            type: 'sys',
            content: "Контакт найден. Установка соединения..."
          });

          RTCpc.onnegotiationneeded = function (e) {
            RTCpc.createOffer().then(function (offer) {
              return RTCpc.setLocalDescription(offer);
            }).then(function () {
              return send("offer", RTCpc.localDescription);
            });
          };

          channelSetHandlers(RTCpc.createDataChannel("channel"));
          break;

        case 'offer':
          addMsg({
            type: 'sys',
            content: "Контакт найден. Установка соединения..."
          });
          console.log({
            type: type,
            content: content
          });
          RTCpc.setRemoteDescription(new RTCSessionDescription(content)).then(function () {
            return RTCpc.createAnswer();
          }).then(function (answer) {
            return RTCpc.setLocalDescription(answer);
          }).then(function () {
            return send("answer", RTCpc.localDescription);
          });
          break;

        case 'answer':
          console.log({
            type: type,
            content: content
          });
          RTCpc.setRemoteDescription(new RTCSessionDescription(content));
          break;

        case "newice":
          console.log({
            type: type,
            content: content
          });
          RTCpc.addIceCandidate(new RTCIceCandidate(content));
          break;
      }
    };

    wss.onerror = function (e) {
      return console.log('Middle-server connection error');
    };

    wss.onclose = function (e) {
      return console.log('Middle-server connection closed');
    };

    ws.current = wss;
    pc.current = RTCpc;
  } //SEND


  function sendChannel(msg) {
    if (msg !== '') {
      channel.current.send(JSON.stringify({
        type: 'msg',
        content: msg
      }));
      addMsg(_objectSpread({
        type: 'msg',
        content: msg,
        current: true
      }, createAuxiliaryInfo()));
    }

    if (files.length !== 0 && !filesSending) {
      var readNextChunk = function readNextChunk() {
        if (currentChunk === 0) {
          channel.current.send(JSON.stringify({
            type: 'file',
            content: {
              name: files[currentFile].name,
              chunks: Math.floor(files[currentFile].size / BYTES_PER_CHUNK),
              size: files[currentFile].size
            }
          }));
          msgObj = _objectSpread({
            type: 'file',
            current: true,
            blob: files[currentFile],
            size: files[currentFile].size,
            name: files[currentFile].name
          }, createAuxiliaryInfo());
          progressCoef = Math.ceil(files[currentFile].size / BYTES_PER_CHUNK / 100);
          addMsg(msgObj);
        }

        var start = BYTES_PER_CHUNK * currentChunk;
        var end = Math.min(files[currentFile].size, start + BYTES_PER_CHUNK);
        fileReader.readAsArrayBuffer(files[currentFile].slice(start, end));
      };

      var fileReader = new FileReader();
      var currentChunk = 0;
      var currentFile = 0;
      var progressCoef = 0;
      var msgObj;
      var BYTES_PER_CHUNK = 8092;
      filesSendingC(true);

      fileReader.onload = function () {
        channel.current.send(fileReader.result);
        if (currentChunk % progressCoef === 0) fileSetAttr(msgObj.id, 'progress', Math.round(currentChunk / progressCoef));
        currentChunk++;

        if (currentChunk > Math.floor(files[currentFile].size / BYTES_PER_CHUNK)) {
          fileSetAttr(msgObj.id, 'progress', 100);
          currentFile++;

          if (files.length > currentFile) {
            currentChunk = 0;
            readNextChunk();
          } else {
            filesC([]);
            filesSendingC(false);
          }
        } else readNextChunk();
      };

      readNextChunk();
    }
  } //Отправка сообщения и его отображение в чате


  function sendmsg(e) {
    e.preventDefault();
    console.log({
      channel: channel.current
    });

    if (channel.current === null) {
      return addMsg({
        type: "sys",
        content: props.desc.msg.notsent
      });
    }

    console.log({
      channelState: channel.current.readyState
    });

    if (channel.current.readyState !== "open") {
      switch (channel.current.readyState) {
        case "connecting":
          return addMsg({
            type: "sys",
            content: props.desc.msg.connecting
          });

        case "closing":
          return addMsg({
            type: "sys",
            content: props.desc.msg.closing
          });

        case "close":
          return addMsg({
            type: "sys",
            content: props.desc.msg.close
          });
      }
    }

    sendChannel(e.target.msg.value);
    e.target.msg.value = "";
  }

  function getElementsByStatus() {
    switch (status) {
      case 0:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.red,
          children: props.desc.status0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 22
        }, this);

      case 1:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.orange,
          children: props.desc.status1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 22
        }, this);

      case 2:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.green,
          children: props.desc.status2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 22
        }, this);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "".concat(_styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.element, " ").concat(display ? _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.display : ''),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.info,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: name === undefined ? props.desc.nameless : name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.added, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(date).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.lastConnection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 11
          }, this), last === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.status0
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(last).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.connection, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 11
          }, this), getElementsByStatus()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.chat,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: chatBlock,
        children: [chat.map(function (obj, index) {
          switch (obj.type) {
            case "msg":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: obj.current ? _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.right : _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.left,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: new Date(obj.date).toLocaleTimeString(undefined, {
                    minute: 'numeric',
                    hour: 'numeric'
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 447,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: obj.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 448,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 446,
                columnNumber: 32
              }, _this2);

            case "file":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "".concat(obj.current ? _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.right : _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.left, " ").concat(_styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.file),
                onClick: obj.progress === 100 || obj.current ? function () {
                  return fileDownload(obj.blob, obj.name);
                } : null,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: new Date(obj.date).toLocaleTimeString(undefined, {
                    minute: 'numeric',
                    hour: 'numeric'
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 453,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  name: "var/save.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 454,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: obj.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 456,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [obj.progress, "%"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 457,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [Math.round(obj.size / 1024), " ", props.desc.kb]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 458,
                    columnNumber: 17
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 455,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 450,
                columnNumber: 33
              }, _this2);

            case "sys":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.system,
                children: obj.content
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 461,
                columnNumber: 32
              }, _this2);
          }
        }), status === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: start,
          children: props.desc.queryNew
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 25
        }, this) : status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: close,
          children: props.desc.queryCancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 28
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: sendmsg,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: filesSending ? {
            display: 'none'
          } : {},
          children: files.map(function (file, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                onClick: function onClick(e) {
                  return fileDownload(file, file.name);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  name: "var/file.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 475,
                  columnNumber: 15
                }, _this2)
              }, file.lastModified, false, {
                fileName: _jsxFileName,
                lineNumber: 474,
                columnNumber: 13
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: file.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 478,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  onClick: function onClick(e) {
                    return fileExclude(file);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    name: "var/x.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 479,
                    columnNumber: 53
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 479,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [Math.round(file.size / 1024), " ", props.desc.kb]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 480,
                  columnNumber: 15
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 477,
                columnNumber: 13
              }, _this2)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 39
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "data-tooltip": props.desc.attach,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              disabled: filesSending,
              type: "file",
              multiple: true,
              onChange: fileDisplay
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 487,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/clip.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 488,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 486,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            autoComplete: "false",
            type: "text",
            name: "msg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "data-tooltip": props.desc.send,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 492,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/send.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 491,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 421,
    columnNumber: 10
  }, this);
}

_s2(Element, "k7uOwAvspnR0wjkUqFtr1WYP+Wo=");

_c2 = Element;

var _c, _c2;

$RefreshReg$(_c, "Transfer");
$RefreshReg$(_c2, "Element");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UcmFuc2Zlci5qcyJdLCJuYW1lcyI6WyJUcmFuc2ZlciIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRlZCIsImFkZGVkQyIsImN1cnJlbnQiLCJjdXJyZW50QyIsImNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbnNDIiwid2FpdGluZyIsIndhaXRpbmdDIiwicXJEaXNwbGF5IiwicXJEaXNwbGF5QyIsImxvY2FsQ29kZSIsImxvY2FsQ29kZUMiLCJ1c2VyS2V5IiwidXNlcktleUMiLCJ1c2VyS2V5TGluayIsInVzZXJLZXlMaW5rQyIsImJsb2NrIiwidXNlUmVmIiwid3MiLCJxcmNvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFzUGF0aCIsImNvcHlDb2RlIiwicmVjcmVhdGVDb2RlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3S2V5IiwidG9TdHJpbmciLCJzdWJzdHIiLCJwYXRobmFtZSIsInF1ZXJ5Iiwia2V5IiwiY29udGFjdEVkaXQiLCJmaWVsZCIsInZhbHVlIiwicHJldlN0YXRlIiwibWFwIiwib2JqIiwiY29kZSIsInFyR2VuIiwicXIiLCJ0b0NhbnZhcyIsInVzZUVmZmVjdCIsImNvbm5lY3Rpb25zMSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjbG9zZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsIm1hdGNoIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzaG93Q29ubmVjdGlvbiIsIm5ld0Nvbm5lY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJXZWJTb2NrZXQiLCJkZXNjIiwic2VydmVyIiwib25tZXNzYWdlIiwiZGF0YSIsInR5cGUiLCJjb250ZW50IiwidGFyZ2V0IiwibmV3Y29kZSIsInNvcnQiLCJqb2luIiwib25vcGVuIiwic2VuZCIsIndzQ2xvc2UiLCJyZW1vdmVDb25uZWN0aW9uIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzIiwibWFpbiIsImRpc3BsYXkiLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN0cmluZzEiLCJ5b3VyQ29kZSIsImNsaWNrVG9Db3B5Iiwic3RyaW5nMiIsInJldHJ5IiwiZm9ybSIsImlucHV0Q29kZVBsYWNlaG9sZGVyIiwiYWRkQ29udGFjdCIsImhlYWRlcjMiLCJjb3B5IiwicXJUcnVlIiwicXJGYWxzZSIsImdlbmVyYXRlIiwibG9zcyIsInJlY3JlYXRlIiwibmFtZSIsImxhc3QiLCJjb250YWN0cyIsImFkZCIsIm5hbWVsZXNzIiwic3RvcFByb3BhZ2F0aW9uIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwieWVhciIsImVtcHR5IiwiRWxlbWVudCIsImNoYXQiLCJjaGF0QyIsImZpbGVzIiwiZmlsZXNDIiwiZmlsZXNTZW5kaW5nIiwiZmlsZXNTZW5kaW5nQyIsInN0YXR1cyIsInN0YXR1c0MiLCJwYyIsImNoYW5uZWwiLCJjaGF0QmxvY2siLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbG9zZUFsbENvbm5lY3Rpb25zIiwiYWRkTXNnIiwibXNnIiwic3lzTmV3Iiwib2xkU3RhdGUiLCJmaWxlU2V0QXR0ciIsImlkIiwiYXR0ciIsImZpbGVEaXNwbGF5IiwiZmlsZUV4Y2x1ZGUiLCJmaWxlIiwiZiIsImNyZWF0ZUF1eGlsaWFyeUluZm8iLCJmbG9vciIsImZpbGVEb3dubG9hZCIsImJsb2IiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJzdGFydCIsImNoYW5uZWxTZXRIYW5kbGVycyIsImNobmwiLCJmaWxlRGF0YSIsImN1cnJlbnRDaHVuayIsImNodW5rcyIsImN1cnJlbnRGaWxlIiwicHJvZ3Jlc3NDb2VmIiwib3BlbmVkIiwib25jbG9zZSIsImNsb3NlZCIsImNlaWwiLCJzaXplIiwicHVzaCIsIkJsb2IiLCJ3c3MiLCJjb25maWciLCJpY2VTZXJ2ZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsIlJUQ3BjIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvbmljZWNhbmRpZGF0ZSIsImNhbmRpZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b0pTT04iLCJvbmRhdGFjaGFubmVsIiwib25uZWdvdGlhdGlvbm5lZWRlZCIsImNyZWF0ZU9mZmVyIiwidGhlbiIsIm9mZmVyIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImxvY2FsRGVzY3JpcHRpb24iLCJjcmVhdGVEYXRhQ2hhbm5lbCIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwiUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiYW5zd2VyIiwiYWRkSWNlQ2FuZGlkYXRlIiwiUlRDSWNlQ2FuZGlkYXRlIiwib25lcnJvciIsInNlbmRDaGFubmVsIiwibGVuZ3RoIiwicmVhZE5leHRDaHVuayIsIkJZVEVTX1BFUl9DSFVOSyIsIm1zZ09iaiIsImVuZCIsIm1pbiIsImZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNsaWNlIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlc3VsdCIsInNlbmRtc2ciLCJub3RzZW50IiwiY2hhbm5lbFN0YXRlIiwicmVhZHlTdGF0ZSIsImNvbm5lY3RpbmciLCJjbG9zaW5nIiwiZ2V0RWxlbWVudHNCeVN0YXR1cyIsInJlZCIsInN0YXR1czAiLCJvcmFuZ2UiLCJzdGF0dXMxIiwiZ3JlZW4iLCJzdGF0dXMyIiwiZWxlbWVudCIsImluZm8iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJsYXN0Q29ubmVjdGlvbiIsImNvbm5lY3Rpb24iLCJpbmRleCIsInJpZ2h0IiwibGVmdCIsIm1pbnV0ZSIsImhvdXIiLCJwcm9ncmVzcyIsImtiIiwic3lzdGVtIiwicXVlcnlOZXciLCJxdWVy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LFdBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBY0U7QUFBQSxrQ0FDRTtBQUFPLDRCQUFjeE8sS0FBSyxDQUFDdUUsSUFBTixDQUFXNEssTUFBaEM7QUFBQSxvQ0FDRTtBQUFPLHNCQUFRLEVBQUV2SCxZQUFqQjtBQUErQixrQkFBSSxFQUFDLE1BQXBDO0FBQTJDLHNCQUFRLE1BQW5EO0FBQW9ELHNCQUFRLEVBQUVrQjtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsNENBQUQ7QUFBSyxrQkFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFLRTtBQUFPLHdCQUFZLEVBQUMsT0FBcEI7QUFBNEIsZ0JBQUksRUFBQyxNQUFqQztBQUF3QyxnQkFBSSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFNRTtBQUFPLDRCQUFjOUksS0FBSyxDQUFDdUUsSUFBTixDQUFXVyxJQUFoQztBQUFBLG9DQUNFO0FBQU8sa0JBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyw0Q0FBRDtBQUFLLGtCQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQThFRDs7SUFwVlFxQyxPOztNQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS42NGY2ZTA4ZGJhOTllYTE3OGVlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHFyIGZyb20gJ3FyY29kZSdcclxuXHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy90cmFuc2Zlci5zdHlsJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5pbXBvcnQgU3ZnIGZyb20gJy4uL1N2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zZmVyKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFthZGRlZCwgYWRkZWRDXSA9IHVzZVN0YXRlKFtdKS8v0JzQsNGB0YHQuNCyINC00L7QsdCw0LLQu9C10L3QvdGL0YUg0YPRgdGC0YDQvtC50YHRgtCyXHJcbiAgY29uc3QgW2N1cnJlbnQsIGN1cnJlbnRDXSA9IHVzZVN0YXRlKCcnKS8v0J7RgtC+0LHRgNCw0LbQsNC10LzQvtC1INC/0L7QtNC60LvRjtGH0LXQvdC40LUgKCcnID0g0YHQvtC30LTQsNGC0Ywg0L3QvtCy0L7QtSlcclxuICBjb25zdCBbY29ubmVjdGlvbnMsIGNvbm5lY3Rpb25zQ10gPSB1c2VTdGF0ZShbXSkvL9Cc0LDRgdGB0LjQsiDQutC70Y7Rh9C10Lkg0LLRgdC10YUg0LDQutGC0LjQstC90YvRhSDQv9C+0LTQutC70Y7Rh9C10L3QuNC5XHJcblxyXG4gIGNvbnN0IFt3YWl0aW5nLCB3YWl0aW5nQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcXJEaXNwbGF5LCBxckRpc3BsYXlDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2NhbENvZGUsIGxvY2FsQ29kZUNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdXNlcktleSwgdXNlcktleUNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdXNlcktleUxpbmssIHVzZXJLZXlMaW5rQ10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHdzID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgcXJjb2RlID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBmdW5jdGlvbiBjb3B5TGluaygpIHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYGh0dHBzOi8vcmVndG9vbC5uZXQke3JvdXRlci5hc1BhdGh9P2tleT0ke3VzZXJLZXl9YCkgfVxyXG4gIGZ1bmN0aW9uIGNvcHlDb2RlKCkgeyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChgJHtsb2NhbENvZGV9YCkgfVxyXG4gIGZ1bmN0aW9uIHJlY3JlYXRlQ29kZShhc1BhdGgpIHsvL2FuZCB1cGRhdGUgbGlua1xyXG4gICAgbG9jYWxDb2RlQyhNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKVxyXG4gICAgY29uc3QgbmV3S2V5ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpXHJcbiAgICB1c2VyS2V5QyhuZXdLZXkpXHJcbiAgICB1c2VyS2V5TGlua0MoPExpbmsgaHJlZj17eyBwYXRobmFtZTogYXNQYXRoLCBxdWVyeTogeyBrZXk6IG5ld0tleSB9IH19PjxhPmh0dHBzOi8vcmVndG9vbC5uZXR7YXNQYXRofT9rZXk9e25ld0tleX08L2E+PC9MaW5rPilcclxuICAgIHFyRGlzcGxheUMoZmFsc2UpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNvbnRhY3RFZGl0KGtleSwgZmllbGQsIHZhbHVlKSB7XHJcbiAgICBhZGRlZEMocHJldlN0YXRlID0+IHByZXZTdGF0ZS5tYXAob2JqID0+IG9iai5jb2RlID09PSBrZXkgPyB7IC4uLm9iaiwgW2ZpZWxkXTogdmFsdWUgfSA6IG9iaikpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHFyR2VuKCkge1xyXG4gICAgcXIudG9DYW52YXMocXJjb2RlLmN1cnJlbnQsIGBodHRwczovL3JlZ3Rvb2wubmV0JHtyb3V0ZXIuYXNQYXRofT9rZXk9JHt1c2VyS2V5fWApXHJcbiAgICBxckRpc3BsYXlDKHRydWUpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWNyZWF0ZUNvZGUocm91dGVyLmFzUGF0aClcclxuICAgIGNvbnN0IGNvbm5lY3Rpb25zMSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmFuc2ZlckNvbm5lY3Rpb25zJylcclxuICAgIGlmIChjb25uZWN0aW9uczEgIT09IG51bGwpIGFkZGVkQyhKU09OLnBhcnNlKGNvbm5lY3Rpb25zMSkpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHdzLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgICB9IGNhdGNoIHsgfVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHJhbnNmZXJDb25uZWN0aW9ucycsIEpTT04uc3RyaW5naWZ5KGFkZGVkKSlcclxuICB9LCBbYWRkZWRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmtleSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgIGFkZGVkQyhwcmV2U3RhdGUgPT4gW3sgY29kZTogcm91dGVyLnF1ZXJ5LmtleSwgZGF0ZTogRGF0ZS5ub3coKSB9LCAuLi5wcmV2U3RhdGVdKVxyXG4gICAgY29uc3QgYXNQYXRoID0gcm91dGVyLmFzUGF0aC5tYXRjaCgvXiguKilcXD8vKVsxXVxyXG4gICAgcm91dGVyLnJlcGxhY2UoYXNQYXRoLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KVxyXG4gICAgc2hvd0Nvbm5lY3Rpb24ocm91dGVyLnF1ZXJ5LmtleSlcclxuICAgIHJlY3JlYXRlQ29kZShhc1BhdGgpXHJcbiAgfSwgW3JvdXRlci5xdWVyeS5rZXldKVxyXG5cclxuICBmdW5jdGlvbiBuZXdDb25uZWN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgd2FpdGluZ0ModHJ1ZSlcclxuICAgIHdzLmN1cnJlbnQgPSBuZXcgV2ViU29ja2V0KHByb3BzLmRlc2Muc2VydmVyKVxyXG4gICAgd3MuY3VycmVudC5vbm1lc3NhZ2UgPSBlID0+IHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBjb250ZW50IH0gPSBKU09OLnBhcnNlKGUuZGF0YSlcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc3dhcCc6XHJcbiAgICAgICAgICBhZGRlZEMocHJldlN0YXRlID0+IFt7IGNvZGU6IGNvbnRlbnQsIGRhdGU6IERhdGUubm93KCkgfSwgLi4ucHJldlN0YXRlXSlcclxuICAgICAgICAgIHNob3dDb25uZWN0aW9uKGNvbnRlbnQpXHJcbiAgICAgICAgICB3cy5jdXJyZW50LmNsb3NlKClcclxuICAgICAgICAgIHdhaXRpbmdDKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2RlID0gZS50YXJnZXQuY29kZS52YWx1ZVxyXG4gICAgY29uc3QgbmV3Y29kZSA9IFtjb2RlLCBsb2NhbENvZGVdLnNvcnQoKS5qb2luKCcnKVxyXG4gICAgd3MuY3VycmVudC5vbm9wZW4gPSAoKSA9PiB3cy5jdXJyZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnc3dhcCcsIGNvbnRlbnQ6IG5ld2NvZGUgfSkpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHdzQ2xvc2UoKSB7XHJcbiAgICB3YWl0aW5nQyhmYWxzZSlcclxuICAgIHdzLmN1cnJlbnQuY2xvc2UoKVxyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVDb25uZWN0aW9uKGNvZGUpIHtcclxuICAgIGFkZGVkQyhhZGRlZC5maWx0ZXIob2JqID0+IG9iai5jb2RlID09PSBjb2RlID8gZmFsc2UgOiB0cnVlKSlcclxuICAgIGN1cnJlbnRDKCcnKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzaG93Q29ubmVjdGlvbihrZXkpIHtcclxuICAgIGlmICghY29ubmVjdGlvbnMuaW5jbHVkZXMoa2V5KSkgY29ubmVjdGlvbnNDKFsuLi5jb25uZWN0aW9ucywga2V5XSlcclxuICAgIGN1cnJlbnRDKGtleSlcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1haW59PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cy5uZXd9ICR7Y3VycmVudCA9PT0gJycgPyBzLmRpc3BsYXkgOiAnJ31gfT5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmhlYWRlcjF9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGVhZGVyMn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmNvZGUuc3RyaW5nMX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmNvZGUueW91ckNvZGV9OiA8c3BhbiBvbkNsaWNrPXtjb3B5Q29kZX0gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLmNsaWNrVG9Db3B5fSBjbGFzc05hbWU9e3MuY29kZX0+e2xvY2FsQ29kZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5jb2RlLnN0cmluZzJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAge3dhaXRpbmcgP1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5jb2RlLndhaXRpbmd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17d3NDbG9zZX0+e3Byb3BzLmRlc2MuY29kZS5yZXRyeX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOiA8Zm9ybSBjbGFzc05hbWU9e3MuZm9ybX0gb25TdWJtaXQ9e25ld0Nvbm5lY3R9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9e3Byb3BzLmRlc2MuY29kZS5pbnB1dENvZGVQbGFjZWhvbGRlcn0gYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImNvZGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXtwcm9wcy5kZXNjLmNvZGUuYWRkQ29udGFjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmhlYWRlcjN9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5xci5zdHJpbmcxfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MucXIuc3RyaW5nMn08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3VzZXJLZXlMaW5rfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb3B5TGlua30+e3Byb3BzLmRlc2MucXIuY29weX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cXJEaXNwbGF5ID8gcy5xclRydWUgOiBzLnFyRmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e3FyY29kZX0gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cXJHZW59Pntwcm9wcy5kZXNjLnFyLmdlbmVyYXRlfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvc3N9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlY3JlYXRlQ29kZX0+e3Byb3BzLmRlc2MucmVjcmVhdGV9PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7YWRkZWQubWFwKCh7IGNvZGUsIG5hbWUsIGRhdGUsIGxhc3QgfSkgPT4gIWNvbm5lY3Rpb25zLmluY2x1ZGVzKGNvZGUpID8gbnVsbCA6XHJcbiAgICAgICAgPEVsZW1lbnQgZGlzcGxheT17Y3VycmVudCA9PT0gY29kZX0gY29kZT17Y29kZX0ga2V5PXtjb2RlfSBuYW1lPXtuYW1lfSBkYXRlPXtkYXRlfSBsYXN0PXtsYXN0fSBjb250YWN0RWRpdD17Y29udGFjdEVkaXR9IHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgKX1cclxuICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFjdHN9PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGN1cnJlbnRDKCcnKX0+e3Byb3BzLmRlc2MuYWRkfTwvYnV0dG9uPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthZGRlZC5tYXAob2JqID0+IDxkaXYga2V5PXtvYmouY29kZX0+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNob3dDb25uZWN0aW9uKG9iai5jb2RlKX0+e29iai5uYW1lID09PSB1bmRlZmluZWQgPyBwcm9wcy5kZXNjLm5hbWVsZXNzIDogb2JqLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHJlbW92ZUNvbm5lY3Rpb24ob2JqLmNvZGUpIH19PjxTdmcgbmFtZT1cInZhci94LnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmouZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIHdlZWtkYXk6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICAgIDxkaXY+e29iai5sYXN0ID09PSB1bmRlZmluZWQgPyBwcm9wcy5kZXNjLmVtcHR5IDogbmV3IERhdGUob2JqLmxhc3QpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCB3ZWVrZGF5OiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZnVuY3Rpb24gRWxlbWVudCh7IGNvZGUsIG5hbWUsIGRhdGUsIGxhc3QsIGRpc3BsYXksIGNvbnRhY3RFZGl0LCBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW2NoYXQsIGNoYXRDXSA9IHVzZVN0YXRlKFtdKS8v0KHQvtC+0LHRidC10L3QuNGPINCyINGH0LDRgtC1XHJcbiAgY29uc3QgW2ZpbGVzLCBmaWxlc0NdID0gdXNlU3RhdGUoW10pLy/QpNCw0LnQu9GLINC90LAg0L7RgtC/0YDQsNCy0LrRg1xyXG4gIGNvbnN0IFtmaWxlc1NlbmRpbmcsIGZpbGVzU2VuZGluZ0NdID0gdXNlU3RhdGUoZmFsc2UpLy/QodC60YDRi9Cy0LDRgtGMINGE0LDQudC70YsgKNC4INC90LUg0L7RgtC/0YDQsNCy0LvRj9GC0Ywg0LjRhSDQttC1KSDQtdGB0LvQuCDQuNC00ZHRgiDQuNGFINC+0YLQv9GA0LDQstC60LBcclxuICBjb25zdCBbc3RhdHVzLCBzdGF0dXNDXSA9IHVzZVN0YXRlKDApIC8vMCAtIGRpc2Nvbm5lY3RlZCwgMSAtIGVzdGFibGlzaGluZyBhIGNvbm5lY3Rpb24sIDIgLSBjb25uZWN0ZWQgXHJcbiAgY29uc3Qgd3MgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBwYyA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGNoYW5uZWwgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBjaGF0QmxvY2sgPSB1c2VSZWYobnVsbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXRCbG9jay5jdXJyZW50LnNjcm9sbFRvcCA+IGNoYXRCbG9jay5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGNoYXRCbG9jay5jdXJyZW50Lm9mZnNldEhlaWdodCAtIDMwMCkge1xyXG4gICAgICBjaGF0QmxvY2suY3VycmVudC5zY3JvbGxUb3AgPSBjaGF0QmxvY2suY3VycmVudC5zY3JvbGxIZWlnaHRcclxuICAgIH1cclxuICB9LCBbY2hhdF0pXHJcbiAgY29uc3QgY2xvc2VBbGxDb25uZWN0aW9ucyA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNoYW5uZWwuY3VycmVudC5jbG9zZSgpXHJcbiAgICAgIHBjLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgICB3cy5jdXJyZW50LmNsb3NlKClcclxuICAgIH0gY2F0Y2ggeyB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzID09PSAwKSB7XHJcbiAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5zeXNOZXcgfSlcclxuICAgIH1cclxuICB9LCBbc3RhdHVzXSlcclxuICBjb25zdCBhZGRNc2cgPSBvYmogPT4gY2hhdEMoKG9sZFN0YXRlKSA9PiBbLi4ub2xkU3RhdGUsIG9ial0pXHJcbiAgY29uc3QgZmlsZVNldEF0dHIgPSAoaWQsIGF0dHIsIHZhbHVlKSA9PiBjaGF0QyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLm1hcChvYmogPT4gb2JqLmlkID09PSBpZCA/IHsgLi4ub2JqLCBbYXR0cl06IHZhbHVlIH0gOiBvYmopKVxyXG5cclxuICBjb25zdCBmaWxlRGlzcGxheSA9IChlKSA9PiBmaWxlc0MocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIC4uLmUudGFyZ2V0LmZpbGVzXSlcclxuICBjb25zdCBmaWxlRXhjbHVkZSA9IChmaWxlKSA9PiBmaWxlc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZS5maWx0ZXIoZiA9PiBmICE9PSBmaWxlKSlcclxuICBmdW5jdGlvbiBjcmVhdGVBdXhpbGlhcnlJbmZvKCkge1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0ZTogTWF0aC5mbG9vcihub3cgLyA2MDAwMCkgKiA2MDAwMCxcclxuICAgICAgaWQ6IG5vdyAlIDEwMDAwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsZURvd25sb2FkKGJsb2IsIG5hbWUpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGxpbmsuZG93bmxvYWQgPSBuYW1lXHJcbiAgICBsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXHJcbiAgICBsaW5rLmNsaWNrKClcclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwobGluay5ocmVmKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiBjbG9zZUFsbENvbm5lY3Rpb25zKClcclxuICB9LCBbXSlcclxuXHJcbiAgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICBjbG9zZUFsbENvbm5lY3Rpb25zKClcclxuICAgIHN0YXR1c0MoMClcclxuICB9XHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcblxyXG4gICAgc3RhdHVzQygxKVxyXG4gICAgZnVuY3Rpb24gY2hhbm5lbFNldEhhbmRsZXJzKGNobmwpIHtcclxuICAgICAgbGV0IGZpbGVEYXRhID0ge31cclxuICAgICAgbGV0IGN1cnJlbnRDaHVuayA9IDBcclxuICAgICAgbGV0IGNodW5rcyA9IFtdXHJcbiAgICAgIGxldCBjdXJyZW50RmlsZVxyXG4gICAgICBsZXQgcHJvZ3Jlc3NDb2VmID0gMVxyXG5cclxuICAgICAgY2hubC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLm9wZW5lZCB9KVxyXG4gICAgICAgIHN0YXR1c0MoMilcclxuICAgICAgICBjb250YWN0RWRpdChjb2RlLCAnbGFzdCcsIERhdGUubm93KCkpXHJcbiAgICAgIH1cclxuICAgICAgY2hubC5vbmNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlQWxsQ29ubmVjdGlvbnMoKVxyXG4gICAgICAgIHN0YXR1c0MoMClcclxuICAgICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogcHJvcHMuZGVzYy5tc2cuY2xvc2VkIH0pXHJcbiAgICAgIH1cclxuICAgICAgY2hubC5vbm1lc3NhZ2UgPSBlID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgeyB0eXBlLCBjb250ZW50IH0gPSBKU09OLnBhcnNlKGUuZGF0YSlcclxuICAgICAgICAgIGlmICh0eXBlID09PSAnbXNnJykge1xyXG4gICAgICAgICAgICBhZGRNc2coeyB0eXBlLCBjb250ZW50LCBjdXJyZW50OiBmYWxzZSwgLi4uY3JlYXRlQXV4aWxpYXJ5SW5mbygpIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XHJcbiAgICAgICAgICAgIGNodW5rcyA9IFtdXHJcbiAgICAgICAgICAgIGN1cnJlbnRDaHVuayA9IDBcclxuICAgICAgICAgICAgZmlsZURhdGEgPSBjb250ZW50XHJcbiAgICAgICAgICAgIHByb2dyZXNzQ29lZiA9IE1hdGguY2VpbChmaWxlRGF0YS5jaHVua3MgLyAxMDApXHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc0NvZWYgPCAxKSBwcm9ncmVzc0NvZWYgPSAxXHJcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlID0ge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxyXG4gICAgICAgICAgICAgIGN1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGVEYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgc2l6ZTogZmlsZURhdGEuc2l6ZSxcclxuICAgICAgICAgICAgICAuLi5jcmVhdGVBdXhpbGlhcnlJbmZvKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGRNc2coY3VycmVudEZpbGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICBjaHVua3MucHVzaChlLmRhdGEpXHJcbiAgICAgICAgICBjdXJyZW50Q2h1bmsrK1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRDaHVuayAlIHByb2dyZXNzQ29lZiA9PT0gMCkgZmlsZVNldEF0dHIoY3VycmVudEZpbGUuaWQsICdwcm9ncmVzcycsIE1hdGgucm91bmQoY3VycmVudENodW5rIC8gcHJvZ3Jlc3NDb2VmKSlcclxuICAgICAgICAgIGlmIChjdXJyZW50Q2h1bmsgPj0gZmlsZURhdGEuY2h1bmtzKSB7XHJcbiAgICAgICAgICAgIGZpbGVTZXRBdHRyKGN1cnJlbnRGaWxlLmlkLCAncHJvZ3Jlc3MnLCAxMDApXHJcbiAgICAgICAgICAgIGZpbGVTZXRBdHRyKGN1cnJlbnRGaWxlLmlkLCAnYmxvYicsIG5ldyBCbG9iKGNodW5rcykpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNoYW5uZWwuY3VycmVudCA9IGNobmxcclxuICAgIH1cclxuXHJcbiAgICAvL1dlYlNvY2tldCAoZXN0YWJsaXNoaW5nIGEgY29ubmVjdGlvbilcclxuICAgIGNvbnN0IHdzcyA9IG5ldyBXZWJTb2NrZXQocHJvcHMuc2VydmVyKVxyXG4gICAgY29uc3Qgc2VuZCA9ICh0eXBlLCBjb250ZW50KSA9PiB3c3Muc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGUsIGNvbnRlbnQgfSkpXHJcblxyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICBpY2VTZXJ2ZXJzOiBPYmplY3QuZW50cmllcyhwcm9wcy5pY2VTZXJ2ZXJzKS5tYXAob2JqID0+IG9ialsxXSlcclxuICAgIH1cclxuXHJcbiAgICAvL1dlYlJUQyBzZXR0aW5nc1xyXG4gICAgY29uc3QgUlRDcGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oY29uZmlnKVxyXG4gICAgUlRDcGMub25pY2VjYW5kaWRhdGUgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5jYW5kaWRhdGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlLmNhbmRpZGF0ZSkpXHJcbiAgICAgICAgc2VuZChcIm5ld2ljZVwiLCBlLmNhbmRpZGF0ZS50b0pTT04oKSlcclxuICAgICAgfSBlbHNlIGFkZE1zZyhcIkljZSBjYW5kaWRhdGVzINGD0YHRgtCw0L3QvtCy0LvQtdC90YsuINCe0LbQuNC00LDQvdC40LUg0LTQtdC50YHRgtCy0LjQuSDQsdGA0LDRg9C30LXRgNCwLlwiKVxyXG4gICAgfVxyXG4gICAgUlRDcGMub25kYXRhY2hhbm5lbCA9IGUgPT4gY2hhbm5lbFNldEhhbmRsZXJzKGUuY2hhbm5lbClcclxuXHJcbiAgICB3c3Mub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogXCLQo9C00LDQu9C+0YHRjCDQv9C+0LTQutC70Y7Rh9C40YLRjNGB0Y8g0LogbWlkZGxlLdGB0LXRgNCy0LXRgNGDXCIgfSlcclxuICAgICAgc2VuZCgnY29ubmVjdCcsIGNvZGUpXHJcbiAgICB9XHJcbiAgICB3c3Mub25tZXNzYWdlID0gZSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgY29udGVudCB9ID0gSlNPTi5wYXJzZShlLmRhdGEpXHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2Nvbm5lY3QnOlxyXG4gICAgICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IFwi0JrQvtC90YLQsNC60YIg0L3QsNC50LTQtdC9LiDQo9GB0YLQsNC90L7QstC60LAg0YHQvtC10LTQuNC90LXQvdC40Y8uLi5cIiB9KVxyXG4gICAgICAgICAgUlRDcGMub25uZWdvdGlhdGlvbm5lZWRlZCA9IGUgPT4ge1xyXG4gICAgICAgICAgICBSVENwYy5jcmVhdGVPZmZlcigpXHJcbiAgICAgICAgICAgICAgLnRoZW4ob2ZmZXIgPT4gUlRDcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihvZmZlcikpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2VuZChcIm9mZmVyXCIsIFJUQ3BjLmxvY2FsRGVzY3JpcHRpb24pKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2hhbm5lbFNldEhhbmRsZXJzKFJUQ3BjLmNyZWF0ZURhdGFDaGFubmVsKFwiY2hhbm5lbFwiKSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnb2ZmZXInOlxyXG4gICAgICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IFwi0JrQvtC90YLQsNC60YIg0L3QsNC50LTQtdC9LiDQo9GB0YLQsNC90L7QstC60LAg0YHQvtC10LTQuNC90LXQvdC40Y8uLi5cIiB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyB0eXBlLCBjb250ZW50IH0pXHJcbiAgICAgICAgICBSVENwYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGNvbnRlbnQpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBSVENwYy5jcmVhdGVBbnN3ZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oYW5zd2VyID0+IFJUQ3BjLnNldExvY2FsRGVzY3JpcHRpb24oYW5zd2VyKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2VuZChcImFuc3dlclwiLCBSVENwYy5sb2NhbERlc2NyaXB0aW9uKSlcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhbnN3ZXInOlxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyB0eXBlLCBjb250ZW50IH0pXHJcbiAgICAgICAgICBSVENwYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGNvbnRlbnQpKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm5ld2ljZVwiOlxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyB0eXBlLCBjb250ZW50IH0pXHJcbiAgICAgICAgICBSVENwYy5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjb250ZW50KSlcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3c3Mub25lcnJvciA9IGUgPT4gY29uc29sZS5sb2coJ01pZGRsZS1zZXJ2ZXIgY29ubmVjdGlvbiBlcnJvcicpXHJcbiAgICB3c3Mub25jbG9zZSA9IGUgPT4gY29uc29sZS5sb2coJ01pZGRsZS1zZXJ2ZXIgY29ubmVjdGlvbiBjbG9zZWQnKVxyXG4gICAgd3MuY3VycmVudCA9IHdzc1xyXG4gICAgcGMuY3VycmVudCA9IFJUQ3BjXHJcbiAgfVxyXG5cclxuICAvL1NFTkRcclxuICBmdW5jdGlvbiBzZW5kQ2hhbm5lbChtc2cpIHtcclxuICAgIGlmIChtc2cgIT09ICcnKSB7XHJcbiAgICAgIGNoYW5uZWwuY3VycmVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0eXBlOiAnbXNnJyxcclxuICAgICAgICBjb250ZW50OiBtc2csXHJcbiAgICAgIH0pKVxyXG4gICAgICBhZGRNc2coe1xyXG4gICAgICAgIHR5cGU6ICdtc2cnLFxyXG4gICAgICAgIGNvbnRlbnQ6IG1zZyxcclxuICAgICAgICBjdXJyZW50OiB0cnVlLFxyXG4gICAgICAgIC4uLmNyZWF0ZUF1eGlsaWFyeUluZm8oKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCAhPT0gMCAmJiAhZmlsZXNTZW5kaW5nKSB7XHJcbiAgICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxyXG4gICAgICBsZXQgY3VycmVudENodW5rID0gMFxyXG4gICAgICBsZXQgY3VycmVudEZpbGUgPSAwXHJcbiAgICAgIGxldCBwcm9ncmVzc0NvZWYgPSAwXHJcbiAgICAgIGxldCBtc2dPYmpcclxuICAgICAgY29uc3QgQllURVNfUEVSX0NIVU5LID0gODA5MlxyXG4gICAgICBmaWxlc1NlbmRpbmdDKHRydWUpXHJcblxyXG4gICAgICBmdW5jdGlvbiByZWFkTmV4dENodW5rKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Q2h1bmsgPT09IDApIHtcclxuICAgICAgICAgIGNoYW5uZWwuY3VycmVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZXNbY3VycmVudEZpbGVdLm5hbWUsXHJcbiAgICAgICAgICAgICAgY2h1bmtzOiBNYXRoLmZsb29yKGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplIC8gQllURVNfUEVSX0NIVU5LKSxcclxuICAgICAgICAgICAgICBzaXplOiBmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgbXNnT2JqID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnZmlsZScsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGJsb2I6IGZpbGVzW2N1cnJlbnRGaWxlXSxcclxuICAgICAgICAgICAgc2l6ZTogZmlsZXNbY3VycmVudEZpbGVdLnNpemUsXHJcbiAgICAgICAgICAgIG5hbWU6IGZpbGVzW2N1cnJlbnRGaWxlXS5uYW1lLFxyXG4gICAgICAgICAgICAuLi5jcmVhdGVBdXhpbGlhcnlJbmZvKClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByb2dyZXNzQ29lZiA9IE1hdGguY2VpbChmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSAvIEJZVEVTX1BFUl9DSFVOSyAvIDEwMClcclxuICAgICAgICAgIGFkZE1zZyhtc2dPYmopXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gQllURVNfUEVSX0NIVU5LICogY3VycmVudENodW5rXHJcbiAgICAgICAgY29uc3QgZW5kID0gTWF0aC5taW4oZmlsZXNbY3VycmVudEZpbGVdLnNpemUsIHN0YXJ0ICsgQllURVNfUEVSX0NIVU5LKVxyXG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZXNbY3VycmVudEZpbGVdLnNsaWNlKHN0YXJ0LCBlbmQpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBjaGFubmVsLmN1cnJlbnQuc2VuZChmaWxlUmVhZGVyLnJlc3VsdClcclxuICAgICAgICBpZiAoY3VycmVudENodW5rICUgcHJvZ3Jlc3NDb2VmID09PSAwKSBmaWxlU2V0QXR0cihtc2dPYmouaWQsICdwcm9ncmVzcycsIE1hdGgucm91bmQoY3VycmVudENodW5rIC8gcHJvZ3Jlc3NDb2VmKSlcclxuICAgICAgICBjdXJyZW50Q2h1bmsrK1xyXG4gICAgICAgIGlmIChjdXJyZW50Q2h1bmsgPiBNYXRoLmZsb29yKGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplIC8gQllURVNfUEVSX0NIVU5LKSkge1xyXG4gICAgICAgICAgZmlsZVNldEF0dHIobXNnT2JqLmlkLCAncHJvZ3Jlc3MnLCAxMDApXHJcbiAgICAgICAgICBjdXJyZW50RmlsZSsrXHJcbiAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gY3VycmVudEZpbGUpIHtcclxuICAgICAgICAgICAgY3VycmVudENodW5rID0gMFxyXG4gICAgICAgICAgICByZWFkTmV4dENodW5rKClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbGVzQyhbXSlcclxuICAgICAgICAgICAgZmlsZXNTZW5kaW5nQyhmYWxzZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgcmVhZE5leHRDaHVuaygpXHJcbiAgICAgIH1cclxuICAgICAgcmVhZE5leHRDaHVuaygpXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8v0J7RgtC/0YDQsNCy0LrQsCDRgdC+0L7QsdGJ0LXQvdC40Y8g0Lgg0LXQs9C+INC+0YLQvtCx0YDQsNC20LXQvdC40LUg0LIg0YfQsNGC0LVcclxuICBmdW5jdGlvbiBzZW5kbXNnKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc29sZS5sb2coeyBjaGFubmVsOiBjaGFubmVsLmN1cnJlbnQgfSlcclxuICAgIGlmIChjaGFubmVsLmN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGFkZE1zZyh7IHR5cGU6IFwic3lzXCIsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLm5vdHNlbnQgfSlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHsgY2hhbm5lbFN0YXRlOiBjaGFubmVsLmN1cnJlbnQucmVhZHlTdGF0ZSB9KVxyXG4gICAgaWYgKGNoYW5uZWwuY3VycmVudC5yZWFkeVN0YXRlICE9PSBcIm9wZW5cIikge1xyXG4gICAgICBzd2l0Y2ggKGNoYW5uZWwuY3VycmVudC5yZWFkeVN0YXRlKSB7XHJcbiAgICAgICAgY2FzZSBcImNvbm5lY3RpbmdcIjogcmV0dXJuIGFkZE1zZyh7IHR5cGU6IFwic3lzXCIsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLmNvbm5lY3RpbmcgfSlcclxuICAgICAgICBjYXNlIFwiY2xvc2luZ1wiOiByZXR1cm4gYWRkTXNnKHsgdHlwZTogXCJzeXNcIiwgY29udGVudDogcHJvcHMuZGVzYy5tc2cuY2xvc2luZyB9KVxyXG4gICAgICAgIGNhc2UgXCJjbG9zZVwiOiByZXR1cm4gYWRkTXNnKHsgdHlwZTogXCJzeXNcIiwgY29udGVudDogcHJvcHMuZGVzYy5tc2cuY2xvc2UgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VuZENoYW5uZWwoZS50YXJnZXQubXNnLnZhbHVlKVxyXG4gICAgZS50YXJnZXQubXNnLnZhbHVlID0gXCJcIlxyXG5cclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVN0YXR1cygpIHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgMDogcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17cy5yZWR9Pntwcm9wcy5kZXNjLnN0YXR1czB9PC9zcGFuPlxyXG4gICAgICBjYXNlIDE6IHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3Mub3JhbmdlfT57cHJvcHMuZGVzYy5zdGF0dXMxfTwvc3Bhbj5cclxuICAgICAgY2FzZSAyOiByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLmdyZWVufT57cHJvcHMuZGVzYy5zdGF0dXMyfTwvc3Bhbj5cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgJHtzLmVsZW1lbnR9ICR7ZGlzcGxheSA/IHMuZGlzcGxheSA6ICcnfWB9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuaW5mb30+XHJcbiAgICAgIDxkaXY+e25hbWUgPT09IHVuZGVmaW5lZCA/IHByb3BzLmRlc2MubmFtZWxlc3MgOiBuYW1lfTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5hZGRlZH06PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCB5ZWFyOiAnbnVtZXJpYycsIH0pfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MubGFzdENvbm5lY3Rpb259PC9zcGFuPlxyXG4gICAgICAgICAge2xhc3QgPT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLnN0YXR1czB9PC9zcGFuPlxyXG4gICAgICAgICAgICA6IDxzcGFuPntuZXcgRGF0ZShsYXN0KS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgeWVhcjogJ251bWVyaWMnIH0pfTwvc3Bhbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MuY29ubmVjdGlvbn06PC9zcGFuPlxyXG4gICAgICAgICAge2dldEVsZW1lbnRzQnlTdGF0dXMoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNoYXR9PlxyXG4gICAgICA8ZGl2IHJlZj17Y2hhdEJsb2NrfT5cclxuICAgICAgICB7Y2hhdC5tYXAoKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm1zZ1wiOiByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e29iai5jdXJyZW50ID8gcy5yaWdodCA6IHMubGVmdH0gPlxyXG4gICAgICAgICAgICAgIDxkaXY+e25ldyBEYXRlKG9iai5kYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbnV0ZTogJ251bWVyaWMnLCBob3VyOiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57b2JqLmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwiZmlsZVwiOiByZXR1cm4gPGRpdiBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7b2JqLmN1cnJlbnQgPyBzLnJpZ2h0IDogcy5sZWZ0fSAke3MuZmlsZX1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29iai5wcm9ncmVzcyA9PT0gMTAwIHx8IG9iai5jdXJyZW50ID8gKCkgPT4gZmlsZURvd25sb2FkKG9iai5ibG9iLCBvYmoubmFtZSkgOiBudWxsfT5cclxuICAgICAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmouZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW51dGU6ICdudW1lcmljJywgaG91cjogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxTdmcgbmFtZT1cInZhci9zYXZlLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e29iai5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57b2JqLnByb2dyZXNzfSU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e01hdGgucm91bmQob2JqLnNpemUgLyAxMDI0KX0ge3Byb3BzLmRlc2Mua2J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBjYXNlIFwic3lzXCI6IHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17cy5zeXN0ZW19PlxyXG4gICAgICAgICAgICAgIHtvYmouY29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAge3N0YXR1cyA9PT0gMCA/IDxidXR0b24gb25DbGljaz17c3RhcnR9Pntwcm9wcy5kZXNjLnF1ZXJ5TmV3fTwvYnV0dG9uPlxyXG4gICAgICAgICAgOiBzdGF0dXMgPT09IDEgPyA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlfT57cHJvcHMuZGVzYy5xdWVyeUNhbmNlbH08L2J1dHRvbj4gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kbXNnfT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtmaWxlc1NlbmRpbmcgPyB7IGRpc3BsYXk6ICdub25lJyB9IDoge319PlxyXG4gICAgICAgICAge2ZpbGVzLm1hcCgoZmlsZSwgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZSA9PiBmaWxlRG93bmxvYWQoZmlsZSwgZmlsZS5uYW1lKX0ga2V5PXtmaWxlLmxhc3RNb2RpZmllZH0+XHJcbiAgICAgICAgICAgICAgPFN2ZyBuYW1lPVwidmFyL2ZpbGUuc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57ZmlsZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZSA9PiBmaWxlRXhjbHVkZShmaWxlKX0+PFN2ZyBuYW1lPVwidmFyL3guc3ZnXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PntNYXRoLnJvdW5kKGZpbGUuc2l6ZSAvIDEwMjQpfSB7cHJvcHMuZGVzYy5rYn08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MuYXR0YWNofT5cclxuICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXtmaWxlc1NlbmRpbmd9IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgb25DaGFuZ2U9e2ZpbGVEaXNwbGF5fSAvPlxyXG4gICAgICAgICAgICA8U3ZnIG5hbWU9XCJ2YXIvY2xpcC5zdmdcIiAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBhdXRvQ29tcGxldGU9XCJmYWxzZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1zZ1wiIC8+XHJcbiAgICAgICAgICA8bGFiZWwgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnNlbmR9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgIDxTdmcgbmFtZT1cInZhci9zZW5kLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=