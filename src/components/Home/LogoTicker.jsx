import React from "react";
import logos from "../../assets/TechLogo.json";
import Marquee from "react-fast-marquee";
const LogoTicker = () => {
  return (
    <div className="my-20">
      <hr className="border-1 border-black" />
      <Marquee gradient={true} className="opacity-75">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.name}
            className="h-16 object-contain mx-16 my-5"
          />
        ))}
      </Marquee>
      <hr className="border-1 border-black  " />
    </div>
  );
};

export default LogoTicker;
