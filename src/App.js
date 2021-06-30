import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "nav/Routes";
import Header from "views/layout/Header";
import Footer from "views/layout/Footer";

const App = () => (
  <Router>
    <Header />
    <Routes />
    <Footer />
  </Router>
);

export default App;
