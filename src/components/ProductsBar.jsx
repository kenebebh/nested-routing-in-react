import { Link } from "react-router-dom";

const ProductsBar = () => {
  return (
    <div className="productBar">
      <Link to="phones-tablets" className="productBarLink">
        Phones & Tablets
      </Link>
      <Link to="computers" className="productBarLink">
        Computers
      </Link>
      <Link to="automobiles" className="productBarLink">
        Automobiles
      </Link>
    </div>
  );
};

export default ProductsBar;
