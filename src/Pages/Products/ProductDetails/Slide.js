import React from "react";
import styled, { css } from "styled-components";

const Slide = (props) => {
  return props.data.map((prodImg) => {
    return <IMG src={prodImg.image_url} alt="product" />;
  });
};

export default Slide;

const IMG = styled.img`
  width: 50%;
  height: 60%;
`;
