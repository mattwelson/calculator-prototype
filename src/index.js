import React from 'react';
import { render } from 'react-dom';
import CalculatorContainer from './Calculator/CalculatorContainer'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>    
    <CalculatorContainer />
  </div>
);

render(<App />, document.getElementById('root'));
