import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom"; 
import {WIDTH800} from "../../Config"

const Slide = (props) => {
  return props.data.map((data) => {
    return (

      <SlideContent>
       <Link to={'/products'}>
        <IMG src={data.image_url} />
        <P>{data.category_title}</P>
       </Link>
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
  height: 300px;
  border-radius: 3%;
  cursor: pointer;
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
  font-weight: 800;
  color: white;
  text-align: center;
`;
