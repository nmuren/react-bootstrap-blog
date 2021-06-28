import React from "react";
import Menu from "nav/Menu";
import Routes from "nav/Routes";
import { BrowserRouter as Router } from "react-router-dom";

const Content = () => (
  <Router>
    <div>
      <Menu />
      <Routes />
    </div>
  </Router>
);

export default Content;
