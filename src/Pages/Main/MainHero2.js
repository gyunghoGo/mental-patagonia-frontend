import React from "react";
import styled from "styled-components";
import {WIDTH800} from "../../Config"

const MainHero2 = () => {
  return (
    <HeroWrap>
      <IMG />
      <HeroContent>
        <Title>Sunnyside Up</Title>
        <Desc>
        Last November, Fitz Caldwell (age 6) finished his first multipitch climb, Sunnyside Bench in Yosemite National Park. He did it with his dad, Tommy.
        </Desc>
        <Button>Read</Button>
      </HeroContent>
    </HeroWrap>
  );
};

export default MainHero2;

const HeroWrap = styled.div`
  color: white;
`;

const IMG = styled.img`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://www.patagonia.com/blog/wp-content/uploads/2020/05/siadak_a_0713_cc_web-16-9-450x253.jpg");
  background-size: cover;
  position: relative;
  opacity: 0.95;
  display: table;
  /* @media only screen and (max-width:${WIDTH800}){
    width:100%;
    top:230%;
  } */
  
`;

const HeroContent = styled.div`
  position: absolute;
  color: white;
  top: 350%;
  width: 100%;
  padding-left:10%;
  padding-right:10%;
  z-index:5;
  @media only screen and (max-width:${WIDTH800}){
    width:100%;
    top:440%;
  }
`;

const Title = styled.div`
  font-size: 70px;
  letter-spacing: 0.1;
  width: 90%;
  font-family: Georgia,serif;
    @media only screen and (max-width:${WIDTH800}){
    width:100%;
    font-size:2.3rem;
    letter-spacing:0.3px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 1.6;
  letter-spacing:1.4;
  width: 65%;
  padding: 2.5% 0;
  font-family: Georgia,serif;
  @media only screen and (max-width:${WIDTH800}){
    width:100%;
    font-size:1rem;
    font-weight:300;
  }
`;

const Button = styled.button`
  background-color: white;
  width: 20%;
  padding: 2%;
  border-radius: 20rem;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  font-family: Arial, Helvetica, sans-serif;
  @media only screen and (min-width:${WIDTH800}){
  &:hover {
    transform: scale(1.02);
    transition:all .2s ease-in-out;
  }
}
  @media only screen and (max-width:${WIDTH800}){
    width:100%;
    &:hover{
      transform: scale(1.01);
    transition:all .2s ease-in-out;
    }
  }
`;
