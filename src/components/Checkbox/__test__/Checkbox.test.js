import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "..";

describe("<Checkbox/>", () => {
  test("test matches snapshot", async () => {
    const mockOnChange = jest.fn(() => null);

    const { container } = render(<Checkbox checked onChange={mockOnChange} label="include VAT" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test("onChange handler is called when user clicked on the checkbox", async () => {
    const mockOnChange = jest.fn();

    const { container } = render(<Checkbox checked onChange={mockOnChange} label="include VAT" />);

    const checkbox = container.querySelector("input");
    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
