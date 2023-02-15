import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="mainNavLink">
        Home
      </Link>
      <Link to="/products" className="mainNavLink">
        Products
      </Link>
      <Link to="/cart" className="mainNavLink">
        Cart
      </Link>
    </nav>
  );
};

export default Navigation;
