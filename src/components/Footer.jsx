import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const handleScrollToSkills = () => {
  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    const offset = 210;
    const targetPosition = skillsSection.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};

const handleScrollToprojects = () => {
  const projectsection = document.getElementById("projects");
  if (projectsection) {
    const offset1 = 210;
    const targetPosition = projectsection.offsetTop - offset1;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};

const handleScrollToAboutme = () => {
  const aboutmesection = document.getElementById("aboutme");
  if (aboutmesection) {
    const offset2 = 210;
    const targetPosition = aboutmesection.offsetTop - offset2;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};
const handleScrollToContactme = () => {
  const contactmesection = document.getElementById("contactme");
  if (contactmesection) {
    const offset3 = 210;
    const targetPosition = contactmesection.offsetTop - offset3;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};
const handleScrollToHome = () => {
  const homesection = document.getElementById("home");
  if (homesection) {
    const offset4 = 210;
    const targetPosition = homesection.offsetTop - offset4;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};

function Footer() {
  return (
    <section>
      <div className="w-full bg-[#00ADB5] flex flex-col items-center gap-3 pt-5 ">
        <p
          className="text-7xl text-[#222831] font-bold cursor-pointer   "
          onClick={handleScrollToHome}
        >
          MT.
        </p>
        <p className="text-2xl text-[#222831] font-semibold ">TOUNSI MOHAMED</p>
        <div className="mt-4 md:mt-8">
          <ul className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10">
            <li
              onClick={handleScrollToHome}
              className="text-[#222831] hover:text-[#EEEEEE] transition-all duration-400 ease-in-out cursor-pointer text-lg"
            >
              Home
            </li>
            <li
              onClick={handleScrollToAboutme}
              className="text-[#222831] hover:text-[#EEEEEE] transition-all duration-400 ease-in-out cursor-pointer text-lg"
            >
              About me
            </li>
            <li
              onClick={handleScrollToSkills}
              className="text-[#222831] hover:text-[#EEEEEE] transition-all duration-400 ease-in-out cursor-pointer text-lg"
            >
              Skills
            </li>
            <li
              onClick={handleScrollToprojects}
              className="text-[#222831] hover:text-[#EEEEEE] transition-all duration-400 ease-in-out cursor-pointer text-lg"
            >
              Projects
            </li>
            <li
              onClick={handleScrollToContactme}
              className="text-[#222831] hover:text-[#EEEEEE] transition-all duration-400 ease-in-out cursor-pointer text-lg"
            >
              Contact Me
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-5 mt-6">
          <a href="https://www.facebook.com/mohamed.tounsi.583" target="_blank">
            <FaFacebook
              className=" w-13 h-13  hover:bg-white rounded-lg transition-all duration-300 ease-in-out p-2 "
              color="#222831"
            />
          </a>
          <a href="https://www.instagram.com/mohamed__tounsii/" target="_blank">
            <FaInstagram
              className=" w-13 h-13 hover:bg-white rounded-lg transition-all duration-300 ease-in-out p-2 "
              color="#222831"
            />
          </a>
          <a href="https://github.com/mohamedTounsi" target="_blank">
            <FaGithub
              className=" w-13 h-13 hover:bg-white rounded-lg transition-all duration-300 ease-in-out p-2 "
              color="#222831"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-tounsi-541439351/"
            target="_blank"
          >
            <FaLinkedin
              className=" w-13 h-13 hover:bg-white rounded-lg transition-all duration-300 ease-in-out p-2 "
              color="#222831"
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around text-[#222831] gap-2  md:gap-10 mt-7">
          <div className="flex justify-start items-center gap-2">
            <SiGmail /> : tounsim317@gmail.com
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaPhoneAlt /> : +216 55 196 677
          </div>
        </div>
        <div className="border-t border-[#222831] w-[50%] mx-auto mt-8 "></div>
        <div className=" text-[#222831] text-sm flex items-center gap-0.5 mt-4 mb-10">
          <FaRegCopyright /> mohamed tounsi. All rights reserved
        </div>
      </div>
    </section>
  );
}

export default Footer;
