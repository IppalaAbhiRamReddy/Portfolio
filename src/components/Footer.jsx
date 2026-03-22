import React, { useState } from "react";
import portfolioData from "../data/portfolioData";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socials = [];

  if (portfolioData.contact.github) {
    socials.push({
      name: "GitHub",
      href: portfolioData.contact.github,
      icon: <Github className="size-[18px]" strokeWidth={2} />,
    });
  }

  if (portfolioData.contact.linkedin) {
    socials.push({
      name: "LinkedIn",
      href: portfolioData.contact.linkedin,
      icon: <Linkedin className="size-[18px]" strokeWidth={2} />,
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
                hoveredIndex === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            />

            <span
              className={`relative z-10 transition-all duration-300 ease-out ${
                hoveredIndex === index
                  ? "text-white scale-110"
                  : "text-neutral-500"
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
                hoveredIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1 pointer-events-none"
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
