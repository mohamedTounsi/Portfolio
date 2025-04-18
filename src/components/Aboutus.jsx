import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Lottie from "lottie-react";
import pc from "../pc.json";

function Aboutus() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.002,
      },
    }),
  };

  const h1Variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const h2Variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.02,
      },
    }),
  };

  const Welcome = "Welcome to My Profile";
  const headingText = "About Me";
  const paragraphText =
    "Hi I'm Mohamed Tounsi, a passionate front-end developer currently in my second year at ISIMS. I graduated with a Baccalaureate in Mathematics with honors (Mention bien). My focus is on building modern, responsive, and user-friendly web applications using React and Tailwind CSS. My vision is to grow into a full-stack web developer, mastering both front-end and back-end technologies to create seamless and impactful digital experiences";

  return (
    <section
      className=" flex flex-col md:flex-row justify-between items-center w-[90%] md:w-[70%] mx-auto"
      id="aboutus"
    >
      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start gap-6 md:w-1/2">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          className="flex flex-col gap-5 items-center md:items-start"
        >
          {/* Animated Heading */}
          <motion.h1
            className="text-2xl text-gray-400 font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          >
            {headingText.split("").map((letter, index) => (
              <motion.span key={index} variants={h1Variants} custom={index}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Welcome Text */}
          <motion.h1
            className="text-4xl md:text-5xl text-[#00ADB5] font-semibold text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          >
            {Welcome.split("").map((letter, index) => (
              <motion.span key={index} variants={h2Variants} custom={index}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-base md:text-lg text-center md:text-left text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          >
            {paragraphText.split("").map((letter, index) => (
              <motion.span key={index} variants={textVariants} custom={index}>
                {letter}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>

      {/* Lottie Animation Section */}
      <motion.div
        variants={fadeIn("inplace", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        className="md:w-1/2 flex justify-center"
      >
        <Lottie animationData={pc} className="w-64 h-64 md:w-135 md:h-135" />
      </motion.div>
    </section>
  );
}

export default Aboutus;
