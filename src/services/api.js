const BASE_URL = "http://localhost:3001/products";

export async function getProducts() {
  const response = await fetch(BASE_URL);
  return response.json();
}

export async function addProduct(product) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return response.json();
}

export async function updateProduct(id, updates) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  return response.json();
}