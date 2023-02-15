import ProductsBar from "../components/ProductsBar";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="productsPage">
      <ProductsBar />
      <Outlet />
    </div>
  );
};

export default Products;
