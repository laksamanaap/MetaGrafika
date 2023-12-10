import React from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import About from "../components/About";
import AboutBahari from "../components/AboutBahari";
import FAQ from "../components/Faq";
import CTA from "../components/Cta";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="order-1">
        <Hero />
      </div>
      <div className="order-2">
        <Benefits />
      </div>
      <div className="order-3">
        <AboutBahari />
      </div>
      <div className="order-4">
        <About />
      </div>
      <div className="order-5">
        <FAQ />
      </div>
      <div className="order-6">
        <CTA />
      </div>
    </div>
  );
}

export default Home;
