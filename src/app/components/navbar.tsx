"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDesktopHovered, setIsDesktopHovered] = useState(false);

    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isMobileOpen) {
            gsap.to(mobileMenuRef.current, {
                clipPath: "circle(150% at calc(100% - 3rem) 3rem)", // Expands from top right (approx position of hamburger)
                duration: 0.8,
                ease: "power2.inOut",
                pointerEvents: "auto"
            });
            gsap.fromTo(".mobile-nav-link",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: "power2.out" }
            );
        } else {
            gsap.to(mobileMenuRef.current, {
                clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
                duration: 0.6,
                ease: "power2.inOut",
                pointerEvents: "none"
            });
        }
    }, [isMobileOpen]);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Essentials", href: "#essentials" },
        { name: "Experience", href: "#experience" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
                style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0) 100%)",
                }}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 relative z-50">
                        <a href="/" className="text-4xl md:text-5xl font-normal tracking-wide text-[#f0f0f0] hover:text-white transition-colors">
                            ZN
                        </a>
                    </div>

                    {/* Right side - Desktop Drone/Tray & Mobile Hamburger */}
                    <div className="flex items-center gap-4 md:gap-6 relative z-50">

                        {/* DESKTOP HOVER TRAY */}
                        <div
                            className="hidden md:flex items-center justify-end"
                            onMouseEnter={() => setIsDesktopHovered(true)}
                            onMouseLeave={() => setIsDesktopHovered(false)}
                        >
                            <div
                                className={`
                                    relative flex items-center bg-[#034B38] border-2 border-[#CBA409] rounded-full overflow-hidden transition-all duration-500 ease-in-out shadow-xl
                                    ${isDesktopHovered ? "w-[480px] px-8" : "w-10 h-10 justify-center"}
                                `}
                                style={{ height: "40px" }} // Fixed height matching the closed circle
                            >
                                {/* Closed State: Hamburger Lines */}
                                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-[5px] transition-opacity duration-300 ${isDesktopHovered ? "opacity-0" : "opacity-100"}`}>
                                    <span className="w-4 h-[1.5px] bg-[#CBA409]" />
                                    <span className="w-4 h-[1.5px] bg-[#CBA409]" />
                                    <span className="w-4 h-[1.5px] bg-[#CBA409]" />
                                </div>

                                {/* Open State: Nav Links */}
                                <div className={`flex items-center justify-between w-full transition-all duration-500 ${isDesktopHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-[#f0f0f0] hover:text-[#CBA409] text-sm font-medium tracking-wide whitespace-nowrap transition-colors mx-3"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>


                        {/* MOBILE HAMBURGER (Visible only on mobile) */}
                        <button
                            className="md:hidden w-8 h-8 rounded-full bg-[#034B38] border-2 border-[#CBA409] flex items-center justify-center hover:bg-[#045d46] transition-all z-50 relative"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {/* Animate hamburger to X */}
                            <div className="flex flex-col items-center justify-center gap-[4px]">
                                <span className={`w-3.5 h-[1.5px] bg-[#CBA409] transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
                                <span className={`w-3.5 h-[1.5px] bg-[#CBA409] transition-all duration-300 ${isMobileOpen ? "opacity-0" : ""}`} />
                                <span className={`w-3.5 h-[1.5px] bg-[#CBA409] transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
                            </div>
                        </button>


                        {/* Contact Us Button - Still separate on Desktop as per "tray will have about us... contact us button separate" */}
                        <a
                            href="#contact"
                            className="hidden md:flex items-center justify-center px-6 py-2 bg-[#034B38] text-white text-sm font-medium rounded-full border-2 border-[#CBA409] hover:bg-[#045d46] transition-all"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>

            {/* MOBILE FULL SCREEN MENU */}
            <div
                ref={mobileMenuRef}
                className="fixed inset-0 z-40 bg-[#034B38] w-full h-screen pointer-events-none md:hidden flex flex-col justify-center px-10"
                style={{ clipPath: "circle(0% at 100% 0%)" }} // Initial clip path hidden
            >
                <div className="flex flex-col gap-8 items-start">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-nav-link text-4xl sm:text-5xl font-light text-[#f0f0f0] hover:text-[#CBA409] transition-colors tracking-wide"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    {/* Add Contact Link to Mobile Menu since the button is usually hidden or part of the flow */}
                    <a
                        href="#contact"
                        className="mobile-nav-link text-4xl sm:text-5xl font-light text-[#CBA409] hover:text-white transition-colors tracking-wide mt-4"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    );
}
