import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductInfo from "./components/ProductInfo";
import Automobiles from "./components/Automobiles";
import Phones from "./components/Phones";
import Computers from "./components/Computers";
import { ProductsData } from "./components/ProductsData";
import "./App.css";

function App() {
  const [productsData, setProductsData] = useState([]);
  return (
    <div className="app">
      <Router>
        <Navigation />
        <ProductsData.Provider value={{ productsData, setProductsData }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />}>
              <Route path="phones" element={<Phones />} />
              <Route path="computers" element={<Computers />} />
              <Route path="automobiles" element={<Automobiles />} />
              <Route path=":id" element={<ProductInfo />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ProductsData.Provider>
      </Router>
    </div>
  );
}

export default App;
