import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    return (
      <section className="calculator-container">
        <h3 className="calculator-display">0</h3>
        <div className="calculator-area-buttons">
          <button onClick={this.handleClick} type="button" className="btncalc">AC</button>
          <button onClick={this.handleClick} type="button" className="btncalc">+/-</button>
          <button onClick={this.handleClick} type="button" className="btncalc">%</button>
          <button onClick={this.handleClick} type="button" className="btncalc oper-button">÷</button>
          <button onClick={this.handleClick} type="button" className="btncalc">7</button>
          <button onClick={this.handleClick} type="button" className="btncalc">8</button>
          <button onClick={this.handleClick} type="button" className="btncalc">9</button>
          <button onClick={this.handleClick} type="button" className="btncalc oper-button">x</button>
          <button onClick={this.handleClick} type="button" className="btncalc">4</button>
          <button onClick={this.handleClick} type="button" className="btncalc">5</button>
          <button onClick={this.handleClick} type="button" className="btncalc">6</button>
          <button onClick={this.handleClick} type="button" className="btncalc oper-button">-</button>
          <button onClick={this.handleClick} type="button" className="btncalc">1</button>
          <button onClick={this.handleClick} type="button" className="btncalc">2</button>
          <button onClick={this.handleClick} type="button" className="btncalc">3</button>
          <button onClick={this.handleClick} type="button" className="btncalc oper-button">+</button>
          <button onClick={this.handleClick} type="button" className="btncalc zero-btn">0</button>
          <button onClick={this.handleClick} type="button" className="btncalc">.</button>
          <button onClick={this.handleClick} type="button" className="btncalc oper-button">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
