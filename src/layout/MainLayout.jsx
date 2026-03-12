import React from 'react';
import Navbar from '../components/Navbar';
import StarsBackground from '../components/StarsBackground';
import Hero from '../components/Hero';

const MainLayout = () => {
    return (
        <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
            {/* Dynamic Background */}
            <StarsBackground />

            {/* Content */}
            <div className="relative z-10 scroll-smooth">
                <Navbar
                    onChange={(index) => {
                        if (index === 0) {
                            const el = document.getElementById("hero");
                            el?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }}
                />
                <main className="flex flex-col gap-20 pt-24">
                    <Hero />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
