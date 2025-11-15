import React from "react";
import Header from "../Header";
import ServiceLayout from "../Services/ServiceLayout";
import { StatsSection } from "./StatsSection";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <StatsSection />
      <section id="services">
        <ServiceLayout />
      </section>

      <section id="pricing" className="min-h-[100vh] bg-gray-50">
        <h2 className="text-center py-20 text-4xl font-bold">
          Pricing Section
        </h2>
      </section>

      <section id="about" className="min-h-[100vh] bg-gray-100">
        <h2 className="text-center py-20 text-4xl font-bold">About Section</h2>
      </section>

      <section id="insights" className="min-h-[100vh] bg-gray-200">
        <h2 className="text-center py-20 text-4xl font-bold">
          Insights Section
        </h2>
      </section>

      <section id="contact" className="min-h-[100vh] bg-gray-300">
        <h2 className="text-center py-20 text-4xl font-bold">
          Contact Section
        </h2>
      </section>
    </div>
  );
};

export default Home;
