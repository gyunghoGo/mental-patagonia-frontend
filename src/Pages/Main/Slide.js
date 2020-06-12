import React from "react";
import styled, { css } from "styled-components";

const Slide = (props) => {
  return props.data.map((data) => {
    return (
      <SlideContent>
        <IMG src={data.image_url} />
        <P>{data.category_title}</P>
      </SlideContent>
    );
  });
};

export default Slide;

const SlideContent = styled.div`
  position: relative;
  margin: 0 1%;
  &:hover {
    transform: scale(1.05);
    transition: all 0.1s ease-in-out;
  }
`;

const IMG = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 3%;
`;

const P = styled.p`
  width: 100%;
  position: absolute;
  top: 42%;
  font-size: 45px;
  font-weight: 800;
  color: white;
  text-align: center;
`;
