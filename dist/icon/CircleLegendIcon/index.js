"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * componente que renderiza um icone circular para um item da legenda
 * @param {legend: {index, label, color}, disabledColor: string} props
 */
var CircleLegendIcon = function CircleLegendIcon(_ref) {
  var legend = _ref.legend,
      disabledColor = _ref.disabledColor;
  return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "13",
    height: "13",
    fill: legend.disabled ? disabledColor : legend.color
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "6.5"
  })));
};

var _default = CircleLegendIcon;
exports["default"] = _default;