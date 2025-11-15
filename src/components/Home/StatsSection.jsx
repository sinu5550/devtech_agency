import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Years of Experience", value: 2 },
  { label: "Projects Completed", value: 21 },
  { label: "Happy Clients", value: 100 },
  { label: "Developers", value: 7 },
];

export const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div>
      <div ref={ref} className="w-full pb-8 pt-5 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center px-4 ">
          {stats.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <span className="absolute text-[80px] font-semibold text-gray-300 opacity-30 -top-1 select-none">
                {item.value}+
              </span>

              <h3 className="text-7xl font-semibold text-black relative z-10">
                {inView ? <CountUp end={item.value} duration={2} /> : "0"}+
              </h3>

              <p className="mt-3 text-xl font-medium text-gray-700">
                {item.label}
              </p>

              <div className="bg-black h-24 w-24 rounded-full -mt-32 mb-16 blur-[160px]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
