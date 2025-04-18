import React from "react";
import { motion } from "framer-motion";

function SkillBox({ icon, lang, level, index }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        delay: index * 0.2,
        ease: "easeInOut",
      }}
      className="flex flex-col md:flex-row items-center gap-6 bg-[#1F1F1F] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Icon Box */}
      <div className="w-16 h-16 flex items-center justify-center bg-[#2A2A2A] rounded-lg">
        <img
          src={icon}
          alt={`${lang} icon`}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex-1 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-sm md:text-lg md:font-semibold">
            {lang}
          </p>
          <p className="text-white">{level} %</p>
        </div>
        <div className="w-full bg-[#3a3a3a] h-3 rounded-full mt-2 overflow-hidden">
          <div
            className="bg-[#00ADB5] h-full rounded-full transition-all duration-500"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillBox;
