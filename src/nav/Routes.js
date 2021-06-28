import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "views/content/Blog";
import Example2 from "views/Example2";
import Example3 from "views/Example3";

const Routes = () => (
  <Switch>
    <Route path="/blog">
      <Blog />
    </Route>
    <Route path="/features/feature1">
      <Example2 />
    </Route>
    <Route path="/about/:ulala">
      <Blog />
    </Route>
    <Route path="/contact">
      <Example3 />
    </Route>
    {/* fallback address for any other paths */}
    <Redirect to="/blog" />
  </Switch>
);

export default Routes;
