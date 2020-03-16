import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from "./components/Header";

import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header />
        <div className="container">
        <Contacts />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
