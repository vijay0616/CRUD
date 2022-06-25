import { FormActionTypes, FormDataRequest, SubmissionState } from "./types";

import { Reducer } from "redux";

export const initialState: FormDataRequest = {
  error: false,
  success: false,
  successMessage: null,
  formSubmissionState: SubmissionState.initialState,
  errorMessage: "",
  formData: [],
  users: [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ],
  modal: false,
};

const formReducer: Reducer<FormDataRequest> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FormActionTypes.FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    case FormActionTypes.FORM_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
        successMessage: null,
        errorMessage: null,
        formSubmissionState: SubmissionState.formRequest,
        formData: action.payload,
      };
    case FormActionTypes.FORM_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
        successMessage: null,
        errorMessage: null,
        formSubmissionState: SubmissionState.formRequest,
        formData: action.payload,
      };
    case FormActionTypes.FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        successMessage: action.payload,
        errorMessage: null,
        formSubmissionState: SubmissionState.formCompleted,
        formData: [],
      };
    case FormActionTypes.FORM_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        successMessage: null,
        errorMessage: action.payload,
        formSubmissionState: SubmissionState.formFailed,
        formData: [],
      };
    case FormActionTypes.FORM_RESET_STATE:
      return {
        ...state,
        error: false,
        success: false,
        successMessage: null,
        formSubmissionState: SubmissionState.initialState,
        errorMessage: "",
        formData: [],
        modal: false,
      };
    case FormActionTypes.MODAL_CHANGE:
      return {
        ...state,
        modal: action.payload,
        formData: action.payload ? state.formData : [],
      };
    default:
      return state;
  }
};

export default formReducer;
