"use client";

import { useEffect, useRef, useState } from "react";



const stats = [
    {
        label: "Complete Customer Satisfaction",
        value: "95%",
        accent: "#F59E0B",
    },
    {
        label: "Innovation and Valuable Insight",
        value: "10+",
        accent: "#6366F1",
    },
    {
        label: "Years of Proven Excellence",
        value: "10+",
        accent: "#10B981",
    },
    {
        label: "Users Worldwide, Providing Them With",
        value: "50m",
        accent: "#6366F1",
    },
];

export default function ConsultingSection() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`

        .cs-root {
          background: #F0ECE4;
          font-family: var(--font-dm-sans), sans-serif;
          color: #1a1a1a;
        }



        /* ── Main Section ── */
        .cs-main {
          padding: 72px 48px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .cs-main { grid-template-columns: 1fr; gap: 40px; padding: 48px 24px; }

        }

        /* ── Left Copy ── */
        .cs-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6B6B6B;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cs-eyebrow::before {
          content: '';
          width: 20px;
          height: 1px;
          background: #6B6B6B;
          display: inline-block;
        }

        .cs-headline {
          font-family: var(--font-instrument-serif), serif;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.15;
          font-weight: 400;
          color: #111;
          margin: 0 0 28px;
        }

        .cs-headline em {
          font-style: italic;
          color: #6366F1;
        }

        .cs-body {
          font-size: 15px;
          line-height: 1.7;
          color: #555;
          font-weight: 300;
          max-width: 380px;
          margin-bottom: 36px;
        }

        .cs-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #6366F1;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
          letter-spacing: 0.01em;
        }
        .cs-cta:hover { background: #4F46E5; transform: translateY(-1px); }
        .cs-cta-arrow {
          width: 18px;
          height: 18px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        /* ── Annotation ── */
        .cs-annotation {
          font-family: var(--font-instrument-serif), serif;
          font-style: italic;
          font-size: 13px;
          color: #10B981;
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cs-annotation svg { opacity: 0.7; }

        /* ── Stats Grid ── */
        .cs-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .cs-stat-card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 24px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: transform 0.2s, box-shadow 0.2s;
          opacity: 0;
          transform: translateY(16px);
        }
        .cs-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .cs-stat-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cs-stat-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .cs-stat-value {
          font-family: var(--font-instrument-serif), serif;
          font-size: 42px;
          font-weight: 400;
          line-height: 1;
          color: #111;
        }

        .cs-stat-bar {
          height: 3px;
          border-radius: 2px;
          margin-top: 16px;
          width: 32px;
        }

        /* Stagger animation delays */
        .cs-stat-card:nth-child(1) { transition-delay: 0.05s; }
        .cs-stat-card:nth-child(2) { transition-delay: 0.12s; }
        .cs-stat-card:nth-child(3) { transition-delay: 0.19s; }
        .cs-stat-card:nth-child(4) { transition-delay: 0.26s; }

        .cs-stat-card,
        .cs-stat-card.visible {
          transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.2s, border-color 0.2s;
        }
      `}</style>

            <section className="cs-root relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]" ref={sectionRef}>
                {/* Main content */}
                <div className="cs-main">
                    {/* Left: copy */}
                    <div>
                        <p className="cs-eyebrow">Pipely Consulting</p>
                        <h2 className="cs-headline">
                            With over a decade of experience, we deliver{" "}
                            <em>tailored solutions</em> that empower your business to grow.
                        </h2>
                        <p className="cs-body">
                            We partner with growth-focused businesses to build systems that
                            drive real results — from brand positioning to demand generation,
                            we work alongside your leadership to create structured, scalable
                            growth engines.
                        </p>
                        <a href="#" className="cs-cta">
                            Get Started
                            <span className="cs-cta-arrow">→</span>
                        </a>
                        <div className="cs-annotation">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path
                                    d="M2 4 Q7 1 12 6 Q10 10 6 12"
                                    stroke="#10B981"
                                    strokeWidth="1.5"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M5 11 L6 13 L8 11"
                                    stroke="#10B981"
                                    strokeWidth="1.5"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            It&apos;s free to start
                        </div>
                    </div>

                    {/* Right: stats grid */}
                    <div className="cs-stats-grid">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`cs-stat-card${visible ? " visible" : ""}`}
                            >
                                <p className="cs-stat-label">{stat.label}</p>
                                <p className="cs-stat-value" style={{ color: stat.accent === "#F59E0B" ? "#111" : "#111" }}>
                                    {stat.value}
                                </p>
                                <div
                                    className="cs-stat-bar"
                                    style={{ background: stat.accent }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}