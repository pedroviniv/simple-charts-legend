import React from 'react';

const DefaultDisabledLegendText = ({legend, disabledTextColor}) => (
  <span style={{ color: disabledTextColor }}>{legend.label}</span>
);

export default DefaultDisabledLegendText;
