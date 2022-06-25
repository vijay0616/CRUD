import { Main } from "./Main";
import React from "react";
import configureStore from "./configureStore";
import { createBrowserHistory } from "history";
import dotenv from "dotenv";
import { render } from "react-dom";
dotenv.config();

const history = createBrowserHistory();
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

render(
  <React.StrictMode>
    <Main store={store} history={history} />
  </React.StrictMode>,
  document.getElementById("app")
);
