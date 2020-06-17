"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DefaultDisabledLegendIcon = function DefaultDisabledLegendIcon(_ref) {
  var legend = _ref.legend,
      disabledColor = _ref.disabledColor;
  return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "13",
    height: "13",
    fill: disabledColor
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "6.5"
  })));
};

var _default = DefaultDisabledLegendIcon;
exports["default"] = _default;