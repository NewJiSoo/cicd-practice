import { render, screen } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";

describe("Page", () => {
  it("renders the page", () => {
    render(<Home />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
    expect(screen.getByText("테스트 중!!!")).toBeInTheDocument();
    expect(
      screen.getByText("Save and see your changes instantly.")
    ).toBeInTheDocument();
  });
});
