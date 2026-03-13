"use client"

import React, { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import portfolioData from "@/data/portfolioData"

export function ProjectShowcase() {
    const projects = portfolioData.projects
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef(null)
    const animationRef = useRef(null)

    useEffect(() => {
        const lerp = (start, end, factor) => {
            return start + (end - start) * factor
        }

        const animate = () => {
            setSmoothPosition((prev) => ({
                x: lerp(prev.x, mousePosition.x, 0.15),
                y: lerp(prev.y, mousePosition.y, 0.15),
            }))
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [mousePosition])

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
        }
    }

    const handleMouseEnter = (index) => {
        setHoveredIndex(index)
        setIsVisible(true)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
        setIsVisible(false)
    }

    return (
        <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-white/40 text-sm font-medium tracking-wide uppercase mb-8">Selected Work</h2>

            <div
                className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
                style={{
                    left: containerRef.current?.getBoundingClientRect().left ?? 0,
                    top: containerRef.current?.getBoundingClientRect().top ?? 0,
                    transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.8,
                    transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <div className="relative w-[320px] h-[200px] bg-neutral-900 rounded-xl overflow-hidden border border-white/10">
                    {projects.map((project, index) => (
                        <img
                            key={project.title}
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
                            style={{
                                opacity: hoveredIndex === index ? 1 : 0,
                                scale: hoveredIndex === index ? 1 : 1.1,
                                filter: hoveredIndex === index ? "none" : "blur(10px)",
                            }}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
            </div>

            <div className="space-y-0">
                {projects.map((project, index) => (
                    <a
                        key={project.title}
                        href={project.live || project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="relative py-6 border-t border-white/10 transition-all duration-300 ease-out">
                            <div
                                className={`
                  absolute inset-0 -mx-4 px-4 bg-white/5 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
                            />

                            <div className="relative flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    <div className="inline-flex items-center gap-2">
                                        <h3 className="text-white font-medium text-xl tracking-tight">
                                            <span className="relative">
                                                {project.title}
                                                <span
                                                    className={`
                            absolute left-0 -bottom-1 h-px bg-white
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                                                />
                                            </span>
                                        </h3>

                                        <ArrowUpRight
                                            className={`
                        w-5 h-5 text-white/40
                        transition-all duration-300 ease-out
                        ${hoveredIndex === index
                                                    ? "opacity-100 translate-x-0 translate-y-0 text-white"
                                                    : "opacity-0 -translate-x-2 translate-y-2"
                                                }
                      `}
                                        />
                                    </div>

                                    <p
                                        className={`
                      text-white/50 text-base mt-2 leading-relaxed max-w-xl
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-white/80" : "text-white/50"}
                    `}
                                    >
                                        {project.description}
                                    </p>
                                </div>

                                <span
                                    className={`
                    text-sm font-mono text-white/30 tabular-nums
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-white/60" : ""}
                  `}
                                >
                                    {project.year}
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
                <div className="border-t border-white/10" />
            </div>
        </section>
    )
}
