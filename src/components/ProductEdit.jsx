import { useState } from "react";

import {
  updateProduct,
} from "../services/api";

function ProductEdit({
  product,
}) {
  const [price, setPrice] =
    useState(product.price);

  async function handleUpdate() {
    await updateProduct(
      product.id,
      {
        price:
          Number(price),
      }
    );

    alert(
      "Price Updated!"
    );
  }

  return (
    <div>
      <input
        type="number"
        value={price}
        onChange={(e) =>
          setPrice(
            e.target.value
          )
        }
      />

      <button
        onClick={
          handleUpdate
        }
      >
        Update Price
      </button>
    </div>
  );
}

export default ProductEdit;