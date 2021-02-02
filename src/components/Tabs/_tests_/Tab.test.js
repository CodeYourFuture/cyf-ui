import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Tab } from "..";
import { TabLabel } from "../TabLabel";

describe("<Tab/>", () => {
  test("renders without crushing", () => {
    render(<Tab label="Steps" />);
  });
  test("displays the given label name", () => {
    const label = "NewCalls";
    const { getByText } = render(
      <Tab label={label}>
        <p>This is Tab 0 NewCalls!</p>
      </Tab>
    );
    expect(getByText(/This is Tab 0 NewCalls!/i)).not.toBeNull();
  });
});

describe("<TabLabel/>", () => {
  test("renders without crushing", () => {
    const activeTab = false;
    const label = "";
    const clickTabItem = jest.fn(() => null);
    render(
      <TabLabel active={!activeTab} label={label} clickTabItem={clickTabItem} />
    );
    expect(clickTabItem).toMatchSnapshot();
  });
  test("clickTab", () => {
    const mockOnClick = jest.fn();
    const activeTab = false;
    const testLabel = "Workshops";

    const { getByTestId } = render(
      <TabLabel
        active={!activeTab}
        label={testLabel}
        clickTabItem={mockOnClick}
      />
    );
    const tabList = getByTestId("labels");
    fireEvent.click(tabList);
    expect(mockOnClick).toHaveBeenCalledWith(testLabel);
  });
  test("clickTab with mocked function", () => {
    const activeTab = false;
    const label = "Steps";
    const click = jest.fn(() => null);
    const { getByText } = render(
      <TabLabel active={!activeTab} label={label} clickTabItem={click} />
    );
    const tabList = getByText(label);
    fireEvent.click(tabList);
    expect(click).toHaveBeenCalled();
  });
});
