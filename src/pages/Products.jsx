import { useState } from "react";
import useProducts from "../hooks/useProducts";

function Products() {
  const [products] = useProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </>
  );
}

export default Products;