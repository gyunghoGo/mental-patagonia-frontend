import React from "react";
import styled from "styled-components";
import Main from "./Main";
import hero_video from "../../images/video/hero_video.mp4";

const MainVideo = () => {
  return (
    <StyledMainVideo>
      <video playsinline autoplay="true" muted loop>
        <source src={hero_video} type="video/mp4" />
      </video>
    </StyledMainVideo>
  );
};

export default MainVideo;

const StyledMainVideo = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: -100;
  background-size: cover;
  overflow: hidden;
`;
