import React from "react";
import Header from "../../Component/Header/Header";
import ProductsVideo from "./ProductsVideo/ProductsVideo";
import SlideMens from "./ProductsSlide/SlideMens";
import Footer from "../../Component/Footer/Footer"
import ProductsSlideItems from "../Products/ProductsSlide/ProductsSlideItems"
import ProductsCategory from "./ProductsCategory"
// import HeaderFilterTop from "../../Component/Header/HeaderTop/HeaderFilterTop"
// import { withRouter, Link } from "react-router-dom";

const Products = () => {
  return (
    <>
     <Header />
     {/* <HeaderFilterTop /> */}
     <ProductsVideo />
     <SlideMens />
     <ProductsSlideItems />
     <ProductsCategory />
     <Footer />
    </>
  );
};

export default Products;


