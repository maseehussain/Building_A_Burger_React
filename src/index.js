import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

const store = createStore(reducer);

const logger = store => {
  return next => {
    return action => {
      console.log("[middleware] dispatching", action);
      const result = next(action);
      return result;
    };
  };
};

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
