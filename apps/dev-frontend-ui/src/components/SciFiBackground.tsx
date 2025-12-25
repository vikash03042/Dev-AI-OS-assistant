import React, { useRef, useEffect } from 'react';

const SciFiBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resize);
        resize();

        // Particles
        const particles: { x: number; y: number; z: number; vx: number; vy: number; vz: number }[] = [];
        const particleCount = 200;
        const depth = 2000;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: (Math.random() - 0.5) * width * 2,
                y: (Math.random() - 0.5) * height * 2,
                z: Math.random() * depth,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                vz: (Math.random() - 0.5) * 2 // Moving towards/away camera
            });
        }

        const draw = () => {
            ctx.fillStyle = '#0f172a'; // Slate 900
            ctx.fillRect(0, 0, width, height);

            // Gradient overlay for depth
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            gradient.addColorStop(0, 'rgba(15, 23, 42, 0)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            ctx.lineWidth = 1;

            particles.forEach((p, i) => {
                // Move
                p.x += p.vx;
                p.y += p.vy;
                p.z -= 2; // Move constantly towards screen

                // Reset if out of bounds
                if (p.z <= 0) p.z = depth;
                if (p.z > depth) p.z = 0;

                // Project
                const scale = 500 / (500 + p.z); // Perspective projection
                const x2d = cx + p.x * scale;
                const y2d = cy + p.y * scale;

                // Draw star/particle
                const alpha = (1 - p.z / depth) * 0.8;
                const size = (1 - p.z / depth) * 3;

                ctx.beginPath();
                ctx.fillStyle = `rgba(100, 200, 255, ${alpha})`;
                ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
                ctx.fill();

                // Connect nearby particles
                for (let j = i + 1; j < particleCount; j++) {
                    const p2 = particles[j];
                    // Simple 3D distance check roughly
                    const dz = Math.abs(p.z - p2.z);
                    if (dz > 100) continue;

                    const scale2 = 500 / (500 + p2.z);
                    const x2d2 = cx + p2.x * scale2;
                    const y2d2 = cy + p2.y * scale2;

                    const dx = x2d - x2d2;
                    const dy = y2d - y2d2;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - dist / 100) * alpha})`;
                        ctx.moveTo(x2d, y2d);
                        ctx.lineTo(x2d2, y2d2);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.6 }}
        />
    );
};

export default SciFiBackground;
