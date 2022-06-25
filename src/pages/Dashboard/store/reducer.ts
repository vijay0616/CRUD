import {
  DashboardActionTypes,
  DashboardDataRequest,
  SubmissionState,
} from "./types";

import { Reducer } from "redux";

export const initialState: DashboardDataRequest = {
  error: false,
  success: false,
  successMessage: null,
  formSubmissionState: SubmissionState.initialState,
  errorMessage: "",
  dataRecords: [],
};

const dashboardReducer: Reducer<DashboardDataRequest> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case DashboardActionTypes.DASHBOARD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
        successMessage: null,
        errorMessage: null,
        formSubmissionState: SubmissionState.apiRequest,
      };
    case DashboardActionTypes.DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        successMessage: null,
        errorMessage: null,
        formSubmissionState: SubmissionState.apiCompleted,
        dataRecords: action.payload,
      };
    case DashboardActionTypes.DASHBOARD_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        successMessage: null,
        errorMessage: action.payload,
        formSubmissionState: SubmissionState.apiFailed,
        dataRecords: [],
      };
    default:
      return state;
  }
};

export default dashboardReducer;
