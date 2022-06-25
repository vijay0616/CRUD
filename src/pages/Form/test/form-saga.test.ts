import { FormActionTypes } from "../store/types";
import fetchMock from "jest-fetch-mock";
import { runSaga } from "redux-saga";
import { formHandler, formUpdateHandler } from "../store/sagas";
import { formRequest, formUpdateRequest } from "../store/actions";

beforeAll(() => fetchMock.enableMocks());

describe("Adding New Resource Information 'Form Handler'", () => {
  it("should report success when user submit the resource information- POST API Call", async () => {
    fetchMock.mockResponse(async () => {
      return JSON.stringify({
        error: {
          userId: 2,
          title: "demo",
          body: "demo content",
          id: 101,
        },
      });
    });
    runSaga(
      {
        dispatch: (action: any) => {
          expect(action.type).toEqual(FormActionTypes.FORM_SUCCESS);
          expect(action.payload).toEqual({
            userId: 2,
            id: 101,
            title: "demo",
            body: "demo content",
          });
        },
      },
      formHandler,
      formRequest({
        userId: 1,
        title: "asd",
        body: "asdsa",
      })
    );
  });

  it("should fail when api fail to submit the information", async () => {
    fetchMock.mockReject(new Error("something went wrong."));
    runSaga(
      {
        dispatch: (action: any) => {
          expect(action.type).toEqual(FormActionTypes.FORM_FAILED);
          expect(action.payload).toContain("something went wrong.");
        },
      },
      formHandler,
      formRequest({
        userId: 1,
        title: "asd",
        body: "asdsa",
      })
    );
  });
});

describe("Updating Resource Information 'Form Update Handler'", () => {
    it("should report success when user submit the updated resource information- PUT API Call", async () => {
      fetchMock.mockResponse(async () => {
        return JSON.stringify({
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
          });
      });
      runSaga(
        {
          dispatch: (action: any) => {
            expect(action.type).toEqual(FormActionTypes.FORM_SUCCESS);
            expect(action.payload).toEqual({
                id: 101,
                title: 'foo',
                body: 'bar',
                userId: 1
              });
          },
        },
        formUpdateHandler,
        formUpdateRequest({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
          })
      );
    });
  
    it("should fail when api fail to submit the updated information", async () => {
      fetchMock.mockReject(new Error("something went wrong."));
      runSaga(
        {
          dispatch: (action: any) => {
            expect(action.type).toEqual(FormActionTypes.FORM_FAILED);
            expect(action.payload).toContain("something went wrong.");
          },
        },
        formUpdateHandler,
        formUpdateRequest({
            userId: 1,
            id:101,
            title: "demo title",
            body: "demo content body",
          })
      );
    });
  });
