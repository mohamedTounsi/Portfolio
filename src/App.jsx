import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Title from "./components/Title";
import Skills from "./components/Skills";

import Projects from "./components/Projects";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Title title="skills" />
      <Skills />
      <Aboutus />

      <Title title="Projects" />
      <Projects />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
