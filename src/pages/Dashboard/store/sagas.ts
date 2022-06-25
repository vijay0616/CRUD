import { ApiMethods, callApi } from "../../../utils/api";
import { all, call, fork, put, takeEvery } from "typed-redux-saga";
import { dashboardSuccess, dashboardFailed } from "./actions";

import { API_ROUTES } from "../../../config/api_routes";
import { DashboardActionTypes } from "./types";

export function* dashboardHandler(): any {
  try {
    const response = yield* call(
      callApi,
      ApiMethods.GET.toString(),
      API_ROUTES.GET_DASHBOARD_DATA
    );

    if (response.error) {
      yield put(dashboardFailed(response.error));
    } else {
      yield put(dashboardSuccess(response));
    }
  } catch (e) {
    if (e instanceof Error && e.stack) yield put(dashboardFailed(e.stack));
    else yield put(dashboardFailed("unknown error."));
  }
}

function* watchDashboardHandler() {
  yield takeEvery(DashboardActionTypes.DASHBOARD_REQUEST, dashboardHandler);
}

function* dashboardSaga(): any {
  yield all([fork(watchDashboardHandler)]);
}

export default dashboardSaga;
