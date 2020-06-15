import React from "react";
import styled, { css } from "styled-components";

const Thumbnail = (props) => {
  return props.thumbnail.map((thumb) => {
    return <IMG src={thumb.image_url} alt="thumnails" />;
  });
};

export default Thumbnail;

const IMG = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 2rem;
  margin-right: 2%;
`;
