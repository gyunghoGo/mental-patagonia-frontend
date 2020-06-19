import React, { useState,useEffect } from "react";
import styled, { css } from "styled-components";
import { withRouter, Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import ProductsDetailHeader from "../../../Component/Header/ProductsDetailHeader";
import Modal from "./Modal/Modal";
import SlideCarousel from "../../Products/ProductDetails/SlideCarousel";
import DetailsSection from "../ProductDetails/DetailsSection";
import Similarity from "./Similarity";
import Footer from "../../../Component/Footer/Footer";


const ProductDetails = ( {handleModal, match} ) => {

  const [filteredProducts, setFilteredProducts] = useState([]);


  const id = match.params.id;



  useEffect((props, match)=>{
    fetch(`http://10.58.5.130:8080/product/${id}`)
    .then(res=>res.json())
    .then(res => {
      setFilteredProducts(res.data )
    })
  }, [])



  return (
    <>
      <ProductsDetailHeader />
      <Review> {filteredProducts.review} Reviews </Review>
      <Title>{filteredProducts.name}</Title>
      <SlideCarousel data={filteredProducts} />
      <Modal data={filteredProducts} handleModal={handleModal} />
      <DetailsSection data={filteredProducts}  />
      <Similarity data={filteredProducts} />
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


const Review = styled.div`
  font-size: 80px;
  color: black;
  z-index: 999;
`

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
