import React from "react";
import MainVideo from "../Main/MainVideo";
import SlideCarousel from "../Main/SlideCarousel";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <MainVideo />
      <SlideCarousel />
      <Footer />
    </div>
  );
};

export default Main;
