import {
  render,
  screen,
} from "@testing-library/react";

import AdminPortal from
"../pages/AdminPortal";

test(
  "renders product form",
  () => {
    render(
      <AdminPortal />
    );

    expect(
      screen.getByText(
        /Add Coffee/i
      )
    ).toBeInTheDocument();
  }
);