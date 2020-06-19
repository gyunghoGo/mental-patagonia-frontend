import React from "react";
import styled, { css } from "styled-components";
import Reveal from 'react-reveal/Reveal';
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import {WIDTH800} from "../../Config"

const MainHero = () => {
  return (
      <HeroWrap>
        <Zoom duration={2000}>
        <IMG />
        </Zoom>
        <HeroContent>
          <Fade bottom cascade delay={500} duration={1500}>
          <Title>Comfort is Relative™</Title>
          <Desc>
            Our Fair Trade Certified™ sewn tech tees use a mix of recycled
            materials and are made to handle all of the uncomfortable moments—and
            the transitions between them.
          </Desc>
          <Button>Capilene® Cool Tech Tees</Button>
          </Fade>
        </HeroContent>
      </HeroWrap>
  );
};

export default MainHero;

const HeroWrap = styled.div`
  color: white;

`;

const IMG = styled.img`
  width: 100vw;
  height: 100vh;
  margin: 3% auto;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://edge.dis.commercecloud.salesforce.com/dw/image/v2/bdjb_PRD/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw866ad1a2/images/homepage/2560x1440_gnam_s_0874_HERO.jpg?q=90&sw=1600&");
  background-size: cover;
  position: relative;
  opacity: 0.95;
  display: table;
  
`;

const HeroContent = styled.div`
  position: absolute;
  color: white;
  top: 190%;
  width: 100%;
  padding-left:10%;
  padding-right:10%;
  @media only screen and (max-width:${WIDTH800}){
    width:100%;
    top:230%;
  }
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 800;
  letter-spacing: 0.1;
  width: 90%;
  font-family: Arial, Helvetica, sans-serif;
  @media only screen and (max-width:${WIDTH800}){
    width:100%;
    font-size:2.3rem;
    letter-spacing:0.3px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 1.6;
  width: 65%;
  padding: 2.5% 0;
  font-family: Arial, Helvetica, sans-serif;
  @media only screen and (max-width:${WIDTH800}){
    width:100%;
    font-size:1rem;
    font-weight:300;
  }
`;

const Button = styled.button`
  background-color: white;
  width: 34%;
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
