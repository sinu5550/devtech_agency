import React from "react";
import Header from "../Header";
import ServiceLayout from "../Services/ServiceLayout";
import { StatsSection } from "./StatsSection";

import About from "../About/About";
import ToolSection from "../ToolSection/ToolSection";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Header></Header>
      </section>
      <StatsSection />
      <section id="services">
        <ServiceLayout />
      </section>

      <section id="expertise">
        <ToolSection />
      </section>

      <section id="about" className="bg-gray-50 pt-20">
        <div className="flex justify-center ">
          <h2 className="text-4xl font-semibold border-black border-b-2 w-max">
            About Us
          </h2>
        </div>
        <About />
      </section>
    </div>
  );
};

export default Home;
