import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Fortune';
    return (
      <div className="App">
        <h1>The App Component</h1>
        <h4>Hello {name.toUpperCase()} </h4>
      </div>
    );
  }
}

export default App;
