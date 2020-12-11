import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "../Routes/Main";
import Privacy from "../Routes/Privacy";
import Service from "../Routes/Service";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main></Main>
        </Route>
        <Route path="/privacy" exact>
          <Privacy></Privacy>
        </Route>
        <Route path="/service" exact>
          <Service></Service>
        </Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  );
};
