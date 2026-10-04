import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        KHAADI
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>

        <Link to="/cart" className="cart-link">
          Cart
          <span>{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;