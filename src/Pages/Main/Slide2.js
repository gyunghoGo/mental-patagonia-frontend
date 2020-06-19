import React from "react";
import styled from "styled-components";
import {WIDTH800} from "../../Config"

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
  transition: all 0.2s ease-in-out;
  @media only screen and (min-width:${WIDTH800}){
  &:hover {
    transform: scale(1.025);
    transition: all 0.2s ease-in-out;
    box-shadow: 1px 10px 10px #dddddd;
  }
}
  @media only screen and (max-width:${WIDTH800}){
    &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    box-shadow: 1px 10px 10px #dddddd;
  }
  }


`;

const IMG = styled.img`
  width: 300px;
  height: 380px;
  border-radius: 3%;
  @media only screen and (max-width:${WIDTH800}){
    width:650px;
    height:650px;
  }
`;

const P = styled.p`
  width: 100%;
  position: absolute;
  top: 42%;
  font-size: 45px;
  color: white;
  text-align: center;
  font-family: Georgia,serif;
`;
