import React from "react";
import Plane from "../assets/images/paper-airplane.png";
import seo from "../assets/images/lightning.png";
import logo from "../assets/images/d-sketch.png";
export const Hero = () => {
  return (
    <main className="relative ">
      <div className="absolute inset-0   "></div>
      <div
        className="absolute inset-0  bg-contain bg-no-repeat  bg-center opacity-5 mb-[-5%] " // Add other background classes here
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></div>

      <div className="relative z-10">
        <div className="text-6xl text- flex items-center flex-col py-8">
          <h1 className="flex font-medium items-center">
            Unleash <img className="w-20 mx-4" src={Plane} alt="" />
            Standout
          </h1>
          <h1 className="flex font-medium items-center">
            Web Design and SEO <img className="w-20 mx-4" src={seo} alt="" />{" "}
            Solutions
          </h1>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="rounded-full bg-cyan-900 text-white px-5 py-3 font-light shadow-md">
            Let's Connect
          </button>
          <button className="rounded-full bg-white font-medium px-5 py-3 shadow-md">
            Check Our Work
          </button>
        </div>

        <div className="text-center mt-40">
          We help business all around the world to grow.
        </div>
      </div>
    </main>
  );
};
