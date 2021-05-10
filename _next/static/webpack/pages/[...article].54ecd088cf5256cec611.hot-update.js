webpackHotUpdate_N_E("pages/[...article]",{

/***/ "./components/tools/Notebook.js":
/*!**************************************!*\
  !*** ./components/tools/Notebook.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notebook; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/tools/notebook.styl */ "./styles/tools/notebook.styl");
/* harmony import */ var _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Svg */ "./components/Svg.js");
/* harmony import */ var _elements_fullscreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements/fullscreen */ "./components/elements/fullscreen.js");





var _jsxFileName = "E:\\Danilall\\projects\\regtool\\components\\tools\\Notebook.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var fonts = ["Arial", "Times New Roman", "Arial Black", "Comic Sans MS", "Courier New", "Georgia", "Impact", "Trebuchet MS", "Verdana"];
var sizes = [1, 2, 3, 4, 5, 6, 7];

function cursiveSet() {
  document.execCommand('italic', false, null);
}

function boldSet() {
  document.execCommand('bold', false, null);
}

function underSet() {
  document.execCommand('under', false, null);
}

function throughSet() {
  document.execCommand('strikethrough', false, null);
}

function ulSet() {
  document.execCommand('insertUnorderedList', false, null);
}

function olSet() {
  document.execCommand('insertOrderedList', false, null);
}

function undo() {
  document.execCommand('redo', false, null);
}

function redo() {
  document.execCommand('undo', false, null);
}

function clearFormat() {
  document.execCommand('removeFormat', false, null);
  document.execCommand('unlink', false, null);
}

function printR() {
  window.print();
}

function Notebook(_ref) {
  _s();

  var _this = this;

  var props = _ref.props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      list = _useState[0],
      listC = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      current = _useState2[0],
      currentC = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      name = _useState3[0],
      nameC = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      modify = _useState4[0],
      modifyC = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      under = _useState5[0],
      underC = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      bold = _useState6[0],
      boldC = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      cursive = _useState7[0],
      cursiveC = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      through = _useState8[0],
      throughC = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      ul = _useState9[0],
      ulC = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      ol = _useState10[0],
      olC = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("#ffffff"),
      back = _useState11[0],
      backC = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("#000000"),
      color = _useState12[0],
      colorC = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Arial"),
      font = _useState13[0],
      fontC = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(2),
      size = _useState14[0],
      sizeC = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      spell = _useState15[0],
      spellC = _useState15[1];

  var block = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var db = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var content = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  function backSet(e) {
    setWithCss(function () {
      return document.execCommand('hiliteColor', false, e.target.value);
    });
    backC(e.target.value);
  }

  function colorSet(e) {
    setWithCss(function () {
      return document.execCommand('foreColor', false, e.target.value);
    });
    colorC(e.target.value);
  }

  function fontSet(e) {
    setWithCss(function () {
      return document.execCommand('fontName', false, e.target.value);
    });
    fontC(e.target.value);
  }

  function sizeSet(e) {
    setWithCss(function () {
      return document.execCommand('fontSize', false, Number(e.target.value));
    });
    sizeC(e.target.value);
  }

  function spellCheck() {
    spellC(function (prev) {
      return !prev;
    });
  }
  /*function download() {
    const d = hjk(content.current.innerHTML)
    console.log(d)
  }*/


  function fixChanges(id) {
    if (id === current) {
      db.current.transaction("data", "readwrite").objectStore("data").put(content.current.innerHTML, current);
    }
  }

  function putNote(obj) {
    db.current.transaction("list", "readwrite").objectStore("list").put(obj);
  }

  function deleteNote(id) {
    listC(function (prev) {
      var arr = prev.filter(function (o) {
        return o.id !== id;
      });
      currentC(arr[0].id);
      return arr;
    });
    db.current.transaction("list", "readwrite").objectStore("list")["delete"](id);
  }

  function createNote() {
    var id = Date.now();
    var obj = {
      id: id,
      modify: id,
      name: props.desc.nameless
    };
    listC(function (prev) {
      return [obj].concat(Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prev));
    });
    putNote(obj);
    currentC(id);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var openRequest = indexedDB.open("dbnotes", 1);

    openRequest.onupgradeneeded = function (e) {
      var db = e.target.result;

      if (!db.objectStoreNames.contains('data')) {
        db.createObjectStore('data');
      }

      if (!db.objectStoreNames.contains('list')) {
        db.createObjectStore('list', {
          keyPath: 'id'
        });
      }
    };

    openRequest.onsuccess = function (e) {
      db.current = e.target.result;

      db.current.transaction("list", "readonly").objectStore("list").getAll().onsuccess = function (e) {
        if (e.target.result.length !== 0) {
          listC(e.target.result);
          currentC(Number(localStorage.getItem('noteCurrent')));
        } else createNote();
      };
    };

    function f(e) {
      try {
        var selection = document.getSelection();
        var range = selection.getRangeAt(0);
        var area = getParentEditorField(range.startContainer);
        if (area === null) return;
        boldC(testParents(range.startContainer, area, "b"));
        underC(testParents(range.startContainer, area, "u"));
        cursiveC(testParents(range.startContainer, area, "i"));
        throughC(testParents(range.startContainer, area, "strike"));
        fontC(testParentsCss(range.startContainer, area, 'fontFamily'));

        switch (testParentsCss(range.startContainer, area, 'fontSize')) {
          case 'x-small':
            sizeC(1);
            break;

          case 'small':
            sizeC(2);
            break;

          case 'medium':
            sizeC(3);
            break;

          case 'large':
            sizeC(4);
            break;

          case 'x-large':
            sizeC(5);
            break;

          case 'xx-large':
            sizeC(6);
            break;

          case 'xxx-large':
            sizeC(7);
            break;
        }

        backC(testParentsCss(range.startContainer, area, 'backgroundColor'));
        colorC(testParentsCss(range.startContainer, area, 'color'));
        olC(testParents(range.startContainer, area, 'ol'));
        ulC(testParents(range.startContainer, area, 'ul')); //range.cloneContents()
      } catch (_unused) {}
    }

    document.addEventListener('selectionchange', f);
    return function () {
      try {
        openRequest.close();
      } catch (_unused2) {}

      document.removeEventListener('selectionchange', f);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (current === null) return;
    localStorage.setItem('noteCurrent', current);

    db.current.transaction("data", "readonly").objectStore("data").get(current).onsuccess = function (e) {
      if (e.target.result === undefined) {
        content.current.innerHTML = "";
      } else content.current.innerHTML = e.target.result;
    };

    var i = setInterval(function () {
      return fixChanges(current);
    }, 1000);
    return function () {
      return clearInterval(i);
    };
  }, [current]);

  function fieldChange(id, field, value) {
    listC(function (prev) {
      return prev.map(function (o) {
        if (o.id === id) {
          var _objectSpread2;

          var obj = _objectSpread(_objectSpread({}, o), {}, (_objectSpread2 = {}, Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, field, value), Object(E_Danilall_projects_regtool_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "modify", Date.now()), _objectSpread2));

          putNote(obj);
          return obj;
        } else return o;
      });
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var dataw = list.filter(function (o) {
      return o.id === current;
    });
    if (dataw.length === 0) return;
    nameC(dataw[0].name);
    modifyC(dataw[0].modify);
  }, [list, current]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.block,
    ref: block,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.note,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: name,
          onChange: function onChange(e) {
            return fieldChange(current, "name", e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: getTime(current)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043E:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", getTime(modify)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
          elem: block.current
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.undo,
          onClick: undo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/undo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.redo,
          onClick: redo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/redo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            "data-tooltip": props.desc.tab.size,
            value: size,
            onChange: sizeSet,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
              arr: sizes
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            "data-tooltip": props.desc.tab.font,
            value: font,
            onChange: fontSet,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
              arr: fonts
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: under ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.under,
          onClick: underSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/underlined.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 106
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: bold ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.bold,
          onClick: boldSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/bold.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 103
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.cursive, " ").concat(cursive ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.cursive,
          onClick: cursiveSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/italic.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.through, " ").concat(through ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          onClick: throughSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/strikethrough.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 92
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          "data-tooltip": props.desc.tab.color,
          style: {
            fill: color
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/color.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.through,
            type: "color",
            onChange: colorSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          "data-tooltip": props.desc.tab.back,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              backgroundColor: back
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "color",
            onChange: backSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ol ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ol,
          onClick: olSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_numbered.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ul ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ul,
          onClick: ulSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_bulleted.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.clear,
          onClick: clearFormat,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/format_clear.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 75
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.print,
          onClick: printR,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/print.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 70
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: spell ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.spell,
          onClick: spellCheck,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/spellcheck.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 108
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        contentEditable: true,
        spellCheck: spell,
        ref: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: createNote,
        children: props.desc.add
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: list.map(function (obj) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: current === obj.id ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.current : '',
            onClick: function onClick() {
              return currentC(obj.id);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: obj.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteNote(obj.id);
              },
              children: props.desc["delete"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: new Date(obj.modify).toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 11
            }, _this)]
          }, obj.id, true, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 26
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 10
  }, this);
}

