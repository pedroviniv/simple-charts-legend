import React from 'react';

const DefaultDisabledLegendText = ({legend, textDisabledColor}) => (
  <span style={{ color: textDisabledColor }}>{legend.label}</span>
);

export default DefaultDisabledLegendText;
