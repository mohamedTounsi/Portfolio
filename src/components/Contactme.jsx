import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Lottie from "lottie-react";
import contact from "../contact.json";
function Contactme() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.025,
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
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    if (!email.endsWith("@gmail.com")) {
      setEmailError("Email must end with @gmail.com");
      return false;
    }
    setEmailError("");
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSubmitted(false);

    const formData = new FormData(event.target);
    const email = formData.get("email");

    if (!validateEmail(email)) {
      setLoading(false);
      return;
    }

    formData.append("access_key", "7eef64c3-2cec-470a-ab68-039d4c34a9e8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      event.target.reset();
    }
  };
  const headingText = "Contact Me";
  const paragraphText =
    "Have a question or want to work together? Feel free to reach out!";

  return (
    <section className="w-full h-fit  flex items-center justify-center mt-20 relative ">
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/30 before:content-['']"></div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-around items-center gap-10 p-8 rounded-xl relative mt-15 md:mt-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          className="w-full lg:w-1/2 flex flex-col items-center gap-5"
        >
          <motion.h1
            className="text-white text-4xl lg:text-6xl font-bold text-center"
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
          <motion.h1
            className="text-lg text-white/80 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          >
            {paragraphText.split("").map((letter, index) => (
              <motion.span key={index} variants={textVariants} custom={index}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            variants={fadeIn("inplace", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
            className="w-40 h-40 md:w-70  md:h-70"
          >
            <Lottie animationData={contact} className="w-fit h-fit" />
          </motion.div>
        </motion.div>

        <motion.form
          variants={fadeIn("inplace", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          onSubmit={onSubmit}
          className="w-full lg:w-1/2 bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-lg mb-15"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white font-medium">
                Your name
              </label>
              <input
                required
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white font-medium">
                Your email
              </label>
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                onChange={(e) => validateEmail(e.target.value)}
              />
              {emailError && (
                <span className="text-red-400 text-sm">{emailError}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white font-medium">
                Your message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32"
              ></textarea>
            </div>
            <div className="flex items-center gap-4">
              <button
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all cursor-pointer ${
                  loading
                    ? "bg-[#00ADB5] cursor-not-allowed"
                    : "bg-[#00ADB5] hover:bg-[#008B94]"
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"} <IoIosSend />
              </button>
              {submitted && (
                <span className="text-green-400 font-medium">
                  Submitted successfully!
                </span>
              )}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contactme;
