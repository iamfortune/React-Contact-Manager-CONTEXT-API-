import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact_ref";

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
          <AddContact />
        <Contacts />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
