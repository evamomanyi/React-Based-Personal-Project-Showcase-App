import {
  render,
  screen,
} from "@testing-library/react";

import {
  MemoryRouter,
} from "react-router-dom";

import App from "../App";

describe(
  "App Component",
  () => {
    test(
      "renders navigation links",
      () => {
        render(
          <MemoryRouter>
            <App />
          </MemoryRouter>
        );

        expect(
          screen.getByText(
            /Home/i
          )
        ).toBeInTheDocument();

        expect(
          screen.getByText(
            /Shop/i
          )
        ).toBeInTheDocument();

        expect(
          screen.getByText(
            /Admin Portal/i
          )
        ).toBeInTheDocument();
      }
    );
  }
);