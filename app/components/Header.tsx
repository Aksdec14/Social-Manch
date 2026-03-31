"use client";

import { useState } from "react";

const NAV_LINKS = ["Brands", "Creators", "Pricing", "Use Cases", "Contact"];

const GALLERY_IMAGES = [
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80", alt: "Brand Marketing", height: "tall", service: "Brand Marketing" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", alt: "Content Marketing", height: "short", service: "Content Marketing" },
    { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80", alt: "Demand Generation", height: "tall", service: "Demand Generation" },
    { src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80", alt: "Digital Marketing", height: "short", service: "Digital Marketing" },
    { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80", alt: "Email Marketing", height: "tall", service: "Email Marketing" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", alt: "Event Marketing", height: "short", service: "Event Marketing" },
    { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80", alt: "Lead Generation", height: "tall", service: "Lead Generation" },
    { src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80", alt: "Marketing Consulting", height: "short", service: "Marketing Consulting" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80", alt: "Marketing Strategy", height: "tall", service: "Marketing Strategy" },
    { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80", alt: "Public Relations", height: "short", service: "Public Relations" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/*
        Only keyframe animations and parent-hover-child rules cannot be
        expressed in Tailwind utility classes — everything else is Tailwind.
      */}
            <style>{`

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .gallery-track {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        .gallery-wrapper:hover .gallery-track {
          animation-play-state: paused;
        }
      `}</style>

            <div
                className="sticky top-0 z-0 min-h-screen bg-[#f5f0e8] overflow-x-hidden"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >

                {/* ══════════════════════════
            Navbar
        ══════════════════════════ */}
                <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 sm:py-5">

                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center gap-2 font-bold text-base sm:text-lg text-[#1a1a1a] no-underline shrink-0"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                        <span className="w-7 h-7 bg-[#5776FB] rounded-md flex items-center justify-center shrink-0">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </span>
                        Social Manch
                    </a>

                    {/* Desktop nav */}
                    <ul className="hidden lg:flex items-center gap-6 xl:gap-8 list-none m-0 p-0">
                        {NAV_LINKS.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-[15px] font-medium text-[#3a3a3a] no-underline hover:text-[#5776FB] transition-colors"
                                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Actions (CTA + Hamburger) */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Desktop CTA */}
                        <div className="hidden sm:flex items-center gap-2">
                            <button
                                className="text-sm sm:text-[15px] font-medium text-[#3a3a3a] bg-transparent border-none cursor-pointer px-3 sm:px-4 py-2 rounded-full hover:bg-black/5 transition-colors"
                                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                            >
                                Log in
                            </button>
                            <button
                                className="text-sm sm:text-[15px] font-semibold text-white bg-[#5776FB] border-none cursor-pointer px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-[#4361e3] hover:-translate-y-px transition-all"
                                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                            >
                                Sign up
                            </button>
                        </div>

                        {/* Hamburger */}
                        <button
                            className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border-none cursor-pointer p-1 rounded-lg hover:bg-black/5 transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <span className={`block h-0.5 w-5 bg-[#1a1a1a] rounded origin-center transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                            <span className={`block h-0.5 w-4 bg-[#1a1a1a] rounded transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-0.5 w-5 bg-[#1a1a1a] rounded origin-center transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                        </button>
                    </div>
                </nav>

                {/* Mobile dropdown */}
                {menuOpen && (
                    <div
                        className="lg:hidden flex flex-col gap-0.5 bg-white rounded-2xl mx-3 mb-2 px-2 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link}
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-base font-medium text-[#1a1a1a] no-underline px-4 py-2.5 rounded-xl hover:bg-[#f5f0e8] hover:text-[#5776FB] transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                        <div className="flex gap-2 mt-3 px-2 sm:hidden">
                            <button className="flex-1 text-[15px] font-medium text-[#1a1a1a] bg-[#f5f0e8] border-none cursor-pointer py-2.5 rounded-xl">
                                Log in
                            </button>
                            <button className="flex-1 text-[15px] font-semibold text-white bg-[#5776FB] border-none cursor-pointer py-2.5 rounded-xl hover:bg-[#4361e3]">
                                Sign up
                            </button>
                        </div>
                    </div>
                )}

                {/* ══════════════════════════
            Hero
        ══════════════════════════ */}
                <section className="relative text-center px-4 sm:px-6 pt-6 sm:pt-8 lg:pt-10">

                    {/* Left annotation — hidden below 900 px */}
                    <div
                        className="hidden min-[900px]:block pointer-events-none absolute left-[9%] top-40"
                        style={{
                            fontFamily: "var(--font-caveat), cursive",
                            fontSize: 40,
                            color: "#8EDA59",
                            transform: "rotate(-15deg)",
                        }}
                    >
                        /
                    </div>

                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-1.5 bg-white border-[1.5px] border-[#FAD54B] text-[#d6aa1a] font-semibold px-3 sm:px-5 py-1.5 rounded-full mb-5 sm:mb-6 leading-snug"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "clamp(11px, 2vw, 13.5px)" }}
                    >
                        <span className="shrink-0 text-[10px]">✦</span>
                        Get the Social Media Attention your brand deserves!
                    </div>

                    {/* Headline */}
                    <h1
                        className="font-normal leading-[1.05] text-[#1a1a1a] tracking-tight mb-4 sm:mb-5 max-w-[860px] mx-auto"
                        style={{
                            fontFamily: "var(--font-instrument-serif), serif",
                            fontSize: "clamp(32px, 6.5vw, 80px)",
                        }}
                    >
                        Strategy-Led Marketing
                    </h1>

                    {/* Body copy */}
                    <p
                        className="text-[#5a5a5a] leading-[1.75] max-w-[92%] sm:max-w-[560px] lg:max-w-[860px] mx-auto mb-3"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "clamp(13.5px, 1.8vw, 15.5px)" }}
                    >
                        Social Manch is a strategy-led marketing partner for growth-focused businesses.
                        We don&apos;t just execute campaigns — we build marketing systems that drive pipeline
                        and revenue. From brand positioning to demand generation, we work closely with
                        leadership teams to create structured, scalable growth engines.
                    </p>

                    {/* Right annotation — hidden below 900 px */}
                    <div
                        className="hidden min-[900px]:block pointer-events-none absolute top-[100px] text-center leading-[1.3]"
                        style={{
                            fontFamily: "var(--font-caveat), cursive",
                            right: "clamp(2%, 8%, 8%)",
                            fontSize: "clamp(16px, 1.8vw, 20px)",
                            color: "#1AABB6",
                            transform: "rotate(4deg)",
                        }}
                    >
                        Grow your<br />pipeline
                        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="block mx-auto mt-1">
                            <path d="M50 4 Q20 10 8 35" stroke="#1AABB6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                            <path d="M8 35 L4 26 M8 35 L17 32" stroke="#1AABB6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                        </svg>
                    </div>
                </section>

                {/* ══════════════════════════
            Scrolling Gallery
        ══════════════════════════ */}
                <div className="gallery-wrapper w-full overflow-hidden mt-8 sm:mt-10">
                    {/*
            gallery-track drives the marquee animation (defined in <style> above).
            All sizing uses Tailwind where possible; card dimensions use inline
            style with clamp() because Tailwind can't express responsive fluid sizes
            without a custom config.
          */}
                    <div className="gallery-track flex gap-3 w-max items-end px-1.5 pb-1">
                        {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
                            <div
                                key={i}
                                className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
                                style={{
                                    width: img.height === "tall"
                                        ? "clamp(110px, 13.5vw, 170px)"
                                        : "clamp(90px,  11vw,  140px)",
                                    height: img.height === "tall"
                                        ? "clamp(160px, 19vw, 240px)"
                                        : "clamp(128px, 15vw, 190px)",
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    decoding="async"
                                    className="w-full h-full object-cover block"
                                />
                                {/* Service label overlay */}
                                <div
                                    className="absolute inset-x-0 bottom-0 text-white font-semibold tracking-[0.3px] leading-[1.3] rounded-b-2xl"
                                    style={{
                                        fontFamily: "var(--font-dm-sans), sans-serif",
                                        fontSize: "clamp(9px, 0.9vw, 11px)",
                                        padding: "clamp(18px, 2.5vw, 28px) 10px 10px",
                                        background: "linear-gradient(to top, rgba(0,0,0,0.70), transparent)",
                                    }}
                                >
                                    {img.service}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ══════════════════════════
            CTA
        ══════════════════════════ */}
                <div className="flex items-center justify-center py-8 sm:py-10 px-4">

                    {/* Handwritten "It's free" annotation */}
                    <div
                        className="flex flex-col items-end mr-3 sm:mr-4 leading-[1.3] text-[#FE9254]"
                        style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "clamp(18px, 2vw, 20px)" }}
                    >
                        <span>It&apos;s free</span>
                        <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
                            <path d="M4 6 Q24 2 42 18" stroke="#FE9254" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                            <path d="M42 18 L34 16 M42 18 L40 26" stroke="#FE9254" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                        </svg>
                    </div>

                    {/* CTA Button */}
                    <button
                        className="font-semibold text-white bg-[#8651F9] border-none cursor-pointer rounded-full shadow-[0_4px_20px_rgba(134,81,249,0.35)] hover:bg-[#723bed] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(134,81,249,0.45)] active:scale-95 transition-all"
                        style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            fontSize: "clamp(14px, 2vw, 16px)",
                            padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)",
                        }}
                    >
                        Get Started
                    </button>
                </div>

            </div>
        </>
    );
}