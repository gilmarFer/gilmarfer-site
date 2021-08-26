import React from "react";

import Header from "./components/Header";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AbountMe from "./components/AbountMe";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900">
      <Navbar />
      <Header />
      <AbountMe />
      <Skills />
      <Projects />
      <br/><br/><br/>
      <Contact />
    </main>
  );
}