import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";

import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
             <Switch>
               <Route exact path="/" component=
               {Contacts} />
              
             </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
