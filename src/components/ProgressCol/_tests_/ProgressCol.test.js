import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ProgressCheck } from "..";

describe("<ProgressCol/>", () => {
  const count = 0;
  const mockOnClick = jest.fn(() => null);
  test("Match the Snapshot", () => {
    const { container } = render(
      <ProgressCheck count={count} onClick={mockOnClick} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  test("call onClick when it is clicked", () => {
    const { getByText } = render(
      <ProgressCheck count={count} onClick={mockOnClick} />
    );
    const numVal = getByText("0");
    fireEvent.click(numVal);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
