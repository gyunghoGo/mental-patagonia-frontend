import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Slide from "./Slide";

function SlideCarousel() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => setCategoryData(res.category));
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [positionX, setPositionX] = useState(0);

  const nextSlide = () => {
    let TOTAL_SLIDES = categoryData.length;
    if (currentSlide >= TOTAL_SLIDES - 3) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
      setPositionX(positionX - 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
      setPositionX(positionX + 300);
    }
  };

  return (
    <Container>
      <SliderContainer
        style={{
          transform: `translateX(${positionX}px)`,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Slide data={categoryData} />
      </SliderContainer>
      <BtnWrap>
        <Button className="prev" onClick={prevSlide}>
          <i class="fas fa-chevron-left"></i>
        </Button>
        <Button className="next" onClick={nextSlide}>
          <i class="fas fa-chevron-right"></i>
        </Button>
      </BtnWrap>
    </Container>
  );
}

export default SlideCarousel;

const Container = styled.section`
  overflow: hidden;
  width: 100vw;
  height: 50vh;
  margin: 0 auto;
  position: relative;
  padding: 0 5%;
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92%;
  position: absolute;
  top: 42%;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  font-size: 20px;
  color: black;
  background-color:#fff;
  border-radius: 50%;
  z-index: 9;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
  opacity:0.5;
  &:hover {
    transition: all 0.4s ease-in-out;
    transform: scale(1.05);
    opacity:1;
  }
`;
