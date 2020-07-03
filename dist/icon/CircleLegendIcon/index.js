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
      disabledColor = _ref.disabledColor,
      size = _ref.size;
  var cx = size.width / 2;
  var cy = size.height / 2;
  var r = size.width / 2;
  console.log('size: ', size);
  console.log('cx: ', cx);
  console.log('cy: ', cy);
  console.log('r: ', r);
  return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("svg", {
    style: {
      width: size.width,
      height: size.height
    },
    viewBox: "0 0 512 512",
    fill: legend.disabled ? disabledColor : legend.color
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
  })));
};

var _default = CircleLegendIcon;
exports["default"] = _default;