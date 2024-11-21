import { render, screen } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";

describe("Page", () => {
  it("renders the page", () => {
    render(<Home />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
    expect(screen.getByText("감자")).not.toBeInTheDocument();
  });
});
