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

  function hotKeyPress(e) {
    var key = e.code;
    var ctrl = e.ctrl;
    console.log(key);

    switch (key) {
      case 'KeyS':
        if (ctrl) return throughSet();

      case 'KeyO':
        if (ctrl) return olSet();

      case 'KeyM':
        if (ctrl) return ulSet();

      case 'KeyL':
        if (ctrl) return clearFormat();

      case 'Quote':
        if (ctrl) return spellCheck();
    }
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

      if (arr.length === 0) {
        createNote();
      } else currentC(arr[0].id);

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
          var local = localStorage.getItem('noteCurrent');

          if (local !== null) {
            return currentC(Number(local));
          }
        }

        createNote();
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
          },
          spellCheck: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.created, ": "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: getTime(current)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.modify, ":"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", getTime(modify)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
          elem: block.current
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.undo,
          onClick: undo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/undo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.redo,
          onClick: redo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/redo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
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
              lineNumber: 206,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
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
              lineNumber: 211,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: under ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.under,
          onClick: underSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/underlined.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 106
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: bold ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.bold,
          onClick: boldSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/bold.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 103
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.cursive, " ").concat(cursive ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.cursive,
          onClick: cursiveSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/italic.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.through, " ").concat(through ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.through,
          onClick: throughSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/strikethrough.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          style: {
            fill: color
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/color.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.color,
            type: "color",
            onChange: colorSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              backgroundColor: back
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.back,
            type: "color",
            onChange: backSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ol ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ol,
          onClick: olSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_numbered.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ul ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ul,
          onClick: ulSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_bulleted.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.clear,
          onClick: clearFormat,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/format_clear.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 75
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.print,
          onClick: printR,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/print.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 70
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: spell ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.spell,
          onClick: spellCheck,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/spellcheck.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 108
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        contentEditable: true,
        spellCheck: spell,
        ref: content,
        onKeyDown: hotKeyPress
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: createNote,
        children: props.desc.add
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
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
              lineNumber: 245,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteNote(obj.id);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
                name: "var/x.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 54
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
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
              lineNumber: 247,
              columnNumber: 11
            }, _this)]
          }, obj.id, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 26
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 183,
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
        lineNumber: 256,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImhvdEtleVByZXNzIiwia2V5IiwiY29kZSIsImN0cmwiLCJjb25zb2xlIiwibG9nIiwiZml4Q2hhbmdlcyIsImlkIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsInB1dCIsImlubmVySFRNTCIsInB1dE5vdGUiLCJvYmoiLCJkZWxldGVOb3RlIiwiYXJyIiwiZmlsdGVyIiwibyIsImxlbmd0aCIsImNyZWF0ZU5vdGUiLCJEYXRlIiwibm93IiwiZGVzYyIsIm5hbWVsZXNzIiwidXNlRWZmZWN0Iiwib3BlblJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwib251cGdyYWRlbmVlZGVkIiwicmVzdWx0Iiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib25zdWNjZXNzIiwiZ2V0QWxsIiwibG9jYWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZiIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJhbmdlIiwiZ2V0UmFuZ2VBdCIsImFyZWEiLCJnZXRQYXJlbnRFZGl0b3JGaWVsZCIsInN0YXJ0Q29udGFpbmVyIiwidGVzdFBhcmVudHMiLCJ0ZXN0UGFyZW50c0NzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRJdGVtIiwiZ2V0IiwidW5kZWZpbmVkIiwiaSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImZpZWxkQ2hhbmdlIiwiZmllbGQiLCJtYXAiLCJkYXRhdyIsInMiLCJub3RlIiwiY3JlYXRlZCIsImdldFRpbWUiLCJ0YWIiLCJzZWxlY3QiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiY2xlYXIiLCJhZGQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiT3B0aW9ucyIsImJlZm9yZSIsImFmdGVyIiwidGltZSIsImhvdXIiLCJtaW51dGUiLCJub2RlIiwicGFyZW50RWxlbSIsInBhcmVudE5vZGUiLCJjb250ZW50RWRpdGFibGUiLCJlZGdlIiwiZWxlbU5hbWUiLCJsb2NhbE5hbWUiLCJzdHlsZU5hbWUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFDLE9BQUQsRUFBVSxpQkFBVixFQUE2QixhQUE3QixFQUE0QyxlQUE1QyxFQUE2RCxhQUE3RCxFQUE0RSxTQUE1RSxFQUF1RixRQUF2RixFQUFpRyxj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QUFPRixVQUFQO0FBQzVDO0FBQ0Y7O0FBQ0QsU0FBU3JDLFdBQVQsQ0FBcUJvQyxJQUFyQixFQUEyQkksSUFBM0IsRUFBaUNDLFFBQWpDLEVBQTJDO0FBQ3pDLE1BQUlKLFVBQVUsR0FBR0QsSUFBakI7O0FBQ0EsU0FBT0MsVUFBUCxFQUFtQjtBQUNqQkEsY0FBVSxHQUFHQSxVQUFVLENBQUNDLFVBQXhCO0FBQ0EsUUFBSUQsVUFBVSxLQUFLRyxJQUFuQixFQUF5QixPQUFPLEtBQVA7QUFDekIsUUFBSUgsVUFBVSxDQUFDSyxTQUFYLEtBQXlCRCxRQUE3QixFQUF1QyxPQUFPLElBQVA7QUFDeEM7QUFDRjs7QUFDRCxTQUFTeEMsY0FBVCxDQUF3Qm1DLElBQXhCLEVBQThCSSxJQUE5QixFQUFvQ0csU0FBcEMsRUFBK0M7QUFDN0MsTUFBSU4sVUFBVSxHQUFHRCxJQUFqQjs7QUFDQSxTQUFPQyxVQUFQLEVBQW1CO0FBQ2pCQSxjQUFVLEdBQUdBLFVBQVUsQ0FBQ0MsVUFBeEI7QUFDQSxRQUFJRCxVQUFVLEtBQUtHLElBQW5CLEVBQXlCLE9BQU8sSUFBUDtBQUN6QixRQUFJSCxVQUFVLENBQUNPLEtBQVgsQ0FBaUJELFNBQWpCLE1BQWdDLEVBQXBDLEVBQXdDLE9BQU9OLFVBQVUsQ0FBQ08sS0FBWCxDQUFpQkQsU0FBakIsQ0FBUDtBQUN6QztBQUNGOztBQUVELFNBQVNuRyxVQUFULENBQW9CZ0QsQ0FBcEIsRUFBdUI7QUFDckJwRyxVQUFRLENBQUNDLFdBQVQsQ0FBcUIsY0FBckIsRUFBcUMsS0FBckMsRUFBNEMsSUFBNUM7QUFDQW1HLEdBQUM7QUFDRHBHLFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQyxLQUFyQyxFQUE0QyxLQUE1QztBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS44N2U2MGFiYTIxNTA2M2Y0NTkyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvbm90ZWJvb2suc3R5bCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5jb25zdCBmb250cyA9IFtcIkFyaWFsXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFwiQXJpYWwgQmxhY2tcIiwgXCJDb21pYyBTYW5zIE1TXCIsIFwiQ291cmllciBOZXdcIiwgXCJHZW9yZ2lhXCIsIFwiSW1wYWN0XCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVmVyZGFuYVwiXVxyXG5jb25zdCBzaXplcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XVxyXG5cclxuZnVuY3Rpb24gY3Vyc2l2ZVNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2l0YWxpYycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIGJvbGRTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdib2xkJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdW5kZXJTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRlcicsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHRocm91Z2hTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHJpa2V0aHJvdWdoJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdWxTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gb2xTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHVuZG8oKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRvJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gcmVkbygpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3JlZG8nLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBjbGVhckZvcm1hdCgpIHtcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVtb3ZlRm9ybWF0JywgZmFsc2UsIG51bGwpXHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VubGluaycsIGZhbHNlLCBudWxsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFIoKSB7IHdpbmRvdy5wcmludCgpIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9vayh7IHByb3BzIH0pIHtcclxuICBjb25zdCBbbGlzdCwgbGlzdENdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50LCBjdXJyZW50Q10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtuYW1lLCBuYW1lQ10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFttb2RpZnksIG1vZGlmeUNdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgW3VuZGVyLCB1bmRlckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JvbGQsIGJvbGRDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJzaXZlLCBjdXJzaXZlQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdGhyb3VnaCwgdGhyb3VnaENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3VsLCB1bENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW29sLCBvbENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JhY2ssIGJhY2tDXSA9IHVzZVN0YXRlKFwiI2ZmZmZmZlwiKVxyXG4gIGNvbnN0IFtjb2xvciwgY29sb3JDXSA9IHVzZVN0YXRlKFwiIzAwMDAwMFwiKVxyXG4gIGNvbnN0IFtmb250LCBmb250Q10gPSB1c2VTdGF0ZShcIkFyaWFsXCIpXHJcbiAgY29uc3QgW3NpemUsIHNpemVDXSA9IHVzZVN0YXRlKDIpXHJcbiAgY29uc3QgW3NwZWxsLCBzcGVsbENdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBkYiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGNvbnRlbnQgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgZnVuY3Rpb24gYmFja1NldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2hpbGl0ZUNvbG9yJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGJhY2tDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gY29sb3JTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JlQ29sb3InLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgY29sb3JDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gZm9udFNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnROYW1lJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGZvbnRDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gc2l6ZVNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIE51bWJlcihlLnRhcmdldC52YWx1ZSkpKTsgc2l6ZUMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBzcGVsbENoZWNrKCkgeyBzcGVsbEMocHJldiA9PiAhcHJldikgfVxyXG5cclxuICBmdW5jdGlvbiBob3RLZXlQcmVzcyhlKSB7XHJcbiAgICBjb25zdCBrZXkgPSBlLmNvZGVcclxuICAgIGNvbnN0IGN0cmwgPSBlLmN0cmxcclxuICAgIGNvbnNvbGUubG9nKGtleSlcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgIGNhc2UgJ0tleVMnOiBpZiAoY3RybCkgcmV0dXJuIHRocm91Z2hTZXQoKVxyXG4gICAgICBjYXNlICdLZXlPJzogaWYgKGN0cmwpIHJldHVybiBvbFNldCgpXHJcbiAgICAgIGNhc2UgJ0tleU0nOiBpZiAoY3RybCkgcmV0dXJuIHVsU2V0KClcclxuICAgICAgY2FzZSAnS2V5TCc6IGlmIChjdHJsKSByZXR1cm4gY2xlYXJGb3JtYXQoKVxyXG4gICAgICBjYXNlICdRdW90ZSc6IGlmIChjdHJsKSByZXR1cm4gc3BlbGxDaGVjaygpXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qZnVuY3Rpb24gZG93bmxvYWQoKSB7XHJcbiAgICBjb25zdCBkID0gaGprKGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwpXHJcbiAgICBjb25zb2xlLmxvZyhkKVxyXG4gIH0qL1xyXG4gIGZ1bmN0aW9uIGZpeENoYW5nZXMoaWQpIHtcclxuICAgIGlmIChpZCA9PT0gY3VycmVudCkge1xyXG4gICAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwiZGF0YVwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImRhdGFcIikucHV0KGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwsIGN1cnJlbnQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHB1dE5vdGUob2JqKSB7XHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikucHV0KG9iailcclxuICB9XHJcbiAgZnVuY3Rpb24gZGVsZXRlTm90ZShpZCkge1xyXG4gICAgbGlzdEMocHJldiA9PiB7XHJcbiAgICAgIGNvbnN0IGFyciA9IHByZXYuZmlsdGVyKG8gPT4gby5pZCAhPT0gaWQpXHJcbiAgICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY3JlYXRlTm90ZSgpXHJcbiAgICAgIH0gZWxzZSBjdXJyZW50QyhhcnJbMF0uaWQpXHJcblxyXG4gICAgICByZXR1cm4gYXJyXHJcbiAgICB9KVxyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLmRlbGV0ZShpZClcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcclxuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKVxyXG4gICAgY29uc3Qgb2JqID0geyBpZDogaWQsIG1vZGlmeTogaWQsIG5hbWU6IHByb3BzLmRlc2MubmFtZWxlc3MgfVxyXG4gICAgbGlzdEMocHJldiA9PiBbb2JqLCAuLi5wcmV2XSlcclxuICAgIHB1dE5vdGUob2JqKVxyXG4gICAgY3VycmVudEMoaWQpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiZGJub3Rlc1wiLCAxKVxyXG5cclxuICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnN0IGRiID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnZGF0YScpKSB7XHJcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2RhdGEnKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnbGlzdCcpKSB7XHJcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2xpc3QnLCB7IGtleVBhdGg6ICdpZCcgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZGIuY3VycmVudCA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5nZXRBbGwoKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5yZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICBsaXN0QyhlLnRhcmdldC5yZXN1bHQpXHJcbiAgICAgICAgICBjb25zdCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlQ3VycmVudCcpXHJcbiAgICAgICAgICBpZiAobG9jYWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRDKE51bWJlcihsb2NhbCkpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVOb3RlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZihlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcclxuICAgICAgICBjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApXHJcbiAgICAgICAgY29uc3QgYXJlYSA9IGdldFBhcmVudEVkaXRvckZpZWxkKHJhbmdlLnN0YXJ0Q29udGFpbmVyKVxyXG4gICAgICAgIGlmIChhcmVhID09PSBudWxsKSByZXR1cm5cclxuICAgICAgICBib2xkQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJiXCIpKVxyXG4gICAgICAgIHVuZGVyQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJ1XCIpKVxyXG4gICAgICAgIGN1cnNpdmVDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcImlcIikpXHJcbiAgICAgICAgdGhyb3VnaEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwic3RyaWtlXCIpKVxyXG4gICAgICAgIGZvbnRDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnZm9udEZhbWlseScpKVxyXG4gICAgICAgIHN3aXRjaCAodGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdmb250U2l6ZScpKSB7XHJcbiAgICAgICAgICBjYXNlICd4LXNtYWxsJzogc2l6ZUMoMSk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdzbWFsbCc6IHNpemVDKDIpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnbWVkaXVtJzogc2l6ZUMoMyk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdsYXJnZSc6IHNpemVDKDQpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneC1sYXJnZSc6IHNpemVDKDUpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneHgtbGFyZ2UnOiBzaXplQyg2KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3h4eC1sYXJnZSc6IHNpemVDKDcpOyBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrQyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2JhY2tncm91bmRDb2xvcicpKVxyXG4gICAgICAgIGNvbG9yQyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2NvbG9yJykpXHJcbiAgICAgICAgb2xDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnb2wnKSlcclxuICAgICAgICB1bEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICd1bCcpKVxyXG4gICAgICAgIC8vcmFuZ2UuY2xvbmVDb250ZW50cygpXHJcbiAgICAgIH0gY2F0Y2ggeyB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdHJ5IHsgb3BlblJlcXVlc3QuY2xvc2UoKSB9IGNhdGNoIHsgfVxyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZUN1cnJlbnQnLCBjdXJyZW50KVxyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImRhdGFcIiwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShcImRhdGFcIikuZ2V0KGN1cnJlbnQpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5yZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgIH0gZWxzZSBjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICB9XHJcbiAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4gZml4Q2hhbmdlcyhjdXJyZW50KSwgMTAwMClcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGkpXHJcbiAgfSwgW2N1cnJlbnRdKVxyXG5cclxuICBmdW5jdGlvbiBmaWVsZENoYW5nZShpZCwgZmllbGQsIHZhbHVlKSB7XHJcbiAgICBsaXN0QyhwcmV2ID0+IHByZXYubWFwKG8gPT4ge1xyXG4gICAgICBpZiAoby5pZCA9PT0gaWQpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7IC4uLm8sIFtmaWVsZF06IHZhbHVlLCBtb2RpZnk6IERhdGUubm93KCkgfVxyXG4gICAgICAgIHB1dE5vdGUob2JqKVxyXG4gICAgICAgIHJldHVybiBvYmpcclxuICAgICAgfSBlbHNlIHJldHVybiBvXHJcbiAgICB9KSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGF3ID0gbGlzdC5maWx0ZXIobyA9PiBvLmlkID09PSBjdXJyZW50KVxyXG4gICAgaWYgKGRhdGF3Lmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcbiAgICBuYW1lQyhkYXRhd1swXS5uYW1lKVxyXG4gICAgbW9kaWZ5QyhkYXRhd1swXS5tb2RpZnkpXHJcbiAgfSwgW2xpc3QsIGN1cnJlbnRdKVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5ibG9ja30gcmVmPXtibG9ja30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5ub3RlfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtlID0+IGZpZWxkQ2hhbmdlKGN1cnJlbnQsIFwibmFtZVwiLCBlLnRhcmdldC52YWx1ZSl9IHNwZWxsQ2hlY2s9e2ZhbHNlfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5jcmVhdGVkfTogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57Z2V0VGltZShjdXJyZW50KX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5tb2RpZnl9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+IHtnZXRUaW1lKG1vZGlmeSl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGdWxsc2NyZWVuIGVsZW09e2Jsb2NrLmN1cnJlbnR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi51bmRvfSBvbkNsaWNrPXt1bmRvfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci91bmRvLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnJlZG99IG9uQ2xpY2s9e3JlZG99PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3JlZG8uc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnNpemV9IHZhbHVlPXtzaXplfSBvbkNoYW5nZT17c2l6ZVNldH0gPlxyXG4gICAgICAgICAgICA8T3B0aW9ucyBhcnI9e3NpemVzfSAvPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3QgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5mb250fSB2YWx1ZT17Zm9udH0gb25DaGFuZ2U9e2ZvbnRTZXR9PlxyXG4gICAgICAgICAgICA8T3B0aW9ucyBhcnI9e2ZvbnRzfSAvPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3VuZGVyID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi51bmRlcn0gb25DbGljaz17dW5kZXJTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3VuZGVybGluZWQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Ym9sZCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuYm9sZH0gb25DbGljaz17Ym9sZFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvYm9sZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzLmN1cnNpdmV9ICR7Y3Vyc2l2ZSA/IHMuc2VsZWN0IDogJyd9YH0gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5jdXJzaXZlfSBvbkNsaWNrPXtjdXJzaXZlU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9pdGFsaWMuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7cy50aHJvdWdofSAke3Rocm91Z2ggPyBzLnNlbGVjdCA6ICcnfWB9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudGhyb3VnaH0gb25DbGljaz17dGhyb3VnaFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvc3RyaWtldGhyb3VnaC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBmaWxsOiBjb2xvciB9fT5cclxuICAgICAgICAgIDxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2NvbG9yLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8aW5wdXQgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5jb2xvcn0gdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e2NvbG9yU2V0fSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2sgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5iYWNrfSB0eXBlPVwiY29sb3JcIiBvbkNoYW5nZT17YmFja1NldH0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtvbCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIub2x9IG9uQ2xpY2s9e29sU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9saXN0X251bWJlcmVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3VsID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi51bH0gb25DbGljaz17dWxTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2xpc3RfYnVsbGV0ZWQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY2xlYXJ9IG9uQ2xpY2s9e2NsZWFyRm9ybWF0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9mb3JtYXRfY2xlYXIuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICB7Lyo8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuZG93bmxvYWR9IG9uQ2xpY2s9e2Rvd25sb2FkfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9kb3dubG9hZC5zdmdcIiAvPjwvYnV0dG9uPiovfVxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5wcmludH0gb25DbGljaz17cHJpbnRSfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9wcmludC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzcGVsbCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuc3BlbGx9IG9uQ2xpY2s9e3NwZWxsQ2hlY2t9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3NwZWxsY2hlY2suc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY29udGVudEVkaXRhYmxlPXt0cnVlfSBzcGVsbENoZWNrPXtzcGVsbH0gcmVmPXtjb250ZW50fSBvbktleURvd249e2hvdEtleVByZXNzfT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVOb3RlfT5cclxuICAgICAgICB7cHJvcHMuZGVzYy5hZGR9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtsaXN0Lm1hcChvYmogPT4gPGRpdiBjbGFzc05hbWU9e2N1cnJlbnQgPT09IG9iai5pZCA/IHMuY3VycmVudCA6ICcnfVxyXG4gICAgICAgICAga2V5PXtvYmouaWR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjdXJyZW50QyhvYmouaWQpfT5cclxuICAgICAgICAgIDxkaXY+e29iai5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVOb3RlKG9iai5pZCl9PjxTdmcgbmFtZT1cInZhci94LnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmoubW9kaWZ5KS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcbmZ1bmN0aW9uIE9wdGlvbnMoeyBhcnIsIGJlZm9yZSwgYWZ0ZXIgfSkge1xyXG4gIHJldHVybiA8PlxyXG4gICAge2Fyci5tYXAobyA9PiA8b3B0aW9uIGtleT17b30gdmFsdWU9e299PntiZWZvcmV9IHtvfSB7YWZ0ZXJ9PC9vcHRpb24+KX1cclxuICA8Lz5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIGhvdXI6IFwibnVtZXJpY1wiLCBtaW51dGU6IFwibnVtZXJpY1wiIH0pXHJcbn1cclxuZnVuY3Rpb24gZ2V0UGFyZW50RWRpdG9yRmllbGQobm9kZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gbnVsbCkgcmV0dXJuIG51bGxcclxuICAgIGlmIChwYXJlbnRFbGVtLmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJ0cnVlXCIpIHJldHVybiBwYXJlbnRFbGVtXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRlc3RQYXJlbnRzKG5vZGUsIGVkZ2UsIGVsZW1OYW1lKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBlZGdlKSByZXR1cm4gZmFsc2VcclxuICAgIGlmIChwYXJlbnRFbGVtLmxvY2FsTmFtZSA9PT0gZWxlbU5hbWUpIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRlc3RQYXJlbnRzQ3NzKG5vZGUsIGVkZ2UsIHN0eWxlTmFtZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gZWRnZSkgcmV0dXJuIG51bGxcclxuICAgIGlmIChwYXJlbnRFbGVtLnN0eWxlW3N0eWxlTmFtZV0gIT09IFwiXCIpIHJldHVybiBwYXJlbnRFbGVtLnN0eWxlW3N0eWxlTmFtZV1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFdpdGhDc3MoZikge1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgdHJ1ZSlcclxuICBmKClcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==