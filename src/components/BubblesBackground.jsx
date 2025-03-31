// src/components/BubblesBackground.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import "./BubblesBackground.css";

const BUBBLE_COUNT = 15;
const MAX_BUBBLE_SIZE = 150;

export default function BubblesBackground() {
    const [bubbles, setBubbles] = useState([]);
    const containerRef = useRef(null);

    // Use the palette defined in your design
    const bubbleColors = useMemo(
        () => ["#BBBBBB"],
        []
    );
    // Overlay image for the bubble effect – place overlay2.png in public/static/
    const overlayImage = `${import.meta.env.BASE_URL}static/overlay2.png`;

    useEffect(() => {
        const { innerWidth: w, innerHeight: h } = window;
        const initial = Array.from({ length: BUBBLE_COUNT }).map((_, i) => {
            const size = Math.random() * (MAX_BUBBLE_SIZE - 40) + 40;
            const x = Math.random() * (w - size);
            const y = Math.random() * (h - size);
            const vx = (Math.random() - 0.5) * 1.2; // slower speed
            const vy = (Math.random() - 0.5) * 1.2;
            return {
                id: i,
                x,
                y,
                vx,
                vy,
                size,
                color: bubbleColors[i % bubbleColors.length],
                rotationSpeed: (Math.random() - 0.5) * 0.05, // slower spin
                rotation: Math.random() * 360,
            };
        });
        setBubbles(initial);
    }, [bubbleColors]);

    useEffect(() => {
        let animationFrameId;
        function update() {
            setBubbles((prev) => {
                const { innerWidth: w, innerHeight: h } = window;
                return prev.map((b) => {
                    let { x, y, vx, vy, size, rotation, rotationSpeed } = b;
                    x += vx;
                    y += vy;
                    rotation += rotationSpeed;
                    if (x < 0 || x + size > w) vx = -vx;
                    if (y < 0 || y + size > h) vy = -vy;
                    return { ...b, x, y, vx, vy, rotation };
                });
            });
            animationFrameId = requestAnimationFrame(update);
        }
        animationFrameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div ref={containerRef} className="bubble-container">
            {bubbles.map((b) => (
                <div
                    key={b.id}
                    className="bubble"
                    style={{
                        left: b.x,
                        top: b.y,
                        width: b.size,
                        height: b.size,
                        backgroundColor: b.color,
                        borderRadius: "50%",
                        transform: `translate3d(${b.x}px, ${b.y}px, 0) rotate(${b.rotation}deg)`,
                    }}
                >
                    <img
                        src={overlayImage}
                        alt="bubble overlay"
                        className="bubble-overlay"
                    />
                </div>
            ))}
        </div>
    );
}
