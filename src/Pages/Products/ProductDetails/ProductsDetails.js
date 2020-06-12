import React from "react";
import styled, { css } from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Header from "../../../Component/Header/Header";
import SlideCarousel from "../../Products/ProductDetails/SlideCarousel";
import OptionSection from "../ProductDetails/OptionSection";
import DetailsSection from "../ProductDetails/DetailsSection";
import Footer from "../../../Component/Footer/Footer";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <Title>Men's Torrentshell 3L Jacket</Title>
      <SlideCarousel />
      <OptionSection />
      <DetailsSection />
      {/* <Footer /> */}
    </>
  );
};

export default ProductDetails;

const Title = styled.h1`
  height: 100px;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  width: 40%;
  margin: 0 auto;
  padding-top: 15%;
  padding-bottom: 12%;
`;
