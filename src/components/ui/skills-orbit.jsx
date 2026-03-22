"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const safeImage = (e) => {
  const target = e.target;
  target.src = "https://placehold.co/100x100/1e1e1e/white?text=Skill";
};

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('lg');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 480) setScreenSize('xs');
      else if (width < 640) setScreenSize('sm');
      else if (width < 768) setScreenSize('md');
      else setScreenSize('lg');
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
};

export function SkillsOrbit({ skillsData }) {
  const categories = Object.keys(skillsData);
  const [activeCatIndex, setActiveCatIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const screenSize = useResponsive();

  const currentCategory = categories[activeCatIndex];
  const currentSkills = skillsData[currentCategory];

  const getResponsiveValues = () => {
    switch (screenSize) {
      case 'xs':
        return { containerRadius: 90, profileSize: 45, cardWidth: 'w-32' };
      case 'sm':
        return { containerRadius: 110, profileSize: 55, cardWidth: 'w-36' };
      case 'md':
        return { containerRadius: 140, profileSize: 65, cardWidth: 'w-44' };
      default:
        return { containerRadius: 180, profileSize: 80, cardWidth: 'w-56' };
    }
  };

  const { containerRadius, profileSize, cardWidth } = getResponsiveValues();
  const containerSize = containerRadius * 2 + 100;

  const [rotationOffset, setRotationOffset] = useState(0);

  useEffect(() => {
    if (hoveredSkill) return;
    const interval = setInterval(() => {
      setRotationOffset(prev => prev - 0.5);
    }, 32);
    return () => clearInterval(interval);
  }, [hoveredSkill]);

  const next = () => {
    setActiveCatIndex((i) => (i + 1) % categories.length);
    setRotationOffset(0);
  };
  const prev = () => {
    setActiveCatIndex((i) => (i - 1 + categories.length) % categories.length);
    setRotationOffset(0);
  };

  return (
    <div
      className="flex flex-col items-center p-4 relative min-h-[450px] select-none"
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: containerSize, height: containerSize }}
      >
        {/* Center Category Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`z-20 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full aspect-square flex items-center justify-center p-6 ${cardWidth} text-center`}
          >
            <div className="flex flex-col items-center">
              <span className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Category</span>
              <h2 className="text-2xl font-bold text-white capitalize mb-4 tracking-tight">
                {currentCategory}
              </h2>

              <AnimatePresence mode="wait">
                {hoveredSkill ? (
                  <motion.div
                    key={hoveredSkill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center"
                  >
                    <div className="h-px w-8 bg-blue-500 mb-3" />
                    <span className="text-blue-400 font-mono text-sm">{hoveredSkill.name}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="h-px w-8 bg-white/10 mb-3" />
                    <span className="text-white/40 text-xs italic">Hover a skill to explore</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-center items-center mt-6 space-x-4">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} className="text-white/70" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} className="text-white/70" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Orbiting Skills */}
        {currentSkills.map((skill, i) => {
          const angle = (i * (360 / currentSkills.length)) + rotationOffset;
          const isThisHovered = hoveredSkill?.name === skill.name;

          return (
            <motion.div
              key={`${currentCategory}-${skill.name}`}
              animate={{
                transform: `rotate(${angle}deg) translateY(-${containerRadius}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 25,
              }}
              style={{
                width: profileSize,
                height: profileSize,
                position: "absolute",
                top: `calc(50% - ${profileSize / 2}px)`,
                left: `calc(50% - ${profileSize / 2}px)`,
                zIndex: isThisHovered ? 30 : 10,
              }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                animate={{ rotate: -angle }}
                className="w-full h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  className={`w-full h-full p-2 bg-neutral-900 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer ${isThisHovered
                    ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    : "border-white/10 hover:border-white/30"
                    }`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    onError={safeImage}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Category Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveCatIndex(index);
              setRotationOffset(0);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeCatIndex ? "bg-blue-500 w-6" : "bg-white/20"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
