import React from "react";
import portfolioData from "../data/portfolioData";
import { SkillsOrbit } from "./ui/skills-orbit";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 flex flex-col items-center"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expertise & Stack
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A comprehensive look at the technologies and tools I use to bring
            ideas to life.
          </p>
        </div>

        <SkillsOrbit skillsData={portfolioData.skills} />
      </div>
    </section>
  );
};

export default Skills;
