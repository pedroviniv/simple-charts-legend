import React from 'react';
import './styles.css';
import DefaultDisabledLegendText from '../DefaultDisabledLegendText';
import DefaultDisabledLegendIcon from '../DefaultDisabledLegendIcon';

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
  return `coletas: ${data.numeric}. percentual: ${data.percent}%`;
}

function renderComponentOrContent(compOrContent, props) {
  let rendered = compOrContent;
  if (isFunction(compOrContent)) {
    rendered = compOrContent(props);
  }
  return rendered;
}

function renderIcon(icon, disabledIcon, legend, disabledColor) {

  let rendered;
  const props = { legend, disabledColor };

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
const LegendItem = ({
  index, disabled, item, onClick, onHover, icon,
  disabledIconColor,
  disabledTextColor,
  maxCharacters = -1,
  disabledText = DefaultDisabledLegendText,
  disabledIcon = DefaultDisabledLegendIcon }) => {

  const className = `legend-item${disabled ? ' disabled' : ''}`;

  const target = {
    ...item,
    index,
    disabled,
  };

  const renderedIcon = renderIcon(icon, disabledIcon, target, disabledIconColor);

  const maxCharactersStyle = maxCharacters === -1 ? {} : {maxWidth: `${maxCharacters}ch`};

  return (
    <li
      className={className}
      key={item.label}
      onClick={ev => onClick(target)}
      onMouseOver={ev => onHover({target, enter: true})}
      onMouseLeave={ev => onHover({target, enter: false})}
      title={renderTitle(item)}
    >
      <span className='legend-icon'>
        {renderedIcon}
      </span>
      <span className='legend-text' style={maxCharactersStyle}>
        { target.disabled ? disabledText({ legend: target, disabledTextColor }) : <span>{target.label}</span> }
      </span>
    </li>
  );
};

export default LegendItem;