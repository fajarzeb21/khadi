const API_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const categories = [
    "womens-dresses",
    "tops",
    "mens-shirts",
  ];

  const requests = categories.map((category) =>
    fetch(`${API_URL}/category/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
  );

  const results = await Promise.all(requests);

  return results.flatMap((result) => result.products);
}

export async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}