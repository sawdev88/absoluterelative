import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './main.min.css';

import {
  LandingPage,
} from './pages';

import {
  LessionsPage,
  FixedPage
} from './pages/lessons'

class App extends Component {
  render() {
    return (
      <div>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path='/' component={ LandingPage } />

            <Route exact path='/lessions' component={ LessionsPage } />
            <Route exact path='/lessions/fixed' component={ FixedPage } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
