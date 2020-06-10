import React from "react";
import styled, { css } from "styled-components";

const MainHero = () => {
  return (
    <HeroWrap>
      <IMG />
      <HeroContent>
        <Title>Comfort is Relative™</Title>
        <Desc>
          Our Fair Trade Certified™ sewn tech tees use a mix of recycled
          materials and are made to handle all of the uncomfortable moments—and
          the transitions between them.
        </Desc>
        <Button>Capilene® Cool Tech Tees</Button>
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
  top: 200%;
  width: 60%;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 800;
  letter-spacing: 0.1;
  margin-left: 8%;
  width: 90%;
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 1.6;
  width: 65%;
  margin-left: 8%;
  padding: 2.5% 0;
`;

const Button = styled.button`
  background-color: white;
  width: 34%;
  padding: 2%;
  border-radius: 20rem;
  font-size: 16px;
  font-weight: 600;
  margin-left: 8%;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
