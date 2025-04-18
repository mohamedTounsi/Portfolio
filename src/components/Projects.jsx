import React from "react";
import ProjectBox from "./ProjectBox";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Projects() {
  const data = [
    {
      duration: 0.3,
      img: "caravana",
      nom: "CaravanaTN",
      parag:
        "CaravanaTN is where you can find camping events in Tunisia (with admin dashboard and CLERK auth ) ",
      git: "#",
      demo: "https://caravana1.vercel.app/",
    },
    {
      duration: 0.6,
      img: "positivus",
      nom: "Positivus",
      parag:
        "Positivus is not a project; it's just a design clone from Figma (learning React)",
      git: "https://github.com/mohamedTounsi/Positivus/tree/main",
      demo: "https://positivus-bay.vercel.app/",
    },
    {
      duration: 0.9,
      img: "rps",
      nom: "RockPaperScissors",
      parag: "This is a simple rock-paper-scissors game using HTML and CSS",
      git: "https://github.com/mohamedTounsi/RockPaperScissors_",
      demo: "https://mohamedtounsi.github.io/RockPaperScissors_/",
    },
  ];

  return (
    <div
      className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-25 gap-6"
      id="projects"
    >
      {data.map((item) => (
        <motion.div
          variants={fadeIn("inplace", item.duration)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          className="group relative"
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
