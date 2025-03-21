import React from "react";

function SkillBox({ icon, lang }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-40 lg:w-50 p-2  md:p-4 lg:p-5 cursor-pointer  hover:scale-115 transition-all duration-300 ease-in-out rounded-2xl ">
      <img
        className="w-20 h-20 md:w-30 md:h-30 object-cover"
        src={`${icon}.png`}
        alt=""
      />
      <p className="text-[#EEEEEE] text-xl  mdtext-3xl font-semibold">
        {" "}
        {lang}{" "}
      </p>
    </div>
  );
}

export default SkillBox;
