import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import MainVideo from "../Main/MainVideo";
import MainVideoContent from "./MainVideoContent";

const Main = () => {
  return (
    <div>
      <MainVideo />
      <MainVideoContent />
    </div>
  );
};

export default Main;
