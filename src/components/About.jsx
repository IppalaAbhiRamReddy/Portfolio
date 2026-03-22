import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedTestimonials } from './ui/animated-testimonials';

function ShimmerText({ children, className, duration = 1.5, delay = 1.5 }) {
  return (
    <div className="group overflow-hidden inline">
      <motion.div
        className={cn(
          "inline-block [--shimmer-contrast:rgba(255,255,255,0.6)] dark:[--shimmer-contrast:rgba(0,0,0,0.5)] text-white",
          className
        )}
        style={{
          WebkitTextFillColor: "transparent",
          background: "currentColor linear-gradient(to right, currentColor 0%, var(--shimmer-contrast) 40%, var(--shimmer-contrast) 60%, currentColor 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 200%",
        }}
        initial={{ backgroundPositionX: "250%" }}
        animate={{ backgroundPositionX: ["-100%", "250%"] }}
        transition={{ duration, delay, repeat: Infinity, repeatDelay: 1.5, ease: "linear" }}
      >
        <span>{children}</span>
      </motion.div>
    </div>
  )
}

const mockTestimonials = [
  {
    quote: "Abhiram's ability to seamlessly bridge complex backend architecture with stunning frontend interfaces is unmatched. He delivered our platform ahead of schedule with zero major bugs.",
    name: "Sarah Chen",
    designation: "Product Manager",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Working with Abhiram was a game changer. The APIs he built were lightning fast and perfectly documented. He's incredibly driven and truly fueled by code.",
    name: "Marcus Rodriguez",
    designation: "CTO at InnovateCorp",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "An exceptional full-stack developer. Not only is his code clean and scalable, but his eye for UX/UI design makes the final product feel like a premium experience.",
    name: "Emily Watson",
    designation: "Lead Designer at StudioX",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 flex flex-col items-center px-4 md:px-24">
      <div className="text-center w-full max-w-4xl mx-auto space-y-6 pt-10">
        <div className="flex flex-col items-center justify-center w-full">
          <ShimmerText className="text-white text-2xl md:text-4xl font-bold tracking-wide leading-none filter drop-shadow-md text-center mb-1 md:mb-2">
            Driven by curiosity
          </ShimmerText>
          <ShimmerText className="text-white/40 text-2xl md:text-4xl font-bold tracking-wide leading-none filter drop-shadow-md text-center">
            Fueled by code
          </ShimmerText>
        </div>
      </div>

      {/* Animated Testimonials Layout */}
      <div className="w-full mt-10">
        <AnimatedTestimonials testimonials={mockTestimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default About;
