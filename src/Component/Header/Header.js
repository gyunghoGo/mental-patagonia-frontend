import React from "react";
// import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import HeaderTop from "./HeaderTop/HeaderTop";
import NavHeader from "./NavHeader/NavHeader";

const Header = () => {
  return (
    <div>
      <HeaderTop />
      <NavHeader />
    </div>
  );
};

export default Header;

