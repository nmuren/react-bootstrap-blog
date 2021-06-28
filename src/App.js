import React from "react";
import { MainProvider } from "store/MainStore";
import Content from "views/Content";

const App = () => (
  <MainProvider>
    <div>this is head</div>
    <Content />
    <div>this is foot</div>
  </MainProvider>
);

export default App;
