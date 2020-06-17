import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ProductsDetailHeader from "../../../Component/Header/ProductsDetailHeader";
import Modal from "./Modal/Modal";
import SlideCarousel from "../../Products/ProductDetails/SlideCarousel";
import OptionSection from "../ProductDetails/OptionSection";
import DetailsSection from "../ProductDetails/DetailsSection";
import Footer from "../../../Component/Footer/Footer";

const ProductDetails = ( { handleModal } ) => {
  return (
    <>
      <ProductsDetailHeader />
      <Title>Men's Torrentshell 3L Jacket</Title>
      <SlideCarousel />
      <OptionSection />
      <Modal handleModal={handleModal}  />
      <DetailsSection />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    handleModal : state
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
