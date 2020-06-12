import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Details = (props) => {
  return props.data.map((img) => {
    return <IMG src={img.image_url} alt="details" />;
  });
};

export default Details;

const IMG = styled.img`
  width: 48%;
  padding: 1%;
  border-radius: 3%;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
