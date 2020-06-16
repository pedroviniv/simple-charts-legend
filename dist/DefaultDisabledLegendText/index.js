import React from 'react';

const DefaultDisabledLegendText = ({
  legend,
  disabledTextColor
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    color: disabledTextColor
  }
}, legend.label);

export default DefaultDisabledLegendText;