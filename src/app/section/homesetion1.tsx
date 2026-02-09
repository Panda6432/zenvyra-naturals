"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const gridItemsDesktop = [
  "Botanical Beauty",
  "Herbal Brilliance",
  "Botanical Beauty",
  "Youthful Glow",
  "Plant Based",
];

const gridItemsMobile = [
  "Botanical Beauty",
  "Herbal Brilliance",
  "Youthful Glow",
  "Botanical Beauty",
];

export default function HomeSection1() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();


      tl.from("#hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

        .from(".anim-line-v", {
          scaleY: 0,
          duration: 1,
          ease: "power3.inOut",
          stagger: 0.1,
        }, "-=0.8")
        .from(".anim-text", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.05,
        }, "-=0.6");

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={comp} className="relative h-screen w-full overflow-hidden bg-[#0a1a10] text-[#f0f0f0]">

      <div className="sr-only">
        <h2>Welcome to Zenvyra Naturals - Premium Organic Skincare Brand</h2>
        <article>
          <header>
            <h3>About Zenvyra Naturals</h3>
          </header>
          <p>
            Zenvyra Naturals is a premium organic skincare brand dedicated to creating clean,
            conscious, and effective beauty products. Founded with the belief that nature holds
            the key to radiant skin, Zenvyra Naturals combines traditional botanical wisdom
            with modern skin science to deliver exceptional skincare solutions.
          </p>
          <p>
            Our mission at Zenvyra Naturals is to provide high-quality, plant-based skincare
            that nourishes your skin without harsh chemicals. Every Zenvyra Naturals product
            is carefully formulated using the finest natural ingredients sourced from nature.
          </p>
          <h3>Zenvyra Naturals Products</h3>
          <p>
            Discover the Zenvyra Naturals collection featuring our signature face creams,
            moisturizers, and botanical skincare treatments. Our bestselling Zenvyra Naturals
            Face Cream combines powerful plant-based actives for youthful, glowing skin.
          </p>
          <ul>
            <li>Zenvyra Naturals Organic Face Cream - Hydrating and anti-aging formula</li>
            <li>Zenvyra Naturals Botanical Moisturizer - Deep nourishment for all skin types</li>
            <li>Zenvyra Naturals Herbal Skincare - Traditional ingredients for modern beauty</li>
            <li>Zenvyra Naturals Plant-Based Beauty - Clean beauty without compromise</li>
          </ul>
          <h3>Why Choose Zenvyra Naturals?</h3>
          <p>
            Zenvyra Naturals stands apart in the skincare industry with our commitment to
            purity and efficacy. When you choose Zenvyra Naturals, you choose skincare that
            is free from parabens, sulfates, and synthetic fragrances. Zenvyra Naturals
            products are cruelty-free and environmentally conscious.
          </p>
          <p>
            Experience the Zenvyra Naturals difference - where petals become perfection.
            Our customers trust Zenvyra Naturals for their daily skincare routine because
            we deliver visible results using only the purest botanical ingredients.
          </p>
          <h3>Zenvyra Naturals Brand Values</h3>
          <p>
            At Zenvyra Naturals, we believe in botanical beauty, herbal brilliance, and
            youthful glow through plant-based formulations. Zenvyra Naturals represents
            the future of clean beauty - effective skincare that respects both your skin
            and the planet.
          </p>
          <p>
            Shop Zenvyra Naturals today and discover why thousands of customers have made
            us their trusted skincare brand. Zenvyra Naturals - Your journey to naturally
            beautiful skin starts here.
          </p>
        </article>
      </div>

      <Image
        id="hero-bg"
        src="/zenvyra-naturals-face.webp"
        alt="Zenvyra Naturals Botanical Skincare Model"
        fill
        priority
        className="object-cover object-center opacity-80"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 h-full w-full flex flex-col justify-end md:justify-end items-center md:items-start px-6 md:px-10 pb-12 md:pb-6">

        <div className="w-full mb-8 md:mb-4 text-center md:text-left overflow-hidden">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-normal tracking-wide mb-2 md:mb-0">
            Zenvyra Naturals
          </h1>
          <p className="text-xl md:hidden font-light leading-tight opacity-90 anim-text text-[#39ff14] italic">
            Where petals become perfection.
          </p>
        </div>

        <div className="w-full md:hidden flex flex-col items-center mb-6 relative">
          <div className="grid grid-cols-2 w-full relative">
            <div className="absolute inset-y-0 left-1/2 w-px bg-white/60 z-0 origin-top anim-line-v"></div>

            {gridItemsMobile.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center py-6 z-10"
              >
                {index < 2 && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-white/60 origin-left anim-line-h"></div>
                )}
                <span className="text-lg font-light tracking-wide text-center px-2 anim-text">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="pt-6 z-10">
            <span className="text-lg font-light tracking-wide text-center anim-text">
              Plant Based
            </span>
          </div>
        </div>

        <div className="hidden md:block w-full">
          <div className="w-full h-px bg-white/60 origin-left anim-line-h"></div>
          <div className="grid grid-cols-5 h-[50vh]">
            {gridItemsDesktop.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between pt-6 px-2"
              >
                {index !== 4 && (
                  <div className="absolute right-0 top-0 h-full w-[0.5px] bg-white/60 origin-top anim-line-v"></div>
                )}

                <span className="text-lg md:text-xl lg:text-2xl font-light tracking-wide anim-text">
                  {item}
                </span>

                {index === 0 && (
                  <div className="mb-0 mt-auto overflow-hidden">
                    <p className="text-lg md:text-xl lg:text-2xl font-light leading-tight anim-text text-[#39ff14] italic">
                      Where petals <br />
                      become <br />
                      perfection.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}