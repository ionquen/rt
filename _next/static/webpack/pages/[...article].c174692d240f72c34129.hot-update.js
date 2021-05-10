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
      if (arr.length !== 0) currentC(arr[0].id);
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
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.created, ": "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: getTime(current)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.modify, ":"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", getTime(modify)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
          elem: block.current
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.undo,
          onClick: undo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/undo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.redo,
          onClick: redo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/redo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
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
              lineNumber: 191,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
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
              lineNumber: 196,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: under ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.under,
          onClick: underSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/underlined.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 106
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: bold ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.bold,
          onClick: boldSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/bold.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 103
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.cursive, " ").concat(cursive ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.cursive,
          onClick: cursiveSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/italic.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.through, " ").concat(through ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.through,
          onClick: throughSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/strikethrough.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          style: {
            fill: color
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/color.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.color,
            type: "color",
            onChange: colorSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              backgroundColor: back
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.back,
            type: "color",
            onChange: backSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ol ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ol,
          onClick: olSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_numbered.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ul ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ul,
          onClick: ulSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_bulleted.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.clear,
          onClick: clearFormat,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/format_clear.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 75
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.print,
          onClick: printR,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/print.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 70
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: spell ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.spell,
          onClick: spellCheck,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/spellcheck.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 108
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        contentEditable: true,
        spellCheck: spell,
        ref: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: createNote,
        children: props.desc.add
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
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
              lineNumber: 230,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteNote(obj.id);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
                name: "var/x.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 54
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
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
              lineNumber: 232,
              columnNumber: 11
            }, _this)]
          }, obj.id, true, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 26
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 168,
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
        lineNumber: 241,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImZpeENoYW5nZXMiLCJpZCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJpbm5lckhUTUwiLCJwdXROb3RlIiwib2JqIiwiZGVsZXRlTm90ZSIsImFyciIsImZpbHRlciIsIm8iLCJsZW5ndGgiLCJjcmVhdGVOb3RlIiwiRGF0ZSIsIm5vdyIsImRlc2MiLCJuYW1lbGVzcyIsInVzZUVmZmVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9uc3VjY2VzcyIsImdldEFsbCIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImYiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyYW5nZSIsImdldFJhbmdlQXQiLCJhcmVhIiwiZ2V0UGFyZW50RWRpdG9yRmllbGQiLCJzdGFydENvbnRhaW5lciIsInRlc3RQYXJlbnRzIiwidGVzdFBhcmVudHNDc3MiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0SXRlbSIsImdldCIsInVuZGVmaW5lZCIsImkiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmaWVsZENoYW5nZSIsImZpZWxkIiwibWFwIiwiZGF0YXciLCJzIiwibm90ZSIsImNyZWF0ZWQiLCJnZXRUaW1lIiwidGFiIiwic2VsZWN0IiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImNsZWFyIiwiYWRkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsIk9wdGlvbnMiLCJiZWZvcmUiLCJhZnRlciIsInRpbWUiLCJob3VyIiwibWludXRlIiwibm9kZSIsInBhcmVudEVsZW0iLCJwYXJlbnROb2RlIiwiY29udGVudEVkaXRhYmxlIiwiZWRnZSIsImVsZW1OYW1lIiwibG9jYWxOYW1lIiwic3R5bGVOYW1lIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxPQUFELEVBQVUsaUJBQVYsRUFBNkIsYUFBN0IsRUFBNEMsZUFBNUMsRUFBNkQsYUFBN0QsRUFBNEUsU0FBNUUsRUFBdUYsUUFBdkYsRUFBaUcsY0FBakcsRUFBaUgsU0FBakgsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFDLENB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O0FBQ0Y7O0FBRUQsU0FBUzdGLFVBQVQsQ0FBb0IwQyxDQUFwQixFQUF1QjtBQUNyQjlGLFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQyxLQUFyQyxFQUE0QyxJQUE1QztBQUNBNkYsR0FBQztBQUNEOUYsVUFBUSxDQUFDQyxXQUFULENBQXFCLGNBQXJCLEVBQXFDLEtBQXJDLEVBQTRDLEtBQTVDO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLmMxNzQ2OTJkMjQwZjcyYzM0MTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy9ub3RlYm9vay5zdHlsJ1xyXG5pbXBvcnQgU3ZnIGZyb20gJy4uL1N2ZydcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuXHJcbmNvbnN0IGZvbnRzID0gW1wiQXJpYWxcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgXCJBcmlhbCBCbGFja1wiLCBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb3VyaWVyIE5ld1wiLCBcIkdlb3JnaWFcIiwgXCJJbXBhY3RcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJWZXJkYW5hXCJdXHJcbmNvbnN0IHNpemVzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddXHJcblxyXG5mdW5jdGlvbiBjdXJzaXZlU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnaXRhbGljJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gYm9sZFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2JvbGQnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bmRlclNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZGVyJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdGhyb3VnaFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0cmlrZXRocm91Z2gnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBvbFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdW5kbygpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZG8nLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiByZWRvKCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVkbycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIGNsZWFyRm9ybWF0KCkge1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdyZW1vdmVGb3JtYXQnLCBmYWxzZSwgbnVsbClcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5saW5rJywgZmFsc2UsIG51bGwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50UigpIHsgd2luZG93LnByaW50KCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZWJvb2soeyBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW2xpc3QsIGxpc3RDXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICBjb25zdCBbY3VycmVudCwgY3VycmVudENdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbmFtZSwgbmFtZUNdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbbW9kaWZ5LCBtb2RpZnlDXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGNvbnN0IFt1bmRlciwgdW5kZXJDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtib2xkLCBib2xkQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY3Vyc2l2ZSwgY3Vyc2l2ZUNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Rocm91Z2gsIHRocm91Z2hDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt1bCwgdWxDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtvbCwgb2xDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtiYWNrLCBiYWNrQ10gPSB1c2VTdGF0ZShcIiNmZmZmZmZcIilcclxuICBjb25zdCBbY29sb3IsIGNvbG9yQ10gPSB1c2VTdGF0ZShcIiMwMDAwMDBcIilcclxuICBjb25zdCBbZm9udCwgZm9udENdID0gdXNlU3RhdGUoXCJBcmlhbFwiKVxyXG4gIGNvbnN0IFtzaXplLCBzaXplQ10gPSB1c2VTdGF0ZSgyKVxyXG4gIGNvbnN0IFtzcGVsbCwgc3BlbGxDXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIGNvbnN0IGJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgZGIgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIGZ1bmN0aW9uIGJhY2tTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdoaWxpdGVDb2xvcicsIGZhbHNlLCBlLnRhcmdldC52YWx1ZSkpOyBiYWNrQyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIGNvbG9yU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9yZUNvbG9yJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGNvbG9yQyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIGZvbnRTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250TmFtZScsIGZhbHNlLCBlLnRhcmdldC52YWx1ZSkpOyBmb250QyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIHNpemVTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIGZhbHNlLCBOdW1iZXIoZS50YXJnZXQudmFsdWUpKSk7IHNpemVDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gc3BlbGxDaGVjaygpIHsgc3BlbGxDKHByZXYgPT4gIXByZXYpIH1cclxuXHJcbiAgLypmdW5jdGlvbiBkb3dubG9hZCgpIHtcclxuICAgIGNvbnN0IGQgPSBoamsoY29udGVudC5jdXJyZW50LmlubmVySFRNTClcclxuICAgIGNvbnNvbGUubG9nKGQpXHJcbiAgfSovXHJcbiAgZnVuY3Rpb24gZml4Q2hhbmdlcyhpZCkge1xyXG4gICAgaWYgKGlkID09PSBjdXJyZW50KSB7XHJcbiAgICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJkYXRhXCIsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwiZGF0YVwiKS5wdXQoY29udGVudC5jdXJyZW50LmlubmVySFRNTCwgY3VycmVudClcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcHV0Tm90ZShvYmopIHtcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5wdXQob2JqKVxyXG4gIH1cclxuICBmdW5jdGlvbiBkZWxldGVOb3RlKGlkKSB7XHJcbiAgICBsaXN0QyhwcmV2ID0+IHtcclxuICAgICAgY29uc3QgYXJyID0gcHJldi5maWx0ZXIobyA9PiBvLmlkICE9PSBpZClcclxuICAgICAgaWYgKGFyci5sZW5ndGggIT09IDApIGN1cnJlbnRDKGFyclswXS5pZClcclxuXHJcbiAgICAgIHJldHVybiBhcnJcclxuICAgIH0pXHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikuZGVsZXRlKGlkKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xyXG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpXHJcbiAgICBjb25zdCBvYmogPSB7IGlkOiBpZCwgbW9kaWZ5OiBpZCwgbmFtZTogcHJvcHMuZGVzYy5uYW1lbGVzcyB9XHJcbiAgICBsaXN0QyhwcmV2ID0+IFtvYmosIC4uLnByZXZdKVxyXG4gICAgcHV0Tm90ZShvYmopXHJcbiAgICBjdXJyZW50QyhpZClcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJkYm5vdGVzXCIsIDEpXHJcblxyXG4gICAgb3BlblJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc3QgZGIgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdkYXRhJykpIHtcclxuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgnZGF0YScpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKCdsaXN0JykpIHtcclxuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSgnbGlzdCcsIHsga2V5UGF0aDogJ2lkJyB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBkYi5jdXJyZW50ID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLmdldEFsbCgpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgIGxpc3RDKGUudGFyZ2V0LnJlc3VsdClcclxuICAgICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVDdXJyZW50JylcclxuICAgICAgICAgIGlmIChsb2NhbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEMoTnVtYmVyKGxvY2FsKSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZU5vdGUoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmKGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMClcclxuICAgICAgICBjb25zdCBhcmVhID0gZ2V0UGFyZW50RWRpdG9yRmllbGQocmFuZ2Uuc3RhcnRDb250YWluZXIpXHJcbiAgICAgICAgaWYgKGFyZWEgPT09IG51bGwpIHJldHVyblxyXG4gICAgICAgIGJvbGRDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcImJcIikpXHJcbiAgICAgICAgdW5kZXJDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcInVcIikpXHJcbiAgICAgICAgY3Vyc2l2ZUModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwiaVwiKSlcclxuICAgICAgICB0aHJvdWdoQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJzdHJpa2VcIikpXHJcbiAgICAgICAgZm9udEModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdmb250RmFtaWx5JykpXHJcbiAgICAgICAgc3dpdGNoICh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2ZvbnRTaXplJykpIHtcclxuICAgICAgICAgIGNhc2UgJ3gtc21hbGwnOiBzaXplQygxKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3NtYWxsJzogc2l6ZUMoMik7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdtZWRpdW0nOiBzaXplQygzKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ2xhcmdlJzogc2l6ZUMoNCk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4LWxhcmdlJzogc2l6ZUMoNSk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4eC1sYXJnZSc6IHNpemVDKDYpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneHh4LWxhcmdlJzogc2l6ZUMoNyk7IGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2tDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnYmFja2dyb3VuZENvbG9yJykpXHJcbiAgICAgICAgY29sb3JDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnY29sb3InKSlcclxuICAgICAgICBvbEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdvbCcpKVxyXG4gICAgICAgIHVsQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ3VsJykpXHJcbiAgICAgICAgLy9yYW5nZS5jbG9uZUNvbnRlbnRzKClcclxuICAgICAgfSBjYXRjaCB7IH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGYpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB0cnkgeyBvcGVuUmVxdWVzdC5jbG9zZSgpIH0gY2F0Y2ggeyB9XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGYpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50ID09PSBudWxsKSByZXR1cm5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlQ3VycmVudCcsIGN1cnJlbnQpXHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwiZGF0YVwiLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwiZGF0YVwiKS5nZXQoY3VycmVudCkub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LnJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29udGVudC5jdXJyZW50LmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgfSBlbHNlIGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgIH1cclxuICAgIGNvbnN0IGkgPSBzZXRJbnRlcnZhbCgoKSA9PiBmaXhDaGFuZ2VzKGN1cnJlbnQpLCAxMDAwKVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaSlcclxuICB9LCBbY3VycmVudF0pXHJcblxyXG4gIGZ1bmN0aW9uIGZpZWxkQ2hhbmdlKGlkLCBmaWVsZCwgdmFsdWUpIHtcclxuICAgIGxpc3RDKHByZXYgPT4gcHJldi5tYXAobyA9PiB7XHJcbiAgICAgIGlmIChvLmlkID09PSBpZCkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgLi4ubywgW2ZpZWxkXTogdmFsdWUsIG1vZGlmeTogRGF0ZS5ub3coKSB9XHJcbiAgICAgICAgcHV0Tm90ZShvYmopXHJcbiAgICAgICAgcmV0dXJuIG9ialxyXG4gICAgICB9IGVsc2UgcmV0dXJuIG9cclxuICAgIH0pKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YXcgPSBsaXN0LmZpbHRlcihvID0+IG8uaWQgPT09IGN1cnJlbnQpXHJcbiAgICBpZiAoZGF0YXcubGVuZ3RoID09PSAwKSByZXR1cm5cclxuICAgIG5hbWVDKGRhdGF3WzBdLm5hbWUpXHJcbiAgICBtb2RpZnlDKGRhdGF3WzBdLm1vZGlmeSlcclxuICB9LCBbbGlzdCwgY3VycmVudF0pXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzLmJsb2NrfSByZWY9e2Jsb2NrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5vdGV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2UgPT4gZmllbGRDaGFuZ2UoY3VycmVudCwgXCJuYW1lXCIsIGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MuY3JlYXRlZH06IDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2dldFRpbWUoY3VycmVudCl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmRlc2MubW9kaWZ5fTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPiB7Z2V0VGltZShtb2RpZnkpfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RnVsbHNjcmVlbiBlbGVtPXtibG9jay5jdXJyZW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kb30gb25DbGljaz17dW5kb30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvdW5kby5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5yZWRvfSBvbkNsaWNrPXtyZWRvfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9yZWRvLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3QgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5zaXplfSB2YWx1ZT17c2l6ZX0gb25DaGFuZ2U9e3NpemVTZXR9ID5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtzaXplc30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuZm9udH0gdmFsdWU9e2ZvbnR9IG9uQ2hhbmdlPXtmb250U2V0fT5cclxuICAgICAgICAgICAgPE9wdGlvbnMgYXJyPXtmb250c30gLz5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bmRlciA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudW5kZXJ9IG9uQ2xpY2s9e3VuZGVyU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci91bmRlcmxpbmVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2JvbGQgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmJvbGR9IG9uQ2xpY2s9e2JvbGRTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2JvbGQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7cy5jdXJzaXZlfSAke2N1cnNpdmUgPyBzLnNlbGVjdCA6ICcnfWB9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY3Vyc2l2ZX0gb25DbGljaz17Y3Vyc2l2ZVNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvaXRhbGljLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3MudGhyb3VnaH0gJHt0aHJvdWdoID8gcy5zZWxlY3QgOiAnJ31gfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnRocm91Z2h9IG9uQ2xpY2s9e3Rocm91Z2hTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3N0cmlrZXRocm91Z2guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZmlsbDogY29sb3IgfX0+XHJcbiAgICAgICAgICA8U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9jb2xvci5zdmdcIiAvPlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY29sb3J9IHR5cGU9XCJjb2xvclwiIG9uQ2hhbmdlPXtjb2xvclNldH0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrIH19PjwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuYmFja30gdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e2JhY2tTZXR9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17b2wgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLm9sfSBvbkNsaWNrPXtvbFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvbGlzdF9udW1iZXJlZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt1bCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudWx9IG9uQ2xpY2s9e3VsU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9saXN0X2J1bGxldGVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmNsZWFyfSBvbkNsaWNrPXtjbGVhckZvcm1hdH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZm9ybWF0X2NsZWFyLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgey8qPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmRvd25sb2FkfSBvbkNsaWNrPXtkb3dubG9hZH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvZG93bmxvYWQuc3ZnXCIgLz48L2J1dHRvbj4qL31cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIucHJpbnR9IG9uQ2xpY2s9e3ByaW50Un0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvcHJpbnQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3BlbGwgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnNwZWxsfSBvbkNsaWNrPXtzcGVsbENoZWNrfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9zcGVsbGNoZWNrLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNvbnRlbnRFZGl0YWJsZT17dHJ1ZX0gc3BlbGxDaGVjaz17c3BlbGx9IHJlZj17Y29udGVudH0+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdH0+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlTm90ZX0+XHJcbiAgICAgICAge3Byb3BzLmRlc2MuYWRkfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bGlzdC5tYXAob2JqID0+IDxkaXYgY2xhc3NOYW1lPXtjdXJyZW50ID09PSBvYmouaWQgPyBzLmN1cnJlbnQgOiAnJ31cclxuICAgICAgICAgIGtleT17b2JqLmlkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY3VycmVudEMob2JqLmlkKX0+XHJcbiAgICAgICAgICA8ZGl2PntvYmoubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlTm90ZShvYmouaWQpfT48U3ZnIG5hbWU9XCJ2YXIveC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdj57bmV3IERhdGUob2JqLm1vZGlmeSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5mdW5jdGlvbiBPcHRpb25zKHsgYXJyLCBiZWZvcmUsIGFmdGVyIH0pIHtcclxuICByZXR1cm4gPD5cclxuICAgIHthcnIubWFwKG8gPT4gPG9wdGlvbiBrZXk9e299IHZhbHVlPXtvfT57YmVmb3JlfSB7b30ge2FmdGVyfTwvb3B0aW9uPil9XHJcbiAgPC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWUodGltZSkge1xyXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBob3VyOiBcIm51bWVyaWNcIiwgbWludXRlOiBcIm51bWVyaWNcIiB9KVxyXG59XHJcbmZ1bmN0aW9uIGdldFBhcmVudEVkaXRvckZpZWxkKG5vZGUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IG51bGwpIHJldHVybiBudWxsXHJcbiAgICBpZiAocGFyZW50RWxlbS5jb250ZW50RWRpdGFibGUgPT09IFwidHJ1ZVwiKSByZXR1cm4gcGFyZW50RWxlbVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB0ZXN0UGFyZW50cyhub2RlLCBlZGdlLCBlbGVtTmFtZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gZWRnZSkgcmV0dXJuIGZhbHNlXHJcbiAgICBpZiAocGFyZW50RWxlbS5sb2NhbE5hbWUgPT09IGVsZW1OYW1lKSByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB0ZXN0UGFyZW50c0Nzcyhub2RlLCBlZGdlLCBzdHlsZU5hbWUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IGVkZ2UpIHJldHVybiBudWxsXHJcbiAgICBpZiAocGFyZW50RWxlbS5zdHlsZVtzdHlsZU5hbWVdICE9PSBcIlwiKSByZXR1cm4gcGFyZW50RWxlbS5zdHlsZVtzdHlsZU5hbWVdXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRXaXRoQ3NzKGYpIHtcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIHRydWUpXHJcbiAgZigpXHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCBmYWxzZSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=