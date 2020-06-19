import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import MainVideo from "../Main/MainVideo";
import SlideCarousel from "../Main/SlideCarousel";
import MainHero from "./MainHero";
import SlideCarousel2 from "../Main/SlideCarousel2";
import MainHero2 from "./MainHero2";

const Main = () => {
  return (
    <>
      <Header />
      <MainVideo />
      <SlideCarousel />
      <MainHero />
      <SlideCarousel2 />
      <MainHero2 />
      <Footer />
    </>
  );
};

export default Main;
