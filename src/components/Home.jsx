import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Home() {
  return (
    <div className="mb-15" id="home">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center w-full  md:w-[90%] xl:w-[80%] mx-auto mb-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amout: 0.7 }}
          className="w-full md:w-7/10 text-[#EEEEEE] order-2 md:order-1"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-8 text-center md:text-start   ">
            HELLO I'AM <span className="text-[#00ADB5]">TOUNSI MOHAMED</span>
            <br />
            <div className="flex justify-center md:justify-start">
              <ReactTyped
                className=""
                strings={["STUDENT", "FRONTEND DEVELOPER", "FREELANCER"]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input
                  type="text"
                  className="text-center md:text-start w-full bg-transparent outline-none"
                />
              </ReactTyped>
            </div>
            <br />
            BASED IN <span className="text-[#00ADB5]">TUNISIA</span>
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amout: 0.7 }}
          className="w-5/10 md:w-3/10 order-1 md:order-2"
        >
          <img src="illustration1.png" />
        </motion.div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="border w-2/10  md:w-1/10 border-[#00ADB5]  "></div>
        <div className="flex justify-around items-center w-6/10  md:w-3/10">
          <a href="https://www.facebook.com/mohamed.tounsi.583" target="_blank">
            <img
              className="w-[50px] md:w-[75px] md:p-3 lg:w-[100px] cursor-pointer hover:bg-[#00ADB5] transition-all duration-500 ease-in-out rounded-2xl p-2  lg:p-5    "
              src="facebook.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/mohamed__tounsii/" target="_blank">
            <img
              className="w-[50px] md:w-[75px] md:p-3 lg:w-[100px] cursor-pointer hover:bg-[#00ADB5] transition-all duration-300 ease-in-out rounded-2xl p-2  lg:p-5 "
              src="instaw.png"
              alt=""
            />
          </a>
          <a href="https://github.com/mohamedTounsi" target="_blank">
            <img
              className="w-[50px] md:w-[75px] md:p-3 lg:w-[100px] cursor-pointer hover:bg-[#00ADB5] transition-all duration-300 ease-in-out rounded-2xl p-2  lg:p-5 "
              src="githubw.png"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-tounsi-541439351/"
            target="_blank"
          >
            <img
              className="w-[50px] md:w-[75px] md:p-3 lg:w-[100px] cursor-pointer hover:bg-[#00ADB5] transition-all duration-300 ease-in-out rounded-2xl p-2  lg:p-5 "
              src="linkedin.png"
              alt=""
            />
          </a>
        </div>
        <div className="w-2/10 md:w-6/10 border border-[#00ADB5]"></div>
      </div>
    </div>
  );
}

export default Home;
