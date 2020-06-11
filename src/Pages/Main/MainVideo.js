import React from "react";
import styled from "styled-components";
import hero_video from "../../images/video/hero_video.mp4";

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
  margin: 0 auto;
  text-align: center;
  color: #ffff;
`;

const HeroImg = styled.img`
  width: 400px;
`;

const ContentP = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 40px 0;
`;

const Button = styled.button`
  padding: 0.8rem 3rem;
  border-radius: 3rem;
  border: 0.3rem solid #ffffff;
  background-color: transparent;
  margin-right: 2rem;
  background-color: #ffff;
  font-weight: 700;
  font-size: 1rem;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
