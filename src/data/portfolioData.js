import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import avatarImg from "../assets/Portfolio.png";
import vvitImg from "../assets/about/vvit.png";
import placeholderImg from "../assets/placeholder.svg";
import hobbiesImg from "../assets/about/hobbies.jpeg";
import problemImg from "../assets/about/problem_solving.png";
import achievementsImg from "../assets/about/achievements.png";

// Project Images
import finwiseImg from "../assets/projects/finwise.jpeg";
import healthcareImg from "../assets/projects/health_care.jpeg";
import typingTestImg from "../assets/projects/typing_speed_test.jpeg";
import smartAidImg from "../assets/projects/smart_aid.jpeg";
import skywingsImg from "../assets/projects/skywings.jpeg";

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
      title: "FinWise – AI-Powered Personal Finance Management System",
      description:
        "A full-stack financial management platform to track expenses, manage budgets, and generate AI-driven spending insights.",
      technologies: [
        "React",
        "Django REST Framework",
        "PostgreSQL",
        "JWT",
        "Tailwind CSS",
      ],
      features: [
        "Developed secure REST APIs with JWT authentication and role-based access control",
        "Designed normalized PostgreSQL schema for efficient transaction and budget management",
        "Built real-time analytics dashboards with AI-driven insights for smarter financial decisions",
      ],
      github: "https://github.com/IppalaAbhiRamReddy/finwise",
      live: "#",
      image: finwiseImg,
    },
    {
      title: "Integrated Healthcare Ecosystem Platform",
      description:
        "A machine learning-based healthcare system that predicts diseases from symptoms and recommends appropriate treatments.",
      technologies: [
        "Python",
        "Machine Learning",
        "Django REST Framework",
        "React",
        "PostgreSQL",
      ],
      features: [
        "Developed a disease prediction model using 250+ symptoms mapped to 200+ diseases",
        "Improved model accuracy up to 95% through data preprocessing and feature optimization",
        "Integrated ML model with backend APIs for real-time prediction and user interaction",
      ],
      github: "https://github.com/IppalaAbhiRamReddy/HealthCare-AI",
      live: "https://health-care-owuayfaxl-ippalaabhiramreddys-projects.vercel.app/",
      image: healthcareImg,
    },
    {
      title: "Typing Speed Test Web Application",
      description:
        "A responsive web application to measure real-time typing speed, accuracy, and performance with interactive feedback.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Implemented real-time WPM and accuracy calculation with character-level validation",
        "Designed multiple timer modes (15s, 30s, 60s) with auto-start functionality",
        "Optimized DOM updates and event handling to improve performance by 35%",
      ],
      github: "https://github.com/IppalaAbhiRamReddy/typing_speed_test",
      live: "https://ippalaabhiramreddy.github.io/typing_speed_test/",
      image: typingTestImg,
    },
    {
      title: "Smart Aid – Emergency Assistance Application",
      description:
        "A mobile safety application providing instant emergency support, first aid guidance, and critical health information access.",
      technologies: ["Flutter", "Firebase", "Provider", "GoRouter"],
      features: [
        "Implemented Emergency SOS system with real-time location sharing and visual alert signaling",
        "Developed searchable first aid guides with text-to-speech support for accessibility",
        "Built Medical ID and reminder system for storing health data and managing medication alerts",
      ],
      github: "https://github.com/IppalaAbhiRamReddy/smart_aid",
      live: "#",
      image: smartAidImg,
    },
    {
      title: "Skywings – Travel & Flight Booking Landing Page",
      description:
        "A responsive travel website showcasing destinations, tour highlights, and booking-focused sections with interactive animations and testimonials.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "ScrollReveal",
        "Swiper.js",
        "Remix Icon",
      ],
      features: [
        "Built a responsive multi-section landing page for travel discovery, packages, and contact flows",
        "Implemented mobile navigation toggle with dynamic menu icon switching",
        "Added scroll-based reveal animations across key sections using ScrollReveal",
        "Integrated testimonial carousel with looping multi-slide layout using Swiper.js",
        "Designed reusable UI components and consistent styling with CSS variables and utility patterns",
      ],
      github: "https://github.com/IppalaAbhiRamReddy/Skywings",
      live: "https://ippalaabhiramreddy.github.io/Skywings/",
      image: skywingsImg,
    },
  ],
  contact: {
    email: "abhiramreddyippala@gmail.com",
    linkedin: "https://www.linkedin.com/in/ippala-abhiram-reddy/",
    github: "https://github.com/IppalaAbhiRamReddy",
    leetcode: "https://leetcode.com/u/Abhiram_Reddy_Ippala/",
    resume:
      "https://drive.google.com/file/d/1k5MvGoPNr6UJYSd3waCoSXCFtSMv2686/view?usp=sharing",
  },
  testimonials: [
    {
      points: [
        "B.Tech in CSE (AI & ML) @ VVIT, Guntur",
        "Academic standing: 8.5 CGPA",
        "Focus: Backend development, Data Structures, and ML fundamentals",
      ],
      name: "Education",
      designation: "VVIT, Guntur | 2021 - 2025",
      src: vvitImg,
    },
    {
      points: [
        "Solved 290+ problems on LeetCode",
        "Expertise: Arrays, Sliding Window, Binary Search, Trees, Graphs",
        "Focus on Big-O optimization and regular contest participation",
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
        "📈 Strong backend + database optimization skills",
      ],
      name: "Achievements",
      designation: "Certified Developer",
      src: achievementsImg,
    },
    {
      points: [
        "Solving coding challenges and exploring new patterns",
        "Building side projects and experimenting with new technologies",
        "Learning about AI tools and backend system design",
        "Staying updated with tech trends and developer tools",
      ],
      name: "Hobbies & Interests",
      designation: "Lifelong Learner",
      src: hobbiesImg,
    },
  ],
};

export default portfolioData;
