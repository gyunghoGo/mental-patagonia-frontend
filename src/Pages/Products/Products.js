import React from "react";
import Header from "../../Component/Header/Header";
import ProductsVideo from "./ProductsVideo/ProductsVideo";
import ProtuctsContent from "../Products/ProductsContent/ProductsContent";
// import Footer from "../../Component/Footer/Footer"
// import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Products = () => {
  return (
    <div>
     <Header />
    <ProductsVideo />
    <ProtuctsContent />
    {/* <Footer /> */}
    </div>
  );
};

export default Products;


