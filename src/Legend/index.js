import React, { useState } from 'react';
import './styles.css';
import LegendItem from './LegendItem';
import { toCssClass } from './orientation';
import CircleLegendIcon from './icon/CircleLegendIcon';
import DefaultDisabledLegendText from './DefaultDisabledLegendText';
import DefaultDisabledLegendIcon from './DefaultDisabledLegendIcon';

function getHorizontalAlignClass(align) {
  return `horizontal-align-${align.toLowerCase()}`;
}

function getVerticalAlignClass(align) {
  return `vertical-align-${align.toLowerCase()}`;
}

const Legend = ({
  data, onClick, onHover, orientation,
  scrollable = false, maxCharacters = -1,
  horizontalAlign = 'start',
  verticalAlign='start',
  icon = CircleLegendIcon,
  disabledIconColor,
  disabledTextColor,
  disabledText = DefaultDisabledLegendText,
  disabledIcon = DefaultDisabledLegendIcon,
  fontSize, /* string */
  iconSize, /* { width: string, height: stirng } */
  fontColor,
  marginBottom }) => {

  const [selectedLegends, setSelectedLegends] = useState([]);

  /**
   * removes the given legend
   * @param {*} legend 
   */
  function removeLegend(legend) {
    const remainingLegends = selectedLegends.filter(selected => {
      return selected !== legend.label;
    });
    setSelectedLegends(remainingLegends);
  }

  /**
   * selects the given select
   * @param {*} legend 
   */
  function selectLegend(legend) {
    setSelectedLegends([...selectedLegends, legend.label]);
  }

  /**
   * verifies if the given legend is currently selected
   * @param {*} legend 
   */
  function isSelected(legend) {
    return selectedLegends.includes(legend.label);
  }

  /**
   * handles legend item on click event
   * @param {*} target 
   */
  function handleOnClickEvent(legend) {
    
    /**
     * if the given legend is selected, it will be removed for the state
     */
    if (isSelected(legend)) {
      removeLegend(legend);
    }
    /**
     * if not, the given legend will be added to the state
     */
    else {
      selectLegend(legend);
    }

    /**
     * propagates the onClick event to the parent
     */
    if (onClick) {
      onClick(legend);
    }
  }

  function renderLegendItem(item, index) {
    return (
      <LegendItem
        disabled={isSelected(item)}
        index={index}
        key={item.label}
        item={item}
        onClick={handleOnClickEvent}
        onHover={onHover}
        disabledIconColor={disabledIconColor}
        disabledTextColor={disabledTextColor}
        icon={icon}
        maxCharacters={maxCharacters}
        disabledIcon={disabledIcon}
        disabledText={disabledText}
        fontSize={fontSize}
        iconSize={iconSize}
        fontColor={fontColor}
        marginBottom={marginBottom}
      />
    );
  }

  const orientationCssClass = toCssClass(orientation);
  const horizontalAlignClass = getHorizontalAlignClass(horizontalAlign);
  const verticalAlignClass = getVerticalAlignClass(verticalAlign);

  const legendClassName = `legend ${orientationCssClass}${scrollable ? ' scrollable' : ' plain'} ${horizontalAlignClass} ${verticalAlignClass}`;

  return (
    <ul className={legendClassName}>
      {data.map(renderLegendItem)}
    </ul>
  );
};

export default Legend;