import { DashboardActionTypes } from "./types";
import { action } from "typesafe-actions";

export const dashboardRequest = (): {
  type: DashboardActionTypes.DASHBOARD_REQUEST;
} => action(DashboardActionTypes.DASHBOARD_REQUEST);

export const dashboardSuccess = (
  payload: string
): { type: DashboardActionTypes.DASHBOARD_SUCCESS; payload: string } =>
  action(DashboardActionTypes.DASHBOARD_SUCCESS, payload);

export const dashboardFailed = (
  message: string
): { type: DashboardActionTypes.DASHBOARD_FAILED; payload: string } =>
  action(DashboardActionTypes.DASHBOARD_FAILED, message);
