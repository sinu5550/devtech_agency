import React, { useRef, useLayoutEffect } from "react";
import { Hero } from "./Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const logoEl = logoRef.current;
      const text = logoEl.textContent;
      logoEl.textContent = "";

      // Splitting logo text into spans for typing animation
      const letters = text.split("");
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        span.style.opacity = 0;
        logoEl.appendChild(span);
      });

      // Typing effect for main logo
      const typingTl = gsap.timeline();
      typingTl.to(logoEl.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.15,
        ease: "power1.inOut",
        onStart: function () {
          gsap.set(logoEl.querySelectorAll("span"), { y: 20 });
        },
      });

      // Floating effect (up & down)
      gsap.to(logoRef.current, {
        y: -30,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Scroll scaling and move effect for large logo
      gsap.to(logoRef.current, {
        scrollTrigger: {
          trigger: logoRef.current,
          start: "bottom 450px",
          end: "bottom top",
          scrub: true,
        },
        scale: -2,
        yPercent: -150,
        xPercent: -150,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }, logoRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
     

      <div className="bg-gradient-to-b from-gray-300 to-white">
        <div className="h-[90px]"></div>
        <h1
          ref={logoRef}
          className="logo-main font-bold tracking-wider text-[200px] hidden md:flex justify-center mt-12 mb-12 relative z-40"
        >
          DevTech.
        </h1>
      </div>

      <Hero />
    </div>
  );
};

export default Header;
