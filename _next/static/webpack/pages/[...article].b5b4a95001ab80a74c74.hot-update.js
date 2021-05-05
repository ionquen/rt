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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UcmFuc2Zlci5qcyJdLCJuYW1lcyI6WyJUcmFuc2ZlciIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRlZCIsImFkZGVkQyIsImN1cnJlbnQiLCJjdXJyZW50QyIsImNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbnNDIiwid2FpdGluZyIsIndhaXRpbmdDIiwicXJEaXNwbGF5IiwicXJEaXNwbGF5QyIsImxvY2FsQ29kZSIsImxvY2FsQ29kZUMiLCJ1c2VyS2V5IiwidXNlcktleUMiLCJ1c2VyS2V5TGluayIsInVzZXJLZXlMaW5rQyIsImJsb2NrIiwidXNlUmVmIiwid3MiLCJxcmNvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFzUGF0aCIsImNvcHlDb2RlIiwicmVjcmVhdGVDb2RlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3S2V5IiwidG9TdHJpbmciLCJzdWJzdHIiLCJwYXRobmFtZSIsInF1ZXJ5Iiwia2V5IiwiY29udGFjdEVkaXQiLCJmaWVsZCIsInZhbHVlIiwicHJldlN0YXRlIiwibWFwIiwib2JqIiwiY29kZSIsInFyR2VuIiwicXIiLCJ0b0NhbnZhcyIsInVzZUVmZmVjdCIsImNvbm5lY3Rpb25zMSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjbG9zZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsIm1hdGNoIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzaG93Q29ubmVjdGlvbiIsIm5ld0Nvbm5lY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJXZWJTb2NrZXQiLCJkZXNjIiwic2VydmVyIiwib25tZXNzYWdlIiwiZGF0YSIsInR5cGUiLCJjb250ZW50IiwidGFyZ2V0IiwibmV3Y29kZSIsInNvcnQiLCJqb2luIiwib25vcGVuIiwic2VuZCIsIndzQ2xvc2UiLCJyZW1vdmVDb25uZWN0aW9uIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzIiwibWFpbiIsImRpc3BsYXkiLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN0cmluZzEiLCJ5b3VyQ29kZSIsImNsaWNrVG9Db3B5Iiwic3RyaW5nMiIsInJldHJ5IiwiZm9ybSIsImlucHV0Q29kZVBsYWNlaG9sZGVyIiwiYWRkQ29udGFjdCIsImhlYWRlcjMiLCJjb3B5IiwicXJUcnVlIiwicXJGYWxzZSIsImdlbmVyYXRlIiwibG9zcyIsInJlY3JlYXRlIiwibmFtZSIsImxhc3QiLCJjb250YWN0cyIsImFkZCIsIm5hbWVsZXNzIiwic3RvcFByb3BhZ2F0aW9uIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwieWVhciIsImVtcHR5IiwiRWxlbWVudCIsImNoYXQiLCJjaGF0QyIsImZpbGVzIiwiZmlsZXNDIiwiZmlsZXNTZW5kaW5nIiwiZmlsZXNTZW5kaW5nQyIsInN0YXR1cyIsInN0YXR1c0MiLCJwYyIsImNoYW5uZWwiLCJjaGF0QmxvY2siLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbG9zZUFsbENvbm5lY3Rpb25zIiwiYWRkTXNnIiwibXNnIiwic3lzTmV3Iiwib2xkU3RhdGUiLCJmaWxlU2V0QXR0ciIsImlkIiwiYXR0ciIsImZpbGVEaXNwbGF5IiwiZmlsZUV4Y2x1ZGUiLCJmaWxlIiwiZiIsImNyZWF0ZUF1eGlsaWFyeUluZm8iLCJmbG9vciIsImZpbGVEb3dubG9hZCIsImJsb2IiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJzdGFydCIsImNoYW5uZWxTZXRIYW5kbGVycyIsImNobmwiLCJmaWxlRGF0YSIsImN1cnJlbnRDaHVuayIsImNodW5rcyIsImN1cnJlbnRGaWxlIiwicHJvZ3Jlc3NDb2VmIiwib3BlbmVkIiwib25jbG9zZSIsImNsb3NlZCIsImNlaWwiLCJzaXplIiwicHVzaCIsIkJsb2IiLCJ3c3MiLCJjb25maWciLCJpY2VTZXJ2ZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsIlJUQ3BjIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvbmljZWNhbmRpZGF0ZSIsImNhbmRpZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvbmRhdGFjaGFubmVsIiwib25uZWdvdGlhdGlvbm5lZWRlZCIsImNyZWF0ZU9mZmVyIiwidGhlbiIsIm9mZmVyIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImxvY2FsRGVzY3JpcHRpb24iLCJjcmVhdGVEYXRhQ2hhbm5lbCIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwiUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiYW5zd2VyIiwiYWRkSWNlQ2FuZGlkYXRlIiwiUlRDSWNlQ2FuZGlkYXRlIiwib25lcnJvciIsInNlbmRDaGFubmVsIiwibGVuZ3RoIiwicmVhZE5leHRDaHVuayIsIkJZVEVTX1BFUl9DSFVOSyIsIm1zZ09iaiIsImVuZCIsIm1pbiIsImZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsInNsaWNlIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlc3VsdCIsInNlbmRtc2ciLCJub3RzZW50IiwiY2hhbm5lbFN0YXRlIiwicmVhZHlTdGF0ZSIsImNvbm5lY3RpbmciLCJjbG9zaW5nIiwiZ2V0RWxlbWVudHNCeVN0YXR1cyIsInJlZCIsInN0YXR1czAiLCJvcmFuZ2UiLCJzdGF0dXMxIiwiZ3JlZW4iLCJzdGF0dXMyIiwiZWxlbWVudCIsImluZm8iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJsYXN0Q29ubmVjdGlvbiIsImNvbm5lY3Rpb24iLCJpbmRleCIsInJpZ2h0IiwibGVmdCIsIm1pbnV0ZSIsImhvdXIiLCJwcm9ncmVzcyIsImtiIiwic3lzdGVtIiwicXVlcnlOZXciLCJxdWVyeUNhbmNlbCIs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O0FBQUEsZ0JBREYsZUFjRTtBQUFBLGtDQUNFO0FBQU8sNEJBQWN2TyxLQUFLLENBQUN1RSxJQUFOLENBQVcySyxNQUFoQztBQUFBLG9DQUNFO0FBQU8sc0JBQVEsRUFBRXRILFlBQWpCO0FBQStCLGtCQUFJLEVBQUMsTUFBcEM7QUFBMkMsc0JBQVEsTUFBbkQ7QUFBb0Qsc0JBQVEsRUFBRWtCO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyw0Q0FBRDtBQUFLLGtCQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQU8sd0JBQVksRUFBQyxPQUFwQjtBQUE0QixnQkFBSSxFQUFDLE1BQWpDO0FBQXdDLGdCQUFJLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU1FO0FBQU8sNEJBQWM5SSxLQUFLLENBQUN1RSxJQUFOLENBQVdXLElBQWhDO0FBQUEsb0NBQ0U7QUFBTyxrQkFBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLDRDQUFEO0FBQUssa0JBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBOEVEOztJQXBWUXFDLE87O01BQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLmI1YjRhOTUwMDFhYjgwYTc0Yzc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcXIgZnJvbSAncXJjb2RlJ1xyXG5cclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL3RyYW5zZmVyLnN0eWwnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcbmltcG9ydCBTdmcgZnJvbSAnLi4vU3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNmZXIoeyBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW2FkZGVkLCBhZGRlZENdID0gdXNlU3RhdGUoW10pLy/QnNCw0YHRgdC40LIg0LTQvtCx0LDQstC70LXQvdC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LJcclxuICBjb25zdCBbY3VycmVudCwgY3VycmVudENdID0gdXNlU3RhdGUoJycpLy/QntGC0L7QsdGA0LDQttCw0LXQvNC+0LUg0L/QvtC00LrQu9GO0YfQtdC90LjQtSAoJycgPSDRgdC+0LfQtNCw0YLRjCDQvdC+0LLQvtC1KVxyXG4gIGNvbnN0IFtjb25uZWN0aW9ucywgY29ubmVjdGlvbnNDXSA9IHVzZVN0YXRlKFtdKS8v0JzQsNGB0YHQuNCyINC60LvRjtGH0LXQuSDQstGB0LXRhSDQsNC60YLQuNCy0L3Ri9GFINC/0L7QtNC60LvRjtGH0LXQvdC40LlcclxuXHJcbiAgY29uc3QgW3dhaXRpbmcsIHdhaXRpbmdDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtxckRpc3BsYXksIHFyRGlzcGxheUNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvY2FsQ29kZSwgbG9jYWxDb2RlQ10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt1c2VyS2V5LCB1c2VyS2V5Q10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt1c2VyS2V5TGluaywgdXNlcktleUxpbmtDXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3Qgd3MgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBxcmNvZGUgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGZ1bmN0aW9uIGNvcHlMaW5rKCkgeyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChgaHR0cHM6Ly9yZWd0b29sLm5ldCR7cm91dGVyLmFzUGF0aH0/a2V5PSR7dXNlcktleX1gKSB9XHJcbiAgZnVuY3Rpb24gY29weUNvZGUoKSB7IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGAke2xvY2FsQ29kZX1gKSB9XHJcbiAgZnVuY3Rpb24gcmVjcmVhdGVDb2RlKGFzUGF0aCkgey8vYW5kIHVwZGF0ZSBsaW5rXHJcbiAgICBsb2NhbENvZGVDKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpXHJcbiAgICBjb25zdCBuZXdLZXkgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMilcclxuICAgIHVzZXJLZXlDKG5ld0tleSlcclxuICAgIHVzZXJLZXlMaW5rQyg8TGluayBocmVmPXt7IHBhdGhuYW1lOiBhc1BhdGgsIHF1ZXJ5OiB7IGtleTogbmV3S2V5IH0gfX0+PGE+aHR0cHM6Ly9yZWd0b29sLm5ldHthc1BhdGh9P2tleT17bmV3S2V5fTwvYT48L0xpbms+KVxyXG4gICAgcXJEaXNwbGF5QyhmYWxzZSlcclxuICB9XHJcbiAgZnVuY3Rpb24gY29udGFjdEVkaXQoa2V5LCBmaWVsZCwgdmFsdWUpIHtcclxuICAgIGFkZGVkQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLm1hcChvYmogPT4gb2JqLmNvZGUgPT09IGtleSA/IHsgLi4ub2JqLCBbZmllbGRdOiB2YWx1ZSB9IDogb2JqKSlcclxuICB9XHJcbiAgZnVuY3Rpb24gcXJHZW4oKSB7XHJcbiAgICBxci50b0NhbnZhcyhxcmNvZGUuY3VycmVudCwgYGh0dHBzOi8vcmVndG9vbC5uZXQke3JvdXRlci5hc1BhdGh9P2tleT0ke3VzZXJLZXl9YClcclxuICAgIHFyRGlzcGxheUModHJ1ZSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlY3JlYXRlQ29kZShyb3V0ZXIuYXNQYXRoKVxyXG4gICAgY29uc3QgY29ubmVjdGlvbnMxID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyYW5zZmVyQ29ubmVjdGlvbnMnKVxyXG4gICAgaWYgKGNvbm5lY3Rpb25zMSAhPT0gbnVsbCkgYWRkZWRDKEpTT04ucGFyc2UoY29ubmVjdGlvbnMxKSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd3MuY3VycmVudC5jbG9zZSgpXHJcbiAgICAgIH0gY2F0Y2ggeyB9XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0cmFuc2ZlckNvbm5lY3Rpb25zJywgSlNPTi5zdHJpbmdpZnkoYWRkZWQpKVxyXG4gIH0sIFthZGRlZF0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucXVlcnkua2V5ID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgYWRkZWRDKHByZXZTdGF0ZSA9PiBbeyBjb2RlOiByb3V0ZXIucXVlcnkua2V5LCBkYXRlOiBEYXRlLm5vdygpIH0sIC4uLnByZXZTdGF0ZV0pXHJcbiAgICBjb25zdCBhc1BhdGggPSByb3V0ZXIuYXNQYXRoLm1hdGNoKC9eKC4qKVxcPy8pWzFdXHJcbiAgICByb3V0ZXIucmVwbGFjZShhc1BhdGgsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pXHJcbiAgICBzaG93Q29ubmVjdGlvbihyb3V0ZXIucXVlcnkua2V5KVxyXG4gICAgcmVjcmVhdGVDb2RlKGFzUGF0aClcclxuICB9LCBbcm91dGVyLnF1ZXJ5LmtleV0pXHJcblxyXG4gIGZ1bmN0aW9uIG5ld0Nvbm5lY3QoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB3YWl0aW5nQyh0cnVlKVxyXG4gICAgd3MuY3VycmVudCA9IG5ldyBXZWJTb2NrZXQocHJvcHMuZGVzYy5zZXJ2ZXIpXHJcbiAgICB3cy5jdXJyZW50Lm9ubWVzc2FnZSA9IGUgPT4ge1xyXG4gICAgICBjb25zdCB7IHR5cGUsIGNvbnRlbnQgfSA9IEpTT04ucGFyc2UoZS5kYXRhKVxyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdzd2FwJzpcclxuICAgICAgICAgIGFkZGVkQyhwcmV2U3RhdGUgPT4gW3sgY29kZTogY29udGVudCwgZGF0ZTogRGF0ZS5ub3coKSB9LCAuLi5wcmV2U3RhdGVdKVxyXG4gICAgICAgICAgc2hvd0Nvbm5lY3Rpb24oY29udGVudClcclxuICAgICAgICAgIHdzLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgICAgICAgd2FpdGluZ0MoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNvZGUgPSBlLnRhcmdldC5jb2RlLnZhbHVlXHJcbiAgICBjb25zdCBuZXdjb2RlID0gW2NvZGUsIGxvY2FsQ29kZV0uc29ydCgpLmpvaW4oJycpXHJcbiAgICB3cy5jdXJyZW50Lm9ub3BlbiA9ICgpID0+IHdzLmN1cnJlbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdzd2FwJywgY29udGVudDogbmV3Y29kZSB9KSlcclxuICB9XHJcbiAgZnVuY3Rpb24gd3NDbG9zZSgpIHtcclxuICAgIHdhaXRpbmdDKGZhbHNlKVxyXG4gICAgd3MuY3VycmVudC5jbG9zZSgpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbW92ZUNvbm5lY3Rpb24oY29kZSkge1xyXG4gICAgYWRkZWRDKGFkZGVkLmZpbHRlcihvYmogPT4gb2JqLmNvZGUgPT09IGNvZGUgPyBmYWxzZSA6IHRydWUpKVxyXG4gICAgY3VycmVudEMoJycpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNob3dDb25uZWN0aW9uKGtleSkge1xyXG4gICAgaWYgKCFjb25uZWN0aW9ucy5pbmNsdWRlcyhrZXkpKSBjb25uZWN0aW9uc0MoWy4uLmNvbm5lY3Rpb25zLCBrZXldKVxyXG4gICAgY3VycmVudEMoa2V5KVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9IHJlZj17YmxvY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubWFpbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLm5ld30gJHtjdXJyZW50ID09PSAnJyA/IHMuZGlzcGxheSA6ICcnfWB9PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGVhZGVyMX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oZWFkZXIyfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuY29kZS5zdHJpbmcxfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuY29kZS55b3VyQ29kZX06IDxzcGFuIG9uQ2xpY2s9e2NvcHlDb2RlfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MuY2xpY2tUb0NvcHl9IGNsYXNzTmFtZT17cy5jb2RlfT57bG9jYWxDb2RlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmNvZGUuc3RyaW5nMn08L2Rpdj5cclxuICAgICAgICAgICAgICB7d2FpdGluZyA/XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmNvZGUud2FpdGluZ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt3c0Nsb3NlfT57cHJvcHMuZGVzYy5jb2RlLnJldHJ5fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA6IDxmb3JtIGNsYXNzTmFtZT17cy5mb3JtfSBvblN1Ym1pdD17bmV3Q29ubmVjdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj17cHJvcHMuZGVzYy5jb2RlLmlucHV0Q29kZVBsYWNlaG9sZGVyfSBhdXRvQ29tcGxldGU9XCJmYWxzZVwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiY29kZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9e3Byb3BzLmRlc2MuY29kZS5hZGRDb250YWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuaGVhZGVyM308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLnFyLnN0cmluZzF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5xci5zdHJpbmcyfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dXNlcktleUxpbmt9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlMaW5rfT57cHJvcHMuZGVzYy5xci5jb3B5fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtxckRpc3BsYXkgPyBzLnFyVHJ1ZSA6IHMucXJGYWxzZX0+XHJcbiAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17cXJjb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtxckdlbn0+e3Byb3BzLmRlc2MucXIuZ2VuZXJhdGV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MubG9zc308L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVjcmVhdGVDb2RlfT57cHJvcHMuZGVzYy5yZWNyZWF0ZX08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHthZGRlZC5tYXAoKHsgY29kZSwgbmFtZSwgZGF0ZSwgbGFzdCB9KSA9PiAhY29ubmVjdGlvbnMuaW5jbHVkZXMoY29kZSkgPyBudWxsIDpcclxuICAgICAgICA8RWxlbWVudCBkaXNwbGF5PXtjdXJyZW50ID09PSBjb2RlfSBjb2RlPXtjb2RlfSBrZXk9e2NvZGV9IG5hbWU9e25hbWV9IGRhdGU9e2RhdGV9IGxhc3Q9e2xhc3R9IGNvbnRhY3RFZGl0PXtjb250YWN0RWRpdH0gcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWN0c30+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3VycmVudEMoJycpfT57cHJvcHMuZGVzYy5hZGR9PC9idXR0b24+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2FkZGVkLm1hcChvYmogPT4gPGRpdiBrZXk9e29iai5jb2RlfT5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2hvd0Nvbm5lY3Rpb24ob2JqLmNvZGUpfT57b2JqLm5hbWUgPT09IHVuZGVmaW5lZCA/IHByb3BzLmRlc2MubmFtZWxlc3MgOiBvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgcmVtb3ZlQ29ubmVjdGlvbihvYmouY29kZSkgfX0+PFN2ZyBuYW1lPVwidmFyL3guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXY+e25ldyBEYXRlKG9iai5kYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgd2Vla2RheTogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdj57b2JqLmxhc3QgPT09IHVuZGVmaW5lZCA/IHByb3BzLmRlc2MuZW1wdHkgOiBuZXcgRGF0ZShvYmoubGFzdCkudG9Mb2NhbGVUaW1lU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIHdlZWtkYXk6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5mdW5jdGlvbiBFbGVtZW50KHsgY29kZSwgbmFtZSwgZGF0ZSwgbGFzdCwgZGlzcGxheSwgY29udGFjdEVkaXQsIHByb3BzIH0pIHtcclxuICBjb25zdCBbY2hhdCwgY2hhdENdID0gdXNlU3RhdGUoW10pLy/QodC+0L7QsdGJ0LXQvdC40Y8g0LIg0YfQsNGC0LVcclxuICBjb25zdCBbZmlsZXMsIGZpbGVzQ10gPSB1c2VTdGF0ZShbXSkvL9Ck0LDQudC70Ysg0L3QsCDQvtGC0L/RgNCw0LLQutGDXHJcbiAgY29uc3QgW2ZpbGVzU2VuZGluZywgZmlsZXNTZW5kaW5nQ10gPSB1c2VTdGF0ZShmYWxzZSkvL9Ch0LrRgNGL0LLQsNGC0Ywg0YTQsNC50LvRiyAo0Lgg0L3QtSDQvtGC0L/RgNCw0LLQu9GP0YLRjCDQuNGFINC20LUpINC10YHQu9C4INC40LTRkdGCINC40YUg0L7RgtC/0YDQsNCy0LrQsFxyXG4gIGNvbnN0IFtzdGF0dXMsIHN0YXR1c0NdID0gdXNlU3RhdGUoMCkgLy8wIC0gZGlzY29ubmVjdGVkLCAxIC0gZXN0YWJsaXNoaW5nIGEgY29ubmVjdGlvbiwgMiAtIGNvbm5lY3RlZCBcclxuICBjb25zdCB3cyA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHBjID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgY2hhbm5lbCA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGNoYXRCbG9jayA9IHVzZVJlZihudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhdEJsb2NrLmN1cnJlbnQuc2Nyb2xsVG9wID4gY2hhdEJsb2NrLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0IC0gY2hhdEJsb2NrLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgIGNoYXRCbG9jay5jdXJyZW50LnNjcm9sbFRvcCA9IGNoYXRCbG9jay5jdXJyZW50LnNjcm9sbEhlaWdodFxyXG4gICAgfVxyXG4gIH0sIFtjaGF0XSlcclxuICBjb25zdCBjbG9zZUFsbENvbm5lY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2hhbm5lbC5jdXJyZW50LmNsb3NlKClcclxuICAgICAgcGMuY3VycmVudC5jbG9zZSgpXHJcbiAgICAgIHdzLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgfSBjYXRjaCB7IH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0dXMgPT09IDApIHtcclxuICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLnN5c05ldyB9KVxyXG4gICAgfVxyXG4gIH0sIFtzdGF0dXNdKVxyXG4gIGNvbnN0IGFkZE1zZyA9IG9iaiA9PiBjaGF0Qygob2xkU3RhdGUpID0+IFsuLi5vbGRTdGF0ZSwgb2JqXSlcclxuICBjb25zdCBmaWxlU2V0QXR0ciA9IChpZCwgYXR0ciwgdmFsdWUpID0+IGNoYXRDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUubWFwKG9iaiA9PiBvYmouaWQgPT09IGlkID8geyAuLi5vYmosIFthdHRyXTogdmFsdWUgfSA6IG9iaikpXHJcblxyXG4gIGNvbnN0IGZpbGVEaXNwbGF5ID0gKGUpID0+IGZpbGVzQyhwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgLi4uZS50YXJnZXQuZmlsZXNdKVxyXG4gIGNvbnN0IGZpbGVFeGNsdWRlID0gKGZpbGUpID0+IGZpbGVzQyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlLmZpbHRlcihmID0+IGYgIT09IGZpbGUpKVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUF1eGlsaWFyeUluZm8oKSB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRlOiBNYXRoLmZsb29yKG5vdyAvIDYwMDAwKSAqIDYwMDAwLFxyXG4gICAgICBpZDogbm93ICUgMTAwMDAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWxlRG93bmxvYWQoYmxvYiwgbmFtZSkge1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgbGluay5kb3dubG9hZCA9IG5hbWVcclxuICAgIGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcclxuICAgIGxpbmsuY2xpY2soKVxyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChsaW5rLmhyZWYpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IGNsb3NlQWxsQ29ubmVjdGlvbnMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgIGNsb3NlQWxsQ29ubmVjdGlvbnMoKVxyXG4gICAgc3RhdHVzQygwKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuXHJcbiAgICBzdGF0dXNDKDEpXHJcbiAgICBmdW5jdGlvbiBjaGFubmVsU2V0SGFuZGxlcnMoY2hubCkge1xyXG4gICAgICBsZXQgZmlsZURhdGEgPSB7fVxyXG4gICAgICBsZXQgY3VycmVudENodW5rID0gMFxyXG4gICAgICBsZXQgY2h1bmtzID0gW11cclxuICAgICAgbGV0IGN1cnJlbnRGaWxlXHJcbiAgICAgIGxldCBwcm9ncmVzc0NvZWYgPSAxXHJcblxyXG4gICAgICBjaG5sLm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogcHJvcHMuZGVzYy5tc2cub3BlbmVkIH0pXHJcbiAgICAgICAgc3RhdHVzQygyKVxyXG4gICAgICAgIGNvbnRhY3RFZGl0KGNvZGUsICdsYXN0JywgRGF0ZS5ub3coKSlcclxuICAgICAgfVxyXG4gICAgICBjaG5sLm9uY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xvc2VBbGxDb25uZWN0aW9ucygpXHJcbiAgICAgICAgc3RhdHVzQygwKVxyXG4gICAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jbG9zZWQgfSlcclxuICAgICAgfVxyXG4gICAgICBjaG5sLm9ubWVzc2FnZSA9IGUgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IHR5cGUsIGNvbnRlbnQgfSA9IEpTT04ucGFyc2UoZS5kYXRhKVxyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdtc2cnKSB7XHJcbiAgICAgICAgICAgIGFkZE1zZyh7IHR5cGUsIGNvbnRlbnQsIGN1cnJlbnQ6IGZhbHNlLCAuLi5jcmVhdGVBdXhpbGlhcnlJbmZvKCkgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgICAgICAgY2h1bmtzID0gW11cclxuICAgICAgICAgICAgY3VycmVudENodW5rID0gMFxyXG4gICAgICAgICAgICBmaWxlRGF0YSA9IGNvbnRlbnRcclxuICAgICAgICAgICAgcHJvZ3Jlc3NDb2VmID0gTWF0aC5jZWlsKGZpbGVEYXRhLmNodW5rcyAvIDEwMClcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzQ29lZiA8IDEpIHByb2dyZXNzQ29lZiA9IDFcclxuICAgICAgICAgICAgY3VycmVudEZpbGUgPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgICAgY3VycmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbmFtZTogZmlsZURhdGEubmFtZSxcclxuICAgICAgICAgICAgICBzaXplOiBmaWxlRGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgIC4uLmNyZWF0ZUF1eGlsaWFyeUluZm8oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZE1zZyhjdXJyZW50RmlsZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgIGNodW5rcy5wdXNoKGUuZGF0YSlcclxuICAgICAgICAgIGN1cnJlbnRDaHVuaysrXHJcbiAgICAgICAgICBpZiAoY3VycmVudENodW5rICUgcHJvZ3Jlc3NDb2VmID09PSAwKSBmaWxlU2V0QXR0cihjdXJyZW50RmlsZS5pZCwgJ3Byb2dyZXNzJywgTWF0aC5yb3VuZChjdXJyZW50Q2h1bmsgLyBwcm9ncmVzc0NvZWYpKVxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA+PSBmaWxlRGF0YS5jaHVua3MpIHtcclxuICAgICAgICAgICAgZmlsZVNldEF0dHIoY3VycmVudEZpbGUuaWQsICdwcm9ncmVzcycsIDEwMClcclxuICAgICAgICAgICAgZmlsZVNldEF0dHIoY3VycmVudEZpbGUuaWQsICdibG9iJywgbmV3IEJsb2IoY2h1bmtzKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2hhbm5lbC5jdXJyZW50ID0gY2hubFxyXG4gICAgfVxyXG5cclxuICAgIC8vV2ViU29ja2V0IChlc3RhYmxpc2hpbmcgYSBjb25uZWN0aW9uKVxyXG4gICAgY29uc3Qgd3NzID0gbmV3IFdlYlNvY2tldChwcm9wcy5zZXJ2ZXIpXHJcbiAgICBjb25zdCBzZW5kID0gKHR5cGUsIGNvbnRlbnQpID0+IHdzcy5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZSwgY29udGVudCB9KSlcclxuXHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIGljZVNlcnZlcnM6IE9iamVjdC5lbnRyaWVzKHByb3BzLmljZVNlcnZlcnMpLm1hcChvYmogPT4gb2JqWzFdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vV2ViUlRDIHNldHRpbmdzXHJcbiAgICBjb25zdCBSVENwYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWcpXHJcbiAgICBSVENwYy5vbmljZWNhbmRpZGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmNhbmRpZGF0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGUuY2FuZGlkYXRlKSlcclxuICAgICAgICBzZW5kKFwibmV3aWNlXCIsIGUuY2FuZGlkYXRlKVxyXG4gICAgICB9IGVsc2UgYWRkTXNnKFwiSWNlIGNhbmRpZGF0ZXMg0YPRgdGC0LDQvdC+0LLQu9C10L3Riy4g0J7QttC40LTQsNC90LjQtSDQtNC10LnRgdGC0LLQuNC5INCx0YDQsNGD0LfQtdGA0LAuXCIpXHJcbiAgICB9XHJcbiAgICBSVENwYy5vbmRhdGFjaGFubmVsID0gZSA9PiBjaGFubmVsU2V0SGFuZGxlcnMoZS5jaGFubmVsKVxyXG5cclxuICAgIHdzcy5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBcItCj0LTQsNC70L7RgdGMINC/0L7QtNC60LvRjtGH0LjRgtGM0YHRjyDQuiBtaWRkbGUt0YHQtdGA0LLQtdGA0YNcIiB9KVxyXG4gICAgICBzZW5kKCdjb25uZWN0JywgY29kZSlcclxuICAgIH1cclxuICAgIHdzcy5vbm1lc3NhZ2UgPSBlID0+IHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBjb250ZW50IH0gPSBKU09OLnBhcnNlKGUuZGF0YSlcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnY29ubmVjdCc6XHJcbiAgICAgICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogXCLQmtC+0L3RgtCw0LrRgiDQvdCw0LnQtNC10L0uINCj0YHRgtCw0L3QvtCy0LrQsCDRgdC+0LXQtNC40L3QtdC90LjRjy4uLlwiIH0pXHJcbiAgICAgICAgICBSVENwYy5vbm5lZ290aWF0aW9ubmVlZGVkID0gZSA9PiB7XHJcbiAgICAgICAgICAgIFJUQ3BjLmNyZWF0ZU9mZmVyKClcclxuICAgICAgICAgICAgICAudGhlbihvZmZlciA9PiBSVENwYy5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKSlcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiBzZW5kKFwib2ZmZXJcIiwgUlRDcGMubG9jYWxEZXNjcmlwdGlvbikpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGFubmVsU2V0SGFuZGxlcnMoUlRDcGMuY3JlYXRlRGF0YUNoYW5uZWwoXCJjaGFubmVsXCIpKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdvZmZlcic6XHJcbiAgICAgICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogXCLQmtC+0L3RgtCw0LrRgiDQvdCw0LnQtNC10L0uINCj0YHRgtCw0L3QvtCy0LrQsCDRgdC+0LXQtNC40L3QtdC90LjRjy4uLlwiIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHR5cGUsIGNvbnRlbnQgfSlcclxuICAgICAgICAgIFJUQ3BjLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oY29udGVudCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IFJUQ3BjLmNyZWF0ZUFuc3dlcigpKVxyXG4gICAgICAgICAgICAudGhlbihhbnN3ZXIgPT4gUlRDcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihhbnN3ZXIpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBzZW5kKFwiYW5zd2VyXCIsIFJUQ3BjLmxvY2FsRGVzY3JpcHRpb24pKVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Fuc3dlcic6XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHR5cGUsIGNvbnRlbnQgfSlcclxuICAgICAgICAgIFJUQ3BjLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oY29udGVudCkpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibmV3aWNlXCI6XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHR5cGUsIGNvbnRlbnQgfSlcclxuICAgICAgICAgIFJUQ3BjLmFkZEljZUNhbmRpZGF0ZShuZXcgUlRDSWNlQ2FuZGlkYXRlKGNvbnRlbnQpKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdzcy5vbmVycm9yID0gZSA9PiBjb25zb2xlLmxvZygnTWlkZGxlLXNlcnZlciBjb25uZWN0aW9uIGVycm9yJylcclxuICAgIHdzcy5vbmNsb3NlID0gZSA9PiBjb25zb2xlLmxvZygnTWlkZGxlLXNlcnZlciBjb25uZWN0aW9uIGNsb3NlZCcpXHJcbiAgICB3cy5jdXJyZW50ID0gd3NzXHJcbiAgICBwYy5jdXJyZW50ID0gUlRDcGNcclxuICB9XHJcblxyXG4gIC8vU0VORFxyXG4gIGZ1bmN0aW9uIHNlbmRDaGFubmVsKG1zZykge1xyXG4gICAgaWYgKG1zZyAhPT0gJycpIHtcclxuICAgICAgY2hhbm5lbC5jdXJyZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHR5cGU6ICdtc2cnLFxyXG4gICAgICAgIGNvbnRlbnQ6IG1zZyxcclxuICAgICAgfSkpXHJcbiAgICAgIGFkZE1zZyh7XHJcbiAgICAgICAgdHlwZTogJ21zZycsXHJcbiAgICAgICAgY29udGVudDogbXNnLFxyXG4gICAgICAgIGN1cnJlbnQ6IHRydWUsXHJcbiAgICAgICAgLi4uY3JlYXRlQXV4aWxpYXJ5SW5mbygpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoICE9PSAwICYmICFmaWxlc1NlbmRpbmcpIHtcclxuICAgICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICAgIGxldCBjdXJyZW50Q2h1bmsgPSAwXHJcbiAgICAgIGxldCBjdXJyZW50RmlsZSA9IDBcclxuICAgICAgbGV0IHByb2dyZXNzQ29lZiA9IDBcclxuICAgICAgbGV0IG1zZ09ialxyXG4gICAgICBjb25zdCBCWVRFU19QRVJfQ0hVTksgPSA4MDkyXHJcbiAgICAgIGZpbGVzU2VuZGluZ0ModHJ1ZSlcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlYWROZXh0Q2h1bmsoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA9PT0gMCkge1xyXG4gICAgICAgICAgY2hhbm5lbC5jdXJyZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiAnZmlsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICBuYW1lOiBmaWxlc1tjdXJyZW50RmlsZV0ubmFtZSxcclxuICAgICAgICAgICAgICBjaHVua3M6IE1hdGguZmxvb3IoZmlsZXNbY3VycmVudEZpbGVdLnNpemUgLyBCWVRFU19QRVJfQ0hVTkspLFxyXG4gICAgICAgICAgICAgIHNpemU6IGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgICBtc2dPYmogPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgY3VycmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgYmxvYjogZmlsZXNbY3VycmVudEZpbGVdLFxyXG4gICAgICAgICAgICBzaXplOiBmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSxcclxuICAgICAgICAgICAgbmFtZTogZmlsZXNbY3VycmVudEZpbGVdLm5hbWUsXHJcbiAgICAgICAgICAgIC4uLmNyZWF0ZUF1eGlsaWFyeUluZm8oKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJvZ3Jlc3NDb2VmID0gTWF0aC5jZWlsKGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplIC8gQllURVNfUEVSX0NIVU5LIC8gMTAwKVxyXG4gICAgICAgICAgYWRkTXNnKG1zZ09iailcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBCWVRFU19QRVJfQ0hVTksgKiBjdXJyZW50Q2h1bmtcclxuICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSwgc3RhcnQgKyBCWVRFU19QRVJfQ0hVTkspXHJcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlc1tjdXJyZW50RmlsZV0uc2xpY2Uoc3RhcnQsIGVuZCkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYW5uZWwuY3VycmVudC5zZW5kKGZpbGVSZWFkZXIucmVzdWx0KVxyXG4gICAgICAgIGlmIChjdXJyZW50Q2h1bmsgJSBwcm9ncmVzc0NvZWYgPT09IDApIGZpbGVTZXRBdHRyKG1zZ09iai5pZCwgJ3Byb2dyZXNzJywgTWF0aC5yb3VuZChjdXJyZW50Q2h1bmsgLyBwcm9ncmVzc0NvZWYpKVxyXG4gICAgICAgIGN1cnJlbnRDaHVuaysrXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA+IE1hdGguZmxvb3IoZmlsZXNbY3VycmVudEZpbGVdLnNpemUgLyBCWVRFU19QRVJfQ0hVTkspKSB7XHJcbiAgICAgICAgICBmaWxlU2V0QXR0cihtc2dPYmouaWQsICdwcm9ncmVzcycsIDEwMClcclxuICAgICAgICAgIGN1cnJlbnRGaWxlKytcclxuICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiBjdXJyZW50RmlsZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2h1bmsgPSAwXHJcbiAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlsZXNDKFtdKVxyXG4gICAgICAgICAgICBmaWxlc1NlbmRpbmdDKGZhbHNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSByZWFkTmV4dENodW5rKClcclxuICAgICAgfVxyXG4gICAgICByZWFkTmV4dENodW5rKClcclxuICAgIH1cclxuICB9XHJcbiAgLy/QntGC0L/RgNCw0LLQutCwINGB0L7QvtCx0YnQtdC90LjRjyDQuCDQtdCz0L4g0L7RgtC+0LHRgNCw0LbQtdC90LjQtSDQsiDRh9Cw0YLQtVxyXG4gIGZ1bmN0aW9uIHNlbmRtc2coZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyh7IGNoYW5uZWw6IGNoYW5uZWwuY3VycmVudCB9KVxyXG4gICAgaWYgKGNoYW5uZWwuY3VycmVudCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gYWRkTXNnKHsgdHlwZTogXCJzeXNcIiwgY29udGVudDogcHJvcHMuZGVzYy5tc2cubm90c2VudCB9KVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coeyBjaGFubmVsU3RhdGU6IGNoYW5uZWwuY3VycmVudC5yZWFkeVN0YXRlIH0pXHJcbiAgICBpZiAoY2hhbm5lbC5jdXJyZW50LnJlYWR5U3RhdGUgIT09IFwib3BlblwiKSB7XHJcbiAgICAgIHN3aXRjaCAoY2hhbm5lbC5jdXJyZW50LnJlYWR5U3RhdGUpIHtcclxuICAgICAgICBjYXNlIFwiY29ubmVjdGluZ1wiOiByZXR1cm4gYWRkTXNnKHsgdHlwZTogXCJzeXNcIiwgY29udGVudDogcHJvcHMuZGVzYy5tc2cuY29ubmVjdGluZyB9KVxyXG4gICAgICAgIGNhc2UgXCJjbG9zaW5nXCI6IHJldHVybiBhZGRNc2coeyB0eXBlOiBcInN5c1wiLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jbG9zaW5nIH0pXHJcbiAgICAgICAgY2FzZSBcImNsb3NlXCI6IHJldHVybiBhZGRNc2coeyB0eXBlOiBcInN5c1wiLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jbG9zZSB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZW5kQ2hhbm5lbChlLnRhcmdldC5tc2cudmFsdWUpXHJcbiAgICBlLnRhcmdldC5tc2cudmFsdWUgPSBcIlwiXHJcblxyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRFbGVtZW50c0J5U3RhdHVzKCkge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSAwOiByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLnJlZH0+e3Byb3BzLmRlc2Muc3RhdHVzMH08L3NwYW4+XHJcbiAgICAgIGNhc2UgMTogcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17cy5vcmFuZ2V9Pntwcm9wcy5kZXNjLnN0YXR1czF9PC9zcGFuPlxyXG4gICAgICBjYXNlIDI6IHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3MuZ3JlZW59Pntwcm9wcy5kZXNjLnN0YXR1czJ9PC9zcGFuPlxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake3MuZWxlbWVudH0gJHtkaXNwbGF5ID8gcy5kaXNwbGF5IDogJyd9YH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbmZvfT5cclxuICAgICAgPGRpdj57bmFtZSA9PT0gdW5kZWZpbmVkID8gcHJvcHMuZGVzYy5uYW1lbGVzcyA6IG5hbWV9PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmFkZGVkfTo8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIHllYXI6ICdudW1lcmljJywgfSl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5sYXN0Q29ubmVjdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICB7bGFzdCA9PT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2Muc3RhdHVzMH08L3NwYW4+XHJcbiAgICAgICAgICAgIDogPHNwYW4+e25ldyBEYXRlKGxhc3QpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCB5ZWFyOiAnbnVtZXJpYycgfSl9PC9zcGFuPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5jb25uZWN0aW9ufTo8L3NwYW4+XHJcbiAgICAgICAgICB7Z2V0RWxlbWVudHNCeVN0YXR1cygpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2hhdH0+XHJcbiAgICAgIDxkaXYgcmVmPXtjaGF0QmxvY2t9PlxyXG4gICAgICAgIHtjaGF0Lm1hcCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibXNnXCI6IHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17b2JqLmN1cnJlbnQgPyBzLnJpZ2h0IDogcy5sZWZ0fSA+XHJcbiAgICAgICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLmRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgbWludXRlOiAnbnVtZXJpYycsIGhvdXI6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PntvYmouY29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaWxlXCI6IHJldHVybiA8ZGl2IGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtvYmouY3VycmVudCA/IHMucmlnaHQgOiBzLmxlZnR9ICR7cy5maWxlfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17b2JqLnByb2dyZXNzID09PSAxMDAgfHwgb2JqLmN1cnJlbnQgPyAoKSA9PiBmaWxlRG93bmxvYWQob2JqLmJsb2IsIG9iai5uYW1lKSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgIDxkaXY+e25ldyBEYXRlKG9iai5kYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbnV0ZTogJ251bWVyaWMnLCBob3VyOiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPFN2ZyBuYW1lPVwidmFyL3NhdmUuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57b2JqLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntvYmoucHJvZ3Jlc3N9JTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57TWF0aC5yb3VuZChvYmouc2l6ZSAvIDEwMjQpfSB7cHJvcHMuZGVzYy5rYn08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGNhc2UgXCJzeXNcIjogcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzLnN5c3RlbX0+XHJcbiAgICAgICAgICAgICAge29iai5jb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgICB7c3RhdHVzID09PSAwID8gPGJ1dHRvbiBvbkNsaWNrPXtzdGFydH0+e3Byb3BzLmRlc2MucXVlcnlOZXd9PC9idXR0b24+XHJcbiAgICAgICAgICA6IHN0YXR1cyA9PT0gMSA/IDxidXR0b24gb25DbGljaz17Y2xvc2V9Pntwcm9wcy5kZXNjLnF1ZXJ5Q2FuY2VsfTwvYnV0dG9uPiA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRtc2d9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2ZpbGVzU2VuZGluZyA/IHsgZGlzcGxheTogJ25vbmUnIH0gOiB7fX0+XHJcbiAgICAgICAgICB7ZmlsZXMubWFwKChmaWxlLCBpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtlID0+IGZpbGVEb3dubG9hZChmaWxlLCBmaWxlLm5hbWUpfSBrZXk9e2ZpbGUubGFzdE1vZGlmaWVkfT5cclxuICAgICAgICAgICAgICA8U3ZnIG5hbWU9XCJ2YXIvZmlsZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2PntmaWxlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtlID0+IGZpbGVFeGNsdWRlKGZpbGUpfT48U3ZnIG5hbWU9XCJ2YXIveC5zdmdcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e01hdGgucm91bmQoZmlsZS5zaXplIC8gMTAyNCl9IHtwcm9wcy5kZXNjLmtifTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5hdHRhY2h9PlxyXG4gICAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2ZpbGVzU2VuZGluZ30gdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBvbkNoYW5nZT17ZmlsZURpc3BsYXl9IC8+XHJcbiAgICAgICAgICAgIDxTdmcgbmFtZT1cInZhci9jbGlwLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IGF1dG9Db21wbGV0ZT1cImZhbHNlXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibXNnXCIgLz5cclxuICAgICAgICAgIDxsYWJlbCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2Muc2VuZH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgICAgPFN2ZyBuYW1lPVwidmFyL3NlbmQuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==