import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/Product";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <p>WELCOME TO</p>
        <h1>KHADI COLLECTION</h1>
        <p>Traditional style for everyday life</p>
      </section>

      <section className="products-section">
        <h2>Our Products</h2>

        {loading && <p className="message">Loading products...</p>}

        {error && <p className="error-message">Error: {error}</p>}

        {!loading && !error && (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;