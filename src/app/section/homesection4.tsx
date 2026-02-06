"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// SEO: Stats that build trust (Social Proof)
const stats = [
  { value: 5, suffix: "k+", label: "Daily Visitors" },
  { value: 98, suffix: "%", label: "Positive Reviews" },
  { value: 100, suffix: "%", label: "Organic Ingredients" },
];

export default function HomeSection4() {
  const sectionRef = useRef(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ONLY ANIMATION: Number Counter
      stats.forEach((stat, index) => {
        const el = numberRefs.current[index];
        if (!el) return;

        gsap.from(el, {
          innerText: 0,
          duration: 2,
          snap: { innerText: 1 }, // Forces whole numbers during count
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%", // Starts counting when section is 60% into view
          },
          onUpdate: function () {
            // Update the text content with the rounded value
            el.innerText = Math.ceil(Number(this.targets()[0].innerText)) + "";
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#0a1a10] text-[#f0f0f0] pt-20 md:pt-32 pb-0"
      aria-label="About Zenvyra Naturals"
    >

      {/* --- Top Content: Heading & Text --- */}
      {/* SEO: Using Semantic HTML5 structure */}
      <div className="w-full px-6 md:px-10 flex flex-col md:flex-row justify-between items-start mb-16 md:mb-20">

        {/* Left: Heading */}
        <div className="w-full md:w-[35%] mb-10 md:mb-0">
          <h2 className="text-6xl md:text-8xl font-normal leading-none tracking-wide text-[#f0f0f0]">
            About Us
          </h2>
        </div>

        {/* Right: Paragraphs */}
        <article className="w-full md:w-[60%] flex flex-col gap-6 md:gap-8">
          <p className="text-xl md:text-3xl font-light leading-relaxed text-[#f0f0f0]/90">
            We craft our formulas with powerful botanicals like Centella Asiatica, Turmeric, and a carefully curated blend of skin-loving herbs that work in harmony with your skin.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed text-[#f0f0f0]/70">
            At Zenvyra Naturals, we believe beauty should be clean, conscious, and effective. By blending traditional botanical wisdom with modern skin science, we create products that are free from harsh chemicals and rich in plant-powered actives.
          </p>
        </article>

      </div>

      {/* --- Bottom Content: Image & Stats --- */}
      <div className="relative w-full h-[80vh] md:h-[80vh] w-full">

        {/* Full Width Image */}
        {/* SEO: Priority loading for large viewport image + descriptive alt text */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/zenvyra-naturals-aboutus.webp"
            alt="Organic skincare ingredients layout featuring turmeric roots, centella asiatica leaves, and herbal oils on a white cloth"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Stats Overlay - Positioned over the image ingredients */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 py-10 md:py-0">

            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center ${
                  // Add separator lines between numbers ONLY on desktop, and not for the last one
                  index !== 2 ? "border-b-2 md:border-b-0 md:border-r-2 border-[#0a1a10]/20 pb-8 md:pb-0" : ""
                  }`}
              >
                {/* Number with Counter Animation */}
                {/* Text color is dark (#0a1a10) to contrast with the light image background */}
                <span className="text-7xl md:text-7xl lg:text-9xl text-[#0a1a10] font-normal leading-none mb-2 tracking-tighter">
                  <span ref={(el) => { numberRefs.current[index] = el; }}>
                    {stat.value}
                  </span>
                  {stat.suffix}
                </span>

                {/* Label */}
                <span className="text-lg md:text-lg lg:text-xl text-[#0a1a10] uppercase tracking-widest font-bold mt-2">
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