"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DefaultDisabledLegendIcon = function DefaultDisabledLegendIcon(_ref) {
  var legend = _ref.legend,
      disabledColor = _ref.disabledColor,
      size = _ref.size;
  return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("svg", {
    style: {
      width: size.width,
      height: size.height
    },
    viewBox: "0 0 512 512",
    fill: disabledColor
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
  })));
};

var _default = DefaultDisabledLegendIcon;
exports["default"] = _default;