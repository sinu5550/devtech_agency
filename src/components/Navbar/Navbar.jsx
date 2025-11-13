import React, { useRef, useLayoutEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const fixedNavRef = useRef(null);
  const logoSmallRef = useRef(null);
  const menuItemsRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(logoSmallRef.current, { y: -50, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top+=165 top",
          end: "+=100",
          scrub: true,
        },
      });

      tl.to(logoSmallRef.current, { y: 0, opacity: 1, duration: 1 }, 0);
      tl.to(menuItemsRef.current, { x: 100, duration: 1 }, 0);

      ScrollTrigger.create({
        trigger: document.body,
        start: "top+=230 top",
        onUpdate: (self) => {
          const nav = fixedNavRef.current;
          if (self.progress > 0) {
            nav.classList.add("bg-white", "shadow-lg");
            nav.classList.remove("py-8");
          } else {
            nav.classList.remove("bg-white", "shadow-lg");
            nav.classList.add("py-8");
          }
        },
      });
    }, fixedNavRef);

    return () => ctx.revert();
  }, []);

  // Scroll handler
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      // Navigate home first
      navigate("/", { replace: false });
      // Then scroll after small delay (wait for page load)
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    } else {
      // Already on home
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      ref={fixedNavRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-8 px-8"
    >
      <div className="flex justify-between items-center w-full py-4">
        <div className="flex items-center gap-6">
          <p ref={logoSmallRef} className="font-bold text-lg md:text-2xl">
            DevTech.
          </p>
          <nav
            ref={menuItemsRef}
            className="ml-[-100px] hidden md:flex items-center w-max py-3 px-5 bg-gray-100 gap-12 rounded-md font-semibold"
          >
            <button onClick={() => handleScroll("services")}>Services</button>
            <button onClick={() => handleScroll("pricing")}>Pricing</button>
            <button onClick={() => handleScroll("about")}>About</button>
            <button onClick={() => handleScroll("insights")}>Insights</button>
            <button onClick={() => handleScroll("contact")}>Contact</button>
          </nav>
        </div>
        <button className="py-3 px-5 bg-gray-100 rounded-md font-semibold flex items-center gap-2 ml-4">
          Get Started <FaArrowRight />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
