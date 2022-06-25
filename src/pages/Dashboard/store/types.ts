export enum DashboardActionTypes {
  DASHBOARD_REQUEST = "@@dashboardData/DASHBOARD_REQUEST",
  DASHBOARD_SUCCESS = "@@dashboardData/DASHBOARD_SUCCESS",
  DASHBOARD_FAILED = "@@dashboardData/DASHBOARD_FAILED",
}

export enum SubmissionState {
  initialState = 0,
  apiRequest = 1,
  apiCompleted = 2,
  apiFailed = 3,
}

export interface DashboardDataRequest {
  loading?: boolean;
  error?: boolean;
  success?: boolean;
  errorMessage?: string | null;
  successMessage?: string | null;
  formSubmissionState: SubmissionState;
  dataRecords: DataValue[];
}

export type DataValue = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
