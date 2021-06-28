import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Example from "views/Example";
import Example2 from "views/Example2";
import Example3 from "views/Example3";

const Routes = () => (
  <Switch>
    <Route path="/ex1">
      <Example />
    </Route>
    <Route path="/ex2">
      <Example2 />
    </Route>
    <Route path="/ex3">
      <Example3 />
    </Route>
    {/* fallback address for any other paths */}
    <Redirect to="/ex1" />
  </Switch>
);

export default Routes;
