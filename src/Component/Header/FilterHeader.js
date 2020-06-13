import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const FilterHeader = () => {
    return(
        <Drawers>
        <ConnectBtn>
            <Link to="/products"><button>Mens'</button></Link>
            <span>Filter</span>
        </ConnectBtn>
      </Drawers>
    );
};
export default FilterHeader;

const Drawers = styled.div`
  position: relative;
  width: 100vw;
  z-index: 99;
  top: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: #000;

`;
const ConnectBtn = styled.div`
  cursor: pointer;
  position: absolute;
  display:flex;
  justify-content:space-between;
  width:90vw;
  top: 0%;
  right: 0;
  z-index: 100;
  button{
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 0.8rem;
    color:white;
    outline:none;
    border:0;
        &:hover {
        text-decoration: underline;
        }
  }
  span {
    position: absolute;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.889rem;
    transition: all opacity 0.2s;
  }
`;