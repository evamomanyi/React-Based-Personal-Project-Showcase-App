import { useState, useEffect } from "react";
import { getProducts } from "../services/api";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return [products, setProducts];
}

export default useProducts;