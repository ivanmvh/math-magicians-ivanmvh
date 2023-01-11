import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator-container">
        <h3 className="result-screen">0</h3>
        <div className="calculator-buttons">
          <button type="button" className="btncalc">AC</button>
          <button type="button" className="btncalc">+/-</button>
          <button type="button" className="btncalc">%</button>
          <button type="button" className="btncalc color-right">÷</button>
          <button type="button" className="btncalc">7</button>
          <button type="button" className="btncalc">8</button>
          <button type="button" className="btncalc">9</button>
          <button type="button" className="btncalc color-right">x</button>
          <button type="button" className="btncalc">4</button>
          <button type="button" className="btncalc">5</button>
          <button type="button" className="btncalc">6</button>
          <button type="button" className="btncalc color-right">-</button>
          <button type="button" className="btncalc">1</button>
          <button type="button" className="btncalc">2</button>
          <button type="button" className="btncalc">3</button>
          <button type="button" className="btncalc color-right">+</button>
          <button type="button" className="btncalc zero">0</button>
          <button type="button" className="btncalc">.</button>
          <button type="button" className="btncalc color-right">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
