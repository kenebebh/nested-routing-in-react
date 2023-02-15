import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsData } from "./ProductsData";

const ProductInfo = () => {
  const { productsData, setProductsData } = useContext(ProductsData);
  const { id } = useParams();

  return (
    <div className="productDetail">
      <img
        src={productsData[id - 1].thumbnail}
        alt="img"
        className="productFullImage"
        width={400}
        height={300}
      />
      <div className="productContent">
        <div className="productName">{productsData[id - 1].title}</div>
        <div className="productBrand">{productsData[id - 1].description}</div>
        <div className="productPrice">${productsData[id - 1].price}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
