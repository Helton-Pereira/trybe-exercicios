import React from 'react';
import './App.css'
import Pokedex from './components/Pokedex'

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <h1> Pokedex </h1>
        <Pokedex />
      </main>
    )
  }
}



export default App;
