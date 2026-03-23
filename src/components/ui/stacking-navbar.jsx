import React, { useState } from "react";
import { motion } from "framer-motion";

const StackingNavbar = ({ items = [] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="flex flex-wrap items-center gap-2 md:gap-x-2"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {items.map((item, index) => (
        <StackingNavbarItem
          href={item.href}
          expanded={expanded}
          key={index}
          index={index}
        >
          <div className="flex items-center gap-2">
            {item.icon}
            <span>{item.label}</span>
          </div>
        </StackingNavbarItem>
      ))}
    </div>
  );
};

const StackingNavbarItem = ({ href, children, style, expanded, index }) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{
        x: typeof window !== "undefined" && window.innerWidth < 768 ? 0 : (expanded ? 0 : -100 * index)
      }}
      transition={{
        duration: 0.6,
        ease: "circInOut",
        delay: 0.1 * index,
        type: "spring",
      }}
      style={{ zIndex: 100 - index }}
      className="md:relative"
    >
      <a
        className="flex items-center text-xs md:text-sm px-4 py-2 md:px-5 md:py-3 rounded-full md:rounded-3xl bg-white/5 border border-white/10 text-white backdrop-blur-lg hover:bg-white/20 hover:border-white/30 transition-colors duration-300 ease-in-out no-underline whitespace-nowrap"
        href={href}
        style={style}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </motion.div>
  );
};

export { StackingNavbar };
