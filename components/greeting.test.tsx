import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import Greeting from "./greeting";

afterEach(cleanup);

describe("Greeting component", () => {
  it("renders hello world", () => {
    const screen = render(<Greeting name="World" />);

    expect(screen.getByText("Hello World!")).toBeVisible();
  });
});