_s(Notebook, "sPqGbd5TsSCo7GEYaR/muPd9HPU=");

_c = Notebook;

function Options(_ref2) {
  var _this2 = this;

  var arr = _ref2.arr,
      before = _ref2.before,
      after = _ref2.after;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: arr.map(function (o) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: o,
        children: [before, " ", o, " ", after]
      }, o, true, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 19
      }, _this2);
    })
  }, void 0, false);
}

_c2 = Options;

function getTime(time) {
  return new Date(time).toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    hour: "numeric",
    minute: "numeric"
  });
}

function getParentEditorField(node) {
  var parentElem = node;

  while (parentElem) {
    parentElem = parentElem.parentNode;
    if (parentElem === null) return null;
    if (parentElem.contentEditable === "true") return parentElem;
  }
}

function testParents(node, edge, elemName) {
  var parentElem = node;

  while (parentElem) {
    parentElem = parentElem.parentNode;
    if (parentElem === edge) return false;
    if (parentElem.localName === elemName) return true;
  }
}

function testParentsCss(node, edge, styleName) {
  var parentElem = node;

  while (parentElem) {
    parentElem = parentElem.parentNode;
    if (parentElem === edge) return null;
    if (parentElem.style[styleName] !== "") return parentElem.style[styleName];
  }
}

function setWithCss(f) {
  document.execCommand('styleWithCSS', false, true);
  f();
  document.execCommand('styleWithCSS', false, false);
}

var _c, _c2;

