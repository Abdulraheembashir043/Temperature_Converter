import React from 'react';

function Result({result}) {
  return (
    <section className='result'>
      <h4 className='result-heading'>Result</h4>
      <div>
        <span className='firstSpan'>{result[0]}</span>
        <span className='secondSpan'>{result[1]}</span>
      </div>
    </section>
  )
}

export default Result
