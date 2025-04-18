import React from "react";
import SkillBox from "./SkillBox";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Skills() {
  const data = [
    { icon: "html2.png", lang: "HTML", level: 100 },
    { icon: "css2.png", lang: "CSS", level: 90 },
    { icon: "javascript.png", lang: "Javascript", level: 70 },
    { icon: "react2.png", lang: "React.JS", level: 90 },
    { icon: "tailwind.png", lang: "Tailwind", level: 100 },
    { icon: "python.png", lang: "Python", level: 50 },
    { icon: "git.png", lang: "Git", level: 60 },
    { icon: "nodejs.png", lang: "Node JS", level: 70 },
    { icon: "mongodb3.png", lang: "MongoDB", level: 80 },
    { icon: "nextjs.png", lang: "Next JS", level: 100 },
    { icon: "cloudinary.webp", lang: "Cloudinary", level: 90 },
    { icon: "clerk.webp", lang: "Clerk", level: 80 },
  ];

  return (
    <motion.div
      variants={fadeIn("inplace", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, margin: "0px 0px -30% 0px" }}
      id="skills"
      className="w-full pb-10"
    >
      <div className="  md:w-[90%] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <SkillBox
              key={index}
              icon={item.icon}
              lang={item.lang}
              level={item.level}
              index={index} // ← important
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
