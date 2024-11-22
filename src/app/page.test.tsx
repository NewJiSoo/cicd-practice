import { render, screen } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";

describe("Home Page Rendering", () => {
  it('renders "Get started by" text', () => {
    render(<Home />);
    expect(screen.getByText(/Get started by/i)).toBeInTheDocument();
  });

  it('renders "Save and see your changes instantly." text', () => {
    render(<Home />);
    expect(
      screen.getByText(/Save and see your changes instantly./i)
    ).toBeInTheDocument();
  });

  it('renders "테스트 중!!!" text', () => {
    render(<Home />);
    expect(screen.getByText(/테스트 중!!!/i)).toBeInTheDocument();
  });

  it("should render an anchor link with the correct href", () => {
    render(<Home />);
    const linkElement = screen.getByRole("link", { name: /Learn/i });
    expect(linkElement).toHaveAttribute("href", "https://nextjs.org/");
  });
});
