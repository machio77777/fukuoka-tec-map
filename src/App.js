import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";

const ROUTER_BASENAME = process.env.NODE_ENV === 'development' ? '/' : '/fukuoka-tec-map';

export default class App extends Component {

  render() {
    return (
      <Router basename={ROUTER_BASENAME}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}
