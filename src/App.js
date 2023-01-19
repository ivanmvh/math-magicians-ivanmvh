import React from 'react';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Calculator />
        <Home />
        <Quote />
      </div>
    );
  }
}

export default App;
