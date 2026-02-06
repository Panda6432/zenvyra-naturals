"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSection2() {
  const sectionRef = useRef(null);
  const leftBlockRef = useRef(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    const ctx = gsap.context(() => {

      // --------------------------------------------------------
      // 1. MOBILE ANIMATION (< 768px)
      // --------------------------------------------------------
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "center center",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });
        // Shrink to 15% width (Image gets 85%) - more room for text
        tl.to(leftBlockRef.current, { width: "15%", ease: "power2.out" });
      });

      // --------------------------------------------------------
      // 2. TABLET ANIMATION (768px - 1023px)
      // --------------------------------------------------------
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "center center",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });
        // Shrink to 50% width (More room for text on tablets)
        tl.to(leftBlockRef.current, { width: "50%", ease: "power2.out" });
      });

      // --------------------------------------------------------
      // 3. DESKTOP ANIMATION (>= 1024px)
      // --------------------------------------------------------
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "center center",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });
        // Shrink to 40% width (Standard desktop ratio)
        tl.to(leftBlockRef.current, { width: "40%", ease: "power2.out" });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-[#0a1a10]">

      {/* --- Background Layer (Image & Right/Bottom Text) --- */}
      <div className="absolute inset-0 h-full w-full z-0 flex justify-end">
        <div className="relative h-full w-full md:w-[60%]">
          <Image
            src="/centella-leaf.webp"
            alt="Centella Leaf - Source of hydration and elasticity"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10]/90 via-transparent to-transparent"></div>

          {/* Centella Leaf Text */}
          {/* Mobile: w-full + px-6 prevents cut-off. Right aligned. */}
          {/* Tablet/Desktop: Pushed left (md:left-0) and made BIG (md:text-7xl). */}
          <div className="absolute bottom-0 right-0 w-full md:w-auto md:left-0 px-6 pb-8 md:p-10 md:pb-16 max-w-2xl z-20 text-right md:text-left break-words">
            <h3 className="text-3xl md:text-5xl lg:text-7xl text-[#EAFF04] font-normal mb-3 leading-none">
              Centella Leaf
            </h3>
            <p className="text-lg md:text-2xl lg:text-2xl text-[#f0f0f0] font-light leading-tight">
              Source of hydration and elasticity.
            </p>
          </div>
        </div>
      </div>

      {/* --- Foreground Layer (Left Text) --- */}
      <div
        ref={leftBlockRef}
        className="absolute left-0 top-0 h-full w-[90%] bg-[#0a1a10] z-10 flex flex-col justify-start pt-12 md:pt-24 pl-2 md:pl-10 pr-2"
        style={{ willChange: "width" }}
      >
        <div className="max-w-xl h-full overflow-visible">

          {/* MOBILE LAYOUT: Vertical Text Column */}
          <div className="flex flex-col md:hidden gap-2 h-[80%] justify-start">
            <span className="text-2xl sm:text-3xl text-[#f0f0f0] uppercase font-normal [writing-mode:vertical-lr] [text-orientation:upright] tracking-[0.1em] leading-none">
              PHYTO
            </span>
            <span className="text-2xl sm:text-3xl text-[#f0f0f0] uppercase font-normal [writing-mode:vertical-lr] [text-orientation:upright] tracking-[0.1em] leading-none mt-12">
              NUTRIENTS
            </span>
          </div>

          {/* TABLET/DESKTOP LAYOUT */}
          {/* md:text-5xl fits in the 50% box. lg:text-7xl scales up for desktop. */}
          <h2 className="hidden md:block text-[#f0f0f0] uppercase font-normal leading-none mb-6 tracking-wide md:text-5xl lg:text-7xl xl:text-8xl">
            PHYTO <br /> NUTRIENTS
          </h2>

          <p className="hidden md:block text-xl md:text-2xl text-[#f0f0f0] font-light tracking-wider">
            Plant-powered hydration.
          </p>
        </div>
      </div>

    </section>
  );
}