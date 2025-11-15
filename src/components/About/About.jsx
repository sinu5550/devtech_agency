import React from "react";

const features = [
  { title: "Qualified", desc: "Experienced and skilled team" },
  { title: "Proficient", desc: "Utilize modern methodologies and tools" },
  { title: "Expert", desc: "Deep expertise in AI and blockchain" },
  {
    title: "Transparent",
    desc: "Clear communication and realistic expectations",
  },
  { title: "Integrity", desc: "Ethical and professional practices" },
  { title: "Relationship", desc: "Long-term partnerships & client success" },
];

const About = () => {
  return (
    <div className=" container mx-auto pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-10">
        {features.map((item, index) => {
          const borderClass =
            index % 2 === 0
              ? "[border-image:linear-gradient(180deg,#2b79d3,transparent)_1_100%]"
              : "[border-image:linear-gradient(0deg,#2b79d3,transparent)_1_100%]";

          return (
            <div className="hover-3d">
              <div
                key={index}
                className={` flex flex-col items-center text-center p-6 border-2 rounded-md bg-white shadow-sm 
            hover:shadow-lg transition duration-300 ${borderClass}`}
              >
                <div className="text-3xl mb-3">⭐</div>
                <h4 className="font-semibold text-xl">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
