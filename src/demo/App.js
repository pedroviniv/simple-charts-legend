import React from 'react';
import { generate } from './dataGenerator';
import Legend from '../Legend';
import { HORIZONTAL } from '../Legend/orientation';
import CircleLegendIcon from '../Legend/icon/CircleLegendIcon';
import DefaultDisabledLegendText from '../Legend/DefaultDisabledLegendText';
import DefaultDisabledLegendIcon from '../Legend/DefaultDisabledLegendIcon';

const legendData = generate(50);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example</h1>
        <Legend
          data={legendData} // [{label,color}]
          onClick={(legend) => {}} // desnecessário pro relatório
          onHover={(event) => {}} // desnecessário pro relatório
          orientation={HORIZONTAL} // 'HORIZONTAL' | 'VERTICAL'
          icon={CircleLegendIcon} // componente que renderiza o icone
          scrollable={false} // pro relatório este atributo deve ser false
          maxCharacters={999} // quantidade máxima de caracteres por label (se não passar nada, não ter max)
          disabledIconColor='#d3d3d3'
          disabledIcon={DefaultDisabledLegendIcon}
          disabledTextIcon='#d3d3d3'
          disabledText={DefaultDisabledLegendText}
        />
      </header>
    </div>
  );
}

export default App;
