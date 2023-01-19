import React from 'react';
import Calculator from './components/Calculator';
import Home from './components/Home';

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
      </div>
    );
  }
}

export default App;
