import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;

  return (
    <section className="calculator-container">
      <div className="calculator-display">
        {total}
        {operation}
        {next}
      </div>
      <div className="calculator-area-buttons">
        <button onClick={handleClick} type="button" className="btncalc">
          AC
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          +/-
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          %
        </button>
        <button onClick={handleClick} type="button" className="btncalc oper-button">
          ÷
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          7
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          8
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          9
        </button>
        <button onClick={handleClick} type="button" className="btncalc oper-button">
          x
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          4
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          5
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          6
        </button>
        <button onClick={handleClick} type="button" className="btncalc oper-button">
          -
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          1
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          2
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          3
        </button>
        <button onClick={handleClick} type="button" className="btncalc oper-button">
          +
        </button>
        <button onClick={handleClick} type="button" className="btncalc zero-btn">
          0
        </button>
        <button onClick={handleClick} type="button" className="btncalc">
          .
        </button>
        <button onClick={handleClick} type="button" className="btncalc oper-button">
          =
        </button>
      </div>
    </section>
  );
};

export default Calculator;
