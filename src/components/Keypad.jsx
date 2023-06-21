import React from 'react';
import '../style/Keypad.css';
import '../style/App.css';
import { FaBackspace } from 'react-icons/fa';

export const Keypad = ({ handleKeypress }) => {
  const keys = [
    { label: '7', keyCode: '103' },
    { label: '8', keyCode: '104' },
    { label: '9', keyCode: '105' },
    { label: '4', keyCode: '100' },
    { label: '5', keyCode: '101' },
    { label: '6', keyCode: '102' },
    { label: '1', keyCode: '97' },
    { label: '2', keyCode: '98' },
    { label: '3', keyCode: '99' },
    { label: '0', keyCode: '96' },
    { label: '.', keyCode: '190' },
    { label: '=', keyCode: '187' },
  ];

  const symbols = [
    { label: <FaBackspace />, keyCode: '8', value: 'backspace' },
    { label: '÷', keyCode: '111', value: '/' },
    { label: 'x', keyCode: '106', value: '*' },
    { label: '-', keyCode: '109', value: '-' },
    { label: '+', keyCode: '107', value: '+' },
  ];

  const handleButtonClick = (keyCode, value) => {
    handleKeypress(Number(keyCode), value);
  };

  return (
    <div className="keypad">
      <div className="keys">
        {keys.map((key, index) => (
          <button key={index} onClick={() => handleButtonClick(key.keyCode, key.label)}>{key.label}</button>
        ))}
      </div>
      <div className="symbols">
        {symbols.map((symbol, index) => (
          <button key={index} onClick={() => handleButtonClick(symbol.keyCode, symbol.value)}>{symbol.label}</button>
        ))}
      </div>
    </div>
  );
};
