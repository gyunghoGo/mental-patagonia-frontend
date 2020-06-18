import React from "react";
import Header from "../../Component/Header/Header";
import ProductsVideo from "./ProductsVideo/ProductsVideo";
import SlideMens from "./ProductsSlide/SlideMens";
import Footer from "../../Component/Footer/Footer"
import ProductsSlideItems from "../Products/ProductsSlide/ProductsSlideItems"
import ProductsMens from "./ProductsCategory/ProductsMens"
// import { withRouter, Link } from "react-router-dom";

const Products = () => {
  return (
    <>
     <Header />
     <ProductsVideo />
     <SlideMens />
     <ProductsSlideItems />
     <ProductsMens />
     <Footer />
    </>
  );
};

export default Products;


