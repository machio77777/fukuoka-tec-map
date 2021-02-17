import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";

const ROUTER_BASENAME = process.env.NODE_ENV === 'development' ? '/' : '/fukuoka-tec-map';

class App extends Component {

  constructor(props) {
    super(props);
  }

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

export default connect()(App);