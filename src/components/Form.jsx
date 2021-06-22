import React from 'react';

function Form({
  inputLabel,
  selectLabel,
  eve,
  value,
  disp,
  sel,
  selectValue,
}) {
  return (
    <form onSubmit={disp} className='form'>
      <span className='input-grid'>
        {inputLabel}
        <input
        className='input'
          type='text'
          value={value}
          onChange={e => eve(e.target.value)}
        />
      </span>
      <span className='input-grid'>
        {selectLabel}
        <select
        className='select'
          name='Temperature'
          value={selectValue}
          onChange={e => sel(e.target.value)}
        >
          <option value='celcius'>Celcius</option>
          <option value='faranheit'>Faranheit</option>
          <option value='kelvin'>Kelvin</option>
        </select>
      </span>
    </form>
  );
}

export default Form;
