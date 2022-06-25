import { ApiMethods, callApi } from "../../../utils/api";
import { all, call, fork, put, takeEvery } from "typed-redux-saga";
import {
  formRequest,
  formUpdateRequest,
  formSuccess,
  formFailed,
} from "./actions";
import { urlBuilder } from "../../../utils/url-helpers";
import { API_ROUTES } from "../../../config/api_routes";
import { FormActionTypes } from "./types";

export function* formHandler(action: ReturnType<typeof formRequest>): any {
  try {
    const formValues = action.payload;
    const postFormUrl = urlBuilder(`${API_ROUTES.POST_FORM_DATA}`, {});
    const response = yield* call(
      callApi,
      ApiMethods.POST.toString(),
      postFormUrl,
      formValues
    );
    if (response.error) {
      yield put(formSuccess(response.error));
    } else {
      yield put(formFailed(response));
    }
  } catch (e) {
    if (e instanceof Error && e.stack) yield put(formFailed(e.stack));
    else yield put(formFailed("unknown error."));
  }
}

export function* formUpdateHandler(
  action: ReturnType<typeof formUpdateRequest>
): any {
  try {
    const formUpdateValues = action.payload;
    const id = formUpdateValues.id ?? "";
    const updateFormUrl = urlBuilder(`${API_ROUTES.PUT_FORM_DATA}`, {
      key: id.toString(),
    });
    const response = yield* call(
      callApi,
      ApiMethods.PUT.toString(),
      updateFormUrl,
      formUpdateValues
    );
    if (response.error === undefined) {
      yield put(formSuccess(response));
    } else {
      yield put(formFailed(response));
    }
  } catch (e) {
    if (e instanceof Error && e.stack) yield put(formFailed(e.stack));
    else yield put(formFailed("unknown error."));
  }
}

function* watchFormHandler() {
  yield takeEvery(FormActionTypes.FORM_REQUEST, formHandler);
}

function* watchUpdateHandler() {
  yield takeEvery(FormActionTypes.FORM_UPDATE_REQUEST, formUpdateHandler);
}

function* formSaga(): any {
  yield all([fork(watchFormHandler), fork(watchUpdateHandler)]);
}

export default formSaga;
