import React from 'react';

const DefaultDisabledLegendText = ({legend, disabledTextColor, fontSize}) => (
  <span style={{ color: disabledTextColor, fontSize, }}>{legend.label}</span>
);

export default DefaultDisabledLegendText;
