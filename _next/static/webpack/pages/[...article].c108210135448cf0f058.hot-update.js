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
  document.execCommand('undo', false, null);
}

function redo() {
  document.execCommand('redo', false, null);
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
              children: [props.desc.created, ": "]
            }, void 0, true, {
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
              children: [props.desc.modify, ":"]
            }, void 0, true, {
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
          "data-tooltip": props.desc.tab.through,
          onClick: throughSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/strikethrough.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
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
            "data-tooltip": props.desc.tab.color,
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              backgroundColor: back
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.back,
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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
                name: "var/x.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 54
              }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImZpeENoYW5nZXMiLCJpZCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJpbm5lckhUTUwiLCJwdXROb3RlIiwib2JqIiwiZGVsZXRlTm90ZSIsImFyciIsImZpbHRlciIsIm8iLCJjcmVhdGVOb3RlIiwiRGF0ZSIsIm5vdyIsImRlc2MiLCJuYW1lbGVzcyIsInVzZUVmZmVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9uc3VjY2VzcyIsImdldEFsbCIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2UiLCJnZXRSYW5nZUF0IiwiYXJlYSIsImdldFBhcmVudEVkaXRvckZpZWxkIiwic3RhcnRDb250YWluZXIiLCJ0ZXN0UGFyZW50cyIsInRlc3RQYXJlbnRzQ3NzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEl0ZW0iLCJnZXQiLCJ1bmRlZmluZWQiLCJpIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZmllbGRDaGFuZ2UiLCJmaWVsZCIsIm1hcCIsImRhdGF3IiwicyIsIm5vdGUiLCJjcmVhdGVkIiwiZ2V0VGltZSIsInRhYiIsInNlbGVjdCIsImZpbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGVhciIsImFkZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJPcHRpb25zIiwiYmVmb3JlIiwiYWZ0ZXIiLCJ0aW1lIiwiaG91ciIsIm1pbnV0ZSIsIm5vZGUiLCJwYXJlbnRFbGVtIiwicGFyZW50Tm9kZSIsImNvbnRlbnRFZGl0YWJsZSIsImVkZ2UiLCJlbGVtTmFtZSIsImxvY2FsTmFtZSIsInN0eWxlTmFtZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQUMsT0FBRCxFQUFVLGlCQUFWLEVBQTZCLGFBQTdCLEVBQTRDLGVBQTVDLEVBQTZELGFBQTdELEVBQTRFLFNBQTVFLEVBQXVGLFFBQXZGLEVBQWlHLGNBQWpHLEVBQWlILFNBQWpILENBQWQ7QUFDQSxJQUFNQyxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUks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O0FBQ0Q3RixVQUFRLENBQUNDLFdBQVQsQ0FBcUIsY0FBckIsRUFBcUMsS0FBckMsRUFBNEMsS0FBNUM7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bLi4uYXJ0aWNsZV0uYzEwODIxMDEzNTQ0OGNmMGYwNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHMgZnJvbSAnLi4vLi4vc3R5bGVzL3Rvb2xzL25vdGVib29rLnN0eWwnXHJcbmltcG9ydCBTdmcgZnJvbSAnLi4vU3ZnJ1xyXG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9lbGVtZW50cy9mdWxsc2NyZWVuJ1xyXG5cclxuY29uc3QgZm9udHMgPSBbXCJBcmlhbFwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBcIkFyaWFsIEJsYWNrXCIsIFwiQ29taWMgU2FucyBNU1wiLCBcIkNvdXJpZXIgTmV3XCIsIFwiR2VvcmdpYVwiLCBcIkltcGFjdFwiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIlZlcmRhbmFcIl1cclxuY29uc3Qgc2l6ZXMgPSBbMSwgMiwgMywgNCwgNSwgNiwgN11cclxuXHJcbmZ1bmN0aW9uIGN1cnNpdmVTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpdGFsaWMnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBib2xkU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnYm9sZCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHVuZGVyU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5kZXInLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB0aHJvdWdoU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3RyaWtldGhyb3VnaCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHVsU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VW5vcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIG9sU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bmRvKCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5kbycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHJlZG8oKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdyZWRvJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gY2xlYXJGb3JtYXQoKSB7XHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3JlbW92ZUZvcm1hdCcsIGZhbHNlLCBudWxsKVxyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmxpbmsnLCBmYWxzZSwgbnVsbClcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRSKCkgeyB3aW5kb3cucHJpbnQoKSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9vayh7IHByb3BzIH0pIHtcclxuICBjb25zdCBbbGlzdCwgbGlzdENdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50LCBjdXJyZW50Q10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtuYW1lLCBuYW1lQ10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFttb2RpZnksIG1vZGlmeUNdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgW3VuZGVyLCB1bmRlckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JvbGQsIGJvbGRDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJzaXZlLCBjdXJzaXZlQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdGhyb3VnaCwgdGhyb3VnaENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3VsLCB1bENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW29sLCBvbENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JhY2ssIGJhY2tDXSA9IHVzZVN0YXRlKFwiI2ZmZmZmZlwiKVxyXG4gIGNvbnN0IFtjb2xvciwgY29sb3JDXSA9IHVzZVN0YXRlKFwiIzAwMDAwMFwiKVxyXG4gIGNvbnN0IFtmb250LCBmb250Q10gPSB1c2VTdGF0ZShcIkFyaWFsXCIpXHJcbiAgY29uc3QgW3NpemUsIHNpemVDXSA9IHVzZVN0YXRlKDIpXHJcbiAgY29uc3QgW3NwZWxsLCBzcGVsbENdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBkYiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGNvbnRlbnQgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgZnVuY3Rpb24gYmFja1NldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2hpbGl0ZUNvbG9yJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGJhY2tDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gY29sb3JTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JlQ29sb3InLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgY29sb3JDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gZm9udFNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnROYW1lJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGZvbnRDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gc2l6ZVNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIE51bWJlcihlLnRhcmdldC52YWx1ZSkpKTsgc2l6ZUMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBzcGVsbENoZWNrKCkgeyBzcGVsbEMocHJldiA9PiAhcHJldikgfVxyXG5cclxuICAvKmZ1bmN0aW9uIGRvd25sb2FkKCkge1xyXG4gICAgY29uc3QgZCA9IGhqayhjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MKVxyXG4gICAgY29uc29sZS5sb2coZClcclxuICB9Ki9cclxuICBmdW5jdGlvbiBmaXhDaGFuZ2VzKGlkKSB7XHJcbiAgICBpZiAoaWQgPT09IGN1cnJlbnQpIHtcclxuICAgICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImRhdGFcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJkYXRhXCIpLnB1dChjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MLCBjdXJyZW50KVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwdXROb3RlKG9iaikge1xyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLnB1dChvYmopXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU5vdGUoaWQpIHtcclxuICAgIGxpc3RDKHByZXYgPT4ge1xyXG4gICAgICBjb25zdCBhcnIgPSBwcmV2LmZpbHRlcihvID0+IG8uaWQgIT09IGlkKVxyXG4gICAgICBjdXJyZW50QyhhcnJbMF0uaWQpXHJcbiAgICAgIHJldHVybiBhcnJcclxuICAgIH0pXHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikuZGVsZXRlKGlkKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xyXG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpXHJcbiAgICBjb25zdCBvYmogPSB7IGlkOiBpZCwgbW9kaWZ5OiBpZCwgbmFtZTogcHJvcHMuZGVzYy5uYW1lbGVzcyB9XHJcbiAgICBsaXN0QyhwcmV2ID0+IFtvYmosIC4uLnByZXZdKVxyXG4gICAgcHV0Tm90ZShvYmopXHJcbiAgICBjdXJyZW50QyhpZClcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJkYm5vdGVzXCIsIDEpXHJcblxyXG4gICAgb3BlblJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc3QgZGIgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdkYXRhJykpIHtcclxuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgnZGF0YScpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdsaXN0JykpIHtcclxuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgnbGlzdCcsIHsga2V5UGF0aDogJ2lkJyB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBkYi5jdXJyZW50ID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLmdldEFsbCgpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgIGxpc3RDKGUudGFyZ2V0LnJlc3VsdClcclxuICAgICAgICAgIGN1cnJlbnRDKE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZUN1cnJlbnQnKSkpXHJcbiAgICAgICAgfSBlbHNlIGNyZWF0ZU5vdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmKGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMClcclxuICAgICAgICBjb25zdCBhcmVhID0gZ2V0UGFyZW50RWRpdG9yRmllbGQocmFuZ2Uuc3RhcnRDb250YWluZXIpXHJcbiAgICAgICAgaWYgKGFyZWEgPT09IG51bGwpIHJldHVyblxyXG4gICAgICAgIGJvbGRDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcImJcIikpXHJcbiAgICAgICAgdW5kZXJDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcInVcIikpXHJcbiAgICAgICAgY3Vyc2l2ZUModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwiaVwiKSlcclxuICAgICAgICB0aHJvdWdoQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJzdHJpa2VcIikpXHJcbiAgICAgICAgZm9udEModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdmb250RmFtaWx5JykpXHJcbiAgICAgICAgc3dpdGNoICh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2ZvbnRTaXplJykpIHtcclxuICAgICAgICAgIGNhc2UgJ3gtc21hbGwnOiBzaXplQygxKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3NtYWxsJzogc2l6ZUMoMik7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdtZWRpdW0nOiBzaXplQygzKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ2xhcmdlJzogc2l6ZUMoNCk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4LWxhcmdlJzogc2l6ZUMoNSk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4eC1sYXJnZSc6IHNpemVDKDYpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneHh4LWxhcmdlJzogc2l6ZUMoNyk7IGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2tDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnYmFja2dyb3VuZENvbG9yJykpXHJcbiAgICAgICAgY29sb3JDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnY29sb3InKSlcclxuICAgICAgICBvbEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdvbCcpKVxyXG4gICAgICAgIHVsQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ3VsJykpXHJcbiAgICAgICAgLy9yYW5nZS5jbG9uZUNvbnRlbnRzKClcclxuICAgICAgfSBjYXRjaCB7IH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGYpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB0cnkgeyBvcGVuUmVxdWVzdC5jbG9zZSgpIH0gY2F0Y2ggeyB9XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGYpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50ID09PSBudWxsKSByZXR1cm5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlQ3VycmVudCcsIGN1cnJlbnQpXHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwiZGF0YVwiLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwiZGF0YVwiKS5nZXQoY3VycmVudCkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29udGVudC5jdXJyZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgfSBlbHNlIGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgIH1cclxuICAgIGNvbnN0IGkgPSBzZXRJbnRlcnZhbCgoKSA9PiBmaXhDaGFuZ2VzKGN1cnJlbnQpLCAxMDAwKVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaSlcclxuICB9LCBbY3VycmVudF0pXHJcblxyXG4gIGZ1bmN0aW9uIGZpZWxkQ2hhbmdlKGlkLCBmaWVsZCwgdmFsdWUpIHtcclxuICAgIGxpc3RDKHByZXYgPT4gcHJldi5tYXAobyA9PiB7XHJcbiAgICAgIGlmIChvLmlkID09PSBpZCkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgLi4ubywgW2ZpZWxkXTogdmFsdWUsIG1vZGlmeTogRGF0ZS5ub3coKSB9XHJcbiAgICAgICAgcHV0Tm90ZShvYmopXHJcbiAgICAgICAgcmV0dXJuIG9ialxyXG4gICAgICB9IGVsc2UgcmV0dXJuIG9cclxuICAgIH0pKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YXcgPSBsaXN0LmZpbHRlcihvID0+IG8uaWQgPT09IGN1cnJlbnQpXHJcbiAgICBpZiAoZGF0YXcubGVuZ3RoID09PSAwKSByZXR1cm5cclxuICAgIG5hbWVDKGRhdGF3WzBdLm5hbWUpXHJcbiAgICBtb2RpZnlDKGRhdGF3WzBdLm1vZGlmeSlcclxuICB9LCBbbGlzdCwgY3VycmVudF0pXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5vdGV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2UgPT4gZmllbGRDaGFuZ2UoY3VycmVudCwgXCJuYW1lXCIsIGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MuY3JlYXRlZH06IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2dldFRpbWUoY3VycmVudCl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MubW9kaWZ5fTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPiB7Z2V0VGltZShtb2RpZnkpfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kb30gb25DbGljaz17dW5kb30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvdW5kby5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5yZWRvfSBvbkNsaWNrPXtyZWRvfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9yZWRvLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3QgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5zaXplfSB2YWx1ZT17c2l6ZX0gb25DaGFuZ2U9e3NpemVTZXR9ID5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtzaXplc30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuZm9udH0gdmFsdWU9e2ZvbnR9IG9uQ2hhbmdlPXtmb250U2V0fT5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtmb250c30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bmRlciA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kZXJ9IG9uQ2xpY2s9e3VuZGVyU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci91bmRlcmxpbmVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2JvbGQgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmJvbGR9IG9uQ2xpY2s9e2JvbGRTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2JvbGQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7cy5jdXJzaXZlfSAke2N1cnNpdmUgPyBzLnNlbGVjdCA6ICcnfWB9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY3Vyc2l2ZX0gb25DbGljaz17Y3Vyc2l2ZVNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvaXRhbGljLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3MudGhyb3VnaH0gJHt0aHJvdWdoID8gcy5zZWxlY3QgOiAnJ31gfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnRocm91Z2h9IG9uQ2xpY2s9e3Rocm91Z2hTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3N0cmlrZXRocm91Z2guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZmlsbDogY29sb3IgfX0+XHJcbiAgICAgICAgICA8U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9jb2xvci5zdmdcIiAvPlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY29sb3J9IHR5cGU9XCJjb2xvclwiIG9uQ2hhbmdlPXtjb2xvclNldH0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrIH19PjwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuYmFja30gdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e2JhY2tTZXR9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17b2wgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLm9sfSBvbkNsaWNrPXtvbFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvbGlzdF9udW1iZXJlZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudWx9IG9uQ2xpY2s9e3VsU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9saXN0X2J1bGxldGVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmNsZWFyfSBvbkNsaWNrPXtjbGVhckZvcm1hdH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZm9ybWF0X2NsZWFyLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgey8qPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmRvd25sb2FkfSBvbkNsaWNrPXtkb3dubG9hZH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZG93bmxvYWQuc3ZnXCIgLz48L2J1dHRvbj4qL31cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIucHJpbnR9IG9uQ2xpY2s9e3ByaW50Un0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvcHJpbnQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3BlbGwgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnNwZWxsfSBvbkNsaWNrPXtzcGVsbENoZWNrfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9zcGVsbGNoZWNrLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNvbnRlbnRFZGl0YWJsZT17dHJ1ZX0gc3BlbGxDaGVjaz17c3BlbGx9IHJlZj17Y29udGVudH0+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlTm90ZX0+XHJcbiAgICAgICAge3Byb3BzLmRlc2MuYWRkfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bGlzdC5tYXAob2JqID0+IDxkaXYgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBvYmouaWQgPyBzLmN1cnJlbnQgOiAnJ31cclxuICAgICAgICAgIGtleT17b2JqLmlkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY3VycmVudEMob2JqLmlkKX0+XHJcbiAgICAgICAgICA8ZGl2PntvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlTm90ZShvYmouaWQpfT48U3ZnIG5hbWU9XCJ2YXIveC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLm1vZGlmeSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5mdW5jdGlvbiBPcHRpb25zKHsgYXJyLCBiZWZvcmUsIGFmdGVyIH0pIHtcclxuICByZXR1cm4gPD5cclxuICAgIHthcnIubWFwKG8gPT4gPG9wdGlvbiBrZXk9e299IHZhbHVlPXtvfT57YmVmb3JlfSB7b30ge2FmdGVyfTwvb3B0aW9uPil9XHJcbiAgPC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWUodGltZSkge1xyXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBob3VyOiBcIm51bWVyaWNcIiwgbWludXRlOiBcIm51bWVyaWNcIiB9KVxyXG59XHJcbmZ1bmN0aW9uIGdldFBhcmVudEVkaXRvckZpZWxkKG5vZGUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IG51bGwpIHJldHVybiBudWxsXHJcbiAgICBpZiAocGFyZW50RWxlbS5jb250ZW50RWRpdGFibGUgPT09IFwidHJ1ZVwiKSByZXR1cm4gcGFyZW50RWxlbVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB0ZXN0UGFyZW50cyhub2RlLCBlZGdlLCBlbGVtTmFtZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gZWRnZSkgcmV0dXJuIGZhbHNlXHJcbiAgICBpZiAocGFyZW50RWxlbS5sb2NhbE5hbWUgPT09IGVsZW1OYW1lKSByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB0ZXN0UGFyZW50c0Nzcyhub2RlLCBlZGdlLCBzdHlsZU5hbWUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IGVkZ2UpIHJldHVybiBudWxsXHJcbiAgICBpZiAocGFyZW50RWxlbS5zdHlsZVtzdHlsZU5hbWVdICE9PSBcIlwiKSByZXR1cm4gcGFyZW50RWxlbS5zdHlsZVtzdHlsZU5hbWVdXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRXaXRoQ3NzKGYpIHtcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIHRydWUpXHJcbiAgZigpXHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=