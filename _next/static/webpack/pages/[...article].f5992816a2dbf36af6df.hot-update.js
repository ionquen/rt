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
          lineNumber: 170,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.created, ": "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: getTime(current)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [props.desc.modify, ":"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", getTime(modify)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_fullscreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
          elem: block.current
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.undo,
          onClick: undo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/undo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.redo,
          onClick: redo,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/redo.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 67
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            "data-tooltip": props.desc.tab.font,
            value: font,
            onChange: fontSet,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Options, {
              arr: fonts
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: under ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.under,
          onClick: underSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/underlined.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 106
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: bold ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.bold,
          onClick: boldSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/bold.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 103
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.cursive, " ").concat(cursive ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.cursive,
          onClick: cursiveSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/italic.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "".concat(_styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.through, " ").concat(through ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : ''),
          "data-tooltip": props.desc.tab.through,
          onClick: throughSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/strikethrough.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 130
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          style: {
            fill: color
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/color.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.color,
            type: "color",
            onChange: colorSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              backgroundColor: back
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            "data-tooltip": props.desc.tab.back,
            type: "color",
            onChange: backSet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ol ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ol,
          onClick: olSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_numbered.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: ul ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.ul,
          onClick: ulSet,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/list_bulleted.svg"
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
          "data-tooltip": props.desc.tab.clear,
          onClick: clearFormat,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/format_clear.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 75
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          "data-tooltip": props.desc.tab.print,
          onClick: printR,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/print.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 70
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: spell ? _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.select : '',
          "data-tooltip": props.desc.tab.spell,
          onClick: spellCheck,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "text_formatter/spellcheck.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 108
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        contentEditable: true,
        spellCheck: spell,
        ref: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_tools_notebook_styl__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: createNote,
        children: props.desc.add
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
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
              lineNumber: 229,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return deleteNote(obj.id);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
                name: "var/x.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 54
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
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
              lineNumber: 231,
              columnNumber: 11
            }, _this)]
          }, obj.id, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 26
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 167,
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
        lineNumber: 240,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImZpeENoYW5nZXMiLCJpZCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJpbm5lckhUTUwiLCJwdXROb3RlIiwib2JqIiwiZGVsZXRlTm90ZSIsImFyciIsImZpbHRlciIsIm8iLCJjcmVhdGVOb3RlIiwiRGF0ZSIsIm5vdyIsImRlc2MiLCJuYW1lbGVzcyIsInVzZUVmZmVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9uc3VjY2VzcyIsImdldEFsbCIsImxlbmd0aCIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImYiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyYW5nZSIsImdldFJhbmdlQXQiLCJhcmVhIiwiZ2V0UGFyZW50RWRpdG9yRmllbGQiLCJzdGFydENvbnRhaW5lciIsInRlc3RQYXJlbnRzIiwidGVzdFBhcmVudHNDc3MiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0SXRlbSIsImdldCIsInVuZGVmaW5lZCIsImkiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmaWVsZENoYW5nZSIsImZpZWxkIiwibWFwIiwiZGF0YXciLCJzIiwibm90ZSIsImNyZWF0ZWQiLCJnZXRUaW1lIiwidGFiIiwic2VsZWN0IiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImNsZWFyIiwiYWRkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsIk9wdGlvbnMiLCJiZWZvcmUiLCJhZnRlciIsInRpbWUiLCJob3VyIiwibWludXRlIiwibm9kZSIsInBhcmVudEVsZW0iLCJwYXJlbnROb2RlIiwiY29udGVudEVkaXRhYmxlIiwiZWRnZSIsImVsZW1OYW1lIiwibG9jYWxOYW1lIiwic3R5bGVOYW1lIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxPQUFELEVBQVUsaUJBQVYsRUFBNkIsYUFBN0IsRUFBNEMsZUFBNUMsRUFBNkQsYUFBN0QsRUFBNEUsU0FBNUUsRUFBdUYsUUFBdkYsRUFBaUcsY0FBakcsRUFBaUgsU0FBakgsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxDQUFDLENB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QUF1QjtBQUNyQjlGLFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQyxLQUFyQyxFQUE0QyxJQUE1QztBQUNBNkYsR0FBQztBQUNEOUYsVUFBUSxDQUFDQyxXQUFULENBQXFCLGNBQXJCLEVBQXFDLEtBQXJDLEVBQTRDLEtBQTVDO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLmFydGljbGVdLmY1OTkyODE2YTJkYmYzNmFmNmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzIGZyb20gJy4uLy4uL3N0eWxlcy90b29scy9ub3RlYm9vay5zdHlsJ1xyXG5pbXBvcnQgU3ZnIGZyb20gJy4uL1N2ZydcclxuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vZWxlbWVudHMvZnVsbHNjcmVlbidcclxuXHJcbmNvbnN0IGZvbnRzID0gW1wiQXJpYWxcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgXCJBcmlhbCBCbGFja1wiLCBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb3VyaWVyIE5ld1wiLCBcIkdlb3JnaWFcIiwgXCJJbXBhY3RcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJWZXJkYW5hXCJdXHJcbmNvbnN0IHNpemVzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddXHJcblxyXG5mdW5jdGlvbiBjdXJzaXZlU2V0KCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgnaXRhbGljJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gYm9sZFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2JvbGQnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bmRlclNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZGVyJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdGhyb3VnaFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0cmlrZXRocm91Z2gnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiB1bFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFVub3JkZXJlZExpc3QnLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBvbFNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydE9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdW5kbygpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZG8nLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiByZWRvKCkgeyBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVkbycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIGNsZWFyRm9ybWF0KCkge1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdyZW1vdmVGb3JtYXQnLCBmYWxzZSwgbnVsbClcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5saW5rJywgZmFsc2UsIG51bGwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50UigpIHsgd2luZG93LnByaW50KCkgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZWJvb2soeyBwcm9wcyB9KSB7XHJcbiAgY29uc3QgW2xpc3QsIGxpc3RDXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICBjb25zdCBbY3VycmVudCwgY3VycmVudENdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbmFtZSwgbmFtZUNdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbbW9kaWZ5LCBtb2RpZnlDXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGNvbnN0IFt1bmRlciwgdW5kZXJDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtib2xkLCBib2xkQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY3Vyc2l2ZSwgY3Vyc2l2ZUNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Rocm91Z2gsIHRocm91Z2hDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt1bCwgdWxDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtvbCwgb2xDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtiYWNrLCBiYWNrQ10gPSB1c2VTdGF0ZShcIiNmZmZmZmZcIilcclxuICBjb25zdCBbY29sb3IsIGNvbG9yQ10gPSB1c2VTdGF0ZShcIiMwMDAwMDBcIilcclxuICBjb25zdCBbZm9udCwgZm9udENdID0gdXNlU3RhdGUoXCJBcmlhbFwiKVxyXG4gIGNvbnN0IFtzaXplLCBzaXplQ10gPSB1c2VTdGF0ZSgyKVxyXG4gIGNvbnN0IFtzcGVsbCwgc3BlbGxDXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIGNvbnN0IGJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgZGIgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIGZ1bmN0aW9uIGJhY2tTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdoaWxpdGVDb2xvcicsIGZhbHNlLCBlLnRhcmdldC52YWx1ZSkpOyBiYWNrQyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIGNvbG9yU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9yZUNvbG9yJywgZmFsc2UsIGUudGFyZ2V0LnZhbHVlKSk7IGNvbG9yQyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIGZvbnRTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250TmFtZScsIGZhbHNlLCBlLnRhcmdldC52YWx1ZSkpOyBmb250QyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIHNpemVTZXQoZSkgeyBzZXRXaXRoQ3NzKCgpID0+IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdmb250U2l6ZScsIGZhbHNlLCBOdW1iZXIoZS50YXJnZXQudmFsdWUpKSk7IHNpemVDKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgZnVuY3Rpb24gc3BlbGxDaGVjaygpIHsgc3BlbGxDKHByZXYgPT4gIXByZXYpIH1cclxuXHJcbiAgLypmdW5jdGlvbiBkb3dubG9hZCgpIHtcclxuICAgIGNvbnN0IGQgPSBoamsoY29udGVudC5jdXJyZW50LmlubmVySFRNTClcclxuICAgIGNvbnNvbGUubG9nKGQpXHJcbiAgfSovXHJcbiAgZnVuY3Rpb24gZml4Q2hhbmdlcyhpZCkge1xyXG4gICAgaWYgKGlkID09PSBjdXJyZW50KSB7XHJcbiAgICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJkYXRhXCIsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwiZGF0YVwiKS5wdXQoY29udGVudC5jdXJyZW50LmlubmVySFRNTCwgY3VycmVudClcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcHV0Tm90ZShvYmopIHtcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJsaXN0XCIsIFwicmVhZHdyaXRlXCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5wdXQob2JqKVxyXG4gIH1cclxuICBmdW5jdGlvbiBkZWxldGVOb3RlKGlkKSB7XHJcbiAgICBsaXN0QyhwcmV2ID0+IHtcclxuICAgICAgY29uc3QgYXJyID0gcHJldi5maWx0ZXIobyA9PiBvLmlkICE9PSBpZClcclxuICAgICAgY3VycmVudEMoYXJyWzBdLmlkKVxyXG4gICAgICByZXR1cm4gYXJyXHJcbiAgICB9KVxyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLmRlbGV0ZShpZClcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcclxuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKVxyXG4gICAgY29uc3Qgb2JqID0geyBpZDogaWQsIG1vZGlmeTogaWQsIG5hbWU6IHByb3BzLmRlc2MubmFtZWxlc3MgfVxyXG4gICAgbGlzdEMocHJldiA9PiBbb2JqLCAuLi5wcmV2XSlcclxuICAgIHB1dE5vdGUob2JqKVxyXG4gICAgY3VycmVudEMoaWQpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiZGJub3Rlc1wiLCAxKVxyXG5cclxuICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnN0IGRiID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnZGF0YScpKSB7XHJcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2RhdGEnKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnbGlzdCcpKSB7XHJcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2xpc3QnLCB7IGtleVBhdGg6ICdpZCcgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZGIuY3VycmVudCA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5nZXRBbGwoKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5yZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICBsaXN0QyhlLnRhcmdldC5yZXN1bHQpXHJcbiAgICAgICAgICBjb25zdCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlQ3VycmVudCcpXHJcbiAgICAgICAgICBpZiAobG9jYWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRDKE51bWJlcihsb2NhbCkpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVOb3RlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZihlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcclxuICAgICAgICBjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApXHJcbiAgICAgICAgY29uc3QgYXJlYSA9IGdldFBhcmVudEVkaXRvckZpZWxkKHJhbmdlLnN0YXJ0Q29udGFpbmVyKVxyXG4gICAgICAgIGlmIChhcmVhID09PSBudWxsKSByZXR1cm5cclxuICAgICAgICBib2xkQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJiXCIpKVxyXG4gICAgICAgIHVuZGVyQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJ1XCIpKVxyXG4gICAgICAgIGN1cnNpdmVDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcImlcIikpXHJcbiAgICAgICAgdGhyb3VnaEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwic3RyaWtlXCIpKVxyXG4gICAgICAgIGZvbnRDKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnZm9udEZhbWlseScpKVxyXG4gICAgICAgIHN3aXRjaCAodGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdmb250U2l6ZScpKSB7XHJcbiAgICAgICAgICBjYXNlICd4LXNtYWxsJzogc2l6ZUMoMSk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdzbWFsbCc6IHNpemVDKDIpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnbWVkaXVtJzogc2l6ZUMoMyk7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdsYXJnZSc6IHNpemVDKDQpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneC1sYXJnZSc6IHNpemVDKDUpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAneHgtbGFyZ2UnOiBzaXplQyg2KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3h4eC1sYXJnZSc6IHNpemVDKDcpOyBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrQyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2JhY2tncm91bmRDb2xvcicpKVxyXG4gICAgICAgIGNvbG9yQyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2NvbG9yJykpXHJcbiAgICAgICAgb2xDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnb2wnKSlcclxuICAgICAgICB1bEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICd1bCcpKVxyXG4gICAgICAgIC8vcmFuZ2UuY2xvbmVDb250ZW50cygpXHJcbiAgICAgIH0gY2F0Y2ggeyB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdHJ5IHsgb3BlblJlcXVlc3QuY2xvc2UoKSB9IGNhdGNoIHsgfVxyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBmKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZUN1cnJlbnQnLCBjdXJyZW50KVxyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImRhdGFcIiwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShcImRhdGFcIikuZ2V0KGN1cnJlbnQpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5yZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgIH0gZWxzZSBjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICB9XHJcbiAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4gZml4Q2hhbmdlcyhjdXJyZW50KSwgMTAwMClcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGkpXHJcbiAgfSwgW2N1cnJlbnRdKVxyXG5cclxuICBmdW5jdGlvbiBmaWVsZENoYW5nZShpZCwgZmllbGQsIHZhbHVlKSB7XHJcbiAgICBsaXN0QyhwcmV2ID0+IHByZXYubWFwKG8gPT4ge1xyXG4gICAgICBpZiAoby5pZCA9PT0gaWQpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7IC4uLm8sIFtmaWVsZF06IHZhbHVlLCBtb2RpZnk6IERhdGUubm93KCkgfVxyXG4gICAgICAgIHB1dE5vdGUob2JqKVxyXG4gICAgICAgIHJldHVybiBvYmpcclxuICAgICAgfSBlbHNlIHJldHVybiBvXHJcbiAgICB9KSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGF3ID0gbGlzdC5maWx0ZXIobyA9PiBvLmlkID09PSBjdXJyZW50KVxyXG4gICAgaWYgKGRhdGF3Lmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcbiAgICBuYW1lQyhkYXRhd1swXS5uYW1lKVxyXG4gICAgbW9kaWZ5QyhkYXRhd1swXS5tb2RpZnkpXHJcbiAgfSwgW2xpc3QsIGN1cnJlbnRdKVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cy5ibG9ja30gcmVmPXtibG9ja30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5ub3RlfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtlID0+IGZpZWxkQ2hhbmdlKGN1cnJlbnQsIFwibmFtZVwiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLmNyZWF0ZWR9OiA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntnZXRUaW1lKGN1cnJlbnQpfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPntwcm9wcy5kZXNjLm1vZGlmeX06PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj4ge2dldFRpbWUobW9kaWZ5KX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZ1bGxzY3JlZW4gZWxlbT17YmxvY2suY3VycmVudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnVuZG99IG9uQ2xpY2s9e3VuZG99PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3VuZG8uc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIucmVkb30gb25DbGljaz17cmVkb30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvcmVkby5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c2VsZWN0IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuc2l6ZX0gdmFsdWU9e3NpemV9IG9uQ2hhbmdlPXtzaXplU2V0fSA+XHJcbiAgICAgICAgICAgIDxPcHRpb25zIGFycj17c2l6ZXN9IC8+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmZvbnR9IHZhbHVlPXtmb250fSBvbkNoYW5nZT17Zm9udFNldH0+XHJcbiAgICAgICAgICAgIDxPcHRpb25zIGFycj17Zm9udHN9IC8+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dW5kZXIgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnVuZGVyfSBvbkNsaWNrPXt1bmRlclNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvdW5kZXJsaW5lZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtib2xkID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5ib2xkfSBvbkNsaWNrPXtib2xkU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9ib2xkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3MuY3Vyc2l2ZX0gJHtjdXJzaXZlID8gcy5zZWxlY3QgOiAnJ31gfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmN1cnNpdmV9IG9uQ2xpY2s9e2N1cnNpdmVTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2l0YWxpYy5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzLnRocm91Z2h9ICR7dGhyb3VnaCA/IHMuc2VsZWN0IDogJyd9YH0gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi50aHJvdWdofSBvbkNsaWNrPXt0aHJvdWdoU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9zdHJpa2V0aHJvdWdoLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZpbGw6IGNvbG9yIH19PlxyXG4gICAgICAgICAgPFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvY29sb3Iuc3ZnXCIgLz5cclxuICAgICAgICAgIDxpbnB1dCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmNvbG9yfSB0eXBlPVwiY29sb3JcIiBvbkNoYW5nZT17Y29sb3JTZXR9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmFjayB9fT48L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLmJhY2t9IHR5cGU9XCJjb2xvclwiIG9uQ2hhbmdlPXtiYWNrU2V0fSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e29sID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5vbH0gb25DbGljaz17b2xTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2xpc3RfbnVtYmVyZWQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dWwgPyBzLnNlbGVjdCA6ICcnfSBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnVsfSBvbkNsaWNrPXt1bFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvbGlzdF9idWxsZXRlZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5jbGVhcn0gb25DbGljaz17Y2xlYXJGb3JtYXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2Zvcm1hdF9jbGVhci5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIHsvKjxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5kb3dubG9hZH0gb25DbGljaz17ZG93bmxvYWR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2Rvd25sb2FkLnN2Z1wiIC8+PC9idXR0b24+Ki99XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnByaW50fSBvbkNsaWNrPXtwcmludFJ9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3ByaW50LnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3NwZWxsID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5zcGVsbH0gb25DbGljaz17c3BlbGxDaGVja30+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvc3BlbGxjaGVjay5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjb250ZW50RWRpdGFibGU9e3RydWV9IHNwZWxsQ2hlY2s9e3NwZWxsfSByZWY9e2NvbnRlbnR9PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxpc3R9PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZU5vdGV9PlxyXG4gICAgICAgIHtwcm9wcy5kZXNjLmFkZH1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2xpc3QubWFwKG9iaiA9PiA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudCA9PT0gb2JqLmlkID8gcy5jdXJyZW50IDogJyd9XHJcbiAgICAgICAgICBrZXk9e29iai5pZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGN1cnJlbnRDKG9iai5pZCl9PlxyXG4gICAgICAgICAgPGRpdj57b2JqLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU5vdGUob2JqLmlkKX0+PFN2ZyBuYW1lPVwidmFyL3guc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXY+e25ldyBEYXRlKG9iai5tb2RpZnkpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuZnVuY3Rpb24gT3B0aW9ucyh7IGFyciwgYmVmb3JlLCBhZnRlciB9KSB7XHJcbiAgcmV0dXJuIDw+XHJcbiAgICB7YXJyLm1hcChvID0+IDxvcHRpb24ga2V5PXtvfSB2YWx1ZT17b30+e2JlZm9yZX0ge299IHthZnRlcn08L29wdGlvbj4pfVxyXG4gIDwvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lKHRpbWUpIHtcclxuICByZXR1cm4gbmV3IERhdGUodGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgaG91cjogXCJudW1lcmljXCIsIG1pbnV0ZTogXCJudW1lcmljXCIgfSlcclxufVxyXG5mdW5jdGlvbiBnZXRQYXJlbnRFZGl0b3JGaWVsZChub2RlKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBudWxsKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKHBhcmVudEVsZW0uY29udGVudEVkaXRhYmxlID09PSBcInRydWVcIikgcmV0dXJuIHBhcmVudEVsZW1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdGVzdFBhcmVudHMobm9kZSwgZWRnZSwgZWxlbU5hbWUpIHtcclxuICBsZXQgcGFyZW50RWxlbSA9IG5vZGVcclxuICB3aGlsZSAocGFyZW50RWxlbSkge1xyXG4gICAgcGFyZW50RWxlbSA9IHBhcmVudEVsZW0ucGFyZW50Tm9kZVxyXG4gICAgaWYgKHBhcmVudEVsZW0gPT09IGVkZ2UpIHJldHVybiBmYWxzZVxyXG4gICAgaWYgKHBhcmVudEVsZW0ubG9jYWxOYW1lID09PSBlbGVtTmFtZSkgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdGVzdFBhcmVudHNDc3Mobm9kZSwgZWRnZSwgc3R5bGVOYW1lKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBlZGdlKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKHBhcmVudEVsZW0uc3R5bGVbc3R5bGVOYW1lXSAhPT0gXCJcIikgcmV0dXJuIHBhcmVudEVsZW0uc3R5bGVbc3R5bGVOYW1lXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0V2l0aENzcyhmKSB7XHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3N0eWxlV2l0aENTUycsIGZhbHNlLCB0cnVlKVxyXG4gIGYoKVxyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgZmFsc2UpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9