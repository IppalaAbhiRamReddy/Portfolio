import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import avatarImg from "../assets/Portfolio.png";

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
      { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    ],
    frontend: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Responsive UI", icon: "https://skillicons.dev/icons?i=figma" },
    ],
    backend: [
      { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
      { name: "REST APIs", icon: "https://skillicons.dev/icons?i=postman" },
      {
        name: "Authentication",
        icon: "https://skillicons.dev/icons?i=supabase",
      },
      { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
    ],
    databases: [
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
      { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
    ],
    tools: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
      { name: "Render", icon: "https://skillicons.dev/icons?i=render" },
    ],
  },
  projects: [
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio website built with React, Tailwind CSS, and Framer Motion.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      year: "2024",
      image:
        "https://plus.unsplash.com/premium_photo-1723489242223-865b4a8cf7b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0",
    },
    {
      title: "Task Manager",
      description: "A productivity app to manage daily tasks and projects.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0",
    },
    {
      title: "AI Recommendation System",
      description:
        "An AI-powered system that provides personalized recommendations.",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      github: "#",
      live: "#",
      year: "2023",
      image:
        "https://i.pinimg.com/1200x/99/ca/5c/99ca5cf82cf12df8801f7b2bef38d325.jpg",
    },
  ],
  contact: {
    email: "john@example.com",
    linkedin: "https://linkedin.com/in/johndeveloper",
    github: "https://github.com/johndeveloper",
  },
};

export default portfolioData;
