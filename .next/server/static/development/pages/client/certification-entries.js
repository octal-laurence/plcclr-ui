module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/router.js":
/*!******************************!*\
  !*** ./middleware/router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (path) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    fetch(path, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      console.log(response);

      if (response.status === 200) {
        return response;
      } else {
        var errorServer = new Error("Server Error");
        reject(errorServer);
      }
    }).then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data;
      resolve(data);
    }).catch(function (err) {
      console.log(err);
      "";
      reject(err);
    });
  });
});

/***/ }),

/***/ "./pages/client/certification-entries/index.js":
/*!*****************************************************!*\
  !*** ./pages/client/certification-entries/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../wrapper */ "./pages/wrapper/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout */ "./pages/layout/index.js");
/* harmony import */ var _components_navTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/navTabs */ "./pages/components/navTabs.js");
/* harmony import */ var _ui_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/box */ "./pages/ui/box.js");
/* harmony import */ var _ui_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/table */ "./pages/ui/table.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/button */ "./pages/ui/button.js");
/* harmony import */ var _middleware_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../middleware/router */ "./middleware/router.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var CertificationEntries =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CertificationEntries, _React$Component);

  function CertificationEntries(props) {
    var _this;

    _classCallCheck(this, CertificationEntries);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CertificationEntries).call(this, props));
    _this.state = {
      certificationEntries: {
        loading: false,
        hasFetchedAll: false,
        data: [],
        page: 1
      }
    };

    _this.listCertificationEntries = function () {
      _this.setState({
        certificationEntries: _objectSpread({}, _this.state.certificationEntries, {
          loading: true
        })
      });

      Object(_middleware_router__WEBPACK_IMPORTED_MODULE_10__["default"])("/police-clearance-certification/list", {
        pgSkip: _this.state.certificationEntries.page
      }).then(function (list) {
        _this.setState({
          certificationEntries: _objectSpread({}, _this.state.certificationEntries, {
            hasFetchedAll: !(list.length > 0),
            loading: false,
            page: _this.state.certificationEntries.page + 1,
            data: _toConsumableArray(_this.state.certificationEntries.data).concat(_toConsumableArray(list))
          })
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(CertificationEntries, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.listCertificationEntries();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var certificationEntries = this.state.certificationEntries;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        inSidebarNavLink: this.props.router.asPath
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, "List", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["Table"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableHead"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableRow"], null, ['Entry ID', 'Name', 'Station', 'Date Created', 'Status'].map(function (name, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableData"], {
          key: i
        }, name);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableBody"], null, " ", certificationEntries.data.map(function (entry) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableRow"], {
          key: entry['@rid']
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableData"], null, function (id) {
          var _id$split = id.split('#'),
              _id$split2 = _slicedToArray(_id$split, 2),
              rid = _id$split2[1];

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "/certification-preview?id=".concat(rid)
          }, rid);
        }(entry['@rid'])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableData"], null, entry['applicant']['fullName']), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableData"], null, entry['stationName']), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableData"], null, entry['dateCreated']), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableData"], null, entry['status']));
      }))), certificationEntries.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Loading..."), !certificationEntries.loading && (certificationEntries.hasFetchedAll ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_table__WEBPACK_IMPORTED_MODULE_8__["TableFooterMessage"], null, "No more result.") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        centered: true,
        onClick: function onClick() {
          _this2.listCertificationEntries();
        }
      }, "Load more")))));
    }
  }]);

  return CertificationEntries;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var InjectedRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(CertificationEntries);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(InjectedRouter);
});

/***/ }),

