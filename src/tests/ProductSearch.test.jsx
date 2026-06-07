import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from
"@testing-library/user-event";

import ProductSearch from
"../components/ProductSearch";

test(
  "updates search field",
  async () => {
    const user =
      userEvent.setup();

    let value = "";

    const setValue =
      (newValue) => {
        value = newValue;
      };

    render(
      <ProductSearch
        searchTerm=""
        setSearchTerm={
          setValue
        }
      />
    );

    const input =
      screen.getByRole(
        "textbox"
      );

    await user.type(
      input,
      "Vanilla"
    );

    expect(
      value
    ).toBeTruthy();
  }
);