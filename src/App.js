import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";

export default class App extends Component {

  render() {
    return (
      <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
    );
  }
}
