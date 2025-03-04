import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Aboutme() {
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
    <div
      className="w-[90%] md:w-[79%] mx-auto flex justify-between items-center mb-17"
      id="aboutme"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amout: 0.7 }}
        className="text-[#EEEEEE] md:w-5/10 w-full flex flex-col items-center text-center md:text-start md:items-start "
      >
        <p className="text-6xl font-bold leading-25">
          About <span className="text-[#00ADB5]">Me</span>
        </p>
        <p className="font-light md:text-lg lg:text-xl leading-7.5 mb-5">
          Hi, I’m Mohamed Tounsi, a passionate front-end developer currently
          studying in my second year at the Institut Supérieur d'Informatique et
          de Multimédia de Sfax <span className="text-[#00ADB5]">(ISIMS)</span>{" "}
          . I graduated with a Baccalaureate in Mathematics with honors{" "}
          <span className="text-[#00ADB5]">(Mention bien)</span>. My focus is on
          building modern, responsive, and user-friendly web applications using
          React and Tailwind CSS as my main tools. My vision is to grow into a
          full-stack web developer, mastering both front-end and back-end
          technologies to create seamless and impactful digital experiences.
        </p>
        <button
          onClick={handleScrollToContactme}
          className="flex justify-between items-center gap-2 bg-[#00ADB5] text-lg px-3 py-1.5 rounded-lg cursor-pointer"
        >
          Let's Talk
          <FaArrowDown
            style={{
              animation: "bounce 0.6s infinite ease-in-out",
            }}
          />
          <style>
            {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(4px); }
          }
        `}
          </style>
        </button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amout: 0.7 }}
        className="w-0  md:w-5/10  md:flex justify-center items-center hidden "
      >
        <img src="img3.png" alt="" />
      </motion.div>
    </div>
  );
}

export default Aboutme;