$RefreshReg$(_c, "Notebook");
$RefreshReg$(_c2, "Options");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImZpeENoYW5nZXMiLCJpZCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJpbm5lckhUTUwiLCJwdXROb3RlIiwib2JqIiwiZGVsZXRlTm90ZSIsImFyciIsImZpbHRlciIsIm8iLCJjcmVhdGVOb3RlIiwiRGF0ZSIsIm5vdyIsImRlc2MiLCJuYW1lbGVzcyIsInVzZUVmZmVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9uc3VjY2VzcyIsImdldEFsbCIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2UiLCJnZXRSYW5nZUF0IiwiYXJlYSIsImdldFBhcmVudEVkaXRvckZpZWxkIiwic3RhcnRDb250YWluZXIiLCJ0ZXN0UGFyZW50cyIsInRlc3RQYXJlbnRzQ3NzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEl0ZW0iLCJnZXQiLCJ1bmRlZmluZWQiLCJpIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZmllbGRDaGFuZ2UiLCJmaWVsZCIsIm1hcCIsImRhdGF3IiwicyIsIm5vdGUiLCJnZXRUaW1lIiwidGFiIiwic2VsZWN0IiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImNsZWFyIiwiYWRkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsIk9wdGlvbnMiLCJiZWZvcmUiLCJhZnRlciIsInRpbWUiLCJob3VyIiwibWludXRlIiwibm9kZSIsInBhcmVudEVsZW0iLCJwYXJlbnROb2RlIiwiY29udGVudEVkaXRhYmxlIiwiZWRnZSIsImVsZW1OYW1lIiwibG9jYWxOYW1lIiwic3R5bGVOYW1lIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxPQUFELEVBQVUsaUJBQVYsRUFBNkIsYUFBN0IsRUFBNEMsZUFBNUMsRUFBNkQsYUFBN0QsRUFBNEUsU0FBNUUsRUFBdUYsUUFBdkYsRUFBaUcsY0FBakcsRUFBaUgsU0FBakgsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWQ7O0FBRUEsU0FBU0MsVUFBVCxHQUFzQjtBQUFFQyxVQUFRLENBQUNDLFdBQVQsQ0FBcUIsUUFBckIsRUFBK0IsS0FBL0IsRUFBc0MsSUFBdEM7QUFBNkM7O0FBQ3JFLFNBQVNDLE9BQVQsR0FBbUI7QUFBRUYsVUFBUSxDQUFDQyxXQUFULENBQXFCLE1BQXJCLEVBQTZCLEtBQTdCLEVBQW9DLElBQXBDO0FBQTJDOztBQUNoRSxTQUFTRSxRQUFULEdBQW9CO0FBQUVILFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixPQUFyQixFQUE4QixLQUE5QixFQUFxQyxJQUFyQztBQUE0Qzs7QUFDbEUsU0FBU0csVUFBVCxHQUFzQjtBQUFFSixVQUFRLENBQUNDLFdBQVQsQ0FBcUIsZUFBckIsRUFBc0MsS0FBdEMsRUFBNkMsSUFBN0M7QUFBb0Q7O0FBQzVFLFNBQVNJLEtBQVQsR0FBaUI7QUFBRUwsVUFBUSxDQUFDQyxXQUFULENBQXFCLHFCQUFyQixFQUE0QyxLQUE1QyxFQUFtRCxJQUFuRDtBQUEwRDs7QUFDN0UsU0FBU0ssS0FBVCxHQUFpQjtBQUFFTixVQUFRLENBQUNDLFdBQVQsQ0FBcUIsbUJBQXJCLEVBQTBDLEtBQTFDLEVBQWlELElBQWpEO0FBQXdEOztBQUMzRSxTQUFTTSxJQUFULEdBQWdCO0FBQUVQLFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixNQUFyQixFQUE2QixLQUE3QixFQUFvQyxJQUFwQztBQUEyQzs7QUFDN0QsU0FBU08sSUFBVCxHQUFnQjtBQUFFUixVQUFRLENBQUNDLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkIsS0FBN0IsRUFBb0MsSUFBcEM7QUFBMkM7O0FBQzdELFNBQVNRLFdBQVQsR0FBdUI7QUFDckJULFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQyxLQUFyQyxFQUE0QyxJQUE1QztBQUNBRCxVQUFRLENBQUNDLFdBQVQsQ0FBcUIsUUFBckIsRUFBK0IsS0FBL0IsRUFBc0MsSUFBdEM7QUFDRDs7QUFFRCxTQUFTUyxNQUFULEdBQWtCO0FBQUVDLFFBQU0sQ0FBQ0MsS0FBUDtBQUFnQjs7QUFFckIsU0FBU0MsUUFBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxrQkFDcEJDLHNEQUFRLENBQUMsRUFBRCxDQURZO0FBQUEsTUFDbkNDLElBRG1DO0FBQUEsTUFDN0JDLEtBRDZCOztBQUFBLG1CQUdkRixzREFBUSxDQUFDLElBQUQsQ0FITTtBQUFBLE1BR25DRyxPQUhtQztBQUFBLE1BRzFCQyxRQUgwQjs7QUFBQSxtQkFJcEJKLHNEQUFRLENBQUMsRUFBRCxDQUpZO0FBQUEsTUFJbkNLLElBSm1DO0FBQUEsTUFJN0JDLEtBSjZCOztBQUFBLG1CQUtoQk4sc0RBQVEsQ0FBQyxDQUFELENBTFE7QUFBQSxNQUtuQ08sTUFMbUM7QUFBQSxNQUszQkMsT0FMMkI7O0FBQUEsbUJBT2xCUixzREFBUSxDQUFDLEtBQUQsQ0FQVTtBQUFBLE1BT25DUyxLQVBtQztBQUFBLE1BTzVCQyxNQVA0Qjs7QUFBQSxtQkFRcEJWLHNEQUFRLENBQUMsS0FBRCxDQVJZO0FBQUEsTUFRbkNXLElBUm1DO0FBQUEsTUFRN0JDLEtBUjZCOztBQUFBLG1CQVNkWixzREFBUSxDQUFDLEtBQUQsQ0FUTTtBQUFBLE1BU25DYSxPQVRtQztBQUFBLE1BUzFCQyxRQVQwQjs7QUFBQSxtQkFVZGQsc0RBQVEsQ0FBQyxLQUFELENBVk07QUFBQSxNQVVuQ2UsT0FWbUM7QUFBQSxNQVUxQkMsUUFWMEI7O0FBQUEsbUJBV3hCaEIsc0RBQVEsQ0FBQyxLQUFELENBWGdCO0FBQUEsTUFXbkNpQixFQVhtQztBQUFBLE1BVy9CQyxHQVgrQjs7QUFBQSxvQkFZeEJsQixzREFBUSxDQUFDLEtBQUQsQ0FaZ0I7QUFBQSxNQVluQ21CLEVBWm1DO0FBQUEsTUFZL0JDLEdBWitCOztBQUFBLG9CQWFwQnBCLHNEQUFRLENBQUMsU0FBRCxDQWJZO0FBQUEsTUFhbkNxQixJQWJtQztBQUFBLE1BYTdCQyxLQWI2Qjs7QUFBQSxvQkFjbEJ0QixzREFBUSxDQUFDLFNBQUQsQ0FkVTtBQUFBLE1BY25DdUIsS0FkbUM7QUFBQSxNQWM1QkMsTUFkNEI7O0FBQUEsb0JBZXBCeEIsc0RBQVEsQ0FBQyxPQUFELENBZlk7QUFBQSxNQWVuQ3lCLElBZm1DO0FBQUEsTUFlN0JDLEtBZjZCOztBQUFBLG9CQWdCcEIxQixzREFBUSxDQUFDLENBQUQsQ0FoQlk7QUFBQSxNQWdCbkMyQixJQWhCbUM7QUFBQSxNQWdCN0JDLEtBaEI2Qjs7QUFBQSxvQkFpQmxCNUIsc0RBQVEsQ0FBQyxJQUFELENBakJVO0FBQUEsTUFpQm5DNkIsS0FqQm1DO0FBQUEsTUFpQjVCQyxNQWpCNEI7O0FBbUIxQyxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBLE1BQU1DLEVBQUUsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQWpCO0FBQ0EsTUFBTUUsT0FBTyxHQUFHRixvREFBTSxDQUFDLElBQUQsQ0FBdEI7O0FBRUEsV0FBU0csT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFBRUMsY0FBVSxDQUFDO0FBQUEsYUFBTXBELFFBQVEsQ0FBQ0MsV0FBVCxDQUFxQixhQUFyQixFQUFvQyxLQUFwQyxFQUEyQ2tELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFwRCxDQUFOO0FBQUEsS0FBRCxDQUFWO0FBQThFakIsU0FBSyxDQUFDYyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFMO0FBQXVCOztBQUMzSCxXQUFTQyxRQUFULENBQWtCSixDQUFsQixFQUFxQjtBQUFFQyxjQUFVLENBQUM7QUFBQSxhQUFNcEQsUUFBUSxDQUFDQyxXQUFULENBQXFCLFdBQXJCLEVBQWtDLEtBQWxDLEVBQXlDa0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQWxELENBQU47QUFBQSxLQUFELENBQVY7QUFBNEVmLFVBQU0sQ0FBQ1ksQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBTjtBQUF3Qjs7QUFDM0gsV0FBU0UsT0FBVCxDQUFpQkwsQ0FBakIsRUFBb0I7QUFBRUMsY0FBVSxDQUFDO0FBQUEsYUFBTXBELFFBQVEsQ0FBQ0MsV0FBVCxDQUFxQixVQUFyQixFQUFpQyxLQUFqQyxFQUF3Q2tELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFqRCxDQUFOO0FBQUEsS0FBRCxDQUFWO0FBQTJFYixTQUFLLENBQUNVLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQUw7QUFBdUI7O0FBQ3hILFdBQVNHLE9BQVQsQ0FBaUJOLENBQWpCLEVBQW9CO0FBQUVDLGNBQVUsQ0FBQztBQUFBLGFBQU1wRCxRQUFRLENBQUNDLFdBQVQsQ0FBcUIsVUFBckIsRUFBaUMsS0FBakMsRUFBd0N5RCxNQUFNLENBQUNQLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQTlDLENBQU47QUFBQSxLQUFELENBQVY7QUFBbUZYLFNBQUssQ0FBQ1EsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBTDtBQUF1Qjs7QUFDaEksV0FBU0ssVUFBVCxHQUFzQjtBQUFFZCxVQUFNLENBQUMsVUFBQWUsSUFBSTtBQUFBLGFBQUksQ0FBQ0EsSUFBTDtBQUFBLEtBQUwsQ0FBTjtBQUF1QjtBQUUvQztBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsV0FBU0MsVUFBVCxDQUFvQkMsRUFBcEIsRUFBd0I7QUFDdEIsUUFBSUEsRUFBRSxLQUFLNUMsT0FBWCxFQUFvQjtBQUNsQjhCLFFBQUUsQ0FBQzlCLE9BQUgsQ0FBVzZDLFdBQVgsQ0FBdUIsTUFBdkIsRUFBK0IsV0FBL0IsRUFBNENDLFdBQTVDLENBQXdELE1BQXhELEVBQWdFQyxHQUFoRSxDQUFvRWhCLE9BQU8sQ0FBQy9CLE9BQVIsQ0FBZ0JnRCxTQUFwRixFQUErRmhELE9BQS9GO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTaUQsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDcEJwQixNQUFFLENBQUM5QixPQUFILENBQVc2QyxXQUFYLENBQXVCLE1BQXZCLEVBQStCLFdBQS9CLEVBQTRDQyxXQUE1QyxDQUF3RCxNQUF4RCxFQUFnRUMsR0FBaEUsQ0FBb0VHLEdBQXBFO0FBQ0Q7O0FBQ0QsV0FBU0MsVUFBVCxDQUFvQlAsRUFBcEIsRUFBd0I7QUFDdEI3QyxTQUFLLENBQUMsVUFBQTJDLElBQUksRUFBSTtBQUNaLFVBQU1VLEdBQUcsR0FBR1YsSUFBSSxDQUFDVyxNQUFMLENBQVksVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ1YsRUFBRixLQUFTQSxFQUFiO0FBQUEsT0FBYixDQUFaO0FBQ0EzQyxjQUFRLENBQUNtRCxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9SLEVBQVIsQ0FBUjtBQUNBLGFBQU9RLEdBQVA7QUFDRCxLQUpJLENBQUw7QUFLQXRCLE1BQUUsQ0FBQzlCLE9BQUgsQ0FBVzZDLFdBQVgsQ0FBdUIsTUFBdkIsRUFBK0IsV0FBL0IsRUFBNENDLFdBQTVDLENBQXdELE1BQXhELFlBQXVFRixFQUF2RTtBQUNEOztBQUNELFdBQVNXLFVBQVQsR0FBc0I7QUFDcEIsUUFBTVgsRUFBRSxHQUFHWSxJQUFJLENBQUNDLEdBQUwsRUFBWDtBQUNBLFFBQU1QLEdBQUcsR0FBRztBQUFFTixRQUFFLEVBQUVBLEVBQU47QUFBVXhDLFlBQU0sRUFBRXdDLEVBQWxCO0FBQXNCMUMsVUFBSSxFQUFFTixLQUFLLENBQUM4RCxJQUFOLENBQVdDO0FBQXZDLEtBQVo7QUFDQTVELFNBQUssQ0FBQyxVQUFBMkMsSUFBSTtBQUFBLGNBQUtRLEdBQUwsOElBQWFSLElBQWI7QUFBQSxLQUFMLENBQUw7QUFDQU8sV0FBTyxDQUFDQyxHQUFELENBQVA7QUFDQWpELFlBQVEsQ0FBQzJDLEVBQUQsQ0FBUjtBQUNEOztBQUNEZ0IseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVyxHQUFHQyxTQUFTLENBQUNDLElBQVYsQ0FBZSxTQUFmLEVBQTBCLENBQTFCLENBQXBCOztBQUVBRixlQUFXLENBQUNHLGVBQVosR0FBOEIsVUFBVS9CLENBQVYsRUFBYTtBQUN6QyxVQUFNSCxFQUFFLEdBQUdHLENBQUMsQ0FBQ0UsTUFBRixDQUFTOEIsTUFBcEI7O0FBQ0EsVUFBSSxDQUFDbkMsRUFBRSxDQUFDb0MsZ0JBQUgsQ0FBb0JDLFFBQXBCLENBQTZCLE1BQTdCLENBQUwsRUFBMkM7QUFDekNyQyxVQUFFLENBQUNzQyxpQkFBSCxDQUFxQixNQUFyQjtBQUNEOztBQUNELFVBQUksQ0FBQ3RDLEVBQUUsQ0FBQ29DLGdCQUFILENBQW9CQyxRQUFwQixDQUE2QixNQUE3QixDQUFMLEVBQTJDO0FBQ3pDckMsVUFBRSxDQUFDc0MsaUJBQUgsQ0FBcUIsTUFBckIsRUFBNkI7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQTdCO0FBQ0Q7QUFDRixLQVJEOztBQVNBUixlQUFXLENBQUNTLFNBQVosR0FBd0IsVUFBVXJDLENBQVYsRUFBYTtBQUNuQ0gsUUFBRSxDQUFDOUIsT0FBSCxHQUFhaUMsQ0FBQyxDQUFDRSxNQUFGLENBQVM4QixNQUF0Qjs7QUFDQW5DLFFBQUUsQ0FBQzlCLE9BQUgsQ0FBVzZDLFdBQVgsQ0FBdUIsTUFBdkIsRUFBK0IsVUFBL0IsRUFBMkNDLFdBQTNDLENBQXVELE1BQXZELEVBQStEeUIsTUFBL0QsR0FBd0VELFNBQXhFLEdBQW9GLFVBQVVyQyxDQUFWLEVBQWE7QUFDL0YsWUFBSUEsQ0FBQyxDQUFDRSxNQUFGLENBQVM4QixNQUFULENBQWdCTyxNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUNoQ3pFLGVBQUssQ0FBQ2tDLENBQUMsQ0FBQ0UsTUFBRixDQUFTOEIsTUFBVixDQUFMO0FBQ0FoRSxrQkFBUSxDQUFDdUMsTUFBTSxDQUFDaUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQUQsQ0FBUCxDQUFSO0FBQ0QsU0FIRCxNQUdPbkIsVUFBVTtBQUNsQixPQUxEO0FBTUQsS0FSRDs7QUFTQSxhQUFTb0IsQ0FBVCxDQUFXMUMsQ0FBWCxFQUFjO0FBQ1osVUFBSTtBQUNGLFlBQU0yQyxTQUFTLEdBQUc5RixRQUFRLENBQUMrRixZQUFULEVBQWxCO0FBQ0EsWUFBTUMsS0FBSyxHQUFHRixTQUFTLENBQUNHLFVBQVYsQ0FBcUIsQ0FBckIsQ0FBZDtBQUNBLFlBQU1DLElBQUksR0FBR0Msb0JBQW9CLENBQUNILEtBQUssQ0FBQ0ksY0FBUCxDQUFqQztBQUNBLFlBQUlGLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ25CdkUsYUFBSyxDQUFDMEUsV0FBVyxDQUFDTCxLQUFLLENBQUNJLGNBQVAsRUFBdUJGLElBQXZCLEVBQTZCLEdBQTdCLENBQVosQ0FBTDtBQUNBekUsY0FBTSxDQUFDNEUsV0FBVyxDQUFDTCxLQUFLLENBQUNJLGNBQVAsRUFBdUJGLElBQXZCLEVBQTZCLEdBQTdCLENBQVosQ0FBTjtBQUNBckUsZ0JBQVEsQ0FBQ3dFLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDSSxjQUFQLEVBQXVCRixJQUF2QixFQUE2QixHQUE3QixDQUFaLENBQVI7QUFDQW5FLGdCQUFRLENBQUNzRSxXQUFXLENBQUNMLEtBQUssQ0FBQ0ksY0FBUCxFQUF1QkYsSUFBdkIsRUFBNkIsUUFBN0IsQ0FBWixDQUFSO0FBQ0F6RCxhQUFLLENBQUM2RCxjQUFjLENBQUNOLEtBQUssQ0FBQ0ksY0FBUCxFQUF1QkYsSUFBdkIsRUFBNkIsWUFBN0IsQ0FBZixDQUFMOztBQUNBLGdCQUFRSSxjQUFjLENBQUNOLEtBQUssQ0FBQ0ksY0FBUCxFQUF1QkYsSUFBdkIsRUFBNkIsVUFBN0IsQ0FBdEI7QUFDRSxlQUFLLFNBQUw7QUFBZ0J2RCxpQkFBSyxDQUFDLENBQUQsQ0FBTDtBQUFVOztBQUMxQixlQUFLLE9BQUw7QUFBY0EsaUJBQUssQ0FBQyxDQUFELENBQUw7QUFBVTs7QUFDeEIsZUFBSyxRQUFMO0FBQWVBLGlCQUFLLENBQUMsQ0FBRCxDQUFMO0FBQVU7O0FBQ3pCLGVBQUssT0FBTDtBQUFjQSxpQkFBSyxDQUFDLENBQUQsQ0FBTDtBQUFVOztBQUN4QixlQUFLLFNBQUw7QUFBZ0JBLGlCQUFLLENBQUMsQ0FBRCxDQUFMO0FBQVU7O0FBQzFCLGVBQUssVUFBTDtBQUFpQkEsaUJBQUssQ0FBQyxDQUFELENBQUw7QUFBVTs7QUFDM0IsZUFBSyxXQUFMO0FBQWtCQSxpQkFBSyxDQUFDLENBQUQsQ0FBTDtBQUFVO0FBUDlCOztBQVNBTixhQUFLLENBQUNpRSxjQUFjLENBQUNOLEtBQUssQ0FBQ0ksY0FBUCxFQUF1QkYsSUFBdkIsRUFBNkIsaUJBQTdCLENBQWYsQ0FBTDtBQUNBM0QsY0FBTSxDQUFDK0QsY0FBYyxDQUFDTixLQUFLLENBQUNJLGNBQVAsRUFBdUJGLElBQXZCLEVBQTZCLE9BQTdCLENBQWYsQ0FBTjtBQUNBL0QsV0FBRyxDQUFDa0UsV0FBVyxDQUFDTCxLQUFLLENBQUNJLGNBQVAsRUFBdUJGLElBQXZCLEVBQTZCLElBQTdCLENBQVosQ0FBSDtBQUNBakUsV0FBRyxDQUFDb0UsV0FBVyxDQUFDTCxLQUFLLENBQUNJLGNBQVAsRUFBdUJGLElBQXZCLEVBQTZCLElBQTdCLENBQVosQ0FBSCxDQXRCRSxDQXVCRjtBQUNELE9BeEJELENBd0JFLGdCQUFNLENBQUc7QUFDWjs7QUFDRGxHLFlBQVEsQ0FBQ3VHLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q1YsQ0FBN0M7QUFDQSxXQUFPLFlBQU07QUFDWCxVQUFJO0FBQUVkLG1CQUFXLENBQUN5QixLQUFaO0FBQXFCLE9BQTNCLENBQTRCLGlCQUFNLENBQUc7O0FBQ3JDeEcsY0FBUSxDQUFDeUcsbUJBQVQsQ0FBNkIsaUJBQTdCLEVBQWdEWixDQUFoRDtBQUNELEtBSEQ7QUFJRCxHQXJEUSxFQXFETixFQXJETSxDQUFUO0FBc0RBZix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJNUQsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3RCeUUsZ0JBQVksQ0FBQ2UsT0FBYixDQUFxQixhQUFyQixFQUFvQ3hGLE9BQXBDOztBQUNBOEIsTUFBRSxDQUFDOUIsT0FBSCxDQUFXNkMsV0FBWCxDQUF1QixNQUF2QixFQUErQixVQUEvQixFQUEyQ0MsV0FBM0MsQ0FBdUQsTUFBdkQsRUFBK0QyQyxHQUEvRCxDQUFtRXpGLE9BQW5FLEVBQTRFc0UsU0FBNUUsR0FBd0YsVUFBVXJDLENBQVYsRUFBYTtBQUNuRyxVQUFJQSxDQUFDLENBQUNFLE1BQUYsQ0FBUzhCLE1BQVQsS0FBb0J5QixTQUF4QixFQUFtQztBQUNqQzNELGVBQU8sQ0FBQy9CLE9BQVIsQ0FBZ0JnRCxTQUFoQixHQUE0QixFQUE1QjtBQUNELE9BRkQsTUFFT2pCLE9BQU8sQ0FBQy9CLE9BQVIsQ0FBZ0JnRCxTQUFoQixHQUE0QmYsQ0FBQyxDQUFDRSxNQUFGLENBQVM4QixNQUFyQztBQUNSLEtBSkQ7O0FBS0EsUUFBTTBCLENBQUMsR0FBR0MsV0FBVyxDQUFDO0FBQUEsYUFBTWpELFVBQVUsQ0FBQzNDLE9BQUQsQ0FBaEI7QUFBQSxLQUFELEVBQTRCLElBQTVCLENBQXJCO0FBQ0EsV0FBTztBQUFBLGFBQU02RixhQUFhLENBQUNGLENBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0FWUSxFQVVOLENBQUMzRixPQUFELENBVk0sQ0FBVDs7QUFZQSxXQUFTOEYsV0FBVCxDQUFxQmxELEVBQXJCLEVBQXlCbUQsS0FBekIsRUFBZ0MzRCxLQUFoQyxFQUF1QztBQUNyQ3JDLFNBQUssQ0FBQyxVQUFBMkMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ3NELEdBQUwsQ0FBUyxVQUFBMUMsQ0FBQyxFQUFJO0FBQzFCLFlBQUlBLENBQUMsQ0FBQ1YsRUFBRixLQUFTQSxFQUFiLEVBQWlCO0FBQUE7O0FBQ2YsY0FBTU0sR0FBRyxtQ0FBUUksQ0FBUiwrS0FBWXlDLEtBQVosRUFBb0IzRCxLQUFwQiwrSkFBbUNvQixJQUFJLENBQUNDLEdBQUwsRUFBbkMsbUJBQVQ7O0FBQ0FSLGlCQUFPLENBQUNDLEdBQUQsQ0FBUDtBQUNBLGlCQUFPQSxHQUFQO0FBQ0QsU0FKRCxNQUlPLE9BQU9JLENBQVA7QUFDUixPQU5hLENBQUo7QUFBQSxLQUFMLENBQUw7QUFPRDs7QUFDRE0seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTXFDLEtBQUssR0FBR25HLElBQUksQ0FBQ3VELE1BQUwsQ0FBWSxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDVixFQUFGLEtBQVM1QyxPQUFiO0FBQUEsS0FBYixDQUFkO0FBQ0EsUUFBSWlHLEtBQUssQ0FBQ3pCLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDeEJyRSxTQUFLLENBQUM4RixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMvRixJQUFWLENBQUw7QUFDQUcsV0FBTyxDQUFDNEYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTN0YsTUFBVixDQUFQO0FBQ0QsR0FMUSxFQUtOLENBQUNOLElBQUQsRUFBT0UsT0FBUCxDQUxNLENBQVQ7QUFNQSxzQkFBTztBQUFLLGFBQVMsRUFBRWtHLGtFQUFDLENBQUN0RSxLQUFsQjtBQUF5QixPQUFHLEVBQUVBLEtBQTlCO0FBQUEsNEJBQ0w7QUFBSyxlQUFTLEVBQUVzRSxrRUFBQyxDQUFDQyxJQUFsQjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFBTyxlQUFLLEVBQUVqRyxJQUFkO0FBQW9CLGtCQUFRLEVBQUUsa0JBQUErQixDQUFDO0FBQUEsbUJBQUk2RCxXQUFXLENBQUM5RixPQUFELEVBQVUsTUFBVixFQUFrQmlDLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUEzQixDQUFmO0FBQUE7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsa0NBQ0U7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUEsd0JBQU9nRSxPQUFPLENBQUNwRyxPQUFEO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFNRTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQSw4QkFBUW9HLE9BQU8sQ0FBQ2hHLE1BQUQsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQWNFLHFFQUFDLDREQUFEO0FBQVksY0FBSSxFQUFFd0IsS0FBSyxDQUFDNUI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWlCRTtBQUFBLGdDQUNFO0FBQVEsMEJBQWNKLEtBQUssQ0FBQzhELElBQU4sQ0FBVzJDLEdBQVgsQ0FBZWhILElBQXJDO0FBQTJDLGlCQUFPLEVBQUVBLElBQXBEO0FBQUEsaUNBQTBELHFFQUFDLDRDQUFEO0FBQUssZ0JBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQVEsMEJBQWNPLEtBQUssQ0FBQzhELElBQU4sQ0FBVzJDLEdBQVgsQ0FBZS9HLElBQXJDO0FBQTJDLGlCQUFPLEVBQUVBLElBQXBEO0FBQUEsaUNBQTBELHFFQUFDLDRDQUFEO0FBQUssZ0JBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUEsaUNBQ0U7QUFBUSw0QkFBY00sS0FBSyxDQUFDOEQsSUFBTixDQUFXMkMsR0FBWCxDQUFlN0UsSUFBckM7QUFBMkMsaUJBQUssRUFBRUEsSUFBbEQ7QUFBd0Qsb0JBQVEsRUFBRWUsT0FBbEU7QUFBQSxtQ0FDRSxxRUFBQyxPQUFEO0FBQVMsaUJBQUcsRUFBRTNEO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBUUU7QUFBQSxpQ0FDRTtBQUFRLDRCQUFjZ0IsS0FBSyxDQUFDOEQsSUFBTixDQUFXMkMsR0FBWCxDQUFlL0UsSUFBckM7QUFBMkMsaUJBQUssRUFBRUEsSUFBbEQ7QUFBd0Qsb0JBQVEsRUFBRWdCLE9BQWxFO0FBQUEsbUNBQ0UscUVBQUMsT0FBRDtBQUFTLGlCQUFHLEVBQUUzRDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixlQWFFO0FBQVEsbUJBQVMsRUFBRTJCLEtBQUssR0FBRzRGLGtFQUFDLENBQUNJLE1BQUwsR0FBYyxFQUF0QztBQUEwQywwQkFBYzFHLEtBQUssQ0FBQzhELElBQU4sQ0FBVzJDLEdBQVgsQ0FBZS9GLEtBQXZFO0FBQThFLGlCQUFPLEVBQUVyQixRQUF2RjtBQUFBLGlDQUFpRyxxRUFBQyw0Q0FBRDtBQUFLLGdCQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUFjRTtBQUFRLG1CQUFTLEVBQUV1QixJQUFJLEdBQUcwRixrRUFBQyxDQUFDSSxNQUFMLEdBQWMsRUFBckM7QUFBeUMsMEJBQWMxRyxLQUFLLENBQUM4RCxJQUFOLENBQVcyQyxHQUFYLENBQWU3RixJQUF0RTtBQUE0RSxpQkFBTyxFQUFFeEIsT0FBckY7QUFBQSxpQ0FBOEYscUVBQUMsNENBQUQ7QUFBSyxnQkFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGLGVBZUU7QUFBUSxtQkFBUyxZQUFLa0gsa0VBQUMsQ0FBQ3hGLE9BQVAsY0FBa0JBLE9BQU8sR0FBR3dGLGtFQUFDLENBQUNJLE1BQUwsR0FBYyxFQUF2QyxDQUFqQjtBQUE4RCwwQkFBYzFHLEtBQUssQ0FBQzhELElBQU4sQ0FBVzJDLEdBQVgsQ0FBZTNGLE9BQTNGO0FBQW9HLGlCQUFPLEVBQUU3QixVQUE3RztBQUFBLGlDQUF5SCxxRUFBQyw0Q0FBRDtBQUFLLGdCQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkYsZUFnQkU7QUFBUSxtQkFBUyxZQUFLcUgsa0VBQUMsQ0FBQ3RGLE9BQVAsY0FBa0JBLE9BQU8sR0FBR3NGLGtFQUFDLENBQUNJLE1BQUwsR0FBYyxFQUF2QyxDQUFqQjtBQUE4RCxpQkFBTyxFQUFFcEgsVUFBdkU7QUFBQSxpQ0FBbUYscUVBQUMsNENBQUQ7QUFBSyxnQkFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRixlQWlCRTtBQUFPLDBCQUFjVSxLQUFLLENBQUM4RCxJQUFOLENBQVcyQyxHQUFYLENBQWVqRixLQUFwQztBQUEyQyxlQUFLLEVBQUU7QUFBRW1GLGdCQUFJLEVBQUVuRjtBQUFSLFdBQWxEO0FBQUEsa0NBQ0UscUVBQUMsNENBQUQ7QUFBSyxnQkFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU8sNEJBQWN4QixLQUFLLENBQUM4RCxJQUFOLENBQVcyQyxHQUFYLENBQWV6RixPQUFwQztBQUE2QyxnQkFBSSxFQUFDLE9BQWxEO0FBQTBELG9CQUFRLEVBQUV5QjtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkYsZUFxQkU7QUFBTywwQkFBY3pDLEtBQUssQ0FBQzhELElBQU4sQ0FBVzJDLEdBQVgsQ0FBZW5GLElBQXBDO0FBQUEsa0NBQ0U7QUFBSyxpQkFBSyxFQUFFO0FBQUVzRiw2QkFBZSxFQUFFdEY7QUFBbkI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBTyxnQkFBSSxFQUFDLE9BQVo7QUFBb0Isb0JBQVEsRUFBRWM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJGLGVBeUJFO0FBQVEsbUJBQVMsRUFBRWhCLEVBQUUsR0FBR2tGLGtFQUFDLENBQUNJLE1BQUwsR0FBYyxFQUFuQztBQUF1QywwQkFBYzFHLEtBQUssQ0FBQzhELElBQU4sQ0FBVzJDLEdBQVgsQ0FBZXJGLEVBQXBFO0FBQXdFLGlCQUFPLEVBQUU1QixLQUFqRjtBQUFBLGlDQUF3RixxRUFBQyw0Q0FBRDtBQUFLLGdCQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJGLGVBMEJFO0FBQVEsbUJBQVMsRUFBRTBCLEVBQUUsR0FBR29GLGtFQUFDLENBQUNJLE1BQUwsR0FBYyxFQUFuQztBQUF1QywwQkFBYzFHLEtBQUssQ0FBQzhELElBQU4sQ0FBVzJDLEdBQVgsQ0FBZXZGLEVBQXBFO0FBQXdFLGlCQUFPLEVBQUUzQixLQUFqRjtBQUFBLGlDQUF3RixxRUFBQyw0Q0FBRDtBQUFLLGdCQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUJGLGVBMkJFO0FBQVEsMEJBQWNTLEtBQUssQ0FBQzhELElBQU4sQ0FBVzJDLEdBQVgsQ0FBZUksS0FBckM7QUFBNEMsaUJBQU8sRUFBRWxILFdBQXJEO0FBQUEsaUNBQWtFLHFFQUFDLDRDQUFEO0FBQUssZ0JBQUksRUFBQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQkYsZUE2QkU7QUFBUSwwQkFBY0ssS0FBSyxDQUFDOEQsSUFBTixDQUFXMkMsR0FBWCxDQUFlM0csS0FBckM7QUFBNEMsaUJBQU8sRUFBRUYsTUFBckQ7QUFBQSxpQ0FBNkQscUVBQUMsNENBQUQ7QUFBSyxnQkFBSSxFQUFDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdCRixlQThCRTtBQUFRLG1CQUFTLEVBQUVrQyxLQUFLLEdBQUd3RSxrRUFBQyxDQUFDSSxNQUFMLEdBQWMsRUFBdEM7QUFBMEMsMEJBQWMxRyxLQUFLLENBQUM4RCxJQUFOLENBQVcyQyxHQUFYLENBQWUzRSxLQUF2RTtBQUE4RSxpQkFBTyxFQUFFZSxVQUF2RjtBQUFBLGlDQUFtRyxxRUFBQyw0Q0FBRDtBQUFLLGdCQUFJLEVBQUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixlQWlERTtBQUFLLHVCQUFlLEVBQUUsSUFBdEI7QUFBNEIsa0JBQVUsRUFBRWYsS0FBeEM7QUFBK0MsV0FBRyxFQUFFSztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBc0RMO0FBQUssZUFBUyxFQUFFbUUsa0VBQUMsQ0FBQ3BHLElBQWxCO0FBQUEsOEJBQ0U7QUFBUSxlQUFPLEVBQUV5RCxVQUFqQjtBQUFBLGtCQUNHM0QsS0FBSyxDQUFDOEQsSUFBTixDQUFXZ0Q7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBLGtCQUNHNUcsSUFBSSxDQUFDa0csR0FBTCxDQUFTLFVBQUE5QyxHQUFHO0FBQUEsOEJBQUk7QUFBSyxxQkFBUyxFQUFFbEQsT0FBTyxLQUFLa0QsR0FBRyxDQUFDTixFQUFoQixHQUFxQnNELGtFQUFDLENBQUNsRyxPQUF2QixHQUFpQyxFQUFqRDtBQUVmLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUMsUUFBUSxDQUFDaUQsR0FBRyxDQUFDTixFQUFMLENBQWQ7QUFBQSxhQUZNO0FBQUEsb0NBR2Y7QUFBQSx3QkFBTU0sR0FBRyxDQUFDaEQ7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhlLGVBSWY7QUFBUSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1pRCxVQUFVLENBQUNELEdBQUcsQ0FBQ04sRUFBTCxDQUFoQjtBQUFBLGVBQWpCO0FBQUEsd0JBQTRDaEQsS0FBSyxDQUFDOEQsSUFBTjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUplLGVBS2Y7QUFBQSx3QkFBTSxJQUFJRixJQUFKLENBQVNOLEdBQUcsQ0FBQzlDLE1BQWIsRUFBcUJ1RyxrQkFBckIsQ0FBd0NqQixTQUF4QyxFQUFtRDtBQUFFa0IsdUJBQU8sRUFBRSxNQUFYO0FBQW1CQyxvQkFBSSxFQUFFLFNBQXpCO0FBQW9DQyxxQkFBSyxFQUFFLE1BQTNDO0FBQW1EQyxtQkFBRyxFQUFFO0FBQXhELGVBQW5EO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMZTtBQUFBLGFBQ1Y3RCxHQUFHLENBQUNOLEVBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBLFNBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdERLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBc0VEOztHQS9NdUJqRCxROztLQUFBQSxROztBQWdOeEIsU0FBU3FILE9BQVQsUUFBeUM7QUFBQTs7QUFBQSxNQUF0QjVELEdBQXNCLFNBQXRCQSxHQUFzQjtBQUFBLE1BQWpCNkQsTUFBaUIsU0FBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxTQUFUQSxLQUFTO0FBQ3ZDLHNCQUFPO0FBQUEsY0FDSjlELEdBQUcsQ0FBQzRDLEdBQUosQ0FBUSxVQUFBMUMsQ0FBQztBQUFBLDBCQUFJO0FBQWdCLGFBQUssRUFBRUEsQ0FBdkI7QUFBQSxtQkFBMkIyRCxNQUEzQixPQUFvQzNELENBQXBDLE9BQXdDNEQsS0FBeEM7QUFBQSxTQUFhNUQsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKO0FBQUEsS0FBVDtBQURJLG1CQUFQO0FBR0Q7O01BSlEwRCxPOztBQU1ULFNBQVNaLE9BQVQsQ0FBaUJlLElBQWpCLEVBQXVCO0FBQ3JCLFNBQU8sSUFBSTNELElBQUosQ0FBUzJELElBQVQsRUFBZVIsa0JBQWYsQ0FBa0NqQixTQUFsQyxFQUE2QztBQUFFb0IsU0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE9BQUcsRUFBRSxTQUF0QjtBQUFpQ0ssUUFBSSxFQUFFLFNBQXZDO0FBQWtEQyxVQUFNLEVBQUU7QUFBMUQsR0FBN0MsQ0FBUDtBQUNEOztBQUNELFNBQVNwQyxvQkFBVCxDQUE4QnFDLElBQTlCLEVBQW9DO0FBQ2xDLE1BQUlDLFVBQVUsR0FBR0QsSUFBakI7O0FBQ0EsU0FBT0MsVUFBUCxFQUFtQjtBQUNqQkEsY0FBVSxHQUFHQSxVQUFVLENBQUNDLFVBQXhCO0FBQ0EsUUFBSUQsVUFBVSxLQUFLLElBQW5CLEVBQXlCLE9BQU8sSUFBUDtBQUN6QixRQUFJQSxVQUFVLENBQUNFLGVBQVgsS0FBK0IsTUFBbkMsRUFBMkMsT0FBT0YsVUFBUDtBQUM1QztBQUNGOztBQUNELFNBQVNwQyxXQUFULENBQXFCbUMsSUFBckIsRUFBMkJJLElBQTNCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUN6QyxNQUFJSixVQUFVLEdBQUdELElBQWpCOztBQUNBLFNBQU9DLFVBQVAsRUFBbUI7QUFDakJBLGNBQVUsR0FBR0EsVUFBVSxDQUFDQyxVQUF4QjtBQUNBLFFBQUlELFVBQVUsS0FBS0csSUFBbkIsRUFBeUIsT0FBTyxLQUFQO0FBQ3pCLFFBQUlILFVBQVUsQ0FBQ0ssU0FBWCxLQUF5QkQsUUFBN0IsRUFBdUMsT0FBTyxJQUFQO0FBQ3hDO0FBQ0Y7O0FBQ0QsU0FBU3ZDLGNBQVQsQ0FBd0JrQyxJQUF4QixFQUE4QkksSUFBOUIsRUFBb0NHLFNBQXBDLEVBQStDO0FBQzdDLE1BQUlOLFVBQVUsR0FBR0QsSUFBakI7O0FBQ0EsU0FBT0MsVUFBUCxFQUFtQjtBQUNqQkEsY0FBVSxHQUFHQSxVQUFVLENBQUNDLFVBQXhCO0FBQ0EsUUFBSUQsVUFBVSxLQUFLRyxJQUFuQixFQUF5QixPQUFPLElBQVA7QUFDekIsUUFBSUgsVUFBVSxDQUFDTyxLQUFYLENBQWlCRCxTQUFqQixNQUFnQyxFQUFwQyxFQUF3QyxPQUFPTixVQUFVLENBQUNPLEtBQVgsQ0FBaUJELFNBQWpCLENBQVA7QUFDekM7QUFDRjs7QUFFRCxTQUFTM0YsVUFBVCxDQUFvQnlDLENBQXBCLEVBQXVCO0FBQ3JCN0YsVUFBUSxDQUFDQyxXQUFULENBQXFCLGNBQXJCLEVBQXFDLEtBQXJDLEVBQTRDLElBQTVDO0FBQ0E0RixHQUFDO0FBQ0Q3RixVQUFRLENBQUNDLFdBQVQsQ0FBcUIsY0FBckIsRUFBcUMsS0FBckMsRUFBNEMsS0FBNUM7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uNTRlY2QwODhjZjUyNTZjZWM2MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL25vdGVib29rLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi4vU3ZnJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5cclxuY29uc3QgZm9udHMgPSBbXCJBcmlhbFwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBcIkFyaWFsIEJsYWNrXCIsIFwiQ29taWMgU2FucyBNU1wiLCBcIkNvdXJpZXIgTmV3XCIsIFwiR2VvcmdpYVwiLCBcIkltcGFjdFwiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIlZlcmRhbmFcIl1cclxuY29uc3Qgc2l6ZXMgPSBbMSwgMiwgMywgNCwgNSwgNiwgN11cclxuXHJcbmZ1bmN0aW9uIGN1cnNpdmVTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpdGFsaWMnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBib2xkU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnYm9sZCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHVuZGVyU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5kZXInLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB0aHJvdWdoU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3RyaWtldGhyb3VnaCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHVsU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VW5vcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIG9sU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bmRvKCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVkbycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHJlZG8oKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRvJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gY2xlYXJGb3JtYXQoKSB7XHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3JlbW92ZUZvcm1hdCcsIGZhbHNlLCBudWxsKVxyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmxpbmsnLCBmYWxzZSwgbnVsbClcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRSKCkgeyB3aW5kb3cucHJpbnQoKSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9vayh7IHByb3BzIH0pIHtcclxuICBjb25zdCBbbGlzdCwgbGlzdENdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50LCBjdXJyZW50Q10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtuYW1lLCBuYW1lQ10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFttb2RpZnksIG1vZGlmeUNdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgW3VuZGVyLCB1bmRlckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JvbGQsIGJvbGRDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJzaXZlLCBjdXJzaXZlQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdGhyb3VnaCwgdGhyb3VnaENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3VsLCB1bENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW29sLCBvbENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JhY2ssIGJhY2tDXSA9IHVzZVN0YXRlKFwiI2ZmZmZmZlwiKVxyXG4gIGNvbnN0IFtjb2xvciwgY29sb3JDXSA9IHVzZVN0YXRlKFwiIzAwMDAwMFwiKVxyXG4gIGNvbnN0IFtmb250LCBmb250Q10gPSB1c2VTdGF0ZShcIkFyaWFsXCIpXHJcbiAgY29uc3QgW3NpemUsIHNpemVDXSA9IHVzZVN0YXRlKDIpXHJcbiAgY29uc3QgW3NwZWxsLCBzcGVsbENdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBkYiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGNvbnRlbnQgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgZnVuY3Rpb24gYmFja1NldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2hpbGl0ZUNvbG9yJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGJhY2tDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gY29sb3JTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JlQ29sb3InLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgY29sb3JDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gZm9udFNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnROYW1lJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGZvbnRDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gc2l6ZVNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIE51bWJlcihlLnRhcmdldC52YWx1ZSkpKTsgc2l6ZUMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBzcGVsbENoZWNrKCkgeyBzcGVsbEMocHJldiA9PiAhcHJldikgfVxyXG5cclxuICAvKmZ1bmN0aW9uIGRvd25sb2FkKCkge1xyXG4gICAgY29uc3QgZCA9IGhqayhjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MKVxyXG4gICAgY29uc29sZS5sb2coZClcclxuICB9Ki9cclxuICBmdW5jdGlvbiBmaXhDaGFuZ2VzKGlkKSB7XHJcbiAgICBpZiAoaWQgPT09IGN1cnJlbnQpIHtcclxuICAgICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImRhdGFcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJkYXRhXCIpLnB1dChjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MLCBjdXJyZW50KVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwdXROb3RlKG9iaikge1xyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLnB1dChvYmopXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU5vdGUoaWQpIHtcclxuICAgIGxpc3RDKHByZXYgPT4ge1xyXG4gICAgICBjb25zdCBhcnIgPSBwcmV2LmZpbHRlcihvID0+IG8uaWQgIT09IGlkKVxyXG4gICAgICBjdXJyZW50QyhhcnJbMF0uaWQpXHJcbiAgICAgIHJldHVybiBhcnJcclxuICAgIH0pXHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikuZGVsZXRlKGlkKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xyXG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpXHJcbiAgICBjb25zdCBvYmogPSB7IGlkOiBpZCwgbW9kaWZ5OiBpZCwgbmFtZTogcHJvcHMuZGVzYy5uYW1lbGVzcyB9XHJcbiAgICBsaXN0QyhwcmV2ID0+IFtvYmosIC4uLnByZXZdKVxyXG4gICAgcHV0Tm90ZShvYmopXHJcbiAgICBjdXJyZW50QyhpZClcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJkYm5vdGVzXCIsIDEpXHJcblxyXG4gICAgb3BlblJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc3QgZGIgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdkYXRhJykpIHtcclxuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgnZGF0YScpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdsaXN0JykpIHtcclxuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgnbGlzdCcsIHsga2V5UGF0aDogJ2lkJyB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBkYi5jdXJyZW50ID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLmdldEFsbCgpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgIGxpc3RDKGUudGFyZ2V0LnJlc3VsdClcclxuICAgICAgICAgIGN1cnJlbnRDKE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZUN1cnJlbnQnKSkpXHJcbiAgICAgICAgfSBlbHNlIGNyZWF0ZU5vdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmKGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMClcclxuICAgICAgICBjb25zdCBhcmVhID0gZ2V0UGFyZW50RWRpdG9yRmllbGQocmFuZ2Uuc3RhcnRDb250YWluZXIpXHJcbiAgICAgICAgaWYgKGFyZWEgPT09IG51bGwpIHJldHVyblxyXG4gICAgICAgIGJvbGRDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcImJcIikpXHJcbiAgICAgICAgdW5kZXJDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcInVcIikpXHJcbiAgICAgICAgY3Vyc2l2ZUModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwiaVwiKSlcclxuICAgICAgICB0aHJvdWdoQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJzdHJpa2VcIikpXHJcbiAgICAgICAgZm9udEModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdmb250RmFtaWx5JykpXHJcbiAgICAgICAgc3dpdGNoICh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2ZvbnRTaXplJykpIHtcclxuICAgICAgICAgIGNhc2UgJ3gtc21hbGwnOiBzaXplQygxKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3NtYWxsJzogc2l6ZUMoMik7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdtZWRpdW0nOiBzaXplQygzKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ2xhcmdlJzogc2l6ZUMoNCk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4LWxhcmdlJzogc2l6ZUMoNSk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4eC1sYXJnZSc6IHNpemVDKDYpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneHh4LWxhcmdlJzogc2l6ZUMoNyk7IGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2tDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnYmFja2dyb3VuZENvbG9yJykpXHJcbiAgICAgICAgY29sb3JDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnY29sb3InKSlcclxuICAgICAgICBvbEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdvbCcpKVxyXG4gICAgICAgIHVsQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ3VsJykpXHJcbiAgICAgICAgLy9yYW5nZS5jbG9uZUNvbnRlbnRzKClcclxuICAgICAgfSBjYXRjaCB7IH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGYpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB0cnkgeyBvcGVuUmVxdWVzdC5jbG9zZSgpIH0gY2F0Y2ggeyB9XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGYpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50ID09PSBudWxsKSByZXR1cm5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlQ3VycmVudCcsIGN1cnJlbnQpXHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwiZGF0YVwiLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwiZGF0YVwiKS5nZXQoY3VycmVudCkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29udGVudC5jdXJyZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgfSBlbHNlIGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgIH1cclxuICAgIGNvbnN0IGkgPSBzZXRJbnRlcnZhbCgoKSA9PiBmaXhDaGFuZ2VzKGN1cnJlbnQpLCAxMDAwKVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaSlcclxuICB9LCBbY3VycmVudF0pXHJcblxyXG4gIGZ1bmN0aW9uIGZpZWxkQ2hhbmdlKGlkLCBmaWVsZCwgdmFsdWUpIHtcclxuICAgIGxpc3RDKHByZXYgPT4gcHJldi5tYXAobyA9PiB7XHJcbiAgICAgIGlmIChvLmlkID09PSBpZCkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgLi4ubywgW2ZpZWxkXTogdmFsdWUsIG1vZGlmeTogRGF0ZS5ub3coKSB9XHJcbiAgICAgICAgcHV0Tm90ZShvYmopXHJcbiAgICAgICAgcmV0dXJuIG9ialxyXG4gICAgICB9IGVsc2UgcmV0dXJuIG9cclxuICAgIH0pKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YXcgPSBsaXN0LmZpbHRlcihvID0+IG8uaWQgPT09IGN1cnJlbnQpXHJcbiAgICBpZiAoZGF0YXcubGVuZ3RoID09PSAwKSByZXR1cm5cclxuICAgIG5hbWVDKGRhdGF3WzBdLm5hbWUpXHJcbiAgICBtb2RpZnlDKGRhdGF3WzBdLm1vZGlmeSlcclxuICB9LCBbbGlzdCwgY3VycmVudF0pXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5vdGV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2UgPT4gZmllbGRDaGFuZ2UoY3VycmVudCwgXCJuYW1lXCIsIGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+0KHQvtC30LTQsNC90L46IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2dldFRpbWUoY3VycmVudCl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+0JjQt9C80LXQvdC10L3Qvjo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPiB7Z2V0VGltZShtb2RpZnkpfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kb30gb25DbGljaz17dW5kb30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvdW5kby5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5yZWRvfSBvbkNsaWNrPXtyZWRvfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9yZWRvLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3QgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5zaXplfSB2YWx1ZT17c2l6ZX0gb25DaGFuZ2U9e3NpemVTZXR9ID5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtzaXplc30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuZm9udH0gdmFsdWU9e2ZvbnR9IG9uQ2hhbmdlPXtmb250U2V0fT5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtmb250c30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bmRlciA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kZXJ9IG9uQ2xpY2s9e3VuZGVyU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci91bmRlcmxpbmVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2JvbGQgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmJvbGR9IG9uQ2xpY2s9e2JvbGRTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2JvbGQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7cy5jdXJzaXZlfSAke2N1cnNpdmUgPyBzLnNlbGVjdCA6ICcnfWB9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY3Vyc2l2ZX0gb25DbGljaz17Y3Vyc2l2ZVNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvaXRhbGljLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3MudGhyb3VnaH0gJHt0aHJvdWdoID8gcy5zZWxlY3QgOiAnJ31gfSBvbkNsaWNrPXt0aHJvdWdoU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9zdHJpa2V0aHJvdWdoLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGxhYmVsIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY29sb3J9IHN0eWxlPXt7IGZpbGw6IGNvbG9yIH19PlxyXG4gICAgICAgICAgPFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvY29sb3Iuc3ZnXCIgLz5cclxuICAgICAgICAgIDxpbnB1dCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnRocm91Z2h9IHR5cGU9XCJjb2xvclwiIG9uQ2hhbmdlPXtjb2xvclNldH0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmJhY2t9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2sgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e2JhY2tTZXR9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17b2wgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLm9sfSBvbkNsaWNrPXtvbFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvbGlzdF9udW1iZXJlZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudWx9IG9uQ2xpY2s9e3VsU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9saXN0X2J1bGxldGVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmNsZWFyfSBvbkNsaWNrPXtjbGVhckZvcm1hdH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZm9ybWF0X2NsZWFyLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgey8qPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmRvd25sb2FkfSBvbkNsaWNrPXtkb3dubG9hZH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZG93bmxvYWQuc3ZnXCIgLz48L2J1dHRvbj4qL31cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIucHJpbnR9IG9uQ2xpY2s9e3ByaW50Un0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvcHJpbnQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3BlbGwgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnNwZWxsfSBvbkNsaWNrPXtzcGVsbENoZWNrfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9zcGVsbGNoZWNrLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNvbnRlbnRFZGl0YWJsZT17dHJ1ZX0gc3BlbGxDaGVjaz17c3BlbGx9IHJlZj17Y29udGVudH0+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlTm90ZX0+XHJcbiAgICAgICAge3Byb3BzLmRlc2MuYWRkfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bGlzdC5tYXAob2JqID0+IDxkaXYgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBvYmouaWQgPyBzLmN1cnJlbnQgOiAnJ31cclxuICAgICAgICAgIGtleT17b2JqLmlkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY3VycmVudEMob2JqLmlkKX0+XHJcbiAgICAgICAgICA8ZGl2PntvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlTm90ZShvYmouaWQpfT57cHJvcHMuZGVzYy5kZWxldGV9PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmoubW9kaWZ5KS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcbmZ1bmN0aW9uIE9wdGlvbnMoeyBhcnIsIGJlZm9yZSwgYWZ0ZXIgfSkge1xyXG4gIHJldHVybiA8PlxyXG4gICAge2Fyci5tYXAobyA9PiA8b3B0aW9uIGtleT17b30gdmFsdWU9e299PntiZWZvcmV9IHtvfSB7YWZ0ZXJ9PC9vcHRpb24+KX1cclxuICA8Lz5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIGhvdXI6IFwibnVtZXJpY1wiLCBtaW51dGU6IFwibnVtZXJpY1wiIH0pXHJcbn1cclxuZnVuY3Rpb24gZ2V0UGFyZW50RWRpdG9yRmllbGQobm9kZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gbnVsbCkgcmV0dXJuIG51bGxcclxuICAgIGlmIChwYXJlbnRFbGVtLmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJ0cnVlXCIpIHJldHVybiBwYXJlbnRFbGVtXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRlc3RQYXJlbnRzKG5vZGUsIGVkZ2UsIGVsZW1OYW1lKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBlZGdlKSByZXR1cm4gZmFsc2VcclxuICAgIGlmIChwYXJlbnRFbGVtLmxvY2FsTmFtZSA9PT0gZWxlbU5hbWUpIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRlc3RQYXJlbnRzQ3NzKG5vZGUsIGVkZ2UsIHN0eWxlTmFtZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gZWRnZSkgcmV0dXJuIG51bGxcclxuICAgIGlmIChwYXJlbnRFbGVtLnN0eWxlW3N0eWxlTmFtZV0gIT09IFwiXCIpIHJldHVybiBwYXJlbnRFbGVtLnN0eWxlW3N0eWxlTmFtZV1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFdpdGhDc3MoZikge1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgdHJ1ZSlcclxuICBmKClcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==