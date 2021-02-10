import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Tab } from "..";
import { TabLabel } from "../TabLabel";

describe("<Tab/>", () => {
  test("matches the saved snapshot", () => {
    const label = "Steps";
    const { container } = render(
      <Tab label={label}>
        This is <em>Tab-1-Steps</em>!
      </Tab>
    );
    expect(container.firstChild).toMatchSnapshot();
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
  test("", () => {
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
});
