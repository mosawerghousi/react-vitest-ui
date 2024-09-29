import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const longText = "a".repeat(limit + 1);
  const cutText = longText.substring(0, limit) + "...";

  it("should render the full text if less than 255 char", () => {
    const text = "Short text";

    render(<ExpandableText text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should cut  if longer than 255 char", () => {
    render(<ExpandableText text={longText} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });

  it("should expand when show and more btn is cliked  if longer than 255 char", async () => {
    render(<ExpandableText text={longText} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(button);

    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it("should collapse text when show less btn is cliked", async () => {
    render(<ExpandableText text={longText} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(button);

    await user.click(button);

    expect(screen.getByText(cutText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });
});
