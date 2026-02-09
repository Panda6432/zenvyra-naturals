"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "74", label: "Less Redness" },
  { value: "45", label: "Brighter Tone" },
  { value: "57", label: "Acne Reduction" },
  { value: "43", label: "Fewer Breakouts" },
];

export default function HomeSection3() {
  const sectionRef = useRef(null);
  const curtainRef = useRef(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    const ctx = gsap.context(() => {


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
        tl.to(curtainRef.current, { width: "50%", ease: "power2.out" });
      });


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
        tl.to(curtainRef.current, { width: "50%", ease: "power2.out" });
      });


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
        tl.to(curtainRef.current, { width: "60%", ease: "power2.out" });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-[#0a1a10]">

      <div className="absolute inset-0 h-full w-full z-0 flex justify-start">
        <div className="relative h-full w-[50%] md:w-[50%] lg:w-[40%]">
          <Image
            src="/turmeric-root.webp"
            alt="Turmeric Root - Supports anti-aging with antioxidants"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 50vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10]/90 via-transparent to-transparent"></div>

          <div className="absolute bottom-0 right-0 w-full px-4 pb-8 md:p-10 md:pb-16 max-w-xl z-20 flex flex-col items-end text-right">
            <h3 className="text-3xl md:text-5xl lg:text-7xl text-[#EAFF04] font-normal mb-3 leading-none">
              Turmeric Root
            </h3>
            <p className="text-lg md:text-2xl text-[#f0f0f0] font-light leading-tight">
              Supports anti-aging <br className="hidden md:block" /> with antioxidants.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={curtainRef}
        className="absolute right-0 top-0 h-full w-[90%] bg-[#0a1a10] z-10"
        style={{ willChange: "width" }}
      ></div>

      <div className="absolute right-0 top-0 h-full w-[50%] md:w-[50%] lg:w-[60%] z-20 flex flex-col justify-center items-center px-4 md:px-16 pointer-events-none">
        <div className="w-full h-full flex flex-col justify-center max-w-2xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#EAFF04] rounded-xl p-4 md:p-6 relative flex flex-col justify-between items-start md:aspect-square shadow-lg overflow-hidden"
              >

                <div className="flex items-baseline -ml-2 -mt-4 md:-mt-6">
                  <span className="text-[7rem] sm:text-[8rem] md:text-[10rem] lg:text-[15rem] text-[#0a1a10] font-normal tracking-tighter leading-[0.7]">
                    {stat.value}
                  </span>

                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0a1a10] font-light ml-2">
                    %
                  </span>
                </div>

                <span className="text-xl sm:text-2xl md:text-3xl text-[#0a1a10] font-normal tracking-wide leading-none z-10 mt-4 md:mt-0">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}