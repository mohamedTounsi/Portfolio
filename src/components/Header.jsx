import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  return (
    <div className="text-[#EEEEEE] flex justify-between items-center w-[87%] md:w-[80%] lg:w-[40%] mx-auto pt-5 mb-24 ">
      <p className="font-bold text-6xl text-[#00ADB5] cursor-pointer ">MT.</p>
      <div className="md:hidden mr-[10px]">
        <button className="text-[#00ADB5] cursor-pointer" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <ul className="hidden md:flex md:justify-between md:items-center gap-[20px] whitespace-nowrap ">
        <li
          className="cursor-pointer relative group  "
          onClick={handleScrollToAboutme}
        >
          About Me
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00ADB5] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li
          className="cursor-pointer relative group "
          onClick={handleScrollToSkills}
        >
          Skills
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00ADB5] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li
          className="cursor-pointer relative group "
          onClick={handleScrollToprojects}
        >
          Projects
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00ADB5] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li
          className="cursor-pointer relative group "
          onClick={handleScrollToContactme}
        >
          Contact Me
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00ADB5] transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <a href="soura.jpg" download="rouge.jpg">
        <button className="md:flex justify-center items-center gap-1.5 bg-[#00ADB5] rounded-lg pl-4 pr-3 py-2 cursor-pointer hidden text-lg hover:scale-110 transition-all duration-300 ease-in-out font-semibold  ">
          Resume
          <motion.div
            className="flex"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 15, -15, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FiDownload />
          </motion.div>
        </button>
      </a>
      <div
        className={`fixed z-50 bg-[#00ADB5] bottom-0 left-0 right-0 h-[60%] w-[100%] rounded-tl-2xl rounded-tr-2xl pl-3.5 pt-5 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="flex flex-col font-semibold text-[#222831]">
          <li>
            <p className="font-bold text-6xl cursor-pointer ">MT.</p>
          </li>
          <li className="cursor-pointer relative group py-3.5 border-b border-[#222831] w-[90%] ">
            About Me
          </li>
          <li
            onClick={handleScrollToSkills}
            className="cursor-pointer relative group py-3.5 border-b border-[#222831] w-[90%]"
          >
            Skills
          </li>
          <li className="cursor-pointer relative group py-3.5 border-b border-[#222831] w-[90%]">
            Projects
          </li>

          <li className="cursor-pointer relative group py-3.5 border-b border-[#222831] w-[90%]">
            Contact Me
          </li>
          <li className="border px-[15px]  py-[10px] rounded-[7px] w-fit cursor-pointer mt-5 flex justify-between gap-2 items-center text-lg">
            Resume <FiDownload />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
