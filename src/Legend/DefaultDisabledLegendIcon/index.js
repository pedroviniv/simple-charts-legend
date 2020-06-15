import React from 'react';

const DefaultDisabledLegendIcon = ({legend, disabledColor}) => (
  <span>
    <svg width="13" height="13" fill={disabledColor}>
      <circle cx="6.5" cy="6.5" r="6.5" />
    </svg>
  </span>
);

export default DefaultDisabledLegendIcon;