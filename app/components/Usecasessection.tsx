"use client";

import React from "react";

const useCases = [
    {
        icon: "🛒",
        industry: "E-commerce Brands",
        help: "Drive traffic and sales with SEO, content marketing, email campaigns, and lead generation.",
    },
    {
        icon: "💼",
        industry: "B2B SaaS Companies",
        help: "Fill sales pipelines using demand generation, LinkedIn-focused digital marketing, and marketing strategy consulting.",
    },
    {
        icon: "🚀",
        industry: "Startups Scaling Fast",
        help: "Build brand awareness through PR, event marketing, and content that establishes thought leadership.",
    },
    {
        icon: "🏢",
        industry: "Enterprise Refinement",
        help: "Optimize existing efforts with marketing consulting, email nurturing, and data-driven strategy roadmaps.",
    },
    {
        icon: "🛍️",
        industry: "Retail & Consumer Goods",
        help: "Launch campaigns combining brand marketing, social media ads, and event activations.",
    },
];

export default function UseCasesSection() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        .uc-root {
          position: relative;
          z-index: 10;
          background: #f7f6f2;
          padding: 100px 40px;
          font-family: 'DM Sans', sans-serif;
        }

        .uc-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }

        /* ── LEFT ── */
        .uc-left {
          position: sticky;
          top: 80px;
        }

        .uc-label {
          font-size: 11.5px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 16px;
        }

        .uc-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(34px, 3.5vw, 52px);
          font-weight: 400;
          line-height: 1.15;
          color: #111;
          margin: 0 0 24px;
        }

        .uc-title em {
          color: #6366F1;
          font-style: italic;
        }

        .uc-desc {
          font-size: 15px;
          line-height: 1.75;
          color: #666;
          margin: 0 0 40px;
          max-width: 360px;
        }

        .uc-divider {
          width: 40px;
          height: 2px;
          background: #6366F1;
          border-radius: 2px;
          margin-bottom: 32px;
        }

        .uc-proven {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 18px;
          padding: 28px 28px;
        }

        .uc-proven h4 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: #111;
          margin: 0 0 10px;
        }

        .uc-proven p {
          font-size: 14px;
          line-height: 1.7;
          color: #777;
          margin: 0 0 20px;
        }

        .uc-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          padding: 11px 22px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.18s, transform 0.18s;
        }

        .uc-cta:hover {
          background: #6366F1;
          transform: translateY(-1px);
        }

        /* ── RIGHT ── */
        .uc-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .uc-card {
          background: #fff;
          border: 1px solid #ebebeb;
          border-radius: 18px;
          padding: 28px 28px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
        }

        .uc-card:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
          transform: translateY(-3px);
          border-color: #d8d8ff;
        }

        .uc-icon {
          font-size: 24px;
          width: 48px;
          height: 48px;
          background: #f3f3fe;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .uc-card-body {
          flex: 1;
        }

        .uc-card-title {
          font-size: 15px;
          font-weight: 600;
          color: #111;
          margin-bottom: 6px;
        }

        .uc-card-desc {
          font-size: 14px;
          line-height: 1.65;
          color: #666;
        }

        .uc-card-arrow {
          font-size: 18px;
          color: #ccc;
          flex-shrink: 0;
          margin-top: 2px;
          transition: color 0.18s, transform 0.18s;
        }

        .uc-card:hover .uc-card-arrow {
          color: #6366F1;
          transform: translateX(3px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .uc-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .uc-left {
            position: static;
          }
          .uc-desc { max-width: 100%; }
        }

        @media (max-width: 480px) {
          .uc-root { padding: 72px 20px; }
          .uc-card { padding: 22px 20px; gap: 14px; }
        }
      `}</style>

            <section className="uc-root">
                <div className="uc-inner">

                    {/* ── LEFT ── */}
                    <div className="uc-left">
                        <p className="uc-label">Use Cases</p>
                        <h2 className="uc-title">
                            Real-World Impact <br />
                            <em>Across Industries</em>
                        </h2>
                        <div className="uc-divider" />
                        <p className="uc-desc">
                            Our marketing services power success for businesses of all sizes.
                            See how we deliver results through targeted strategies and execution.
                        </p>

                        <div className="uc-proven">
                            <h4>Proven Approach</h4>
                            <p>
                                Our strategies adapt to your goals — whether launching new products,
                                entering markets, or sustaining growth.
                            </p>
                            <a href="#" className="uc-cta">
                                See your use case in action →
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT ── */}
                    <div className="uc-right">
                        {useCases.map((item, i) => (
                            <div key={i} className="uc-card">
                                <div className="uc-icon">{item.icon}</div>
                                <div className="uc-card-body">
                                    <div className="uc-card-title">{item.industry}</div>
                                    <div className="uc-card-desc">{item.help}</div>
                                </div>
                                <span className="uc-card-arrow">→</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}