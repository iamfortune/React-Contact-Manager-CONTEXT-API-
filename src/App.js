import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from "./components/Header";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Kay's Contact Manager" />
        <Contact
          name="Francy Ana"
          email="francylove@gmail.com"
          phone="08109542715"
        />
        <Contact
          name="Chioma B"
          email="chiomalove@gmail.com"
          phone="08109543333"
        />
      </div>
    );
  }
}

export default App;
