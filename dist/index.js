import React, { useState } from 'react';
import './styles.css';
import LegendItem from './LegendItem';
import { toCssClass } from './orientation';
import CircleLegendIcon from './icon/CircleLegendIcon';
import DefaultDisabledLegendText from './DefaultDisabledLegendText';
import DefaultDisabledLegendIcon from './DefaultDisabledLegendIcon';

const Legend = ({
  data,
  onClick,
  onHover,
  orientation,
  scrollable = false,
  maxCharacters = -1,
  icon = CircleLegendIcon,
  disabledIconColor,
  disabledTextColor,
  disabledText = DefaultDisabledLegendText,
  disabledIcon = DefaultDisabledLegendIcon
}) => {
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
    return /*#__PURE__*/React.createElement(LegendItem, {
      disabled: isSelected(item),
      index: index,
      key: item.label,
      item: item,
      onClick: handleOnClickEvent,
      onHover: onHover,
      disabledIconColor: disabledIconColor,
      disabledTextColor: disabledTextColor,
      icon: icon,
      maxCharacters: maxCharacters,
      disabledIcon: disabledIcon,
      disabledText: disabledText
    });
  }

  const orientationCssClass = toCssClass(orientation);
  const legendClassName = `legend ${orientationCssClass}${scrollable ? ' scrollable' : ' plain'}`;
  return /*#__PURE__*/React.createElement("ul", {
    className: legendClassName
  }, data.map(renderLegendItem));
};

export default Legend;