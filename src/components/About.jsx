import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedTestimonials } from './ui/animated-testimonials';
import portfolioData from '../data/portfolioData';

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
        <AnimatedTestimonials testimonials={portfolioData.testimonials} autoplay={false} />
      </div>
    </section>
  );
};

export default About;
