import {
  render,
  screen,
} from "@testing-library/react";

import Home from
"../pages/Home";

test(
  "renders hero text",
  () => {
    render(<Home />);

    expect(
      screen.getByText(
        /Coffee R Us/i
      )
    ).toBeInTheDocument();
  }
);