import React from 'react';

const DefaultDisabledLegendIcon = ({legend, disabledColor, size}) => (
  <span>
    <svg style={{ width: size.width, height: size.height }} viewBox="0 0 512 512" fill={disabledColor}>
    <path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"></path>
    </svg>
  </span>
);

export default DefaultDisabledLegendIcon;