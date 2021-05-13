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
    e.preventDefault();
    var key = e.code;
    var ctrl = e.ctrl;

    switch (key) {
      case 'KeyS':
        if (ctrl) return throughSet();

      case 'KeyO':
        if (ctrl) return olSet();

      case 'KeyM':
        if (ctrl) return ulSet();

      case 'KeyL':
        if (ctrl) return clearFormat();

      case 'KeyR':
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImhvdEtleVByZXNzIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJjb2RlIiwiY3RybCIsImZpeENoYW5nZXMiLCJpZCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJpbm5lckhUTUwiLCJwdXROb3RlIiwib2JqIiwiZGVsZXRlTm90ZSIsImFyciIsImZpbHRlciIsIm8iLCJsZW5ndGgiLCJjcmVhdGVOb3RlIiwiRGF0ZSIsIm5vdyIsImRlc2MiLCJuYW1lbGVzcyIsInVzZUVmZmVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9uc3VjY2VzcyIsImdldEFsbCIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImYiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyYW5nZSIsImdldFJhbmdlQXQiLCJhcmVhIiwiZ2V0UGFyZW50RWRpdG9yRmllbGQiLCJzdGFydENvbnRhaW5lciIsInRlc3RQYXJlbnRzIiwidGVzdFBhcmVudHNDc3MiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0SXRlbSIsImdldCIsInVuZGVmaW5lZCIsImkiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmaWVsZENoYW5nZSIsImZpZWxkIiwibWFwIiwiZGF0YXciLCJzIiwibm90ZSIsImNyZWF0ZWQiLCJnZXRUaW1lIiwidGFiIiwic2VsZWN0IiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImNsZWFyIiwiYWRkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsIk9wdGlvbnMiLCJiZWZvcmUiLCJhZnRlciIsInRpbWUiLCJob3VyIiwibWludXRlIiwibm9kZSIsInBhcmVudEVsZW0iLCJwYXJlbnROb2RlIiwiY29udGVudEVkaXRhYmxlIiwiZWRnZSIsImVsZW1OYW1lIiwibG9jYWxOYW1lIiwic3R5bGVOYW1lIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxPQUFELEVBQVUsaUJBQVYsRUFBNkIsYUFBN0IsRUFBNEMsZUFBNUMsRUFBNkQsYUFBN0QsRUFBNEUsU0FBNUUsRUFBdUYsUUFBdkYsRUFBaUcs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QzVDO0FBQ0Y7O0FBQ0QsU0FBU3JDLFdBQVQsQ0FBcUJvQyxJQUFyQixFQUEyQkksSUFBM0IsRUFBaUNDLFFBQWpDLEVBQTJDO0FBQ3pDLE1BQUlKLFVBQVUsR0FBR0QsSUFBakI7O0FBQ0EsU0FBT0MsVUFBUCxFQUFtQjtBQUNqQkEsY0FBVSxHQUFHQSxVQUFVLENBQUNDLFVBQXhCO0FBQ0EsUUFBSUQsVUFBVSxLQUFLRyxJQUFuQixFQUF5QixPQUFPLEtBQVA7QUFDekIsUUFBSUgsVUFBVSxDQUFDSyxTQUFYLEtBQXlCRCxRQUE3QixFQUF1QyxPQUFPLElBQVA7QUFDeEM7QUFDRjs7QUFDRCxTQUFTeEMsY0FBVCxDQUF3Qm1DLElBQXhCLEVBQThCSSxJQUE5QixFQUFvQ0csU0FBcEMsRUFBK0M7QUFDN0MsTUFBSU4sVUFBVSxHQUFHRCxJQUFqQjs7QUFDQSxTQUFPQyxVQUFQLEVBQW1CO0FBQ2pCQSxjQUFVLEdBQUdBLFVBQVUsQ0FBQ0MsVUFBeEI7QUFDQSxRQUFJRCxVQUFVLEtBQUtHLElBQW5CLEVBQXlCLE9BQU8sSUFBUDtBQUN6QixRQUFJSCxVQUFVLENBQUNPLEtBQVgsQ0FBaUJELFNBQWpCLE1BQWdDLEVBQXBDLEVBQXdDLE9BQU9OLFVBQVUsQ0FBQ08sS0FBWCxDQUFpQkQsU0FBakIsQ0FBUDtBQUN6QztBQUNGOztBQUVELFNBQVNsRyxVQUFULENBQW9CK0MsQ0FBcEIsRUFBdUI7QUFDckJuRyxVQUFRLENBQUNDLFdBQVQsQ0FBcUIsY0FBckIsRUFBcUMsS0FBckMsRUFBNEMsSUFBNUM7QUFDQWtHLEdBQUM7QUFDRG5HLFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQyxLQUFyQyxFQUE0QyxLQUE1QztBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS45OWE3YTIyZmVkODRjMzM1YTMzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvbm90ZWJvb2suc3R5bCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5jb25zdCBmb250cyA9IFtcIkFyaWFsXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFwiQXJpYWwgQmxhY2tcIiwgXCJDb21pYyBTYW5zIE1TXCIsIFwiQ291cmllciBOZXdcIiwgXCJHZW9yZ2lhXCIsIFwiSW1wYWN0XCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVmVyZGFuYVwiXVxyXG5jb25zdCBzaXplcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XVxyXG5cclxuZnVuY3Rpb24gY3Vyc2l2ZVNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2l0YWxpYycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIGJvbGRTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdib2xkJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdW5kZXJTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRlcicsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHRocm91Z2hTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHJpa2V0aHJvdWdoJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdWxTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gb2xTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHVuZG8oKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRvJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gcmVkbygpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3JlZG8nLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBjbGVhckZvcm1hdCgpIHtcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVtb3ZlRm9ybWF0JywgZmFsc2UsIG51bGwpXHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VubGluaycsIGZhbHNlLCBudWxsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFIoKSB7IHdpbmRvdy5wcmludCgpIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RlYm9vayh7IHByb3BzIH0pIHtcclxuICBjb25zdCBbbGlzdCwgbGlzdENdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGNvbnN0IFtjdXJyZW50LCBjdXJyZW50Q10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtuYW1lLCBuYW1lQ10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFttb2RpZnksIG1vZGlmeUNdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgW3VuZGVyLCB1bmRlckNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JvbGQsIGJvbGRDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJzaXZlLCBjdXJzaXZlQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdGhyb3VnaCwgdGhyb3VnaENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3VsLCB1bENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW29sLCBvbENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2JhY2ssIGJhY2tDXSA9IHVzZVN0YXRlKFwiI2ZmZmZmZlwiKVxyXG4gIGNvbnN0IFtjb2xvciwgY29sb3JDXSA9IHVzZVN0YXRlKFwiIzAwMDAwMFwiKVxyXG4gIGNvbnN0IFtmb250LCBmb250Q10gPSB1c2VTdGF0ZShcIkFyaWFsXCIpXHJcbiAgY29uc3QgW3NpemUsIHNpemVDXSA9IHVzZVN0YXRlKDIpXHJcbiAgY29uc3QgW3NwZWxsLCBzcGVsbENdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgY29uc3QgYmxvY2sgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBkYiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGNvbnRlbnQgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgZnVuY3Rpb24gYmFja1NldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2hpbGl0ZUNvbG9yJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGJhY2tDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gY29sb3JTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb3JlQ29sb3InLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgY29sb3JDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gZm9udFNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnROYW1lJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGZvbnRDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gc2l6ZVNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvbnRTaXplJywgZmFsc2UsIE51bWJlcihlLnRhcmdldC52YWx1ZSkpKTsgc2l6ZUMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBzcGVsbENoZWNrKCkgeyBzcGVsbEMocHJldiA9PiAhcHJldikgfVxyXG5cclxuICBmdW5jdGlvbiBob3RLZXlQcmVzcyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGtleSA9IGUuY29kZVxyXG4gICAgY29uc3QgY3RybCA9IGUuY3RybFxyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSAnS2V5Uyc6IGlmIChjdHJsKSByZXR1cm4gdGhyb3VnaFNldCgpXHJcbiAgICAgIGNhc2UgJ0tleU8nOiBpZiAoY3RybCkgcmV0dXJuIG9sU2V0KClcclxuICAgICAgY2FzZSAnS2V5TSc6IGlmIChjdHJsKSByZXR1cm4gdWxTZXQoKVxyXG4gICAgICBjYXNlICdLZXlMJzogaWYgKGN0cmwpIHJldHVybiBjbGVhckZvcm1hdCgpXHJcbiAgICAgIGNhc2UgJ0tleVInOiBpZiAoY3RybCkgcmV0dXJuIHNwZWxsQ2hlY2soKVxyXG4gICAgfVxyXG4gIH1cclxuICAvKmZ1bmN0aW9uIGRvd25sb2FkKCkge1xyXG4gICAgY29uc3QgZCA9IGhqayhjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MKVxyXG4gICAgY29uc29sZS5sb2coZClcclxuICB9Ki9cclxuICBmdW5jdGlvbiBmaXhDaGFuZ2VzKGlkKSB7XHJcbiAgICBpZiAoaWQgPT09IGN1cnJlbnQpIHtcclxuICAgICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImRhdGFcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJkYXRhXCIpLnB1dChjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MLCBjdXJyZW50KVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwdXROb3RlKG9iaikge1xyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLnB1dChvYmopXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU5vdGUoaWQpIHtcclxuICAgIGxpc3RDKHByZXYgPT4ge1xyXG4gICAgICBjb25zdCBhcnIgPSBwcmV2LmZpbHRlcihvID0+IG8uaWQgIT09IGlkKVxyXG4gICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNyZWF0ZU5vdGUoKVxyXG4gICAgICB9IGVsc2UgY3VycmVudEMoYXJyWzBdLmlkKVxyXG5cclxuICAgICAgcmV0dXJuIGFyclxyXG4gICAgfSlcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5kZWxldGUoaWQpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vdGUoKSB7XHJcbiAgICBjb25zdCBpZCA9IERhdGUubm93KClcclxuICAgIGNvbnN0IG9iaiA9IHsgaWQ6IGlkLCBtb2RpZnk6IGlkLCBuYW1lOiBwcm9wcy5kZXNjLm5hbWVsZXNzIH1cclxuICAgIGxpc3RDKHByZXYgPT4gW29iaiwgLi4ucHJldl0pXHJcbiAgICBwdXROb3RlKG9iailcclxuICAgIGN1cnJlbnRDKGlkKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcImRibm90ZXNcIiwgMSlcclxuXHJcbiAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zdCBkYiA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ2RhdGEnKSkge1xyXG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdkYXRhJylcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ2xpc3QnKSkge1xyXG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdsaXN0JywgeyBrZXlQYXRoOiAnaWQnIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGRiLmN1cnJlbnQgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikuZ2V0QWxsKCkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQucmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgbGlzdEMoZS50YXJnZXQucmVzdWx0KVxyXG4gICAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZUN1cnJlbnQnKVxyXG4gICAgICAgICAgaWYgKGxvY2FsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QyhOdW1iZXIobG9jYWwpKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlTm90ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGYoZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKVxyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBnZXRQYXJlbnRFZGl0b3JGaWVsZChyYW5nZS5zdGFydENvbnRhaW5lcilcclxuICAgICAgICBpZiAoYXJlYSA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICAgICAgYm9sZEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwiYlwiKSlcclxuICAgICAgICB1bmRlckModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwidVwiKSlcclxuICAgICAgICBjdXJzaXZlQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJpXCIpKVxyXG4gICAgICAgIHRocm91Z2hDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcInN0cmlrZVwiKSlcclxuICAgICAgICBmb250Qyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2ZvbnRGYW1pbHknKSlcclxuICAgICAgICBzd2l0Y2ggKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnZm9udFNpemUnKSkge1xyXG4gICAgICAgICAgY2FzZSAneC1zbWFsbCc6IHNpemVDKDEpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnc21hbGwnOiBzaXplQygyKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ21lZGl1bSc6IHNpemVDKDMpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnbGFyZ2UnOiBzaXplQyg0KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3gtbGFyZ2UnOiBzaXplQyg1KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3h4LWxhcmdlJzogc2l6ZUMoNik7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4eHgtbGFyZ2UnOiBzaXplQyg3KTsgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja0ModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdiYWNrZ3JvdW5kQ29sb3InKSlcclxuICAgICAgICBjb2xvckModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdjb2xvcicpKVxyXG4gICAgICAgIG9sQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ29sJykpXHJcbiAgICAgICAgdWxDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAndWwnKSlcclxuICAgICAgICAvL3JhbmdlLmNsb25lQ29udGVudHMoKVxyXG4gICAgICB9IGNhdGNoIHsgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZilcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRyeSB7IG9wZW5SZXF1ZXN0LmNsb3NlKCkgfSBjYXRjaCB7IH1cclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZilcclxuICAgIH1cclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHJldHVyblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVDdXJyZW50JywgY3VycmVudClcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJkYXRhXCIsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJkYXRhXCIpLmdldChjdXJyZW50KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQucmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICB9IGVsc2UgY29udGVudC5jdXJyZW50LmlubmVySFRNTCA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgfVxyXG4gICAgY29uc3QgaSA9IHNldEludGVydmFsKCgpID0+IGZpeENoYW5nZXMoY3VycmVudCksIDEwMDApXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpKVxyXG4gIH0sIFtjdXJyZW50XSlcclxuXHJcbiAgZnVuY3Rpb24gZmllbGRDaGFuZ2UoaWQsIGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgbGlzdEMocHJldiA9PiBwcmV2Lm1hcChvID0+IHtcclxuICAgICAgaWYgKG8uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0geyAuLi5vLCBbZmllbGRdOiB2YWx1ZSwgbW9kaWZ5OiBEYXRlLm5vdygpIH1cclxuICAgICAgICBwdXROb3RlKG9iailcclxuICAgICAgICByZXR1cm4gb2JqXHJcbiAgICAgIH0gZWxzZSByZXR1cm4gb1xyXG4gICAgfSkpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhdyA9IGxpc3QuZmlsdGVyKG8gPT4gby5pZCA9PT0gY3VycmVudClcclxuICAgIGlmIChkYXRhdy5sZW5ndGggPT09IDApIHJldHVyblxyXG4gICAgbmFtZUMoZGF0YXdbMF0ubmFtZSlcclxuICAgIG1vZGlmeUMoZGF0YXdbMF0ubW9kaWZ5KVxyXG4gIH0sIFtsaXN0LCBjdXJyZW50XSlcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9IHJlZj17YmxvY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Mubm90ZX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17ZSA9PiBmaWVsZENoYW5nZShjdXJyZW50LCBcIm5hbWVcIiwgZS50YXJnZXQudmFsdWUpfSBzcGVsbENoZWNrPXtmYWxzZX0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MuY3JlYXRlZH06IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2dldFRpbWUoY3VycmVudCl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MubW9kaWZ5fTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPiB7Z2V0VGltZShtb2RpZnkpfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kb30gb25DbGljaz17dW5kb30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvdW5kby5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5yZWRvfSBvbkNsaWNrPXtyZWRvfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9yZWRvLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3QgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5zaXplfSB2YWx1ZT17c2l6ZX0gb25DaGFuZ2U9e3NpemVTZXR9ID5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtzaXplc30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuZm9udH0gdmFsdWU9e2ZvbnR9IG9uQ2hhbmdlPXtmb250U2V0fT5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtmb250c30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bmRlciA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kZXJ9IG9uQ2xpY2s9e3VuZGVyU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci91bmRlcmxpbmVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2JvbGQgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmJvbGR9IG9uQ2xpY2s9e2JvbGRTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2JvbGQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7cy5jdXJzaXZlfSAke2N1cnNpdmUgPyBzLnNlbGVjdCA6ICcnfWB9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY3Vyc2l2ZX0gb25DbGljaz17Y3Vyc2l2ZVNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvaXRhbGljLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3MudGhyb3VnaH0gJHt0aHJvdWdoID8gcy5zZWxlY3QgOiAnJ31gfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnRocm91Z2h9IG9uQ2xpY2s9e3Rocm91Z2hTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3N0cmlrZXRocm91Z2guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZmlsbDogY29sb3IgfX0+XHJcbiAgICAgICAgICA8U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9jb2xvci5zdmdcIiAvPlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY29sb3J9IHR5cGU9XCJjb2xvclwiIG9uQ2hhbmdlPXtjb2xvclNldH0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrIH19PjwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuYmFja30gdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e2JhY2tTZXR9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17b2wgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLm9sfSBvbkNsaWNrPXtvbFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvbGlzdF9udW1iZXJlZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudWx9IG9uQ2xpY2s9e3VsU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9saXN0X2J1bGxldGVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmNsZWFyfSBvbkNsaWNrPXtjbGVhckZvcm1hdH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZm9ybWF0X2NsZWFyLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgey8qPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmRvd25sb2FkfSBvbkNsaWNrPXtkb3dubG9hZH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZG93bmxvYWQuc3ZnXCIgLz48L2J1dHRvbj4qL31cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIucHJpbnR9IG9uQ2xpY2s9e3ByaW50Un0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvcHJpbnQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3BlbGwgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnNwZWxsfSBvbkNsaWNrPXtzcGVsbENoZWNrfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9zcGVsbGNoZWNrLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNvbnRlbnRFZGl0YWJsZT17dHJ1ZX0gc3BlbGxDaGVjaz17c3BlbGx9IHJlZj17Y29udGVudH0gb25LZXlEb3duPXtob3RLZXlQcmVzc30+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlTm90ZX0+XHJcbiAgICAgICAge3Byb3BzLmRlc2MuYWRkfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bGlzdC5tYXAob2JqID0+IDxkaXYgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBvYmouaWQgPyBzLmN1cnJlbnQgOiAnJ31cclxuICAgICAgICAgIGtleT17b2JqLmlkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY3VycmVudEMob2JqLmlkKX0+XHJcbiAgICAgICAgICA8ZGl2PntvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlTm90ZShvYmouaWQpfT48U3ZnIG5hbWU9XCJ2YXIveC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLm1vZGlmeSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5mdW5jdGlvbiBPcHRpb25zKHsgYXJyLCBiZWZvcmUsIGFmdGVyIH0pIHtcclxuICByZXR1cm4gPD5cclxuICAgIHthcnIubWFwKG8gPT4gPG9wdGlvbiBrZXk9e299IHZhbHVlPXtvfT57YmVmb3JlfSB7b30ge2FmdGVyfTwvb3B0aW9uPil9XHJcbiAgPC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWUodGltZSkge1xyXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBob3VyOiBcIm51bWVyaWNcIiwgbWludXRlOiBcIm51bWVyaWNcIiB9KVxyXG59XHJcbmZ1bmN0aW9uIGdldFBhcmVudEVkaXRvckZpZWxkKG5vZGUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IG51bGwpIHJldHVybiBudWxsXHJcbiAgICBpZiAocGFyZW50RWxlbS5jb250ZW50RWRpdGFibGUgPT09IFwidHJ1ZVwiKSByZXR1cm4gcGFyZW50RWxlbVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB0ZXN0UGFyZW50cyhub2RlLCBlZGdlLCBlbGVtTmFtZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gZWRnZSkgcmV0dXJuIGZhbHNlXHJcbiAgICBpZiAocGFyZW50RWxlbS5sb2NhbE5hbWUgPT09IGVsZW1OYW1lKSByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB0ZXN0UGFyZW50c0Nzcyhub2RlLCBlZGdlLCBzdHlsZU5hbWUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IGVkZ2UpIHJldHVybiBudWxsXHJcbiAgICBpZiAocGFyZW50RWxlbS5zdHlsZVtzdHlsZU5hbWVdICE9PSBcIlwiKSByZXR1cm4gcGFyZW50RWxlbS5zdHlsZVtzdHlsZU5hbWVdXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRXaXRoQ3NzKGYpIHtcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIHRydWUpXHJcbiAgZigpXHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=