import React, { useState } from 'react';
import '../App.css';
import Form from './Form';
import Result from './Result';
import Button from './Button';

function TempApp() {
  const [input, setInput] = useState('');
  const [temp, setTemp] = useState('celcius');
  const [inputValidation, setInputValidation] = useState(false);
  const [result, setResult] = useState([]);

  const handleChange = value => {
    setInput(value);
  };

  const handleSelect = value => {
    setTemp(value);
    setResult([]);
  };

  const showAlert = () => {
    setInputValidation(true);
    setResult([]);

    setTimeout(() => {
      setInputValidation(false);
    }, 3000);
  };

  const fromKelvinConverter = input => {
    let val = parseInt(input);
    let faranheit = `${Math.floor(
      (9 / 5) * (val - 273.15) + 32
    )} ${String.fromCharCode(8457)}`;

    let celcius = `${Math.floor(val - 273.15)} ${String.fromCharCode(8451)}`;
    setResult([faranheit, celcius]);
  };

  const fromFaranheitConverter = input => {
    let val = parseInt(input);
    let kelvin = `${Math.floor(((val + 459.67) * 5) / 9)} ${String.fromCharCode(
      8490
    )}`;

    let celcius = `${Math.floor(((val - 32) * 5) / 9)} ${String.fromCharCode(
      8451
    )}`;
    setResult([kelvin, celcius]);
  };

  const fromCelciusConverter = input => {
    let val = parseInt(input);
    let faranheit = `${Math.floor(val * (9 / 5) + 32)} ${String.fromCharCode(
      8457
    )}`;

    let kelvin = `${Math.floor(val + 273.15)} ${String.fromCharCode(8490)}`;
    setResult([faranheit, kelvin]);
  };

  const handleDisplay = e => {
    e.preventDefault();

    if (isNaN(input) || input === '') {
      showAlert();
    }

    if (temp === 'kelvin' && !isNaN(input) && input !== '') {
      fromKelvinConverter(input);
    } else if (temp === 'faranheit' && !isNaN(input) && input !== '') {
      fromFaranheitConverter(input);
    } else if (temp === 'celcius' && !isNaN(input) && input !== '') {
      fromCelciusConverter(input);
    }

    setInput('');
  };

  return (
    <div className='container'>
      <h3>Temperature Converter</h3>
      <main>
        <Form
          inputLabel='Degrees'
          selectLabel='Type'
          value={input}
          selectValue={temp}
          eve={handleChange}
          disp={handleDisplay}
          sel={handleSelect}
        />
        {inputValidation && (
          <span className='alert'>
            Please enter a correct Temperature digit
          </span>
        )}
        {result.length > 0 && <Result result={result} />}
        <Button disp={handleDisplay} />
      </main>
    </div>
  );
}

export default TempApp;
