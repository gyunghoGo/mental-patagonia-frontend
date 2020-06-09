import React from "react";
// import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderTop = () => {
  return (
    <Drawers>
      <DrawersBar>
        <span>Free ground shipping on all others</span>
        <span>COVID-19 update</span>
      </DrawersBar>
      <LoginBtn>Login</LoginBtn>
    </Drawers>
  );
};

const Drawers = styled.div`
  position: relative;
  width: 100vw;
  z-index: 999;
  top: 0;
`;
const DrawersBar = styled.div`
  height: 2.9rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: absolute;
  z-index: 100;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 0.889rem;
  span {
    color: white;
  }
`;

const LoginBtn = styled.div`
  color: white;
  cursor: pointer;
  position: absolute;
  top: 0%;
  right: 0;
  z-index: 100;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 0.8rem;
  line-height: 3;
  padding-right: 5%;
  padding-top: 0.2%;
  &:hover {
    text-decoration: underline;
  }
`;
export default HeaderTop;
