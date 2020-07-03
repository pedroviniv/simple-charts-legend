import React from 'react';

/**
 * componente que renderiza um icone circular para um item da legenda
 * @param {legend: {index, label, color}, disabledColor: string} props
 */
const CircleLegendIcon = ({legend, disabledColor, size }) => {
  
  const cx = size.width / 2;
  const cy = size.height / 2;
  const r = size.width / 2;

  console.log('size: ', size);
  console.log('cx: ', cx);
  console.log('cy: ', cy);
  console.log('r: ', r);
  
  return (
  <span>
    <svg style={{ width: size.width, height: size.height }} viewBox="0 0 512 512" fill={ legend.disabled ? disabledColor : legend.color }>
      <path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"></path>
    </svg>
  </span>
)};

export default CircleLegendIcon;