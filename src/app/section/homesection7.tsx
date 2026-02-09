"use client";

import { useRef } from "react";

export default function HomeSection7() {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section
            id="experience"
            className="relative h-screen w-full bg-[#0a1a10] flex items-center justify-center overflow-hidden"
            aria-label="The Experience"
        >
            <div className="w-[calc(100%-32px)] h-[96vh] bg-[#034B38] rounded-3xl md:rounded-[1rem] lg:rounded-[1.2rem] relative overflow-hidden flex flex-col items-center justify-between py-8">
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        src="/zenvyra-naturals-herbal-cream-demo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="relative z-10 w-full px-8 md:px-12 mb-10 md:mb-0 pt-4">
                    <h2 className="text-6xl md:text-8xl font-normal leading-none tracking-wide text-[#f0f0f0] text-left">
                        The Experience
                    </h2>
                </div>

                <div className="relative z-10 w-full px-8 md:px-12 pb-4">
                    <p className="text-[#E8E6D9] text-xl md:text-3xl font-light leading-snug text-left max-w-3xl">
                        Witness nature transform into radiant skin through texture, touch, and glow.
                    </p>
                </div>
            </div>
        </section>
    );
}
