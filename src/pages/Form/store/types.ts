export enum FormActionTypes {
  FORM_DATA = "@@formData/FORM_DATA",
  FORM_UPDATE_REQUEST = "@@formData/FORM_UPDATE_REQUEST",
  FORM_REQUEST = "@@formData/FORM_REQUEST",
  FORM_SUCCESS = "@@formData/FORM_SUCCESS",
  FORM_FAILED = "@@formData/FORM_FAILED",
  FORM_RESET_STATE = "@@formData/FORM_RESET_STATE",
  MODAL_CHANGE = "@@formData/MODAL_CHANGE",
}

export enum SubmissionState {
  initialState = 0,
  formRequest = 1,
  formCompleted = 2,
  formFailed = 3,
}

export interface FormDataRequest {
  loading?: boolean;
  error?: boolean;
  success?: boolean;
  errorMessage?: string | null;
  successMessage?: string | null;
  formSubmissionState: SubmissionState;
  formData: DataValue[];
  users: { id: number }[];
  modal: boolean;
}

export type DataValue = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};
