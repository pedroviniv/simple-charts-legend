"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DefaultDisabledLegendText = function DefaultDisabledLegendText(_ref) {
  var legend = _ref.legend,
      disabledTextColor = _ref.disabledTextColor;
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: disabledTextColor
    }
  }, legend.label);
};

var _default = DefaultDisabledLegendText;
exports["default"] = _default;