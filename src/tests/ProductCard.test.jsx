import {
  render,
  screen,
} from "@testing-library/react";

import ProductCard from
"../components/ProductCard";

test(
  "renders product info",
  () => {
    render(
      <ProductCard
        product={{
          id: 1,
          name:
            "Vanilla Bean",
          description:
            "Medium Roast",
          origin:
            "Colombia",
          price: 10,
        }}
      />
    );

    expect(
      screen.getByText(
        /Vanilla Bean/i
      )
    ).toBeInTheDocument();
  }
);