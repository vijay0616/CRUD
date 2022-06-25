import { FormActionTypes, DataValue } from "./types";
import { action } from "typesafe-actions";

export const formData = (
  payload: DataValue
): { type: FormActionTypes.FORM_DATA; payload: DataValue } =>
  action(FormActionTypes.FORM_DATA, payload);

export const formRequest = (
  payload: DataValue
): { type: FormActionTypes.FORM_REQUEST; payload: DataValue } =>
  action(FormActionTypes.FORM_REQUEST, payload);

export const formUpdateRequest = (
  payload: DataValue
): { type: FormActionTypes.FORM_UPDATE_REQUEST; payload: DataValue } =>
  action(FormActionTypes.FORM_UPDATE_REQUEST, payload);

export const formSuccess = (
  payload: string
): { type: FormActionTypes.FORM_SUCCESS; payload: string } =>
  action(FormActionTypes.FORM_SUCCESS, payload);

export const formFailed = (
  message: string
): { type: FormActionTypes.FORM_FAILED; payload: string } =>
  action(FormActionTypes.FORM_FAILED, message);

export const formRest = (): { type: FormActionTypes.FORM_RESET_STATE } =>
  action(FormActionTypes.FORM_RESET_STATE);

export const modalChange = (
  payload: boolean
): { type: FormActionTypes.MODAL_CHANGE; payload: boolean } =>
  action(FormActionTypes.MODAL_CHANGE, payload);
