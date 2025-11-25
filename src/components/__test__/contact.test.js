import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom"

test("should load us contact page", () => {
  render(<ContactUs />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument()
});
