import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductsData } from "./ProductsData";

const Phones = () => {
  const [data, setData] = useState([]);
  const { productsData, setProductsData } = useContext(ProductsData);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((res) => {
        setData(res.products);
        setProductsData(res.products);
      });
  };

  useEffect(fetchData, []);

  return (
    <div className="productsContainer">
      {data &&
        data
          .filter((product) => product.category === "smartphones")
          .map((filteredProduct) => (
            <div
              className="product"
              key={filteredProduct.id}
              onClick={() => {
                navigate(`/products/${filteredProduct.id}`);
              }}
            >
              <img
                src={filteredProduct.thumbnail}
                alt="img"
                width={200}
                height={150}
              />
              <div className="productName">{filteredProduct.title}</div>
              <div className="productBrand">{filteredProduct.brand}</div>
            </div>
          ))}
    </div>
  );
};

export default Phones;
