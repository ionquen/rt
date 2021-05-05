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
      console.log(e);

      if (e.candidate) {
        send("newice", e.candidate);
      } else addMsg("Ice candidates установлены. Ожидание действий браузера.");
    };

    RTCpc.ondatachannel = function (e) {
      console.log(e);
      channelSetHandlers(e.channel);
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
          lineNumber: 418,
          columnNumber: 22
        }, this);

      case 1:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.orange,
          children: props.desc.status1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 22
        }, this);

      case 2:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.green,
          children: props.desc.status2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 420,
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
        lineNumber: 425,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.added, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(date).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.lastConnection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 11
          }, this), last === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.status0
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(last).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.connection, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 11
          }, this), getElementsByStatus()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 424,
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
                  lineNumber: 449,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: obj.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 450,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 448,
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
                  lineNumber: 455,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  name: "var/save.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 456,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: obj.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 458,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [obj.progress, "%"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 459,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [Math.round(obj.size / 1024), " ", props.desc.kb]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 460,
                    columnNumber: 17
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 457,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 452,
                columnNumber: 33
              }, _this2);

            case "sys":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.system,
                children: obj.content
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 463,
                columnNumber: 32
              }, _this2);
          }
        }), status === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: start,
          children: props.desc.queryNew
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 25
        }, this) : status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: close,
          children: props.desc.queryCancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 28
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 445,
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
                  lineNumber: 477,
                  columnNumber: 15
                }, _this2)
              }, file.lastModified, false, {
                fileName: _jsxFileName,
                lineNumber: 476,
                columnNumber: 13
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: file.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 480,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  onClick: function onClick(e) {
                    return fileExclude(file);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    name: "var/x.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 481,
                    columnNumber: 53
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 481,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [Math.round(file.size / 1024), " ", props.desc.kb]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 482,
                  columnNumber: 15
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 479,
                columnNumber: 13
              }, _this2)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 475,
              columnNumber: 39
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 474,
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
              lineNumber: 489,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/clip.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 488,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            autoComplete: "false",
            type: "text",
            name: "msg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 492,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "data-tooltip": props.desc.send,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 494,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/send.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 495,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 493,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 423,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UcmFuc2Zlci5qcyJdLCJuYW1lcyI6WyJUcmFuc2ZlciIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRlZCIsImFkZGVkQyIsImN1cnJlbnQiLCJjdXJyZW50QyIsImNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbnNDIiwid2FpdGluZyIsIndhaXRpbmdDIiwicXJEaXNwbGF5IiwicXJEaXNwbGF5QyIsImxvY2FsQ29kZSIsImxvY2FsQ29kZUMiLCJ1c2VyS2V5IiwidXNlcktleUMiLCJ1c2VyS2V5TGluayIsInVzZXJLZXlMaW5rQyIsImJsb2NrIiwidXNlUmVmIiwid3MiLCJxcmNvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFzUGF0aCIsImNvcHlDb2RlIiwicmVjcmVhdGVDb2RlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3S2V5IiwidG9TdHJpbmciLCJzdWJzdHIiLCJwYXRobmFtZSIsInF1ZXJ5Iiwia2V5IiwiY29udGFjdEVkaXQiLCJmaWVsZCIsInZhbHVlIiwicHJldlN0YXRlIiwibWFwIiwib2JqIiwiY29kZSIsInFyR2VuIiwicXIiLCJ0b0NhbnZhcyIsInVzZUVmZmVjdCIsImNvbm5lY3Rpb25zMSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjbG9zZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsIm1hdGNoIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzaG93Q29ubmVjdGlvbiIsIm5ld0Nvbm5lY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJXZWJTb2NrZXQiLCJkZXNjIiwic2VydmVyIiwib25tZXNzYWdlIiwiZGF0YSIsInR5cGUiLCJjb250ZW50IiwidGFyZ2V0IiwibmV3Y29kZSIsInNvcnQiLCJqb2luIiwib25vcGVuIiwic2VuZCIsIndzQ2xvc2UiLCJyZW1vdmVDb25uZWN0aW9uIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzIiwibWFpbiIsImRpc3BsYXkiLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN0cmluZzEiLCJ5b3VyQ29kZSIsImNsaWNrVG9Db3B5Iiwic3RyaW5nMiIsInJldHJ5IiwiZm9ybSIsImlucHV0Q29kZVBsYWNlaG9sZGVyIiwiYWRkQ29udGFjdCIsImhlYWRlcjMiLCJjb3B5IiwicXJUcnVlIiwicXJGYWxzZSIsImdlbmVyYXRlIiwibG9zcyIsInJlY3JlYXRlIiwibmFtZSIsImxhc3QiLCJjb250YWN0cyIsImFkZCIsIm5hbWVsZXNzIiwic3RvcFByb3BhZ2F0aW9uIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwieWVhciIsImVtcHR5IiwiRWxlbWVudCIsImNoYXQiLCJjaGF0QyIsImZpbGVzIiwiZmlsZXNDIiwiZmlsZXNTZW5kaW5nIiwiZmlsZXNTZW5kaW5nQyIsInN0YXR1cyIsInN0YXR1c0MiLCJwYyIsImNoYW5uZWwiLCJjaGF0QmxvY2siLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbG9zZUFsbENvbm5lY3Rpb25zIiwiYWRkTXNnIiwibXNnIiwic3lzTmV3Iiwib2xkU3RhdGUiLCJmaWxlU2V0QXR0ciIsImlkIiwiYXR0ciIsImZpbGVEaXNwbGF5IiwiZmlsZUV4Y2x1ZGUiLCJmaWxlIiwiZiIsImNyZWF0ZUF1eGlsaWFyeUluZm8iLCJmbG9vciIsImZpbGVEb3dubG9hZCIsImJsb2IiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJzdGFydCIsImNoYW5uZWxTZXRIYW5kbGVycyIsImNobmwiLCJmaWxlRGF0YSIsImN1cnJlbnRDaHVuayIsImNodW5rcyIsImN1cnJlbnRGaWxlIiwicHJvZ3Jlc3NDb2VmIiwib3BlbmVkIiwib25jbG9zZSIsImNsb3NlZCIsImNlaWwiLCJzaXplIiwicHVzaCIsIkJsb2IiLCJ3c3MiLCJjb25maWciLCJpY2VTZXJ2ZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsIlJUQ3BjIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvbmljZWNhbmRpZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjYW5kaWRhdGUiLCJvbmRhdGFjaGFubmVsIiwiY3JlYXRlRGF0YUNoYW5uZWwiLCJjcmVhdGVPZmZlciIsInRoZW4iLCJvZmZlciIsInNldExvY2FsRGVzY3JpcHRpb24iLCJsb2NhbERlc2NyaXB0aW9uIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJSVENTZXNzaW9uRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXIiLCJhbnN3ZXIiLCJhZGRJY2VDYW5kaWRhdGUiLCJSVENJY2VDYW5kaWRhdGUiLCJvbmVycm9yIiwic2VuZENoYW5uZWwiLCJsZW5ndGgiLCJyZWFkTmV4dENodW5rIiwiQllURVNfUEVSX0NIVU5LIiwibXNnT2JqIiwiZW5kIiwibWluIiwiZmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2xpY2UiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0Iiwic2VuZG1zZyIsIm5vdHNlbnQiLCJjaGFubmVsU3RhdGUiLCJyZWFkeVN0YXRlIiwiY29ubmVjdGluZyIsImNsb3NpbmciLCJnZXRFbGVtZW50c0J5U3RhdHVzIiwicmVkIiwic3RhdHVzMCIsIm9yYW5nZSIsInN0YXR1czEiLCJncmVlbiIsInN0YXR1czIiLCJlbGVtZW50IiwiaW5mbyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImxhc3RDb25uZWN0aW9uIiwiY29ubmVjdGlvbiIsImluZGV4IiwicmlnaHQiLCJsZWZ0IiwibWludXRlIiwiaG91ciIsInByb2dyZXNzIiwia2IiLCJzeXN0ZW0iLCJxdWVyeU5ldyIsInF1ZXJ5Q2FuY2VsIiwibGFzdE1vZGlmaWVkIiwiYXR0YWNo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c0JBQVEsRUFBRXJILFlBQWpCO0FBQStCLGtCQUFJLEVBQUMsTUFBcEM7QUFBMkMsc0JBQVEsTUFBbkQ7QUFBb0Qsc0JBQVEsRUFBRWtCO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyw0Q0FBRDtBQUFLLGtCQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQU8sd0JBQVksRUFBQyxPQUFwQjtBQUE0QixnQkFBSSxFQUFDLE1BQWpDO0FBQXdDLGdCQUFJLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU1FO0FBQU8sNEJBQWM5SSxLQUFLLENBQUN1RSxJQUFOLENBQVdXLElBQWhDO0FBQUEsb0NBQ0U7QUFBTyxrQkFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLDRDQUFEO0FBQUssa0JBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBOEVEOztJQXRWUXFDLE87O01BQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjkwOWM0YTFhNTQ2MGUxOGQ3N2U4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcXIgZnJvbSAncXJjb2RlJ1xyXG5cclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL3RyYW5zZmVyLnN0eWwnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcbmltcG9ydCBTdmcgZnJvbSAnLi4vU3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNmZXIoeyBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW2FkZGVkLCBhZGRlZENdID0gdXNlU3RhdGUoW10pLy/QnNCw0YHRgdC40LIg0LTQvtCx0LDQstC70LXQvdC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LJcclxuICBjb25zdCBbY3VycmVudCwgY3VycmVudENdID0gdXNlU3RhdGUoJycpLy/QntGC0L7QsdGA0LDQttCw0LXQvNC+0LUg0L/QvtC00LrQu9GO0YfQtdC90LjQtSAoJycgPSDRgdC+0LfQtNCw0YLRjCDQvdC+0LLQvtC1KVxyXG4gIGNvbnN0IFtjb25uZWN0aW9ucywgY29ubmVjdGlvbnNDXSA9IHVzZVN0YXRlKFtdKS8v0JzQsNGB0YHQuNCyINC60LvRjtGH0LXQuSDQstGB0LXRhSDQsNC60YLQuNCy0L3Ri9GFINC/0L7QtNC60LvRjtGH0LXQvdC40LlcclxuXHJcbiAgY29uc3QgW3dhaXRpbmcsIHdhaXRpbmdDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtxckRpc3BsYXksIHFyRGlzcGxheUNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvY2FsQ29kZSwgbG9jYWxDb2RlQ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt1c2VyS2V5LCB1c2VyS2V5Q10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt1c2VyS2V5TGluaywgdXNlcktleUxpbmtDXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3Qgd3MgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBxcmNvZGUgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGZ1bmN0aW9uIGNvcHlMaW5rKCkgeyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChgaHR0cHM6Ly9yZWd0b29sLm5ldCR7cm91dGVyLmFzUGF0aH0/a2V5PSR7dXNlcktleX1gKSB9XHJcbiAgZnVuY3Rpb24gY29weUNvZGUoKSB7IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGAke2xvY2FsQ29kZX1gKSB9XHJcbiAgZnVuY3Rpb24gcmVjcmVhdGVDb2RlKGFzUGF0aCkgey8vYW5kIHVwZGF0ZSBsaW5rXHJcbiAgICBsb2NhbENvZGVDKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpXHJcbiAgICBjb25zdCBuZXdLZXkgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMilcclxuICAgIHVzZXJLZXlDKG5ld0tleSlcclxuICAgIHVzZXJLZXlMaW5rQyg8TGluayBocmVmPXt7IHBhdGhuYW1lOiBhc1BhdGgsIHF1ZXJ5OiB7IGtleTogbmV3S2V5IH0gfX0+PGE+aHR0cHM6Ly9yZWd0b29sLm5ldHthc1BhdGh9P2tleT17bmV3S2V5fTwvYT48L0xpbms+KVxyXG4gICAgcXJEaXNwbGF5QyhmYWxzZSlcclxuICB9XHJcbiAgZnVuY3Rpb24gY29udGFjdEVkaXQoa2V5LCBmaWVsZCwgdmFsdWUpIHtcclxuICAgIGFkZGVkQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLm1hcChvYmogPT4gb2JqLmNvZGUgPT09IGtleSA/IHsgLi4ub2JqLCBbZmllbGRdOiB2YWx1ZSB9IDogb2JqKSlcclxuICB9XHJcbiAgZnVuY3Rpb24gcXJHZW4oKSB7XHJcbiAgICBxci50b0NhbnZhcyhxcmNvZGUuY3VycmVudCwgYGh0dHBzOi8vcmVndG9vbC5uZXQke3JvdXRlci5hc1BhdGh9P2tleT0ke3VzZXJLZXl9YClcclxuICAgIHFyRGlzcGxheUModHJ1ZSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlY3JlYXRlQ29kZShyb3V0ZXIuYXNQYXRoKVxyXG4gICAgY29uc3QgY29ubmVjdGlvbnMxID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyYW5zZmVyQ29ubmVjdGlvbnMnKVxyXG4gICAgaWYgKGNvbm5lY3Rpb25zMSAhPT0gbnVsbCkgYWRkZWRDKEpTT04ucGFyc2UoY29ubmVjdGlvbnMxKSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd3MuY3VycmVudC5jbG9zZSgpXHJcbiAgICAgIH0gY2F0Y2ggeyB9XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0cmFuc2ZlckNvbm5lY3Rpb25zJywgSlNPTi5zdHJpbmdpZnkoYWRkZWQpKVxyXG4gIH0sIFthZGRlZF0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucXVlcnkua2V5ID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgYWRkZWRDKHByZXZTdGF0ZSA9PiBbeyBjb2RlOiByb3V0ZXIucXVlcnkua2V5LCBkYXRlOiBEYXRlLm5vdygpIH0sIC4uLnByZXZTdGF0ZV0pXHJcbiAgICBjb25zdCBhc1BhdGggPSByb3V0ZXIuYXNQYXRoLm1hdGNoKC9eKC4qKVxcPy8pWzFdXHJcbiAgICByb3V0ZXIucmVwbGFjZShhc1BhdGgsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pXHJcbiAgICBzaG93Q29ubmVjdGlvbihyb3V0ZXIucXVlcnkua2V5KVxyXG4gICAgcmVjcmVhdGVDb2RlKGFzUGF0aClcclxuICB9LCBbcm91dGVyLnF1ZXJ5LmtleV0pXHJcblxyXG4gIGZ1bmN0aW9uIG5ld0Nvbm5lY3QoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB3YWl0aW5nQyh0cnVlKVxyXG4gICAgd3MuY3VycmVudCA9IG5ldyBXZWJTb2NrZXQocHJvcHMuZGVzYy5zZXJ2ZXIpXHJcbiAgICB3cy5jdXJyZW50Lm9ubWVzc2FnZSA9IGUgPT4ge1xyXG4gICAgICBjb25zdCB7IHR5cGUsIGNvbnRlbnQgfSA9IEpTT04ucGFyc2UoZS5kYXRhKVxyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdzd2FwJzpcclxuICAgICAgICAgIGFkZGVkQyhwcmV2U3RhdGUgPT4gW3sgY29kZTogY29udGVudCwgZGF0ZTogRGF0ZS5ub3coKSB9LCAuLi5wcmV2U3RhdGVdKVxyXG4gICAgICAgICAgc2hvd0Nvbm5lY3Rpb24oY29udGVudClcclxuICAgICAgICAgIHdzLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgICAgICAgd2FpdGluZ0MoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNvZGUgPSBlLnRhcmdldC5jb2RlLnZhbHVlXHJcbiAgICBjb25zdCBuZXdjb2RlID0gW2NvZGUsIGxvY2FsQ29kZV0uc29ydCgpLmpvaW4oJycpXHJcbiAgICB3cy5jdXJyZW50Lm9ub3BlbiA9ICgpID0+IHdzLmN1cnJlbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdzd2FwJywgY29udGVudDogbmV3Y29kZSB9KSlcclxuICB9XHJcbiAgZnVuY3Rpb24gd3NDbG9zZSgpIHtcclxuICAgIHdhaXRpbmdDKGZhbHNlKVxyXG4gICAgd3MuY3VycmVudC5jbG9zZSgpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbW92ZUNvbm5lY3Rpb24oY29kZSkge1xyXG4gICAgYWRkZWRDKGFkZGVkLmZpbHRlcihvYmogPT4gb2JqLmNvZGUgPT09IGNvZGUgPyBmYWxzZSA6IHRydWUpKVxyXG4gICAgY3VycmVudEMoJycpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNob3dDb25uZWN0aW9uKGtleSkge1xyXG4gICAgaWYgKCFjb25uZWN0aW9ucy5pbmNsdWRlcyhrZXkpKSBjb25uZWN0aW9uc0MoWy4uLmNvbm5lY3Rpb25zLCBrZXldKVxyXG4gICAgY3VycmVudEMoa2V5KVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9IHJlZj17YmxvY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubWFpbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLm5ld30gJHtjdXJyZW50ID09PSAnJyA/IHMuZGlzcGxheSA6ICcnfWB9PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGVhZGVyMX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oZWFkZXIyfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuY29kZS5zdHJpbmcxfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuY29kZS55b3VyQ29kZX06IDxzcGFuIG9uQ2xpY2s9e2NvcHlDb2RlfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MuY2xpY2tUb0NvcHl9IGNsYXNzTmFtZT17cy5jb2RlfT57bG9jYWxDb2RlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmNvZGUuc3RyaW5nMn08L2Rpdj5cclxuICAgICAgICAgICAgICB7d2FpdGluZyA/XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmNvZGUud2FpdGluZ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt3c0Nsb3NlfT57cHJvcHMuZGVzYy5jb2RlLnJldHJ5fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA6IDxmb3JtIGNsYXNzTmFtZT17cy5mb3JtfSBvblN1Ym1pdD17bmV3Q29ubmVjdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj17cHJvcHMuZGVzYy5jb2RlLmlucHV0Q29kZVBsYWNlaG9sZGVyfSBhdXRvQ29tcGxldGU9XCJmYWxzZVwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiY29kZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9e3Byb3BzLmRlc2MuY29kZS5hZGRDb250YWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGVhZGVyM308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLnFyLnN0cmluZzF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5xci5zdHJpbmcyfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dXNlcktleUxpbmt9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlMaW5rfT57cHJvcHMuZGVzYy5xci5jb3B5fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtxckRpc3BsYXkgPyBzLnFyVHJ1ZSA6IHMucXJGYWxzZX0+XHJcbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17cXJjb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtxckdlbn0+e3Byb3BzLmRlc2MucXIuZ2VuZXJhdGV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9zc308L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVjcmVhdGVDb2RlfT57cHJvcHMuZGVzYy5yZWNyZWF0ZX08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHthZGRlZC5tYXAoKHsgY29kZSwgbmFtZSwgZGF0ZSwgbGFzdCB9KSA9PiAhY29ubmVjdGlvbnMuaW5jbHVkZXMoY29kZSkgPyBudWxsIDpcclxuICAgICAgICA8RWxlbWVudCBkaXNwbGF5PXtjdXJyZW50ID09PSBjb2RlfSBjb2RlPXtjb2RlfSBrZXk9e2NvZGV9IG5hbWU9e25hbWV9IGRhdGU9e2RhdGV9IGxhc3Q9e2xhc3R9IGNvbnRhY3RFZGl0PXtjb250YWN0RWRpdH0gcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c30+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3VycmVudEMoJycpfT57cHJvcHMuZGVzYy5hZGR9PC9idXR0b24+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2FkZGVkLm1hcChvYmogPT4gPGRpdiBrZXk9e29iai5jb2RlfT5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2hvd0Nvbm5lY3Rpb24ob2JqLmNvZGUpfT57b2JqLm5hbWUgPT09IHVuZGVmaW5lZCA/IHByb3BzLmRlc2MubmFtZWxlc3MgOiBvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgcmVtb3ZlQ29ubmVjdGlvbihvYmouY29kZSkgfX0+PFN2ZyBuYW1lPVwidmFyL3guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXY+e25ldyBEYXRlKG9iai5kYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgd2Vla2RheTogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdj57b2JqLmxhc3QgPT09IHVuZGVmaW5lZCA/IHByb3BzLmRlc2MuZW1wdHkgOiBuZXcgRGF0ZShvYmoubGFzdCkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIHdlZWtkYXk6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBFbGVtZW50KHsgY29kZSwgbmFtZSwgZGF0ZSwgbGFzdCwgZGlzcGxheSwgY29udGFjdEVkaXQsIHByb3BzIH0pIHtcclxuICBjb25zdCBbY2hhdCwgY2hhdENdID0gdXNlU3RhdGUoW10pLy/QodC+0L7QsdGJ0LXQvdC40Y8g0LIg0YfQsNGC0LVcclxuICBjb25zdCBbZmlsZXMsIGZpbGVzQ10gPSB1c2VTdGF0ZShbXSkvL9Ck0LDQudC70Ysg0L3QsCDQvtGC0L/RgNCw0LLQutGDXHJcbiAgY29uc3QgW2ZpbGVzU2VuZGluZywgZmlsZXNTZW5kaW5nQ10gPSB1c2VTdGF0ZShmYWxzZSkvL9Ch0LrRgNGL0LLQsNGC0Ywg0YTQsNC50LvRiyAo0Lgg0L3QtSDQvtGC0L/RgNCw0LLQu9GP0YLRjCDQuNGFINC20LUpINC10YHQu9C4INC40LTRkdGCINC40YUg0L7RgtC/0YDQsNCy0LrQsFxyXG4gIGNvbnN0IFtzdGF0dXMsIHN0YXR1c0NdID0gdXNlU3RhdGUoMCkgLy8wIC0gZGlzY29ubmVjdGVkLCAxIC0gZXN0YWJsaXNoaW5nIGEgY29ubmVjdGlvbiwgMiAtIGNvbm5lY3RlZCBcclxuICBjb25zdCB3cyA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHBjID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgY2hhbm5lbCA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGNoYXRCbG9jayA9IHVzZVJlZihudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhdEJsb2NrLmN1cnJlbnQuc2Nyb2xsVG9wID4gY2hhdEJsb2NrLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0IC0gY2hhdEJsb2NrLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgIGNoYXRCbG9jay5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXRCbG9jay5jdXJyZW50LnNjcm9sbEhlaWdodFxyXG4gICAgfVxyXG4gIH0sIFtjaGF0XSlcclxuICBjb25zdCBjbG9zZUFsbENvbm5lY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2hhbm5lbC5jdXJyZW50LmNsb3NlKClcclxuICAgICAgcGMuY3VycmVudC5jbG9zZSgpXHJcbiAgICAgIHdzLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgfSBjYXRjaCB7IH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0dXMgPT09IDApIHtcclxuICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLnN5c05ldyB9KVxyXG4gICAgfVxyXG4gIH0sIFtzdGF0dXNdKVxyXG4gIGNvbnN0IGFkZE1zZyA9IG9iaiA9PiBjaGF0Qygob2xkU3RhdGUpID0+IFsuLi5vbGRTdGF0ZSwgb2JqXSlcclxuICBjb25zdCBmaWxlU2V0QXR0ciA9IChpZCwgYXR0ciwgdmFsdWUpID0+IGNoYXRDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUubWFwKG9iaiA9PiBvYmouaWQgPT09IGlkID8geyAuLi5vYmosIFthdHRyXTogdmFsdWUgfSA6IG9iaikpXHJcblxyXG4gIGNvbnN0IGZpbGVEaXNwbGF5ID0gKGUpID0+IGZpbGVzQyhwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgLi4uZS50YXJnZXQuZmlsZXNdKVxyXG4gIGNvbnN0IGZpbGVFeGNsdWRlID0gKGZpbGUpID0+IGZpbGVzQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLmZpbHRlcihmID0+IGYgIT09IGZpbGUpKVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUF1eGlsaWFyeUluZm8oKSB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRlOiBNYXRoLmZsb29yKG5vdyAvIDYwMDAwKSAqIDYwMDAwLFxyXG4gICAgICBpZDogbm93ICUgMTAwMDAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWxlRG93bmxvYWQoYmxvYiwgbmFtZSkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgbGluay5kb3dubG9hZCA9IG5hbWVcclxuICAgIGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcclxuICAgIGxpbmsuY2xpY2soKVxyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChsaW5rLmhyZWYpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IGNsb3NlQWxsQ29ubmVjdGlvbnMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgIGNsb3NlQWxsQ29ubmVjdGlvbnMoKVxyXG4gICAgc3RhdHVzQygwKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuXHJcbiAgICBzdGF0dXNDKDEpXHJcbiAgICBmdW5jdGlvbiBjaGFubmVsU2V0SGFuZGxlcnMoY2hubCkge1xyXG4gICAgICBsZXQgZmlsZURhdGEgPSB7fVxyXG4gICAgICBsZXQgY3VycmVudENodW5rID0gMFxyXG4gICAgICBsZXQgY2h1bmtzID0gW11cclxuICAgICAgbGV0IGN1cnJlbnRGaWxlXHJcbiAgICAgIGxldCBwcm9ncmVzc0NvZWYgPSAxXHJcblxyXG4gICAgICBjaG5sLm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogcHJvcHMuZGVzYy5tc2cub3BlbmVkIH0pXHJcbiAgICAgICAgc3RhdHVzQygyKVxyXG4gICAgICAgIGNvbnRhY3RFZGl0KGNvZGUsICdsYXN0JywgRGF0ZS5ub3coKSlcclxuICAgICAgfVxyXG4gICAgICBjaG5sLm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VBbGxDb25uZWN0aW9ucygpXHJcbiAgICAgICAgc3RhdHVzQygwKVxyXG4gICAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jbG9zZWQgfSlcclxuICAgICAgfVxyXG4gICAgICBjaG5sLm9ubWVzc2FnZSA9IGUgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IHR5cGUsIGNvbnRlbnQgfSA9IEpTT04ucGFyc2UoZS5kYXRhKVxyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdtc2cnKSB7XHJcbiAgICAgICAgICAgIGFkZE1zZyh7IHR5cGUsIGNvbnRlbnQsIGN1cnJlbnQ6IGZhbHNlLCAuLi5jcmVhdGVBdXhpbGlhcnlJbmZvKCkgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgICAgICAgY2h1bmtzID0gW11cclxuICAgICAgICAgICAgY3VycmVudENodW5rID0gMFxyXG4gICAgICAgICAgICBmaWxlRGF0YSA9IGNvbnRlbnRcclxuICAgICAgICAgICAgcHJvZ3Jlc3NDb2VmID0gTWF0aC5jZWlsKGZpbGVEYXRhLmNodW5rcyAvIDEwMClcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzQ29lZiA8IDEpIHByb2dyZXNzQ29lZiA9IDFcclxuICAgICAgICAgICAgY3VycmVudEZpbGUgPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgICAgY3VycmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZURhdGEubmFtZSxcclxuICAgICAgICAgICAgICBzaXplOiBmaWxlRGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgIC4uLmNyZWF0ZUF1eGlsaWFyeUluZm8oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZE1zZyhjdXJyZW50RmlsZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSlcclxuICAgICAgICAgIGN1cnJlbnRDaHVuaysrXHJcbiAgICAgICAgICBpZiAoY3VycmVudENodW5rICUgcHJvZ3Jlc3NDb2VmID09PSAwKSBmaWxlU2V0QXR0cihjdXJyZW50RmlsZS5pZCwgJ3Byb2dyZXNzJywgTWF0aC5yb3VuZChjdXJyZW50Q2h1bmsgLyBwcm9ncmVzc0NvZWYpKVxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA+PSBmaWxlRGF0YS5jaHVua3MpIHtcclxuICAgICAgICAgICAgZmlsZVNldEF0dHIoY3VycmVudEZpbGUuaWQsICdwcm9ncmVzcycsIDEwMClcclxuICAgICAgICAgICAgZmlsZVNldEF0dHIoY3VycmVudEZpbGUuaWQsICdibG9iJywgbmV3IEJsb2IoY2h1bmtzKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2hhbm5lbC5jdXJyZW50ID0gY2hubFxyXG4gICAgfVxyXG5cclxuICAgIC8vV2ViU29ja2V0IChlc3RhYmxpc2hpbmcgYSBjb25uZWN0aW9uKVxyXG4gICAgY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldChwcm9wcy5zZXJ2ZXIpXHJcbiAgICBjb25zdCBzZW5kID0gKHR5cGUsIGNvbnRlbnQpID0+IHdzcy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZSwgY29udGVudCB9KSlcclxuXHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIGljZVNlcnZlcnM6IE9iamVjdC5lbnRyaWVzKHByb3BzLmljZVNlcnZlcnMpLm1hcChvYmogPT4gb2JqWzFdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vV2ViUlRDIHNldHRpbmdzXHJcbiAgICBjb25zdCBSVENwYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWcpXHJcbiAgICBSVENwYy5vbmljZWNhbmRpZGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgIGlmIChlLmNhbmRpZGF0ZSkge1xyXG4gICAgICAgIHNlbmQoXCJuZXdpY2VcIiwgZS5jYW5kaWRhdGUpXHJcbiAgICAgIH0gZWxzZSBhZGRNc2coXCJJY2UgY2FuZGlkYXRlcyDRg9GB0YLQsNC90L7QstC70LXQvdGLLiDQntC20LjQtNCw0L3QuNC1INC00LXQudGB0YLQstC40Lkg0LHRgNCw0YPQt9C10YDQsC5cIilcclxuICAgIH1cclxuICAgIFJUQ3BjLm9uZGF0YWNoYW5uZWwgPSBlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgY2hhbm5lbFNldEhhbmRsZXJzKGUuY2hhbm5lbClcclxuICAgIH1cclxuXHJcbiAgICB3c3Mub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogXCLQo9C00LDQu9C+0YHRjCDQv9C+0LTQutC70Y7Rh9C40YLRjNGB0Y8g0LogbWlkZGxlLdGB0LXRgNCy0LXRgNGDXCIgfSlcclxuICAgICAgc2VuZCgnY29ubmVjdCcsIGNvZGUpXHJcbiAgICB9XHJcbiAgICB3c3Mub25tZXNzYWdlID0gZSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgY29udGVudCB9ID0gSlNPTi5wYXJzZShlLmRhdGEpXHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2Nvbm5lY3QnOlxyXG4gICAgICAgICAgY2hhbm5lbFNldEhhbmRsZXJzKFJUQ3BjLmNyZWF0ZURhdGFDaGFubmVsKFwiY2hhbm5lbFwiKSlcclxuICAgICAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBcItCa0L7QvdGC0LDQutGCINC90LDQudC00LXQvS4g0KPRgdGC0LDQvdC+0LLQutCwINGB0L7QtdC00LjQvdC10L3QuNGPLi4uXCIgfSlcclxuXHJcbiAgICAgICAgICBSVENwYy5jcmVhdGVPZmZlcigpXHJcbiAgICAgICAgICAgIC50aGVuKG9mZmVyID0+IFJUQ3BjLnNldExvY2FsRGVzY3JpcHRpb24ob2ZmZXIpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBzZW5kKFwib2ZmZXJcIiwgUlRDcGMubG9jYWxEZXNjcmlwdGlvbikpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ29mZmVyJzpcclxuICAgICAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBcItCa0L7QvdGC0LDQutGCINC90LDQudC00LXQvS4g0KPRgdGC0LDQvdC+0LLQutCwINGB0L7QtdC00LjQvdC10L3QuNGPLi4uXCIgfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgdHlwZSwgY29udGVudCB9KVxyXG4gICAgICAgICAgUlRDcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihjb250ZW50KSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gUlRDcGMuY3JlYXRlQW5zd2VyKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGFuc3dlciA9PiBSVENwYy5zZXRMb2NhbERlc2NyaXB0aW9uKGFuc3dlcikpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHNlbmQoXCJhbnN3ZXJcIiwgUlRDcGMubG9jYWxEZXNjcmlwdGlvbikpXHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYW5zd2VyJzpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgdHlwZSwgY29udGVudCB9KVxyXG4gICAgICAgICAgUlRDcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihjb250ZW50KSlcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJuZXdpY2VcIjpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgdHlwZSwgY29udGVudCB9KVxyXG4gICAgICAgICAgUlRDcGMuYWRkSWNlQ2FuZGlkYXRlKG5ldyBSVENJY2VDYW5kaWRhdGUoY29udGVudCkpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd3NzLm9uZXJyb3IgPSBlID0+IGNvbnNvbGUubG9nKCdNaWRkbGUtc2VydmVyIGNvbm5lY3Rpb24gZXJyb3InKVxyXG4gICAgd3NzLm9uY2xvc2UgPSBlID0+IGNvbnNvbGUubG9nKCdNaWRkbGUtc2VydmVyIGNvbm5lY3Rpb24gY2xvc2VkJylcclxuICAgIHdzLmN1cnJlbnQgPSB3c3NcclxuICAgIHBjLmN1cnJlbnQgPSBSVENwY1xyXG4gIH1cclxuXHJcbiAgLy9TRU5EXHJcbiAgZnVuY3Rpb24gc2VuZENoYW5uZWwobXNnKSB7XHJcbiAgICBpZiAobXNnICE9PSAnJykge1xyXG4gICAgICBjaGFubmVsLmN1cnJlbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdHlwZTogJ21zZycsXHJcbiAgICAgICAgY29udGVudDogbXNnLFxyXG4gICAgICB9KSlcclxuICAgICAgYWRkTXNnKHtcclxuICAgICAgICB0eXBlOiAnbXNnJyxcclxuICAgICAgICBjb250ZW50OiBtc2csXHJcbiAgICAgICAgY3VycmVudDogdHJ1ZSxcclxuICAgICAgICAuLi5jcmVhdGVBdXhpbGlhcnlJbmZvKClcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmIChmaWxlcy5sZW5ndGggIT09IDAgJiYgIWZpbGVzU2VuZGluZykge1xyXG4gICAgICBsZXQgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcclxuICAgICAgbGV0IGN1cnJlbnRDaHVuayA9IDBcclxuICAgICAgbGV0IGN1cnJlbnRGaWxlID0gMFxyXG4gICAgICBsZXQgcHJvZ3Jlc3NDb2VmID0gMFxyXG4gICAgICBsZXQgbXNnT2JqXHJcbiAgICAgIGNvbnN0IEJZVEVTX1BFUl9DSFVOSyA9IDgwOTJcclxuICAgICAgZmlsZXNTZW5kaW5nQyh0cnVlKVxyXG5cclxuICAgICAgZnVuY3Rpb24gcmVhZE5leHRDaHVuaygpIHtcclxuICAgICAgICBpZiAoY3VycmVudENodW5rID09PSAwKSB7XHJcbiAgICAgICAgICBjaGFubmVsLmN1cnJlbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGVzW2N1cnJlbnRGaWxlXS5uYW1lLFxyXG4gICAgICAgICAgICAgIGNodW5rczogTWF0aC5mbG9vcihmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSAvIEJZVEVTX1BFUl9DSFVOSyksXHJcbiAgICAgICAgICAgICAgc2l6ZTogZmlsZXNbY3VycmVudEZpbGVdLnNpemUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICAgIG1zZ09iaiA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICBjdXJyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBibG9iOiBmaWxlc1tjdXJyZW50RmlsZV0sXHJcbiAgICAgICAgICAgIHNpemU6IGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplLFxyXG4gICAgICAgICAgICBuYW1lOiBmaWxlc1tjdXJyZW50RmlsZV0ubmFtZSxcclxuICAgICAgICAgICAgLi4uY3JlYXRlQXV4aWxpYXJ5SW5mbygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcm9ncmVzc0NvZWYgPSBNYXRoLmNlaWwoZmlsZXNbY3VycmVudEZpbGVdLnNpemUgLyBCWVRFU19QRVJfQ0hVTksgLyAxMDApXHJcbiAgICAgICAgICBhZGRNc2cobXNnT2JqKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdGFydCA9IEJZVEVTX1BFUl9DSFVOSyAqIGN1cnJlbnRDaHVua1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplLCBzdGFydCArIEJZVEVTX1BFUl9DSFVOSylcclxuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGVzW2N1cnJlbnRGaWxlXS5zbGljZShzdGFydCwgZW5kKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY2hhbm5lbC5jdXJyZW50LnNlbmQoZmlsZVJlYWRlci5yZXN1bHQpXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDaHVuayAlIHByb2dyZXNzQ29lZiA9PT0gMCkgZmlsZVNldEF0dHIobXNnT2JqLmlkLCAncHJvZ3Jlc3MnLCBNYXRoLnJvdW5kKGN1cnJlbnRDaHVuayAvIHByb2dyZXNzQ29lZikpXHJcbiAgICAgICAgY3VycmVudENodW5rKytcclxuICAgICAgICBpZiAoY3VycmVudENodW5rID4gTWF0aC5mbG9vcihmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSAvIEJZVEVTX1BFUl9DSFVOSykpIHtcclxuICAgICAgICAgIGZpbGVTZXRBdHRyKG1zZ09iai5pZCwgJ3Byb2dyZXNzJywgMTAwKVxyXG4gICAgICAgICAgY3VycmVudEZpbGUrK1xyXG4gICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IGN1cnJlbnRGaWxlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDaHVuayA9IDBcclxuICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWxlc0MoW10pXHJcbiAgICAgICAgICAgIGZpbGVzU2VuZGluZ0MoZmFsc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHJlYWROZXh0Q2h1bmsoKVxyXG4gICAgICB9XHJcbiAgICAgIHJlYWROZXh0Q2h1bmsoKVxyXG4gICAgfVxyXG4gIH1cclxuICAvL9Ce0YLQv9GA0LDQstC60LAg0YHQvtC+0LHRidC10L3QuNGPINC4INC10LPQviDQvtGC0L7QsdGA0LDQttC10L3QuNC1INCyINGH0LDRgtC1XHJcbiAgZnVuY3Rpb24gc2VuZG1zZyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKHsgY2hhbm5lbDogY2hhbm5lbC5jdXJyZW50IH0pXHJcbiAgICBpZiAoY2hhbm5lbC5jdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBhZGRNc2coeyB0eXBlOiBcInN5c1wiLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5ub3RzZW50IH0pXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh7IGNoYW5uZWxTdGF0ZTogY2hhbm5lbC5jdXJyZW50LnJlYWR5U3RhdGUgfSlcclxuICAgIGlmIChjaGFubmVsLmN1cnJlbnQucmVhZHlTdGF0ZSAhPT0gXCJvcGVuXCIpIHtcclxuICAgICAgc3dpdGNoIChjaGFubmVsLmN1cnJlbnQucmVhZHlTdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb25uZWN0aW5nXCI6IHJldHVybiBhZGRNc2coeyB0eXBlOiBcInN5c1wiLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jb25uZWN0aW5nIH0pXHJcbiAgICAgICAgY2FzZSBcImNsb3NpbmdcIjogcmV0dXJuIGFkZE1zZyh7IHR5cGU6IFwic3lzXCIsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLmNsb3NpbmcgfSlcclxuICAgICAgICBjYXNlIFwiY2xvc2VcIjogcmV0dXJuIGFkZE1zZyh7IHR5cGU6IFwic3lzXCIsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLmNsb3NlIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbmRDaGFubmVsKGUudGFyZ2V0Lm1zZy52YWx1ZSlcclxuICAgIGUudGFyZ2V0Lm1zZy52YWx1ZSA9IFwiXCJcclxuXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlTdGF0dXMoKSB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIDA6IHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3MucmVkfT57cHJvcHMuZGVzYy5zdGF0dXMwfTwvc3Bhbj5cclxuICAgICAgY2FzZSAxOiByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLm9yYW5nZX0+e3Byb3BzLmRlc2Muc3RhdHVzMX08L3NwYW4+XHJcbiAgICAgIGNhc2UgMjogcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17cy5ncmVlbn0+e3Byb3BzLmRlc2Muc3RhdHVzMn08L3NwYW4+XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7cy5lbGVtZW50fSAke2Rpc3BsYXkgPyBzLmRpc3BsYXkgOiAnJ31gfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmluZm99PlxyXG4gICAgICA8ZGl2PntuYW1lID09PSB1bmRlZmluZWQgPyBwcm9wcy5kZXNjLm5hbWVsZXNzIDogbmFtZX08L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MuYWRkZWR9Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgeWVhcjogJ251bWVyaWMnLCB9KX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmxhc3RDb25uZWN0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgIHtsYXN0ID09PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5zdGF0dXMwfTwvc3Bhbj5cclxuICAgICAgICAgICAgOiA8c3Bhbj57bmV3IERhdGUobGFzdCkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIHllYXI6ICdudW1lcmljJyB9KX08L3NwYW4+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmNvbm5lY3Rpb259Ojwvc3Bhbj5cclxuICAgICAgICAgIHtnZXRFbGVtZW50c0J5U3RhdHVzKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jaGF0fT5cclxuICAgICAgPGRpdiByZWY9e2NoYXRCbG9ja30+XHJcbiAgICAgICAge2NoYXQubWFwKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtc2dcIjogcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtvYmouY3VycmVudCA/IHMucmlnaHQgOiBzLmxlZnR9ID5cclxuICAgICAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmouZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW51dGU6ICdudW1lcmljJywgaG91cjogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e29iai5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcImZpbGVcIjogcmV0dXJuIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake29iai5jdXJyZW50ID8gcy5yaWdodCA6IHMubGVmdH0gJHtzLmZpbGV9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvYmoucHJvZ3Jlc3MgPT09IDEwMCB8fCBvYmouY3VycmVudCA/ICgpID0+IGZpbGVEb3dubG9hZChvYmouYmxvYiwgb2JqLm5hbWUpIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLmRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgbWludXRlOiAnbnVtZXJpYycsIGhvdXI6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICAgICAgICA8U3ZnIG5hbWU9XCJ2YXIvc2F2ZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e29iai5wcm9ncmVzc30lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntNYXRoLnJvdW5kKG9iai5zaXplIC8gMTAyNCl9IHtwcm9wcy5kZXNjLmtifTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcInN5c1wiOiByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3Muc3lzdGVtfT5cclxuICAgICAgICAgICAgICB7b2JqLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHtzdGF0dXMgPT09IDAgPyA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0fT57cHJvcHMuZGVzYy5xdWVyeU5ld308L2J1dHRvbj5cclxuICAgICAgICAgIDogc3RhdHVzID09PSAxID8gPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZX0+e3Byb3BzLmRlc2MucXVlcnlDYW5jZWx9PC9idXR0b24+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZG1zZ30+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17ZmlsZXNTZW5kaW5nID8geyBkaXNwbGF5OiAnbm9uZScgfSA6IHt9fT5cclxuICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGUsIGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2UgPT4gZmlsZURvd25sb2FkKGZpbGUsIGZpbGUubmFtZSl9IGtleT17ZmlsZS5sYXN0TW9kaWZpZWR9PlxyXG4gICAgICAgICAgICAgIDxTdmcgbmFtZT1cInZhci9maWxlLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e2ZpbGUubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2UgPT4gZmlsZUV4Y2x1ZGUoZmlsZSl9PjxTdmcgbmFtZT1cInZhci94LnN2Z1wiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57TWF0aC5yb3VuZChmaWxlLnNpemUgLyAxMDI0KX0ge3Byb3BzLmRlc2Mua2J9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLmF0dGFjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZmlsZXNTZW5kaW5nfSB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIG9uQ2hhbmdlPXtmaWxlRGlzcGxheX0gLz5cclxuICAgICAgICAgICAgPFN2ZyBuYW1lPVwidmFyL2NsaXAuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJtc2dcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5zZW5kfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICA8U3ZnIG5hbWU9XCJ2YXIvc2VuZC5zdmdcIiAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9