/***/ "./pages/components/container.js":
/*!***************************************!*\
  !*** ./pages/components/container.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref) {
  var addSideMarginForChildren = _ref.addSideMarginForChildren,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      dontGrow = _ref.dontGrow,
      disableFlex = _ref.disableFlex,
      display = _ref.display,
      flexDirection = _ref.flexDirection,
      flexGrow = _ref.flexGrow,
      fontFamily = _ref.fontFamily,
      fullHeight = _ref.fullHeight,
      marginTop = _ref.marginTop,
      maxWidth = _ref.maxWidth,
      pinBottom = _ref.pinBottom,
      position = _ref.position,
      width = _ref.width,
      withPadding = _ref.withPadding,
      withHorizontalPadding = _ref.withHorizontalPadding,
      withVerticalPadding = _ref.withVerticalPadding,
      otherProps = _objectWithoutProperties(_ref, ["addSideMarginForChildren", "backgroundColor", "color", "dontGrow", "disableFlex", "display", "flexDirection", "flexGrow", "fontFamily", "fullHeight", "marginTop", "maxWidth", "pinBottom", "position", "width", "withPadding", "withHorizontalPadding", "withVerticalPadding"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", otherProps);
}).attrs({
  addSideMarginForChildren: function addSideMarginForChildren(props) {
    return props.theme.margin[props.addSideMarginForChildren] || 0;
  },
  backgroundColor: function backgroundColor(props) {
    return props.backgroundColor || 'initial';
  },
  color: function color(props) {
    return props.color || 'initial';
  },
  display: function display(props) {
    return props.disableFlex ? 'block' : 'flex';
  },
  flexDirection: function flexDirection(props) {
    return props.flexDirection || 'column';
  },
  flexGrow: function flexGrow(props) {
    return props.dontGrow || props.width ? 0 : 1;
  },
  fontFamily: function fontFamily(props) {
    return props.fontFamily || 'inherit';
  },
  marginTop: function marginTop(props) {
    return props.pinBottom ? 'auto' : 'initial';
  },
  maxWidth: function maxWidth(props) {
    return props.maxWidth ? "".concat(props.maxWidth, "px") : 'initial';
  },
  width: function width(props) {
    return props.width ? "".concat(props.width, "px") : 'initial';
  },
  withPadding: function withPadding(props) {
    return props.theme.padding[props.withPadding] || 0;
  },
  withHorizontalPadding: function withHorizontalPadding(props) {
    return props.theme.padding[props.withHorizontalPadding] || 0;
  },
  withVerticalPadding: function withVerticalPadding(props) {
    return props.theme.padding[props.withVerticalPadding] || 0;
  }
}).withConfig({
  displayName: "container__Container",
  componentId: "sc-1c4rcb2-0"
})(["background-color:", ";color:", ";display:", ";flex-direction:", ";flex-grow:", ";font-family:", ";height:", ";margin-top:", ";max-width:", ";padding:", ";width:", ";", ""], function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.display;
}, function (props) {
  return props.flexDirection;
}, function (props) {
  return props.flexGrow;
}, function (props) {
  return props.fontFamily;
}, function (props) {
  return props.fullHeight ? '100%' : 'initial';
}, function (props) {
  return props.marginTop;
}, function (props) {
  return props.maxWidth;
}, function (props) {
  if (props.withPadding) {
    return props.withPadding;
  }

  var horizontalPadding = props.withHorizontalPadding;
  var verticalPadding = props.withVerticalPadding;
  return "".concat(verticalPadding, " ").concat(horizontalPadding);
}, function (props) {
  return props.width;
}, function (p) {
  return p.addSideMarginForChildren && "\n    > * {\n      &:not(:last-child) {\n        margin-right: ".concat(p.addSideMarginForChildren, ";\n      }\n    }\n  ");
});
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./pages/components/navLinks.js":
/*!**************************************!*\
  !*** ./pages/components/navLinks.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/styles/theme */ "./pages/ui/styles/theme.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./routes/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // UI



