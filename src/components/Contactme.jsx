import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Contactme() {
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
      event.target.reset(); // Clear the form
    }
  };

  return (
    <section>
      <div
        className="w-[70%] mx-auto flex flex-col lg:flex-row justify-around items-center mb-50"
        id="contactme"
      >
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full flex flex-col items-center gap-5"
        >
          <div className="text-4xl lg:text-6xl font-semibold text-center lg:text-start">
            <p className="text-[#EEEEEE]">Got a project in</p>
            <p className="text-[#00ADB5]">mind?</p>
          </div>
          <div>
            <img src="contact.png" className="hidden lg:block" />
          </div>
        </motion.div>
        <motion.form
          onSubmit={onSubmit}
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[#EEEEEE] font-semibold text-lg flex flex-col gap-5 w-full"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-7">
            <div className="flex flex-col gap-1.5 w-full">
              <p>Your name</p>
              <input
                required
                type="text"
                placeholder="Name"
                className="bg-[#393E46] pl-3 py-2 rounded-lg"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <p>Your email</p>
              <input
                required
                type="email"
                placeholder="Email"
                className="bg-[#393E46] pl-3 py-2 rounded-lg"
                name="email"
                onChange={(e) => validateEmail(e.target.value)}
              />
              {emailError && <span className="text-red-500">{emailError}</span>}
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <p>Your message</p>
            <textarea
              name="message"
              placeholder="Message"
              className="bg-[#393E46] rounded-lg w-full pl-3 pt-2 resize-none h-32"
            ></textarea>
          </div>
          <div className="flex items-center gap-3">
            <button
              className={`flex items-center justify-start gap-2 px-3 py-2 rounded-lg cursor-pointer ${
                loading ? "bg-gray-500" : "bg-[#00ADB5]"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"} <IoIosSend />
            </button>
            {submitted && (
              <span className="text-blue-400 font-medium">
                Submitted successfully!
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contactme;
