"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = ["About Us", "Services", "Use Cases", "Pricing"];

const SERVICES = [
    { label: "Brand Strategy", href: "/services/brand-strategy" },
    { label: "Content Marketing", href: "/services/content-marketing" },
    { label: "Demand Generation", href: "/services/demand-generation" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Email Marketing", href: "/services/email-marketing" },
    { label: "Lead Generation", href: "/services/lead-generation" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const scrollToContact = () => {
        const el = document.getElementById('contact');
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
        else { window.location.href = '/contact'; }
    };

    return (
        <>
            <style>{`
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

                .contact-btn:hover { background: #4361e3 !important; transform: translateY(-1px); }
                .mobile-link:hover { background: #f5f0e8; color: #5776FB; }

                .services-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    min-width: 200px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.10);
                    padding: 6px;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.15s, visibility 0.15s;
                    z-index: 60;
                }
                .services-trigger:hover .services-dropdown,
                .services-dropdown:hover {
                    opacity: 1;
                    visibility: visible;
                }
                .services-dropdown a:hover {
                    background: #f5f0e8;
                    color: #5776FB;
                }
            `}</style>

            <div
                className="sticky top-0 z-50 bg-[#f5f0e8]"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
                <nav className="nav-inner px-4 sm:px-6 lg:px-10 py-4 sm:py-4.5 lg:py-4.5">
                    <Link href="/" className="nav-logo-link">
                        <Image
                            src="/logo.png"
                            alt="Social Manch"
                            width={280}
                            height={280}
                            className="w-auto h-[32px] sm:h-[36px] lg:h-[40px] object-contain block"
                            priority
                        />
                    </Link>
                    <div className="nav-logo-spacer pointer-events-none select-none" aria-hidden="true">
                        <span className="block w-[100px] sm:w-[130px] lg:w-[160px] h-px" aria-hidden="true" />
                    </div>
                    <ul className="nav-center hidden lg:flex items-center gap-5 xl:gap-8 list-none m-0 p-0">
                        {NAV_LINKS.map((link) => {
                            if (link === "Services") {
                                return (
                                    <li key={link} className="services-trigger relative">
                                        <button
                                            className="text-[15px] font-medium text-[#3a3a3a] no-underline hover:text-[#5776FB] transition-colors whitespace-nowrap bg-transparent border-none cursor-pointer flex items-center gap-1"
                                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                                            onMouseEnter={() => setServicesOpen(true)}
                                            onMouseLeave={() => setServicesOpen(false)}
                                        >
                                            Services
                                            <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <div
                                            className="services-dropdown"
                                            onMouseEnter={() => setServicesOpen(true)}
                                            onMouseLeave={() => setServicesOpen(false)}
                                        >
                                            {SERVICES.map((s) => (
                                                <a
                                                    key={s.href}
                                                    href={s.href}
                                                    className="block text-sm font-medium text-[#3a3a3a] no-underline px-4 py-2.5 rounded-xl transition-colors"
                                                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                                                >
                                                    {s.label}
                                                </a>
                                            ))}
                                        </div>
                                    </li>
                                );
                            }
                            return (
                                <li key={link}>
                                    <a
                                        href={link === "About Us" ? "/about-us" : link === "Use Cases" ? "/usecases" : link === "Pricing" ? "/pricing" : "#"}
                                        className="text-[15px] font-medium text-[#3a3a3a] no-underline hover:text-[#5776FB] transition-colors whitespace-nowrap"
                                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                                    >
                                        {link}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="nav-right">
                        <button
                            onClick={scrollToContact}
                            className="contact-btn hidden sm:flex items-center text-sm md:text-[15px] font-semibold text-white bg-[#5776FB] border-none cursor-pointer px-4 md:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 whitespace-nowrap"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                        >
                            Get Started
                        </button>
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
                {menuOpen && (
                    <div
                        className="lg:hidden flex flex-col gap-0.5 bg-white rounded-2xl mx-3 mb-2 px-2 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                        {NAV_LINKS.map((link) => {
                            if (link === "Services") {
                                return (
                                    <div key={link}>
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="mobile-link text-sm sm:text-base font-medium text-[#1a1a1a] no-underline px-4 py-2.5 rounded-xl transition-colors w-full flex items-center justify-between bg-transparent border-none cursor-pointer"
                                        >
                                            Services
                                            <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        {servicesOpen && (
                                            <div className="flex flex-col pl-4 gap-0.5 mt-0.5">
                                                {SERVICES.map((s) => (
                                                    <a
                                                        key={s.href}
                                                        href={s.href}
                                                        onClick={() => setMenuOpen(false)}
                                                        className="mobile-link text-sm font-medium text-[#3a3a3a] no-underline px-4 py-2 rounded-xl transition-colors"
                                                    >
                                                        {s.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            return (
                                <a
                                    key={link}
                                    href={link === "About Us" ? "/about-us" : link === "Use Cases" ? "/usecases" : link === "Pricing" ? "/pricing" : "#"}
                                    onClick={() => setMenuOpen(false)}
                                    className="mobile-link text-sm sm:text-base font-medium text-[#1a1a1a] no-underline px-4 py-2.5 rounded-xl transition-colors"
                                >
                                    {link}
                                </a>
                            );
                        })}
                        <div className="mt-3 px-2 sm:hidden">
                            <button
                                className="w-full text-[15px] font-semibold text-white bg-[#5776FB] border-none cursor-pointer py-2.5 rounded-xl hover:bg-[#4361e3] transition-colors"
                                onClick={() => { setMenuOpen(false); scrollToContact(); }}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
