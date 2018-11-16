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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/client/certification-preview/index.js":
/*!*****************************************************!*\
  !*** ./pages/client/certification-preview/index.js ***!
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
/* harmony import */ var _middleware_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../middleware/router */ "./middleware/router.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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











var CertificationPreview =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CertificationPreview, _React$Component);

  function CertificationPreview(props) {
    var _this;

    _classCallCheck(this, CertificationPreview);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CertificationPreview).call(this, props));
    _this.state = {
      applicant: {
        error: '',
        loading: false,
        data: {
          applicant: {},
          certification: {}
        }
      }
    };
    _this.navTabs = [{
      tab: 'applicantInfo',
      label: 'Start'
    }, {
      tab: 'applicantIDPhoto',
      label: 'ID Photo'
    }, {
      tab: 'applicantFingerPrint',
      label: 'Finger Print'
    }, {
      tab: 'applicantSignature',
      label: 'Signature'
    }];
    _this.certificationInfo = {
      machineId: {
        label: 'machine#'
      },
      station: {
        label: 'station'
      },
      stationName: {
        label: 'station name '
      },
      dateCreated: {
        label: 'date file'
      },
      dateUpdated: {
        label: 'date update'
      },
      purpose: {
        label: 'purpose'
      },
      remarks: {
        label: 'remarks'
      },
      status: {
        label: 'status'
      }
    };
    _this.applicantInfo = {
      firstName: {
        label: 'first name'
      },
      lastName: {
        label: 'last name'
      },
      middleName: {
        label: 'middle name'
      },
      suffix: {
        label: 'suffix'
      },
      address: {
        label: 'address'
      },
      gender: {
        label: 'gender'
      },
      civilStatus: {
        label: 'civil status'
      },
      citizenship: {
        label: 'citizenship'
      },
      dateBirth: {
        label: 'birth date'
      },
      birthPlace: {
        label: 'birth place'
      },
      height: {
        label: 'height'
      },
      weight: {
        label: 'weight'
      }
    };

    _this.getApplicantEntry = function (id) {
      var setApplicantData = function setApplicantData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _this.setState({
          applicant: _objectSpread({}, _this.state.applicant, state)
        }, function (state) {
          return console.log(_this.state.applicant);
        });
      };

      setApplicantData({
        loading: true
      });
      Object(_middleware_router__WEBPACK_IMPORTED_MODULE_8__["default"])("/police-clearance-certification/getRecord", {
        id: "#".concat(id)
      }).then(function (data) {
        var applicant = data.applicant,
            address = data.address,
            certification = _objectWithoutProperties(data, ["applicant", "address"]);

        setApplicantData({
          loading: false,
          data: {
            certification: certification,
            applicant: _objectSpread({}, applicant, {
              address: function (_ref) {
                var address1 = _ref.address1,
                    address2 = _ref.address2,
                    barangay = _ref.barangay,
                    city = _ref.city,
                    province = _ref.province;
                return "".concat(address1, " ").concat(address2, " ").concat(barangay, ", ").concat(city, " ").concat(province);
              }(address)
            })
          }
        });
      }).catch(function (err) {
        setApplicantData({
          loading: false,
          error: err.message
        });
      });
    }.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(CertificationPreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var query = this.props.router.query;
      this.getApplicantEntry(query.id);
    }
  }, {
    key: "render",
    value: function render() {
      var applicant = this.state.applicant;
      console.log(applicant);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Certification Preview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        align: "center"
      }, "Clearance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), applicant.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Loading...") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, Object.entries(this.certificationInfo).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            k = _ref3[0],
            v = _ref3[1];

        return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: k
        }, v.label, " :\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, applicant.data.certification[k] || null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)].map(function (elem) {
          return elem;
        });
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        align: "center"
      }, "Applicant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), applicant.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Loading...") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, Object.entries(this.applicantInfo).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            k = _ref5[0],
            v = _ref5[1];

        return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: k
        }, v.label, " :\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, applicant.data.applicant[k] || null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)].map(function (elem) {
          return elem;
        });
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        align: "center"
      }, "Identification"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: "400px",
        borderStyle: "groove",
        flexDirection: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        width: "50%",
        height: "100%",
        position: "relative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        justifyMe: true,
        width: "400px"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: applicant.data.applicant.applicantIDPhoto && applicant.data.applicant.applicantIDPhoto,
        style: {
          display: 'block',
          width: '100%',
          height: 'auto'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        width: "50%",
        height: "100%",
        position: "relative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        justifyMe: true,
        width: "300px"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        width: "100%",
        height: "150px",
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        flexDirection: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "leftThumb",
        borderStyle: "groove",
        height: "150px",
        width: "50%"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: applicant.data.applicant.applicantFingerPrints && "data:image/png;base64,".concat(applicant.data.applicant.applicantFingerPrints.leftThumb),
        style: {
          display: 'block',
          width: 'auto',
          height: '100%'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "leftThumb",
        borderStyle: "groove",
        height: "150px",
        width: "50%"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: applicant.data.applicant.applicantFingerPrints && "data:image/png;base64,".concat(applicant.data.applicant.applicantFingerPrints.rightThumb),
        style: {
          display: 'block',
          width: 'auto',
          height: '100%'
        }
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        width: "100%",
        height: "150px",
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        borderStyle: "groove",
        width: "200px"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: applicant.data.applicant.applicantSignature && applicant.data.applicant.applicantSignature,
        style: {
          display: 'block',
          width: '100%',
          height: 'auto'
        }
      }))))))))));
    }
  }]);

  return CertificationPreview;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var InjectedRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(CertificationPreview);
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
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/header */ "./pages/ui/header.js");
/* harmony import */ var _ui_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/styles/theme */ "./pages/ui/styles/theme.js");
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
        backgroundColor: _ui_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.primary,
        color: _ui_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.white,
        style: {
          top: 0,
          bottom: 0,
          left: 0,
          position: 'fixed',
          zIndex: 100
        },
        width: 300
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        centered: true
      }, "PLCCLR"));
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




 // const Layout = (props) => (
//   <div className="container-fluid">
//     <div className="container">
//       <div>
//         <label>Account Name:</label>&nbsp;<span>Admin Account</span>
//       </div>
//     </div><hr/>
//     <div
//       className="container"
//       style={{
//         'marginTop': '50px',
//         'marginBottom': '100px'
//       }}
//     >
//       { props.children }
//     </div>
//   </div>
// );

var Layout = function Layout(props) {
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
  }, props.children)));
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

/***/ 3:
/*!***********************************************************!*\
  !*** multi ./pages/client/certification-preview/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/client/certification-preview/index.js */"./pages/client/certification-preview/index.js");


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
//# sourceMappingURL=certification-preview.js.map