import React from "react";
// import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import HeaderTop from "./HeaderTop/HeaderTop";
import NavProductsHeader from "./NavHeader/NavProductsHeader";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <NavProductsHeader />
    </>
  );
};

export default Header;

