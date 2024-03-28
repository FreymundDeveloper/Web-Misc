import React, { Component } from 'react';
import './App.css';
import CounterMain from './components/CounterMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterMain startedValue={0}/>
      </div>
    );
    
  }
}

export default App;