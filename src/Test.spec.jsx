import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

function Example() {
  return <div>Hello</div>;
}
describe("<Exaplme/>", () => {
  test("test of confing", () => {
    render(<Example />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
