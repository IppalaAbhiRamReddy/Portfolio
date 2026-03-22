import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import avatarImg from "../assets/Portfolio.png";

// Local Tech Stack SVGs
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import jsIcon from "../assets/icons/js.svg";
import pythonIcon from "../assets/icons/python.svg";
import javaIcon from "../assets/icons/java.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import figmaIcon from "../assets/icons/figma.svg";
import djangoIcon from "../assets/icons/django.svg";
import fastapiIcon from "../assets/icons/fastapi.svg";
import postgresIcon from "../assets/icons/postgres.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import supabaseIcon from "../assets/icons/supabase.svg";
import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/github.svg";
import postmanIcon from "../assets/icons/postman.svg";
import vercelIcon from "../assets/icons/vercel.svg";
import renderIcon from "../assets/icons/render.svg";
import placeholderImg from "../assets/placeholder.svg";

const portfolioData = {
  name: "Abhiram Reddy",
  role: "Full Stack Developer",
  avatarUrl: avatarImg,
  navTabs: [
    { title: "Home", icon: Home },
    { title: "About", icon: User },
    { title: "Skills", icon: Code },
    { title: "Projects", icon: Briefcase },
    { title: "Contact", icon: Mail },
  ],
  skills: {
    languages: [
      { name: "Python", icon: pythonIcon },
      { name: "Java", icon: javaIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
    ],
    frontend: [
      { name: "React", icon: reactIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "Responsive UI", icon: figmaIcon },
    ],
    backend: [
      { name: "Django", icon: djangoIcon },
      { name: "REST APIs", icon: postmanIcon },
      { name: "Authentication", icon: supabaseIcon },
      { name: "FastAPI", icon: fastapiIcon },
    ],
    databases: [
      { name: "PostgreSQL", icon: postgresIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "Firebase", icon: firebaseIcon },
      { name: "Supabase", icon: supabaseIcon },
    ],
    tools: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "Postman", icon: postmanIcon },
      { name: "Vercel", icon: vercelIcon },
      { name: "Render", icon: renderIcon },
    ],
  },
  projects: [
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio website built with React, Tailwind CSS, and Framer Motion.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      features: [
        "Architected a responsive, dark-themed UI with glassmorphism components",
        "Implemented smooth scroll animations and dynamic cursor interactions",
        "Engineered a centralized config system for zero-friction content updates"
      ],
      github: "#",
      live: "#",
      year: "2024",
      image: placeholderImg,
    },
    {
      title: "Task Manager",
      description: "A productivity app to manage daily tasks and projects.",
      technologies: ["React", "Node.js", "MongoDB"],
      features: [
        "Built a real-time drag-and-drop Kanban board interface",
        "Engineered secure JWT-based user authentication and session handling",
        "Designed flexible REST API endpoints for seamless crud operations"
      ],
      github: "#",
      live: "#",
      year: "2024",
      image: placeholderImg,
    },
    {
      title: "AI Recommendation System",
      description:
        "An AI-powered system that provides personalized recommendations.",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      features: [
        "Trained customized Machine Learning models on large user datasets",
        "Deployed a high-performance Python FastAPI backend architecture",
        "Built an interactive dashboard for visualizing recommendation metrics"
      ],
      github: "#",
      live: "#",
      year: "2023",
      image: placeholderImg,
    },
  ],
  contact: {
    email: "john@example.com",
    linkedin: "https://linkedin.com/in/johndeveloper",
    github: "https://github.com/johndeveloper",
  },
};

export default portfolioData;
