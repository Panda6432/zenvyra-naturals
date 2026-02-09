"use client";

import { useRef, useState, useEffect } from "react";


const productCards = [
    {
        id: "green",
        title: "Herbal Skin Repair",
        bestFor: "Sensitive & Irritated Skin",
        tagline: "Calm. Soothe. Heal.",
        ingredients: ["Aloe Vera", "Neem", "Turmeric"],
        accentColor: "#4ade80",
    },
    {
        id: "yellow",
        title: "Radiance Glow",
        bestFor: "Dull & Tired Skin",
        tagline: "Brighten. Revive. Glow.",
        ingredients: ["Vitamin C", "Saffron", "Licorice"],
        accentColor: "#fbbf24",
    },
    {
        id: "red",
        title: "Age Repair",
        bestFor: "Mature & Aging Skin",
        tagline: "Renew. Firm. Restore.",
        ingredients: ["Rosehip", "Retinol", "Collagen"],
        accentColor: "#f87171",
    },
    {
        id: "black",
        title: "Charcoal Detox",
        bestFor: "Oily & Acne-Prone Skin",
        tagline: "Purify. Cleanse. Balance.",
        ingredients: ["Charcoal", "Tea Tree", "Kaolin"],
        accentColor: "#e5e5e5",
    },
    {
        id: "purple",
        title: "Overnight Renewal",
        bestFor: "Dry & Dehydrated Skin",
        tagline: "Hydrate. Repair. Dream.",
        ingredients: ["Lavender", "Hyaluronic", "Shea Butter"],
        accentColor: "#c084fc",
    }
];

export default function HomeSectionCards() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
            setScrollProgress(progress);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className="relative w-full min-h-screen bg-[#0a1a10] py-20 md:py-32 overflow-hidden"
            aria-label="Find Your Perfect Cream"
        >
            <div className="relative z-10 pl-4 pr-6 md:pl-4 md:pr-12 mb-16 md:mb-24">
                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light max-w-3xl leading-relaxed italic" style={{ fontFamily: "'Italiana', serif" }}>
                    Every skin tells a unique story. Discover which Zenvyra cream is crafted for your skin's needs.
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative z-10 flex gap-6 md:gap-8 pl-4 pr-4 overflow-x-auto pb-8 scrollbar-hide"
                style={{ scrollSnapType: 'x mandatory', scrollPaddingLeft: '16px' }}
            >
                {productCards.map((product, index) => (
                    <div
                        key={product.id}
                        className="group relative flex-shrink-0 w-[85vw] md:w-[42vw] lg:w-[28vw] cursor-pointer"
                        style={{ scrollSnapAlign: 'start' }}
                        onMouseEnter={() => setActiveCard(index)}
                        onMouseLeave={() => setActiveCard(null)}
                    >
                        {/* Card */}
                        <div
                            className="relative h-[70vh] md:h-[65vh] rounded-[2rem] p-8 md:p-10 transition-colors duration-500 ease-out overflow-hidden flex flex-col justify-between"
                            style={{
                                background: activeCard === index
                                    ? `linear-gradient(160deg, ${product.accentColor}15 0%, transparent 50%), rgba(0,0,0,0.4)`
                                    : 'rgba(0,0,0,0.3)',
                                backdropFilter: 'blur(10px)',
                                border: activeCard === index
                                    ? `1px solid ${product.accentColor}50`
                                    : '1px solid rgba(255,255,255,0.1)',
                            }}
                        >
                            <div className="relative z-10">
                                <div
                                    className="h-1 rounded-full mb-6 transition-all duration-500"
                                    style={{
                                        backgroundColor: product.accentColor,
                                        width: activeCard === index ? '80px' : '48px'
                                    }}
                                />

                                <p
                                    className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 transition-colors duration-500"
                                    style={{ color: activeCard === index ? product.accentColor : 'rgba(255,255,255,0.5)' }}
                                >
                                    Best for
                                </p>

                                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 leading-tight">
                                    {product.bestFor}
                                </h3>
                            </div>

                            <div className="relative z-10 my-auto py-6">
                                <h4
                                    className="text-3xl md:text-4xl lg:text-5xl font-normal leading-none transition-colors duration-500"
                                    style={{
                                        color: activeCard === index ? product.accentColor : 'rgba(255,255,255,0.9)',
                                        fontFamily: "'Italiana', serif"
                                    }}
                                >
                                    {product.title}
                                </h4>
                                <p className="mt-3 text-base md:text-lg text-white/50 font-light tracking-wide">
                                    {product.tagline}
                                </p>
                            </div>

                            <div className="relative z-10">
                                <div className="flex flex-wrap gap-2">
                                    {product.ingredients.map((ingredient, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 rounded-full text-xs md:text-sm font-light transition-all duration-500"
                                            style={{
                                                backgroundColor: activeCard === index ? `${product.accentColor}20` : 'rgba(255,255,255,0.05)',
                                                color: activeCard === index ? product.accentColor : 'rgba(255,255,255,0.6)',
                                                border: `1px solid ${activeCard === index ? `${product.accentColor}40` : 'rgba(255,255,255,0.1)'}`
                                            }}
                                        >
                                            {ingredient}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="absolute bottom-6 right-6 w-12 h-12 transition-all duration-700 pointer-events-none"
                                style={{
                                    borderRight: `2px solid ${activeCard === index ? product.accentColor : 'rgba(255,255,255,0.1)'}`,
                                    borderBottom: `2px solid ${activeCard === index ? product.accentColor : 'rgba(255,255,255,0.1)'}`,
                                    opacity: activeCard === index ? 1 : 0.3
                                }}
                            />
                        </div>
                    </div>
                ))}

                <div className="flex-shrink-0 w-4" />
            </div>

            <div className="relative z-10 mt-10 flex justify-center px-4">
                <div className="w-32 relative">
                    <div className="w-full h-[2px] bg-white/10 rounded-full">
                        <div
                            className="absolute top-0 w-4 h-[2px] bg-[#CBA409] rounded-full transition-all duration-150 ease-out"
                            style={{ left: `${scrollProgress}%`, transform: 'translateX(-50%)' }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
