import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { openModal } from "../../../store/actions";


const OptionSection = ({ openModal }) => {

   const openTrigger = () => {
     openModal();
   }

  return (
    <ProductInfo>
      <SizeWrap>
        <Size>XS</Size>
        <Size>S</Size>
        <Size>M</Size>
        <Size>L</Size>
        <Size>XL</Size>
        <Size>XXL</Size>
      </SizeWrap>
      <Rule >Regular | Size & Fit Guide</Rule>
      <Button>Add to Bag</Button>
      <Rule onClick={openTrigger} >Shipping, Exchange & Returns</Rule>
    </ProductInfo>
  );
};

export default connect(null, { openModal } )(OptionSection) ;


const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SizeWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 3% auto;
`;

const Size = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 5px solid black;
  margin-right: 2%;
  text-align: center;
  background-color: transparent;
  font-weight: 800;
  font-size: 16px;
`;

const Rule = styled.p`
  font-size: 15px;
  font-weight: 800;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 0.8rem 3rem;
  border-radius: 3rem;
  margin: 2%;
  border: 0.3rem solid black;
  background-color: black;
  font-weight: 700;
  font-size: 1rem;
  color: #ffff;
`;
