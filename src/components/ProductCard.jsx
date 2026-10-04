import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />

      <div className="product-info">
        <p className="category">{product.category}</p>

        <h3>{product.title}</h3>

        <p className="price">${product.price}</p>

        <div className="card-buttons">
          <Link to={`/product/${product.id}`} className="details-btn">
            Details
          </Link>

          <button
            className="add-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;