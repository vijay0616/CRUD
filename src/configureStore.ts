import { ApplicationState, createRootReducer, rootSaga } from "./stores";
import { Store, applyMiddleware, compose, createStore } from "redux";

import { History } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import persistState from "redux-localstorage";

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});

  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(persistState());

  getStateFromLocalStorage();

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware), enhancer)
  );

  store.subscribe(() => {
    const _store = store.getState();
    localStorage.setItem("_store", JSON.stringify(_store));
  });

  sagaMiddleware.run(rootSaga);
  return store;

  function getStateFromLocalStorage() {
    const _store = localStorage.getItem("_store");

    if (!_store) return initialState;
    return JSON.parse(_store);
  }
}
