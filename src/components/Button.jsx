import React from 'react';

function Button({ disp }) {
  return (
    <button className='button' onClick={disp}>
      Convert
    </button>
  );
}

export default Button;
