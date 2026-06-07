import { useState } from "react";
import { addProduct } from "../services/api";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addProduct({
      name,
      price: Number(price),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <button type="submit">
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;