webpackHotUpdate("static\\development\\pages\\client\\certification-form.js",{

/***/ "./pages/client/certification-form/fingerPrint.js":
/*!********************************************************!*\
  !*** ./pages/client/certification-form/fingerPrint.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/box */ "./pages/ui/box.js");
/* harmony import */ var _ui_inputText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/inputText */ "./pages/ui/inputText.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/button */ "./pages/ui/button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var FingerPrint =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FingerPrint, _React$Component);

  function FingerPrint(props) {
    var _this;

    _classCallCheck(this, FingerPrint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FingerPrint).call(this, props));
    _this.state = {
      fingerPrintSubj: ''
    };
    _this.supreme = props.supreme;
    _this.renderFingerPrintProjector = _this.renderFingerPrintProjector.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FingerPrint, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.fingerPrintSubj !== '') {
        window.REGIONFINGERPRINT.onStart(); // console.log(window.REGIONFINGERPRINT.onStart());
      }
    }
  }, {
    key: "renderFingerPrintProjector",
    value: function renderFingerPrintProjector() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        flexDirection: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        width: "50%",
        borderStyle: "groove",
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        height: "400px",
        borderStyle: "groove"
      }, "left thumb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick(e) {
          _this2.setState({
            fingerPrintSubj: 'left'
          });
        }
      }, "Get Left Thumb"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        width: "50%",
        borderStyle: "groove",
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        height: "400px",
        borderStyle: "groove"
      }, "right thumb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick(e) {
          _this2.setState({
            fingerPrintSubj: 'right'
          });
        }
      }, "Get Right Thumb"))));
    }
  }, {
    key: "renderFingerPrintScanner",
    value: function renderFingerPrintScanner(thumb) {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick(e) {
          return _this3.setState({
            fingerPrintSubj: ''
          });
        }
      }, "close")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Scan ", thumb, " thumb")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        align: "center",
        borderStyle: "groove"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Select Reader :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control",
        id: "readersDropDown",
        onChange: function onChange(e) {
          // selectChangeEvent
          console.log(e);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "Scores"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Scan Quality : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "qualityInputBox",
        size: "20"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "content-capture"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "status"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "imagediv",
        borderStyle: "groove",
        height: "400px",
        width: "400px"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "contentButtons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "button",
        className: "btn btn-primary",
        id: "save",
        value: "Save",
        image: "rightprint"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "imageGallery"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Finger Print"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Require Finger Print to be taken.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), this.state.fingerPrintSubj === '' ? this.renderFingerPrintProjector() : this.renderFingerPrintScanner(this.state.fingerPrintSubj), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_box__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "button",
        onClick: function onClick(e) {
          _this4.supreme.switchPageHandler('applicantSignature');
        }
      }, "Confirm and Go to Next Tab")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/sdk/fingerPrintScanner/lib/jquery.min.js"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/sdk/fingerPrintScanner/lib/bootstrap.min.js"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/sdk/fingerPrintScanner/scripts/es6-shim.js"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/sdk/fingerPrintScanner/scripts/websdk.client.bundle.min.js"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/sdk/fingerPrintScanner/scripts/fingerprint.sdk.min.js"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/sdk/fingerPrintScanner/customApp.js"
      })));
    }
  }]);

  return FingerPrint;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FingerPrint);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/client\\certification-form\\fingerPrint")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=certification-form.js.ed078f3e6f8c5cbe4be7.hot-update.js.map