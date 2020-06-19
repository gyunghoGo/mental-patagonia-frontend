import React from "react";
import styled from "styled-components";
import hero_video from "../../images/video/hero_video.mp4";
import {WIDTH800} from "../../Config";

const MainVideo = () => {
  return (
    <MainVideoWrap>
      <video playsinline autoplay="true" muted loop>
        <source src={hero_video} type="video/mp4" />
      </video>
      <ContentWrap>
        <HeroImg
          src="https://www.patagonia.com/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw22352c4b/images/svg/D15-Web-Wordmark-750px-01-v2.svg"
          alt="hero"
        />
        <ContentP>
          Justice for the most polluted neighborhood in Los Angeles.
        </ContentP>
        <Button>Watch</Button>
      </ContentWrap>
    </MainVideoWrap>
  );
};

export default MainVideo;

const MainVideoWrap = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: -100;
  background-size: cover;
  overflow: hidden;
`;

const ContentWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 40%;
  padding-left:5%;
  padding-right:5%;
  margin: 0 auto;
  text-align: center;
  color: #ffff;
  @media only screen and (max-width:${WIDTH800}){
    top:70%;
    text-align:left;
    
    
}
`;

const HeroImg = styled.img`
  width: 400px;
`;


const ContentP = styled.p`
  font-size: 1.1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:200;
  margin: 40px 0;
  @media only screen and (max-width:${WIDTH800}){
    margin: 30px 0;
}
`;

const Button = styled.button`
  padding: 0.7rem 3rem;
  border-radius: 3rem;
  border: 0.3rem solid #ffffff;
  background-color: transparent;
  margin-right: 2rem;
  background-color: #ffff;
  font-weight: 700;
  font-size: 1rem;
  transition: 0.2s;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (max-width:${WIDTH800}){
    width:100%;
}
`;
