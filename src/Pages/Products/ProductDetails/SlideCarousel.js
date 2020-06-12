import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Thumbnail from "./Thumbnail";

const SlideCarousel = () => {
  const [optionData, setOptionData] = useState([]);
  const [ currentIdx, setCurrentIdx ] = useState(0);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => setOptionData(res.option));
  }, []);


  const TOTAL_SLIDES = optionData.length;

  const prevSlide = () => {
    const resetToBack = currentIdx === 0;
    const index = resetToBack ? TOTAL_SLIDES - 1 : currentIdx - 1;
    setCurrentIdx(index);
  }

  const nextSlide = () => {
    const resetIndex = currentIdx === TOTAL_SLIDES - 1;
    const index = resetIndex ? 0 : currentIdx + 1;
    setCurrentIdx(index);
  }

  const activeImageSourcesFromState = optionData.slice(currentIdx, currentIdx + 3);
  const imageSourcesToDisplay = activeImageSourcesFromState.length < 3 
  ? [...activeImageSourcesFromState, ...optionData.slice(0, 3 - activeImageSourcesFromState.length )] 
  : activeImageSourcesFromState ;

  return (
    <Container>
      <ProductSlideContainer>
        {imageSourcesToDisplay.map((el, index) => 
        <IMG key={index} src={el.image_url} alt="product" />)
         }
      </ProductSlideContainer>
      <BtnWrap>
        <ArrowBtn className="prev" onClick={prevSlide}>
          <i class="fas fa-chevron-left"></i>
        </ArrowBtn>
        <ArrowBtn className="next" onClick={nextSlide}>
          <i class="fas fa-chevron-right"></i>
        </ArrowBtn>
      </BtnWrap>
      <CodePrice>
        <p>Fire (FRE)</p>
        <p>$149</p>
      </CodePrice>
      <ThumbnailsWrap>
        <Thumbnail thumbnail={optionData} />
      </ThumbnailsWrap>
    </Container>
  );
};

export default SlideCarousel;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin: 0 auto;
`;

const ProductSlideContainer = styled.div`
  display: flex;
  width: 70%;
`;

const IMG = styled.img`
  width: 50%;
  height: 60%;
`;


const BtnWrap = styled.div`
  width: 90%;
  margin: 0 5%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 30%;
`;

const ArrowBtn = styled.button`
  width: 60px;
  height: 60px;
  font-size: 20px;
  color: black;
  border-radius: 50%;
  z-index: 9;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transition: all 0.4s ease-in-out;
    transform: scale(1.1);
  }
`;

const CodePrice = styled.div`
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
