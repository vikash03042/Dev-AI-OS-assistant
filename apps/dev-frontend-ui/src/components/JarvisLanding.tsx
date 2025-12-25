
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ReactLenis } from '@studio-freight/react-lenis';

interface JarvisLandingProps {
    onInitialize: () => void;
}

const JarvisLanding: React.FC<JarvisLandingProps> = ({ onInitialize }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const orbital1Ref = useRef<HTMLDivElement>(null);
    const orbital2Ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial State
        gsap.set([orbital1Ref.current, orbital2Ref.current], {
            scale: 0.8,
            opacity: 0,
            rotation: 0
        });
        gsap.set(textRef.current, { y: 50, opacity: 0 });
        gsap.set(buttonRef.current, { y: 20, opacity: 0 });

        // Animation Sequence
        tl.to([orbital1Ref.current, orbital2Ref.current], {
            duration: 2,
            scale: 1,
            opacity: 0.6,
            stagger: 0.2,
            ease: 'power3.out'
        })
            .to(textRef.current, {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: 'power4.out'
            }, "-=1.5")
            .to(buttonRef.current, {
                duration: 0.8,
                y: 0,
                opacity: 1,
                ease: 'back.out(1.7)'
            }, "-=0.5");

        // Continuous Rotation
        gsap.to(orbital1Ref.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none'
        });

        gsap.to(orbital2Ref.current, {
            rotation: -360,
            duration: 25,
            repeat: -1,
            ease: 'none'
        });

    }, []);

    const handleInitialize = () => {
        // Exit Animation
        gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'power2.in',
            onComplete: () => {
                // Redirect to Google Auth (via Next.js Proxy)
                window.location.href = '/api/auth/google';
            }
        });

        gsap.to([orbital1Ref.current, orbital2Ref.current], {
            scale: 3,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.in'
        });
    };

    return (
        <ReactLenis root>
            <div ref={containerRef} className="h-screen w-screen bg-black flex flex-col items-center justify-center relative overflow-hidden font-sans">

                {/* Status Badge */}
                <div className="absolute top-10 flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-900/10 backdrop-blur-sm z-30">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_#2dd4bf]"></div>
                    <span className="text-teal-400 text-xs font-mono tracking-widest uppercase">System Status: Optimal</span>
                </div>

                {/* Orbitals */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div ref={orbital1Ref} className="w-[600px] h-[600px] rounded-full border border-slate-700/50 border-t-teal-500/50 border-r-teal-500/20 shadow-[0_0_30px_rgba(45,212,191,0.05)] absolute"></div>
                    <div ref={orbital2Ref} className="w-[450px] h-[750px] rounded-[100%] border border-slate-700/30 border-b-white/20 absolute transform rotate-12"></div>

                    {/* Center Core Glow */}
                    <div className="w-64 h-64 bg-teal-600/10 rounded-full blur-[80px] absolute animate-pulse"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-20 text-center">
                    <h1 ref={textRef} className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 tracking-tighter mb-4 drop-shadow-2xl">
                        JARVIS<span className="text-teal-500">.OS</span>
                    </h1>

                    <p className="text-slate-400 text-lg tracking-widest uppercase font-light mb-12 max-w-xl mx-auto">
                        Autonomous neural interface for the next generation of vibe-coding developers.
                    </p>

                    <div className="flex justify-center gap-6">
                        <button
                            ref={buttonRef}
                            onClick={handleInitialize}
                            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
                        >
                            Initialize Core
                        </button>

                        <button className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors backdrop-blur-sm">
                            Security Protocols
                        </button>
                    </div>
                </div>

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
            </div>
        </ReactLenis>
    );
};

export default JarvisLanding;
