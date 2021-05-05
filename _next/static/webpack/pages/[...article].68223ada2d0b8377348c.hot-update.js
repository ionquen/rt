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
        wss.close();
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
      send("newice", e.candidate);

      if (e.candidate) {} else addMsg("Ice candidates установлены. Ожидание действий браузера.");
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
          channelSetHandlers(RTCpc.createDataChannel("channel"));
          addMsg({
            type: 'sys',
            content: "Контакт найден. Установка соединения..."
          });
          RTCpc.createOffer().then(function (offer) {
            return RTCpc.setLocalDescription(offer);
          }).then(function () {
            return send("offer", RTCpc.localDescription);
          });
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

    if (channel.current === null) {
      return addMsg({
        type: "sys",
        content: props.desc.msg.notsent
      });
    }

    if (channel.current !== null || channel.current.readyState !== "open") {
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
          lineNumber: 413,
          columnNumber: 22
        }, this);

      case 1:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.orange,
          children: props.desc.status1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 22
        }, this);

      case 2:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.green,
          children: props.desc.status2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 415,
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
        lineNumber: 420,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.added, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(date).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.lastConnection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 11
          }, this), last === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.status0
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(last).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.connection, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 11
          }, this), getElementsByStatus()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 419,
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
                  lineNumber: 444,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: obj.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 445,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 443,
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
                  lineNumber: 450,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  name: "var/save.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 451,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: obj.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 453,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [obj.progress, "%"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 454,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [Math.round(obj.size / 1024), " ", props.desc.kb]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 455,
                    columnNumber: 17
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 452,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 447,
                columnNumber: 33
              }, _this2);

            case "sys":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.system,
                children: obj.content
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 458,
                columnNumber: 32
              }, _this2);
          }
        }), status === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: start,
          children: props.desc.queryNew
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 25
        }, this) : status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: close,
          children: props.desc.queryCancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 28
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 440,
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
                  lineNumber: 472,
                  columnNumber: 15
                }, _this2)
              }, file.lastModified, false, {
                fileName: _jsxFileName,
                lineNumber: 471,
                columnNumber: 13
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: file.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 475,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  onClick: function onClick(e) {
                    return fileExclude(file);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    name: "var/x.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 476,
                    columnNumber: 53
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 476,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [Math.round(file.size / 1024), " ", props.desc.kb]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 477,
                  columnNumber: 15
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 474,
                columnNumber: 13
              }, _this2)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 470,
              columnNumber: 39
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 469,
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
              lineNumber: 484,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/clip.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 485,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 483,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            autoComplete: "false",
            type: "text",
            name: "msg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "data-tooltip": props.desc.send,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 489,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/send.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 488,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 468,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 418,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UcmFuc2Zlci5qcyJdLCJuYW1lcyI6WyJUcmFuc2ZlciIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRlZCIsImFkZGVkQyIsImN1cnJlbnQiLCJjdXJyZW50QyIsImNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbnNDIiwid2FpdGluZyIsIndhaXRpbmdDIiwicXJEaXNwbGF5IiwicXJEaXNwbGF5QyIsImxvY2FsQ29kZSIsImxvY2FsQ29kZUMiLCJ1c2VyS2V5IiwidXNlcktleUMiLCJ1c2VyS2V5TGluayIsInVzZXJLZXlMaW5rQyIsImJsb2NrIiwidXNlUmVmIiwid3MiLCJxcmNvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFzUGF0aCIsImNvcHlDb2RlIiwicmVjcmVhdGVDb2RlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3S2V5IiwidG9TdHJpbmciLCJzdWJzdHIiLCJwYXRobmFtZSIsInF1ZXJ5Iiwia2V5IiwiY29udGFjdEVkaXQiLCJmaWVsZCIsInZhbHVlIiwicHJldlN0YXRlIiwibWFwIiwib2JqIiwiY29kZSIsInFyR2VuIiwicXIiLCJ0b0NhbnZhcyIsInVzZUVmZmVjdCIsImNvbm5lY3Rpb25zMSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjbG9zZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsIm1hdGNoIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzaG93Q29ubmVjdGlvbiIsIm5ld0Nvbm5lY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJXZWJTb2NrZXQiLCJkZXNjIiwic2VydmVyIiwib25tZXNzYWdlIiwiZGF0YSIsInR5cGUiLCJjb250ZW50IiwidGFyZ2V0IiwibmV3Y29kZSIsInNvcnQiLCJqb2luIiwib25vcGVuIiwic2VuZCIsIndzQ2xvc2UiLCJyZW1vdmVDb25uZWN0aW9uIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzIiwibWFpbiIsImRpc3BsYXkiLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN0cmluZzEiLCJ5b3VyQ29kZSIsImNsaWNrVG9Db3B5Iiwic3RyaW5nMiIsInJldHJ5IiwiZm9ybSIsImlucHV0Q29kZVBsYWNlaG9sZGVyIiwiYWRkQ29udGFjdCIsImhlYWRlcjMiLCJjb3B5IiwicXJUcnVlIiwicXJGYWxzZSIsImdlbmVyYXRlIiwibG9zcyIsInJlY3JlYXRlIiwibmFtZSIsImxhc3QiLCJjb250YWN0cyIsImFkZCIsIm5hbWVsZXNzIiwic3RvcFByb3BhZ2F0aW9uIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwieWVhciIsImVtcHR5IiwiRWxlbWVudCIsImNoYXQiLCJjaGF0QyIsImZpbGVzIiwiZmlsZXNDIiwiZmlsZXNTZW5kaW5nIiwiZmlsZXNTZW5kaW5nQyIsInN0YXR1cyIsInN0YXR1c0MiLCJwYyIsImNoYW5uZWwiLCJjaGF0QmxvY2siLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbG9zZUFsbENvbm5lY3Rpb25zIiwiYWRkTXNnIiwibXNnIiwic3lzTmV3Iiwib2xkU3RhdGUiLCJmaWxlU2V0QXR0ciIsImlkIiwiYXR0ciIsImZpbGVEaXNwbGF5IiwiZmlsZUV4Y2x1ZGUiLCJmaWxlIiwiZiIsImNyZWF0ZUF1eGlsaWFyeUluZm8iLCJmbG9vciIsImZpbGVEb3dubG9hZCIsImJsb2IiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJzdGFydCIsImNoYW5uZWxTZXRIYW5kbGVycyIsImNobmwiLCJmaWxlRGF0YSIsImN1cnJlbnRDaHVuayIsImNodW5rcyIsImN1cnJlbnRGaWxlIiwicHJvZ3Jlc3NDb2VmIiwib3BlbmVkIiwid3NzIiwib25jbG9zZSIsImNsb3NlZCIsImNlaWwiLCJzaXplIiwicHVzaCIsIkJsb2IiLCJjb25maWciLCJpY2VTZXJ2ZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsIlJUQ3BjIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvbmljZWNhbmRpZGF0ZSIsImNhbmRpZGF0ZSIsIm9uZGF0YWNoYW5uZWwiLCJjcmVhdGVEYXRhQ2hhbm5lbCIsImNyZWF0ZU9mZmVyIiwidGhlbiIsIm9mZmVyIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImxvY2FsRGVzY3JpcHRpb24iLCJjb25zb2xlIiwibG9nIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJSVENTZXNzaW9uRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXIiLCJhbnN3ZXIiLCJhZGRJY2VDYW5kaWRhdGUiLCJSVENJY2VDYW5kaWRhdGUiLCJvbmVycm9yIiwic2VuZENoYW5uZWwiLCJsZW5ndGgiLCJyZWFkTmV4dENodW5rIiwiQllURVNfUEVSX0NIVU5LIiwibXNnT2JqIiwiZW5kIiwibWluIiwiZmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2xpY2UiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0Iiwic2VuZG1zZyIsIm5vdHNlbnQiLCJyZWFkeVN0YXRlIiwiY29ubmVjdGluZyIsImNsb3NpbmciLCJnZXRFbGVtZW50c0J5U3RhdHVzIiwicmVkIiwic3RhdHVzMCIsIm9yYW5nZSIsInN0YXR1czEiLCJncmVlbiIsInN0YXR1czIiLCJlbGVtZW50IiwiaW5mbyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImxhc3RDb25uZWN0aW9uIiwiY29ubmVjdGlvbiIsImluZGV4IiwicmlnaHQiLCJsZWZ0IiwibWludXRlIiwiaG91ciIsInByb2dyZXNzIiwia2IiLCJzeXN0ZW0iLCJxdWVyeU5ldyIsInF1ZXJ5Q2FuY2VsIiwibGFzdE1vZGlmaWVkIiwiYXR0YWNoIl0sIm1hcHBpbmdzIjoi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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFLRTtBQUFPLHdCQUFZLEVBQUMsT0FBcEI7QUFBNEIsZ0JBQUksRUFBQyxNQUFqQztBQUF3QyxnQkFBSSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFNRTtBQUFPLDRCQUFjOUksS0FBSyxDQUFDdUUsSUFBTixDQUFXVyxJQUFoQztBQUFBLG9DQUNFO0FBQU8sa0JBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyw0Q0FBRDtBQUFLLGtCQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQThFRDs7SUFqVlFxQyxPOztNQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS42ODIyM2FkYTJkMGI4Mzc3MzQ4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHFyIGZyb20gJ3FyY29kZSdcclxuXHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy90cmFuc2Zlci5zdHlsJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5pbXBvcnQgU3ZnIGZyb20gJy4uL1N2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zZmVyKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFthZGRlZCwgYWRkZWRDXSA9IHVzZVN0YXRlKFtdKS8v0JzQsNGB0YHQuNCyINC00L7QsdCw0LLQu9C10L3QvdGL0YUg0YPRgdGC0YDQvtC50YHRgtCyXHJcbiAgY29uc3QgW2N1cnJlbnQsIGN1cnJlbnRDXSA9IHVzZVN0YXRlKCcnKS8v0J7RgtC+0LHRgNCw0LbQsNC10LzQvtC1INC/0L7QtNC60LvRjtGH0LXQvdC40LUgKCcnID0g0YHQvtC30LTQsNGC0Ywg0L3QvtCy0L7QtSlcclxuICBjb25zdCBbY29ubmVjdGlvbnMsIGNvbm5lY3Rpb25zQ10gPSB1c2VTdGF0ZShbXSkvL9Cc0LDRgdGB0LjQsiDQutC70Y7Rh9C10Lkg0LLRgdC10YUg0LDQutGC0LjQstC90YvRhSDQv9C+0LTQutC70Y7Rh9C10L3QuNC5XHJcblxyXG4gIGNvbnN0IFt3YWl0aW5nLCB3YWl0aW5nQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcXJEaXNwbGF5LCBxckRpc3BsYXlDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2NhbENvZGUsIGxvY2FsQ29kZUNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdXNlcktleSwgdXNlcktleUNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdXNlcktleUxpbmssIHVzZXJLZXlMaW5rQ10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHdzID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgcXJjb2RlID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBmdW5jdGlvbiBjb3B5TGluaygpIHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYGh0dHBzOi8vcmVndG9vbC5uZXQke3JvdXRlci5hc1BhdGh9P2tleT0ke3VzZXJLZXl9YCkgfVxyXG4gIGZ1bmN0aW9uIGNvcHlDb2RlKCkgeyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChgJHtsb2NhbENvZGV9YCkgfVxyXG4gIGZ1bmN0aW9uIHJlY3JlYXRlQ29kZShhc1BhdGgpIHsvL2FuZCB1cGRhdGUgbGlua1xyXG4gICAgbG9jYWxDb2RlQyhNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKVxyXG4gICAgY29uc3QgbmV3S2V5ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpXHJcbiAgICB1c2VyS2V5QyhuZXdLZXkpXHJcbiAgICB1c2VyS2V5TGlua0MoPExpbmsgaHJlZj17eyBwYXRobmFtZTogYXNQYXRoLCBxdWVyeTogeyBrZXk6IG5ld0tleSB9IH19PjxhPmh0dHBzOi8vcmVndG9vbC5uZXR7YXNQYXRofT9rZXk9e25ld0tleX08L2E+PC9MaW5rPilcclxuICAgIHFyRGlzcGxheUMoZmFsc2UpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNvbnRhY3RFZGl0KGtleSwgZmllbGQsIHZhbHVlKSB7XHJcbiAgICBhZGRlZEMocHJldlN0YXRlID0+IHByZXZTdGF0ZS5tYXAob2JqID0+IG9iai5jb2RlID09PSBrZXkgPyB7IC4uLm9iaiwgW2ZpZWxkXTogdmFsdWUgfSA6IG9iaikpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHFyR2VuKCkge1xyXG4gICAgcXIudG9DYW52YXMocXJjb2RlLmN1cnJlbnQsIGBodHRwczovL3JlZ3Rvb2wubmV0JHtyb3V0ZXIuYXNQYXRofT9rZXk9JHt1c2VyS2V5fWApXHJcbiAgICBxckRpc3BsYXlDKHRydWUpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWNyZWF0ZUNvZGUocm91dGVyLmFzUGF0aClcclxuICAgIGNvbnN0IGNvbm5lY3Rpb25zMSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmFuc2ZlckNvbm5lY3Rpb25zJylcclxuICAgIGlmIChjb25uZWN0aW9uczEgIT09IG51bGwpIGFkZGVkQyhKU09OLnBhcnNlKGNvbm5lY3Rpb25zMSkpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHdzLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgICB9IGNhdGNoIHsgfVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHJhbnNmZXJDb25uZWN0aW9ucycsIEpTT04uc3RyaW5naWZ5KGFkZGVkKSlcclxuICB9LCBbYWRkZWRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmtleSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgIGFkZGVkQyhwcmV2U3RhdGUgPT4gW3sgY29kZTogcm91dGVyLnF1ZXJ5LmtleSwgZGF0ZTogRGF0ZS5ub3coKSB9LCAuLi5wcmV2U3RhdGVdKVxyXG4gICAgY29uc3QgYXNQYXRoID0gcm91dGVyLmFzUGF0aC5tYXRjaCgvXiguKilcXD8vKVsxXVxyXG4gICAgcm91dGVyLnJlcGxhY2UoYXNQYXRoLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KVxyXG4gICAgc2hvd0Nvbm5lY3Rpb24ocm91dGVyLnF1ZXJ5LmtleSlcclxuICAgIHJlY3JlYXRlQ29kZShhc1BhdGgpXHJcbiAgfSwgW3JvdXRlci5xdWVyeS5rZXldKVxyXG5cclxuICBmdW5jdGlvbiBuZXdDb25uZWN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgd2FpdGluZ0ModHJ1ZSlcclxuICAgIHdzLmN1cnJlbnQgPSBuZXcgV2ViU29ja2V0KHByb3BzLmRlc2Muc2VydmVyKVxyXG4gICAgd3MuY3VycmVudC5vbm1lc3NhZ2UgPSBlID0+IHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBjb250ZW50IH0gPSBKU09OLnBhcnNlKGUuZGF0YSlcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc3dhcCc6XHJcbiAgICAgICAgICBhZGRlZEMocHJldlN0YXRlID0+IFt7IGNvZGU6IGNvbnRlbnQsIGRhdGU6IERhdGUubm93KCkgfSwgLi4ucHJldlN0YXRlXSlcclxuICAgICAgICAgIHNob3dDb25uZWN0aW9uKGNvbnRlbnQpXHJcbiAgICAgICAgICB3cy5jdXJyZW50LmNsb3NlKClcclxuICAgICAgICAgIHdhaXRpbmdDKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2RlID0gZS50YXJnZXQuY29kZS52YWx1ZVxyXG4gICAgY29uc3QgbmV3Y29kZSA9IFtjb2RlLCBsb2NhbENvZGVdLnNvcnQoKS5qb2luKCcnKVxyXG4gICAgd3MuY3VycmVudC5vbm9wZW4gPSAoKSA9PiB3cy5jdXJyZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnc3dhcCcsIGNvbnRlbnQ6IG5ld2NvZGUgfSkpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHdzQ2xvc2UoKSB7XHJcbiAgICB3YWl0aW5nQyhmYWxzZSlcclxuICAgIHdzLmN1cnJlbnQuY2xvc2UoKVxyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVDb25uZWN0aW9uKGNvZGUpIHtcclxuICAgIGFkZGVkQyhhZGRlZC5maWx0ZXIob2JqID0+IG9iai5jb2RlID09PSBjb2RlID8gZmFsc2UgOiB0cnVlKSlcclxuICAgIGN1cnJlbnRDKCcnKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzaG93Q29ubmVjdGlvbihrZXkpIHtcclxuICAgIGlmICghY29ubmVjdGlvbnMuaW5jbHVkZXMoa2V5KSkgY29ubmVjdGlvbnNDKFsuLi5jb25uZWN0aW9ucywga2V5XSlcclxuICAgIGN1cnJlbnRDKGtleSlcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1haW59PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cy5uZXd9ICR7Y3VycmVudCA9PT0gJycgPyBzLmRpc3BsYXkgOiAnJ31gfT5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmhlYWRlcjF9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGVhZGVyMn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmNvZGUuc3RyaW5nMX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmNvZGUueW91ckNvZGV9OiA8c3BhbiBvbkNsaWNrPXtjb3B5Q29kZX0gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLmNsaWNrVG9Db3B5fSBjbGFzc05hbWU9e3MuY29kZX0+e2xvY2FsQ29kZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5jb2RlLnN0cmluZzJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAge3dhaXRpbmcgP1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5jb2RlLndhaXRpbmd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17d3NDbG9zZX0+e3Byb3BzLmRlc2MuY29kZS5yZXRyeX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOiA8Zm9ybSBjbGFzc05hbWU9e3MuZm9ybX0gb25TdWJtaXQ9e25ld0Nvbm5lY3R9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9e3Byb3BzLmRlc2MuY29kZS5pbnB1dENvZGVQbGFjZWhvbGRlcn0gYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImNvZGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXtwcm9wcy5kZXNjLmNvZGUuYWRkQ29udGFjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmhlYWRlcjN9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5xci5zdHJpbmcxfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MucXIuc3RyaW5nMn08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3VzZXJLZXlMaW5rfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb3B5TGlua30+e3Byb3BzLmRlc2MucXIuY29weX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cXJEaXNwbGF5ID8gcy5xclRydWUgOiBzLnFyRmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e3FyY29kZX0gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cXJHZW59Pntwcm9wcy5kZXNjLnFyLmdlbmVyYXRlfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmxvc3N9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlY3JlYXRlQ29kZX0+e3Byb3BzLmRlc2MucmVjcmVhdGV9PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7YWRkZWQubWFwKCh7IGNvZGUsIG5hbWUsIGRhdGUsIGxhc3QgfSkgPT4gIWNvbm5lY3Rpb25zLmluY2x1ZGVzKGNvZGUpID8gbnVsbCA6XHJcbiAgICAgICAgPEVsZW1lbnQgZGlzcGxheT17Y3VycmVudCA9PT0gY29kZX0gY29kZT17Y29kZX0ga2V5PXtjb2RlfSBuYW1lPXtuYW1lfSBkYXRlPXtkYXRlfSBsYXN0PXtsYXN0fSBjb250YWN0RWRpdD17Y29udGFjdEVkaXR9IHByb3BzPXtwcm9wc30gLz5cclxuICAgICAgKX1cclxuICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFjdHN9PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGN1cnJlbnRDKCcnKX0+e3Byb3BzLmRlc2MuYWRkfTwvYnV0dG9uPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthZGRlZC5tYXAob2JqID0+IDxkaXYga2V5PXtvYmouY29kZX0+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNob3dDb25uZWN0aW9uKG9iai5jb2RlKX0+e29iai5uYW1lID09PSB1bmRlZmluZWQgPyBwcm9wcy5kZXNjLm5hbWVsZXNzIDogb2JqLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHJlbW92ZUNvbm5lY3Rpb24ob2JqLmNvZGUpIH19PjxTdmcgbmFtZT1cInZhci94LnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmouZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIHdlZWtkYXk6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICAgIDxkaXY+e29iai5sYXN0ID09PSB1bmRlZmluZWQgPyBwcm9wcy5kZXNjLmVtcHR5IDogbmV3IERhdGUob2JqLmxhc3QpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCB3ZWVrZGF5OiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZnVuY3Rpb24gRWxlbWVudCh7IGNvZGUsIG5hbWUsIGRhdGUsIGxhc3QsIGRpc3BsYXksIGNvbnRhY3RFZGl0LCBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW2NoYXQsIGNoYXRDXSA9IHVzZVN0YXRlKFtdKS8v0KHQvtC+0LHRidC10L3QuNGPINCyINGH0LDRgtC1XHJcbiAgY29uc3QgW2ZpbGVzLCBmaWxlc0NdID0gdXNlU3RhdGUoW10pLy/QpNCw0LnQu9GLINC90LAg0L7RgtC/0YDQsNCy0LrRg1xyXG4gIGNvbnN0IFtmaWxlc1NlbmRpbmcsIGZpbGVzU2VuZGluZ0NdID0gdXNlU3RhdGUoZmFsc2UpLy/QodC60YDRi9Cy0LDRgtGMINGE0LDQudC70YsgKNC4INC90LUg0L7RgtC/0YDQsNCy0LvRj9GC0Ywg0LjRhSDQttC1KSDQtdGB0LvQuCDQuNC00ZHRgiDQuNGFINC+0YLQv9GA0LDQstC60LBcclxuICBjb25zdCBbc3RhdHVzLCBzdGF0dXNDXSA9IHVzZVN0YXRlKDApIC8vMCAtIGRpc2Nvbm5lY3RlZCwgMSAtIGVzdGFibGlzaGluZyBhIGNvbm5lY3Rpb24sIDIgLSBjb25uZWN0ZWQgXHJcbiAgY29uc3Qgd3MgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBwYyA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGNoYW5uZWwgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBjaGF0QmxvY2sgPSB1c2VSZWYobnVsbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoYXRCbG9jay5jdXJyZW50LnNjcm9sbFRvcCA+IGNoYXRCbG9jay5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGNoYXRCbG9jay5jdXJyZW50Lm9mZnNldEhlaWdodCAtIDMwMCkge1xyXG4gICAgICBjaGF0QmxvY2suY3VycmVudC5zY3JvbGxUb3AgPSBjaGF0QmxvY2suY3VycmVudC5zY3JvbGxIZWlnaHRcclxuICAgIH1cclxuICB9LCBbY2hhdF0pXHJcbiAgY29uc3QgY2xvc2VBbGxDb25uZWN0aW9ucyA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNoYW5uZWwuY3VycmVudC5jbG9zZSgpXHJcbiAgICAgIHBjLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgICB3cy5jdXJyZW50LmNsb3NlKClcclxuICAgIH0gY2F0Y2ggeyB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzID09PSAwKSB7XHJcbiAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5zeXNOZXcgfSlcclxuICAgIH1cclxuICB9LCBbc3RhdHVzXSlcclxuICBjb25zdCBhZGRNc2cgPSBvYmogPT4gY2hhdEMoKG9sZFN0YXRlKSA9PiBbLi4ub2xkU3RhdGUsIG9ial0pXHJcbiAgY29uc3QgZmlsZVNldEF0dHIgPSAoaWQsIGF0dHIsIHZhbHVlKSA9PiBjaGF0QyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLm1hcChvYmogPT4gb2JqLmlkID09PSBpZCA/IHsgLi4ub2JqLCBbYXR0cl06IHZhbHVlIH0gOiBvYmopKVxyXG5cclxuICBjb25zdCBmaWxlRGlzcGxheSA9IChlKSA9PiBmaWxlc0MocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIC4uLmUudGFyZ2V0LmZpbGVzXSlcclxuICBjb25zdCBmaWxlRXhjbHVkZSA9IChmaWxlKSA9PiBmaWxlc0MocHJldlN0YXRlID0+IHByZXZTdGF0ZS5maWx0ZXIoZiA9PiBmICE9PSBmaWxlKSlcclxuICBmdW5jdGlvbiBjcmVhdGVBdXhpbGlhcnlJbmZvKCkge1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0ZTogTWF0aC5mbG9vcihub3cgLyA2MDAwMCkgKiA2MDAwMCxcclxuICAgICAgaWQ6IG5vdyAlIDEwMDAwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsZURvd25sb2FkKGJsb2IsIG5hbWUpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGxpbmsuZG93bmxvYWQgPSBuYW1lXHJcbiAgICBsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXHJcbiAgICBsaW5rLmNsaWNrKClcclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwobGluay5ocmVmKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiBjbG9zZUFsbENvbm5lY3Rpb25zKClcclxuICB9LCBbXSlcclxuXHJcbiAgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICBjbG9zZUFsbENvbm5lY3Rpb25zKClcclxuICAgIHN0YXR1c0MoMClcclxuICB9XHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcblxyXG4gICAgc3RhdHVzQygxKVxyXG4gICAgZnVuY3Rpb24gY2hhbm5lbFNldEhhbmRsZXJzKGNobmwpIHtcclxuICAgICAgbGV0IGZpbGVEYXRhID0ge31cclxuICAgICAgbGV0IGN1cnJlbnRDaHVuayA9IDBcclxuICAgICAgbGV0IGNodW5rcyA9IFtdXHJcbiAgICAgIGxldCBjdXJyZW50RmlsZVxyXG4gICAgICBsZXQgcHJvZ3Jlc3NDb2VmID0gMVxyXG5cclxuICAgICAgY2hubC5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLm9wZW5lZCB9KVxyXG4gICAgICAgIHN0YXR1c0MoMilcclxuICAgICAgICBjb250YWN0RWRpdChjb2RlLCAnbGFzdCcsIERhdGUubm93KCkpXHJcbiAgICAgICAgd3NzLmNsb3NlKClcclxuICAgICAgfVxyXG4gICAgICBjaG5sLm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VBbGxDb25uZWN0aW9ucygpXHJcbiAgICAgICAgc3RhdHVzQygwKVxyXG4gICAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jbG9zZWQgfSlcclxuICAgICAgfVxyXG4gICAgICBjaG5sLm9ubWVzc2FnZSA9IGUgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IHR5cGUsIGNvbnRlbnQgfSA9IEpTT04ucGFyc2UoZS5kYXRhKVxyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdtc2cnKSB7XHJcbiAgICAgICAgICAgIGFkZE1zZyh7IHR5cGUsIGNvbnRlbnQsIGN1cnJlbnQ6IGZhbHNlLCAuLi5jcmVhdGVBdXhpbGlhcnlJbmZvKCkgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgICAgICAgY2h1bmtzID0gW11cclxuICAgICAgICAgICAgY3VycmVudENodW5rID0gMFxyXG4gICAgICAgICAgICBmaWxlRGF0YSA9IGNvbnRlbnRcclxuICAgICAgICAgICAgcHJvZ3Jlc3NDb2VmID0gTWF0aC5jZWlsKGZpbGVEYXRhLmNodW5rcyAvIDEwMClcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzQ29lZiA8IDEpIHByb2dyZXNzQ29lZiA9IDFcclxuICAgICAgICAgICAgY3VycmVudEZpbGUgPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgICAgY3VycmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZURhdGEubmFtZSxcclxuICAgICAgICAgICAgICBzaXplOiBmaWxlRGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgIC4uLmNyZWF0ZUF1eGlsaWFyeUluZm8oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZE1zZyhjdXJyZW50RmlsZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSlcclxuICAgICAgICAgIGN1cnJlbnRDaHVuaysrXHJcbiAgICAgICAgICBpZiAoY3VycmVudENodW5rICUgcHJvZ3Jlc3NDb2VmID09PSAwKSBmaWxlU2V0QXR0cihjdXJyZW50RmlsZS5pZCwgJ3Byb2dyZXNzJywgTWF0aC5yb3VuZChjdXJyZW50Q2h1bmsgLyBwcm9ncmVzc0NvZWYpKVxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA+PSBmaWxlRGF0YS5jaHVua3MpIHtcclxuICAgICAgICAgICAgZmlsZVNldEF0dHIoY3VycmVudEZpbGUuaWQsICdwcm9ncmVzcycsIDEwMClcclxuICAgICAgICAgICAgZmlsZVNldEF0dHIoY3VycmVudEZpbGUuaWQsICdibG9iJywgbmV3IEJsb2IoY2h1bmtzKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2hhbm5lbC5jdXJyZW50ID0gY2hubFxyXG4gICAgfVxyXG5cclxuICAgIC8vV2ViU29ja2V0IChlc3RhYmxpc2hpbmcgYSBjb25uZWN0aW9uKVxyXG4gICAgY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldChwcm9wcy5zZXJ2ZXIpXHJcbiAgICBjb25zdCBzZW5kID0gKHR5cGUsIGNvbnRlbnQpID0+IHdzcy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZSwgY29udGVudCB9KSlcclxuXHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIGljZVNlcnZlcnM6IE9iamVjdC5lbnRyaWVzKHByb3BzLmljZVNlcnZlcnMpLm1hcChvYmogPT4gb2JqWzFdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vV2ViUlRDIHNldHRpbmdzXHJcbiAgICBjb25zdCBSVENwYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWcpXHJcbiAgICBSVENwYy5vbmljZWNhbmRpZGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgIHNlbmQoXCJuZXdpY2VcIiwgZS5jYW5kaWRhdGUpXHJcbiAgICAgIGlmIChlLmNhbmRpZGF0ZSkge1xyXG4gICAgICB9IGVsc2UgYWRkTXNnKFwiSWNlIGNhbmRpZGF0ZXMg0YPRgdGC0LDQvdC+0LLQu9C10L3Riy4g0J7QttC40LTQsNC90LjQtSDQtNC10LnRgdGC0LLQuNC5INCx0YDQsNGD0LfQtdGA0LAuXCIpXHJcbiAgICB9XHJcbiAgICBSVENwYy5vbmRhdGFjaGFubmVsID0gZSA9PiBjaGFubmVsU2V0SGFuZGxlcnMoZS5jaGFubmVsKVxyXG5cclxuICAgIHdzcy5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBcItCj0LTQsNC70L7RgdGMINC/0L7QtNC60LvRjtGH0LjRgtGM0YHRjyDQuiBtaWRkbGUt0YHQtdGA0LLQtdGA0YNcIiB9KVxyXG4gICAgICBzZW5kKCdjb25uZWN0JywgY29kZSlcclxuICAgIH1cclxuICAgIHdzcy5vbm1lc3NhZ2UgPSBlID0+IHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBjb250ZW50IH0gPSBKU09OLnBhcnNlKGUuZGF0YSlcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnY29ubmVjdCc6XHJcbiAgICAgICAgICBjaGFubmVsU2V0SGFuZGxlcnMoUlRDcGMuY3JlYXRlRGF0YUNoYW5uZWwoXCJjaGFubmVsXCIpKVxyXG4gICAgICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IFwi0JrQvtC90YLQsNC60YIg0L3QsNC50LTQtdC9LiDQo9GB0YLQsNC90L7QstC60LAg0YHQvtC10LTQuNC90LXQvdC40Y8uLi5cIiB9KVxyXG5cclxuICAgICAgICAgIFJUQ3BjLmNyZWF0ZU9mZmVyKClcclxuICAgICAgICAgICAgLnRoZW4ob2ZmZXIgPT4gUlRDcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihvZmZlcikpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHNlbmQoXCJvZmZlclwiLCBSVENwYy5sb2NhbERlc2NyaXB0aW9uKSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnb2ZmZXInOlxyXG4gICAgICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IFwi0JrQvtC90YLQsNC60YIg0L3QsNC50LTQtdC9LiDQo9GB0YLQsNC90L7QstC60LAg0YHQvtC10LTQuNC90LXQvdC40Y8uLi5cIiB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyB0eXBlLCBjb250ZW50IH0pXHJcbiAgICAgICAgICBSVENwYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGNvbnRlbnQpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBSVENwYy5jcmVhdGVBbnN3ZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oYW5zd2VyID0+IFJUQ3BjLnNldExvY2FsRGVzY3JpcHRpb24oYW5zd2VyKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2VuZChcImFuc3dlclwiLCBSVENwYy5sb2NhbERlc2NyaXB0aW9uKSlcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhbnN3ZXInOlxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyB0eXBlLCBjb250ZW50IH0pXHJcbiAgICAgICAgICBSVENwYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGNvbnRlbnQpKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm5ld2ljZVwiOlxyXG4gICAgICAgICAgY29uc29sZS5sb2coeyB0eXBlLCBjb250ZW50IH0pXHJcbiAgICAgICAgICBSVENwYy5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjb250ZW50KSlcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3c3Mub25lcnJvciA9IGUgPT4gY29uc29sZS5sb2coJ01pZGRsZS1zZXJ2ZXIgY29ubmVjdGlvbiBlcnJvcicpXHJcbiAgICB3c3Mub25jbG9zZSA9IGUgPT4gY29uc29sZS5sb2coJ01pZGRsZS1zZXJ2ZXIgY29ubmVjdGlvbiBjbG9zZWQnKVxyXG4gICAgd3MuY3VycmVudCA9IHdzc1xyXG4gICAgcGMuY3VycmVudCA9IFJUQ3BjXHJcbiAgfVxyXG5cclxuICAvL1NFTkRcclxuICBmdW5jdGlvbiBzZW5kQ2hhbm5lbChtc2cpIHtcclxuICAgIGlmIChtc2cgIT09ICcnKSB7XHJcbiAgICAgIGNoYW5uZWwuY3VycmVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0eXBlOiAnbXNnJyxcclxuICAgICAgICBjb250ZW50OiBtc2csXHJcbiAgICAgIH0pKVxyXG4gICAgICBhZGRNc2coe1xyXG4gICAgICAgIHR5cGU6ICdtc2cnLFxyXG4gICAgICAgIGNvbnRlbnQ6IG1zZyxcclxuICAgICAgICBjdXJyZW50OiB0cnVlLFxyXG4gICAgICAgIC4uLmNyZWF0ZUF1eGlsaWFyeUluZm8oKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCAhPT0gMCAmJiAhZmlsZXNTZW5kaW5nKSB7XHJcbiAgICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxyXG4gICAgICBsZXQgY3VycmVudENodW5rID0gMFxyXG4gICAgICBsZXQgY3VycmVudEZpbGUgPSAwXHJcbiAgICAgIGxldCBwcm9ncmVzc0NvZWYgPSAwXHJcbiAgICAgIGxldCBtc2dPYmpcclxuICAgICAgY29uc3QgQllURVNfUEVSX0NIVU5LID0gODA5MlxyXG4gICAgICBmaWxlc1NlbmRpbmdDKHRydWUpXHJcblxyXG4gICAgICBmdW5jdGlvbiByZWFkTmV4dENodW5rKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Q2h1bmsgPT09IDApIHtcclxuICAgICAgICAgIGNoYW5uZWwuY3VycmVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZXNbY3VycmVudEZpbGVdLm5hbWUsXHJcbiAgICAgICAgICAgICAgY2h1bmtzOiBNYXRoLmZsb29yKGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplIC8gQllURVNfUEVSX0NIVU5LKSxcclxuICAgICAgICAgICAgICBzaXplOiBmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgbXNnT2JqID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnZmlsZScsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGJsb2I6IGZpbGVzW2N1cnJlbnRGaWxlXSxcclxuICAgICAgICAgICAgc2l6ZTogZmlsZXNbY3VycmVudEZpbGVdLnNpemUsXHJcbiAgICAgICAgICAgIG5hbWU6IGZpbGVzW2N1cnJlbnRGaWxlXS5uYW1lLFxyXG4gICAgICAgICAgICAuLi5jcmVhdGVBdXhpbGlhcnlJbmZvKClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByb2dyZXNzQ29lZiA9IE1hdGguY2VpbChmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSAvIEJZVEVTX1BFUl9DSFVOSyAvIDEwMClcclxuICAgICAgICAgIGFkZE1zZyhtc2dPYmopXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gQllURVNfUEVSX0NIVU5LICogY3VycmVudENodW5rXHJcbiAgICAgICAgY29uc3QgZW5kID0gTWF0aC5taW4oZmlsZXNbY3VycmVudEZpbGVdLnNpemUsIHN0YXJ0ICsgQllURVNfUEVSX0NIVU5LKVxyXG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZXNbY3VycmVudEZpbGVdLnNsaWNlKHN0YXJ0LCBlbmQpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBjaGFubmVsLmN1cnJlbnQuc2VuZChmaWxlUmVhZGVyLnJlc3VsdClcclxuICAgICAgICBpZiAoY3VycmVudENodW5rICUgcHJvZ3Jlc3NDb2VmID09PSAwKSBmaWxlU2V0QXR0cihtc2dPYmouaWQsICdwcm9ncmVzcycsIE1hdGgucm91bmQoY3VycmVudENodW5rIC8gcHJvZ3Jlc3NDb2VmKSlcclxuICAgICAgICBjdXJyZW50Q2h1bmsrK1xyXG4gICAgICAgIGlmIChjdXJyZW50Q2h1bmsgPiBNYXRoLmZsb29yKGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplIC8gQllURVNfUEVSX0NIVU5LKSkge1xyXG4gICAgICAgICAgZmlsZVNldEF0dHIobXNnT2JqLmlkLCAncHJvZ3Jlc3MnLCAxMDApXHJcbiAgICAgICAgICBjdXJyZW50RmlsZSsrXHJcbiAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gY3VycmVudEZpbGUpIHtcclxuICAgICAgICAgICAgY3VycmVudENodW5rID0gMFxyXG4gICAgICAgICAgICByZWFkTmV4dENodW5rKClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbGVzQyhbXSlcclxuICAgICAgICAgICAgZmlsZXNTZW5kaW5nQyhmYWxzZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgcmVhZE5leHRDaHVuaygpXHJcbiAgICAgIH1cclxuICAgICAgcmVhZE5leHRDaHVuaygpXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8v0J7RgtC/0YDQsNCy0LrQsCDRgdC+0L7QsdGJ0LXQvdC40Y8g0Lgg0LXQs9C+INC+0YLQvtCx0YDQsNC20LXQvdC40LUg0LIg0YfQsNGC0LVcclxuICBmdW5jdGlvbiBzZW5kbXNnKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaWYgKGNoYW5uZWwuY3VycmVudCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gYWRkTXNnKHsgdHlwZTogXCJzeXNcIiwgY29udGVudDogcHJvcHMuZGVzYy5tc2cubm90c2VudCB9KVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5uZWwuY3VycmVudCAhPT0gbnVsbCB8fCBjaGFubmVsLmN1cnJlbnQucmVhZHlTdGF0ZSAhPT0gXCJvcGVuXCIpIHtcclxuICAgICAgc3dpdGNoIChjaGFubmVsLmN1cnJlbnQucmVhZHlTdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb25uZWN0aW5nXCI6IHJldHVybiBhZGRNc2coeyB0eXBlOiBcInN5c1wiLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jb25uZWN0aW5nIH0pXHJcbiAgICAgICAgY2FzZSBcImNsb3NpbmdcIjogcmV0dXJuIGFkZE1zZyh7IHR5cGU6IFwic3lzXCIsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLmNsb3NpbmcgfSlcclxuICAgICAgICBjYXNlIFwiY2xvc2VcIjogcmV0dXJuIGFkZE1zZyh7IHR5cGU6IFwic3lzXCIsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLmNsb3NlIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbmRDaGFubmVsKGUudGFyZ2V0Lm1zZy52YWx1ZSlcclxuICAgIGUudGFyZ2V0Lm1zZy52YWx1ZSA9IFwiXCJcclxuXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlTdGF0dXMoKSB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIDA6IHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3MucmVkfT57cHJvcHMuZGVzYy5zdGF0dXMwfTwvc3Bhbj5cclxuICAgICAgY2FzZSAxOiByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLm9yYW5nZX0+e3Byb3BzLmRlc2Muc3RhdHVzMX08L3NwYW4+XHJcbiAgICAgIGNhc2UgMjogcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17cy5ncmVlbn0+e3Byb3BzLmRlc2Muc3RhdHVzMn08L3NwYW4+XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7cy5lbGVtZW50fSAke2Rpc3BsYXkgPyBzLmRpc3BsYXkgOiAnJ31gfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmluZm99PlxyXG4gICAgICA8ZGl2PntuYW1lID09PSB1bmRlZmluZWQgPyBwcm9wcy5kZXNjLm5hbWVsZXNzIDogbmFtZX08L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MuYWRkZWR9Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgeWVhcjogJ251bWVyaWMnLCB9KX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmxhc3RDb25uZWN0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgIHtsYXN0ID09PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5zdGF0dXMwfTwvc3Bhbj5cclxuICAgICAgICAgICAgOiA8c3Bhbj57bmV3IERhdGUobGFzdCkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIHllYXI6ICdudW1lcmljJyB9KX08L3NwYW4+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmNvbm5lY3Rpb259Ojwvc3Bhbj5cclxuICAgICAgICAgIHtnZXRFbGVtZW50c0J5U3RhdHVzKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jaGF0fT5cclxuICAgICAgPGRpdiByZWY9e2NoYXRCbG9ja30+XHJcbiAgICAgICAge2NoYXQubWFwKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtc2dcIjogcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtvYmouY3VycmVudCA/IHMucmlnaHQgOiBzLmxlZnR9ID5cclxuICAgICAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmouZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW51dGU6ICdudW1lcmljJywgaG91cjogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e29iai5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcImZpbGVcIjogcmV0dXJuIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake29iai5jdXJyZW50ID8gcy5yaWdodCA6IHMubGVmdH0gJHtzLmZpbGV9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvYmoucHJvZ3Jlc3MgPT09IDEwMCB8fCBvYmouY3VycmVudCA/ICgpID0+IGZpbGVEb3dubG9hZChvYmouYmxvYiwgb2JqLm5hbWUpIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLmRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgbWludXRlOiAnbnVtZXJpYycsIGhvdXI6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICAgICAgICA8U3ZnIG5hbWU9XCJ2YXIvc2F2ZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e29iai5wcm9ncmVzc30lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntNYXRoLnJvdW5kKG9iai5zaXplIC8gMTAyNCl9IHtwcm9wcy5kZXNjLmtifTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcInN5c1wiOiByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3Muc3lzdGVtfT5cclxuICAgICAgICAgICAgICB7b2JqLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHtzdGF0dXMgPT09IDAgPyA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0fT57cHJvcHMuZGVzYy5xdWVyeU5ld308L2J1dHRvbj5cclxuICAgICAgICAgIDogc3RhdHVzID09PSAxID8gPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZX0+e3Byb3BzLmRlc2MucXVlcnlDYW5jZWx9PC9idXR0b24+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZG1zZ30+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17ZmlsZXNTZW5kaW5nID8geyBkaXNwbGF5OiAnbm9uZScgfSA6IHt9fT5cclxuICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGUsIGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2UgPT4gZmlsZURvd25sb2FkKGZpbGUsIGZpbGUubmFtZSl9IGtleT17ZmlsZS5sYXN0TW9kaWZpZWR9PlxyXG4gICAgICAgICAgICAgIDxTdmcgbmFtZT1cInZhci9maWxlLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e2ZpbGUubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2UgPT4gZmlsZUV4Y2x1ZGUoZmlsZSl9PjxTdmcgbmFtZT1cInZhci94LnN2Z1wiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57TWF0aC5yb3VuZChmaWxlLnNpemUgLyAxMDI0KX0ge3Byb3BzLmRlc2Mua2J9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLmF0dGFjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZmlsZXNTZW5kaW5nfSB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIG9uQ2hhbmdlPXtmaWxlRGlzcGxheX0gLz5cclxuICAgICAgICAgICAgPFN2ZyBuYW1lPVwidmFyL2NsaXAuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJtc2dcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5zZW5kfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICA8U3ZnIG5hbWU9XCJ2YXIvc2VuZC5zdmdcIiAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9