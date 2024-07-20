// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import Banner from "../components/banner/Banner"
import ProductCard from "../components/product/ProductCard";
import HomeProduct from "../components/HomeProduct";
import Footer from "../components/Footer";

// import ProductCard from '../components/ProductCard';
// import "./HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  // Fetch products from your API
  //   fetch('/api/products')
  //     .then(response => response.json())
  //     .then(data => setProducts(data));
  // }, []);

  return (
    <div>
      <Navbar />
      <Banner/>
      <HomeProduct/>
      <Footer/>
      {/* <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
