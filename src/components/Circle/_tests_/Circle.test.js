import React from "react";
import { render, screen } from "@testing-library/react";
import { CircleWithNum } from "..";

describe("<CircleWithNum/>", () => {
  const num = 0;
  const mockOnClick = jest.fn().mockImplementation(() => num + 1);

  it("loads with initial state of 0", () => {
    render(<CircleWithNum data-testid="clc" num={num} onClick={mockOnClick} />);
    const countValue = screen.getByTestId("clc");
    expect(countValue.textContent).toBe("0");
    expect(mockOnClick()).toBe(1);
  });
});
