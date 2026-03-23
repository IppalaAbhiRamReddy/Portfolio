import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import StarsBackground from "../components/StarsBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    if (window.location.hash) {
      window.history.replaceState(null, null, " ");
    }
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight - 50
      ) {
        setActiveSection(sections.length - 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const id = sections[index];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      <StarsBackground />

      <div className="relative z-10 scroll-smooth">
        <Navbar activeTab={activeSection} onChange={scrollToSection} />
        <main className="flex flex-col gap-10 pt-24 pb-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
