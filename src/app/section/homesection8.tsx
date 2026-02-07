"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VerdantLogo } from "../components/logos/VerdantLogo";
import { BioGenesisLogo } from "../components/logos/BioGenesisLogo";
import { PureLabLogo } from "../components/logos/PureLabLogo";
import { EcoDermLogo } from "../components/logos/EcoDermLogo";
import { BotanicaLogo } from "../components/logos/BotanicaLogo";

gsap.registerPlugin(ScrollTrigger);

const LOGOS = [
    { id: 1, Component: VerdantLogo },
    { id: 2, Component: BioGenesisLogo },
    { id: 3, Component: PureLabLogo },
    { id: 4, Component: EcoDermLogo },
    { id: 5, Component: BotanicaLogo },
];

export default function HomeSection8() {
    const sectionRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Infinite Marquee Animation
            if (marqueeRef.current) {
                // Use the total width of the container
                const width = marqueeRef.current.scrollWidth;

                // Move left by 50% of the total width (which equals 2 full sets of logos)
                // Since we have 4 sets total, this loops seamlessly from set 1 to set 3
                gsap.to(marqueeRef.current, {
                    x: -width / 2,
                    duration: 30, // Adjusted duration for smooth speed
                    ease: "none",
                    repeat: -1,
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#0a1a10] via-[#050d08] to-black"
        >
            {/* Title */}
            <div className="w-full px-6 md:px-10 flex flex-col md:flex-row justify-between items-start mb-16 md:mb-20">
                <div className="w-full md:w-[35%] mb-10 md:mb-0">
                    <h2 className="text-6xl md:text-8xl font-normal leading-none tracking-wide text-white">
                        Trusted and Proven
                    </h2>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="w-full relative overflow-hidden">
                {/* Gradient Masks for fading edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div ref={marqueeRef} className="flex gap-8 w-max px-4 py-10">
                    {/* Render Double for infinite loop */}
                    {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                        <div
                            key={index}
                            className="w-[200px] h-[100px] md:w-[280px] md:h-[140px] flex-shrink-0 bg-[#0d2416] rounded-2xl flex items-center justify-center text-[#48ff90] border border-[#48ff90]/30 shadow-[0_0_25px_rgba(72,255,144,0.4)] transition-all duration-300"
                        >
                            <logo.Component className="w-[160px] h-[60px] opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
