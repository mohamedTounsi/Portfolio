import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Title({ title }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -30% 0px" }}
      className="flex flex-col items-center mb-20 w-full"
    >
      <div className="flex items-center w-full max-w-2xl">
        <div className="flex-grow border-t-2 border-[#00ADB5]"></div>
        <p className="text-4xl md:text-5xl font-semibold text-[#EEEEEE] px-4 relative">
          MY{" "}
          <span className="bg-[#00ADB5] px-3 py-1 rounded-lg shadow-lg">
            {title}
          </span>
        </p>
        <div className="flex-grow border-t-2 border-[#00ADB5]"></div>
      </div>
    </motion.div>
  );
}

export default Title;
