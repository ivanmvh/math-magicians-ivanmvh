import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator-container">
        <h3 className="calculator-display">0</h3>
        <div className="calculator-area-buttons">
          <button type="button" className="btncalc">AC</button>
          <button type="button" className="btncalc">+/-</button>
          <button type="button" className="btncalc">%</button>
          <button type="button" className="btncalc oper-button">÷</button>
          <button type="button" className="btncalc">7</button>
          <button type="button" className="btncalc">8</button>
          <button type="button" className="btncalc">9</button>
          <button type="button" className="btncalc oper-button">x</button>
          <button type="button" className="btncalc">4</button>
          <button type="button" className="btncalc">5</button>
          <button type="button" className="btncalc">6</button>
          <button type="button" className="btncalc oper-button">-</button>
          <button type="button" className="btncalc">1</button>
          <button type="button" className="btncalc">2</button>
          <button type="button" className="btncalc">3</button>
          <button type="button" className="btncalc oper-button">+</button>
          <button type="button" className="btncalc zero-btn">0</button>
          <button type="button" className="btncalc">.</button>
          <button type="button" className="btncalc oper-button">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
