import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import {Provider} from "react-redux";
import { store } from './store/store'

ReactDom.render(
  <ContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ContextProvider>,
  document.getElementById("root")
);