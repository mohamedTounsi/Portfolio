import React from "react";
import SkillBox from "./SkillBox";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Skills() {
  const data = [
    { duration: 0.1, icon: "html2", lang: "HTML" },
    { duration: 0.3, icon: "css2", lang: "CSS" },
    { duration: 0.5, icon: "javascript", lang: "Javascript" },
    { duration: 0.7, icon: "react2", lang: "React.JS" },
    { duration: 0.9, icon: "tailwind", lang: "Tailwind" },
    { duration: 1.1, icon: "python", lang: "Python" },
    { duration: 1.2, icon: "git", lang: "Git" },
    { duration: 1.5, icon: "figma", lang: "Figma" },
  ];
  return (
    <div
      id="skills"
      className="w-[90%] md:w-full lg:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-4  gap-10 mb-15  "
    >
      {data.map((item) => (
        <motion.div
          variants={fadeIn("up", item.duration)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amout: 0.7 }}
          className="flex justify-center items-center"
        >
          <SkillBox icon={item.icon} lang={item.lang} />
        </motion.div>
      ))}
    </div>
  );
}

export default Skills;
