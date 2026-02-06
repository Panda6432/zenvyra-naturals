"use client";

import { useLayoutEffect, useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

// Product data
const products = [
    {
        id: "green",
        image: "/ZN-green.webp",
        title: "Herbal Skin Repair Cream",
        features: ["Aloe Vera", "Neem", "Turmeric"],
        featureImages: ["/aloevera.webp", "/neem.webp"]
    },
    {
        id: "yellow",
        image: "/ZN-yellow.webp",
        title: "Radiance Glow Cream",
        features: ["Vitamin C", "Saffron", "Brightening"],
        featureImages: ["/vitaminc.webp", "/saffron.webp"]
    },
    {
        id: "red",
        image: "/ZN-red.webp",
        title: "Age Repair Cream",
        features: ["Rosehip", "Retinol", "Collagen"],
        featureImages: ["/roseship.webp", "/retinol.webp"]
    },
    {
        id: "black",
        image: "/ZN-black.webp",
        title: "Charcoal Detox Cream",
        features: ["Charcoal", "Tea Tree", "Detox"],
        featureImages: ["/charcoal.webp", "/teatree.webp"]
    },
    {
        id: "purple",
        image: "/ZN-purple.webp",
        title: "Overnight Renewal Cream",
        features: ["Lavender", "Hyaluronic", "Renewal"],
        featureImages: ["/lavender.webp", "/hyaloronic.webp"]
    }
];

export default function HomeSection5() {
    const sectionRef = useRef<HTMLElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    const leftCirclesRef = useRef<(HTMLDivElement | null)[]>([]);
    const rightCirclesRef = useRef<(HTMLDivElement | null)[]>([]);

    const leftPathRef = useRef<SVGPathElement>(null);
    const rightPathRef = useRef<SVGPathElement>(null);

    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(0);

    const getLeftPosition = (relIndex: number) => {
        switch (relIndex) {
            case 0: return 0.5;
            case 1: return 0.15;
            case 2: return -0.15;
            case 3: return 1.15;
            case 4: return 0.85;
            default: return 0.5;
        }
    };

    const getRightPosition = (relIndex: number) => {
        switch (relIndex) {
            case 0: return 0.5;
            case 1: return 0.15;
            case 2: return -0.15;
            case 3: return 1.15;
            case 4: return 0.85;
            default: return 0.5;
        }
    };

    const getOpacity = (relIndex: number) => {
        if (relIndex === 0) return 1;
        if (relIndex === 1 || relIndex === 4) return 0.5;
        return 0;
    };

    useLayoutEffect(() => {
        products.forEach((_, i) => {
            const relIndex = (i - 0 + 5) % 5;

            if (leftCirclesRef.current[i] && leftPathRef.current) {
                const pos = getLeftPosition(relIndex);
                gsap.set(leftCirclesRef.current[i], {
                    motionPath: {
                        path: leftPathRef.current,
                        align: leftPathRef.current,
                        alignOrigin: [0.5, 0.5],
                        start: Math.max(0, Math.min(1, pos)),
                        end: Math.max(0, Math.min(1, pos))
                    },
                    opacity: getOpacity(relIndex),
                    scale: relIndex === 0 ? 1 : 0.9,
                    immediateRender: true
                });
            }

            if (rightCirclesRef.current[i] && rightPathRef.current) {
                const pos = getRightPosition(relIndex);
                gsap.set(rightCirclesRef.current[i], {
                    motionPath: {
                        path: rightPathRef.current,
                        align: rightPathRef.current,
                        alignOrigin: [0.5, 0.5],
                        start: Math.max(0, Math.min(1, pos)),
                        end: Math.max(0, Math.min(1, pos))
                    },
                    opacity: getOpacity(relIndex),
                    scale: relIndex === 0 ? 1 : 0.9
                });
            }
        });
    }, []);

    const animateToSlide = useCallback((newIndex: number, direction: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);

        const currentImg = imagesRef.current[currentIndex];
        const nextImg = imagesRef.current[newIndex];

        if (nextImg) gsap.set(nextImg, { opacity: 0, x: direction === 'next' ? 60 : -60, zIndex: 2 });
        if (currentImg) gsap.set(currentImg, { zIndex: 1 });

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentIndex(newIndex);
                setDisplayIndex(newIndex);
                setIsAnimating(false);
                imagesRef.current.forEach((img, i) => {
                    if (img) gsap.set(img, {
                        zIndex: i === newIndex ? 1 : 0,
                        x: 0,
                        opacity: i === newIndex ? 1 : 0
                    });
                });
            }
        });

        tl.to(currentImg, { opacity: 0, x: direction === 'next' ? -60 : 60, duration: 0.8, ease: "power2.inOut" }, 0);
        tl.to(nextImg, { opacity: 1, x: 0, duration: 0.8, ease: "power2.inOut" }, 0);

        products.forEach((_, i) => {
            const oldRelIndex = (i - currentIndex + 5) % 5;
            const newRelIndex = (i - newIndex + 5) % 5;

            const isLeftTeleport = oldRelIndex === 3 && newRelIndex === 2;
            const isRightTeleport = oldRelIndex === 3 && newRelIndex === 2;

            if (leftCirclesRef.current[i] && leftPathRef.current) {
                const oldPos = getLeftPosition(oldRelIndex);
                const newPos = getLeftPosition(newRelIndex);
                const targetOpacity = getOpacity(newRelIndex);

                if (isLeftTeleport) {
                    gsap.set(leftCirclesRef.current[i], {
                        motionPath: {
                            path: leftPathRef.current,
                            align: leftPathRef.current,
                            alignOrigin: [0.5, 0.5],
                            start: newPos,
                            end: newPos
                        },
                        opacity: 0
                    });
                } else {
                    tl.to(leftCirclesRef.current[i], {
                        motionPath: {
                            path: leftPathRef.current,
                            align: leftPathRef.current,
                            alignOrigin: [0.5, 0.5],
                            start: oldPos,
                            end: newPos
                        },
                        opacity: targetOpacity,
                        scale: newRelIndex === 0 ? 1 : 0.9,
                        duration: 0.8,
                        ease: "power2.inOut"
                    }, 0);
                }
            }

            if (rightCirclesRef.current[i] && rightPathRef.current) {
                const oldPos = getRightPosition(oldRelIndex);
                const newPos = getRightPosition(newRelIndex);
                const targetOpacity = getOpacity(newRelIndex);

                if (isRightTeleport) {
                    gsap.set(rightCirclesRef.current[i], {
                        motionPath: {
                            path: rightPathRef.current,
                            align: rightPathRef.current,
                            alignOrigin: [0.5, 0.5],
                            start: newPos,
                            end: newPos
                        },
                        opacity: 0
                    });
                } else {
                    tl.to(rightCirclesRef.current[i], {
                        motionPath: {
                            path: rightPathRef.current,
                            align: rightPathRef.current,
                            alignOrigin: [0.5, 0.5],
                            start: oldPos,
                            end: newPos
                        },
                        opacity: targetOpacity,
                        scale: newRelIndex === 0 ? 1 : 0.9,
                        duration: 0.8,
                        ease: "power2.inOut"
                    }, 0);
                }
            }
        });

        tl.call(() => {
            setDisplayIndex(newIndex);
        }, [], 0.4);

    }, [isAnimating, currentIndex]);

    const goToNext = useCallback(() => {
        const newIndex = (currentIndex + 1) % products.length;
        animateToSlide(newIndex, 'next');
    }, [currentIndex, animateToSlide]);

    const goToPrev = useCallback(() => {
        const newIndex = (currentIndex - 1 + products.length) % products.length;
        animateToSlide(newIndex, 'prev');
    }, [currentIndex, animateToSlide]);

    useEffect(() => {
        autoPlayRef.current = setInterval(() => { if (!isAnimating) goToNext(); }, 5000);
        return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
    }, [goToNext, isAnimating]);

    const handleManualNav = useCallback((direction: 'next' | 'prev') => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        if (direction === 'next') goToNext(); else goToPrev();
    }, [goToNext, goToPrev]);

    const displayProduct = products[displayIndex];

    return (
        <section
            id="essentials"
            ref={sectionRef}
            className="relative h-screen w-full bg-[#0a1a10] flex items-center justify-center overflow-hidden"
            aria-label="Featured Products Showcase"
        >
            <div className="absolute top-8 left-8 z-50 pointer-events-none">
                <span className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-tight opacity-90 mix-blend-overlay">Skin Essentials</span>
            </div>
            <div className="w-[calc(100%-32px)] h-[96vh] bg-[#034B38] rounded-3xl md:rounded-[1rem] lg:rounded-[1.2rem]  relative overflow-hidden flex flex-col items-center justify-between py-8">

                {/* Visual Content Container */}
                <div className="flex-1 w-full flex items-center justify-center gap-8 lg:gap-24 relative">

                    {/* LEFT ORBIT */}
                    <div className="hidden lg:block relative h-[320px] w-[140px] flex-shrink-0 order-1 lg:order-1">
                        <svg className="absolute w-full h-full" viewBox="0 0 140 320" fill="none">
                            <defs>
                                <linearGradient id="leftOrbitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                                    <stop offset="50%" stopColor="white" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            <path ref={leftPathRef} d="M 120 20 Q 10 160 120 300" stroke="url(#leftOrbitGrad)" strokeWidth="2" fill="none" />
                        </svg>

                        {products.map((p, i) => (
                            <div
                                key={`left-circle-${i}`}
                                ref={el => { leftCirclesRef.current[i] = el; }}
                                className="absolute w-10 h-10 md:w-12 md:h-12 flex items-center justify-center origin-center"
                                style={{ opacity: 0 }}
                            >
                                {/* Circle Visual */}
                                <div className="absolute inset-0 rounded-full border border-white/60 overflow-hidden bg-black/20 shadow-lg" >
                                    <Image src={p.featureImages[0]} alt={p.features[0]} fill className="object-cover opacity-90" />
                                </div>
                                {/* Text Label (Left/Outer) */}
                                <span className="absolute right-full mr-4 text-white text-base md:text-lg font-light whitespace-nowrap text-right">
                                    {p.features[0]}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="relative z-20 w-56 h-[22rem] md:w-72 md:h-[28rem] lg:w-80 lg:h-[32rem] flex-shrink-0 order-2 lg:order-2">
                        {products.map((product, i) => (
                            <div
                                key={product.id}
                                ref={el => { imagesRef.current[i] = el; }}
                                className="absolute inset-0"
                                style={{ opacity: i === currentIndex ? 1 : 0, zIndex: i === currentIndex ? 1 : 0 }}
                            >
                                <Image src={product.image} alt={`Zenvyra Naturals ${product.title} - Organic Face Cream`} fill className="object-contain" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 500px" priority={i < 2} quality={90} />
                            </div>
                        ))}
                    </div>

                    {/* RIGHT ORBIT */}
                    <div className="hidden lg:block relative h-[320px] w-[140px] flex-shrink-0 order-3 lg:order-3">
                        <svg className="absolute w-full h-full" viewBox="0 0 140 320" fill="none">
                            <defs>
                                <linearGradient id="rightOrbitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                                    <stop offset="50%" stopColor="white" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            <path ref={rightPathRef} d="M 20 300 Q 130 160 20 20" stroke="url(#rightOrbitGrad)" strokeWidth="2" fill="none" />
                        </svg>

                        {products.map((p, i) => (
                            <div
                                key={`right-circle-${i}`}
                                ref={el => { rightCirclesRef.current[i] = el; }}
                                className="absolute w-10 h-10 md:w-12 md:h-12 flex items-center justify-center origin-center"
                                style={{ opacity: 0 }}
                            >
                                {/* Circle Visual */}
                                <div className="absolute inset-0 rounded-full border border-white/60 overflow-hidden bg-black/20 shadow-lg" >
                                    <Image src={p.featureImages[1]} alt={p.features[1]} fill className="object-cover opacity-90" />
                                </div>
                                {/* Text Label (Right/Outer) */}
                                <span className="absolute left-full ml-4 text-white text-base md:text-lg font-light whitespace-nowrap text-left">
                                    {p.features[1]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Description */}
                <div className="w-full px-4 shrink-0 z-30">
                    <div className="flex items-center gap-4 max-w-xl mx-auto">
                        <button onClick={() => handleManualNav('prev')} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                        <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center justify-center text-center">
                            <h3 className="text-white text-xl md:text-2xl font-medium">{displayProduct.title}</h3>
                        </div>
                        <button onClick={() => handleManualNav('next')} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                        {products.map((_, i) => (
                            <button key={i} onClick={() => !isAnimating && animateToSlide(i, i > currentIndex ? 'next' : 'prev')} className={`h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white w-6' : 'bg-white/40 w-2'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
