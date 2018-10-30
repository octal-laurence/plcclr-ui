webpackHotUpdate("static\\development\\pages\\client\\certification-form.js",{

/***/ "./pages/client/certification-form/index.js":
/*!**************************************************!*\
  !*** ./pages/client/certification-form/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../wrapper */ "./pages/wrapper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./pages/components/layout.js");
/* harmony import */ var _components_navTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navTabs */ "./pages/components/navTabs.js");
/* harmony import */ var _ui_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/box */ "./pages/ui/box.js");
/* harmony import */ var _ui_inputText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/inputText */ "./pages/ui/inputText.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/button */ "./pages/ui/button.js");
/* harmony import */ var _applicantInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./applicantInfo */ "./pages/client/certification-form/applicantInfo.js");
/* harmony import */ var _idPhoto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./idPhoto */ "./pages/client/certification-form/idPhoto.js");
/* harmony import */ var _fingerPrint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fingerPrint */ "./pages/client/certification-form/fingerPrint.js");
/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signature */ "./pages/client/certification-form/signature.js");
/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./summary */ "./pages/client/certification-form/summary.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
















var CertificationForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CertificationForm, _React$Component);

  function CertificationForm(props) {
    var _this;

    _classCallCheck(this, CertificationForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CertificationForm).call(this, props));
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
    }, {
      tab: 'summary',
      label: 'Summary'
    }];
    _this.state = {
      applicantInfo: {
        firstName: '',
        lastName: '',
        middleName: '',
        suffix: '',
        address1: '',
        address2: '',
        barangay: '',
        city: '',
        province: '',
        gender: '',
        civilStatus: '',
        dateBirth: '',
        birthPlace: '',
        religion: '',
        height: '',
        weight: '',
        occupation: '',
        citizenship: '',
        contactNumber: '',
        purpose: '',
        certResidency: '',
        certResidencyIssuedAt: '',
        ctcIssuedDate: ''
      },
      applicantIDPhoto: {
        blob: ''
      },
      applicantFingerPrint: {
        leftThumb: '',
        rightThumb: ''
      },
      applicantSignature: {
        blob: ''
      },
      navTabs: _this.navTabs.reduce(function (json, elem) {
        json[elem.tab] = 0;
        return json;
      }, {})
    };
    _this.renderNavTabs = _this.renderNavTabs.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.applicantInfoInputHandler = _this.applicantInfoInputHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.switchTabHandler = _this.switchPageHandler.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitApplicantEntry = _this.submitApplicantEntry.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CertificationForm, [{
    key: "applicantInfoInputHandler",
    value: function applicantInfoInputHandler(field, value) {
      this.setState({
        applicantInfo: _objectSpread({}, this.state.applicantInfo, _defineProperty({}, field, value))
      });
    }
  }, {
    key: "switchPageHandler",
    value: function switchPageHandler(tab) {
      var navTabsStat = this.navTabs.reduce(function (json, elem) {
        json[elem.tab] = 0;
        return json;
      }, {});
      this.setState({
        navTabs: _objectSpread({}, navTabsStat, _defineProperty({}, tab, 1))
      });
    }
  }, {
    key: "submitApplicantEntry",
    value: function submitApplicantEntry() {
      var applicantData = _objectSpread({}, this.state.applicantInfo, {
        applicantIDPhoto: this.state.applicantIDPhoto.blob,
        applicantFingerPrint: this.state.applicantFingerPrint,
        applicantSignature: this.state.applicantSignature.blob
      });

      fetch('http://localhost:8000/PoliceClearanceCertification/testpush', {
        body: JSON.stringify({
          sampledata: 'ace'
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(function (result) {
        console.log(result);
      }).catch(function (err) {
        console.log(err);
      }); // fetch(url, {
      //   body: JSON.stringify(params),
      //   headers: {
      //     'Content-Type': 'application/json',
      //     ...customHeaders,
      //   },
      //   method,
      // })
      // console.log(fetch);
      // console.log(applicantData);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.switchPageHandler('applicantInfo');
    }
  }, {
    key: "renderNavTabs",
    value: function renderNavTabs() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "nav nav-tabs"
      }, this.navTabs.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: "".concat(item.tab),
          className: "nav-item",
          onClick: function onClick(e) {
            _this2.switchPageHandler(item.tab);
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link ".concat(_this2.state.navTabs[item.tab] === 1 && "active"),
          href: "#"
        }, item.label));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "container"
      }, this.renderNavTabs(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "formContents",
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          e.preventDefault();

          _this3.submitApplicantEntry();
        }
      }, this.state.navTabs.applicantInfo === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_applicantInfo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        applicantInfoInputHandler: this.applicantInfoInputHandler,
        switchPageHandler: function switchPageHandler() {
          return _this3.switchPageHandler(_this3.navTabs[1].tab);
        },
        applicantInfo: this.state.applicantInfo
      }), this.state.navTabs.applicantIDPhoto === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_idPhoto__WEBPACK_IMPORTED_MODULE_10__["default"], {
        supreme: this
      }), this.state.navTabs.applicantFingerPrint === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fingerPrint__WEBPACK_IMPORTED_MODULE_11__["default"], {
        supreme: this
      }), this.state.navTabs.applicantSignature === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signature__WEBPACK_IMPORTED_MODULE_12__["default"], {
        supreme: this
      }), this.state.navTabs.summary === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_summary__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        align: "right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit"
      }, "Save"))))));
    }
  }]);

  return CertificationForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var InjectedRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(CertificationForm);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(InjectedRouter);
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/client\\certification-form\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=certification-form.js.aac44f9f4d4aae851e2b.hot-update.js.map