import React from 'react';

/**
 * componente que renderiza um icone circular para um item da legenda
 * @param {legend: {index, label, color}, disabledColor: string} props
 */
const CircleLegendIcon = ({legend, disabledColor}) => (
  <span>
    <svg width="13" height="13" fill={ legend.disabled ? disabledColor : legend.color }>
      <circle cx="6.5" cy="6.5" r="6.5" />
    </svg>
  </span>
);

export default CircleLegendIcon;