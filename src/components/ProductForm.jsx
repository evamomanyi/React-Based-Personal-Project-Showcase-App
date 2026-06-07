import {
  useState,
  useRef,
  useId,
  useEffect,
} from "react";

import {
  addProduct,
} from "../services/api";

function ProductForm() {
  const nameId = useId();

  const inputRef =
    useRef(null);

  const [name, setName] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [origin,
    setOrigin] =
    useState("");

  const [price,
    setPrice] =
    useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  async function
  handleSubmit(e) {
    e.preventDefault();

    await addProduct({
      name,
      description,
      origin,
      price:
        Number(price),
    });

    alert(
      "Product Added!"
    );

    setName("");
    setDescription("");
    setOrigin("");
    setPrice("");
  }

  return (
    <form
      className="admin-form"
      onSubmit={
        handleSubmit
      }
    >
      <h2>
        Add Coffee
      </h2>

      <label htmlFor={nameId}>
        Coffee Name
      </label>

      <input
        ref={inputRef}
        id={nameId}
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <input
        placeholder="Description"
        value={
          description
        }
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
      />

      <input
        placeholder="Origin"
        value={origin}
        onChange={(e) =>
          setOrigin(
            e.target.value
          )
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(
            e.target.value
          )
        }
      />

      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default ProductForm;