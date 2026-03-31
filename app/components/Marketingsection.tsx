"use client";

import { useState, useEffect } from "react";

/* ─── Types ─── */
interface Service {
    id: number;
    title: string;
    emoji: string;
    accent: string;
    desc: string;
}

/* ─── Data ─── */
const SERVICES: Service[] = [
    {
        id: 1,
        title: "Brand Marketing",
        emoji: "🎯",
        accent: "#e8a020",
        desc: "Build lasting brand identity that resonates and stands out in crowded markets. We craft narratives, visual systems, and positioning that make your brand unforgettable.",
    },
    {
        id: 2,
        title: "Content Marketing",
        emoji: "✍️",
        accent: "#5b8dee",
        desc: "Create compelling, value-driven content that engages audiences and boosts conversions. From blog posts to video scripts, every piece is built with purpose.",
    },
    {
        id: 3,
        title: "Demand Generation",
        emoji: "🔥",
        accent: "#f05a6e",
        desc: "Ignite interest and fill your pipeline with high-quality prospects ready to buy. We build full-funnel demand programs that consistently deliver.",
    },
    {
        id: 4,
        title: "Digital Marketing",
        emoji: "📈",
        accent: "#38c172",
        desc: "Harness SEO, PPC, social, and more for measurable online dominance. Data-driven campaigns tuned for maximum reach and conversion.",
    },
    {
        id: 5,
        title: "Email Marketing",
        emoji: "📧",
        accent: "#9f7aea",
        desc: "Craft personalized campaigns that nurture leads and skyrocket open rates. Automation, segmentation, and A/B testing built into every send.",
    },
    {
        id: 6,
        title: "Event Marketing",
        emoji: "🎤",
        accent: "#f6993f",
        desc: "Design unforgettable virtual and in-person experiences that spark connections. From webinars to conferences, we handle every touchpoint.",
    },
    {
        id: 7,
        title: "Lead Generation",
        emoji: "🧲",
        accent: "#4dc0b5",
        desc: "Deliver targeted strategies to capture and qualify leads efficiently. We build lead funnels that attract the right people at the right time.",
    },
    {
        id: 8,
        title: "Marketing Consulting",
        emoji: "💡",
        accent: "#e8a020",
        desc: "Get expert guidance to align your marketing efforts with core business goals. Strategic audits, roadmaps, and ongoing advisory support.",
    },
    {
        id: 9,
        title: "Marketing Strategy",
        emoji: "🗺️",
        accent: "#5b8dee",
        desc: "Develop data-backed roadmaps for sustainable growth. We turn complex market realities into clear, executable plans your team can run with.",
    },
    {
        id: 10,
        title: "Public Relations",
        emoji: "📣",
        accent: "#f05a6e",
        desc: "Amplify your voice through media relations, crisis management, and thought leadership. Build trust at scale with the audiences that matter most.",
    },
];

const COL1: Service[] = SERVICES.slice(0, 5);
const COL2: Service[] = SERVICES.slice(5, 10);

/* ─── ServiceCard ─── */
interface ServiceCardProps {
    service: Service;
    onClick: (service: Service) => void;
}

function ServiceCard({ service, onClick }: ServiceCardProps) {
    return (
        <button
            onClick={() => onClick(service)}
            style={{
                width: "100%",
                background: "#fff",
                border: "1.5px solid #ece8df",
                borderRadius: 20,
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                cursor: "pointer",
                textAlign: "left",
                transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                flexShrink: 0,
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.10)";
                e.currentTarget.style.borderColor = service.accent;
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                e.currentTarget.style.borderColor = "#ece8df";
            }}
        >
            <span
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: service.accent + "20",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                }}
            >
                {service.emoji}
            </span>
            <div>
                <div
                    style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#1a1a1a",
                        lineHeight: 1.3,
                    }}
                >
                    {service.title}
                </div>
                <div
                    style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 400,
                        fontSize: 12,
                        color: "#888",
                        marginTop: 2,
                        lineHeight: 1.4,
                    }}
                >
                    Click to learn more →
                </div>
            </div>
        </button>
    );
}

