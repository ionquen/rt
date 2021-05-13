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
          lineNumber: 173,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.created, ": "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: getTime(current)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.modify, ":"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", getTime(modify)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
          elem: block.current
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.undo,
          onClick: undo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/undo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.redo,
          onClick: redo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/redo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
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
              lineNumber: 193,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
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
              lineNumber: 198,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: under ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.under,
          onClick: underSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/underlined.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 106
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: bold ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.bold,
          onClick: boldSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/bold.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 103
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.cursive, " ").concat(cursive ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.cursive,
          onClick: cursiveSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/italic.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.through, " ").concat(through ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.through,
          onClick: throughSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/strikethrough.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          style: {
            fill: color
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/color.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.color,
            type: "color",
            onChange: colorSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              backgroundColor: back
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.back,
            type: "color",
            onChange: backSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ol ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ol,
          onClick: olSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_numbered.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ul ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ul,
          onClick: ulSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_bulleted.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.clear,
          onClick: clearFormat,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/format_clear.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 75
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.print,
          onClick: printR,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/print.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 70
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: spell ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.spell,
          onClick: spellCheck,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/spellcheck.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 108
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        contentEditable: true,
        spellCheck: spell,
        ref: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: createNote,
        children: props.desc.add
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
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
              lineNumber: 232,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteNote(obj.id);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
                name: "var/x.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 54
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
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
              lineNumber: 234,
              columnNumber: 11
            }, _this)]
          }, obj.id, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 26
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 170,
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
        lineNumber: 243,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImZpeENoYW5nZXMiLCJpZCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJpbm5lckhUTUwiLCJwdXROb3RlIiwib2JqIiwiZGVsZXRlTm90ZSIsImFyciIsImZpbHRlciIsIm8iLCJsZW5ndGgiLCJjcmVhdGVOb3RlIiwiRGF0ZSIsIm5vdyIsImRlc2MiLCJuYW1lbGVzcyIsInVzZUVmZmVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9uc3VjY2VzcyIsImdldEFsbCIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImYiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyYW5nZSIsImdldFJhbmdlQXQiLCJhcmVhIiwiZ2V0UGFyZW50RWRpdG9yRmllbGQiLCJzdGFydENvbnRhaW5lciIsInRlc3RQYXJlbnRzIiwidGVzdFBhcmVudHNDc3MiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0SXRlbSIsImdldCIsInVuZGVmaW5lZCIsImkiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmaWVsZENoYW5nZSIsImZpZWxkIiwibWFwIiwiZGF0YXciLCJzIiwibm90ZSIsImNyZWF0ZWQiLCJnZXRUaW1lIiwidGFiIiwic2VsZWN0IiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImNsZWFyIiwiYWRkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsIk9wdGlvbnMiLCJiZWZvcmUiLCJhZnRlciIsInRpbWUiLCJob3VyIiwibWludXRlIiwibm9kZSIsInBhcmVudEVsZW0iLCJwYXJlbnROb2RlIiwiY29udGVudEVkaXRhYmxlIiwiZWRnZSIsImVsZW1OYW1lIiwibG9jYWxOYW1lIiwic3R5bGVOYW1lIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxPQUFELEVBQVUsaUJBQVYsRUFBNkIsYUFBN0IsRUFBNEMsZUFBNUMsRUFBNkQsYUFBN0QsRUFBNEUsU0FBNUUsRUFBdUYsUUFBdkYsRUFBaUcsY0FBakcsRUFBaUgsU0FBakgsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFDLENB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LEVBQXdDLE9BQU9OLFVBQVUsQ0FBQ08sS0FBWCxDQUFpQkQsU0FBakIsQ0FBUDtBQUN6QztBQUNGOztBQUVELFNBQVM3RixVQUFULENBQW9CMEMsQ0FBcEIsRUFBdUI7QUFDckI5RixVQUFRLENBQUNDLFdBQVQsQ0FBcUIsY0FBckIsRUFBcUMsS0FBckMsRUFBNEMsSUFBNUM7QUFDQTZGLEdBQUM7QUFDRDlGLFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQyxLQUFyQyxFQUE0QyxLQUE1QztBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS5lZWY1Nzc3M2RmNmUzMmFlNjljOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvbm90ZWJvb2suc3R5bCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5jb25zdCBmb250cyA9IFtcIkFyaWFsXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFwiQXJpYWwgQmxhY2tcIiwgXCJDb21pYyBTYW5zIE1TXCIsIFwiQ291cmllciBOZXdcIiwgXCJHZW9yZ2lhXCIsIFwiSW1wYWN0XCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVmVyZGFuYVwiXVxyXG5jb25zdCBzaXplcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XVxyXG5cclxuZnVuY3Rpb24gY3Vyc2l2ZVNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2l0YWxpYycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIGJvbGRTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdib2xkJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdW5kZXJTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRlcicsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHRocm91Z2hTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHJpa2V0aHJvdWdoJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdWxTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gb2xTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHVuZG8oKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRvJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gcmVkbygpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3JlZG8nLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBjbGVhckZvcm1hdCgpIHtcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVtb3ZlRm9ybWF0JywgZmFsc2UsIG51bGwpXHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VubGluaycsIGZhbHNlLCBudWxsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFIoKSB7IHdpbmRvdy5wcmludCgpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVib29rKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtsaXN0LCBsaXN0Q10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgY29uc3QgW2N1cnJlbnQsIGN1cnJlbnRDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW25hbWUsIG5hbWVDXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW21vZGlmeSwgbW9kaWZ5Q10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbdW5kZXIsIHVuZGVyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYm9sZCwgYm9sZENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1cnNpdmUsIGN1cnNpdmVDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0aHJvdWdoLCB0aHJvdWdoQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdWwsIHVsQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbb2wsIG9sQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYmFjaywgYmFja0NdID0gdXNlU3RhdGUoXCIjZmZmZmZmXCIpXHJcbiAgY29uc3QgW2NvbG9yLCBjb2xvckNdID0gdXNlU3RhdGUoXCIjMDAwMDAwXCIpXHJcbiAgY29uc3QgW2ZvbnQsIGZvbnRDXSA9IHVzZVN0YXRlKFwiQXJpYWxcIilcclxuICBjb25zdCBbc2l6ZSwgc2l6ZUNdID0gdXNlU3RhdGUoMilcclxuICBjb25zdCBbc3BlbGwsIHNwZWxsQ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGRiID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgY29udGVudCA9IHVzZVJlZihudWxsKVxyXG5cclxuICBmdW5jdGlvbiBiYWNrU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnaGlsaXRlQ29sb3InLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgYmFja0MoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBjb2xvclNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvcmVDb2xvcicsIGZhbHNlLCBlLnRhcmdldC52YWx1ZSkpOyBjb2xvckMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBmb250U2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udE5hbWUnLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgZm9udEMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBzaXplU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udFNpemUnLCBmYWxzZSwgTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkpOyBzaXplQyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIHNwZWxsQ2hlY2soKSB7IHNwZWxsQyhwcmV2ID0+ICFwcmV2KSB9XHJcblxyXG4gIC8qZnVuY3Rpb24gZG93bmxvYWQoKSB7XHJcbiAgICBjb25zdCBkID0gaGprKGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwpXHJcbiAgICBjb25zb2xlLmxvZyhkKVxyXG4gIH0qL1xyXG4gIGZ1bmN0aW9uIGZpeENoYW5nZXMoaWQpIHtcclxuICAgIGlmIChpZCA9PT0gY3VycmVudCkge1xyXG4gICAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwiZGF0YVwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImRhdGFcIikucHV0KGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwsIGN1cnJlbnQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHB1dE5vdGUob2JqKSB7XHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikucHV0KG9iailcclxuICB9XHJcbiAgZnVuY3Rpb24gZGVsZXRlTm90ZShpZCkge1xyXG4gICAgbGlzdEMocHJldiA9PiB7XHJcbiAgICAgIGNvbnN0IGFyciA9IHByZXYuZmlsdGVyKG8gPT4gby5pZCAhPT0gaWQpXHJcbiAgICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY3JlYXRlTm90ZSgpXHJcbiAgICAgIH0gZWxzZSBjdXJyZW50QyhhcnJbMF0uaWQpXHJcblxyXG4gICAgICByZXR1cm4gYXJyXHJcbiAgICB9KVxyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLmRlbGV0ZShpZClcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcclxuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKVxyXG4gICAgY29uc3Qgb2JqID0geyBpZDogaWQsIG1vZGlmeTogaWQsIG5hbWU6IHByb3BzLmRlc2MubmFtZWxlc3MgfVxyXG4gICAgbGlzdEMocHJldiA9PiBbb2JqLCAuLi5wcmV2XSlcclxuICAgIHB1dE5vdGUob2JqKVxyXG4gICAgY3VycmVudEMoaWQpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiZGJub3Rlc1wiLCAxKVxyXG5cclxuICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnN0IGRiID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnZGF0YScpKSB7XHJcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2RhdGEnKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnbGlzdCcpKSB7XHJcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2xpc3QnLCB7IGtleVBhdGg6ICdpZCcgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZGIuY3VycmVudCA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5nZXRBbGwoKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5yZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICBsaXN0QyhlLnRhcmdldC5yZXN1bHQpXHJcbiAgICAgICAgICBjb25zdCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlQ3VycmVudCcpXHJcbiAgICAgICAgICBpZiAobG9jYWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRDKE51bWJlcihsb2NhbCkpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVOb3RlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZihlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcclxuICAgICAgICBjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApXHJcbiAgICAgICAgY29uc3QgYXJlYSA9IGdldFBhcmVudEVkaXRvckZpZWxkKHJhbmdlLnN0YXJ0Q29udGFpbmVyKVxyXG4gICAgICAgIGlmIChhcmVhID09PSBudWxsKSByZXR1cm5cclxuICAgICAgICBib2xkQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJiXCIpKVxyXG4gICAgICAgIHVuZGVyQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJ1XCIpKVxyXG4gICAgICAgIGN1cnNpdmVDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcImlcIikpXHJcbiAgICAgICAgdGhyb3VnaEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwic3RyaWtlXCIpKVxyXG4gICAgICAgIGZvbnRDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnZm9udEZhbWlseScpKVxyXG4gICAgICAgIHN3aXRjaCAodGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdmb250U2l6ZScpKSB7XHJcbiAgICAgICAgICBjYXNlICd4LXNtYWxsJzogc2l6ZUMoMSk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdzbWFsbCc6IHNpemVDKDIpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnbWVkaXVtJzogc2l6ZUMoMyk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdsYXJnZSc6IHNpemVDKDQpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneC1sYXJnZSc6IHNpemVDKDUpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneHgtbGFyZ2UnOiBzaXplQyg2KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3h4eC1sYXJnZSc6IHNpemVDKDcpOyBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrQyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2JhY2tncm91bmRDb2xvcicpKVxyXG4gICAgICAgIGNvbG9yQyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2NvbG9yJykpXHJcbiAgICAgICAgb2xDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnb2wnKSlcclxuICAgICAgICB1bEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICd1bCcpKVxyXG4gICAgICAgIC8vcmFuZ2UuY2xvbmVDb250ZW50cygpXHJcbiAgICAgIH0gY2F0Y2ggeyB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdHJ5IHsgb3BlblJlcXVlc3QuY2xvc2UoKSB9IGNhdGNoIHsgfVxyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZUN1cnJlbnQnLCBjdXJyZW50KVxyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImRhdGFcIiwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShcImRhdGFcIikuZ2V0KGN1cnJlbnQpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5yZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgIH0gZWxzZSBjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICB9XHJcbiAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4gZml4Q2hhbmdlcyhjdXJyZW50KSwgMTAwMClcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGkpXHJcbiAgfSwgW2N1cnJlbnRdKVxyXG5cclxuICBmdW5jdGlvbiBmaWVsZENoYW5nZShpZCwgZmllbGQsIHZhbHVlKSB7XHJcbiAgICBsaXN0QyhwcmV2ID0+IHByZXYubWFwKG8gPT4ge1xyXG4gICAgICBpZiAoby5pZCA9PT0gaWQpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7IC4uLm8sIFtmaWVsZF06IHZhbHVlLCBtb2RpZnk6IERhdGUubm93KCkgfVxyXG4gICAgICAgIHB1dE5vdGUob2JqKVxyXG4gICAgICAgIHJldHVybiBvYmpcclxuICAgICAgfSBlbHNlIHJldHVybiBvXHJcbiAgICB9KSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGF3ID0gbGlzdC5maWx0ZXIobyA9PiBvLmlkID09PSBjdXJyZW50KVxyXG4gICAgaWYgKGRhdGF3Lmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcbiAgICBuYW1lQyhkYXRhd1swXS5uYW1lKVxyXG4gICAgbW9kaWZ5QyhkYXRhd1swXS5tb2RpZnkpXHJcbiAgfSwgW2xpc3QsIGN1cnJlbnRdKVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5ibG9ja30gcmVmPXtibG9ja30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5ub3RlfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtlID0+IGZpZWxkQ2hhbmdlKGN1cnJlbnQsIFwibmFtZVwiLCBlLnRhcmdldC52YWx1ZSl9IHNwZWxsQ2hlY2s9e2ZhbHNlfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5jcmVhdGVkfTogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57Z2V0VGltZShjdXJyZW50KX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5tb2RpZnl9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+IHtnZXRUaW1lKG1vZGlmeSl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGdWxsc2NyZWVuIGVsZW09e2Jsb2NrLmN1cnJlbnR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi51bmRvfSBvbkNsaWNrPXt1bmRvfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci91bmRvLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnJlZG99IG9uQ2xpY2s9e3JlZG99PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3JlZG8uc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnNpemV9IHZhbHVlPXtzaXplfSBvbkNoYW5nZT17c2l6ZVNldH0gPlxyXG4gICAgICAgICAgICA8T3B0aW9ucyBhcnI9e3NpemVzfSAvPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3QgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5mb250fSB2YWx1ZT17Zm9udH0gb25DaGFuZ2U9e2ZvbnRTZXR9PlxyXG4gICAgICAgICAgICA8T3B0aW9ucyBhcnI9e2ZvbnRzfSAvPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3VuZGVyID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi51bmRlcn0gb25DbGljaz17dW5kZXJTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3VuZGVybGluZWQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Ym9sZCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuYm9sZH0gb25DbGljaz17Ym9sZFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvYm9sZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzLmN1cnNpdmV9ICR7Y3Vyc2l2ZSA/IHMuc2VsZWN0IDogJyd9YH0gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5jdXJzaXZlfSBvbkNsaWNrPXtjdXJzaXZlU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9pdGFsaWMuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7cy50aHJvdWdofSAke3Rocm91Z2ggPyBzLnNlbGVjdCA6ICcnfWB9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudGhyb3VnaH0gb25DbGljaz17dGhyb3VnaFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvc3RyaWtldGhyb3VnaC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBmaWxsOiBjb2xvciB9fT5cclxuICAgICAgICAgIDxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2NvbG9yLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8aW5wdXQgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5jb2xvcn0gdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e2NvbG9yU2V0fSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2sgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5iYWNrfSB0eXBlPVwiY29sb3JcIiBvbkNoYW5nZT17YmFja1NldH0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtvbCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIub2x9IG9uQ2xpY2s9e29sU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9saXN0X251bWJlcmVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3VsID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi51bH0gb25DbGljaz17dWxTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2xpc3RfYnVsbGV0ZWQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY2xlYXJ9IG9uQ2xpY2s9e2NsZWFyRm9ybWF0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9mb3JtYXRfY2xlYXIuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICB7Lyo8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuZG93bmxvYWR9IG9uQ2xpY2s9e2Rvd25sb2FkfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9kb3dubG9hZC5zdmdcIiAvPjwvYnV0dG9uPiovfVxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5wcmludH0gb25DbGljaz17cHJpbnRSfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9wcmludC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzcGVsbCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuc3BlbGx9IG9uQ2xpY2s9e3NwZWxsQ2hlY2t9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3NwZWxsY2hlY2suc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY29udGVudEVkaXRhYmxlPXt0cnVlfSBzcGVsbENoZWNrPXtzcGVsbH0gcmVmPXtjb250ZW50fT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVOb3RlfT5cclxuICAgICAgICB7cHJvcHMuZGVzYy5hZGR9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtsaXN0Lm1hcChvYmogPT4gPGRpdiBjbGFzc05hbWU9e2N1cnJlbnQgPT09IG9iai5pZCA/IHMuY3VycmVudCA6ICcnfVxyXG4gICAgICAgICAga2V5PXtvYmouaWR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjdXJyZW50QyhvYmouaWQpfT5cclxuICAgICAgICAgIDxkaXY+e29iai5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVOb3RlKG9iai5pZCl9PjxTdmcgbmFtZT1cInZhci94LnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmoubW9kaWZ5KS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcbmZ1bmN0aW9uIE9wdGlvbnMoeyBhcnIsIGJlZm9yZSwgYWZ0ZXIgfSkge1xyXG4gIHJldHVybiA8PlxyXG4gICAge2Fyci5tYXAobyA9PiA8b3B0aW9uIGtleT17b30gdmFsdWU9e299PntiZWZvcmV9IHtvfSB7YWZ0ZXJ9PC9vcHRpb24+KX1cclxuICA8Lz5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIGhvdXI6IFwibnVtZXJpY1wiLCBtaW51dGU6IFwibnVtZXJpY1wiIH0pXHJcbn1cclxuZnVuY3Rpb24gZ2V0UGFyZW50RWRpdG9yRmllbGQobm9kZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gbnVsbCkgcmV0dXJuIG51bGxcclxuICAgIGlmIChwYXJlbnRFbGVtLmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJ0cnVlXCIpIHJldHVybiBwYXJlbnRFbGVtXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRlc3RQYXJlbnRzKG5vZGUsIGVkZ2UsIGVsZW1OYW1lKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBlZGdlKSByZXR1cm4gZmFsc2VcclxuICAgIGlmIChwYXJlbnRFbGVtLmxvY2FsTmFtZSA9PT0gZWxlbU5hbWUpIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRlc3RQYXJlbnRzQ3NzKG5vZGUsIGVkZ2UsIHN0eWxlTmFtZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gZWRnZSkgcmV0dXJuIG51bGxcclxuICAgIGlmIChwYXJlbnRFbGVtLnN0eWxlW3N0eWxlTmFtZV0gIT09IFwiXCIpIHJldHVybiBwYXJlbnRFbGVtLnN0eWxlW3N0eWxlTmFtZV1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFdpdGhDc3MoZikge1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgdHJ1ZSlcclxuICBmKClcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==