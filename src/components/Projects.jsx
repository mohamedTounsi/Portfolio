import React from "react";
import ProjectBox from "./ProjectBox";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Projects() {
  const data = [
    {
      duration: 0.2,
      img: "positivus",
      nom: "Positivus",
      parag:
        "Positivus is not a project its just a design clone from figma(learning react) ",
      git: "https://github.com/mohamedTounsi/Positivus/tree/main",
      demo: "https://positivus-bay.vercel.app/",
    },
    {
      duration: 0.4,
      img: "rps",

      nom: "RockPaperScissors",
      parag: "this is a simple rock paper scissors game",
      git: "https://github.com/mohamedTounsi/RockPaperScissors_",
      demo: "https://mohamedtounsi.github.io/RockPaperScissors_/",
    },
  ];
  return (
    <div
      className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 mb-25 gap-6  "
      id="projects"
    >
      {data.map((item) => (
        <motion.div
          variants={fadeIn("up", item.duration)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amout: 0.7 }}
        >
          <ProjectBox
            img={item.img}
            hoverimg={item.hoverimg}
            nom={item.nom}
            parag={item.parag}
            git={item.git}
            demo={item.demo}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
