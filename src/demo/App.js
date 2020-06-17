import React from 'react';
import { generate } from './dataGenerator';
import Legend from '../Legend';
import { HORIZONTAL, VERTICAL } from '../Legend/orientation';
import CircleLegendIcon from '../Legend/icon/CircleLegendIcon';
import DefaultDisabledLegendText from '../Legend/DefaultDisabledLegendText';
import DefaultDisabledLegendIcon from '../Legend/DefaultDisabledLegendIcon';

const legendData = generate(3);

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        display: 'flex', flexDirection: 'column',
        width: '800px', height: '400px'}}>

        <Legend
          data={legendData} // [{label,color}]
          horizontalAlign='center' // alinha os itens horizontalmente. poder ser: start|end|center
          verticalAlign='start' // alinha os itens verticalmente. pode ser: start|end|center
          onClick={(legend) => {}} // evento disparado quando uma legenda é clicada. legend: {label,index,color,disabled}
          onHover={(legend) => {}} // evento disparado quando o cursor está sobre uma legenda. legend: {label,index,color,disabled}
          orientation={HORIZONTAL} // 'HORIZONTAL' | 'VERTICAL'
          icon={CircleLegendIcon} // componente que renderiza o icone
          scrollable={false} // se a legenda pode deve ser "scrollavel" ou não 
          maxCharacters={999} // quantidade máxima de caracteres por label (se não passar nada, não ter max)
          disabledIconColor='#d3d3d3' // cor do icone da legenda quando ela está desativada
          disabledIcon={DefaultDisabledLegendIcon} // componente utilizado para renderizar o icone quando a legenda está desativada, default is DefaultDisabledLegendIcon
          disabledTextColor='#d3d3d3' // cor do texto da legenda quando ela está desativada
          disabledText={DefaultDisabledLegendText} // componente utilizado para renderizar o texto da legenda quando esta está desativada, default is DefaultDisabledLegendText
        />
      </header>
    </div>
  );
}

export default App;
