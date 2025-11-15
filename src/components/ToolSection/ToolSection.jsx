import { useState } from "react";

import react from "../../../public/assets/tools/react.png";
import next from "../../../public/assets/tools/next.png";
import node from "../../../public/assets/tools/node.png";
import typescript from "../../../public/assets/tools/typescript.png";
import javascript from "../../../public/assets/tools/javascript.png";
import python from "../../../public/assets/tools/python.png";
import mongodb from "../../../public/assets/tools/mongodb.png";
import firebase from "../../../public/assets/tools/firebase.png";
import flutter from "../../../public/assets/tools/flutter.png";
import android from "../../../public/assets/tools/android.png";
import ios from "../../../public/assets/tools/ios.svg";
import figma from "../../../public/assets/tools/figma.svg";
import adobexd from "../../../public/assets/tools/adobexd.svg";
import premiere from "../../../public/assets/tools/premiere.svg";
import aftereffects from "../../../public/assets/tools/aftereffects.svg";
import git from "../../../public/assets/tools/git.png";
import vscode from "../../../public/assets/tools/vscode.png";
import { TbDeviceImacCode, TbDeviceMobileCode } from "react-icons/tb";
import { PiPenNibBold } from "react-icons/pi";
import { MdOutlineVideoSettings } from "react-icons/md";
import { CgArrowBottomRightR } from "react-icons/cg";

const ToolSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      name: "Web & Fullstack",
      icon: <TbDeviceImacCode className="text-5xl" />,
      skills: [
        { name: "React", icon: react },
        { name: "Next.js", icon: next },
        { name: "Node.js", icon: node },
        { name: "TypeScript", icon: typescript },
        { name: "JavaScript", icon: javascript },
        { name: "Python", icon: python },
        { name: "MongoDB", icon: mongodb },
        { name: "Firebase", icon: firebase },
      ],
    },
    {
      name: "Mobility",
      icon: <TbDeviceMobileCode className="text-5xl" />,
      skills: [
        { name: "React Native", icon: react },
        { name: "Flutter", icon: flutter },
        { name: "Android", icon: android },
        { name: "iOS", icon: ios },
      ],
    },
    {
      name: "UI/UX",
      icon: <PiPenNibBold className="text-5xl" />,
      skills: [
        { name: "Figma", icon: figma },
        { name: "Adobe XD", icon: adobexd },
      ],
    },
    {
      name: "Video Editing",
      icon: <MdOutlineVideoSettings className="text-5xl" />,
      skills: [
        { name: "Premiere Pro", icon: premiere },
        { name: "After Effects", icon: aftereffects },
      ],
    },
    {
      name: "Others",
      icon: <CgArrowBottomRightR className="text-5xl" />,
      skills: [
        { name: "Git", icon: git },
        { name: "VS Code", icon: vscode },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="container mx-auto px-6 md:px-10 lg:px-12 my-24 relative"
    >
      <div className="absolute top-20 bg-primary/50 w-11/12 h-[100px] blur-[120px]" />

      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-gray-700 text-lg">Technologies we work with</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 bg-base-300/50 backdrop-blur-sm rounded-2xl p-6 mb-8 ">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className={`flex flex-col justify-center items-center rounded-xl transition-all duration-300 min-w-[140px] h-[120px] ${
                activeTab === index
                  ? "border-dashed border-2 border-[#6a89cc] shadow-lg scale-105"
                  : " "
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="mb-3">{category.icon}</div>
              <span className="text-sm font-semibold text-center leading-tight">
                {category.name}
              </span>
            </button>
          ))}
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories[activeTab]?.skills.map((skill, index) => (
            <div
              key={index}
              className="card  bg-white backdrop-blur-sm border-dashed border-2 hover:border-[#6a89cc] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group py-6 "
            >
              <div className=" card-body items-center text-center p-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 mb-2"
                />
                <h3 className="card-title text-sm font-semibold">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolSection;
