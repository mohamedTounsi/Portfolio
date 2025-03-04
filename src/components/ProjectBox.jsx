import React from "react";

function ProjectBox({ img, hoverimg, nom, parag }) {
  return (
    <div className="p-6  rounded-lg flex flex-col gap-5 group cursor-pointer bg-transparent border border-[#393E46]">
      <div className="overflow-hidden rounded-lg">
        <a href="https://positivus-bay.vercel.app/" target="_blank">
          <img src={`${img}.png`} alt="" className="rounded-lg " />
        </a>
      </div>
      <div className="text-[#EEEEEE]">
        <p className="text-2xl font-bold">{nom}</p>
        <p className="text-lg">{parag}</p>
      </div>
      <div className="text-lg font-light flex justify-start gap-3 items-center text-[#EEEEEE]">
        <a
          href="https://github.com/mohamedTounsi/Positivus/tree/main"
          target="_blank"
        >
          <button className="border border-[#EEEEEE]] px-3 py-1.5 rounded-md text-xl cursor-pointer hover:bg-[#00ADB5] hover:border-[#00ADB5] hover:text-[#EEEEEE] transition-all duration-300 ease-in-out">
            Github
          </button>
        </a>
        <a href="https://positivus-bay.vercel.app/" target="_blank">
          <button className="border border-[#EEEEEE]] px-3 py-1.5 rounded-md text-xl cursor-pointer hover:bg-[#00ADB5] hover:border-[#00ADB5] hover:text-[#EEEEEE] transition-all duration-300 ease-in-out">
            Live DEMO
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
