import React from "react";
import { withRouter, Link } from "react-router-dom";
import MainVideo from "../Main/MainVideo";
import MainVideoContent from "./MainVideoContent";
import styled, { css } from "styled-components";

const Main = () => {
  return (
    <div>
      <MainVideo />
      <MainVideoContent />
    </div>
  );
};

export default Main;
