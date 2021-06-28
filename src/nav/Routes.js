import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "views/Blog";
import Example2 from "views/Example2";
import Example3 from "views/Example3";

const Routes = () => (
  <Switch>
    <Route path="/blog">
      <Blog />
    </Route>
    <Route path="/ex2">
      <Example2 />
    </Route>
    <Route path="/ex3">
      <Example3 />
    </Route>
    {/* fallback address for any other paths */}
    <Redirect to="/blog" />
  </Switch>
);

export default Routes;