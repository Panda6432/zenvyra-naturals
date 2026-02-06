"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/footer";

gsap.registerPlugin(ScrollTrigger);

const images = {
    center: "/ZNface2.webp",
    row1: ["/ZNface1.webp", "/ZNface3.webp"],
    row2Sides: ["/ZNface4.webp", "/ZNface5.webp"],
    row3: ["/ZNface6.webp", "/ZNface7.webp"],
    allMobile: [
        "/ZNface2.webp",
        "/ZNface1.webp",
        "/ZNface3.webp",
        "/ZNface4.webp",
        "/ZNface5.webp",
        "/ZNface6.webp",
        "/ZNface7.webp",
    ]
};

export default function HomeSection9() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [notification, setNotification] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setFormData({ ...formData, phone: value });
        }
    };

    const handleBookContact = () => {
        if (!formData.name || !formData.email || !formData.phone) return;
        setNotification("Appointment is booked");
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => setNotification(""), 5000);
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Desktop Animation ONLY (min-width: 768px)
            mm.add("(min-width: 768px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=150%",
                        scrub: 1.5,
                        pin: true,
                        anticipatePin: 1,
                    },
                });

                // 1. Center Image: Zoom in
                tl.to(".center-image", {
                    scale: 4.0,
                    borderRadius: 0,
                    zIndex: 50,
                    ease: "power2.inOut",
                    duration: 1,
                    force3D: true,
                }, "start");

                // 2. Row 1 (Top)
                tl.to(".row-1", {
                    yPercent: -400,
                    xPercent: (i) => i === 0 ? -200 : 200,
                    scale: 3.5,
                    ease: "power2.inOut",
                    duration: 1,
                    force3D: true,
                }, "start");

                // 3. Row 2 Sides - Expand and move horizontally away from center
                tl.to(".row-2-side", {
                    xPercent: (i) => i === 0 ? -500 : 500, // Left goes far left, right goes far right
                    scale: 3.5,
                    ease: "power2.inOut",
                    duration: 1,
                    force3D: true,
                }, "start");

                // 4. Row 3 (Bottom)
                tl.to(".row-3", {
                    yPercent: 400,
                    xPercent: (i) => i === 0 ? -200 : 200,
                    scale: 3.5,
                    ease: "power2.inOut",
                    duration: 1,
                    force3D: true,
                }, "start");
            });

            // Mobile: No animation - images flow naturally
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-black w-full overflow-x-hidden">
            {/* Gallery Section */}
            {/* Desktop: fixed height with pinned animation */}
            {/* Mobile: auto height, images stack vertically, no pinning */}
            <section
                ref={containerRef}
                className="relative w-full min-h-screen md:h-screen bg-black overflow-hidden flex flex-col items-center justify-start md:justify-center"
                aria-label="Face Gallery Showcase"
            >
                {/* Desktop Layout */}
                <div className="hidden md:flex flex-col items-center justify-center gap-[2vw] origin-center">
                    {/* Row 1 */}
                    <div className="flex gap-[4vw] items-end translate-y-[3vw]">
                        <div className="row-1 relative w-[16vw] h-[12vw] rounded-lg overflow-hidden shrink-0 shadow-2xl opacity-80" style={{ willChange: 'transform' }}>
                            <Image
                                src={images.row1[0]}
                                alt="Zenvyra Naturals skincare customer - radiant skin result"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="row-1 relative w-[18vw] h-[14vw] rounded-lg overflow-hidden shrink-0 shadow-2xl opacity-80" style={{ willChange: 'transform' }}>
                            <Image
                                src={images.row1[1]}
                                alt="Zenvyra Naturals skincare customer - glowing complexion"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Row 2 (Center Row) */}
                    <div className="flex gap-[3vw] items-center z-10">
                        <div className="row-2-side relative w-[14vw] h-[18vw] rounded-lg overflow-hidden shrink-0 shadow-2xl opacity-80" style={{ willChange: 'transform' }}>
                            <Image
                                src={images.row2Sides[0]}
                                alt="Zenvyra Naturals skincare customer - natural beauty"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* CENTER IMAGE */}
                        <div className="center-image relative w-[25vw] h-[17vw] rounded-lg overflow-hidden shadow-2xl shrink-0 z-20" style={{ willChange: 'transform' }}>
                            <Image
                                src={images.center}
                                alt="Zenvyra Naturals skincare - botanical face cream results"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="row-2-side relative w-[14vw] h-[18vw] rounded-lg overflow-hidden shrink-0 shadow-2xl opacity-80" style={{ willChange: 'transform' }}>
                            <Image
                                src={images.row2Sides[1]}
                                alt="Zenvyra Naturals skincare customer - healthy skin"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex gap-[4vw] items-start -translate-y-[3vw]">
                        <div className="row-3 relative w-[18vw] h-[13vw] rounded-lg overflow-hidden shrink-0 shadow-2xl opacity-80" style={{ willChange: 'transform' }}>
                            <Image
                                src={images.row3[0]}
                                alt="Zenvyra Naturals skincare customer - youthful glow"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="row-3 relative w-[15vw] h-[12vw] rounded-lg overflow-hidden shrink-0 shadow-2xl opacity-80" style={{ willChange: 'transform' }}>
                            <Image
                                src={images.row3[1]}
                                alt="Zenvyra Naturals skincare customer - clear skin"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - Vertically stacked images, no animation */}
                <div className="md:hidden flex flex-col w-full px-4 py-8 gap-6 bg-black">
                    {images.allMobile.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={src}
                                alt={`Face ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* 
             Contact Section 
             Mobile: auto height, stacked layout
             Desktop: full screen height, side by side layout
          */}
            <section id="contact" className="contact-section relative w-full min-h-screen md:h-screen bg-black flex flex-col px-6 md:px-12 pt-12 md:pt-16 pb-24 md:pb-8 z-10">

                {/* Main Content - Side by Side Layout on Desktop, Stacked on Mobile */}
                <div className="flex-1 w-full flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">

                    {/* Left Side - Header & Tagline */}
                    <div className="w-full md:w-[40%] flex flex-col">
                        <h2 className="text-4xl sm:text-5xl md:text-8xl font-normal leading-none tracking-wide text-[#f0f0f0] text-left">
                            Contact Us
                        </h2>
                        {/* Cursive Green Tagline */}
                        <p className="mt-4 md:mt-6 text-xl md:text-3xl text-green-400 italic font-light leading-relaxed" style={{ fontFamily: "'Italiana', serif" }}>
                            Where nature meets radiant skin
                        </p>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full md:w-[50%] md:pr-12 flex justify-start md:justify-end">
                        <div className="w-full max-w-xl flex flex-col gap-4 md:gap-6 p-6 md:p-8 bg-white/5 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                            <div className="group relative">
                                <label className="block text-xs font-semibold text-white mb-2 ml-1 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Enter your name"
                                    className="w-full bg-black/20 border border-green-500/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400 focus:bg-white/5 transition-all text-sm"
                                />
                            </div>
                            <div className="group relative">
                                <label className="block text-xs font-semibold text-white mb-2 ml-1 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="Enter your email"
                                    className="w-full bg-black/20 border border-green-500/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400 focus:bg-white/5 transition-all text-sm"
                                />
                            </div>
                            <div className="group relative">
                                <label className="block text-xs font-semibold text-white mb-2 ml-1 uppercase tracking-wider">Phone Number</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    placeholder="Enter your phone number"
                                    className="w-full bg-black/20 border border-green-500/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400 focus:bg-white/5 transition-all text-sm"
                                />
                            </div>
                            <button
                                onClick={handleBookContact}
                                className="w-full py-4 mt-2 bg-white rounded-xl text-black font-bold text-base hover:bg-gray-200 transition-all transform active:scale-[0.98]"
                            >
                                Request Appointment
                            </button>
                            {notification && (
                                <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-xl text-center">
                                    <p className="text-green-400 font-medium">{notification}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Left - Customer Reviews */}
                {/* On mobile: relative positioning within the flow */}
                {/* On desktop: absolute bottom positioning */}
                <div className="relative md:absolute md:bottom-8 md:left-12 flex flex-col gap-2 mt-8 md:mt-0">
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-green-400/80 text-sm italic" style={{ fontFamily: "'Italiana', serif" }}>
                        "Exceptional service & results"
                    </p>
                    <p className="text-white/60 text-xs">
                        500+ Happy Customers
                    </p>
                </div>

            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
