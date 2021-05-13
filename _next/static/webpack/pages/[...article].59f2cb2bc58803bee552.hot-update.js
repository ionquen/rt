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
          lineNumber: 185,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.created, ": "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: getTime(current)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.modify, ":"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", getTime(modify)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
          elem: block.current
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.undo,
          onClick: undo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/undo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.redo,
          onClick: redo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/redo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
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
              lineNumber: 205,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
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
              lineNumber: 210,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: under ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.under,
          onClick: underSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/underlined.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 106
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: bold ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.bold,
          onClick: boldSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/bold.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 103
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.cursive, " ").concat(cursive ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.cursive,
          onClick: cursiveSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/italic.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.through, " ").concat(through ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.through,
          onClick: throughSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/strikethrough.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          style: {
            fill: color
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/color.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.color,
            type: "color",
            onChange: colorSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              backgroundColor: back
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.back,
            type: "color",
            onChange: backSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ol ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ol,
          onClick: olSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_numbered.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ul ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ul,
          onClick: ulSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_bulleted.svg"
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
          "data-tooltip": props.desc.tab.clear,
          onClick: clearFormat,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/format_clear.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 75
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.print,
          onClick: printR,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/print.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 70
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: spell ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.spell,
          onClick: spellCheck,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/spellcheck.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 108
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        contentEditable: true,
        spellCheck: spell,
        ref: content,
        onKeyDown: hotKeyPress
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: createNote,
        children: props.desc.add
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
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
              lineNumber: 244,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteNote(obj.id);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
                name: "var/x.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 54
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
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
              lineNumber: 246,
              columnNumber: 11
            }, _this)]
          }, obj.id, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 26
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 182,
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
        lineNumber: 255,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImhvdEtleVByZXNzIiwia2V5IiwiY29kZSIsImN0cmwiLCJmaXhDaGFuZ2VzIiwiaWQiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwicHV0IiwiaW5uZXJIVE1MIiwicHV0Tm90ZSIsIm9iaiIsImRlbGV0ZU5vdGUiLCJhcnIiLCJmaWx0ZXIiLCJvIiwibGVuZ3RoIiwiY3JlYXRlTm90ZSIsIkRhdGUiLCJub3ciLCJkZXNjIiwibmFtZWxlc3MiLCJ1c2VFZmZlY3QiLCJvcGVuUmVxdWVzdCIsImluZGV4ZWREQiIsIm9wZW4iLCJvbnVwZ3JhZGVuZWVkZWQiLCJyZXN1bHQiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJvbnN1Y2Nlc3MiLCJnZXRBbGwiLCJsb2NhbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2UiLCJnZXRSYW5nZUF0IiwiYXJlYSIsImdldFBhcmVudEVkaXRvckZpZWxkIiwic3RhcnRDb250YWluZXIiLCJ0ZXN0UGFyZW50cyIsInRlc3RQYXJlbnRzQ3NzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEl0ZW0iLCJnZXQiLCJ1bmRlZmluZWQiLCJpIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZmllbGRDaGFuZ2UiLCJmaWVsZCIsIm1hcCIsImRhdGF3IiwicyIsIm5vdGUiLCJjcmVhdGVkIiwiZ2V0VGltZSIsInRhYiIsInNlbGVjdCIsImZpbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGVhciIsImFkZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJPcHRpb25zIiwiYmVmb3JlIiwiYWZ0ZXIiLCJ0aW1lIiwiaG91ciIsIm1pbnV0ZSIsIm5vZGUiLCJwYXJlbnRFbGVtIiwicGFyZW50Tm9kZSIsImNvbnRlbnRFZGl0YWJsZSIsImVkZ2UiLCJlbGVtTmFtZSIsImxvY2FsTmFtZSIsInN0eWxlTmFtZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQUMsT0FBRCxFQUFVLGlCQUFWLEVBQTZCLGFBQTdCLEVBQTRDLGVBQTVDLEVBQTZELGFBQTdELEVBQTRFLFNBQTVFLEVBQXVGLFFBQXZGLEVBQWlHLGNBQWpHLEVBQWlILFNBQWpI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LEVBQTJCSSxJQUEzQixFQUFpQ0MsUUFBakMsRUFBMkM7QUFDekMsTUFBSUosVUFBVSxHQUFHRCxJQUFqQjs7QUFDQSxTQUFPQyxVQUFQLEVBQW1CO0FBQ2pCQSxjQUFVLEdBQUdBLFVBQVUsQ0FBQ0MsVUFBeEI7QUFDQSxRQUFJRCxVQUFVLEtBQUtHLElBQW5CLEVBQXlCLE9BQU8sS0FBUDtBQUN6QixRQUFJSCxVQUFVLENBQUNLLFNBQVgsS0FBeUJELFFBQTdCLEVBQXVDLE9BQU8sSUFBUDtBQUN4QztBQUNGOztBQUNELFNBQVN4QyxjQUFULENBQXdCbUMsSUFBeEIsRUFBOEJJLElBQTlCLEVBQW9DRyxTQUFwQyxFQUErQztBQUM3QyxNQUFJTixVQUFVLEdBQUdELElBQWpCOztBQUNBLFNBQU9DLFVBQVAsRUFBbUI7QUFDakJBLGNBQVUsR0FBR0EsVUFBVSxDQUFDQyxVQUF4QjtBQUNBLFFBQUlELFVBQVUsS0FBS0csSUFBbkIsRUFBeUIsT0FBTyxJQUFQO0FBQ3pCLFFBQUlILFVBQVUsQ0FBQ08sS0FBWCxDQUFpQkQsU0FBakIsTUFBZ0MsRUFBcEMsRUFBd0MsT0FBT04sVUFBVSxDQUFDTyxLQUFYLENBQWlCRCxTQUFqQixDQUFQO0FBQ3pDO0FBQ0Y7O0FBRUQsU0FBU2pHLFVBQVQsQ0FBb0I4QyxDQUFwQixFQUF1QjtBQUNyQmxHLFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQyxLQUFyQyxFQUE0QyxJQUE1QztBQUNBaUcsR0FBQztBQUNEbEcsVUFBUSxDQUFDQyxXQUFULENBQXFCLGNBQXJCLEVBQXFDLEtBQXJDLEVBQTRDLEtBQTVDO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLjU5ZjJjYjJiYzU4ODAzYmVlNTUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy9ub3RlYm9vay5zdHlsJ1xyXG5pbXBvcnQgU3ZnIGZyb20gJy4uL1N2ZydcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuXHJcbmNvbnN0IGZvbnRzID0gW1wiQXJpYWxcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgXCJBcmlhbCBCbGFja1wiLCBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb3VyaWVyIE5ld1wiLCBcIkdlb3JnaWFcIiwgXCJJbXBhY3RcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJWZXJkYW5hXCJdXHJcbmNvbnN0IHNpemVzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddXHJcblxyXG5mdW5jdGlvbiBjdXJzaXZlU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnaXRhbGljJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gYm9sZFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2JvbGQnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bmRlclNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZGVyJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdGhyb3VnaFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0cmlrZXRocm91Z2gnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBvbFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdW5kbygpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZG8nLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiByZWRvKCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVkbycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIGNsZWFyRm9ybWF0KCkge1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdyZW1vdmVGb3JtYXQnLCBmYWxzZSwgbnVsbClcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5saW5rJywgZmFsc2UsIG51bGwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50UigpIHsgd2luZG93LnByaW50KCkgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVib29rKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtsaXN0LCBsaXN0Q10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgY29uc3QgW2N1cnJlbnQsIGN1cnJlbnRDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW25hbWUsIG5hbWVDXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW21vZGlmeSwgbW9kaWZ5Q10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbdW5kZXIsIHVuZGVyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYm9sZCwgYm9sZENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1cnNpdmUsIGN1cnNpdmVDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0aHJvdWdoLCB0aHJvdWdoQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdWwsIHVsQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbb2wsIG9sQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYmFjaywgYmFja0NdID0gdXNlU3RhdGUoXCIjZmZmZmZmXCIpXHJcbiAgY29uc3QgW2NvbG9yLCBjb2xvckNdID0gdXNlU3RhdGUoXCIjMDAwMDAwXCIpXHJcbiAgY29uc3QgW2ZvbnQsIGZvbnRDXSA9IHVzZVN0YXRlKFwiQXJpYWxcIilcclxuICBjb25zdCBbc2l6ZSwgc2l6ZUNdID0gdXNlU3RhdGUoMilcclxuICBjb25zdCBbc3BlbGwsIHNwZWxsQ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGRiID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgY29udGVudCA9IHVzZVJlZihudWxsKVxyXG5cclxuICBmdW5jdGlvbiBiYWNrU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnaGlsaXRlQ29sb3InLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgYmFja0MoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBjb2xvclNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvcmVDb2xvcicsIGZhbHNlLCBlLnRhcmdldC52YWx1ZSkpOyBjb2xvckMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBmb250U2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udE5hbWUnLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgZm9udEMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBzaXplU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udFNpemUnLCBmYWxzZSwgTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkpOyBzaXplQyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIHNwZWxsQ2hlY2soKSB7IHNwZWxsQyhwcmV2ID0+ICFwcmV2KSB9XHJcblxyXG4gIGZ1bmN0aW9uIGhvdEtleVByZXNzKGUpIHtcclxuICAgIGNvbnN0IGtleSA9IGUuY29kZVxyXG4gICAgY29uc3QgY3RybCA9IGUuY3RybFxyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSAnS2V5Uyc6IGlmIChjdHJsKSByZXR1cm4gdGhyb3VnaFNldCgpXHJcbiAgICAgIGNhc2UgJ0tleU8nOiBpZiAoY3RybCkgcmV0dXJuIG9sU2V0KClcclxuICAgICAgY2FzZSAnS2V5TSc6IGlmIChjdHJsKSByZXR1cm4gdWxTZXQoKVxyXG4gICAgICBjYXNlICdLZXlMJzogaWYgKGN0cmwpIHJldHVybiBjbGVhckZvcm1hdCgpXHJcbiAgICAgIGNhc2UgJ0tleVInOiBpZiAoY3RybCkgcmV0dXJuIHNwZWxsQ2hlY2soKVxyXG4gICAgfVxyXG4gIH1cclxuICAvKmZ1bmN0aW9uIGRvd25sb2FkKCkge1xyXG4gICAgY29uc3QgZCA9IGhqayhjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MKVxyXG4gICAgY29uc29sZS5sb2coZClcclxuICB9Ki9cclxuICBmdW5jdGlvbiBmaXhDaGFuZ2VzKGlkKSB7XHJcbiAgICBpZiAoaWQgPT09IGN1cnJlbnQpIHtcclxuICAgICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImRhdGFcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJkYXRhXCIpLnB1dChjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MLCBjdXJyZW50KVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBwdXROb3RlKG9iaikge1xyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLnB1dChvYmopXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU5vdGUoaWQpIHtcclxuICAgIGxpc3RDKHByZXYgPT4ge1xyXG4gICAgICBjb25zdCBhcnIgPSBwcmV2LmZpbHRlcihvID0+IG8uaWQgIT09IGlkKVxyXG4gICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNyZWF0ZU5vdGUoKVxyXG4gICAgICB9IGVsc2UgY3VycmVudEMoYXJyWzBdLmlkKVxyXG5cclxuICAgICAgcmV0dXJuIGFyclxyXG4gICAgfSlcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5kZWxldGUoaWQpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vdGUoKSB7XHJcbiAgICBjb25zdCBpZCA9IERhdGUubm93KClcclxuICAgIGNvbnN0IG9iaiA9IHsgaWQ6IGlkLCBtb2RpZnk6IGlkLCBuYW1lOiBwcm9wcy5kZXNjLm5hbWVsZXNzIH1cclxuICAgIGxpc3RDKHByZXYgPT4gW29iaiwgLi4ucHJldl0pXHJcbiAgICBwdXROb3RlKG9iailcclxuICAgIGN1cnJlbnRDKGlkKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb3BlblJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcImRibm90ZXNcIiwgMSlcclxuXHJcbiAgICBvcGVuUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zdCBkYiA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ2RhdGEnKSkge1xyXG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdkYXRhJylcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ2xpc3QnKSkge1xyXG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdsaXN0JywgeyBrZXlQYXRoOiAnaWQnIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9wZW5SZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGRiLmN1cnJlbnQgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikuZ2V0QWxsKCkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQucmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgbGlzdEMoZS50YXJnZXQucmVzdWx0KVxyXG4gICAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZUN1cnJlbnQnKVxyXG4gICAgICAgICAgaWYgKGxvY2FsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QyhOdW1iZXIobG9jYWwpKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlTm90ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGYoZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKVxyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBnZXRQYXJlbnRFZGl0b3JGaWVsZChyYW5nZS5zdGFydENvbnRhaW5lcilcclxuICAgICAgICBpZiAoYXJlYSA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICAgICAgYm9sZEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwiYlwiKSlcclxuICAgICAgICB1bmRlckModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwidVwiKSlcclxuICAgICAgICBjdXJzaXZlQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJpXCIpKVxyXG4gICAgICAgIHRocm91Z2hDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcInN0cmlrZVwiKSlcclxuICAgICAgICBmb250Qyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2ZvbnRGYW1pbHknKSlcclxuICAgICAgICBzd2l0Y2ggKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnZm9udFNpemUnKSkge1xyXG4gICAgICAgICAgY2FzZSAneC1zbWFsbCc6IHNpemVDKDEpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnc21hbGwnOiBzaXplQygyKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ21lZGl1bSc6IHNpemVDKDMpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnbGFyZ2UnOiBzaXplQyg0KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3gtbGFyZ2UnOiBzaXplQyg1KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3h4LWxhcmdlJzogc2l6ZUMoNik7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4eHgtbGFyZ2UnOiBzaXplQyg3KTsgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja0ModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdiYWNrZ3JvdW5kQ29sb3InKSlcclxuICAgICAgICBjb2xvckModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdjb2xvcicpKVxyXG4gICAgICAgIG9sQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ29sJykpXHJcbiAgICAgICAgdWxDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAndWwnKSlcclxuICAgICAgICAvL3JhbmdlLmNsb25lQ29udGVudHMoKVxyXG4gICAgICB9IGNhdGNoIHsgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZilcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRyeSB7IG9wZW5SZXF1ZXN0LmNsb3NlKCkgfSBjYXRjaCB7IH1cclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZilcclxuICAgIH1cclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHJldHVyblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVDdXJyZW50JywgY3VycmVudClcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJkYXRhXCIsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJkYXRhXCIpLmdldChjdXJyZW50KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQucmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICB9IGVsc2UgY29udGVudC5jdXJyZW50LmlubmVySFRNTCA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgfVxyXG4gICAgY29uc3QgaSA9IHNldEludGVydmFsKCgpID0+IGZpeENoYW5nZXMoY3VycmVudCksIDEwMDApXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpKVxyXG4gIH0sIFtjdXJyZW50XSlcclxuXHJcbiAgZnVuY3Rpb24gZmllbGRDaGFuZ2UoaWQsIGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgbGlzdEMocHJldiA9PiBwcmV2Lm1hcChvID0+IHtcclxuICAgICAgaWYgKG8uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0geyAuLi5vLCBbZmllbGRdOiB2YWx1ZSwgbW9kaWZ5OiBEYXRlLm5vdygpIH1cclxuICAgICAgICBwdXROb3RlKG9iailcclxuICAgICAgICByZXR1cm4gb2JqXHJcbiAgICAgIH0gZWxzZSByZXR1cm4gb1xyXG4gICAgfSkpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhdyA9IGxpc3QuZmlsdGVyKG8gPT4gby5pZCA9PT0gY3VycmVudClcclxuICAgIGlmIChkYXRhdy5sZW5ndGggPT09IDApIHJldHVyblxyXG4gICAgbmFtZUMoZGF0YXdbMF0ubmFtZSlcclxuICAgIG1vZGlmeUMoZGF0YXdbMF0ubW9kaWZ5KVxyXG4gIH0sIFtsaXN0LCBjdXJyZW50XSlcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9IHJlZj17YmxvY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Mubm90ZX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17ZSA9PiBmaWVsZENoYW5nZShjdXJyZW50LCBcIm5hbWVcIiwgZS50YXJnZXQudmFsdWUpfSBzcGVsbENoZWNrPXtmYWxzZX0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MuY3JlYXRlZH06IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2dldFRpbWUoY3VycmVudCl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MubW9kaWZ5fTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPiB7Z2V0VGltZShtb2RpZnkpfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kb30gb25DbGljaz17dW5kb30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvdW5kby5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5yZWRvfSBvbkNsaWNrPXtyZWRvfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9yZWRvLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3QgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5zaXplfSB2YWx1ZT17c2l6ZX0gb25DaGFuZ2U9e3NpemVTZXR9ID5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtzaXplc30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuZm9udH0gdmFsdWU9e2ZvbnR9IG9uQ2hhbmdlPXtmb250U2V0fT5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtmb250c30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bmRlciA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kZXJ9IG9uQ2xpY2s9e3VuZGVyU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci91bmRlcmxpbmVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2JvbGQgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmJvbGR9IG9uQ2xpY2s9e2JvbGRTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2JvbGQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7cy5jdXJzaXZlfSAke2N1cnNpdmUgPyBzLnNlbGVjdCA6ICcnfWB9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY3Vyc2l2ZX0gb25DbGljaz17Y3Vyc2l2ZVNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvaXRhbGljLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3MudGhyb3VnaH0gJHt0aHJvdWdoID8gcy5zZWxlY3QgOiAnJ31gfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnRocm91Z2h9IG9uQ2xpY2s9e3Rocm91Z2hTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3N0cmlrZXRocm91Z2guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZmlsbDogY29sb3IgfX0+XHJcbiAgICAgICAgICA8U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9jb2xvci5zdmdcIiAvPlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY29sb3J9IHR5cGU9XCJjb2xvclwiIG9uQ2hhbmdlPXtjb2xvclNldH0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrIH19PjwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuYmFja30gdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e2JhY2tTZXR9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17b2wgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLm9sfSBvbkNsaWNrPXtvbFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvbGlzdF9udW1iZXJlZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudWx9IG9uQ2xpY2s9e3VsU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9saXN0X2J1bGxldGVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmNsZWFyfSBvbkNsaWNrPXtjbGVhckZvcm1hdH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZm9ybWF0X2NsZWFyLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgey8qPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmRvd25sb2FkfSBvbkNsaWNrPXtkb3dubG9hZH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZG93bmxvYWQuc3ZnXCIgLz48L2J1dHRvbj4qL31cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIucHJpbnR9IG9uQ2xpY2s9e3ByaW50Un0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvcHJpbnQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3BlbGwgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnNwZWxsfSBvbkNsaWNrPXtzcGVsbENoZWNrfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9zcGVsbGNoZWNrLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNvbnRlbnRFZGl0YWJsZT17dHJ1ZX0gc3BlbGxDaGVjaz17c3BlbGx9IHJlZj17Y29udGVudH0gb25LZXlEb3duPXtob3RLZXlQcmVzc30+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlTm90ZX0+XHJcbiAgICAgICAge3Byb3BzLmRlc2MuYWRkfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bGlzdC5tYXAob2JqID0+IDxkaXYgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBvYmouaWQgPyBzLmN1cnJlbnQgOiAnJ31cclxuICAgICAgICAgIGtleT17b2JqLmlkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY3VycmVudEMob2JqLmlkKX0+XHJcbiAgICAgICAgICA8ZGl2PntvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlTm90ZShvYmouaWQpfT48U3ZnIG5hbWU9XCJ2YXIveC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLm1vZGlmeSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5mdW5jdGlvbiBPcHRpb25zKHsgYXJyLCBiZWZvcmUsIGFmdGVyIH0pIHtcclxuICByZXR1cm4gPD5cclxuICAgIHthcnIubWFwKG8gPT4gPG9wdGlvbiBrZXk9e299IHZhbHVlPXtvfT57YmVmb3JlfSB7b30ge2FmdGVyfTwvb3B0aW9uPil9XHJcbiAgPC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWUodGltZSkge1xyXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBob3VyOiBcIm51bWVyaWNcIiwgbWludXRlOiBcIm51bWVyaWNcIiB9KVxyXG59XHJcbmZ1bmN0aW9uIGdldFBhcmVudEVkaXRvckZpZWxkKG5vZGUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IG51bGwpIHJldHVybiBudWxsXHJcbiAgICBpZiAocGFyZW50RWxlbS5jb250ZW50RWRpdGFibGUgPT09IFwidHJ1ZVwiKSByZXR1cm4gcGFyZW50RWxlbVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB0ZXN0UGFyZW50cyhub2RlLCBlZGdlLCBlbGVtTmFtZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gZWRnZSkgcmV0dXJuIGZhbHNlXHJcbiAgICBpZiAocGFyZW50RWxlbS5sb2NhbE5hbWUgPT09IGVsZW1OYW1lKSByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB0ZXN0UGFyZW50c0Nzcyhub2RlLCBlZGdlLCBzdHlsZU5hbWUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IGVkZ2UpIHJldHVybiBudWxsXHJcbiAgICBpZiAocGFyZW50RWxlbS5zdHlsZVtzdHlsZU5hbWVdICE9PSBcIlwiKSByZXR1cm4gcGFyZW50RWxlbS5zdHlsZVtzdHlsZU5hbWVdXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRXaXRoQ3NzKGYpIHtcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIHRydWUpXHJcbiAgZigpXHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=