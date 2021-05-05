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
        console.log(e.data);

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
        send("newice", e.candidate);
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

    if (channel.current === null) {
      return addMsg({
        type: "sys",
        content: props.desc.msg.notsent
      });
    }

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
          lineNumber: 414,
          columnNumber: 22
        }, this);

      case 1:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.orange,
          children: props.desc.status1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 22
        }, this);

      case 2:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.green,
          children: props.desc.status2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 416,
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
        lineNumber: 421,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.added, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(date).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.lastConnection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 11
          }, this), last === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.status0
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(last).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.connection, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 11
          }, this), getElementsByStatus()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 420,
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
                  lineNumber: 445,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: obj.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 446,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 444,
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
                  lineNumber: 451,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  name: "var/save.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 452,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: obj.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 454,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [obj.progress, "%"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 455,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [Math.round(obj.size / 1024), " ", props.desc.kb]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 456,
                    columnNumber: 17
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 453,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 448,
                columnNumber: 33
              }, _this2);

            case "sys":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.system,
                children: obj.content
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 459,
                columnNumber: 32
              }, _this2);
          }
        }), status === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: start,
          children: props.desc.queryNew
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 25
        }, this) : status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: close,
          children: props.desc.queryCancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 28
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 441,
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
                  lineNumber: 473,
                  columnNumber: 15
                }, _this2)
              }, file.lastModified, false, {
                fileName: _jsxFileName,
                lineNumber: 472,
                columnNumber: 13
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: file.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 476,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  onClick: function onClick(e) {
                    return fileExclude(file);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    name: "var/x.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 477,
                    columnNumber: 53
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 477,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [Math.round(file.size / 1024), " ", props.desc.kb]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 478,
                  columnNumber: 15
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 475,
                columnNumber: 13
              }, _this2)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 39
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 470,
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
              lineNumber: 485,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/clip.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 486,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 484,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            autoComplete: "false",
            type: "text",
            name: "msg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 488,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "data-tooltip": props.desc.send,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/send.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 491,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 489,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 419,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UcmFuc2Zlci5qcyJdLCJuYW1lcyI6WyJUcmFuc2ZlciIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRlZCIsImFkZGVkQyIsImN1cnJlbnQiLCJjdXJyZW50QyIsImNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbnNDIiwid2FpdGluZyIsIndhaXRpbmdDIiwicXJEaXNwbGF5IiwicXJEaXNwbGF5QyIsImxvY2FsQ29kZSIsImxvY2FsQ29kZUMiLCJ1c2VyS2V5IiwidXNlcktleUMiLCJ1c2VyS2V5TGluayIsInVzZXJLZXlMaW5rQyIsImJsb2NrIiwidXNlUmVmIiwid3MiLCJxcmNvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFzUGF0aCIsImNvcHlDb2RlIiwicmVjcmVhdGVDb2RlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3S2V5IiwidG9TdHJpbmciLCJzdWJzdHIiLCJwYXRobmFtZSIsInF1ZXJ5Iiwia2V5IiwiY29udGFjdEVkaXQiLCJmaWVsZCIsInZhbHVlIiwicHJldlN0YXRlIiwibWFwIiwib2JqIiwiY29kZSIsInFyR2VuIiwicXIiLCJ0b0NhbnZhcyIsInVzZUVmZmVjdCIsImNvbm5lY3Rpb25zMSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjbG9zZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsIm1hdGNoIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzaG93Q29ubmVjdGlvbiIsIm5ld0Nvbm5lY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJXZWJTb2NrZXQiLCJkZXNjIiwic2VydmVyIiwib25tZXNzYWdlIiwiZGF0YSIsInR5cGUiLCJjb250ZW50IiwidGFyZ2V0IiwibmV3Y29kZSIsInNvcnQiLCJqb2luIiwib25vcGVuIiwic2VuZCIsIndzQ2xvc2UiLCJyZW1vdmVDb25uZWN0aW9uIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzIiwibWFpbiIsImRpc3BsYXkiLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN0cmluZzEiLCJ5b3VyQ29kZSIsImNsaWNrVG9Db3B5Iiwic3RyaW5nMiIsInJldHJ5IiwiZm9ybSIsImlucHV0Q29kZVBsYWNlaG9sZGVyIiwiYWRkQ29udGFjdCIsImhlYWRlcjMiLCJjb3B5IiwicXJUcnVlIiwicXJGYWxzZSIsImdlbmVyYXRlIiwibG9zcyIsInJlY3JlYXRlIiwibmFtZSIsImxhc3QiLCJjb250YWN0cyIsImFkZCIsIm5hbWVsZXNzIiwic3RvcFByb3BhZ2F0aW9uIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwieWVhciIsImVtcHR5IiwiRWxlbWVudCIsImNoYXQiLCJjaGF0QyIsImZpbGVzIiwiZmlsZXNDIiwiZmlsZXNTZW5kaW5nIiwiZmlsZXNTZW5kaW5nQyIsInN0YXR1cyIsInN0YXR1c0MiLCJwYyIsImNoYW5uZWwiLCJjaGF0QmxvY2siLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbG9zZUFsbENvbm5lY3Rpb25zIiwiYWRkTXNnIiwibXNnIiwic3lzTmV3Iiwib2xkU3RhdGUiLCJmaWxlU2V0QXR0ciIsImlkIiwiYXR0ciIsImZpbGVEaXNwbGF5IiwiZmlsZUV4Y2x1ZGUiLCJmaWxlIiwiZiIsImNyZWF0ZUF1eGlsaWFyeUluZm8iLCJmbG9vciIsImZpbGVEb3dubG9hZCIsImJsb2IiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJzdGFydCIsImNoYW5uZWxTZXRIYW5kbGVycyIsImNobmwiLCJmaWxlRGF0YSIsImN1cnJlbnRDaHVuayIsImNodW5rcyIsImN1cnJlbnRGaWxlIiwicHJvZ3Jlc3NDb2VmIiwib3BlbmVkIiwib25jbG9zZSIsImNsb3NlZCIsImNvbnNvbGUiLCJsb2ciLCJjZWlsIiwic2l6ZSIsInB1c2giLCJCbG9iIiwid3NzIiwiY29uZmlnIiwiaWNlU2VydmVycyIsIk9iamVjdCIsImVudHJpZXMiLCJSVENwYyIsIlJUQ1BlZXJDb25uZWN0aW9uIiwib25pY2VjYW5kaWRhdGUiLCJjYW5kaWRhdGUiLCJvbmRhdGFjaGFubmVsIiwib25uZWdvdGlhdGlvbm5lZWRlZCIsImNyZWF0ZU9mZmVyIiwidGhlbiIsIm9mZmVyIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImxvY2FsRGVzY3JpcHRpb24iLCJjcmVhdGVEYXRhQ2hhbm5lbCIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwiUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiYW5zd2VyIiwiYWRkSWNlQ2FuZGlkYXRlIiwiUlRDSWNlQ2FuZGlkYXRlIiwib25lcnJvciIsInNlbmRDaGFubmVsIiwibGVuZ3RoIiwicmVhZE5leHRDaHVuayIsIkJZVEVTX1BFUl9DSFVOSyIsIm1zZ09iaiIsImVuZCIsIm1pbiIsImZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNsaWNlIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlc3VsdCIsInNlbmRtc2ciLCJub3RzZW50IiwicmVhZHlTdGF0ZSIsImNvbm5lY3RpbmciLCJjbG9zaW5nIiwiZ2V0RWxlbWVudHNCeVN0YXR1cyIsInJlZCIsInN0YXR1czAiLCJvcmFuZ2UiLCJzdGF0dXMxIiwiZ3JlZW4iLCJzdGF0dXMyIiwiZWxlbWVudCIsImluZm8iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJsYXN0Q29ubmVjdGlvbiIsImNvbm5lY3Rpb24iLCJpbmRleCIsInJpZ2h0IiwibGVmdCIsIm1pbnV0ZSIsImhvdXIiLCJwcm9ncmVzcyIsImtiIiwic3lzdGVtIiwicXVlcnlOZXciLCJxdWVyeUNhbmNlbCIsImxhc3RNb2RpZmllZCIs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RixlQUVFLHFFQUFDLDRDQUFEO0FBQUssa0JBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0U7QUFBTyx3QkFBWSxFQUFDLE9BQXBCO0FBQTRCLGdCQUFJLEVBQUMsTUFBakM7QUFBd0MsZ0JBQUksRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBTUU7QUFBTyw0QkFBYzlJLEtBQUssQ0FBQ3VFLElBQU4sQ0FBV1csSUFBaEM7QUFBQSxvQ0FDRTtBQUFPLGtCQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsNENBQUQ7QUFBSyxrQkFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUE4RUQ7O0lBbFZRcUMsTzs7TUFBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uYTgxYjRlMTFlYjRkNmZhYTNhMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBxciBmcm9tICdxcmNvZGUnXHJcblxyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvdHJhbnNmZXIuc3R5bCdcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2Zlcih7IHByb3BzIH0pIHtcclxuICBjb25zdCBbYWRkZWQsIGFkZGVkQ10gPSB1c2VTdGF0ZShbXSkvL9Cc0LDRgdGB0LjQsiDQtNC+0LHQsNCy0LvQtdC90L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQslxyXG4gIGNvbnN0IFtjdXJyZW50LCBjdXJyZW50Q10gPSB1c2VTdGF0ZSgnJykvL9Ce0YLQvtCx0YDQsNC20LDQtdC80L7QtSDQv9C+0LTQutC70Y7Rh9C10L3QuNC1ICgnJyA9INGB0L7Qt9C00LDRgtGMINC90L7QstC+0LUpXHJcbiAgY29uc3QgW2Nvbm5lY3Rpb25zLCBjb25uZWN0aW9uc0NdID0gdXNlU3RhdGUoW10pLy/QnNCw0YHRgdC40LIg0LrQu9GO0YfQtdC5INCy0YHQtdGFINCw0LrRgtC40LLQvdGL0YUg0L/QvtC00LrQu9GO0YfQtdC90LjQuVxyXG5cclxuICBjb25zdCBbd2FpdGluZywgd2FpdGluZ0NdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3FyRGlzcGxheSwgcXJEaXNwbGF5Q10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9jYWxDb2RlLCBsb2NhbENvZGVDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3VzZXJLZXksIHVzZXJLZXlDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3VzZXJLZXlMaW5rLCB1c2VyS2V5TGlua0NdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCB3cyA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHFyY29kZSA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgZnVuY3Rpb24gY29weUxpbmsoKSB7IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGBodHRwczovL3JlZ3Rvb2wubmV0JHtyb3V0ZXIuYXNQYXRofT9rZXk9JHt1c2VyS2V5fWApIH1cclxuICBmdW5jdGlvbiBjb3B5Q29kZSgpIHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYCR7bG9jYWxDb2RlfWApIH1cclxuICBmdW5jdGlvbiByZWNyZWF0ZUNvZGUoYXNQYXRoKSB7Ly9hbmQgdXBkYXRlIGxpbmtcclxuICAgIGxvY2FsQ29kZUMoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSlcclxuICAgIGNvbnN0IG5ld0tleSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKVxyXG4gICAgdXNlcktleUMobmV3S2V5KVxyXG4gICAgdXNlcktleUxpbmtDKDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGFzUGF0aCwgcXVlcnk6IHsga2V5OiBuZXdLZXkgfSB9fT48YT5odHRwczovL3JlZ3Rvb2wubmV0e2FzUGF0aH0/a2V5PXtuZXdLZXl9PC9hPjwvTGluaz4pXHJcbiAgICBxckRpc3BsYXlDKGZhbHNlKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjb250YWN0RWRpdChrZXksIGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgYWRkZWRDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUubWFwKG9iaiA9PiBvYmouY29kZSA9PT0ga2V5ID8geyAuLi5vYmosIFtmaWVsZF06IHZhbHVlIH0gOiBvYmopKVxyXG4gIH1cclxuICBmdW5jdGlvbiBxckdlbigpIHtcclxuICAgIHFyLnRvQ2FudmFzKHFyY29kZS5jdXJyZW50LCBgaHR0cHM6Ly9yZWd0b29sLm5ldCR7cm91dGVyLmFzUGF0aH0/a2V5PSR7dXNlcktleX1gKVxyXG4gICAgcXJEaXNwbGF5Qyh0cnVlKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVjcmVhdGVDb2RlKHJvdXRlci5hc1BhdGgpXHJcbiAgICBjb25zdCBjb25uZWN0aW9uczEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJhbnNmZXJDb25uZWN0aW9ucycpXHJcbiAgICBpZiAoY29ubmVjdGlvbnMxICE9PSBudWxsKSBhZGRlZEMoSlNPTi5wYXJzZShjb25uZWN0aW9uczEpKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB3cy5jdXJyZW50LmNsb3NlKClcclxuICAgICAgfSBjYXRjaCB7IH1cclxuICAgIH1cclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyYW5zZmVyQ29ubmVjdGlvbnMnLCBKU09OLnN0cmluZ2lmeShhZGRlZCkpXHJcbiAgfSwgW2FkZGVkXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5rZXkgPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICBhZGRlZEMocHJldlN0YXRlID0+IFt7IGNvZGU6IHJvdXRlci5xdWVyeS5rZXksIGRhdGU6IERhdGUubm93KCkgfSwgLi4ucHJldlN0YXRlXSlcclxuICAgIGNvbnN0IGFzUGF0aCA9IHJvdXRlci5hc1BhdGgubWF0Y2goL14oLiopXFw/LylbMV1cclxuICAgIHJvdXRlci5yZXBsYWNlKGFzUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSlcclxuICAgIHNob3dDb25uZWN0aW9uKHJvdXRlci5xdWVyeS5rZXkpXHJcbiAgICByZWNyZWF0ZUNvZGUoYXNQYXRoKVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkua2V5XSlcclxuXHJcbiAgZnVuY3Rpb24gbmV3Q29ubmVjdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHdhaXRpbmdDKHRydWUpXHJcbiAgICB3cy5jdXJyZW50ID0gbmV3IFdlYlNvY2tldChwcm9wcy5kZXNjLnNlcnZlcilcclxuICAgIHdzLmN1cnJlbnQub25tZXNzYWdlID0gZSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgY29udGVudCB9ID0gSlNPTi5wYXJzZShlLmRhdGEpXHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3N3YXAnOlxyXG4gICAgICAgICAgYWRkZWRDKHByZXZTdGF0ZSA9PiBbeyBjb2RlOiBjb250ZW50LCBkYXRlOiBEYXRlLm5vdygpIH0sIC4uLnByZXZTdGF0ZV0pXHJcbiAgICAgICAgICBzaG93Q29ubmVjdGlvbihjb250ZW50KVxyXG4gICAgICAgICAgd3MuY3VycmVudC5jbG9zZSgpXHJcbiAgICAgICAgICB3YWl0aW5nQyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29kZSA9IGUudGFyZ2V0LmNvZGUudmFsdWVcclxuICAgIGNvbnN0IG5ld2NvZGUgPSBbY29kZSwgbG9jYWxDb2RlXS5zb3J0KCkuam9pbignJylcclxuICAgIHdzLmN1cnJlbnQub25vcGVuID0gKCkgPT4gd3MuY3VycmVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ3N3YXAnLCBjb250ZW50OiBuZXdjb2RlIH0pKVxyXG4gIH1cclxuICBmdW5jdGlvbiB3c0Nsb3NlKCkge1xyXG4gICAgd2FpdGluZ0MoZmFsc2UpXHJcbiAgICB3cy5jdXJyZW50LmNsb3NlKClcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlQ29ubmVjdGlvbihjb2RlKSB7XHJcbiAgICBhZGRlZEMoYWRkZWQuZmlsdGVyKG9iaiA9PiBvYmouY29kZSA9PT0gY29kZSA/IGZhbHNlIDogdHJ1ZSkpXHJcbiAgICBjdXJyZW50QygnJylcclxuICB9XHJcbiAgZnVuY3Rpb24gc2hvd0Nvbm5lY3Rpb24oa2V5KSB7XHJcbiAgICBpZiAoIWNvbm5lY3Rpb25zLmluY2x1ZGVzKGtleSkpIGNvbm5lY3Rpb25zQyhbLi4uY29ubmVjdGlvbnMsIGtleV0pXHJcbiAgICBjdXJyZW50QyhrZXkpXHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5ibG9ja30gcmVmPXtibG9ja30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5tYWlufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MubmV3fSAke2N1cnJlbnQgPT09ICcnID8gcy5kaXNwbGF5IDogJyd9YH0+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oZWFkZXIxfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmhlYWRlcjJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5jb2RlLnN0cmluZzF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5jb2RlLnlvdXJDb2RlfTogPHNwYW4gb25DbGljaz17Y29weUNvZGV9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5jbGlja1RvQ29weX0gY2xhc3NOYW1lPXtzLmNvZGV9Pntsb2NhbENvZGV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuY29kZS5zdHJpbmcyfTwvZGl2PlxyXG4gICAgICAgICAgICAgIHt3YWl0aW5nID9cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuY29kZS53YWl0aW5nfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3dzQ2xvc2V9Pntwcm9wcy5kZXNjLmNvZGUucmV0cnl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDogPGZvcm0gY2xhc3NOYW1lPXtzLmZvcm19IG9uU3VibWl0PXtuZXdDb25uZWN0fT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPXtwcm9wcy5kZXNjLmNvZGUuaW5wdXRDb2RlUGxhY2Vob2xkZXJ9IGF1dG9Db21wbGV0ZT1cImZhbHNlXCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjb2RlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17cHJvcHMuZGVzYy5jb2RlLmFkZENvbnRhY3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oZWFkZXIzfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MucXIuc3RyaW5nMX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLnFyLnN0cmluZzJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt1c2VyS2V5TGlua31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29weUxpbmt9Pntwcm9wcy5kZXNjLnFyLmNvcHl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3FyRGlzcGxheSA/IHMucXJUcnVlIDogcy5xckZhbHNlfT5cclxuICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtxcmNvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3FyR2VufT57cHJvcHMuZGVzYy5xci5nZW5lcmF0ZX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sb3NzfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZWNyZWF0ZUNvZGV9Pntwcm9wcy5kZXNjLnJlY3JlYXRlfTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2FkZGVkLm1hcCgoeyBjb2RlLCBuYW1lLCBkYXRlLCBsYXN0IH0pID0+ICFjb25uZWN0aW9ucy5pbmNsdWRlcyhjb2RlKSA/IG51bGwgOlxyXG4gICAgICAgIDxFbGVtZW50IGRpc3BsYXk9e2N1cnJlbnQgPT09IGNvZGV9IGNvZGU9e2NvZGV9IGtleT17Y29kZX0gbmFtZT17bmFtZX0gZGF0ZT17ZGF0ZX0gbGFzdD17bGFzdH0gY29udGFjdEVkaXQ9e2NvbnRhY3RFZGl0fSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxGdWxsc2NyZWVuIGVsZW09e2Jsb2NrLmN1cnJlbnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhY3RzfT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjdXJyZW50QygnJyl9Pntwcm9wcy5kZXNjLmFkZH08L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YWRkZWQubWFwKG9iaiA9PiA8ZGl2IGtleT17b2JqLmNvZGV9PlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzaG93Q29ubmVjdGlvbihvYmouY29kZSl9PntvYmoubmFtZSA9PT0gdW5kZWZpbmVkID8gcHJvcHMuZGVzYy5uYW1lbGVzcyA6IG9iai5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyByZW1vdmVDb25uZWN0aW9uKG9iai5jb2RlKSB9fT48U3ZnIG5hbWU9XCJ2YXIveC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLmRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCB3ZWVrZGF5OiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PntvYmoubGFzdCA9PT0gdW5kZWZpbmVkID8gcHJvcHMuZGVzYy5lbXB0eSA6IG5ldyBEYXRlKG9iai5sYXN0KS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgd2Vla2RheTogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVsZW1lbnQoeyBjb2RlLCBuYW1lLCBkYXRlLCBsYXN0LCBkaXNwbGF5LCBjb250YWN0RWRpdCwgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtjaGF0LCBjaGF0Q10gPSB1c2VTdGF0ZShbXSkvL9Ch0L7QvtCx0YnQtdC90LjRjyDQsiDRh9Cw0YLQtVxyXG4gIGNvbnN0IFtmaWxlcywgZmlsZXNDXSA9IHVzZVN0YXRlKFtdKS8v0KTQsNC50LvRiyDQvdCwINC+0YLQv9GA0LDQstC60YNcclxuICBjb25zdCBbZmlsZXNTZW5kaW5nLCBmaWxlc1NlbmRpbmdDXSA9IHVzZVN0YXRlKGZhbHNlKS8v0KHQutGA0YvQstCw0YLRjCDRhNCw0LnQu9GLICjQuCDQvdC1INC+0YLQv9GA0LDQstC70Y/RgtGMINC40YUg0LbQtSkg0LXRgdC70Lgg0LjQtNGR0YIg0LjRhSDQvtGC0L/RgNCw0LLQutCwXHJcbiAgY29uc3QgW3N0YXR1cywgc3RhdHVzQ10gPSB1c2VTdGF0ZSgwKSAvLzAgLSBkaXNjb25uZWN0ZWQsIDEgLSBlc3RhYmxpc2hpbmcgYSBjb25uZWN0aW9uLCAyIC0gY29ubmVjdGVkIFxyXG4gIGNvbnN0IHdzID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgcGMgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBjaGFubmVsID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgY2hhdEJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjaGF0QmxvY2suY3VycmVudC5zY3JvbGxUb3AgPiBjaGF0QmxvY2suY3VycmVudC5zY3JvbGxIZWlnaHQgLSBjaGF0QmxvY2suY3VycmVudC5vZmZzZXRIZWlnaHQgLSAzMDApIHtcclxuICAgICAgY2hhdEJsb2NrLmN1cnJlbnQuc2Nyb2xsVG9wID0gY2hhdEJsb2NrLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICB9XHJcbiAgfSwgW2NoYXRdKVxyXG4gIGNvbnN0IGNsb3NlQWxsQ29ubmVjdGlvbnMgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjaGFubmVsLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgICBwYy5jdXJyZW50LmNsb3NlKClcclxuICAgICAgd3MuY3VycmVudC5jbG9zZSgpXHJcbiAgICB9IGNhdGNoIHsgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gMCkge1xyXG4gICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogcHJvcHMuZGVzYy5tc2cuc3lzTmV3IH0pXHJcbiAgICB9XHJcbiAgfSwgW3N0YXR1c10pXHJcbiAgY29uc3QgYWRkTXNnID0gb2JqID0+IGNoYXRDKChvbGRTdGF0ZSkgPT4gWy4uLm9sZFN0YXRlLCBvYmpdKVxyXG4gIGNvbnN0IGZpbGVTZXRBdHRyID0gKGlkLCBhdHRyLCB2YWx1ZSkgPT4gY2hhdEMocHJldlN0YXRlID0+IHByZXZTdGF0ZS5tYXAob2JqID0+IG9iai5pZCA9PT0gaWQgPyB7IC4uLm9iaiwgW2F0dHJdOiB2YWx1ZSB9IDogb2JqKSlcclxuXHJcbiAgY29uc3QgZmlsZURpc3BsYXkgPSAoZSkgPT4gZmlsZXNDKHByZXZTdGF0ZSA9PiBbLi4ucHJldlN0YXRlLCAuLi5lLnRhcmdldC5maWxlc10pXHJcbiAgY29uc3QgZmlsZUV4Y2x1ZGUgPSAoZmlsZSkgPT4gZmlsZXNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUuZmlsdGVyKGYgPT4gZiAhPT0gZmlsZSkpXHJcbiAgZnVuY3Rpb24gY3JlYXRlQXV4aWxpYXJ5SW5mbygpIHtcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGU6IE1hdGguZmxvb3Iobm93IC8gNjAwMDApICogNjAwMDAsXHJcbiAgICAgIGlkOiBub3cgJSAxMDAwMDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbGVEb3dubG9hZChibG9iLCBuYW1lKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBsaW5rLmRvd25sb2FkID0gbmFtZVxyXG4gICAgbGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxyXG4gICAgbGluay5jbGljaygpXHJcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGxpbmsuaHJlZilcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xvc2VBbGxDb25uZWN0aW9ucygpXHJcbiAgfSwgW10pXHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgY2xvc2VBbGxDb25uZWN0aW9ucygpXHJcbiAgICBzdGF0dXNDKDApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG5cclxuICAgIHN0YXR1c0MoMSlcclxuICAgIGZ1bmN0aW9uIGNoYW5uZWxTZXRIYW5kbGVycyhjaG5sKSB7XHJcbiAgICAgIGxldCBmaWxlRGF0YSA9IHt9XHJcbiAgICAgIGxldCBjdXJyZW50Q2h1bmsgPSAwXHJcbiAgICAgIGxldCBjaHVua3MgPSBbXVxyXG4gICAgICBsZXQgY3VycmVudEZpbGVcclxuICAgICAgbGV0IHByb2dyZXNzQ29lZiA9IDFcclxuXHJcbiAgICAgIGNobmwub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5vcGVuZWQgfSlcclxuICAgICAgICBzdGF0dXNDKDIpXHJcbiAgICAgICAgY29udGFjdEVkaXQoY29kZSwgJ2xhc3QnLCBEYXRlLm5vdygpKVxyXG4gICAgICB9XHJcbiAgICAgIGNobmwub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBjbG9zZUFsbENvbm5lY3Rpb25zKClcclxuICAgICAgICBzdGF0dXNDKDApXHJcbiAgICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLmNsb3NlZCB9KVxyXG4gICAgICB9XHJcbiAgICAgIGNobmwub25tZXNzYWdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5kYXRhKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IHR5cGUsIGNvbnRlbnQgfSA9IEpTT04ucGFyc2UoZS5kYXRhKVxyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdtc2cnKSB7XHJcbiAgICAgICAgICAgIGFkZE1zZyh7IHR5cGUsIGNvbnRlbnQsIGN1cnJlbnQ6IGZhbHNlLCAuLi5jcmVhdGVBdXhpbGlhcnlJbmZvKCkgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgICAgICAgY2h1bmtzID0gW11cclxuICAgICAgICAgICAgY3VycmVudENodW5rID0gMFxyXG4gICAgICAgICAgICBmaWxlRGF0YSA9IGNvbnRlbnRcclxuICAgICAgICAgICAgcHJvZ3Jlc3NDb2VmID0gTWF0aC5jZWlsKGZpbGVEYXRhLmNodW5rcyAvIDEwMClcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzQ29lZiA8IDEpIHByb2dyZXNzQ29lZiA9IDFcclxuICAgICAgICAgICAgY3VycmVudEZpbGUgPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgICAgY3VycmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZURhdGEubmFtZSxcclxuICAgICAgICAgICAgICBzaXplOiBmaWxlRGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgIC4uLmNyZWF0ZUF1eGlsaWFyeUluZm8oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZE1zZyhjdXJyZW50RmlsZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSlcclxuICAgICAgICAgIGN1cnJlbnRDaHVuaysrXHJcbiAgICAgICAgICBpZiAoY3VycmVudENodW5rICUgcHJvZ3Jlc3NDb2VmID09PSAwKSBmaWxlU2V0QXR0cihjdXJyZW50RmlsZS5pZCwgJ3Byb2dyZXNzJywgTWF0aC5yb3VuZChjdXJyZW50Q2h1bmsgLyBwcm9ncmVzc0NvZWYpKVxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA+PSBmaWxlRGF0YS5jaHVua3MpIHtcclxuICAgICAgICAgICAgZmlsZVNldEF0dHIoY3VycmVudEZpbGUuaWQsICdwcm9ncmVzcycsIDEwMClcclxuICAgICAgICAgICAgZmlsZVNldEF0dHIoY3VycmVudEZpbGUuaWQsICdibG9iJywgbmV3IEJsb2IoY2h1bmtzKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2hhbm5lbC5jdXJyZW50ID0gY2hubFxyXG4gICAgfVxyXG5cclxuICAgIC8vV2ViU29ja2V0IChlc3RhYmxpc2hpbmcgYSBjb25uZWN0aW9uKVxyXG4gICAgY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldChwcm9wcy5zZXJ2ZXIpXHJcbiAgICBjb25zdCBzZW5kID0gKHR5cGUsIGNvbnRlbnQpID0+IHdzcy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZSwgY29udGVudCB9KSlcclxuXHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIGljZVNlcnZlcnM6IE9iamVjdC5lbnRyaWVzKHByb3BzLmljZVNlcnZlcnMpLm1hcChvYmogPT4gb2JqWzFdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vV2ViUlRDIHNldHRpbmdzXHJcbiAgICBjb25zdCBSVENwYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWcpXHJcbiAgICBSVENwYy5vbmljZWNhbmRpZGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmNhbmRpZGF0ZSkge1xyXG4gICAgICAgIHNlbmQoXCJuZXdpY2VcIiwgZS5jYW5kaWRhdGUpXHJcbiAgICAgIH0gZWxzZSBhZGRNc2coXCJJY2UgY2FuZGlkYXRlcyDRg9GB0YLQsNC90L7QstC70LXQvdGLLiDQntC20LjQtNCw0L3QuNC1INC00LXQudGB0YLQstC40Lkg0LHRgNCw0YPQt9C10YDQsC5cIilcclxuICAgIH1cclxuICAgIFJUQ3BjLm9uZGF0YWNoYW5uZWwgPSBlID0+IGNoYW5uZWxTZXRIYW5kbGVycyhlLmNoYW5uZWwpXHJcblxyXG4gICAgd3NzLm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IFwi0KPQtNCw0LvQvtGB0Ywg0L/QvtC00LrQu9GO0YfQuNGC0YzRgdGPINC6IG1pZGRsZS3RgdC10YDQstC10YDRg1wiIH0pXHJcbiAgICAgIHNlbmQoJ2Nvbm5lY3QnLCBjb2RlKVxyXG4gICAgfVxyXG4gICAgd3NzLm9ubWVzc2FnZSA9IGUgPT4ge1xyXG4gICAgICBjb25zdCB7IHR5cGUsIGNvbnRlbnQgfSA9IEpTT04ucGFyc2UoZS5kYXRhKVxyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdjb25uZWN0JzpcclxuICAgICAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBcItCa0L7QvdGC0LDQutGCINC90LDQudC00LXQvS4g0KPRgdGC0LDQvdC+0LLQutCwINGB0L7QtdC00LjQvdC10L3QuNGPLi4uXCIgfSlcclxuICAgICAgICAgIFJUQ3BjLm9ubmVnb3RpYXRpb25uZWVkZWQgPSBlID0+IHtcclxuICAgICAgICAgICAgUlRDcGMuY3JlYXRlT2ZmZXIoKVxyXG4gICAgICAgICAgICAgIC50aGVuKG9mZmVyID0+IFJUQ3BjLnNldExvY2FsRGVzY3JpcHRpb24ob2ZmZXIpKVxyXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHNlbmQoXCJvZmZlclwiLCBSVENwYy5sb2NhbERlc2NyaXB0aW9uKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNoYW5uZWxTZXRIYW5kbGVycyhSVENwYy5jcmVhdGVEYXRhQ2hhbm5lbChcImNoYW5uZWxcIikpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJ29mZmVyJzpcclxuICAgICAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBcItCa0L7QvdGC0LDQutGCINC90LDQudC00LXQvS4g0KPRgdGC0LDQvdC+0LLQutCwINGB0L7QtdC00LjQvdC10L3QuNGPLi4uXCIgfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgdHlwZSwgY29udGVudCB9KVxyXG4gICAgICAgICAgUlRDcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihjb250ZW50KSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gUlRDcGMuY3JlYXRlQW5zd2VyKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGFuc3dlciA9PiBSVENwYy5zZXRMb2NhbERlc2NyaXB0aW9uKGFuc3dlcikpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHNlbmQoXCJhbnN3ZXJcIiwgUlRDcGMubG9jYWxEZXNjcmlwdGlvbikpXHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYW5zd2VyJzpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgdHlwZSwgY29udGVudCB9KVxyXG4gICAgICAgICAgUlRDcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihjb250ZW50KSlcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJuZXdpY2VcIjpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgdHlwZSwgY29udGVudCB9KVxyXG4gICAgICAgICAgUlRDcGMuYWRkSWNlQ2FuZGlkYXRlKG5ldyBSVENJY2VDYW5kaWRhdGUoY29udGVudCkpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd3NzLm9uZXJyb3IgPSBlID0+IGNvbnNvbGUubG9nKCdNaWRkbGUtc2VydmVyIGNvbm5lY3Rpb24gZXJyb3InKVxyXG4gICAgd3NzLm9uY2xvc2UgPSBlID0+IGNvbnNvbGUubG9nKCdNaWRkbGUtc2VydmVyIGNvbm5lY3Rpb24gY2xvc2VkJylcclxuICAgIHdzLmN1cnJlbnQgPSB3c3NcclxuICAgIHBjLmN1cnJlbnQgPSBSVENwY1xyXG4gIH1cclxuXHJcbiAgLy9TRU5EXHJcbiAgZnVuY3Rpb24gc2VuZENoYW5uZWwobXNnKSB7XHJcbiAgICBpZiAobXNnICE9PSAnJykge1xyXG4gICAgICBjaGFubmVsLmN1cnJlbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdHlwZTogJ21zZycsXHJcbiAgICAgICAgY29udGVudDogbXNnLFxyXG4gICAgICB9KSlcclxuICAgICAgYWRkTXNnKHtcclxuICAgICAgICB0eXBlOiAnbXNnJyxcclxuICAgICAgICBjb250ZW50OiBtc2csXHJcbiAgICAgICAgY3VycmVudDogdHJ1ZSxcclxuICAgICAgICAuLi5jcmVhdGVBdXhpbGlhcnlJbmZvKClcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmIChmaWxlcy5sZW5ndGggIT09IDAgJiYgIWZpbGVzU2VuZGluZykge1xyXG4gICAgICBsZXQgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcclxuICAgICAgbGV0IGN1cnJlbnRDaHVuayA9IDBcclxuICAgICAgbGV0IGN1cnJlbnRGaWxlID0gMFxyXG4gICAgICBsZXQgcHJvZ3Jlc3NDb2VmID0gMFxyXG4gICAgICBsZXQgbXNnT2JqXHJcbiAgICAgIGNvbnN0IEJZVEVTX1BFUl9DSFVOSyA9IDgwOTJcclxuICAgICAgZmlsZXNTZW5kaW5nQyh0cnVlKVxyXG5cclxuICAgICAgZnVuY3Rpb24gcmVhZE5leHRDaHVuaygpIHtcclxuICAgICAgICBpZiAoY3VycmVudENodW5rID09PSAwKSB7XHJcbiAgICAgICAgICBjaGFubmVsLmN1cnJlbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGVzW2N1cnJlbnRGaWxlXS5uYW1lLFxyXG4gICAgICAgICAgICAgIGNodW5rczogTWF0aC5mbG9vcihmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSAvIEJZVEVTX1BFUl9DSFVOSyksXHJcbiAgICAgICAgICAgICAgc2l6ZTogZmlsZXNbY3VycmVudEZpbGVdLnNpemUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICAgIG1zZ09iaiA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICBjdXJyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBibG9iOiBmaWxlc1tjdXJyZW50RmlsZV0sXHJcbiAgICAgICAgICAgIHNpemU6IGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplLFxyXG4gICAgICAgICAgICBuYW1lOiBmaWxlc1tjdXJyZW50RmlsZV0ubmFtZSxcclxuICAgICAgICAgICAgLi4uY3JlYXRlQXV4aWxpYXJ5SW5mbygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcm9ncmVzc0NvZWYgPSBNYXRoLmNlaWwoZmlsZXNbY3VycmVudEZpbGVdLnNpemUgLyBCWVRFU19QRVJfQ0hVTksgLyAxMDApXHJcbiAgICAgICAgICBhZGRNc2cobXNnT2JqKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdGFydCA9IEJZVEVTX1BFUl9DSFVOSyAqIGN1cnJlbnRDaHVua1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplLCBzdGFydCArIEJZVEVTX1BFUl9DSFVOSylcclxuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGVzW2N1cnJlbnRGaWxlXS5zbGljZShzdGFydCwgZW5kKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY2hhbm5lbC5jdXJyZW50LnNlbmQoZmlsZVJlYWRlci5yZXN1bHQpXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDaHVuayAlIHByb2dyZXNzQ29lZiA9PT0gMCkgZmlsZVNldEF0dHIobXNnT2JqLmlkLCAncHJvZ3Jlc3MnLCBNYXRoLnJvdW5kKGN1cnJlbnRDaHVuayAvIHByb2dyZXNzQ29lZikpXHJcbiAgICAgICAgY3VycmVudENodW5rKytcclxuICAgICAgICBpZiAoY3VycmVudENodW5rID4gTWF0aC5mbG9vcihmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSAvIEJZVEVTX1BFUl9DSFVOSykpIHtcclxuICAgICAgICAgIGZpbGVTZXRBdHRyKG1zZ09iai5pZCwgJ3Byb2dyZXNzJywgMTAwKVxyXG4gICAgICAgICAgY3VycmVudEZpbGUrK1xyXG4gICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IGN1cnJlbnRGaWxlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDaHVuayA9IDBcclxuICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWxlc0MoW10pXHJcbiAgICAgICAgICAgIGZpbGVzU2VuZGluZ0MoZmFsc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHJlYWROZXh0Q2h1bmsoKVxyXG4gICAgICB9XHJcbiAgICAgIHJlYWROZXh0Q2h1bmsoKVxyXG4gICAgfVxyXG4gIH1cclxuICAvL9Ce0YLQv9GA0LDQstC60LAg0YHQvtC+0LHRidC10L3QuNGPINC4INC10LPQviDQvtGC0L7QsdGA0LDQttC10L3QuNC1INCyINGH0LDRgtC1XHJcbiAgZnVuY3Rpb24gc2VuZG1zZyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGlmIChjaGFubmVsLmN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGFkZE1zZyh7IHR5cGU6IFwic3lzXCIsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLm5vdHNlbnQgfSlcclxuICAgIH1cclxuICAgIGlmIChjaGFubmVsLmN1cnJlbnQucmVhZHlTdGF0ZSAhPT0gXCJvcGVuXCIpIHtcclxuICAgICAgc3dpdGNoIChjaGFubmVsLmN1cnJlbnQucmVhZHlTdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb25uZWN0aW5nXCI6IHJldHVybiBhZGRNc2coeyB0eXBlOiBcInN5c1wiLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jb25uZWN0aW5nIH0pXHJcbiAgICAgICAgY2FzZSBcImNsb3NpbmdcIjogcmV0dXJuIGFkZE1zZyh7IHR5cGU6IFwic3lzXCIsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLmNsb3NpbmcgfSlcclxuICAgICAgICBjYXNlIFwiY2xvc2VcIjogcmV0dXJuIGFkZE1zZyh7IHR5cGU6IFwic3lzXCIsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLmNsb3NlIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbmRDaGFubmVsKGUudGFyZ2V0Lm1zZy52YWx1ZSlcclxuICAgIGUudGFyZ2V0Lm1zZy52YWx1ZSA9IFwiXCJcclxuXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlTdGF0dXMoKSB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIDA6IHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3MucmVkfT57cHJvcHMuZGVzYy5zdGF0dXMwfTwvc3Bhbj5cclxuICAgICAgY2FzZSAxOiByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLm9yYW5nZX0+e3Byb3BzLmRlc2Muc3RhdHVzMX08L3NwYW4+XHJcbiAgICAgIGNhc2UgMjogcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17cy5ncmVlbn0+e3Byb3BzLmRlc2Muc3RhdHVzMn08L3NwYW4+XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7cy5lbGVtZW50fSAke2Rpc3BsYXkgPyBzLmRpc3BsYXkgOiAnJ31gfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmluZm99PlxyXG4gICAgICA8ZGl2PntuYW1lID09PSB1bmRlZmluZWQgPyBwcm9wcy5kZXNjLm5hbWVsZXNzIDogbmFtZX08L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MuYWRkZWR9Ojwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgeWVhcjogJ251bWVyaWMnLCB9KX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmxhc3RDb25uZWN0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgIHtsYXN0ID09PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5zdGF0dXMwfTwvc3Bhbj5cclxuICAgICAgICAgICAgOiA8c3Bhbj57bmV3IERhdGUobGFzdCkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIHllYXI6ICdudW1lcmljJyB9KX08L3NwYW4+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmNvbm5lY3Rpb259Ojwvc3Bhbj5cclxuICAgICAgICAgIHtnZXRFbGVtZW50c0J5U3RhdHVzKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jaGF0fT5cclxuICAgICAgPGRpdiByZWY9e2NoYXRCbG9ja30+XHJcbiAgICAgICAge2NoYXQubWFwKChvYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtc2dcIjogcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtvYmouY3VycmVudCA/IHMucmlnaHQgOiBzLmxlZnR9ID5cclxuICAgICAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmouZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBtaW51dGU6ICdudW1lcmljJywgaG91cjogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e29iai5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcImZpbGVcIjogcmV0dXJuIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake29iai5jdXJyZW50ID8gcy5yaWdodCA6IHMubGVmdH0gJHtzLmZpbGV9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvYmoucHJvZ3Jlc3MgPT09IDEwMCB8fCBvYmouY3VycmVudCA/ICgpID0+IGZpbGVEb3dubG9hZChvYmouYmxvYiwgb2JqLm5hbWUpIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLmRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgbWludXRlOiAnbnVtZXJpYycsIGhvdXI6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICAgICAgICA8U3ZnIG5hbWU9XCJ2YXIvc2F2ZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e29iai5wcm9ncmVzc30lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntNYXRoLnJvdW5kKG9iai5zaXplIC8gMTAyNCl9IHtwcm9wcy5kZXNjLmtifTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgY2FzZSBcInN5c1wiOiByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3Muc3lzdGVtfT5cclxuICAgICAgICAgICAgICB7b2JqLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHtzdGF0dXMgPT09IDAgPyA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0fT57cHJvcHMuZGVzYy5xdWVyeU5ld308L2J1dHRvbj5cclxuICAgICAgICAgIDogc3RhdHVzID09PSAxID8gPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZX0+e3Byb3BzLmRlc2MucXVlcnlDYW5jZWx9PC9idXR0b24+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZG1zZ30+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17ZmlsZXNTZW5kaW5nID8geyBkaXNwbGF5OiAnbm9uZScgfSA6IHt9fT5cclxuICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGUsIGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2UgPT4gZmlsZURvd25sb2FkKGZpbGUsIGZpbGUubmFtZSl9IGtleT17ZmlsZS5sYXN0TW9kaWZpZWR9PlxyXG4gICAgICAgICAgICAgIDxTdmcgbmFtZT1cInZhci9maWxlLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e2ZpbGUubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2UgPT4gZmlsZUV4Y2x1ZGUoZmlsZSl9PjxTdmcgbmFtZT1cInZhci94LnN2Z1wiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57TWF0aC5yb3VuZChmaWxlLnNpemUgLyAxMDI0KX0ge3Byb3BzLmRlc2Mua2J9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLmF0dGFjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZmlsZXNTZW5kaW5nfSB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIG9uQ2hhbmdlPXtmaWxlRGlzcGxheX0gLz5cclxuICAgICAgICAgICAgPFN2ZyBuYW1lPVwidmFyL2NsaXAuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJtc2dcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5zZW5kfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICA8U3ZnIG5hbWU9XCJ2YXIvc2VuZC5zdmdcIiAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9