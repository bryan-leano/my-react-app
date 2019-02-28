import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Persons : </h1>
        <Person name='Bryan' age={34}/>
        <Person name='John' age={39}/>
      </div>
    );
  }
}

export default App;
