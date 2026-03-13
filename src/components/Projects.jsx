import React from 'react';
import { ProjectShowcase } from './ui/project-showcase';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 flex flex-col justify-center">
      <div className="container mx-auto">
        <ProjectShowcase />
      </div>
    </section>
  );
};

export default Projects;
