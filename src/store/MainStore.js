import React, { createContext } from "react";
import { makeAutoObservable } from "mobx";

class MainStore {
  // observable

  constructor() {
    makeAutoObservable(this);
  }

  // action

  // computed
}

const store = new MainStore();

export const getStore = () => store;

export const MainContext = createContext(null);

export const MainProvider = ({ children }) => (
  <MainContext.Provider value={store}>{children}</MainContext.Provider>
);
