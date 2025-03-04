import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Title({ title }) {
  return (
    <div className="flex justify-center items-center mb-20">
      <p className="text-5xl font-semibold text-[#EEEEEE] cursor-pointer ">
        {" "}
        MY <span className="bg-[#00ADB5] px-2 py-1 rounded-lg">
          {title}
        </span>{" "}
      </p>
    </div>
  );
}

export default Title;
