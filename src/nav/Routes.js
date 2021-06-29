import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Blog from "views/content/Blog";
import PostDetail from "views/content/PostDetail";

const Routes = () => (
  <Switch>
    <Route path="/blog">
      <Blog />
    </Route>
    <Route path="/blog:search">
      <Blog />
    </Route>
    <Route path="/post:postId">
      <PostDetail />
    </Route>
    {/* fallback address for any other paths */}
    {/* <Redirect to="/blog" /> */}
  </Switch>
);

export default Routes;
