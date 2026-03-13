"use client";

import * as React from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { cn } from "../lib/utils";
import portfolioData from "../data/portfolioData";

/**
 * buttonVariants - Framer Motion variants for the tab button container
 */
const buttonVariants = {
    initial: {
        gap: 0,
        paddingLeft: ".5rem",
        paddingRight: ".5rem",
    },
    animate: (isSelected) => ({
        gap: isSelected ? ".5rem" : 0,
        paddingLeft: isSelected ? "1rem" : ".5rem",
        paddingRight: isSelected ? "1rem" : ".5rem",
    }),
};

/**
 * spanVariants - Framer Motion variants for the expanding text label
 */
const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

/**
 * ExpandableTabs Component
 * A reusable tab component that expands on hover or when active.
 */
const ExpandableTabs = ({
    tabs,
    className,
    activeColor = "text-blue-400",
    activeTab = 0,
    onChange,
}) => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    const Separator = () => (
        <div className="mx-1 h-[24px] w-[1.2px] bg-white/10" aria-hidden="true" />
    );

    return (
        <div
            className={cn(
                "flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl p-1 shadow-2xl",
                className
            )}
        >
            {tabs.map((tab, index) => {
                if (tab.type === "separator") {
                    return <Separator key={`separator-${index}`} />;
                }

                const isActive = activeTab === index;
                const isHovered = hoveredIndex === index;
                const isExpanded = isActive || isHovered;

                const Icon = tab.icon;
                return (
                    <Motion.button
                        key={tab.title}
                        variants={buttonVariants}
                        initial={false}
                        animate="animate"
                        custom={isExpanded}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => onChange?.(index)}
                        transition={transition}
                        className={cn(
                            "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer",
                            isActive
                                ? cn("bg-white/10", activeColor)
                                : "text-white/60 hover:bg-white/5 hover:text-white"
                        )}
                    >
                        <Icon size={20} />
                        <AnimatePresence initial={false}>
                            {isExpanded && (
                                <Motion.span
                                    variants={spanVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={transition}
                                    className="overflow-hidden whitespace-nowrap cursor-pointer"
                                >
                                    {tab.title}
                                </Motion.span>
                            )}
                        </AnimatePresence>
                    </Motion.button>
                );
            })}
        </div>
    );
};

/**
 * Navbar Component
 * The main fixed header for the portfolio.
 */
const Navbar = ({ activeTab, onChange }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            <Motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <ExpandableTabs 
                    tabs={portfolioData.navTabs} 
                    activeTab={activeTab}
                    onChange={onChange} 
                />
            </Motion.div>
        </header>
    );
};

export default Navbar;