var NavList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "navLinks__NavList",
  componentId: "sc-10u8831-0"
})(["list-style-type:none;margin:0;padding:0;width:100%;background-color:", ";"], _ui_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.primary);
var Alink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "navLinks__Alink",
  componentId: "sc-10u8831-1"
})(["display:block;color:white;padding:8px 16px;text-decoration:none;", " &:hover{color:#000;border-style:groove;}"], function (p) {
  return p.active && "\n    color: #000;\n    background-color: #f1f1f1;\n  ";
});
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (_ref) {
  var _ref$router = _ref.router,
      router = _ref$router === void 0 ? {} : _ref$router;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavList, null, Object.entries(_routes__WEBPACK_IMPORTED_MODULE_4___default()()).filter(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        route = _ref3[0],
        data = _ref3[1];

    return data.hasOwnProperty("navLinks");
  }).map(function (_ref4, i) {
    var _ref5 = _slicedToArray(_ref4, 2),
        route = _ref5[0],
        data = _ref5[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alink, {
      href: route,
      active: router.asPath === route
    }, data.navLinks));
  }));
}));

/***/ }),

/***/ "./pages/components/navTabs.js":
/*!*************************************!*\
  !*** ./pages/components/navTabs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var NavTabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavTabs, _React$Component);

  function NavTabs(props) {
    _classCallCheck(this, NavTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavTabs).call(this, props));
  }

  _createClass(NavTabs, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav nav-tabs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link active",
        href: "#"
      }, "Active")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link disabled",
        href: "#"
      }, "Disabled")));
    }
  }]);

  return NavTabs;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavTabs);

/***/ }),

/***/ "./pages/components/sidebar.js":
/*!*************************************!*\
  !*** ./pages/components/sidebar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./pages/components/container.js");
/* harmony import */ var _navLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navLinks */ "./pages/components/navLinks.js");
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/header */ "./pages/ui/header.js");
/* harmony import */ var _ui_styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/styles/theme */ "./pages/ui/styles/theme.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // UI






var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this, props));
    _this.state = {
      isDropdownOpen: false
    };
    _this.toggleDropdown = _this.toggleDropdown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Sidebar, [{
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        backgroundColor: _ui_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.primary,
        color: _ui_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.white,
        style: {
          top: 0,
          bottom: 0,
          left: 0,
          position: 'fixed',
          zIndex: 100
        },
        width: 300
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        centered: true
      }, "PLCCLR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
        checkNavLink: true
      })));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./pages/layout/index.js":
/*!*******************************!*\
  !*** ./pages/layout/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ "./pages/components/sidebar.js");
/* harmony import */ var _ui_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/box */ "./pages/ui/box.js");






