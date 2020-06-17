import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {WIDTH800} from "../../../Config"

const HeaderTop = () => {
  return (
    <Drawers>
      <DrawersBar>
        <span>Free ground shipping on all others</span>
        {/* <span>COVID-19 update</span> */}
      </DrawersBar>
      <LoginBtn><Link to="/Signin"><button>Login</button></Link></LoginBtn>
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
    transition: all opacity 0.2s;
  }

`;

const LoginBtn = styled.div`
  cursor: pointer;
  position: absolute;
  width:2%;
  top: 0%;
  right: 0;
  z-index: 100;
  padding-top: 0.2%;
  margin-right:4%;
 
 
  button{
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 0.8rem;
  line-height: 3;
  color:white;
  outline:none;
  background-color: #000;
  &:hover {
  text-decoration: underline;
  }
  }
  @media only screen and (max-width:${WIDTH800}){
    display:none;
  }
`;
export default HeaderTop;
