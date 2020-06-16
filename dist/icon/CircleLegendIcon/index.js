import React from 'react';
/**
 * componente que renderiza um icone circular para um item da legenda
 * @param {legend: {index, label, color}, disabledColor: string} props
 */

const CircleLegendIcon = ({
  legend,
  disabledColor
}) => /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("svg", {
  width: "13",
  height: "13",
  fill: legend.disabled ? disabledColor : legend.color
}, /*#__PURE__*/React.createElement("circle", {
  cx: "6.5",
  cy: "6.5",
  r: "6.5"
})));

export default CircleLegendIcon;