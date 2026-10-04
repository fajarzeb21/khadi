import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/Product";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <p className="message">
        Loading product...
      </p>
    );
  }

  if (error) {
    return (
      <p className="error-message">
        Error: {error}
      </p>
    );
  }

  return (
    <section className="details-page">

      <Link to="/" className="back-link">
        ← Back to Products
      </Link>

      <div className="details-container">

        <div className="details-image">
          <img
            src={product.images[0]}
            alt={product.title}
          />
        </div>

        <div className="details-info">

          <p className="category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <p className="details-price">
            ${product.price}
          </p>

          <p className="rating">
            ⭐ {product.rating} / 5
          </p>

          <p className="description">
            {product.description}
          </p>

          <p>
            <strong>Brand:</strong>{" "}
            {product.brand || "Khaadi"}
          </p>

          <p>
            <strong>Stock:</strong>{" "}
            {product.stock}
          </p>

          <button
            className="add-large-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;