"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import avatarImg from "../assets/Portfolio.png";

// ==========================================
// 1. INVERTED CURSOR COMPONENT
// ==========================================
const Cursor = ({ size = 60, hidden = false }) => {
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const requestRef = useRef();
  const previousPos = useRef({ x: -size, y: -size });

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: -size, y: -size });

  const animate = () => {
    if (!cursorRef.current) return;

    const currentX = previousPos.current.x;
    const currentY = previousPos.current.y;
    const targetX = position.x - size / 2;
    const targetY = position.y - size / 2;

    const deltaX = (targetX - currentX) * 0.2;
    const deltaY = (targetY - currentY) * 0.2;

    const newX = currentX + deltaX;
    const newY = currentY + deltaY;

    previousPos.current = { x: newX, y: newY };
    cursorRef.current.style.transform = `translate(${newX}px, ${newY}px)`;

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      setVisible(true);
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position, size]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit">
      <div
        ref={cursorRef}
        className="pointer-events-none absolute z-50 rounded-full bg-white mix-blend-difference transition-opacity duration-300"
        style={{
          width: size,
          height: size,
          opacity: (visible && !hidden) ? 1 : 0,
        }}
        aria-hidden="true"
      />
    </div>
  );
};

// ==========================================
// 2. AVATAR HOVER CARD COMPONENT
// ==========================================
const getInitials = (name) => {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
};

function AvatarHoverCard({ imageSrc, name, username, description, buttonContent }) {
  const [isHovered, setIsHovered] = useState(false);

  const avatarElement = (
    <Avatar className="w-full h-full">
      <AvatarImage src={imageSrc} alt={name} />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );

  return (
    <motion.div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
      animate={{ width: isHovered ? "auto" : "fit-content" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="relative rounded-full overflow-hidden w-24 h-24"
        layout
        animate={{ padding: isHovered ? "8px" : "0px" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {avatarElement}
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 rounded-xl shadow-lg overflow-hidden z-10 p-2 w-[26rem] bg-background border border-border"
            style={{ pointerEvents: "auto" }}>
            <div className="flex items-start gap-4">
              <motion.div className="relative shrink-0 w-24 h-24">
                {avatarElement}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex-1 py-1 pr-2 space-y-2">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-lg font-bold text-foreground leading-tight">
                    {name}
                  </motion.h3>
                  {username && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 }}
                      className="text-sm text-muted-foreground">
                      @{username}
                    </motion.p>
                  )}
                </div>
                {description && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs text-foreground/80 leading-relaxed line-clamp-2">
                    {description}
                  </motion.p>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="pt-2 flex justify-center w-full">
                  {buttonContent}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}



// ==========================================
// 5. MAIN CONTACT SECTION COMPONENT
// ==========================================
const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="contact"
      className="relative pt-20 pb-8 flex flex-col items-center justify-center w-full px-4 md:px-14 lg:px-24 overflow-hidden bg-background gap-8 md:gap-12"
    >
      {/* CENTERED: Animation Bubble Area */}
      <div
        className={`relative w-full max-w-5xl min-h-[50vh] flex flex-col items-center justify-center rounded-3xl overflow-hidden ${isHovered ? 'cursor-auto' : 'cursor-none'} border border-white/5 bg-white/[0.01]`}
      >
        <Cursor size={80} hidden={isHovered} />

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative inline-block mt-16">
            <div
              className="absolute -top-98 -left-6 md:-top-42 md:-left-0 z-50 cursor-pointer pointer-events-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AvatarHoverCard
                imageSrc={avatarImg}
                name="Abhi Ram Reddy"
                username="abhiram"
                description="Frontend Developer & UI/UX Enthusiast"
                buttonContent={
                  <button
                    onClick={() => window.open('mailto:abhiram@example.com')}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-foreground font-medium cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-muted-foreground">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Email
                  </button>
                }
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold select-none text-white tracking-widest uppercase relative z-10 whitespace-nowrap">
              Let's Connect
            </h1>

          </div>
        </div>
      </div>

      {/* SPACE FOR FUTURE CONTENT */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center relative z-20">
        {/* Contact form or details can be placed here */}
      </div>
    </section>
  );
};

export default Contact;
