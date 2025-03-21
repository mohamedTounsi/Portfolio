import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Lottie from "lottie-react";
import home from "../home1.json";

function Home() {
  return (
    <div className="mb-15 " id="home">
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[90%] xl:w-[75%] mx-auto mb-10 gap-6">
        <motion.div
          variants={fadeIn("inplace", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          className="w-full md:w-1/2 text-[#EEEEEE] order-2 md:order-1"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-start px-2 md:px-0">
            HELLO I'AM <span className="text-[#00ADB5]">TOUNSI MOHAMED</span>
            <br />
            <span className="flex justify-center md:justify-start text-gray-500 ">
              <ReactTyped
                strings={["STUDENT", "FRONTEND DEVELOPER", "FREELANCER"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </span>
            <br />
            BASED IN <span className="text-[#00ADB5]">TUNISIA</span>
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("inplace", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
        >
          <Lottie
            animationData={home}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </motion.div>
      </div>
      <div className=" w-[80%] md:w-[90%] mx-auto flex justify-center  items-center mt-6">
        <div className="flex justify-center items-center gap-4 md:gap-16 ">
          {[
            {
              href: "https://www.facebook.com/mohamed.tounsi.583",
              src: "facebook.png",
            },
            {
              href: "https://www.instagram.com/mohamed__tounsii/",
              src: "instaw.png",
            },
            { href: "https://github.com/mohamedTounsi", src: "githubw.png" },
            {
              href: "https://www.linkedin.com/in/mohamed-tounsi-541439351/",
              src: "linkedin.png",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              variants={fadeIn("inplace", 0.3 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -30% 0px" }}
              href={item.href}
              target="_blank"
            >
              <img
                className="w-25 md:w-14 lg:w-23 cursor-pointer hover:bg-[#00ADB5] transition-all duration-300 ease-in-out rounded-2xl p-2.5 md:p-3"
                src={item.src}
                alt="social"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
