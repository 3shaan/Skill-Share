import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import HomeSlider from "./HomeSlider";

const MainPage = () => {
  return (
    <div>
      <Hero></Hero>
      <HomeSlider></HomeSlider>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