var Layout = function Layout(_ref) {
  var children = _ref.children,
      inSidebarNavLink = _ref.inSidebarNavLink;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "container-fluid",
    flexDirection: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "plcclr-ui-content",
    style: {
      'paddingLeft': '250px',
      width: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Account Name:"), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Admin Account"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "container",
    style: {
      'marginTop': '50px',
      'marginBottom': '100px'
    }
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/ui/box.js":
/*!*************************!*\
  !*** ./pages/ui/box.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Box = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref) {
  var flexDirection = _ref.flexDirection,
      justifyMe = _ref.justifyMe,
      position = _ref.position,
      borderStyle = _ref.borderStyle,
      backgroundColor = _ref.backgroundColor,
      height = _ref.height,
      width = _ref.width,
      otherProps = _objectWithoutProperties(_ref, ["flexDirection", "justifyMe", "position", "borderStyle", "backgroundColor", "height", "width"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", otherProps);
}).withConfig({
  displayName: "box__Box",
  componentId: "h351l5-0"
})(["display:", ";flex-direction:", ";border-style:", ";", " ", " ", " ", " ", ""], function (p) {
  return p.flexDirection ? "flex" : "block";
}, function (p) {
  return p.flexDirection || "column";
}, function (p) {
  return p.borderStyle;
}, function (p) {
  return p.height && "min-height: ".concat(p.height, "; max-height: ").concat(p.height, ";");
}, function (p) {
  return p.width && "min-width: ".concat(p.width, "; max-width: ").concat(p.width, ";");
}, function (p) {
  return p.backgroundColor && "background-color: ".concat(p.backgroundColor, ";");
}, function (p) {
  return p.position && "position: ".concat(p.position);
}, function (p) {
  return p.justifyMe && "\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ";
});
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./pages/ui/button.js":
/*!****************************!*\
  !*** ./pages/ui/button.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref) {
  var active = _ref.active,
      block = _ref.block,
      centered = _ref.centered,
      display = _ref.display,
      margin = _ref.margin,
      otherProps = _objectWithoutProperties(_ref, ["active", "block", "centered", "display", "margin"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", otherProps);
}).attrs({
  display: function display(props) {
    return props.block ? 'block' : 'inline-block';
  },
  margin: function margin(props) {
    return props.centered ? '0 auto' : 'initial';
  }
}).withConfig({
  displayName: "button__Button",
  componentId: "obiwv6-0"
})(["align-self:flex-start;background-color:", ";border:none;border-radius:", ";color:", ";display:", ";outline:none;margin:", ";padding:", " ", ";text-transform:uppercase;&:active,&:disabled{background-color:", ";}&:not(:last-child){margin-bottom:", "}&:hover{cursor:pointer;}"], function (props) {
  return props.active ? props.theme.colors.primaryDark : props.theme.colors.primary;
}, function (props) {
  return props.theme.misc.borderRadius;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.display;
}, function (props) {
  return props.margin;
}, function (props) {
  return props.theme.padding.sm;
}, function (props) {
  return props.theme.padding.md;
}, function (props) {
  return props.theme.colors.primaryLight;
}, function (props) {
  return props.theme.padding.sm;
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./pages/ui/header.js":
/*!****************************!*\
  !*** ./pages/ui/header.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/theme */ "./pages/ui/styles/theme.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Header(props) {
  var Component;
  var customProps = {};

  switch (props.size) {
    case 'sm':
      Component = 'h3';
      break;

    case 'md':
      Component = 'h2';
      break;

    case 'xxl':
      Component = 'h1';
      customProps = {
        fontSize: _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].font.size.xxl
      };
      break;

    default:
      Component = 'h1';
      break;
  }

  var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref) {
    var altFontFamily = _ref.altFontFamily,
        centered = _ref.centered,
        color = _ref.color,
        fontFamily = _ref.fontFamily,
        fontSize = _ref.fontSize,
        inheritColor = _ref.inheritColor,
        textAlign = _ref.textAlign,
        otherProps = _objectWithoutProperties(_ref, ["altFontFamily", "centered", "color", "fontFamily", "fontSize", "inheritColor", "textAlign"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, otherProps);
  }).attrs({
    color: function color(p) {
      return p.inheritColor === false ? p.theme.colors.primary : 'inherit';
    },
    fontFamily: function fontFamily(p) {
      return p.altFontFamily ? p.theme.font.family.secondary : p.theme.font.family.primary;
    },
    textAlign: function textAlign(p) {
      return p.centered ? 'center' : 'initial';
    }
  }).withConfig({
    displayName: "header__StyledHeader",
    componentId: "sc-1ahvyjh-0"
  })(["color:", ";font-family:", ";", " margin:0 0 ", ";text-align:", ";"], function (p) {
    return p.color;
  }, function (p) {
    return p.fontFamily;
  }, function (p) {
    return p.fontSize ? "font-size: ".concat(p.fontSize, ";") : '';
  }, function (p) {
    return p.theme.margin.md;
  }, function (p) {
    return p.textAlign;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, _extends({}, props, customProps), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/ui/styles/theme.js":
/*!**********************************!*\
  !*** ./pages/ui/styles/theme.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theme = {
  colors: {
    // Brand
    primary: '#1194A7',
    primaryLight: '#B0D1DA',
    primaryDark: '#0F7180',
    // Black / White
    black: '#01060A',
    offWhite: '#F3FAFC',
    white: '#FFFFFF',
    // Other
    red: '#F9796B',
    shadowColor: 'rgba(0, 0, 0, 0.2)'
  },
  font: {
    family: {
      primary: 'Tahoma, Geneva, sans-serif',
      secondary: '"Times New Roman", Times, serif'
    },
    size: {
      sm: '0.8em',
      md: '1em',
      lg: '1.5em',
      xl: '2em',
      xxl: '6em'
    }
  },
  margin: {
    xs: '0.5em',
    sm: '1em',
    md: '2em',
    lg: '3em'
  },
  misc: {
    borderRadius: '0.25em'
  },
  padding: {
    xs: '0.5em',
    sm: '0.75em',
    md: '2em',
    lg: '3em'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./pages/ui/table.js":
/*!***************************!*\
  !*** ./pages/ui/table.js ***!
  \***************************/
/*! exports provided: Table, TableBody, TableData, TableFooterMessage, TableHead, TableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableData", function() { return TableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFooterMessage", function() { return TableFooterMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHead", function() { return TableHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Table = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref) {
  var width = _ref.width,
      otherProps = _objectWithoutProperties(_ref, ["width"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", otherProps);
}).attrs({
  width: function width(props) {
    return props.fullWidth === false ? 'initial' : '100%';
  }
}).withConfig({
  displayName: "table__Table",
  componentId: "sc-8hmr5s-0"
})(["border-spacing:0 ", ";margin:0 0 ", ";width:", ";"], function (props) {
  return props.theme.margin.sm;
}, function (props) {
  return props.theme.margin.md;
}, function (props) {
  return props.width;
});
var TableBody = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tbody.withConfig({
  displayName: "table__TableBody",
  componentId: "sc-8hmr5s-1"
})([""]);
var TableData = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref2) {
  var center = _ref2.center,
      collapsed = _ref2.collapsed,
      paddingRight = _ref2.paddingRight,
      width = _ref2.width,
      otherProps = _objectWithoutProperties(_ref2, ["center", "collapsed", "paddingRight", "width"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", otherProps);
}).withConfig({
  displayName: "table__TableData",
  componentId: "sc-8hmr5s-2"
})(["text-align:", ";max-width:500px;width:", ";word-wrap:break-word;padding-right:", ";"], function (props) {
  return props.center ? 'center' : 'initial';
}, function (props) {
  return props.width || 'initial';
}, function (props) {
  return props.paddingRight ? props.paddingRight : 'initial';
});
var TableFooterMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "table__TableFooterMessage",
  componentId: "sc-8hmr5s-3"
})(["color:", ";text-align:center;"], function (props) {
  return props.theme.colors.primaryLight;
});
var TableHead = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.thead.withConfig({
  displayName: "table__TableHead",
  componentId: "sc-8hmr5s-4"
})(["color:", ";font-weight:bold;"], function (props) {
  return props.theme.colors.primary;
});
var TableRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tr.withConfig({
  displayName: "table__TableRow",
  componentId: "sc-8hmr5s-5"
})(["&:not(:last-child) td{border-bottom:1px solid ", ";padding-bottom:", ";}"], function (props) {
  return props.theme.colors.primaryLight;
}, function (props) {
  return props.theme.margin.sm;
});


/***/ }),

/***/ "./pages/wrapper/index.js":
/*!********************************!*\
  !*** ./pages/wrapper/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/styles/theme */ "./pages/ui/styles/theme.js");

 // SASS



/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _ui_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null));
});

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  return {
    '/': {
      page: '/'
    },
    '/certification-form': {
      page: '/client/certification-form',
      navLinks: 'certification-form'
    },
    '/certification-entries': {
      page: '/client/certification-entries',
      navLinks: 'certification-entries'
    },
    '/certification-preview': {
      page: '/client/certification-preview'
    },
    '/404': {
      page: '/404'
    },
    '/about': {
      page: '/about'
    }
  };
};

/***/ }),

/***/ 5:
/*!***********************************************************!*\
  !*** multi ./pages/client/certification-entries/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/client/certification-entries/index.js */"./pages/client/certification-entries/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=certification-entries.js.map