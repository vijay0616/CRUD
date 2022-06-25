import { ModalWindow } from "..";
import { render } from "@testing-library/react";

describe("Modal Window Tests", () => {
  it("when modal contents are passed then modal should contain that markup", () => {
    const renderComponent = () =>
      render(
        <ModalWindow
          ariaLabelText="label"
          ariaDescribedByText="described"
          open={true}
          setOpen={() => {
            console.log("testing");
          }}
        >
          <h1 data-testid="test_id">Todo Form</h1>
        </ModalWindow>
      );

    const { getByTestId } = renderComponent();
    expect(getByTestId("test_id")).not.toBeNull();
  });

  it("when modal status is open then modal should be visible", () => {
    const renderComponent = () =>
      render(
        <ModalWindow
          ariaLabelText="label"
          ariaDescribedByText="described"
          open={true}
          setOpen={() => {
            console.log("testing");
          }}
        >
          <h1 data-testid="test_id">Todo Form</h1>
        </ModalWindow>
      );

    const { getByTestId } = renderComponent();
    expect(getByTestId("test_id")).toBeVisible();
  });

  it("when modal status is close then modal should not be visible", () => {
    const renderComponent = () =>
      render(
        <ModalWindow
          ariaLabelText="label"
          ariaDescribedByText="described"
          open={false}
          setOpen={() => {
            console.log("testing");
          }}
        >
          <h1 data-testid="test_id">Todo Form</h1>
        </ModalWindow>
      );

    const { queryByTestId } = renderComponent();
    expect(queryByTestId("test_id")).toBeNull();
  });
});
