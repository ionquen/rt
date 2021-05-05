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
      } else {
        channelSetHandlers(RTCpc.createDataChannel("channel"));
        addMsg("Ice candidates установлены. Ожидание действий браузера.");
      }
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
          lineNumber: 417,
          columnNumber: 22
        }, this);

      case 1:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.orange,
          children: props.desc.status1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 22
        }, this);

      case 2:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.green,
          children: props.desc.status2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 419,
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
        lineNumber: 424,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.added, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(date).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.lastConnection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 11
          }, this), last === undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: props.desc.status0
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: new Date(last).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [props.desc.connection, ":"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 11
          }, this), getElementsByStatus()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 423,
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
                  lineNumber: 448,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: obj.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 449,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 447,
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
                  lineNumber: 454,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  name: "var/save.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 455,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: obj.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 457,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [obj.progress, "%"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 458,
                    columnNumber: 17
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [Math.round(obj.size / 1024), " ", props.desc.kb]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 459,
                    columnNumber: 17
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 456,
                  columnNumber: 15
                }, _this2)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 451,
                columnNumber: 33
              }, _this2);

            case "sys":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_tools_transfer_styl__WEBPACK_IMPORTED_MODULE_7___default.a.system,
                children: obj.content
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 462,
                columnNumber: 32
              }, _this2);
          }
        }), status === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: start,
          children: props.desc.queryNew
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 25
        }, this) : status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: close,
          children: props.desc.queryCancel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 28
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 444,
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
                  lineNumber: 476,
                  columnNumber: 15
                }, _this2)
              }, file.lastModified, false, {
                fileName: _jsxFileName,
                lineNumber: 475,
                columnNumber: 13
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: file.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 479,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  onClick: function onClick(e) {
                    return fileExclude(file);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    name: "var/x.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 480,
                    columnNumber: 53
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 480,
                  columnNumber: 15
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [Math.round(file.size / 1024), " ", props.desc.kb]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 481,
                  columnNumber: 15
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 478,
                columnNumber: 13
              }, _this2)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 474,
              columnNumber: 39
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 473,
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
              lineNumber: 488,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/clip.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 489,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            autoComplete: "false",
            type: "text",
            name: "msg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 491,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "data-tooltip": props.desc.send,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "var/send.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 494,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 492,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 422,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UcmFuc2Zlci5qcyJdLCJuYW1lcyI6WyJUcmFuc2ZlciIsInByb3BzIiwidXNlU3RhdGUiLCJhZGRlZCIsImFkZGVkQyIsImN1cnJlbnQiLCJjdXJyZW50QyIsImNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbnNDIiwid2FpdGluZyIsIndhaXRpbmdDIiwicXJEaXNwbGF5IiwicXJEaXNwbGF5QyIsImxvY2FsQ29kZSIsImxvY2FsQ29kZUMiLCJ1c2VyS2V5IiwidXNlcktleUMiLCJ1c2VyS2V5TGluayIsInVzZXJLZXlMaW5rQyIsImJsb2NrIiwidXNlUmVmIiwid3MiLCJxcmNvZGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFzUGF0aCIsImNvcHlDb2RlIiwicmVjcmVhdGVDb2RlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3S2V5IiwidG9TdHJpbmciLCJzdWJzdHIiLCJwYXRobmFtZSIsInF1ZXJ5Iiwia2V5IiwiY29udGFjdEVkaXQiLCJmaWVsZCIsInZhbHVlIiwicHJldlN0YXRlIiwibWFwIiwib2JqIiwiY29kZSIsInFyR2VuIiwicXIiLCJ0b0NhbnZhcyIsInVzZUVmZmVjdCIsImNvbm5lY3Rpb25zMSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjbG9zZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsIm1hdGNoIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzaG93Q29ubmVjdGlvbiIsIm5ld0Nvbm5lY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJXZWJTb2NrZXQiLCJkZXNjIiwic2VydmVyIiwib25tZXNzYWdlIiwiZGF0YSIsInR5cGUiLCJjb250ZW50IiwidGFyZ2V0IiwibmV3Y29kZSIsInNvcnQiLCJqb2luIiwib25vcGVuIiwic2VuZCIsIndzQ2xvc2UiLCJyZW1vdmVDb25uZWN0aW9uIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzIiwibWFpbiIsImRpc3BsYXkiLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN0cmluZzEiLCJ5b3VyQ29kZSIsImNsaWNrVG9Db3B5Iiwic3RyaW5nMiIsInJldHJ5IiwiZm9ybSIsImlucHV0Q29kZVBsYWNlaG9sZGVyIiwiYWRkQ29udGFjdCIsImhlYWRlcjMiLCJjb3B5IiwicXJUcnVlIiwicXJGYWxzZSIsImdlbmVyYXRlIiwibG9zcyIsInJlY3JlYXRlIiwibmFtZSIsImxhc3QiLCJjb250YWN0cyIsImFkZCIsIm5hbWVsZXNzIiwic3RvcFByb3BhZ2F0aW9uIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwieWVhciIsImVtcHR5IiwiRWxlbWVudCIsImNoYXQiLCJjaGF0QyIsImZpbGVzIiwiZmlsZXNDIiwiZmlsZXNTZW5kaW5nIiwiZmlsZXNTZW5kaW5nQyIsInN0YXR1cyIsInN0YXR1c0MiLCJwYyIsImNoYW5uZWwiLCJjaGF0QmxvY2siLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbG9zZUFsbENvbm5lY3Rpb25zIiwiYWRkTXNnIiwibXNnIiwic3lzTmV3Iiwib2xkU3RhdGUiLCJmaWxlU2V0QXR0ciIsImlkIiwiYXR0ciIsImZpbGVEaXNwbGF5IiwiZmlsZUV4Y2x1ZGUiLCJmaWxlIiwiZiIsImNyZWF0ZUF1eGlsaWFyeUluZm8iLCJmbG9vciIsImZpbGVEb3dubG9hZCIsImJsb2IiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJyZXZva2VPYmplY3RVUkwiLCJzdGFydCIsImNoYW5uZWxTZXRIYW5kbGVycyIsImNobmwiLCJmaWxlRGF0YSIsImN1cnJlbnRDaHVuayIsImNodW5rcyIsImN1cnJlbnRGaWxlIiwicHJvZ3Jlc3NDb2VmIiwib3BlbmVkIiwib25jbG9zZSIsImNsb3NlZCIsImNlaWwiLCJzaXplIiwicHVzaCIsIkJsb2IiLCJ3c3MiLCJjb25maWciLCJpY2VTZXJ2ZXJzIiwiT2JqZWN0IiwiZW50cmllcyIsIlJUQ3BjIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvbmljZWNhbmRpZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjYW5kaWRhdGUiLCJjcmVhdGVEYXRhQ2hhbm5lbCIsIm9uZGF0YWNoYW5uZWwiLCJjcmVhdGVPZmZlciIsInRoZW4iLCJvZmZlciIsInNldExvY2FsRGVzY3JpcHRpb24iLCJsb2NhbERlc2NyaXB0aW9uIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJSVENTZXNzaW9uRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXIiLCJhbnN3ZXIiLCJhZGRJY2VDYW5kaWRhdGUiLCJSVENJY2VDYW5kaWRhdGUiLCJvbmVycm9yIiwic2VuZENoYW5uZWwiLCJsZW5ndGgiLCJyZWFkTmV4dENodW5rIiwiQllURVNfUEVSX0NIVU5LIiwibXNnT2JqIiwiZW5kIiwibWluIiwiZmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwic2xpY2UiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0Iiwic2VuZG1zZyIsIm5vdHNlbnQiLCJjaGFubmVsU3RhdGUiLCJyZWFkeVN0YXRlIiwiY29ubmVjdGluZyIsImNsb3NpbmciLCJnZXRFbGVtZW50c0J5U3RhdHVzIiwicmVkIiwic3RhdHVzMCIsIm9yYW5nZSIsInN0YXR1czEiLCJncmVlbiIsInN0YXR1czIiLCJlbGVtZW50IiwiaW5mbyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImxhc3RDb25uZWN0aW9uIiwiY29ubmVjdGlvbiIsImluZGV4IiwicmlnaHQiLCJsZWZ0IiwibWludXRlIiwiaG91ciIsInByb2dyZXNzIiwia2IiLCJzeXN0ZW0iLCJxdWVyeU5ldyIsInF1ZXJ5Q2FuY2VsIiwibGFzdE1vZGlmaWVkIiwiYXR0YWNo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a0JBQUksRUFBQyxNQUFwQztBQUEyQyxzQkFBUSxNQUFuRDtBQUFvRCxzQkFBUSxFQUFFa0I7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLDRDQUFEO0FBQUssa0JBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0U7QUFBTyx3QkFBWSxFQUFDLE9BQXBCO0FBQTRCLGdCQUFJLEVBQUMsTUFBakM7QUFBd0MsZ0JBQUksRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBTUU7QUFBTyw0QkFBYzlJLEtBQUssQ0FBQ3VFLElBQU4sQ0FBV1csSUFBaEM7QUFBQSxvQ0FDRTtBQUFPLGtCQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsNENBQUQ7QUFBSyxrQkFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUE4RUQ7O0lBclZRcUMsTzs7TUFBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uZGU5NzExMTU2NjJlNTlmZTdjYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBxciBmcm9tICdxcmNvZGUnXHJcblxyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvdHJhbnNmZXIuc3R5bCdcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2Zlcih7IHByb3BzIH0pIHtcclxuICBjb25zdCBbYWRkZWQsIGFkZGVkQ10gPSB1c2VTdGF0ZShbXSkvL9Cc0LDRgdGB0LjQsiDQtNC+0LHQsNCy0LvQtdC90L3Ri9GFINGD0YHRgtGA0L7QudGB0YLQslxyXG4gIGNvbnN0IFtjdXJyZW50LCBjdXJyZW50Q10gPSB1c2VTdGF0ZSgnJykvL9Ce0YLQvtCx0YDQsNC20LDQtdC80L7QtSDQv9C+0LTQutC70Y7Rh9C10L3QuNC1ICgnJyA9INGB0L7Qt9C00LDRgtGMINC90L7QstC+0LUpXHJcbiAgY29uc3QgW2Nvbm5lY3Rpb25zLCBjb25uZWN0aW9uc0NdID0gdXNlU3RhdGUoW10pLy/QnNCw0YHRgdC40LIg0LrQu9GO0YfQtdC5INCy0YHQtdGFINCw0LrRgtC40LLQvdGL0YUg0L/QvtC00LrQu9GO0YfQtdC90LjQuVxyXG5cclxuICBjb25zdCBbd2FpdGluZywgd2FpdGluZ0NdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3FyRGlzcGxheSwgcXJEaXNwbGF5Q10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9jYWxDb2RlLCBsb2NhbENvZGVDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3VzZXJLZXksIHVzZXJLZXlDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3VzZXJLZXlMaW5rLCB1c2VyS2V5TGlua0NdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCB3cyA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHFyY29kZSA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgZnVuY3Rpb24gY29weUxpbmsoKSB7IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGBodHRwczovL3JlZ3Rvb2wubmV0JHtyb3V0ZXIuYXNQYXRofT9rZXk9JHt1c2VyS2V5fWApIH1cclxuICBmdW5jdGlvbiBjb3B5Q29kZSgpIHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYCR7bG9jYWxDb2RlfWApIH1cclxuICBmdW5jdGlvbiByZWNyZWF0ZUNvZGUoYXNQYXRoKSB7Ly9hbmQgdXBkYXRlIGxpbmtcclxuICAgIGxvY2FsQ29kZUMoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSlcclxuICAgIGNvbnN0IG5ld0tleSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKVxyXG4gICAgdXNlcktleUMobmV3S2V5KVxyXG4gICAgdXNlcktleUxpbmtDKDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGFzUGF0aCwgcXVlcnk6IHsga2V5OiBuZXdLZXkgfSB9fT48YT5odHRwczovL3JlZ3Rvb2wubmV0e2FzUGF0aH0/a2V5PXtuZXdLZXl9PC9hPjwvTGluaz4pXHJcbiAgICBxckRpc3BsYXlDKGZhbHNlKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjb250YWN0RWRpdChrZXksIGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgYWRkZWRDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUubWFwKG9iaiA9PiBvYmouY29kZSA9PT0ga2V5ID8geyAuLi5vYmosIFtmaWVsZF06IHZhbHVlIH0gOiBvYmopKVxyXG4gIH1cclxuICBmdW5jdGlvbiBxckdlbigpIHtcclxuICAgIHFyLnRvQ2FudmFzKHFyY29kZS5jdXJyZW50LCBgaHR0cHM6Ly9yZWd0b29sLm5ldCR7cm91dGVyLmFzUGF0aH0/a2V5PSR7dXNlcktleX1gKVxyXG4gICAgcXJEaXNwbGF5Qyh0cnVlKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVjcmVhdGVDb2RlKHJvdXRlci5hc1BhdGgpXHJcbiAgICBjb25zdCBjb25uZWN0aW9uczEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJhbnNmZXJDb25uZWN0aW9ucycpXHJcbiAgICBpZiAoY29ubmVjdGlvbnMxICE9PSBudWxsKSBhZGRlZEMoSlNPTi5wYXJzZShjb25uZWN0aW9uczEpKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB3cy5jdXJyZW50LmNsb3NlKClcclxuICAgICAgfSBjYXRjaCB7IH1cclxuICAgIH1cclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyYW5zZmVyQ29ubmVjdGlvbnMnLCBKU09OLnN0cmluZ2lmeShhZGRlZCkpXHJcbiAgfSwgW2FkZGVkXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5rZXkgPT09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICBhZGRlZEMocHJldlN0YXRlID0+IFt7IGNvZGU6IHJvdXRlci5xdWVyeS5rZXksIGRhdGU6IERhdGUubm93KCkgfSwgLi4ucHJldlN0YXRlXSlcclxuICAgIGNvbnN0IGFzUGF0aCA9IHJvdXRlci5hc1BhdGgubWF0Y2goL14oLiopXFw/LylbMV1cclxuICAgIHJvdXRlci5yZXBsYWNlKGFzUGF0aCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSlcclxuICAgIHNob3dDb25uZWN0aW9uKHJvdXRlci5xdWVyeS5rZXkpXHJcbiAgICByZWNyZWF0ZUNvZGUoYXNQYXRoKVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkua2V5XSlcclxuXHJcbiAgZnVuY3Rpb24gbmV3Q29ubmVjdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHdhaXRpbmdDKHRydWUpXHJcbiAgICB3cy5jdXJyZW50ID0gbmV3IFdlYlNvY2tldChwcm9wcy5kZXNjLnNlcnZlcilcclxuICAgIHdzLmN1cnJlbnQub25tZXNzYWdlID0gZSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgY29udGVudCB9ID0gSlNPTi5wYXJzZShlLmRhdGEpXHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3N3YXAnOlxyXG4gICAgICAgICAgYWRkZWRDKHByZXZTdGF0ZSA9PiBbeyBjb2RlOiBjb250ZW50LCBkYXRlOiBEYXRlLm5vdygpIH0sIC4uLnByZXZTdGF0ZV0pXHJcbiAgICAgICAgICBzaG93Q29ubmVjdGlvbihjb250ZW50KVxyXG4gICAgICAgICAgd3MuY3VycmVudC5jbG9zZSgpXHJcbiAgICAgICAgICB3YWl0aW5nQyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29kZSA9IGUudGFyZ2V0LmNvZGUudmFsdWVcclxuICAgIGNvbnN0IG5ld2NvZGUgPSBbY29kZSwgbG9jYWxDb2RlXS5zb3J0KCkuam9pbignJylcclxuICAgIHdzLmN1cnJlbnQub25vcGVuID0gKCkgPT4gd3MuY3VycmVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ3N3YXAnLCBjb250ZW50OiBuZXdjb2RlIH0pKVxyXG4gIH1cclxuICBmdW5jdGlvbiB3c0Nsb3NlKCkge1xyXG4gICAgd2FpdGluZ0MoZmFsc2UpXHJcbiAgICB3cy5jdXJyZW50LmNsb3NlKClcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlQ29ubmVjdGlvbihjb2RlKSB7XHJcbiAgICBhZGRlZEMoYWRkZWQuZmlsdGVyKG9iaiA9PiBvYmouY29kZSA9PT0gY29kZSA/IGZhbHNlIDogdHJ1ZSkpXHJcbiAgICBjdXJyZW50QygnJylcclxuICB9XHJcbiAgZnVuY3Rpb24gc2hvd0Nvbm5lY3Rpb24oa2V5KSB7XHJcbiAgICBpZiAoIWNvbm5lY3Rpb25zLmluY2x1ZGVzKGtleSkpIGNvbm5lY3Rpb25zQyhbLi4uY29ubmVjdGlvbnMsIGtleV0pXHJcbiAgICBjdXJyZW50QyhrZXkpXHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5ibG9ja30gcmVmPXtibG9ja30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5tYWlufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3MubmV3fSAke2N1cnJlbnQgPT09ICcnID8gcy5kaXNwbGF5IDogJyd9YH0+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oZWFkZXIxfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLmhlYWRlcjJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5jb2RlLnN0cmluZzF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5jb2RlLnlvdXJDb2RlfTogPHNwYW4gb25DbGljaz17Y29weUNvZGV9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5jbGlja1RvQ29weX0gY2xhc3NOYW1lPXtzLmNvZGV9Pntsb2NhbENvZGV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuY29kZS5zdHJpbmcyfTwvZGl2PlxyXG4gICAgICAgICAgICAgIHt3YWl0aW5nID9cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MuY29kZS53YWl0aW5nfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3dzQ2xvc2V9Pntwcm9wcy5kZXNjLmNvZGUucmV0cnl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDogPGZvcm0gY2xhc3NOYW1lPXtzLmZvcm19IG9uU3VibWl0PXtuZXdDb25uZWN0fT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPXtwcm9wcy5kZXNjLmNvZGUuaW5wdXRDb2RlUGxhY2Vob2xkZXJ9IGF1dG9Db21wbGV0ZT1cImZhbHNlXCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjb2RlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17cHJvcHMuZGVzYy5jb2RlLmFkZENvbnRhY3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5oZWFkZXIzfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e3Byb3BzLmRlc2MucXIuc3RyaW5nMX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5kZXNjLnFyLnN0cmluZzJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt1c2VyS2V5TGlua31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29weUxpbmt9Pntwcm9wcy5kZXNjLnFyLmNvcHl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3FyRGlzcGxheSA/IHMucXJUcnVlIDogcy5xckZhbHNlfT5cclxuICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtxcmNvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3FyR2VufT57cHJvcHMuZGVzYy5xci5nZW5lcmF0ZX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj57cHJvcHMuZGVzYy5sb3NzfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZWNyZWF0ZUNvZGV9Pntwcm9wcy5kZXNjLnJlY3JlYXRlfTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2FkZGVkLm1hcCgoeyBjb2RlLCBuYW1lLCBkYXRlLCBsYXN0IH0pID0+ICFjb25uZWN0aW9ucy5pbmNsdWRlcyhjb2RlKSA/IG51bGwgOlxyXG4gICAgICAgIDxFbGVtZW50IGRpc3BsYXk9e2N1cnJlbnQgPT09IGNvZGV9IGNvZGU9e2NvZGV9IGtleT17Y29kZX0gbmFtZT17bmFtZX0gZGF0ZT17ZGF0ZX0gbGFzdD17bGFzdH0gY29udGFjdEVkaXQ9e2NvbnRhY3RFZGl0fSBwcm9wcz17cHJvcHN9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxGdWxsc2NyZWVuIGVsZW09e2Jsb2NrLmN1cnJlbnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhY3RzfT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjdXJyZW50QygnJyl9Pntwcm9wcy5kZXNjLmFkZH08L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YWRkZWQubWFwKG9iaiA9PiA8ZGl2IGtleT17b2JqLmNvZGV9PlxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzaG93Q29ubmVjdGlvbihvYmouY29kZSl9PntvYmoubmFtZSA9PT0gdW5kZWZpbmVkID8gcHJvcHMuZGVzYy5uYW1lbGVzcyA6IG9iai5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyByZW1vdmVDb25uZWN0aW9uKG9iai5jb2RlKSB9fT48U3ZnIG5hbWU9XCJ2YXIveC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLmRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCB3ZWVrZGF5OiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PntvYmoubGFzdCA9PT0gdW5kZWZpbmVkID8gcHJvcHMuZGVzYy5lbXB0eSA6IG5ldyBEYXRlKG9iai5sYXN0KS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJywgd2Vla2RheTogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVsZW1lbnQoeyBjb2RlLCBuYW1lLCBkYXRlLCBsYXN0LCBkaXNwbGF5LCBjb250YWN0RWRpdCwgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtjaGF0LCBjaGF0Q10gPSB1c2VTdGF0ZShbXSkvL9Ch0L7QvtCx0YnQtdC90LjRjyDQsiDRh9Cw0YLQtVxyXG4gIGNvbnN0IFtmaWxlcywgZmlsZXNDXSA9IHVzZVN0YXRlKFtdKS8v0KTQsNC50LvRiyDQvdCwINC+0YLQv9GA0LDQstC60YNcclxuICBjb25zdCBbZmlsZXNTZW5kaW5nLCBmaWxlc1NlbmRpbmdDXSA9IHVzZVN0YXRlKGZhbHNlKS8v0KHQutGA0YvQstCw0YLRjCDRhNCw0LnQu9GLICjQuCDQvdC1INC+0YLQv9GA0LDQstC70Y/RgtGMINC40YUg0LbQtSkg0LXRgdC70Lgg0LjQtNGR0YIg0LjRhSDQvtGC0L/RgNCw0LLQutCwXHJcbiAgY29uc3QgW3N0YXR1cywgc3RhdHVzQ10gPSB1c2VTdGF0ZSgwKSAvLzAgLSBkaXNjb25uZWN0ZWQsIDEgLSBlc3RhYmxpc2hpbmcgYSBjb25uZWN0aW9uLCAyIC0gY29ubmVjdGVkIFxyXG4gIGNvbnN0IHdzID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgcGMgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBjaGFubmVsID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgY2hhdEJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjaGF0QmxvY2suY3VycmVudC5zY3JvbGxUb3AgPiBjaGF0QmxvY2suY3VycmVudC5zY3JvbGxIZWlnaHQgLSBjaGF0QmxvY2suY3VycmVudC5vZmZzZXRIZWlnaHQgLSAzMDApIHtcclxuICAgICAgY2hhdEJsb2NrLmN1cnJlbnQuc2Nyb2xsVG9wID0gY2hhdEJsb2NrLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICB9XHJcbiAgfSwgW2NoYXRdKVxyXG4gIGNvbnN0IGNsb3NlQWxsQ29ubmVjdGlvbnMgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjaGFubmVsLmN1cnJlbnQuY2xvc2UoKVxyXG4gICAgICBwYy5jdXJyZW50LmNsb3NlKClcclxuICAgICAgd3MuY3VycmVudC5jbG9zZSgpXHJcbiAgICB9IGNhdGNoIHsgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gMCkge1xyXG4gICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogcHJvcHMuZGVzYy5tc2cuc3lzTmV3IH0pXHJcbiAgICB9XHJcbiAgfSwgW3N0YXR1c10pXHJcbiAgY29uc3QgYWRkTXNnID0gb2JqID0+IGNoYXRDKChvbGRTdGF0ZSkgPT4gWy4uLm9sZFN0YXRlLCBvYmpdKVxyXG4gIGNvbnN0IGZpbGVTZXRBdHRyID0gKGlkLCBhdHRyLCB2YWx1ZSkgPT4gY2hhdEMocHJldlN0YXRlID0+IHByZXZTdGF0ZS5tYXAob2JqID0+IG9iai5pZCA9PT0gaWQgPyB7IC4uLm9iaiwgW2F0dHJdOiB2YWx1ZSB9IDogb2JqKSlcclxuXHJcbiAgY29uc3QgZmlsZURpc3BsYXkgPSAoZSkgPT4gZmlsZXNDKHByZXZTdGF0ZSA9PiBbLi4ucHJldlN0YXRlLCAuLi5lLnRhcmdldC5maWxlc10pXHJcbiAgY29uc3QgZmlsZUV4Y2x1ZGUgPSAoZmlsZSkgPT4gZmlsZXNDKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUuZmlsdGVyKGYgPT4gZiAhPT0gZmlsZSkpXHJcbiAgZnVuY3Rpb24gY3JlYXRlQXV4aWxpYXJ5SW5mbygpIHtcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGU6IE1hdGguZmxvb3Iobm93IC8gNjAwMDApICogNjAwMDAsXHJcbiAgICAgIGlkOiBub3cgJSAxMDAwMDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbGVEb3dubG9hZChibG9iLCBuYW1lKSB7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBsaW5rLmRvd25sb2FkID0gbmFtZVxyXG4gICAgbGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxyXG4gICAgbGluay5jbGljaygpXHJcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGxpbmsuaHJlZilcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xvc2VBbGxDb25uZWN0aW9ucygpXHJcbiAgfSwgW10pXHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgY2xvc2VBbGxDb25uZWN0aW9ucygpXHJcbiAgICBzdGF0dXNDKDApXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG5cclxuICAgIHN0YXR1c0MoMSlcclxuICAgIGZ1bmN0aW9uIGNoYW5uZWxTZXRIYW5kbGVycyhjaG5sKSB7XHJcbiAgICAgIGxldCBmaWxlRGF0YSA9IHt9XHJcbiAgICAgIGxldCBjdXJyZW50Q2h1bmsgPSAwXHJcbiAgICAgIGxldCBjaHVua3MgPSBbXVxyXG4gICAgICBsZXQgY3VycmVudEZpbGVcclxuICAgICAgbGV0IHByb2dyZXNzQ29lZiA9IDFcclxuXHJcbiAgICAgIGNobmwub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5vcGVuZWQgfSlcclxuICAgICAgICBzdGF0dXNDKDIpXHJcbiAgICAgICAgY29udGFjdEVkaXQoY29kZSwgJ2xhc3QnLCBEYXRlLm5vdygpKVxyXG4gICAgICB9XHJcbiAgICAgIGNobmwub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBjbG9zZUFsbENvbm5lY3Rpb25zKClcclxuICAgICAgICBzdGF0dXNDKDApXHJcbiAgICAgICAgYWRkTXNnKHsgdHlwZTogJ3N5cycsIGNvbnRlbnQ6IHByb3BzLmRlc2MubXNnLmNsb3NlZCB9KVxyXG4gICAgICB9XHJcbiAgICAgIGNobmwub25tZXNzYWdlID0gZSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgdHlwZSwgY29udGVudCB9ID0gSlNPTi5wYXJzZShlLmRhdGEpXHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ21zZycpIHtcclxuICAgICAgICAgICAgYWRkTXNnKHsgdHlwZSwgY29udGVudCwgY3VycmVudDogZmFsc2UsIC4uLmNyZWF0ZUF1eGlsaWFyeUluZm8oKSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICAgICAgICBjaHVua3MgPSBbXVxyXG4gICAgICAgICAgICBjdXJyZW50Q2h1bmsgPSAwXHJcbiAgICAgICAgICAgIGZpbGVEYXRhID0gY29udGVudFxyXG4gICAgICAgICAgICBwcm9ncmVzc0NvZWYgPSBNYXRoLmNlaWwoZmlsZURhdGEuY2h1bmtzIC8gMTAwKVxyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3NDb2VmIDwgMSkgcHJvZ3Jlc3NDb2VmID0gMVxyXG4gICAgICAgICAgICBjdXJyZW50RmlsZSA9IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcclxuICAgICAgICAgICAgICBjdXJyZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICBuYW1lOiBmaWxlRGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgIHNpemU6IGZpbGVEYXRhLnNpemUsXHJcbiAgICAgICAgICAgICAgLi4uY3JlYXRlQXV4aWxpYXJ5SW5mbygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkTXNnKGN1cnJlbnRGaWxlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgY2h1bmtzLnB1c2goZS5kYXRhKVxyXG4gICAgICAgICAgY3VycmVudENodW5rKytcclxuICAgICAgICAgIGlmIChjdXJyZW50Q2h1bmsgJSBwcm9ncmVzc0NvZWYgPT09IDApIGZpbGVTZXRBdHRyKGN1cnJlbnRGaWxlLmlkLCAncHJvZ3Jlc3MnLCBNYXRoLnJvdW5kKGN1cnJlbnRDaHVuayAvIHByb2dyZXNzQ29lZikpXHJcbiAgICAgICAgICBpZiAoY3VycmVudENodW5rID49IGZpbGVEYXRhLmNodW5rcykge1xyXG4gICAgICAgICAgICBmaWxlU2V0QXR0cihjdXJyZW50RmlsZS5pZCwgJ3Byb2dyZXNzJywgMTAwKVxyXG4gICAgICAgICAgICBmaWxlU2V0QXR0cihjdXJyZW50RmlsZS5pZCwgJ2Jsb2InLCBuZXcgQmxvYihjaHVua3MpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjaGFubmVsLmN1cnJlbnQgPSBjaG5sXHJcbiAgICB9XHJcblxyXG4gICAgLy9XZWJTb2NrZXQgKGVzdGFibGlzaGluZyBhIGNvbm5lY3Rpb24pXHJcbiAgICBjb25zdCB3c3MgPSBuZXcgV2ViU29ja2V0KHByb3BzLnNlcnZlcilcclxuICAgIGNvbnN0IHNlbmQgPSAodHlwZSwgY29udGVudCkgPT4gd3NzLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlLCBjb250ZW50IH0pKVxyXG5cclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgaWNlU2VydmVyczogT2JqZWN0LmVudHJpZXMocHJvcHMuaWNlU2VydmVycykubWFwKG9iaiA9PiBvYmpbMV0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9XZWJSVEMgc2V0dGluZ3NcclxuICAgIGNvbnN0IFJUQ3BjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZylcclxuICAgIFJUQ3BjLm9uaWNlY2FuZGlkYXRlID0gKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgaWYgKGUuY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgc2VuZChcIm5ld2ljZVwiLCBlLmNhbmRpZGF0ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaGFubmVsU2V0SGFuZGxlcnMoUlRDcGMuY3JlYXRlRGF0YUNoYW5uZWwoXCJjaGFubmVsXCIpKVxyXG4gICAgICAgIGFkZE1zZyhcIkljZSBjYW5kaWRhdGVzINGD0YHRgtCw0L3QvtCy0LvQtdC90YsuINCe0LbQuNC00LDQvdC40LUg0LTQtdC50YHRgtCy0LjQuSDQsdGA0LDRg9C30LXRgNCwLlwiKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBSVENwYy5vbmRhdGFjaGFubmVsID0gZSA9PiBjaGFubmVsU2V0SGFuZGxlcnMoZS5jaGFubmVsKVxyXG5cclxuICAgIHdzcy5vbm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgIGFkZE1zZyh7IHR5cGU6ICdzeXMnLCBjb250ZW50OiBcItCj0LTQsNC70L7RgdGMINC/0L7QtNC60LvRjtGH0LjRgtGM0YHRjyDQuiBtaWRkbGUt0YHQtdGA0LLQtdGA0YNcIiB9KVxyXG4gICAgICBzZW5kKCdjb25uZWN0JywgY29kZSlcclxuICAgIH1cclxuICAgIHdzcy5vbm1lc3NhZ2UgPSBlID0+IHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBjb250ZW50IH0gPSBKU09OLnBhcnNlKGUuZGF0YSlcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnY29ubmVjdCc6XHJcbiAgICAgICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogXCLQmtC+0L3RgtCw0LrRgiDQvdCw0LnQtNC10L0uINCj0YHRgtCw0L3QvtCy0LrQsCDRgdC+0LXQtNC40L3QtdC90LjRjy4uLlwiIH0pXHJcblxyXG4gICAgICAgICAgUlRDcGMuY3JlYXRlT2ZmZXIoKVxyXG4gICAgICAgICAgICAudGhlbihvZmZlciA9PiBSVENwYy5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2VuZChcIm9mZmVyXCIsIFJUQ3BjLmxvY2FsRGVzY3JpcHRpb24pKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICdvZmZlcic6XHJcbiAgICAgICAgICBhZGRNc2coeyB0eXBlOiAnc3lzJywgY29udGVudDogXCLQmtC+0L3RgtCw0LrRgiDQvdCw0LnQtNC10L0uINCj0YHRgtCw0L3QvtCy0LrQsCDRgdC+0LXQtNC40L3QtdC90LjRjy4uLlwiIH0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHR5cGUsIGNvbnRlbnQgfSlcclxuICAgICAgICAgIFJUQ3BjLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oY29udGVudCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IFJUQ3BjLmNyZWF0ZUFuc3dlcigpKVxyXG4gICAgICAgICAgICAudGhlbihhbnN3ZXIgPT4gUlRDcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihhbnN3ZXIpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBzZW5kKFwiYW5zd2VyXCIsIFJUQ3BjLmxvY2FsRGVzY3JpcHRpb24pKVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Fuc3dlcic6XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHR5cGUsIGNvbnRlbnQgfSlcclxuICAgICAgICAgIFJUQ3BjLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oY29udGVudCkpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibmV3aWNlXCI6XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IHR5cGUsIGNvbnRlbnQgfSlcclxuICAgICAgICAgIFJUQ3BjLmFkZEljZUNhbmRpZGF0ZShuZXcgUlRDSWNlQ2FuZGlkYXRlKGNvbnRlbnQpKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdzcy5vbmVycm9yID0gZSA9PiBjb25zb2xlLmxvZygnTWlkZGxlLXNlcnZlciBjb25uZWN0aW9uIGVycm9yJylcclxuICAgIHdzcy5vbmNsb3NlID0gZSA9PiBjb25zb2xlLmxvZygnTWlkZGxlLXNlcnZlciBjb25uZWN0aW9uIGNsb3NlZCcpXHJcbiAgICB3cy5jdXJyZW50ID0gd3NzXHJcbiAgICBwYy5jdXJyZW50ID0gUlRDcGNcclxuICB9XHJcblxyXG4gIC8vU0VORFxyXG4gIGZ1bmN0aW9uIHNlbmRDaGFubmVsKG1zZykge1xyXG4gICAgaWYgKG1zZyAhPT0gJycpIHtcclxuICAgICAgY2hhbm5lbC5jdXJyZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHR5cGU6ICdtc2cnLFxyXG4gICAgICAgIGNvbnRlbnQ6IG1zZyxcclxuICAgICAgfSkpXHJcbiAgICAgIGFkZE1zZyh7XHJcbiAgICAgICAgdHlwZTogJ21zZycsXHJcbiAgICAgICAgY29udGVudDogbXNnLFxyXG4gICAgICAgIGN1cnJlbnQ6IHRydWUsXHJcbiAgICAgICAgLi4uY3JlYXRlQXV4aWxpYXJ5SW5mbygpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoICE9PSAwICYmICFmaWxlc1NlbmRpbmcpIHtcclxuICAgICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICAgIGxldCBjdXJyZW50Q2h1bmsgPSAwXHJcbiAgICAgIGxldCBjdXJyZW50RmlsZSA9IDBcclxuICAgICAgbGV0IHByb2dyZXNzQ29lZiA9IDBcclxuICAgICAgbGV0IG1zZ09ialxyXG4gICAgICBjb25zdCBCWVRFU19QRVJfQ0hVTksgPSA4MDkyXHJcbiAgICAgIGZpbGVzU2VuZGluZ0ModHJ1ZSlcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlYWROZXh0Q2h1bmsoKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA9PT0gMCkge1xyXG4gICAgICAgICAgY2hhbm5lbC5jdXJyZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiAnZmlsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICBuYW1lOiBmaWxlc1tjdXJyZW50RmlsZV0ubmFtZSxcclxuICAgICAgICAgICAgICBjaHVua3M6IE1hdGguZmxvb3IoZmlsZXNbY3VycmVudEZpbGVdLnNpemUgLyBCWVRFU19QRVJfQ0hVTkspLFxyXG4gICAgICAgICAgICAgIHNpemU6IGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgICBtc2dPYmogPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgY3VycmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgYmxvYjogZmlsZXNbY3VycmVudEZpbGVdLFxyXG4gICAgICAgICAgICBzaXplOiBmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSxcclxuICAgICAgICAgICAgbmFtZTogZmlsZXNbY3VycmVudEZpbGVdLm5hbWUsXHJcbiAgICAgICAgICAgIC4uLmNyZWF0ZUF1eGlsaWFyeUluZm8oKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJvZ3Jlc3NDb2VmID0gTWF0aC5jZWlsKGZpbGVzW2N1cnJlbnRGaWxlXS5zaXplIC8gQllURVNfUEVSX0NIVU5LIC8gMTAwKVxyXG4gICAgICAgICAgYWRkTXNnKG1zZ09iailcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBCWVRFU19QRVJfQ0hVTksgKiBjdXJyZW50Q2h1bmtcclxuICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihmaWxlc1tjdXJyZW50RmlsZV0uc2l6ZSwgc3RhcnQgKyBCWVRFU19QRVJfQ0hVTkspXHJcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlc1tjdXJyZW50RmlsZV0uc2xpY2Uoc3RhcnQsIGVuZCkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYW5uZWwuY3VycmVudC5zZW5kKGZpbGVSZWFkZXIucmVzdWx0KVxyXG4gICAgICAgIGlmIChjdXJyZW50Q2h1bmsgJSBwcm9ncmVzc0NvZWYgPT09IDApIGZpbGVTZXRBdHRyKG1zZ09iai5pZCwgJ3Byb2dyZXNzJywgTWF0aC5yb3VuZChjdXJyZW50Q2h1bmsgLyBwcm9ncmVzc0NvZWYpKVxyXG4gICAgICAgIGN1cnJlbnRDaHVuaysrXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA+IE1hdGguZmxvb3IoZmlsZXNbY3VycmVudEZpbGVdLnNpemUgLyBCWVRFU19QRVJfQ0hVTkspKSB7XHJcbiAgICAgICAgICBmaWxlU2V0QXR0cihtc2dPYmouaWQsICdwcm9ncmVzcycsIDEwMClcclxuICAgICAgICAgIGN1cnJlbnRGaWxlKytcclxuICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiBjdXJyZW50RmlsZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2h1bmsgPSAwXHJcbiAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlsZXNDKFtdKVxyXG4gICAgICAgICAgICBmaWxlc1NlbmRpbmdDKGZhbHNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSByZWFkTmV4dENodW5rKClcclxuICAgICAgfVxyXG4gICAgICByZWFkTmV4dENodW5rKClcclxuICAgIH1cclxuICB9XHJcbiAgLy/QntGC0L/RgNCw0LLQutCwINGB0L7QvtCx0YnQtdC90LjRjyDQuCDQtdCz0L4g0L7RgtC+0LHRgNCw0LbQtdC90LjQtSDQsiDRh9Cw0YLQtVxyXG4gIGZ1bmN0aW9uIHNlbmRtc2coZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyh7IGNoYW5uZWw6IGNoYW5uZWwuY3VycmVudCB9KVxyXG4gICAgaWYgKGNoYW5uZWwuY3VycmVudCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gYWRkTXNnKHsgdHlwZTogXCJzeXNcIiwgY29udGVudDogcHJvcHMuZGVzYy5tc2cubm90c2VudCB9KVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coeyBjaGFubmVsU3RhdGU6IGNoYW5uZWwuY3VycmVudC5yZWFkeVN0YXRlIH0pXHJcbiAgICBpZiAoY2hhbm5lbC5jdXJyZW50LnJlYWR5U3RhdGUgIT09IFwib3BlblwiKSB7XHJcbiAgICAgIHN3aXRjaCAoY2hhbm5lbC5jdXJyZW50LnJlYWR5U3RhdGUpIHtcclxuICAgICAgICBjYXNlIFwiY29ubmVjdGluZ1wiOiByZXR1cm4gYWRkTXNnKHsgdHlwZTogXCJzeXNcIiwgY29udGVudDogcHJvcHMuZGVzYy5tc2cuY29ubmVjdGluZyB9KVxyXG4gICAgICAgIGNhc2UgXCJjbG9zaW5nXCI6IHJldHVybiBhZGRNc2coeyB0eXBlOiBcInN5c1wiLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jbG9zaW5nIH0pXHJcbiAgICAgICAgY2FzZSBcImNsb3NlXCI6IHJldHVybiBhZGRNc2coeyB0eXBlOiBcInN5c1wiLCBjb250ZW50OiBwcm9wcy5kZXNjLm1zZy5jbG9zZSB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZW5kQ2hhbm5lbChlLnRhcmdldC5tc2cudmFsdWUpXHJcbiAgICBlLnRhcmdldC5tc2cudmFsdWUgPSBcIlwiXHJcblxyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRFbGVtZW50c0J5U3RhdHVzKCkge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSAwOiByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtzLnJlZH0+e3Byb3BzLmRlc2Muc3RhdHVzMH08L3NwYW4+XHJcbiAgICAgIGNhc2UgMTogcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17cy5vcmFuZ2V9Pntwcm9wcy5kZXNjLnN0YXR1czF9PC9zcGFuPlxyXG4gICAgICBjYXNlIDI6IHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3MuZ3JlZW59Pntwcm9wcy5kZXNjLnN0YXR1czJ9PC9zcGFuPlxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake3MuZWxlbWVudH0gJHtkaXNwbGF5ID8gcy5kaXNwbGF5IDogJyd9YH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbmZvfT5cclxuICAgICAgPGRpdj57bmFtZSA9PT0gdW5kZWZpbmVkID8gcHJvcHMuZGVzYy5uYW1lbGVzcyA6IG5hbWV9PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmFkZGVkfTo8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIHllYXI6ICdudW1lcmljJywgfSl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5sYXN0Q29ubmVjdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICB7bGFzdCA9PT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2Muc3RhdHVzMH08L3NwYW4+XHJcbiAgICAgICAgICAgIDogPHNwYW4+e25ldyBEYXRlKGxhc3QpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCB5ZWFyOiAnbnVtZXJpYycgfSl9PC9zcGFuPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5jb25uZWN0aW9ufTo8L3NwYW4+XHJcbiAgICAgICAgICB7Z2V0RWxlbWVudHNCeVN0YXR1cygpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2hhdH0+XHJcbiAgICAgIDxkaXYgcmVmPXtjaGF0QmxvY2t9PlxyXG4gICAgICAgIHtjaGF0Lm1hcCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibXNnXCI6IHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17b2JqLmN1cnJlbnQgPyBzLnJpZ2h0IDogcy5sZWZ0fSA+XHJcbiAgICAgICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLmRhdGUpLnRvTG9jYWxlVGltZVN0cmluZyh1bmRlZmluZWQsIHsgbWludXRlOiAnbnVtZXJpYycsIGhvdXI6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PntvYmouY29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaWxlXCI6IHJldHVybiA8ZGl2IGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtvYmouY3VycmVudCA/IHMucmlnaHQgOiBzLmxlZnR9ICR7cy5maWxlfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17b2JqLnByb2dyZXNzID09PSAxMDAgfHwgb2JqLmN1cnJlbnQgPyAoKSA9PiBmaWxlRG93bmxvYWQob2JqLmJsb2IsIG9iai5uYW1lKSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgIDxkaXY+e25ldyBEYXRlKG9iai5kYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcodW5kZWZpbmVkLCB7IG1pbnV0ZTogJ251bWVyaWMnLCBob3VyOiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPFN2ZyBuYW1lPVwidmFyL3NhdmUuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57b2JqLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntvYmoucHJvZ3Jlc3N9JTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57TWF0aC5yb3VuZChvYmouc2l6ZSAvIDEwMjQpfSB7cHJvcHMuZGVzYy5rYn08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGNhc2UgXCJzeXNcIjogcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzLnN5c3RlbX0+XHJcbiAgICAgICAgICAgICAge29iai5jb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgICB7c3RhdHVzID09PSAwID8gPGJ1dHRvbiBvbkNsaWNrPXtzdGFydH0+e3Byb3BzLmRlc2MucXVlcnlOZXd9PC9idXR0b24+XHJcbiAgICAgICAgICA6IHN0YXR1cyA9PT0gMSA/IDxidXR0b24gb25DbGljaz17Y2xvc2V9Pntwcm9wcy5kZXNjLnF1ZXJ5Q2FuY2VsfTwvYnV0dG9uPiA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRtc2d9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2ZpbGVzU2VuZGluZyA/IHsgZGlzcGxheTogJ25vbmUnIH0gOiB7fX0+XHJcbiAgICAgICAgICB7ZmlsZXMubWFwKChmaWxlLCBpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtlID0+IGZpbGVEb3dubG9hZChmaWxlLCBmaWxlLm5hbWUpfSBrZXk9e2ZpbGUubGFzdE1vZGlmaWVkfT5cclxuICAgICAgICAgICAgICA8U3ZnIG5hbWU9XCJ2YXIvZmlsZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2PntmaWxlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtlID0+IGZpbGVFeGNsdWRlKGZpbGUpfT48U3ZnIG5hbWU9XCJ2YXIveC5zdmdcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+e01hdGgucm91bmQoZmlsZS5zaXplIC8gMTAyNCl9IHtwcm9wcy5kZXNjLmtifTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy5hdHRhY2h9PlxyXG4gICAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2ZpbGVzU2VuZGluZ30gdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBvbkNoYW5nZT17ZmlsZURpc3BsYXl9IC8+XHJcbiAgICAgICAgICAgIDxTdmcgbmFtZT1cInZhci9jbGlwLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IGF1dG9Db21wbGV0ZT1cImZhbHNlXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibXNnXCIgLz5cclxuICAgICAgICAgIDxsYWJlbCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2Muc2VuZH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgICAgPFN2ZyBuYW1lPVwidmFyL3NlbmQuc3ZnXCIgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==