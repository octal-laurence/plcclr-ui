webpackHotUpdate("static\\development\\pages\\client\\certification-form.js",{

/***/ "./api_services/plcclr-api.js":
/*!************************************!*\
  !*** ./api_services/plcclr-api.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Plcclr =
/*#__PURE__*/
function () {
  function Plcclr(opts) {
    _classCallCheck(this, Plcclr);

    this._baseURL = "http://localhost:8000";
    this._apiKey = "Wwdg29Kvf2SE7Jb7aN3tXIkh9caXFCSZ7RQ7eqrnG7Gh6/DqxNayAc9jFFBEh7SuOZ2p0MH3DC8o1eWSvW9SmcpW1+Arq4Ims9Fon+AIL/i9Zp1eFkWrOiMche5D2t8Ur8+z5LYt5xME/ynPlXUDonww2tISFsEOoBVCSURaeCE=";
  }

  _createClass(Plcclr, [{
    key: "request",
    value: function request(path) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return ["".concat(this._baseURL, "/").concat(path), {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Wwdg29Kvf2SE7Jb7aN3tXIkh9caXFCSZ7RQ7eqrnG7Gh6/DqxNayAc9jFFBEh7SuOZ2p0MH3DC8o1eWSvW9SmcpW1+Arq4Ims9Fon+AIL/i9Zp1eFkWrOiMche5D2t8Ur8+z5LYt5xME/ynPlXUDonww2tISFsEOoBVCSURaeCE='
        }
      }];
    }
  }, {
    key: "post",
    value: function post(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          url = _ref2[0],
          opts = _ref2[1];

      return fetch(url, _objectSpread({}, opts, {
        method: 'POST'
      }));
    }
  }, {
    key: "newApplicantEntry",
    value: function newApplicantEntry(applicant) {
      return this.post(this.request('PoliceClearanceCertification/new', applicant));
    }
  }]);

  return Plcclr;
}();

/* harmony default export */ __webpack_exports__["default"] = (Plcclr);

/***/ })

})
//# sourceMappingURL=certification-form.js.42448876c8cbd439bb0b.hot-update.js.map