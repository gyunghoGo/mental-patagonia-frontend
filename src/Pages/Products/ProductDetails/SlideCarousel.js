import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const SlideCarousel = (props) => {

  const data = props.data;
  const [slideImages, setSlideImages] = useState([]);
  // const [ currentIdx, setCurrentIdx ] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [positionX, setPositionX] = useState(-200);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    if (data !== undefined){
      setSlideImages(data.images);
    } 
  })


  const nextSlide = () => {
    let TOTAL_SLIDES = slideImages.length;
    if (currentSlide >= TOTAL_SLIDES - 2) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
      setPositionX(positionX - 450);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
      setPositionX(positionX + 450);
    }
  };


  const handleColorClick = (id) => {
    const filtered =  data.filter((option) => option.id ===  id);
    setFilteredProducts( 
      filtered
    )
  }

//   const slideFunction = () => {
//     if(slideImages !== undefined){
//     const TOTAL_SLIDES = slideImages.length;

//     const prevSlide = () => {
//       const resetToBack = currentIdx === 0;
//       const index = resetToBack ? TOTAL_SLIDES - 1 : currentIdx - 1;
//       setCurrentIdx(index);
//     }

//     const nextSlide = () => {
//       const resetIndex = currentIdx === TOTAL_SLIDES - 1;
//       const index = resetIndex ? 0 : currentIdx + 1;
//       setCurrentIdx(index);
//     }

//     const activeImageSourcesFromState = slideImages.slice(currentIdx, currentIdx + 3);
//     const imageSourcesToDisplay = activeImageSourcesFromState.length < 3 
//     ? [...activeImageSourcesFromState, ...slideImages.slice(0, 3 - activeImageSourcesFromState.length )] 
//     : activeImageSourcesFromState ;
//     }
    
    
// }

// slideFunction();
   
  return (
    <Container>
      <ProductSlideContainer style={{
          transform: `translateX(${positionX}px)`,
          transition: "all 0.2s ease-in-out",
        }}>
        {slideImages !==undefined && slideImages.map((el, index) => 
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
  width: 60%;
  height: 50%;
`;


const BtnWrap = styled.div`
  width: 90%;
  margin: 0 5%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 45%;
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

