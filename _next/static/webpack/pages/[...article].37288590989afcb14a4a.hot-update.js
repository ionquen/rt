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
          return hotkeyUse(e, throughSet);

        case 'KeyO':
          return hotkeyUse(e, olSet);

        case 'KeyM':
          return hotkeyUse(e, ulSet);

        case 'KeyL':
          return hotkeyUse(e, clearFormat);

        case 'Quote':
          return hotkeyUse(e, spellCheck);
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
        onKeyPress: hotKeyPress
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImhvdEtleVByZXNzIiwia2V5IiwiY29kZSIsImN0cmwiLCJjdHJsS2V5IiwiaG90a2V5VXNlIiwiZiIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZpeENoYW5nZXMiLCJpZCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJpbm5lckhUTUwiLCJwdXROb3RlIiwib2JqIiwiZGVsZXRlTm90ZSIsImFyciIsImZpbHRlciIsIm8iLCJsZW5ndGgiLCJjcmVhdGVOb3RlIiwiRGF0ZSIsIm5vdyIsImRlc2MiLCJuYW1lbGVzcyIsInVzZUVmZmVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9uc3VjY2VzcyIsImdldEFsbCIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJhbmdlIiwiZ2V0UmFuZ2VBdCIsImFyZWEiLCJnZXRQYXJlbnRFZGl0b3JGaWVsZCIsInN0YXJ0Q29udGFpbmVyIiwidGVzdFBhcmVudHMiLCJ0ZXN0UGFyZW50c0NzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRJdGVtIiwiZ2V0IiwidW5kZWZpbmVkIiwiaSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImZpZWxkQ2hhbmdlIiwiZmllbGQiLCJtYXAiLCJkYXRhdyIsInMiLCJub3RlIiwiY3JlYXRlZCIsImdldFRpbWUiLCJ0YWIiLCJzZWxlY3QiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiY2xlYXIiLCJhZGQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiT3B0aW9ucyIsImJlZm9yZSIsImFmdGVyIiwidGltZSIsImhvdXIiLCJtaW51dGUiLCJub2RlIiwicGFyZW50RWxlbSIsInBhcmVudE5vZGUiLCJjb250ZW50RWRpdGFibGUiLCJlZGdlIiwiZWxlbU5hbWUiLCJsb2NhbE5hbWUiLCJzdHlsZU5hbWUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFDLE9BQUQsRUFBVSxpQkFBVixFQUE2QixhQUE3QixFQUE0QyxlQUE1QyxFQUE2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bkUsVUFBUSxDQUFDQyxXQUFULENBQXFCLGNBQXJCLEVBQXFDLEtBQXJDLEVBQTRDLEtBQTVDO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjM3Mjg4NTkwOTg5YWZjYjE0YTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy9ub3RlYm9vay5zdHlsJ1xyXG5pbXBvcnQgU3ZnIGZyb20gJy4uL1N2ZydcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuXHJcbmNvbnN0IGZvbnRzID0gW1wiQXJpYWxcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgXCJBcmlhbCBCbGFja1wiLCBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb3VyaWVyIE5ld1wiLCBcIkdlb3JnaWFcIiwgXCJJbXBhY3RcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJWZXJkYW5hXCJdXHJcbmNvbnN0IHNpemVzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddXHJcblxyXG5mdW5jdGlvbiBjdXJzaXZlU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnaXRhbGljJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gYm9sZFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2JvbGQnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bmRlclNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZGVyJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdGhyb3VnaFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0cmlrZXRocm91Z2gnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBvbFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdW5kbygpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZG8nLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiByZWRvKCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVkbycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIGNsZWFyRm9ybWF0KCkge1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdyZW1vdmVGb3JtYXQnLCBmYWxzZSwgbnVsbClcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5saW5rJywgZmFsc2UsIG51bGwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50UigpIHsgd2luZG93LnByaW50KCkgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVib29rKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtsaXN0LCBsaXN0Q10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgY29uc3QgW2N1cnJlbnQsIGN1cnJlbnRDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW25hbWUsIG5hbWVDXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW21vZGlmeSwgbW9kaWZ5Q10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbdW5kZXIsIHVuZGVyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYm9sZCwgYm9sZENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1cnNpdmUsIGN1cnNpdmVDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0aHJvdWdoLCB0aHJvdWdoQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdWwsIHVsQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbb2wsIG9sQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYmFjaywgYmFja0NdID0gdXNlU3RhdGUoXCIjZmZmZmZmXCIpXHJcbiAgY29uc3QgW2NvbG9yLCBjb2xvckNdID0gdXNlU3RhdGUoXCIjMDAwMDAwXCIpXHJcbiAgY29uc3QgW2ZvbnQsIGZvbnRDXSA9IHVzZVN0YXRlKFwiQXJpYWxcIilcclxuICBjb25zdCBbc2l6ZSwgc2l6ZUNdID0gdXNlU3RhdGUoMilcclxuICBjb25zdCBbc3BlbGwsIHNwZWxsQ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGRiID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgY29udGVudCA9IHVzZVJlZihudWxsKVxyXG5cclxuICBmdW5jdGlvbiBiYWNrU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnaGlsaXRlQ29sb3InLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgYmFja0MoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBjb2xvclNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvcmVDb2xvcicsIGZhbHNlLCBlLnRhcmdldC52YWx1ZSkpOyBjb2xvckMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBmb250U2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udE5hbWUnLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgZm9udEMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBzaXplU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udFNpemUnLCBmYWxzZSwgTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkpOyBzaXplQyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIHNwZWxsQ2hlY2soKSB7IHNwZWxsQyhwcmV2ID0+ICFwcmV2KSB9XHJcblxyXG4gIGZ1bmN0aW9uIGhvdEtleVByZXNzKGUpIHtcclxuICAgIGNvbnN0IGtleSA9IGUuY29kZVxyXG4gICAgY29uc3QgY3RybCA9IGUuY3RybEtleVxyXG4gICAgZnVuY3Rpb24gaG90a2V5VXNlKGUsIGYpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGYoKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIGlmIChjdHJsKSB7XHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSAnS2V5Uyc6IHJldHVybiBob3RrZXlVc2UoZSwgdGhyb3VnaFNldClcclxuICAgICAgICBjYXNlICdLZXlPJzogcmV0dXJuIGhvdGtleVVzZShlLCBvbFNldClcclxuICAgICAgICBjYXNlICdLZXlNJzogcmV0dXJuIGhvdGtleVVzZShlLCB1bFNldClcclxuICAgICAgICBjYXNlICdLZXlMJzogcmV0dXJuIGhvdGtleVVzZShlLCBjbGVhckZvcm1hdClcclxuICAgICAgICBjYXNlICdRdW90ZSc6IHJldHVybiBob3RrZXlVc2UoZSwgc3BlbGxDaGVjaylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKmZ1bmN0aW9uIGRvd25sb2FkKCkge1xyXG4gICAgY29uc3QgZCA9IGhqayhjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MKVxyXG4gICAgY29uc29sZS5sb2coZClcclxuICB9Ki9cclxuICBmdW5jdGlvbiBmaXhDaGFuZ2VzKGlkKSB7XHJcbiAgICBpZiAoaWQgPT09IGN1cnJlbnQpIHtcclxuICAgICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImRhdGFcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJkYXRhXCIpLnB1dChjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MLCBjdXJyZW50KVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwdXROb3RlKG9iaikge1xyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLnB1dChvYmopXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU5vdGUoaWQpIHtcclxuICAgIGxpc3RDKHByZXYgPT4ge1xyXG4gICAgICBjb25zdCBhcnIgPSBwcmV2LmZpbHRlcihvID0+IG8uaWQgIT09IGlkKVxyXG4gICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNyZWF0ZU5vdGUoKVxyXG4gICAgICB9IGVsc2UgY3VycmVudEMoYXJyWzBdLmlkKVxyXG5cclxuICAgICAgcmV0dXJuIGFyclxyXG4gICAgfSlcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5kZWxldGUoaWQpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vdGUoKSB7XHJcbiAgICBjb25zdCBpZCA9IERhdGUubm93KClcclxuICAgIGNvbnN0IG9iaiA9IHsgaWQ6IGlkLCBtb2RpZnk6IGlkLCBuYW1lOiBwcm9wcy5kZXNjLm5hbWVsZXNzIH1cclxuICAgIGxpc3RDKHByZXYgPT4gW29iaiwgLi4ucHJldl0pXHJcbiAgICBwdXROb3RlKG9iailcclxuICAgIGN1cnJlbnRDKGlkKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcImRibm90ZXNcIiwgMSlcclxuXHJcbiAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zdCBkYiA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ2RhdGEnKSkge1xyXG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdkYXRhJylcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ2xpc3QnKSkge1xyXG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdsaXN0JywgeyBrZXlQYXRoOiAnaWQnIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGRiLmN1cnJlbnQgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikuZ2V0QWxsKCkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQucmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgbGlzdEMoZS50YXJnZXQucmVzdWx0KVxyXG4gICAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZUN1cnJlbnQnKVxyXG4gICAgICAgICAgaWYgKGxvY2FsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QyhOdW1iZXIobG9jYWwpKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlTm90ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGYoZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKVxyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBnZXRQYXJlbnRFZGl0b3JGaWVsZChyYW5nZS5zdGFydENvbnRhaW5lcilcclxuICAgICAgICBpZiAoYXJlYSA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICAgICAgYm9sZEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwiYlwiKSlcclxuICAgICAgICB1bmRlckModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwidVwiKSlcclxuICAgICAgICBjdXJzaXZlQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJpXCIpKVxyXG4gICAgICAgIHRocm91Z2hDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcInN0cmlrZVwiKSlcclxuICAgICAgICBmb250Qyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2ZvbnRGYW1pbHknKSlcclxuICAgICAgICBzd2l0Y2ggKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnZm9udFNpemUnKSkge1xyXG4gICAgICAgICAgY2FzZSAneC1zbWFsbCc6IHNpemVDKDEpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnc21hbGwnOiBzaXplQygyKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ21lZGl1bSc6IHNpemVDKDMpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnbGFyZ2UnOiBzaXplQyg0KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3gtbGFyZ2UnOiBzaXplQyg1KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3h4LWxhcmdlJzogc2l6ZUMoNik7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4eHgtbGFyZ2UnOiBzaXplQyg3KTsgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja0ModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdiYWNrZ3JvdW5kQ29sb3InKSlcclxuICAgICAgICBjb2xvckModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdjb2xvcicpKVxyXG4gICAgICAgIG9sQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ29sJykpXHJcbiAgICAgICAgdWxDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAndWwnKSlcclxuICAgICAgICAvL3JhbmdlLmNsb25lQ29udGVudHMoKVxyXG4gICAgICB9IGNhdGNoIHsgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZilcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRyeSB7IG9wZW5SZXF1ZXN0LmNsb3NlKCkgfSBjYXRjaCB7IH1cclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZilcclxuICAgIH1cclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHJldHVyblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVDdXJyZW50JywgY3VycmVudClcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJkYXRhXCIsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJkYXRhXCIpLmdldChjdXJyZW50KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQucmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICB9IGVsc2UgY29udGVudC5jdXJyZW50LmlubmVySFRNTCA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgfVxyXG4gICAgY29uc3QgaSA9IHNldEludGVydmFsKCgpID0+IGZpeENoYW5nZXMoY3VycmVudCksIDEwMDApXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpKVxyXG4gIH0sIFtjdXJyZW50XSlcclxuXHJcbiAgZnVuY3Rpb24gZmllbGRDaGFuZ2UoaWQsIGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgbGlzdEMocHJldiA9PiBwcmV2Lm1hcChvID0+IHtcclxuICAgICAgaWYgKG8uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0geyAuLi5vLCBbZmllbGRdOiB2YWx1ZSwgbW9kaWZ5OiBEYXRlLm5vdygpIH1cclxuICAgICAgICBwdXROb3RlKG9iailcclxuICAgICAgICByZXR1cm4gb2JqXHJcbiAgICAgIH0gZWxzZSByZXR1cm4gb1xyXG4gICAgfSkpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhdyA9IGxpc3QuZmlsdGVyKG8gPT4gby5pZCA9PT0gY3VycmVudClcclxuICAgIGlmIChkYXRhdy5sZW5ndGggPT09IDApIHJldHVyblxyXG4gICAgbmFtZUMoZGF0YXdbMF0ubmFtZSlcclxuICAgIG1vZGlmeUMoZGF0YXdbMF0ubW9kaWZ5KVxyXG4gIH0sIFtsaXN0LCBjdXJyZW50XSlcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9IHJlZj17YmxvY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Mubm90ZX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17ZSA9PiBmaWVsZENoYW5nZShjdXJyZW50LCBcIm5hbWVcIiwgZS50YXJnZXQudmFsdWUpfSBzcGVsbENoZWNrPXtmYWxzZX0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MuY3JlYXRlZH06IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2dldFRpbWUoY3VycmVudCl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MubW9kaWZ5fTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPiB7Z2V0VGltZShtb2RpZnkpfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kb30gb25DbGljaz17dW5kb30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvdW5kby5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5yZWRvfSBvbkNsaWNrPXtyZWRvfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9yZWRvLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3QgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5zaXplfSB2YWx1ZT17c2l6ZX0gb25DaGFuZ2U9e3NpemVTZXR9ID5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtzaXplc30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuZm9udH0gdmFsdWU9e2ZvbnR9IG9uQ2hhbmdlPXtmb250U2V0fT5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtmb250c30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bmRlciA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kZXJ9IG9uQ2xpY2s9e3VuZGVyU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci91bmRlcmxpbmVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2JvbGQgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmJvbGR9IG9uQ2xpY2s9e2JvbGRTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2JvbGQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7cy5jdXJzaXZlfSAke2N1cnNpdmUgPyBzLnNlbGVjdCA6ICcnfWB9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY3Vyc2l2ZX0gb25DbGljaz17Y3Vyc2l2ZVNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvaXRhbGljLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3MudGhyb3VnaH0gJHt0aHJvdWdoID8gcy5zZWxlY3QgOiAnJ31gfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnRocm91Z2h9IG9uQ2xpY2s9e3Rocm91Z2hTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3N0cmlrZXRocm91Z2guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZmlsbDogY29sb3IgfX0+XHJcbiAgICAgICAgICA8U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9jb2xvci5zdmdcIiAvPlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY29sb3J9IHR5cGU9XCJjb2xvclwiIG9uQ2hhbmdlPXtjb2xvclNldH0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrIH19PjwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuYmFja30gdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e2JhY2tTZXR9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17b2wgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLm9sfSBvbkNsaWNrPXtvbFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvbGlzdF9udW1iZXJlZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudWx9IG9uQ2xpY2s9e3VsU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9saXN0X2J1bGxldGVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmNsZWFyfSBvbkNsaWNrPXtjbGVhckZvcm1hdH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZm9ybWF0X2NsZWFyLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgey8qPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmRvd25sb2FkfSBvbkNsaWNrPXtkb3dubG9hZH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZG93bmxvYWQuc3ZnXCIgLz48L2J1dHRvbj4qL31cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIucHJpbnR9IG9uQ2xpY2s9e3ByaW50Un0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvcHJpbnQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3BlbGwgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnNwZWxsfSBvbkNsaWNrPXtzcGVsbENoZWNrfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9zcGVsbGNoZWNrLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNvbnRlbnRFZGl0YWJsZT17dHJ1ZX0gc3BlbGxDaGVjaz17c3BlbGx9IHJlZj17Y29udGVudH0gb25LZXlQcmVzcz17aG90S2V5UHJlc3N9PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxpc3R9PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZU5vdGV9PlxyXG4gICAgICAgIHtwcm9wcy5kZXNjLmFkZH1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2xpc3QubWFwKG9iaiA9PiA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudCA9PT0gb2JqLmlkID8gcy5jdXJyZW50IDogJyd9XHJcbiAgICAgICAgICBrZXk9e29iai5pZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGN1cnJlbnRDKG9iai5pZCl9PlxyXG4gICAgICAgICAgPGRpdj57b2JqLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU5vdGUob2JqLmlkKX0+PFN2ZyBuYW1lPVwidmFyL3guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXY+e25ldyBEYXRlKG9iai5tb2RpZnkpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuZnVuY3Rpb24gT3B0aW9ucyh7IGFyciwgYmVmb3JlLCBhZnRlciB9KSB7XHJcbiAgcmV0dXJuIDw+XHJcbiAgICB7YXJyLm1hcChvID0+IDxvcHRpb24ga2V5PXtvfSB2YWx1ZT17b30+e2JlZm9yZX0ge299IHthZnRlcn08L29wdGlvbj4pfVxyXG4gIDwvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lKHRpbWUpIHtcclxuICByZXR1cm4gbmV3IERhdGUodGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgaG91cjogXCJudW1lcmljXCIsIG1pbnV0ZTogXCJudW1lcmljXCIgfSlcclxufVxyXG5mdW5jdGlvbiBnZXRQYXJlbnRFZGl0b3JGaWVsZChub2RlKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBudWxsKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKHBhcmVudEVsZW0uY29udGVudEVkaXRhYmxlID09PSBcInRydWVcIikgcmV0dXJuIHBhcmVudEVsZW1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdGVzdFBhcmVudHMobm9kZSwgZWRnZSwgZWxlbU5hbWUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IGVkZ2UpIHJldHVybiBmYWxzZVxyXG4gICAgaWYgKHBhcmVudEVsZW0ubG9jYWxOYW1lID09PSBlbGVtTmFtZSkgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdGVzdFBhcmVudHNDc3Mobm9kZSwgZWRnZSwgc3R5bGVOYW1lKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBlZGdlKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKHBhcmVudEVsZW0uc3R5bGVbc3R5bGVOYW1lXSAhPT0gXCJcIikgcmV0dXJuIHBhcmVudEVsZW0uc3R5bGVbc3R5bGVOYW1lXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0V2l0aENzcyhmKSB7XHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxyXG4gIGYoKVxyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9