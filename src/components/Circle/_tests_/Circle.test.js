import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CircleWithNum } from "..";

describe("<CircleWithNum/>", () => {
  const num = 0;
  const mockOnClick = jest.fn(() => null);
  test("Match the snapShot", () => {
    const { container } = render(
      <CircleWithNum num={num} onClick={mockOnClick} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("calls onClick when it is clicked", () => {
    render(<CircleWithNum num={num} onClick={mockOnClick} />);
    const circle = screen.getByTestId("circle");
    fireEvent.click(circle);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
