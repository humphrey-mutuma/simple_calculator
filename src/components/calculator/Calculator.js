import React from 'react';
import Display from './Display/Display';
import Keypad from  './Keypad/Keypad';
import './Calculator.css'

const Calculator = () => {
  return (
    <div className="Calculator">
      <h2>Calculator</h2>
      <Display />
      <Keypad />
    </div>
  )
}

export default Calculator;
