import React from "react";
import Hero from "../components/Hero";
import SliderSection from "../components/SliderSection";
import Services from "../components/Services";
import Buses from "../components/Buses";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

const Home = ({ theme }) => {
  return (
    <>
      <Hero theme={theme} />
      <SliderSection theme={theme} />
      <Services />
      <Buses />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