/* ─── ServiceCarousel ─── */
interface ServiceCarouselProps {
    items: Service[];
    direction?: "up" | "down";
    onCardClick: (service: Service) => void;
}

function ServiceCarousel({ items, direction = "up", onCardClick }: ServiceCarouselProps) {
    const doubled: Service[] = [...items, ...items];
    const animName = direction === "up" ? "scrollUp" : "scrollDown";

    return (
        <div
            style={{
                overflow: "hidden",
                height: 420,
                position: "relative",
                flex: 1,
            }}
            className="carousel-wrapper"
        >
            {/* Fade top */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 60,
                    background: "linear-gradient(to bottom, #f5f0e8, transparent)",
                    zIndex: 2,
                    pointerEvents: "none",
                }}
            />
            {/* Fade bottom */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 60,
                    background: "linear-gradient(to top, #f5f0e8, transparent)",
                    zIndex: 2,
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    animation: `${animName} 18s linear infinite`,
                }}
            >
                {doubled.map((svc: Service, i: number) => (
                    <ServiceCard key={`${svc.id}-${i}`} service={svc} onClick={onCardClick} />
                ))}
            </div>
        </div>
    );
}

/* ─── ServiceModal ─── */
interface ServiceModalProps {
    service: Service;
    onClose: () => void;
}

function ServiceModal({ service, onClose }: ServiceModalProps) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(6px)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                animation: "fadeIn 0.2s ease",
            }}
        >
            <div
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                style={{
                    background: "#fff",
                    borderRadius: 28,
                    padding: "40px 36px",
                    maxWidth: 460,
                    width: "100%",
                    position: "relative",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
                    animation: "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#f0ebe0",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        color: "#555",
                        transition: "background 0.15s",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
                        (e.currentTarget.style.background = "#e0d9ce")
                    }
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) =>
                        (e.currentTarget.style.background = "#f0ebe0")
                    }
                >
                    ✕
                </button>

                {/* Icon */}
                <div
                    style={{
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        background: service.accent + "20",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 26,
                        marginBottom: 20,
                    }}
                >
                    {service.emoji}
                </div>

                {/* Title */}
                <h3
                    style={{
                        fontFamily: "var(--font-instrument-serif)",
                        fontWeight: 400,
                        fontSize: 28,
                        color: "#1a1a1a",
                        marginBottom: 12,
                        lineHeight: 1.2,
                    }}
                >
                    {service.title}
                </h3>

                {/* Accent line */}
                <div
                    style={{
                        width: 40,
                        height: 3,
                        background: service.accent,
                        borderRadius: 99,
                        marginBottom: 16,
                    }}
                />

                {/* Description */}
                <p
                    style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: 15,
                        color: "#555",
                        lineHeight: 1.75,
                        marginBottom: 28,
                    }}
                >
                    {service.desc}
                </p>

                {/* CTA */}
                <button
                    style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#fff",
                        background: "#1a1a1a",
                        border: "none",
                        cursor: "pointer",
                        padding: "12px 28px",
                        borderRadius: 99,
                        transition: "all 0.15s",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.background = service.accent;
                        e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.background = "#1a1a1a";
                        e.currentTarget.style.transform = "none";
                    }}
                >
                    Get Started with {service.title}
                </button>
            </div>
        </div>
    );
}

/* ─── Stat Item ─── */
interface StatItemProps {
    val: string;
    label: string;
}

function StatItem({ val, label }: StatItemProps) {
    return (
        <div>
            <div
                style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: 28,
                    color: "#1a1a1a",
                    lineHeight: 1,
                }}
            >
                {val}
            </div>
            <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{label}</div>
        </div>
    );
}

