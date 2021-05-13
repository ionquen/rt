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
    var ctrl = e.ctrlKey;

    function hotkeyUse(e, f) {
      e.preventDefault();
      f();
    }

    console.log(e);

    if (ctrl) {
      switch (key) {
        case 'KeyS':
          hotkeyUse(e, throughSet);
          break;

        case 'KeyO':
          hotkeyUse(e, olSet);
          break;

        case 'KeyM':
          hotkeyUse(e, ulSet);
          break;

        case 'KeyL':
          hotkeyUse(e, clearFormat);
          break;

        case 'Quote':
          hotkeyUse(e, spellCheck);
          break;
      }
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
          lineNumber: 192,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.created, ": "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: getTime(current)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.modify, ":"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", getTime(modify)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
          elem: block.current
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.undo,
          onClick: undo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/undo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.redo,
          onClick: redo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/redo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
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
              lineNumber: 212,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
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
              lineNumber: 217,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: under ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.under,
          onClick: underSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/underlined.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 106
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: bold ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.bold,
          onClick: boldSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/bold.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 103
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.cursive, " ").concat(cursive ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.cursive,
          onClick: cursiveSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/italic.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.through, " ").concat(through ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.through,
          onClick: throughSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/strikethrough.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          style: {
            fill: color
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/color.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.color,
            type: "color",
            onChange: colorSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              backgroundColor: back
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.back,
            type: "color",
            onChange: backSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ol ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ol,
          onClick: olSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_numbered.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ul ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ul,
          onClick: ulSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_bulleted.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.clear,
          onClick: clearFormat,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/format_clear.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 75
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.print,
          onClick: printR,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/print.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 70
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: spell ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.spell,
          onClick: spellCheck,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/spellcheck.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 108
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        contentEditable: true,
        spellCheck: spell,
        ref: content,
        onKeyDown: hotKeyPress
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: createNote,
        children: props.desc.add
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
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
              lineNumber: 251,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteNote(obj.id);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
                name: "var/x.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 54
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
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
              lineNumber: 253,
              columnNumber: 11
            }, _this)]
          }, obj.id, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 26
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 189,
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
        lineNumber: 262,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImhvdEtleVByZXNzIiwia2V5IiwiY29kZSIsImN0cmwiLCJjdHJsS2V5IiwiaG90a2V5VXNlIiwiZiIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZpeENoYW5nZXMiLCJpZCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJpbm5lckhUTUwiLCJwdXROb3RlIiwib2JqIiwiZGVsZXRlTm90ZSIsImFyciIsImZpbHRlciIsIm8iLCJsZW5ndGgiLCJjcmVhdGVOb3RlIiwiRGF0ZSIsIm5vdyIsImRlc2MiLCJuYW1lbGVzcyIsInVzZUVmZmVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9uc3VjY2VzcyIsImdldEFsbCIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJhbmdlIiwiZ2V0UmFuZ2VBdCIsImFyZWEiLCJnZXRQYXJlbnRFZGl0b3JGaWVsZCIsInN0YXJ0Q29udGFpbmVyIiwidGVzdFBhcmVudHMiLCJ0ZXN0UGFyZW50c0NzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRJdGVtIiwiZ2V0IiwidW5kZWZpbmVkIiwiaSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImZpZWxkQ2hhbmdlIiwiZmllbGQiLCJtYXAiLCJkYXRhdyIsInMiLCJub3RlIiwiY3JlYXRlZCIsImdldFRpbWUiLCJ0YWIiLCJzZWxlY3QiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiY2xlYXIiLCJhZGQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiT3B0aW9ucyIsImJlZm9yZSIsImFmdGVyIiwidGltZSIsImhvdXIiLCJtaW51dGUiLCJub2RlIiwicGFyZW50RWxlbSIsInBhcmVudE5vZGUiLCJjb250ZW50RWRpdGFibGUiLCJlZGdlIiwiZWxlbU5hbWUiLCJsb2NhbE5hbWUiLCJzdHlsZU5hbWUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFDLE9BQUQsRUFBVSxpQkFBVixFQUE2QixhQUE3QixFQUE0QyxlQUE1QyxFQUE2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QUFDRG5FLFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQyxLQUFyQyxFQUE0QyxLQUE1QztBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS5mY2E2OGU5ZDcxNzdiMWQzMjI5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvbm90ZWJvb2suc3R5bCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5jb25zdCBmb250cyA9IFtcIkFyaWFsXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFwiQXJpYWwgQmxhY2tcIiwgXCJDb21pYyBTYW5zIE1TXCIsIFwiQ291cmllciBOZXdcIiwgXCJHZW9yZ2lhXCIsIFwiSW1wYWN0XCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVmVyZGFuYVwiXVxyXG5jb25zdCBzaXplcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XVxyXG5cclxuZnVuY3Rpb24gY3Vyc2l2ZVNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2l0YWxpYycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIGJvbGRTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdib2xkJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdW5kZXJTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRlcicsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHRocm91Z2hTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHJpa2V0aHJvdWdoJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdWxTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gb2xTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHVuZG8oKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRvJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gcmVkbygpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3JlZG8nLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBjbGVhckZvcm1hdCgpIHtcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVtb3ZlRm9ybWF0JywgZmFsc2UsIG51bGwpXHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VubGluaycsIGZhbHNlLCBudWxsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFIoKSB7IHdpbmRvdy5wcmludCgpIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9vayh7IHByb3BzIH0pIHtcclxuICBjb25zdCBbbGlzdCwgbGlzdENdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50LCBjdXJyZW50Q10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtuYW1lLCBuYW1lQ10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFttb2RpZnksIG1vZGlmeUNdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgW3VuZGVyLCB1bmRlckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JvbGQsIGJvbGRDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJzaXZlLCBjdXJzaXZlQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdGhyb3VnaCwgdGhyb3VnaENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3VsLCB1bENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW29sLCBvbENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JhY2ssIGJhY2tDXSA9IHVzZVN0YXRlKFwiI2ZmZmZmZlwiKVxyXG4gIGNvbnN0IFtjb2xvciwgY29sb3JDXSA9IHVzZVN0YXRlKFwiIzAwMDAwMFwiKVxyXG4gIGNvbnN0IFtmb250LCBmb250Q10gPSB1c2VTdGF0ZShcIkFyaWFsXCIpXHJcbiAgY29uc3QgW3NpemUsIHNpemVDXSA9IHVzZVN0YXRlKDIpXHJcbiAgY29uc3QgW3NwZWxsLCBzcGVsbENdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBkYiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGNvbnRlbnQgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgZnVuY3Rpb24gYmFja1NldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2hpbGl0ZUNvbG9yJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGJhY2tDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gY29sb3JTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JlQ29sb3InLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgY29sb3JDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gZm9udFNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnROYW1lJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGZvbnRDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gc2l6ZVNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIE51bWJlcihlLnRhcmdldC52YWx1ZSkpKTsgc2l6ZUMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBzcGVsbENoZWNrKCkgeyBzcGVsbEMocHJldiA9PiAhcHJldikgfVxyXG5cclxuICBmdW5jdGlvbiBob3RLZXlQcmVzcyhlKSB7XHJcbiAgICBjb25zdCBrZXkgPSBlLmNvZGVcclxuICAgIGNvbnN0IGN0cmwgPSBlLmN0cmxLZXlcclxuICAgIGZ1bmN0aW9uIGhvdGtleVVzZShlLCBmKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBmKClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBpZiAoY3RybCkge1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ0tleVMnOiBob3RrZXlVc2UoZSwgdGhyb3VnaFNldCk7IGJyZWFrXHJcbiAgICAgICAgY2FzZSAnS2V5Tyc6IGhvdGtleVVzZShlLCBvbFNldCk7IGJyZWFrXHJcbiAgICAgICAgY2FzZSAnS2V5TSc6IGhvdGtleVVzZShlLCB1bFNldCk7IGJyZWFrXHJcbiAgICAgICAgY2FzZSAnS2V5TCc6IGhvdGtleVVzZShlLCBjbGVhckZvcm1hdCk7IGJyZWFrXHJcbiAgICAgICAgY2FzZSAnUXVvdGUnOiBob3RrZXlVc2UoZSwgc3BlbGxDaGVjayk7IGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLypmdW5jdGlvbiBkb3dubG9hZCgpIHtcclxuICAgIGNvbnN0IGQgPSBoamsoY29udGVudC5jdXJyZW50LmlubmVySFRNTClcclxuICAgIGNvbnNvbGUubG9nKGQpXHJcbiAgfSovXHJcbiAgZnVuY3Rpb24gZml4Q2hhbmdlcyhpZCkge1xyXG4gICAgaWYgKGlkID09PSBjdXJyZW50KSB7XHJcbiAgICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJkYXRhXCIsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwiZGF0YVwiKS5wdXQoY29udGVudC5jdXJyZW50LmlubmVySFRNTCwgY3VycmVudClcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcHV0Tm90ZShvYmopIHtcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5wdXQob2JqKVxyXG4gIH1cclxuICBmdW5jdGlvbiBkZWxldGVOb3RlKGlkKSB7XHJcbiAgICBsaXN0QyhwcmV2ID0+IHtcclxuICAgICAgY29uc3QgYXJyID0gcHJldi5maWx0ZXIobyA9PiBvLmlkICE9PSBpZClcclxuICAgICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjcmVhdGVOb3RlKClcclxuICAgICAgfSBlbHNlIGN1cnJlbnRDKGFyclswXS5pZClcclxuXHJcbiAgICAgIHJldHVybiBhcnJcclxuICAgIH0pXHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikuZGVsZXRlKGlkKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xyXG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpXHJcbiAgICBjb25zdCBvYmogPSB7IGlkOiBpZCwgbW9kaWZ5OiBpZCwgbmFtZTogcHJvcHMuZGVzYy5uYW1lbGVzcyB9XHJcbiAgICBsaXN0QyhwcmV2ID0+IFtvYmosIC4uLnByZXZdKVxyXG4gICAgcHV0Tm90ZShvYmopXHJcbiAgICBjdXJyZW50QyhpZClcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJkYm5vdGVzXCIsIDEpXHJcblxyXG4gICAgb3BlblJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc3QgZGIgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdkYXRhJykpIHtcclxuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgnZGF0YScpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdsaXN0JykpIHtcclxuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgnbGlzdCcsIHsga2V5UGF0aDogJ2lkJyB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBkYi5jdXJyZW50ID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLmdldEFsbCgpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgIGxpc3RDKGUudGFyZ2V0LnJlc3VsdClcclxuICAgICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVDdXJyZW50JylcclxuICAgICAgICAgIGlmIChsb2NhbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEMoTnVtYmVyKGxvY2FsKSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZU5vdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmKGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMClcclxuICAgICAgICBjb25zdCBhcmVhID0gZ2V0UGFyZW50RWRpdG9yRmllbGQocmFuZ2Uuc3RhcnRDb250YWluZXIpXHJcbiAgICAgICAgaWYgKGFyZWEgPT09IG51bGwpIHJldHVyblxyXG4gICAgICAgIGJvbGRDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcImJcIikpXHJcbiAgICAgICAgdW5kZXJDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcInVcIikpXHJcbiAgICAgICAgY3Vyc2l2ZUModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwiaVwiKSlcclxuICAgICAgICB0aHJvdWdoQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJzdHJpa2VcIikpXHJcbiAgICAgICAgZm9udEModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdmb250RmFtaWx5JykpXHJcbiAgICAgICAgc3dpdGNoICh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2ZvbnRTaXplJykpIHtcclxuICAgICAgICAgIGNhc2UgJ3gtc21hbGwnOiBzaXplQygxKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3NtYWxsJzogc2l6ZUMoMik7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdtZWRpdW0nOiBzaXplQygzKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ2xhcmdlJzogc2l6ZUMoNCk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4LWxhcmdlJzogc2l6ZUMoNSk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4eC1sYXJnZSc6IHNpemVDKDYpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneHh4LWxhcmdlJzogc2l6ZUMoNyk7IGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2tDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnYmFja2dyb3VuZENvbG9yJykpXHJcbiAgICAgICAgY29sb3JDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnY29sb3InKSlcclxuICAgICAgICBvbEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdvbCcpKVxyXG4gICAgICAgIHVsQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ3VsJykpXHJcbiAgICAgICAgLy9yYW5nZS5jbG9uZUNvbnRlbnRzKClcclxuICAgICAgfSBjYXRjaCB7IH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGYpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB0cnkgeyBvcGVuUmVxdWVzdC5jbG9zZSgpIH0gY2F0Y2ggeyB9XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGYpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50ID09PSBudWxsKSByZXR1cm5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlQ3VycmVudCcsIGN1cnJlbnQpXHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwiZGF0YVwiLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwiZGF0YVwiKS5nZXQoY3VycmVudCkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29udGVudC5jdXJyZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgfSBlbHNlIGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgIH1cclxuICAgIGNvbnN0IGkgPSBzZXRJbnRlcnZhbCgoKSA9PiBmaXhDaGFuZ2VzKGN1cnJlbnQpLCAxMDAwKVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaSlcclxuICB9LCBbY3VycmVudF0pXHJcblxyXG4gIGZ1bmN0aW9uIGZpZWxkQ2hhbmdlKGlkLCBmaWVsZCwgdmFsdWUpIHtcclxuICAgIGxpc3RDKHByZXYgPT4gcHJldi5tYXAobyA9PiB7XHJcbiAgICAgIGlmIChvLmlkID09PSBpZCkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgLi4ubywgW2ZpZWxkXTogdmFsdWUsIG1vZGlmeTogRGF0ZS5ub3coKSB9XHJcbiAgICAgICAgcHV0Tm90ZShvYmopXHJcbiAgICAgICAgcmV0dXJuIG9ialxyXG4gICAgICB9IGVsc2UgcmV0dXJuIG9cclxuICAgIH0pKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YXcgPSBsaXN0LmZpbHRlcihvID0+IG8uaWQgPT09IGN1cnJlbnQpXHJcbiAgICBpZiAoZGF0YXcubGVuZ3RoID09PSAwKSByZXR1cm5cclxuICAgIG5hbWVDKGRhdGF3WzBdLm5hbWUpXHJcbiAgICBtb2RpZnlDKGRhdGF3WzBdLm1vZGlmeSlcclxuICB9LCBbbGlzdCwgY3VycmVudF0pXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5vdGV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2UgPT4gZmllbGRDaGFuZ2UoY3VycmVudCwgXCJuYW1lXCIsIGUudGFyZ2V0LnZhbHVlKX0gc3BlbGxDaGVjaz17ZmFsc2V9IC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmNyZWF0ZWR9OiA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntnZXRUaW1lKGN1cnJlbnQpfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLm1vZGlmeX06PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj4ge2dldFRpbWUobW9kaWZ5KX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnVuZG99IG9uQ2xpY2s9e3VuZG99PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3VuZG8uc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIucmVkb30gb25DbGljaz17cmVkb30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvcmVkby5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuc2l6ZX0gdmFsdWU9e3NpemV9IG9uQ2hhbmdlPXtzaXplU2V0fSA+XHJcbiAgICAgICAgICAgIDxPcHRpb25zIGFycj17c2l6ZXN9IC8+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmZvbnR9IHZhbHVlPXtmb250fSBvbkNoYW5nZT17Zm9udFNldH0+XHJcbiAgICAgICAgICAgIDxPcHRpb25zIGFycj17Zm9udHN9IC8+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dW5kZXIgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnVuZGVyfSBvbkNsaWNrPXt1bmRlclNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvdW5kZXJsaW5lZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtib2xkID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5ib2xkfSBvbkNsaWNrPXtib2xkU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9ib2xkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3MuY3Vyc2l2ZX0gJHtjdXJzaXZlID8gcy5zZWxlY3QgOiAnJ31gfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmN1cnNpdmV9IG9uQ2xpY2s9e2N1cnNpdmVTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2l0YWxpYy5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzLnRocm91Z2h9ICR7dGhyb3VnaCA/IHMuc2VsZWN0IDogJyd9YH0gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi50aHJvdWdofSBvbkNsaWNrPXt0aHJvdWdoU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9zdHJpa2V0aHJvdWdoLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZpbGw6IGNvbG9yIH19PlxyXG4gICAgICAgICAgPFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvY29sb3Iuc3ZnXCIgLz5cclxuICAgICAgICAgIDxpbnB1dCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmNvbG9yfSB0eXBlPVwiY29sb3JcIiBvbkNoYW5nZT17Y29sb3JTZXR9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmFjayB9fT48L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmJhY2t9IHR5cGU9XCJjb2xvclwiIG9uQ2hhbmdlPXtiYWNrU2V0fSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e29sID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5vbH0gb25DbGljaz17b2xTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2xpc3RfbnVtYmVyZWQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dWwgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnVsfSBvbkNsaWNrPXt1bFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvbGlzdF9idWxsZXRlZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5jbGVhcn0gb25DbGljaz17Y2xlYXJGb3JtYXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2Zvcm1hdF9jbGVhci5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIHsvKjxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5kb3dubG9hZH0gb25DbGljaz17ZG93bmxvYWR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2Rvd25sb2FkLnN2Z1wiIC8+PC9idXR0b24+Ki99XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnByaW50fSBvbkNsaWNrPXtwcmludFJ9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3ByaW50LnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3NwZWxsID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5zcGVsbH0gb25DbGljaz17c3BlbGxDaGVja30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvc3BlbGxjaGVjay5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjb250ZW50RWRpdGFibGU9e3RydWV9IHNwZWxsQ2hlY2s9e3NwZWxsfSByZWY9e2NvbnRlbnR9IG9uS2V5RG93bj17aG90S2V5UHJlc3N9PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxpc3R9PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZU5vdGV9PlxyXG4gICAgICAgIHtwcm9wcy5kZXNjLmFkZH1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2xpc3QubWFwKG9iaiA9PiA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudCA9PT0gb2JqLmlkID8gcy5jdXJyZW50IDogJyd9XHJcbiAgICAgICAgICBrZXk9e29iai5pZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGN1cnJlbnRDKG9iai5pZCl9PlxyXG4gICAgICAgICAgPGRpdj57b2JqLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU5vdGUob2JqLmlkKX0+PFN2ZyBuYW1lPVwidmFyL3guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXY+e25ldyBEYXRlKG9iai5tb2RpZnkpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuZnVuY3Rpb24gT3B0aW9ucyh7IGFyciwgYmVmb3JlLCBhZnRlciB9KSB7XHJcbiAgcmV0dXJuIDw+XHJcbiAgICB7YXJyLm1hcChvID0+IDxvcHRpb24ga2V5PXtvfSB2YWx1ZT17b30+e2JlZm9yZX0ge299IHthZnRlcn08L29wdGlvbj4pfVxyXG4gIDwvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lKHRpbWUpIHtcclxuICByZXR1cm4gbmV3IERhdGUodGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgaG91cjogXCJudW1lcmljXCIsIG1pbnV0ZTogXCJudW1lcmljXCIgfSlcclxufVxyXG5mdW5jdGlvbiBnZXRQYXJlbnRFZGl0b3JGaWVsZChub2RlKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBudWxsKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKHBhcmVudEVsZW0uY29udGVudEVkaXRhYmxlID09PSBcInRydWVcIikgcmV0dXJuIHBhcmVudEVsZW1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdGVzdFBhcmVudHMobm9kZSwgZWRnZSwgZWxlbU5hbWUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IGVkZ2UpIHJldHVybiBmYWxzZVxyXG4gICAgaWYgKHBhcmVudEVsZW0ubG9jYWxOYW1lID09PSBlbGVtTmFtZSkgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdGVzdFBhcmVudHNDc3Mobm9kZSwgZWRnZSwgc3R5bGVOYW1lKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBlZGdlKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKHBhcmVudEVsZW0uc3R5bGVbc3R5bGVOYW1lXSAhPT0gXCJcIikgcmV0dXJuIHBhcmVudEVsZW0uc3R5bGVbc3R5bGVOYW1lXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0V2l0aENzcyhmKSB7XHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxyXG4gIGYoKVxyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9