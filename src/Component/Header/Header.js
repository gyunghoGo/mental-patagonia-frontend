import React from "react";
// import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import HeaderTop from "./HeaderTop/HeaderTop";
import NavHeader from "./NavHeader/NavHeader";
import HoverHeader from "./HoverHeader/HoverHeader";

const Header = () => {
  return (
    <Headers>
      <HeaderTop />
      <NavHeader />
      <HoverHeader />
    </Headers>
  );
};

export default Header;

const Headers = styled.div``;