/* ─── Blob ─── */
interface BlobProps {
    bg: string;
    size: number;
    delay: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}

function Blob({ bg, size, delay, top, bottom, left, right }: BlobProps) {
    return (
        <div
            style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                background: bg,
                opacity: 0.12,
                filter: "blur(60px)",
                top,
                bottom,
                left,
                right,
                animation: `blobFloat 10s ${delay} ease-in-out infinite`,
                pointerEvents: "none",
            }}
        />
    );
}

/* ─── MarketingSection (default export) ─── */
export default function MarketingSection() {
    const [activeService, setActiveService] = useState<Service | null>(null);

    const stats: StatItemProps[] = [
        { val: "200+", label: "Brands served" },
        { val: "10", label: "Service lines" },
        { val: "5×", label: "Avg. ROI" },
    ];

    const blobs: BlobProps[] = [
        { bg: "#e8a020", size: 280, delay: "0s", top: "-80px", left: "-60px" },
        { bg: "#5b8dee", size: 240, delay: "2s", bottom: "-80px", right: "-40px" },
        { bg: "#f05a6e", size: 160, delay: "1s", top: "20%", right: "20%" },
    ];

    return (
        <>
            <style>{`
        * { box-sizing: border-box; }

        @keyframes scrollUp {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blobFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(20px,-20px) scale(1.05); }
          66%      { transform: translate(-15px,15px) scale(0.97); }
        }

        .carousel-wrapper:hover > div {
          animation-play-state: paused !important;
        }
        .hero-text        { animation: slideUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-text-delay  { animation: slideUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-text-delay2 { animation: slideUp 0.7s 0.28s cubic-bezier(0.16,1,0.3,1) both; }

        @media (max-width: 900px) {
          .main-grid        { flex-direction: column !important; }
          .left-col         { max-width: 100% !important; text-align: center; }
          .carousels-wrap   { height: 340px !important; width: 100% !important; }
        }
        @media (max-width: 600px) {
          .section-wrap  { padding: 48px 16px !important; }
          .cta-section   { padding: 48px 20px !important; }
          .carousel-col-hide { display: none !important; }
          .carousels-wrap { height: 300px !important; }
        }
      `}</style>

            {/* ── Services Section ── */}
            <section
                className="section-wrap"
                style={{
                    background: "#f5f0e8",
                    padding: "80px 48px",
                    fontFamily: "var(--font-dm-sans)",
                    position: "relative",
                    zIndex: 1,
                    isolation: "isolate",
                    overflow: "hidden",
                }}
            >
                <div
                    className="main-grid"
                    style={{
                        display: "flex",
                        gap: 64,
                        alignItems: "center",
                        maxWidth: 1180,
                        margin: "0 auto",
                    }}
                >
                    {/* LEFT: Text */}
                    <div className="left-col" style={{ flex: "0 0 42%", maxWidth: 420 }}>
                        <div
                            className="hero-text"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                background: "#fff",
                                border: "1.5px solid #e8a020",
                                color: "#c47d10",
                                fontWeight: 600,
                                fontSize: 12,
                                padding: "6px 16px",
                                borderRadius: 99,
                                marginBottom: 20,
                                letterSpacing: "0.3px",
                            }}
                        >
                            <span style={{ fontSize: 8 }}>✦</span>
                            What We Do
                        </div>

                        <h2
                            className="hero-text-delay"
                            style={{
                                fontFamily: "var(--font-instrument-serif)",
                                fontWeight: 400,
                                fontSize: "clamp(32px, 3.5vw, 48px)",
                                color: "#1a1a1a",
                                lineHeight: 1.1,
                                marginBottom: 16,
                                letterSpacing: "-0.5px",
                            }}
                        >
                            Our Marketing
                            <br />
                            <span style={{ fontStyle: "italic", color: "#3a3a3a" }}>Services</span>
                        </h2>

                        <p
                            className="hero-text-delay2"
                            style={{ fontWeight: 600, fontSize: 16, color: "#1a1a1a", marginBottom: 12, lineHeight: 1.4 }}
                        >
                            Unlock Growth with Tailored Marketing Solutions
                        </p>

                        <p
                            className="hero-text-delay2"
                            style={{ fontSize: 14, color: "#5a5a5a", lineHeight: 1.8, marginBottom: 32 }}
                        >
                            Elevate your brand with our comprehensive suite of marketing services,
                            designed to drive results at every stage of the customer journey. From
                            strategy to execution, we specialize in proven tactics that deliver
                            measurable impact.
                        </p>

                        <div className="hero-text-delay2" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                            {stats.map((s) => (
                                <StatItem key={s.label} val={s.val} label={s.label} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Carousels */}
                    <div
                        className="carousels-wrap"
                        style={{
                            flex: 1,
                            display: "flex",
                            gap: 12,
                            height: 420,
                            overflow: "hidden",
                            background: "transparent",
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <ServiceCarousel items={COL1} direction="up" onCardClick={setActiveService} />
                        </div>
                        <div className="carousel-col-hide" style={{ flex: 1 }}>
                            <ServiceCarousel items={COL2} direction="down" onCardClick={setActiveService} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section
                className="cta-section"
                style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "#1a1a1a",
                    padding: "80px 48px",
                    textAlign: "center",
                    fontFamily: "var(--font-dm-sans)",
                }}
            >
                {blobs.map((b, i) => (
                    <Blob key={i} {...b} />
                ))}

                <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            background: "rgba(255,255,255,0.08)",
                            border: "1.5px solid rgba(255,255,255,0.15)",
                            color: "#e8a020",
                            fontWeight: 600,
                            fontSize: 12,
                            padding: "6px 16px",
                            borderRadius: 99,
                            marginBottom: 24,
                            letterSpacing: "0.3px",
                        }}
                    >
                        <span style={{ fontSize: 8 }}>✦</span>
                        Why Social Manch
                    </div>

                    <h2
                        style={{
                            fontFamily: "var(--font-instrument-serif)",
                            fontWeight: 400,
                            fontSize: "clamp(30px, 4vw, 52px)",
                            color: "#fff",
                            lineHeight: 1.1,
                            letterSpacing: "-0.5px",
                            marginBottom: 20,
                        }}
                    >
                        Why Choose Us
                    </h2>

                    <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 12 }}>
                        Whether you&apos;re a startup scaling fast or an enterprise refining your approach,
                        our expertise turns challenges into opportunities. We focus on ROI-driven results
                        tailored to your goals.
                    </p>

                    <p
                        style={{
                            fontFamily: "var(--font-instrument-serif)",
                            fontStyle: "italic",
                            fontSize: 18,
                            color: "rgba(255,255,255,0.85)",
                            marginBottom: 36,
                        }}
                    >
                        Ready to transform your marketing?
                    </p>

                    <button
                        style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 700,
                            fontSize: 15,
                            color: "#1a1a1a",
                            background: "#fff",
                            border: "none",
                            cursor: "pointer",
                            padding: "16px 40px",
                            borderRadius: 99,
                            boxShadow: "0 4px 24px rgba(232,160,32,0.3)",
                            transition: "all 0.2s",
                            letterSpacing: "0.2px",
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.currentTarget.style.background = "#e8a020";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 10px 32px rgba(232,160,32,0.45)";
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.currentTarget.style.background = "#fff";
                            e.currentTarget.style.color = "#1a1a1a";
                            e.currentTarget.style.transform = "none";
                            e.currentTarget.style.boxShadow = "0 4px 24px rgba(232,160,32,0.3)";
                        }}
                    >
                        Contact Us
                    </button>
                </div>
            </section>

            {/* ── Modal ── */}
            {activeService !== null && (
                <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
            )}
        </>
    );
}