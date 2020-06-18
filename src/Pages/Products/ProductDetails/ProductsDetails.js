import React, { useState,useEffect } from "react";
import styled, { css } from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductsDetailHeader from "../../../Component/Header/ProductsDetailHeader";
import Modal from "./Modal/Modal";
import SlideCarousel from "../../Products/ProductDetails/SlideCarousel";
import DetailsSection from "../ProductDetails/DetailsSection";
import Footer from "../../../Component/Footer/Footer";


const ProductDetails = ( { handleModal, selectSize, selectColor } ) => {


  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(()=>{
    fetch('http://10.58.7.224:8080/product/17')
    .then(res=>res.json())
    .then(res => {
      setFilteredProducts(res.data)
    })
  }, [])
  
  console.log("filtered >>", filteredProducts)
 


  return (
    <>
      <ProductsDetailHeader />
      <Title>{filteredProducts.name}</Title>
      <SlideCarousel data={filteredProducts} />
      <Modal data={filteredProducts} handleModal={handleModal} />
      <DetailsSection data={filteredProducts}  />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
     handleModal : state,
     selectSize : state.selectSize 
  }
}

export default connect(mapStateToProps)(ProductDetails);

const Title = styled.h1`
  height: 100px;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  width: 40%;
  margin: 0 auto;
  padding-top: 15%;
  padding-bottom: 7%;
`;
