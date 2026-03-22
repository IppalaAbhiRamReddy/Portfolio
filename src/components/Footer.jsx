import React, { useState } from 'react';
import portfolioData from '../data/portfolioData';
import { Mail } from 'lucide-react';

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socials = [];

  if (portfolioData.contact.github) {
    socials.push({
      name: "GitHub",
      href: portfolioData.contact.github,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    });
  }

  if (portfolioData.contact.linkedin) {
    socials.push({
      name: "LinkedIn",
      href: portfolioData.contact.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    });
  }

  if (portfolioData.contact.leetcode) {
    socials.push({
      name: "LeetCode",
      href: portfolioData.contact.leetcode,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.396.702-1.863l4.332-4.363c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.606c-1.484-1.484-3.438-2.14-5.531-2.14-2.093 0-4.047.656-5.531 2.14l-4.332 4.363c-1.484 1.484-2.141 3.438-2.141 5.532s.657 4.047 2.141 5.531l4.332 4.363c1.484 1.484 3.438 2.14 5.531 2.14 2.093 0 4.047-.656 5.531-2.14l2.609-2.606c.514-.514.496-1.365-.039-1.9-.535-.536-1.386-.554-1.901-.039z" />
          <path d="M20.715 12.875H9.682c-.752 0-1.371.62-1.371 1.372s.619 1.371 1.371 1.371h11.033c.752 0 1.372-.619 1.372-1.371s-.62-1.372-1.372-1.372z" />
        </svg>
      ),
    });
  }



  if (portfolioData.contact.email) {
    socials.push({
      name: "Email",
      href: `mailto:${portfolioData.contact.email}`,
      icon: <Mail className="size-[18px]" strokeWidth={2.5} />,
    });
  }

  return (
    <footer className="w-full relative z-20 border-t border-white/5 bg-white/[0.01] backdrop-blur-md py-10 flex flex-col items-center justify-center mt-[-1px]">
      
      <div className="relative flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl bg-neutral-950 border border-white/[0.08] mb-6">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={social.name}
          >
            <span
              className={`absolute inset-1 rounded-lg bg-white/[0.08] transition-all duration-300 ease-out ${
                hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            />

            <span
              className={`relative z-10 transition-all duration-300 ease-out ${
                hoveredIndex === index ? "text-white scale-110" : "text-neutral-500"
              }`}
            >
              {social.icon}
            </span>

            <span
              className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-white transition-all duration-300 ease-out ${
                hoveredIndex === index ? "w-3 opacity-100" : "w-0 opacity-0"
              }`}
            />

            <span
              className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-white text-neutral-950 text-[11px] font-medium whitespace-nowrap transition-all duration-300 ease-out ${
                hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              {social.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-white" />
            </span>
          </a>
        ))}
      </div>

      <p className="text-white/30 text-sm font-medium tracking-wide">
        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
