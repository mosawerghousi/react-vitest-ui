import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";
import exp from "constants";
describe("UserAccount", () => {
  it("must render user name", () => {
    const user: User = { id: 1, name: "mosawer" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("must render edit btn if user is admin", () => {
    const user: User = { id: 1, name: "mosawer", isAdmin: true };

    render(<UserAccount user={user} />);
    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();

    expect(btn).toHaveTextContent(/edit/i);
  });

  it("must not render edit btn if user is not an admin", () => {
    const user: User = { id: 1, name: "mosawer" };

    render(<UserAccount user={user} />);
    const btn = screen.queryByRole("button");

    expect(btn).not.toBeInTheDocument();
  });
});
