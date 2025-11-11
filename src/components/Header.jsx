import React, { useRef, useLayoutEffect } from 'react';
import { Hero } from './Hero';
import { FaArrowRight } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const fixedNavRef = useRef(null);
    const logoRef = useRef(null);
    const logoSmallRef = useRef(null);
    const menuItemsRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(logoSmallRef.current, {
                y: -50, 
                opacity: 0,
            });

            const logoEl = logoRef.current;
    const text = logoEl.textContent;
    logoEl.textContent = ""; 
    const letters = text.split("");

    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.display = "inline-block";
      span.style.opacity = 0;
      logoEl.appendChild(span);
    });

    const typingTl = gsap.timeline();
    typingTl.to(logoEl.querySelectorAll("span"), {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.2, 
      ease: "power1.inOut",
      onStart: function () {
        gsap.set(logoEl.querySelectorAll("span"), { y: 20 });
      },
    });

   
    // typingTl.to(logoEl, {
    //   y: -30,
    //   duration: 1.5,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "power1.inOut",
    // });
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: "bottom 275px", 
                    end: "+=100", 
                    scrub: true,
                }
            });

            tl.to(logoSmallRef.current, {
                y: 0, 
                opacity: 1,
                duration: 1,
            }, 0); 

            tl.to(menuItemsRef.current, {
                x: 100, 
                duration: 1,
            }, 0); 
            
            gsap.to(logoRef.current, {
                y: -30,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
              });

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
                ease: "power1.inOut"
            });

            ScrollTrigger.create({
                trigger: logoRef.current,
                start: "bottom 230px", 
                onUpdate: (self) => {
                    const navElement = fixedNavRef.current;
                    if (self.progress > 0) {
                        navElement.classList.add('bg-white', 'shadow-lg');
                        navElement.classList.remove('py-8');
                    } else {
                        navElement.classList.remove('bg-white', 'shadow-lg');
                        navElement.classList.add('py-8');
                    }
                }
            });
        }, fixedNavRef); 

        return () => ctx.revert();
    }, [fixedNavRef, logoRef]);

    return (
        <div className='relative'>
            <header 
                ref={fixedNavRef} 
                className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-8 px-8'
            >
                <div className='flex justify-between items-center w-full py-4'>
                    <div className='flex items-center gap-6'> 
                        <p ref={logoSmallRef} className='font-bold text-lg md:text-2xl'>
                            DevTech.
                        </p>
                        <nav 
                            ref={menuItemsRef}
                            className='ml-[-100px] hidden md:flex items-center w-max py-3 px-5 bg-gray-100 gap-12 rounded-md font-semibold'
                        >
                            <a href="#services">Services</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#about">About</a>
                            <a href="#insights">Insights</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>
                    <button className='py-3 px-5 bg-gray-100 rounded-md font-semibold flex items-center gap-2 ml-4'>
                        Get Started <FaArrowRight />
                    </button>
                </div>
            </header>

            <div className='bg-gradient-to-b from-gray-300 to-white'>
                <div className='h-[90px]'></div> 
                <h1 
                    ref={logoRef} 
                    className='logo-main font-bold tracking-wider text-[200px] hidden md:flex justify-center mt-12 mb-12 relative z-40'
                >
                    DevTech.
                </h1>
            </div>
            
            <Hero/>
        </div>
    );
};

export default Header;
