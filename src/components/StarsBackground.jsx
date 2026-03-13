"use client";
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
} from "react";
import { cn } from "../lib/utils";

/**
 * StarsBackground - A canvas-based twinkling stars background component.
 */
export const StarsBackground = ({
    starDensity = 0.0002,
    allStarsTwinkle = true,
    twinkleProbability = 0.7,
    minTwinkleSpeed = 0.2,
    maxTwinkleSpeed = 0.5,
    className,
}) => {
    const [stars, setStars] = useState([]);
    const canvasRef = useRef(null);

    const generateStars = useCallback(
        (width, height) => {
            const area = width * height;
            const numStars = Math.floor(area * starDensity);
            return Array.from({ length: numStars }, () => {
                const shouldTwinkle =
                    allStarsTwinkle || Math.random() < twinkleProbability;
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 0.7 + 0.5,
                    opacity: Math.random() * 0.7 + 0.3,
                    twinkleSpeed: shouldTwinkle
                        ? minTwinkleSpeed +
                        Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                        : null,
                };
            });
        },
        [
            starDensity,
            allStarsTwinkle,
            twinkleProbability,
            minTwinkleSpeed,
            maxTwinkleSpeed,
        ]
    );

    useEffect(() => {
        const updateStars = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const { width, height } = canvas.getBoundingClientRect();
                canvas.width = width * window.devicePixelRatio;
                canvas.height = height * window.devicePixelRatio;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                }
                setStars(generateStars(width, height));
            }
        };

        updateStars();

        const resizeObserver = new ResizeObserver(updateStars);
        const canvasEl = canvasRef.current;
        if (canvasEl) {
            resizeObserver.observe(canvasEl);
        }

        return () => {
            if (canvasEl) {
                resizeObserver.unobserve(canvasEl);
            }
        };
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
        generateStars,
    ]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                if (star.twinkleSpeed !== null) {
                    star.opacity =
                        0.3 +
                        Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.7);
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [stars]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("h-full w-full absolute inset-0 z-0", className)}
        />
    );
};

export default StarsBackground;
