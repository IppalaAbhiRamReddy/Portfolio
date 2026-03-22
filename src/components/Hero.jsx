'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { StackingNavbar } from './ui/stacking-navbar';
import avatarImg from '../assets/Portfolio.png';
import portfolioData from '../data/portfolioData';

/* ---------------- TEXT SCRAMBLE EFFECT ---------------- */

const defaultChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*+=<>?~";

function TextScramble({
  children,
  duration = 2,
  characterSet = defaultChars,
  className,
  as: Component = "span",
  trigger = true,
  onScrambleComplete,
  letterSpacing = "0.08em",
}) {
  const MotionComponent = motion.create(Component);
  const [chars, setChars] = useState(() => children.split(""));
  const [isAnimating, setIsAnimating] = useState(false);
  const rafRef = useRef(null);
  const text = children;

  function easeInOut(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const totalMs = duration * 1000;
    const nonSpaceChars = text.split("").filter((c) => c !== " ");
    let start = null;

    const frame = (ts) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / totalMs, 1);

      let intensity;
      if (t < 0.25) intensity = easeInOut(t / 0.25);
      else if (t < 0.75) intensity = 1;
      else intensity = easeInOut(1 - (t - 0.75) / 0.25);

      let nonSpaceIdx = 0;
      const next = text.split("").map((ch) => {
        if (ch === " ") return " ";
        const real = nonSpaceChars[nonSpaceIdx++];
        return Math.random() < intensity
          ? characterSet[Math.floor(Math.random() * characterSet.length)]
          : real;
      });

      setChars(next);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        setChars(text.split(""));
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    };

    rafRef.current = requestAnimationFrame(frame);
  };

  useEffect(() => {
    if (trigger) scramble();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [trigger]);

  return (
    <MotionComponent className={className} style={{ display: "inline-flex", gap: letterSpacing }}>
      {chars.map((ch, i) =>
        ch === " " ? (
          <span key={i} style={{ width: "0.4em" }} />
        ) : (
          <span
            key={i}
            style={{
              display: "inline-block",
              transition: "color 0.25s ease, opacity 0.25s ease",
              opacity: ch === text[i] ? 1 : 0.4,
              color: ch === text[i] ? "inherit" : "var(--muted-foreground, #888)",
            }}
          >
            {ch}
          </span>
        )
      )}
    </MotionComponent>
  );
}

/* ---------------- SOCIAL LINKS ---------------- */




/* ---------------- CORNER FRAME ---------------- */

const CornerFrameScrambleText = ({ value }) => (
  <div className="relative inline-block px-7 py-3">
    {[
      'top-0 left-0 border-t-2 border-l-2',
      'top-0 right-0 border-t-2 border-r-2',
      'bottom-0 left-0 border-b-2 border-l-2',
      'bottom-0 right-0 border-b-2 border-r-2',
    ].map((cls, i) => (
      <span key={i} className={`absolute w-3.5 h-3.5 border-white/80 ${cls}`} />
    ))}
    <TextScramble
      as="span"
      className="relative z-10 text-base font-bold text-white uppercase tracking-[0.25em]"
    >
      {value}
    </TextScramble>
  </div>
);

/* ---------------- TEXT ARC ---------------- */

const TextArc = ({ text, diameter }) => {
  const chars = text.split('');
  const radius = diameter / 2;
  const angle = 360 / chars.length;

  return (
    <div className="relative" style={{ width: diameter, height: diameter }}>
      {chars.map((char, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            height: radius,
            transform: `rotate(${angle * i}deg)`,
            transformOrigin: 'bottom center',
            top: 0,
            left: '50%',
            marginLeft: '-0.5em',
          }}
        >
          <span className="text-xs font-bold text-slate-200">{char}</span>
        </div>
      ))}
    </div>
  );
};

/* ---------------- AVATAR + ARC ---------------- */

