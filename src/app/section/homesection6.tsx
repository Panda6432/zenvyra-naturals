"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSection6() {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const textLeftRef = useRef(null);
    const textRightRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {


            gsap.from(lineRef.current, {
                height: 0,
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });


            gsap.from([textLeftRef.current, textRightRef.current], {
                opacity: 0,
                y: 20,
                duration: 1,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-[#0a1a10] text-[#f0f0f0] overflow-hidden"
            aria-label="Minimalist Section"
        >
            <div className="absolute inset-0 flex justify-center items-center">
                <div
                    ref={lineRef}
                    className="w-[1px] bg-white/20 h-full origin-top"
                />
            </div>

            <div className="relative w-full h-full px-4 md:px-10 py-20 flex flex-col justify-between">

                <div className="w-full flex justify-start">
                    <h2
                        ref={textLeftRef}
                        className="max-w-[45%] break-words text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-normal leading-none tracking-wide text-[#f0f0f0] opacity-90"
                    >
                        #PureEssence
                    </h2>
                </div>

                <div className="w-full flex justify-end">
                    <h2
                        ref={textRightRef}
                        className="max-w-[45%] break-words text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-normal leading-none tracking-wide text-[#f0f0f0] opacity-90 text-right"
                    >
                        Nature's Soul
                    </h2>
                </div>

            </div>
        </section>
    );
}
