"use client";

import { useState } from "react";
import Image from "next/image";

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
            <style>{`
                /* ── Marquee ── */
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

                .header-root {
                    max-width: 100vw;
                    overflow-x: hidden;
                }

                /* ── 3-column navbar grid: logo | links | actions ── */
                .nav-inner {
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    align-items: center;
                    width: 100%;
                    position: relative;
                }
                .nav-logo-spacer { grid-column: 1; justify-self: start; }
                .nav-center      { grid-column: 2; }
                .nav-right       { grid-column: 3; justify-self: end; display: flex; align-items: center; gap: 8px; }

                /* ── Logo floats above the flow ── */
                .nav-logo-link {
                    position: absolute;
                    top: 50%;
                    left: 0px;
                    transform: translateY(-50%);
                    z-index: 10;
                    line-height: 0;
                }
                @media (min-width: 640px)  { .nav-logo-link { left: 16px; } }
                @media (min-width: 1024px) { .nav-logo-link { left: 40px; } }

                /* ── Hover states ── */
                .contact-btn:hover { background: #4361e3 !important; transform: translateY(-1px); }
                .mobile-link:hover { background: #f5f0e8; color: #5776FB; }

                /* ── Gallery card sizes ── */
                .gallery-item-tall  { width: 100px; height: 140px; }
                .gallery-item-short { width: 85px;  height: 115px; }
                @media (min-width: 375px) {
                    .gallery-item-tall  { width: 110px; height: 155px; }
                    .gallery-item-short { width: 95px;  height: 130px; }
                }
                @media (min-width: 480px) {
                    .gallery-item-tall  { width: 125px; height: 175px; }
                    .gallery-item-short { width: 105px; height: 145px; }
                }
                @media (min-width: 640px) {
                    .gallery-item-tall  { width: 140px; height: 195px; }
                    .gallery-item-short { width: 115px; height: 160px; }
                }
                @media (min-width: 768px) {
                    .gallery-item-tall  { width: 155px; height: 215px; }
                    .gallery-item-short { width: 125px; height: 175px; }
                }
                @media (min-width: 1024px) {
                    .gallery-item-tall  { width: 170px; height: 240px; }
                    .gallery-item-short { width: 140px; height: 190px; }
                }

                /* ── Gallery labels ── */
                .gallery-label { font-size: 9px; padding: 16px 8px 8px; }
                @media (min-width: 480px)  { .gallery-label { font-size: 10px; padding: 20px 10px 10px; } }
                @media (min-width: 768px)  { .gallery-label { font-size: 11px; padding: 24px 10px 10px; } }
                @media (min-width: 1024px) { .gallery-label { font-size: 11px; padding: 28px 10px 10px; } }
            `}</style>

            <div
                className="header-root sticky top-0 z-0 bg-[#f5f0e8]"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >

                {/* ══════════════════════════
                    Navbar
                ══════════════════════════ */}
                <nav className="nav-inner px-4 sm:px-6 lg:px-10 py-3 sm:py-3.5 lg:py-4">

                    {/* Logo — absolutely positioned, never affects nav height */}
                    <a href="/" className="nav-logo-link">
                        <Image
                            src="/logo.png"
                            alt="Social Manch"
                            width={280}
                            height={280}
                            className="w-auto h-[32px] sm:h-[36px] lg:h-[40px] object-contain block"
                            priority
                        />
                    </a>

                    {/* Invisible spacer reserves the left column width so nav links stay centred */}
                    <div className="nav-logo-spacer pointer-events-none select-none" aria-hidden="true">
                        <span className="block w-[100px] sm:w-[130px] lg:w-[160px] h-px" />
                    </div>

                    {/* Desktop nav links — lg and up */}
                    <ul className="nav-center hidden lg:flex items-center gap-5 xl:gap-8 list-none m-0 p-0">
                        {NAV_LINKS.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-[15px] font-medium text-[#3a3a3a] no-underline hover:text-[#5776FB] transition-colors whitespace-nowrap"
                                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right side: Contact button + hamburger */}
                    <div className="nav-right">
                        {/* Contact button — sm and above */}
                        <button
                            className="contact-btn hidden sm:flex items-center text-sm md:text-[15px] font-semibold text-white bg-[#5776FB] border-none cursor-pointer px-4 md:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 whitespace-nowrap"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                        >
                            Contact
                        </button>

                        {/* Hamburger — below lg */}
                        <button
                            className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border-none cursor-pointer p-1 rounded-lg hover:bg-black/5 transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <span
                                className="block h-0.5 w-5 bg-[#1a1a1a] rounded origin-center transition-all duration-200"
                                style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }}
                            />
                            <span
                                className="block h-0.5 w-4 bg-[#1a1a1a] rounded transition-all duration-200"
                                style={{ opacity: menuOpen ? 0 : 1 }}
                            />
                            <span
                                className="block h-0.5 w-5 bg-[#1a1a1a] rounded origin-center transition-all duration-200"
                                style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }}
                            />
                        </button>
                    </div>
                </nav>

                {/* Mobile / tablet dropdown */}
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
                                className="mobile-link text-sm sm:text-base font-medium text-[#1a1a1a] no-underline px-4 py-2.5 rounded-xl transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                        {/* Contact CTA — xs only (sm+ has the inline button) */}
                        <div className="mt-3 px-2 sm:hidden">
                            <button
                                className="w-full text-[15px] font-semibold text-white bg-[#5776FB] border-none cursor-pointer py-2.5 rounded-xl hover:bg-[#4361e3] transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}

                {/* ══════════════════════════
                    Hero
                ══════════════════════════ */}
                <section className="relative text-center px-4 sm:px-6 pt-6 sm:pt-8 lg:pt-12">

                    {/* Left slash annotation — desktop only */}
                    <div
                        className="hidden min-[900px]:block pointer-events-none absolute left-[6%] lg:left-[9%] top-32 lg:top-40"
                        style={{
                            fontFamily: "var(--font-caveat), cursive",
                            fontSize: "clamp(32px, 4vw, 40px)",
                            color: "#8EDA59",
                            transform: "rotate(-15deg)",
                        }}
                    >
                        /
                    </div>

                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-1.5 bg-white border-[1.5px] border-[#FAD54B] text-[#d6aa1a] font-semibold rounded-full leading-snug mb-2 sm:mb-5
                                   px-3 sm:px-5 py-1 sm:py-1.5
                                   text-[10px] sm:text-[13.5px]"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                        <span className="shrink-0 text-[9px] sm:text-[10px]">✦</span>
                        <span className="hidden sm:inline">Get the Social Media Attention your brand deserves!</span>
                        <span className="sm:hidden">Get Attention your brand deserves!</span>
                    </div>

                    {/* Headline */}
                    <h1
                        className="font-normal leading-[1.08] text-[#1a1a1a] tracking-tight mx-auto mb-4 sm:mb-4
                                   text-[38px] sm:text-[48px] md:text-[58px] lg:text-[70px] xl:text-[80px]"
                        style={{
                            fontFamily: "var(--font-instrument-serif), serif",
                            maxWidth: "min(860px, 95%)",
                        }}
                    >
                        Strategy-Led Marketing
                    </h1>

                    {/* Body copy — left-aligned on mobile, centred on sm+ */}
                    <p
                        className="text-[#5a5a5a] mx-auto mb-4 sm:mb-5
                                   text-[13px] sm:text-[13px] md:text-[13px]
                                   leading-[1.65] sm:leading-[1.75]
                                   text-left sm:text-center"
                        style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            maxWidth: "min(860px, 92%)",
                        }}
                    >
                        Social Manch is a strategy-led marketing partner for growth-focused businesses.
                        We don&apos;t just execute campaigns — we build marketing systems that drive pipeline
                        and revenue. From brand positioning to demand generation, we work closely with
                        leadership teams to create structured, scalable growth engines.
                    </p>

                    {/* Right "Grow your pipeline" annotation */}
                    <div
                        className="hidden min-[900px]:block pointer-events-none absolute top-[80px] lg:top-[100px] text-center leading-[1.3]"
                        style={{
                            fontFamily: "var(--font-caveat), cursive",
                            right: "clamp(2%, 6%, 8%)",
                            fontSize: "clamp(16px, 1.6vw, 20px)",
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
                <div className="gallery-wrapper w-full overflow-hidden mt-3 sm:mt-7 lg:mt-10">
                    <div className="gallery-track flex gap-2 sm:gap-3 w-max items-end px-1.5 pb-1">
                        {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
                            <div
                                key={i}
                                className={`relative flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.12)] ${img.height === "tall" ? "gallery-item-tall" : "gallery-item-short"
                                    }`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    decoding="async"
                                    className="w-full h-full object-cover block"
                                />
                                <div
                                    className="gallery-label absolute inset-x-0 bottom-0 text-white font-semibold tracking-[0.3px] leading-[1.3] rounded-b-2xl"
                                    style={{
                                        fontFamily: "var(--font-dm-sans), sans-serif",
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
                <div className="flex items-center justify-center px-4 py-3 sm:py-7 lg:py-10">

                    {/* Handwritten "It's free" */}
                    <div
                        className="flex flex-col items-end mr-3 sm:mr-4 leading-[1.3] text-[#FE9254] text-lg sm:text-xl"
                        style={{ fontFamily: "var(--font-caveat), cursive" }}
                    >
                        <span>It&apos;s free</span>
                        <svg viewBox="0 0 48 28" fill="none" className="w-10 sm:w-11 h-auto">
                            <path d="M4 6 Q24 2 42 18" stroke="#FE9254" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                            <path d="M42 18 L34 16 M42 18 L40 26" stroke="#FE9254" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                        </svg>
                    </div>

                    {/* CTA Button */}
                    <button
                        className="font-semibold text-white bg-[#8651F9] border-none cursor-pointer rounded-full
                                   shadow-[0_4px_20px_rgba(134,81,249,0.35)]
                                   hover:bg-[#723bed] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(134,81,249,0.45)]
                                   active:scale-95 transition-all
                                   text-sm sm:text-base
                                   px-6 sm:px-8 lg:px-9
                                   py-2.5 sm:py-3.5 lg:py-4"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                        Get Started
                    </button>
                </div>

            </div>
        </>
    );
}