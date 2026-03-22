import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import avatarImg from "../assets/Portfolio.png";
import vvitImg from "../assets/vvit.png";
import placeholderImg from "../assets/placeholder.svg";
import hobbiesImg from "../assets/hobbies.jpeg";
import problemImg from "../assets/problem_solving.png";

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
    email: "abhiramreddyippala@gmail.com",
    linkedin: "https://www.linkedin.com/in/ippala-abhiram-reddy/",
    github: "https://github.com/IppalaAbhiRamReddy",
    leetcode: "https://leetcode.com/u/Abhiram_Reddy_Ippala/",
    resume: "https://drive.google.com/file/d/1k5MvGoPNr6UJYSd3waCoSXCFtSMv2686/view?usp=sharing",
  },
  testimonials: [
    {
      points: [
        "B.Tech in CSE (AI & ML) @ VVIT, Guntur",
        "Academic standing: 8.5 CGPA",
        "Focus: Backend development, Data Structures, and ML fundamentals"
      ],
      name: "Education",
      designation: "VVIT, Guntur | 2021 - 2025",
      src: vvitImg,
    },
    {
      points: [
        "Solved 290+ problems on LeetCode",
        "Expertise: Arrays, Sliding Window, Binary Search, Trees, Graphs",
        "Focus on Big-O optimization and regular contest participation"
      ],
      name: "Problem Solving",
      designation: "LeetCode Specialist",
      src: problemImg,
    },
    {
      points: [
        "⭐ 5★ SQL Badge on HackerRank",
        "🏆 NPTEL Elite Certifications (IIT Madras, Kharagpur, Kanpur)",
        "💻 Built multiple full-stack and AI-based applications",
        "📈 Strong backend + database optimization skills"
      ],
      name: "Achievements",
      designation: "Certified Developer",
      src: placeholderImg,
    },
    {
      points: [
        "Solving coding challenges and exploring new patterns",
        "Building side projects and experimenting with new technologies",
        "Learning about AI tools and backend system design",
        "Staying updated with tech trends and developer tools"
      ],
      name: "Hobbies & Interests",
      designation: "Lifelong Learner",
      src: hobbiesImg,
    }
  ],
};

export default portfolioData;
