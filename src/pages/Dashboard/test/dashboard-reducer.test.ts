import dashboardReducer, { initialState } from "../store/reducer";
import { SubmissionState } from "../store/types";
import {
  dashboardRequest,
  dashboardSuccess,
  dashboardFailed,
} from "../store/actions";

describe("DashboardReducer", () => {
  it('should have "DashboardRequest" status when dashboard page loads.', () => {
    const action = dashboardRequest();
    const reducerResponse = dashboardReducer(initialState, action);
    expect(reducerResponse).not.toBeNull();
    expect(reducerResponse.loading).toEqual(true);
    expect(reducerResponse.formSubmissionState).toEqual(
      SubmissionState.apiRequest
    );
    expect(reducerResponse.error).toEqual(false);
    expect(reducerResponse.success).toEqual(false);
  });

    it('should have "DashboardSuccess" when api returns success.', () => {
        const data= "[{ userId: 1, id: 1, title: 'demo', body: 'demo content' }]";
      const action = dashboardSuccess(data);
      const reducerResponse = dashboardReducer(initialState, action);

      expect(reducerResponse).not.toBeNull();
      expect(reducerResponse.formSubmissionState).toEqual(
        SubmissionState.apiCompleted
      );
      expect(reducerResponse.success).toEqual(true);
      expect(reducerResponse.error).toEqual(false);
      expect(reducerResponse.dataRecords).toEqual(data);
    });

    it('should have "DashboardFailed" api returns failer.', () => {
      const expectedMessage = "Something went wrong.";
      const action = dashboardFailed(expectedMessage);
      const reducerResponse = dashboardReducer(initialState, action);

      expect(reducerResponse).not.toBeNull();
      expect(reducerResponse.formSubmissionState).toEqual(
        SubmissionState.apiFailed
      );
      expect(reducerResponse.error).toEqual(true);
      expect(reducerResponse.success).toEqual(false);
      expect(reducerResponse.successMessage).toBeNull();
      expect(reducerResponse.errorMessage).toEqual("Something went wrong.");
    });
});
