"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles.css");

var _LegendItem = _interopRequireDefault(require("./LegendItem"));

var _orientation = require("./orientation");

var _CircleLegendIcon = _interopRequireDefault(require("./icon/CircleLegendIcon"));

var _DefaultDisabledLegendText = _interopRequireDefault(require("./DefaultDisabledLegendText"));

var _DefaultDisabledLegendIcon = _interopRequireDefault(require("./DefaultDisabledLegendIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getHorizontalAlignClass(align) {
  return "horizontal-align-".concat(align.toLowerCase());
}

function getVerticalAlignClass(align) {
  return "vertical-align-".concat(align.toLowerCase());
}

var Legend = function Legend(_ref) {
  var data = _ref.data,
      onClick = _ref.onClick,
      onHover = _ref.onHover,
      orientation = _ref.orientation,
      _ref$scrollable = _ref.scrollable,
      scrollable = _ref$scrollable === void 0 ? false : _ref$scrollable,
      _ref$maxCharacters = _ref.maxCharacters,
      maxCharacters = _ref$maxCharacters === void 0 ? -1 : _ref$maxCharacters,
      _ref$horizontalAlign = _ref.horizontalAlign,
      horizontalAlign = _ref$horizontalAlign === void 0 ? 'start' : _ref$horizontalAlign,
      _ref$verticalAlign = _ref.verticalAlign,
      verticalAlign = _ref$verticalAlign === void 0 ? 'start' : _ref$verticalAlign,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? _CircleLegendIcon["default"] : _ref$icon,
      disabledIconColor = _ref.disabledIconColor,
      disabledTextColor = _ref.disabledTextColor,
      _ref$disabledText = _ref.disabledText,
      disabledText = _ref$disabledText === void 0 ? _DefaultDisabledLegendText["default"] : _ref$disabledText,
      _ref$disabledIcon = _ref.disabledIcon,
      disabledIcon = _ref$disabledIcon === void 0 ? _DefaultDisabledLegendIcon["default"] : _ref$disabledIcon,
      fontSize = _ref.fontSize,
      iconSize = _ref.iconSize,
      fontColor = _ref.fontColor,
      marginBottom = _ref.marginBottom;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedLegends = _useState2[0],
      setSelectedLegends = _useState2[1];
  /**
   * removes the given legend
   * @param {*} legend 
   */


  function removeLegend(legend) {
    var remainingLegends = selectedLegends.filter(function (selected) {
      return selected !== legend.label;
    });
    setSelectedLegends(remainingLegends);
  }
  /**
   * selects the given select
   * @param {*} legend 
   */


  function selectLegend(legend) {
    setSelectedLegends([].concat(_toConsumableArray(selectedLegends), [legend.label]));
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
    return /*#__PURE__*/_react["default"].createElement(_LegendItem["default"], {
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
      disabledText: disabledText,
      fontSize: fontSize,
      iconSize: iconSize,
      fontColor: fontColor,
      marginBottom: marginBottom
    });
  }

  var orientationCssClass = (0, _orientation.toCssClass)(orientation);
  var horizontalAlignClass = getHorizontalAlignClass(horizontalAlign);
  var verticalAlignClass = getVerticalAlignClass(verticalAlign);
  var legendClassName = "legend ".concat(orientationCssClass).concat(scrollable ? ' scrollable' : ' plain', " ").concat(horizontalAlignClass, " ").concat(verticalAlignClass);
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: legendClassName
  }, data.map(renderLegendItem));
};

var _default = Legend;
exports["default"] = _default;