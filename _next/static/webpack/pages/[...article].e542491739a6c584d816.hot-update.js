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
          var local = Number(localStorage.getItem('noteCurrent'));
          if (e.target.result.some(function (obj) {
            return obj.id === local;
          })) return currentC(local);
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
    if (current === null || current === "undefined") return createNote();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9Ob3RlYm9vay5qcyJdLCJuYW1lcyI6WyJmb250cyIsInNpemVzIiwiY3Vyc2l2ZVNldCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJib2xkU2V0IiwidW5kZXJTZXQiLCJ0aHJvdWdoU2V0IiwidWxTZXQiLCJvbFNldCIsInVuZG8iLCJyZWRvIiwiY2xlYXJGb3JtYXQiLCJwcmludFIiLCJ3aW5kb3ciLCJwcmludCIsIk5vdGVib29rIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxpc3QiLCJsaXN0QyIsImN1cnJlbnQiLCJjdXJyZW50QyIsIm5hbWUiLCJuYW1lQyIsIm1vZGlmeSIsIm1vZGlmeUMiLCJ1bmRlciIsInVuZGVyQyIsImJvbGQiLCJib2xkQyIsImN1cnNpdmUiLCJjdXJzaXZlQyIsInRocm91Z2giLCJ0aHJvdWdoQyIsInVsIiwidWxDIiwib2wiLCJvbEMiLCJiYWNrIiwiYmFja0MiLCJjb2xvciIsImNvbG9yQyIsImZvbnQiLCJmb250QyIsInNpemUiLCJzaXplQyIsInNwZWxsIiwic3BlbGxDIiwiYmxvY2siLCJ1c2VSZWYiLCJkYiIsImNvbnRlbnQiLCJiYWNrU2V0IiwiZSIsInNldFdpdGhDc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yU2V0IiwiZm9udFNldCIsInNpemVTZXQiLCJOdW1iZXIiLCJzcGVsbENoZWNrIiwicHJldiIsImZpeENoYW5nZXMiLCJpZCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJpbm5lckhUTUwiLCJwdXROb3RlIiwib2JqIiwiZGVsZXRlTm90ZSIsImFyciIsImZpbHRlciIsIm8iLCJsZW5ndGgiLCJjcmVhdGVOb3RlIiwiRGF0ZSIsIm5vdyIsImRlc2MiLCJuYW1lbGVzcyIsInVzZUVmZmVjdCIsIm9wZW5SZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsInJlc3VsdCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9uc3VjY2VzcyIsImdldEFsbCIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNvbWUiLCJmIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2UiLCJnZXRSYW5nZUF0IiwiYXJlYSIsImdldFBhcmVudEVkaXRvckZpZWxkIiwic3RhcnRDb250YWluZXIiLCJ0ZXN0UGFyZW50cyIsInRlc3RQYXJlbnRzQ3NzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEl0ZW0iLCJnZXQiLCJ1bmRlZmluZWQiLCJpIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZmllbGRDaGFuZ2UiLCJmaWVsZCIsIm1hcCIsImRhdGF3IiwicyIsIm5vdGUiLCJjcmVhdGVkIiwiZ2V0VGltZSIsInRhYiIsInNlbGVjdCIsImZpbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGVhciIsImFkZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJPcHRpb25zIiwiYmVmb3JlIiwiYWZ0ZXIiLCJ0aW1lIiwiaG91ciIsIm1pbnV0ZSIsIm5vZGUiLCJwYXJlbnRFbGVtIiwicGFyZW50Tm9kZSIsImNvbnRlbnRFZGl0YWJsZSIsImVkZ2UiLCJlbGVtTmFtZSIsImxvY2FsTmFtZSIsInN0eWxlTmFtZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQUMsT0FBRCxFQUFVLGlCQUFWLEVBQTZCLGFBQTdCLEVBQTRDLGVBQTVDLEVBQTZELGFBQTdELEVBQTRFLFNBQTVFLEVBQXVGLFFBQXZGLEVBQWlHLGNBQWpHLEVBQWlILFNBQWpILENBQWQ7QUFDQSxJQUFNQyxLQUFLLEdBQUcs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QUdBLFVBQVUsQ0FBQ0MsVUFBeEI7QUFDQSxRQUFJRCxVQUFVLEtBQUtHLElBQW5CLEVBQXlCLE9BQU8sSUFBUDtBQUN6QixRQUFJSCxVQUFVLENBQUNPLEtBQVgsQ0FBaUJELFNBQWpCLE1BQWdDLEVBQXBDLEVBQXdDLE9BQU9OLFVBQVUsQ0FBQ08sS0FBWCxDQUFpQkQsU0FBakIsQ0FBUDtBQUN6QztBQUNGOztBQUVELFNBQVM5RixVQUFULENBQW9CMkMsQ0FBcEIsRUFBdUI7QUFDckIvRixVQUFRLENBQUNDLFdBQVQsQ0FBcUIsY0FBckIsRUFBcUMsS0FBckMsRUFBNEMsSUFBNUM7QUFDQThGLEdBQUM7QUFDRC9GLFVBQVEsQ0FBQ0MsV0FBVCxDQUFxQixjQUFyQixFQUFxQyxLQUFyQyxFQUE0QyxLQUE1QztBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1suLi5hcnRpY2xlXS5lNTQyNDkxNzM5YTZjNTg0ZDgxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcyBmcm9tICcuLi8uLi9zdHlsZXMvdG9vbHMvbm90ZWJvb2suc3R5bCdcclxuaW1wb3J0IFN2ZyBmcm9tICcuLi9TdmcnXHJcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2VsZW1lbnRzL2Z1bGxzY3JlZW4nXHJcblxyXG5jb25zdCBmb250cyA9IFtcIkFyaWFsXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFwiQXJpYWwgQmxhY2tcIiwgXCJDb21pYyBTYW5zIE1TXCIsIFwiQ291cmllciBOZXdcIiwgXCJHZW9yZ2lhXCIsIFwiSW1wYWN0XCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVmVyZGFuYVwiXVxyXG5jb25zdCBzaXplcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3XVxyXG5cclxuZnVuY3Rpb24gY3Vyc2l2ZVNldCgpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2l0YWxpYycsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIGJvbGRTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdib2xkJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdW5kZXJTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRlcicsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHRocm91Z2hTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHJpa2V0aHJvdWdoJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gdWxTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gb2xTZXQoKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcsIGZhbHNlLCBudWxsKSB9XHJcbmZ1bmN0aW9uIHVuZG8oKSB7IGRvY3VtZW50LmV4ZWNDb21tYW5kKCd1bmRvJywgZmFsc2UsIG51bGwpIH1cclxuZnVuY3Rpb24gcmVkbygpIHsgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3JlZG8nLCBmYWxzZSwgbnVsbCkgfVxyXG5mdW5jdGlvbiBjbGVhckZvcm1hdCgpIHtcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgncmVtb3ZlRm9ybWF0JywgZmFsc2UsIG51bGwpXHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VubGluaycsIGZhbHNlLCBudWxsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFIoKSB7IHdpbmRvdy5wcmludCgpIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVib29rKHsgcHJvcHMgfSkge1xyXG4gIGNvbnN0IFtsaXN0LCBsaXN0Q10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgY29uc3QgW2N1cnJlbnQsIGN1cnJlbnRDXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW25hbWUsIG5hbWVDXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW21vZGlmeSwgbW9kaWZ5Q10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbdW5kZXIsIHVuZGVyQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYm9sZCwgYm9sZENdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1cnNpdmUsIGN1cnNpdmVDXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0aHJvdWdoLCB0aHJvdWdoQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdWwsIHVsQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbb2wsIG9sQ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYmFjaywgYmFja0NdID0gdXNlU3RhdGUoXCIjZmZmZmZmXCIpXHJcbiAgY29uc3QgW2NvbG9yLCBjb2xvckNdID0gdXNlU3RhdGUoXCIjMDAwMDAwXCIpXHJcbiAgY29uc3QgW2ZvbnQsIGZvbnRDXSA9IHVzZVN0YXRlKFwiQXJpYWxcIilcclxuICBjb25zdCBbc2l6ZSwgc2l6ZUNdID0gdXNlU3RhdGUoMilcclxuICBjb25zdCBbc3BlbGwsIHNwZWxsQ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICBjb25zdCBibG9jayA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IGRiID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgY29udGVudCA9IHVzZVJlZihudWxsKVxyXG5cclxuICBmdW5jdGlvbiBiYWNrU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnaGlsaXRlQ29sb3InLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgYmFja0MoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBjb2xvclNldChlKSB7IHNldFdpdGhDc3MoKCkgPT4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvcmVDb2xvcicsIGZhbHNlLCBlLnRhcmdldC52YWx1ZSkpOyBjb2xvckMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBmb250U2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udE5hbWUnLCBmYWxzZSwgZS50YXJnZXQudmFsdWUpKTsgZm9udEMoZS50YXJnZXQudmFsdWUpIH1cclxuICBmdW5jdGlvbiBzaXplU2V0KGUpIHsgc2V0V2l0aENzcygoKSA9PiBkb2N1bWVudC5leGVjQ29tbWFuZCgnZm9udFNpemUnLCBmYWxzZSwgTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkpOyBzaXplQyhlLnRhcmdldC52YWx1ZSkgfVxyXG4gIGZ1bmN0aW9uIHNwZWxsQ2hlY2soKSB7IHNwZWxsQyhwcmV2ID0+ICFwcmV2KSB9XHJcblxyXG4gIC8qZnVuY3Rpb24gZG93bmxvYWQoKSB7XHJcbiAgICBjb25zdCBkID0gaGprKGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwpXHJcbiAgICBjb25zb2xlLmxvZyhkKVxyXG4gIH0qL1xyXG4gIGZ1bmN0aW9uIGZpeENoYW5nZXMoaWQpIHtcclxuICAgIGlmIChpZCA9PT0gY3VycmVudCkge1xyXG4gICAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwiZGF0YVwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImRhdGFcIikucHV0KGNvbnRlbnQuY3VycmVudC5pbm5lckhUTUwsIGN1cnJlbnQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHB1dE5vdGUob2JqKSB7XHJcbiAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcImxpc3RcIikucHV0KG9iailcclxuICB9XHJcbiAgZnVuY3Rpb24gZGVsZXRlTm90ZShpZCkge1xyXG4gICAgbGlzdEMocHJldiA9PiB7XHJcbiAgICAgIGNvbnN0IGFyciA9IHByZXYuZmlsdGVyKG8gPT4gby5pZCAhPT0gaWQpXHJcbiAgICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY3JlYXRlTm90ZSgpXHJcbiAgICAgIH0gZWxzZSBjdXJyZW50QyhhcnJbMF0uaWQpXHJcblxyXG4gICAgICByZXR1cm4gYXJyXHJcbiAgICB9KVxyXG4gICAgZGIuY3VycmVudC50cmFuc2FjdGlvbihcImxpc3RcIiwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoXCJsaXN0XCIpLmRlbGV0ZShpZClcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcclxuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKVxyXG4gICAgY29uc3Qgb2JqID0geyBpZDogaWQsIG1vZGlmeTogaWQsIG5hbWU6IHByb3BzLmRlc2MubmFtZWxlc3MgfVxyXG4gICAgbGlzdEMocHJldiA9PiBbb2JqLCAuLi5wcmV2XSlcclxuICAgIHB1dE5vdGUob2JqKVxyXG4gICAgY3VycmVudEMoaWQpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvcGVuUmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiZGJub3Rlc1wiLCAxKVxyXG5cclxuICAgIG9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnN0IGRiID0gZS50YXJnZXQucmVzdWx0XHJcbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnZGF0YScpKSB7XHJcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2RhdGEnKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnbGlzdCcpKSB7XHJcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ2xpc3QnLCB7IGtleVBhdGg6ICdpZCcgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZGIuY3VycmVudCA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgICBkYi5jdXJyZW50LnRyYW5zYWN0aW9uKFwibGlzdFwiLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwibGlzdFwiKS5nZXRBbGwoKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5yZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICBsaXN0QyhlLnRhcmdldC5yZXN1bHQpXHJcbiAgICAgICAgICBjb25zdCBsb2NhbCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZUN1cnJlbnQnKSlcclxuICAgICAgICAgIGlmIChlLnRhcmdldC5yZXN1bHQuc29tZShvYmogPT4gb2JqLmlkID09PSBsb2NhbCkpIHJldHVybiBjdXJyZW50Qyhsb2NhbClcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlTm90ZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGYoZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpXHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKVxyXG4gICAgICAgIGNvbnN0IGFyZWEgPSBnZXRQYXJlbnRFZGl0b3JGaWVsZChyYW5nZS5zdGFydENvbnRhaW5lcilcclxuICAgICAgICBpZiAoYXJlYSA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgICAgICAgYm9sZEModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwiYlwiKSlcclxuICAgICAgICB1bmRlckModGVzdFBhcmVudHMocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsIFwidVwiKSlcclxuICAgICAgICBjdXJzaXZlQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgXCJpXCIpKVxyXG4gICAgICAgIHRocm91Z2hDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCBcInN0cmlrZVwiKSlcclxuICAgICAgICBmb250Qyh0ZXN0UGFyZW50c0NzcyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ2ZvbnRGYW1pbHknKSlcclxuICAgICAgICBzd2l0Y2ggKHRlc3RQYXJlbnRzQ3NzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAnZm9udFNpemUnKSkge1xyXG4gICAgICAgICAgY2FzZSAneC1zbWFsbCc6IHNpemVDKDEpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnc21hbGwnOiBzaXplQygyKTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ21lZGl1bSc6IHNpemVDKDMpOyBicmVha1xyXG4gICAgICAgICAgY2FzZSAnbGFyZ2UnOiBzaXplQyg0KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3gtbGFyZ2UnOiBzaXplQyg1KTsgYnJlYWtcclxuICAgICAgICAgIGNhc2UgJ3h4LWxhcmdlJzogc2l6ZUMoNik7IGJyZWFrXHJcbiAgICAgICAgICBjYXNlICd4eHgtbGFyZ2UnOiBzaXplQyg3KTsgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja0ModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdiYWNrZ3JvdW5kQ29sb3InKSlcclxuICAgICAgICBjb2xvckModGVzdFBhcmVudHNDc3MocmFuZ2Uuc3RhcnRDb250YWluZXIsIGFyZWEsICdjb2xvcicpKVxyXG4gICAgICAgIG9sQyh0ZXN0UGFyZW50cyhyYW5nZS5zdGFydENvbnRhaW5lciwgYXJlYSwgJ29sJykpXHJcbiAgICAgICAgdWxDKHRlc3RQYXJlbnRzKHJhbmdlLnN0YXJ0Q29udGFpbmVyLCBhcmVhLCAndWwnKSlcclxuICAgICAgICAvL3JhbmdlLmNsb25lQ29udGVudHMoKVxyXG4gICAgICB9IGNhdGNoIHsgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZilcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHRyeSB7IG9wZW5SZXF1ZXN0LmNsb3NlKCkgfSBjYXRjaCB7IH1cclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZilcclxuICAgIH1cclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGNyZWF0ZU5vdGUoKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVDdXJyZW50JywgY3VycmVudClcclxuICAgIGRiLmN1cnJlbnQudHJhbnNhY3Rpb24oXCJkYXRhXCIsIFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJkYXRhXCIpLmdldChjdXJyZW50KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQucmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb250ZW50LmN1cnJlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICB9IGVsc2UgY29udGVudC5jdXJyZW50LmlubmVySFRNTCA9IGUudGFyZ2V0LnJlc3VsdFxyXG4gICAgfVxyXG4gICAgY29uc3QgaSA9IHNldEludGVydmFsKCgpID0+IGZpeENoYW5nZXMoY3VycmVudCksIDEwMDApXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpKVxyXG4gIH0sIFtjdXJyZW50XSlcclxuXHJcbiAgZnVuY3Rpb24gZmllbGRDaGFuZ2UoaWQsIGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgbGlzdEMocHJldiA9PiBwcmV2Lm1hcChvID0+IHtcclxuICAgICAgaWYgKG8uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0geyAuLi5vLCBbZmllbGRdOiB2YWx1ZSwgbW9kaWZ5OiBEYXRlLm5vdygpIH1cclxuICAgICAgICBwdXROb3RlKG9iailcclxuICAgICAgICByZXR1cm4gb2JqXHJcbiAgICAgIH0gZWxzZSByZXR1cm4gb1xyXG4gICAgfSkpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhdyA9IGxpc3QuZmlsdGVyKG8gPT4gby5pZCA9PT0gY3VycmVudClcclxuICAgIGlmIChkYXRhdy5sZW5ndGggPT09IDApIHJldHVyblxyXG4gICAgbmFtZUMoZGF0YXdbMF0ubmFtZSlcclxuICAgIG1vZGlmeUMoZGF0YXdbMF0ubW9kaWZ5KVxyXG4gIH0sIFtsaXN0LCBjdXJyZW50XSlcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3MuYmxvY2t9IHJlZj17YmxvY2t9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3Mubm90ZX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17ZSA9PiBmaWVsZENoYW5nZShjdXJyZW50LCBcIm5hbWVcIiwgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5jcmVhdGVkfTogPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57Z2V0VGltZShjdXJyZW50KX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcHMuZGVzYy5tb2RpZnl9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+IHtnZXRUaW1lKG1vZGlmeSl9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGdWxsc2NyZWVuIGVsZW09e2Jsb2NrLmN1cnJlbnR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi51bmRvfSBvbkNsaWNrPXt1bmRvfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci91bmRvLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnJlZG99IG9uQ2xpY2s9e3JlZG99PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3JlZG8uc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdCBkYXRhLXRvb2x0aXA9e3Byb3BzLmRlc2MudGFiLnNpemV9IHZhbHVlPXtzaXplfSBvbkNoYW5nZT17c2l6ZVNldH0gPlxyXG4gICAgICAgICAgICA8T3B0aW9ucyBhcnI9e3NpemVzfSAvPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzZWxlY3QgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5mb250fSB2YWx1ZT17Zm9udH0gb25DaGFuZ2U9e2ZvbnRTZXR9PlxyXG4gICAgICAgICAgICA8T3B0aW9ucyBhcnI9e2ZvbnRzfSAvPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3VuZGVyID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi51bmRlcn0gb25DbGljaz17dW5kZXJTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3VuZGVybGluZWQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Ym9sZCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuYm9sZH0gb25DbGljaz17Ym9sZFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvYm9sZC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzLmN1cnNpdmV9ICR7Y3Vyc2l2ZSA/IHMuc2VsZWN0IDogJyd9YH0gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5jdXJzaXZlfSBvbkNsaWNrPXtjdXJzaXZlU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9pdGFsaWMuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7cy50aHJvdWdofSAke3Rocm91Z2ggPyBzLnNlbGVjdCA6ICcnfWB9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIudGhyb3VnaH0gb25DbGljaz17dGhyb3VnaFNldH0+PFN2ZyBuYW1lPVwidGV4dF9mb3JtYXR0ZXIvc3RyaWtldGhyb3VnaC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBmaWxsOiBjb2xvciB9fT5cclxuICAgICAgICAgIDxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2NvbG9yLnN2Z1wiIC8+XHJcbiAgICAgICAgICA8aW5wdXQgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5jb2xvcn0gdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e2NvbG9yU2V0fSAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2sgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXQgZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5iYWNrfSB0eXBlPVwiY29sb3JcIiBvbkNoYW5nZT17YmFja1NldH0gLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtvbCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIub2x9IG9uQ2xpY2s9e29sU2V0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9saXN0X251bWJlcmVkLnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3VsID8gcy5zZWxlY3QgOiAnJ30gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi51bH0gb25DbGljaz17dWxTZXR9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL2xpc3RfYnVsbGV0ZWQuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuY2xlYXJ9IG9uQ2xpY2s9e2NsZWFyRm9ybWF0fT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9mb3JtYXRfY2xlYXIuc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgICB7Lyo8YnV0dG9uIGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuZG93bmxvYWR9IG9uQ2xpY2s9e2Rvd25sb2FkfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9kb3dubG9hZC5zdmdcIiAvPjwvYnV0dG9uPiovfVxyXG4gICAgICAgIDxidXR0b24gZGF0YS10b29sdGlwPXtwcm9wcy5kZXNjLnRhYi5wcmludH0gb25DbGljaz17cHJpbnRSfT48U3ZnIG5hbWU9XCJ0ZXh0X2Zvcm1hdHRlci9wcmludC5zdmdcIiAvPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzcGVsbCA/IHMuc2VsZWN0IDogJyd9IGRhdGEtdG9vbHRpcD17cHJvcHMuZGVzYy50YWIuc3BlbGx9IG9uQ2xpY2s9e3NwZWxsQ2hlY2t9PjxTdmcgbmFtZT1cInRleHRfZm9ybWF0dGVyL3NwZWxsY2hlY2suc3ZnXCIgLz48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY29udGVudEVkaXRhYmxlPXt0cnVlfSBzcGVsbENoZWNrPXtzcGVsbH0gcmVmPXtjb250ZW50fT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5saXN0fT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVOb3RlfT5cclxuICAgICAgICB7cHJvcHMuZGVzYy5hZGR9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtsaXN0Lm1hcChvYmogPT4gPGRpdiBjbGFzc05hbWU9e2N1cnJlbnQgPT09IG9iai5pZCA/IHMuY3VycmVudCA6ICcnfVxyXG4gICAgICAgICAga2V5PXtvYmouaWR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjdXJyZW50QyhvYmouaWQpfT5cclxuICAgICAgICAgIDxkaXY+e29iai5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVOb3RlKG9iai5pZCl9PjxTdmcgbmFtZT1cInZhci94LnN2Z1wiIC8+PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2PntuZXcgRGF0ZShvYmoubW9kaWZ5KS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59XHJcbmZ1bmN0aW9uIE9wdGlvbnMoeyBhcnIsIGJlZm9yZSwgYWZ0ZXIgfSkge1xyXG4gIHJldHVybiA8PlxyXG4gICAge2Fyci5tYXAobyA9PiA8b3B0aW9uIGtleT17b30gdmFsdWU9e299PntiZWZvcmV9IHtvfSB7YWZ0ZXJ9PC9vcHRpb24+KX1cclxuICA8Lz5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIGhvdXI6IFwibnVtZXJpY1wiLCBtaW51dGU6IFwibnVtZXJpY1wiIH0pXHJcbn1cclxuZnVuY3Rpb24gZ2V0UGFyZW50RWRpdG9yRmllbGQobm9kZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gbnVsbCkgcmV0dXJuIG51bGxcclxuICAgIGlmIChwYXJlbnRFbGVtLmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJ0cnVlXCIpIHJldHVybiBwYXJlbnRFbGVtXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRlc3RQYXJlbnRzKG5vZGUsIGVkZ2UsIGVsZW1OYW1lKSB7XHJcbiAgbGV0IHBhcmVudEVsZW0gPSBub2RlXHJcbiAgd2hpbGUgKHBhcmVudEVsZW0pIHtcclxuICAgIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudE5vZGVcclxuICAgIGlmIChwYXJlbnRFbGVtID09PSBlZGdlKSByZXR1cm4gZmFsc2VcclxuICAgIGlmIChwYXJlbnRFbGVtLmxvY2FsTmFtZSA9PT0gZWxlbU5hbWUpIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRlc3RQYXJlbnRzQ3NzKG5vZGUsIGVkZ2UsIHN0eWxlTmFtZSkge1xyXG4gIGxldCBwYXJlbnRFbGVtID0gbm9kZVxyXG4gIHdoaWxlIChwYXJlbnRFbGVtKSB7XHJcbiAgICBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnROb2RlXHJcbiAgICBpZiAocGFyZW50RWxlbSA9PT0gZWRnZSkgcmV0dXJuIG51bGxcclxuICAgIGlmIChwYXJlbnRFbGVtLnN0eWxlW3N0eWxlTmFtZV0gIT09IFwiXCIpIHJldHVybiBwYXJlbnRFbGVtLnN0eWxlW3N0eWxlTmFtZV1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFdpdGhDc3MoZikge1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdzdHlsZVdpdGhDU1MnLCBmYWxzZSwgdHJ1ZSlcclxuICBmKClcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnc3R5bGVXaXRoQ1NTJywgZmFsc2UsIGZhbHNlKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==