import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../../store/actions";
import { selectSize } from "../../../store/actions";
import { selectColor } from "../../../store/actions";
import Details from "./Details";
import Thumbnail from "./Thumbnail";
import Spec from "./Spec";

const DetailsSection = (props) => {

  const [clickedBtn, setClickedBtn] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(props.data);

  useEffect(() => {
    setFilteredProducts(props.data);
  }, [props.data])


  const handleBtn = (id) => {
    setClickedBtn(id);
  } 
   const openTrigger = () => {
     openModal();
   }

   //필터 로직 
 const filterColor = (color) => {
  const tempArr = {...props.data}
  if (filteredProducts) {
    tempArr.option = tempArr.option.filter(option => option.color_code === color);
    setFilteredProducts(tempArr);
  }
}

  return (
    <>
    { props.data !== undefined  && (
      <>
     <OptionInfo>
      {/* <p>{props.data.color_code}</p> */}
      <p> ${props.data.price_usd}</p>
     </OptionInfo>
    <ThumbnailsWrap>
      <Thumbnail thumbnail={props.data.images} filterColor={filterColor} /> 
    </ThumbnailsWrap>
    <SizeRule>
     <SizeWrap>
     { props.data.size !== undefined && props.data.size.map((el,index) => 
     <Size 
      isActive={clickedBtn === index} 
      onClick={()=> handleBtn(index) }> 
        {el.name} 
     </Size> )}
    </SizeWrap>
    <Rule >Regular | Size & Fit Guide</Rule>
    <BagBtn>Add to Bag</BagBtn>
    <Rule onClick={openTrigger} >Shipping, Exchange & Returns</Rule>
    </SizeRule>
    <DetailsWrap>
      <ImagesWrap>
        <Details data={filteredProducts} />
      </ImagesWrap>
      <OverviewWrap >
        <P>Overview</P>
        <Overview>
          <TextArea>
            Simple and unpretentious, our trusted Torrentshell 3L Jacket uses
            3-layer H2No® Performance Standard technology for exceptional
            waterproof/breathable performance, all-day comfort and long-lasting
            waterproof durability. Fair Trade Certified™ sewn.
          </TextArea>
          <SpecBtn>Spec & Features</SpecBtn>
          {/* <Spec /> */}
        </Overview>
      </OverviewWrap>
    </DetailsWrap>
    </>
    )}
    </>
  );
};

export default connect(null, { openModal } )(DetailsSection) ;

const OptionInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15%;
  margin: 0 auto;
  font-size: 22px;
  font-weight: 800;
  padding: 3% 0;
`;

const ThumbnailsWrap = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;


const SizeRule = styled.div`
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
  margin: 2% auto;
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

  ${props => props.isActive && css`
    background-color: black;
    color: white;
  `}

`;

const Rule = styled.p`
  font-size: 15px;
  font-weight: 800;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`;

const BagBtn = styled.button`
  padding: 0.8rem 3rem;
  border-radius: 3rem;
  margin: 1.5%;
  border: 0.3rem solid black;
  background-color: black;
  font-weight: 700;
  font-size: 1rem;
  color: #ffff;
`;


const DetailsWrap = styled.section`
  padding-top: 3%;
  margin: 0 auto;
  width: 90%;
`;

const ImagesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const OverviewWrap = styled.div`
  display: flex;
  padding: 3%;
  width: 100%;
  font-weight: 800;
`;

const P = styled.p`
  width: 500px;
  padding-top: 5%;
  font-size: 18px;
`;

const Overview = styled.div`
  width: 1200px;
  padding: 5% 10% 10% 5%;
`;

const TextArea = styled.p`
  line-height: 1.4;
  font-size: 30px;
`;

const SpecBtn = styled.button`
  padding: 0.8rem 3rem;
  border-radius: 3rem;
  margin: 15% 0;
  border: 0.3rem solid black;
  background-color: black;
  font-weight: 700;
  font-size: 1rem;
  color: #ffff;
`;
