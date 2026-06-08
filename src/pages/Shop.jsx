import {   useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ProductSearch from "../components/ProductSearch";
import ProductEdit from "../components/ProductEdit";

function Shop() {
  const [products] =
    useProducts();
console.log(products);
  const [searchTerm,
    setSearchTerm] =
    useState("");

  const filteredProducts =
    products.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  return (
    <main className="shop-layout">
      <aside className="sidebar">
        <ProductSearch
          searchTerm={
            searchTerm
          }
          setSearchTerm={
            setSearchTerm
          }
        />
      </aside>

      <section className="products-grid">
        {filteredProducts.map(
            (product) => (
        <div
        key={product.id}
        >
        <ProductCard
          product={product}
        />

        <ProductEdit
          product={product}
        />
        </div>
            )
        )}
    </section>
    </main>
  );
}

export default Shop;