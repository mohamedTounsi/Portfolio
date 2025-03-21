import React from "react";
import SkillBox from "./SkillBox";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Skills() {
  const data = [
    { icon: "html2", lang: "HTML" },
    { icon: "css2", lang: "CSS" },
    { icon: "javascript", lang: "Javascript" },
    { icon: "react2", lang: "React.JS" },
    { icon: "tailwind", lang: "Tailwind" },
    { icon: "python", lang: "Python" },
    { icon: "git", lang: "Git" },
    { icon: "figma", lang: "Figma" },
  ];

  return (
    <motion.div
      variants={fadeIn("inplace", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, margin: "0px 0px -30% 0px" }}
      id="skills"
      className="w-full pb-10 "
    >
      <div className="w-full mx-auto relative overflow-hidden">
        <Marquee gradient={false} speed={100} className="py-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="mx-4 flex items-center space-x-2  text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <SkillBox icon={item.icon} lang={item.lang} />
            </div>
          ))}
        </Marquee>

        {/* Fading effect using mask-image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          }}
        ></div>
      </div>
    </motion.div>
  );
}

export default Skills;
