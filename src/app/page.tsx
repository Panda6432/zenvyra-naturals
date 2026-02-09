"use client";

import HomeSection1 from "./section/homesetion1";
import HomeSection2 from "./section/homesection2";
import HomeSection3 from "./section/homesection3";
import HomeSection4 from "./section/homesection4";
import HomeSection5 from "./section/homesection5";
import HomeSectionCards from "./section/homesectioncards";
import HomeSection6 from "./section/homesection6";
import HomeSection7 from "./section/homesection7";
import HomeSection8 from "./section/homesection8";
import HomeSection9 from "./section/homesection9";

export default function Home() {
  return (
    <main className="w-full bg-[#0a1a10] text-[#f0f0f0]">

      {/* Hero Section */}
      <HomeSection1 />

      {/* Phyto Nutrients Reveal Section */}
      <HomeSection2 />

      {/* Hydration Reveal Section */}
      <HomeSection3 />

      {/* Stats Section */}
      <HomeSection4 />

      {/* Product Slideshow */}
      <HomeSection5 />

      {/* Product Cards  */}
      <HomeSectionCards />

      {/* Minimalist Section */}
      <HomeSection6 />

      {/* Experience Section */}
      <HomeSection7 />

      {/* Trusted and Proven Section */}
      <HomeSection8 />

      {/* Collage Section */}
      <HomeSection9 />

    </main>
  );
}