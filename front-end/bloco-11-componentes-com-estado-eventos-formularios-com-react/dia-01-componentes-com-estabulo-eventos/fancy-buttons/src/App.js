import './App.css';
import React from 'react';

class App extends React.Component {
  constructor () {
  super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render () {
    return (
      <div>
      <button onClick={this.handleClick} >{this.state.numeroDeCliques}</button>
      </div>
    );
  }
}

export default App;
