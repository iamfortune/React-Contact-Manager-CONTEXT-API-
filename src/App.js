import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from "./components/contacts/AddContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";

import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
                <Route exact path="/test"component={Test} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
