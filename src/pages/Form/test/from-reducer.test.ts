import formReducer, { initialState } from "../store/reducer";
import { SubmissionState } from "../store/types";
import {
  formData,
  formRequest,
  formUpdateRequest,
  formSuccess,
  formFailed,
  formRest,
  modalChange,
} from "../store/actions";

describe("Form Reducer", () => {
  it('should have "FormData" when user enter value in form inputs', () => {
    const data = { userId: 1, title: "demo", body: "demo content" };
    const action = formData(data);
    const reducerResponse = formReducer(initialState, action);
    expect(reducerResponse).not.toBeNull();
    expect(reducerResponse.formData).toEqual(data);
  });

  it('should have "Form Request" status when user submits the form', () => {
    const data = { userId: 1, title: "demo", body: "demo content" };
    const action = formRequest(data);
    const reducerResponse = formReducer(initialState, action);
    expect(reducerResponse).not.toBeNull();
    expect(reducerResponse.loading).toEqual(true);
    expect(reducerResponse.formSubmissionState).toEqual(
      SubmissionState.formRequest
    );
    expect(reducerResponse.error).toEqual(false);
    expect(reducerResponse.success).toEqual(false);
  });

  it('should have "Form Success" when api returns success.', () => {
    const data = "[{ userId: 1, id: 1, title: 'demo', body: 'demo content' }]";
    const action = formSuccess(data);
    const reducerResponse = formReducer(initialState, action);

    expect(reducerResponse).not.toBeNull();
    expect(reducerResponse.formSubmissionState).toEqual(
      SubmissionState.formCompleted
    );
    expect(reducerResponse.success).toEqual(true);
    expect(reducerResponse.error).toEqual(false);
    expect(reducerResponse.successMessage).toEqual(data);
    expect(reducerResponse.formData).toEqual([]);
  });

  it('should have "Form Failed" api returns failer.', () => {
    const expectedMessage = "Something went wrong.";
    const action = formFailed(expectedMessage);
    const reducerResponse = formReducer(initialState, action);

    expect(reducerResponse).not.toBeNull();
    expect(reducerResponse.formSubmissionState).toEqual(
      SubmissionState.formFailed
    );
    expect(reducerResponse.error).toEqual(true);
    expect(reducerResponse.success).toEqual(false);
    expect(reducerResponse.successMessage).toBeNull();
    expect(reducerResponse.errorMessage).toEqual("Something went wrong.");
  });

  it('should have "Form Update Request" when user updates the resource information', () => {
    const data = {
      userId: 1,
      title: "demo-vijay",
      body: "demo content vijay sandeep",
    };
    const action = formUpdateRequest(data);
    const reducerResponse = formReducer(initialState, action);

    expect(reducerResponse).not.toBeNull();
    expect(reducerResponse.loading).toEqual(true);
    expect(reducerResponse.formSubmissionState).toEqual(
      SubmissionState.formRequest
    );
    expect(reducerResponse.error).toEqual(false);
    expect(reducerResponse.success).toEqual(false);
  });

  it('should have "Form Reset State" when user reloads the page or after submitting or updating resource information', () => {
    const action = formRest();
    const reducerResponse = formReducer(initialState, action);

    expect(reducerResponse).not.toBeNull();
    expect(reducerResponse.formSubmissionState).toEqual(
      SubmissionState.initialState
    );
    expect(reducerResponse.error).toEqual(false);
    expect(reducerResponse.success).toEqual(false);
    expect(reducerResponse.formData).toEqual([]);
  });

  it('should have "Modal Change" when user tries to edit the resource information', () => {
    const triggered = true;
    const action = modalChange(triggered);
    const reducerResponse = formReducer(initialState, action);

    expect(reducerResponse).not.toBeNull();
    expect(reducerResponse.modal).toEqual(triggered);
    expect(reducerResponse.formData).toEqual(
      triggered ? initialState.formData : []
    );
  });
});
