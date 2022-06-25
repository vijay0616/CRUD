import { DashboardActionTypes } from "../store/types";
import fetchMock from "jest-fetch-mock";
import { runSaga } from "redux-saga";
import { dashboardHandler } from "../store/sagas";

beforeAll(() => fetchMock.enableMocks());

describe("Resource Data Fetch", () => {
    it("should report success when api succeeds to fetch the resource records", async () => {
        fetchMock.mockResponse(async () => {
        return JSON.stringify([{ userId: 1, id: 1, title: "demo", body: "demo content" }]);
        });
        runSaga(
            {
                dispatch: (action: any) => {
                    expect(action.type).toEqual(DashboardActionTypes.DASHBOARD_SUCCESS);
                    expect(action.payload).toEqual([{ userId: 1, id: 1, title: "demo", body: "demo content" }]);
                },
            },
            dashboardHandler
        );
    });

    it("should fail when api fail to fetch", async () => {
        fetchMock.mockReject(new Error("something went wrong."));
        runSaga(
            {
                dispatch: (action: any) => {
                    expect(action.type).toEqual(DashboardActionTypes.DASHBOARD_FAILED);
                    expect(action.payload).toContain("something went wrong.");
                },
            },
            dashboardHandler
        );
    });
});