const TextArcLogo = ({ logoSrc, name }) => {
  const [diameter, setDiameter] = useState(340);

  useEffect(() => {
    const fn = () => setDiameter(window.innerWidth < 768 ? 260 : 340);
    fn();
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        >
          <TextArc text="|||||||||||||" diameter={diameter} />
        </motion.div>

        <motion.img
          src={logoSrc}
          alt="Avatar"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border border-white/20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />
      </div>

      <CornerFrameScrambleText value={name} />
    </div>
  );
};

/* ---------------- HERO TEXT ---------------- */

const AnimatedHeroText = ({ socialLinks }) => {
  const [index, setIndex] = useState(0);

  const titles = useMemo(
    () => ['Systems', 'Platforms', 'Tools', 'Solutions'],
    []
  );

  useEffect(() => {
    const t = setTimeout(() => setIndex((p) => (p + 1) % titles.length), 2200);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="flex flex-col text-[72px] md:text-[90px] lg:text-[105px] font-bold tracking-[-4px] leading-[0.95]">

        <span>Engineering</span>

        <span className="flex items-end gap-5">
          <span className="text-white/80">Intelligent</span>

          <span
            style={{
              overflow: 'hidden',
              display: 'inline-flex',
              height: '1.05em',
              alignItems: 'flex-end',
              position: 'relative',
              minWidth: 'min(520px, 80vw)',
            }}
          >
            {titles.map((title, i) => (
              <motion.span
                key={i}
                className="absolute bottom-0 left-0 font-bold text-blue-400 whitespace-nowrap"
                initial={{ y: '100%', opacity: 0 }}
                animate={
                  index === i
                    ? { y: '0%', opacity: 1 }
                    : { y: index > i ? '-110%' : '110%', opacity: 0 }
                }
                transition={{ duration: 0.55 }}
              >
                {title}
              </motion.span>
            ))}
          </span>
        </span>

      </h1>

      <p className="text-lg text-white/50 font-mono max-w-xl">
        Full-Stack Developer building scalable web apps powered by AI & ML —
        turning complex problems into clean, data-driven solutions.
      </p>

      <div className="mt-4">
        <StackingNavbar items={socialLinks} />
      </div>
    </div>
  );
};

/* ---------------- HERO SECTION ---------------- */

const Hero = () => {
  const socialLinks = useMemo(() => [
    {
      label: 'GitHub',
      href: portfolioData.contact.github,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: portfolioData.contact.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'LeetCode',
      href: portfolioData.contact.leetcode,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.396.702-1.863l4.332-4.363c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.606c-1.484-1.484-3.438-2.14-5.531-2.14-2.093 0-4.047.656-5.531 2.14l-4.332 4.363c-1.484 1.484-2.141 3.438-2.141 5.532s.657 4.047 2.141 5.531l4.332 4.363c1.484 1.484 3.438 2.14 5.531 2.14 2.093 0 4.047-.656 5.531-2.14l2.609-2.606c.514-.514.496-1.365-.039-1.9-.535-.536-1.386-.554-1.901-.039z" />
          <path d="M20.715 12.875H9.682c-.752 0-1.371.62-1.371 1.372s.619 1.371 1.371 1.371h11.033c.752 0 1.372-.619 1.372-1.371s-.62-1.372-1.372-1.372z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: `mailto:${portfolioData.contact.email}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: 'Resume',
      href: portfolioData.contact.resume,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ], []);

  return (
  <section id="hero" className="relative w-full px-8 md:px-14 lg:px-24 py-20 min-h-[90vh] flex items-center">
    <div className="flex flex-col md:flex-row items-center w-full gap-12">

      <div className="flex-1 min-w-0">
        <AnimatedHeroText socialLinks={socialLinks} />
      </div>

      <div className="flex-shrink-0 md:ml-auto md:-translate-y-12">
        <TextArcLogo
          logoSrc={portfolioData.avatarUrl}
          name={portfolioData.name}
        />
      </div>

    </div>
    </section>
  );
};

export default Hero;