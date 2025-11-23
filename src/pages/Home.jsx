// src/pages/Home.jsx
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
      <Services theme={theme}/>
      <Buses theme={theme}/>
      <Reviews theme={theme} />
      <Contact theme={theme} />  {/* <- this is the key line */}
    </>
  );
};

export default Home;
