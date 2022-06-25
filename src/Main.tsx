import * as React from "react";

import { App } from "./App";
import { ApplicationState } from "./stores/index";
import { History } from "history";
import { Provider } from "react-redux";
import { Store } from "redux";

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

export const Main: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <App history={history} />
    </Provider>
  );
};
