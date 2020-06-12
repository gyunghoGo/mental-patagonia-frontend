import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Slide from "./Slide";
import Thumbnail from "./Thumbnail";

const SlideCarousel = () => {
  const [optionData, setOptionData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => setOptionData(res.option));
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [positionX, setPositionX] = useState(0);

  const nextSlide = () => {
    let TOTAL_SLIDES = optionData.length;
    if (currentSlide >= TOTAL_SLIDES) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
      setPositionX(positionX - 700);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
      setPositionX(positionX + 700);
    }
  };
  return (
    <Container>
      <ProductSlideContainer
        style={{
          transform: `translateX(${positionX}px)`,
          transition: "all 0.2s ease-in-out",
        }}
      >
        <Slide data={optionData} />
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
  width: 100%;
`;

const BtnWrap = styled.div`
  width: 90%;
  margin: 0 5%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 40%;
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
