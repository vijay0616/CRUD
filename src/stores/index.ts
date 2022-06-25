import { RouterState, connectRouter } from "connected-react-router";
import { all, fork } from "redux-saga/effects";
import { History } from "history";
import { combineReducers } from "redux";

import { DashboardDataRequest } from "../pages/Dashboard/store/types";
import dashboardReducer from "../pages/Dashboard/store/reducer";
import dashboardSaga from "../pages/Dashboard/store/sagas";

import { FormDataRequest } from "../pages/Form/store/types";
import formReducer from "../pages/Form/store/reducer";
import formSaga from "../pages/Form/store/sagas";

export interface ApplicationState {
  dashboardReducer: DashboardDataRequest;
  formReducer: FormDataRequest;
  router: RouterState;
}

export const createRootReducer = (history: History): any => {
  return combineReducers({
    dashboardReducer,
    formReducer,
    router: connectRouter(history),
  });
};

export function* rootSaga(): any {
  yield all([fork(dashboardSaga), fork(formSaga)]);
}
