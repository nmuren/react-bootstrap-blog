import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { MainProvider } from "store/MainStore";
import Routes from "nav/Routes";
import Header from "views/Header";
import Footer from "views/Footer";

const App = () => (
  <MainProvider>
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  </MainProvider>
);

export default App;
