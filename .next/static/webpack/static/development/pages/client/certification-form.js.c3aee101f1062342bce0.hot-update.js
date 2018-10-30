webpackHotUpdate("static\\development\\pages\\client\\certification-form.js",{

/***/ "./pages/client/certification-form/applicantInfo.js":
/*!**********************************************************!*\
  !*** ./pages/client/certification-form/applicantInfo.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/box */ "./pages/ui/box.js");
/* harmony import */ var _ui_inputText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/inputText */ "./pages/ui/inputText.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/button */ "./pages/ui/button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var ApplicantInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ApplicantInfo, _React$Component);

  function ApplicantInfo(props) {
    var _this;

    _classCallCheck(this, ApplicantInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ApplicantInfo).call(this, props));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ApplicantInfo, [{
    key: "handleInputChange",
    value: function handleInputChange(e) {
      var name = e.target.name;
      var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      this.props.applicantInfoInputHandler(name, value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var supreme = this.props.supreme;
      var applicantInfo = this.props.applicantInfo;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        padding: "100px"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Applicant Form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Input Applicant Personal Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "First Name:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "firstName",
        onChange: this.handleInputChange,
        value: applicantInfo.firstName
      }), "\xA0\xA0\xA0\xA0 Middle Name:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "middleName",
        onChange: this.handleInputChange,
        value: applicantInfo.middleName
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Last Name:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "lastName",
        onChange: this.handleInputChange,
        value: applicantInfo.lastName
      }), "\xA0\xA0\xA0\xA0 Suffix:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "suffix",
        onChange: this.handleInputChange,
        value: applicantInfo.suffix
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Address1:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "address1",
        onChange: this.handleInputChange,
        value: applicantInfo.address1
      }), "\xA0\xA0\xA0\xA0 Address2:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "address2",
        onChange: this.handleInputChange,
        value: applicantInfo.address2
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Barangay:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "barangay",
        onChange: this.handleInputChange,
        value: applicantInfo.barangay
      }), "\xA0\xA0\xA0\xA0 City:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "city",
        onChange: this.handleInputChange,
        value: applicantInfo.city
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Province:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "province",
        onChange: this.handleInputChange,
        value: applicantInfo.province
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Gender:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "gender",
        onChange: this.handleInputChange,
        value: applicantInfo.gender
      }), "\xA0\xA0\xA0\xA0 Civil Status:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "civilStatus",
        onChange: this.handleInputChange,
        value: applicantInfo.civilStatus
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Date of Birth:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "dateBirth",
        onChange: this.handleInputChange,
        value: applicantInfo.dateBirth
      }), "\xA0\xA0\xA0\xA0 Birth Place:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "birthPlace",
        onChange: this.handleInputChange,
        value: applicantInfo.birthPlace
      }), "\xA0\xA0\xA0\xA0 Religion:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "religion",
        onChange: this.handleInputChange,
        value: applicantInfo.religion
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Height:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "height",
        onChange: this.handleInputChange,
        value: applicantInfo.height
      }), "\xA0\xA0\xA0\xA0 Weight:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "weight",
        onChange: this.handleInputChange,
        value: applicantInfo.weight
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Occupation:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "occupation",
        onChange: this.handleInputChange,
        value: applicantInfo.occupation
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Citizenship:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "citizenship",
        onChange: this.handleInputChange,
        value: applicantInfo.citizenship
      }), "\xA0\xA0\xA0\xA0 Contact No.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "contactNumber",
        onChange: this.handleInputChange,
        value: applicantInfo.contactNumber
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Purpose:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "purpose",
        onChange: this.handleInputChange,
        value: applicantInfo.purpose
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Residence Cert:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "residence",
        onChange: this.handleInputChange,
        value: applicantInfo.residence
      }), "\xA0\xA0\xA0\xA0 Issued At:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "certResidencyIssuedAt",
        onChange: this.handleInputChange,
        value: applicantInfo.certResidencyIssuedAt
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, "CTC Date Issued:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "ctcIssuedDate",
        onChange: this.handleInputChange,
        value: applicantInfo.ctcIssuedDate
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "button",
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.props.switchPageHandler();
        }
      }, "Confirm and Go to Next Tab"))));
    }
  }]);

  return ApplicantInfo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ApplicantInfo);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/client\\certification-form\\applicantInfo")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=certification-form.js.c3aee101f1062342bce0.hot-update.js.map