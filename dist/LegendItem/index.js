"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

var _DefaultDisabledLegendText = _interopRequireDefault(require("../DefaultDisabledLegendText"));

var _DefaultDisabledLegendIcon = _interopRequireDefault(require("../DefaultDisabledLegendIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * dado um objeto, verifica se este é uma função.
 * @param {*} object 
 */
function isFunction(object) {
  return object && {}.toString.call(object) === '[object Function]';
}
/**
 * renderiza o conteudo textual exibido quando o mouse está sobre a legenda,
 * exibindo o num. de coletas e o valor percentual.
 * @param {*} data 
 */


function renderTitle(data) {
  return "coletas: ".concat(data.numeric, ". percentual: ").concat(data.percent, "%");
}

function renderComponentOrContent(compOrContent, props) {
  var rendered = compOrContent;

  if (isFunction(compOrContent)) {
    rendered = compOrContent(props);
  }

  return rendered;
}

function renderIcon(icon, disabledIcon, legend, disabledColor) {
  var rendered;
  var props = {
    legend: legend,
    disabledColor: disabledColor
  };

  if (!legend.disabled) {
    rendered = renderComponentOrContent(icon, props);
  } else {
    rendered = renderComponentOrContent(disabledIcon, props);
  }

  return rendered;
}
/**
 * componente que renderiza um item de legenda
 * @param {*} props propriedades do componente que inclue:
 *  - index (posição deste item de legenda na lista de legendas)
 *  - disabled (flag indicando se esta legenda está desabilitada ou não)
 *  - item (dado a ser renderizado no item)
 *  - onClick (callback executado quando é realizado um click sobre o item)
 *  - onHover (callback executado quando o cursor do mouse está sobre o item)
 *  - icon (componente ou qualquer conteudo que renderiza um icone baseado num context)
 *  - iconDisabledColor (cor que o ícone deve renderizar quando a legenda estiver desabilitada)
 *  - maxCharacters (num. maximo de caracteres permitido para cada item de legenda, caso este atributo
 * não seja definido, o num de caracters n é limitado)
 */


var LegendItem = function LegendItem(_ref) {
  var index = _ref.index,
      disabled = _ref.disabled,
      item = _ref.item,
      _onClick = _ref.onClick,
      onHover = _ref.onHover,
      icon = _ref.icon,
      disabledIconColor = _ref.disabledIconColor,
      disabledTextColor = _ref.disabledTextColor,
      _ref$maxCharacters = _ref.maxCharacters,
      maxCharacters = _ref$maxCharacters === void 0 ? -1 : _ref$maxCharacters,
      _ref$disabledText = _ref.disabledText,
      disabledText = _ref$disabledText === void 0 ? _DefaultDisabledLegendText["default"] : _ref$disabledText,
      _ref$disabledIcon = _ref.disabledIcon,
      disabledIcon = _ref$disabledIcon === void 0 ? _DefaultDisabledLegendIcon["default"] : _ref$disabledIcon;
  var className = "legend-item".concat(disabled ? ' disabled' : '');

  var target = _objectSpread(_objectSpread({}, item), {}, {
    index: index,
    disabled: disabled
  });

  var renderedIcon = renderIcon(icon, disabledIcon, target, disabledIconColor);
  var maxCharactersStyle = maxCharacters === -1 ? {} : {
    maxWidth: "".concat(maxCharacters, "ch")
  };
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: className,
    key: item.label,
    onClick: function onClick(ev) {
      return _onClick(target);
    },
    onMouseOver: function onMouseOver(ev) {
      return onHover({
        target: target,
        enter: true
      });
    },
    onMouseLeave: function onMouseLeave(ev) {
      return onHover({
        target: target,
        enter: false
      });
    },
    title: renderTitle(item)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend-icon"
  }, renderedIcon), /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend-text",
    style: maxCharactersStyle
  }, target.disabled ? disabledText({
    legend: target,
    disabledTextColor: disabledTextColor
  }) : /*#__PURE__*/_react["default"].createElement("span", null, target.label)));
};

var _default = LegendItem;
exports["default"] = _default;