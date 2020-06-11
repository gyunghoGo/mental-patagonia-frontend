import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import MainVideo from "../Main/MainVideo";
import SlideCarousel from "../Main/SlideCarousel";
import MainHero from "./MainHero";

const Main = () => {
  return (
    <>
      <Header />
      <MainVideo />
      <SlideCarousel />
      <MainHero />
      <Footer />
    </>
  );
};

export default Main;
