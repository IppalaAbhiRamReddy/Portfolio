import { Home, User, Code, Briefcase, Mail } from "lucide-react";

const portfolioData = {
  name: "John Developer",
  role: "Full Stack Developer",
  navTabs: [
    { title: "Home", icon: Home },
    { title: "About", icon: User },
    { title: "Skills", icon: Code },
    { title: "Projects", icon: Briefcase },
    { title: "Contact", icon: Mail },
  ],
  skills: ["React", "Python", "Django", "Machine Learning", "Node.js"],
  projects: [
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio website built with React, Tailwind CSS, and Framer Motion.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Manager",
      description: "A productivity app to manage daily tasks and projects.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Recommendation System",
      description:
        "An AI-powered system that provides personalized recommendations.",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      github: "#",
      live: "#",
    },
  ],
  contact: {
    email: "john@example.com",
    linkedin: "https://linkedin.com/in/johndeveloper",
    github: "https://github.com/johndeveloper",
  },
};

export default portfolioData;
