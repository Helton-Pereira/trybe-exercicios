import React from 'react';
import './App.css';

const myArray = ['Lavar a louça', 'Limpar o fogão', 'Varrer o chão']

const Task = (value) => {
  return (
    myArray.map((element) => <li key={value}>{element}</li>)
  );
}

class App extends React.Component {
  render() {
    return Task(myArray);
  }
}

export default App;
