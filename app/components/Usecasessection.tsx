"use client";

import React, { useState } from "react";

const useCases = [
  {
    icon: "🛒",
    industry: "E-commerce Brands",
    tag: "Direct-to-Consumer",
    help: "Drive traffic and sales with SEO, content marketing, email campaigns, and lead generation.",
    detail: {
      overview:
        "E-commerce brands need consistent traffic, high-converting pages, and repeat buyers. We build full-funnel marketing systems that attract, convert, and retain customers at scale.",
      services: [
        "Search Engine Optimization (SEO)",
        "Email & SMS Campaign Management",
        "Performance Content Marketing",
        "Lead Generation & Retargeting Ads",
        "Product Launch Strategy",
        "Conversion Rate Optimization",
      ],
      results: [
        { metric: "3×", label: "Avg. organic traffic growth" },
        { metric: "40%", label: "Increase in email revenue" },
        { metric: "2.5×", label: "ROAS improvement" },
      ],
      ideal: "Best for: DTC brands, Shopify & WooCommerce stores, subscription products.",
    },
  },
  {
    icon: "💼",
    industry: "B2B SaaS Companies",
    tag: "Demand Generation",
    help: "Fill sales pipelines using demand generation, LinkedIn-focused digital marketing, and marketing strategy consulting.",
    detail: {
      overview:
        "B2B SaaS growth depends on qualified pipeline. We build demand gen engines that attract decision-makers, nurture long sales cycles, and turn MQLs into closed deals.",
      services: [
        "LinkedIn Ads & Organic Strategy",
        "Demand Generation Campaigns",
        "Marketing Strategy Consulting",
        "Account-Based Marketing (ABM)",
        "Webinar & Event Marketing",
        "Sales Enablement Content",
      ],
      results: [
        { metric: "60%", label: "More qualified leads per quarter" },
        { metric: "35%", label: "Shorter sales cycle" },
        { metric: "4×", label: "Pipeline from LinkedIn" },
      ],
      ideal: "Best for: SaaS startups, PLG companies, enterprise software vendors.",
    },
  },
  {
    icon: "🚀",
    industry: "Startups Scaling Fast",
    tag: "Brand & Awareness",
    help: "Build brand awareness through PR, event marketing, and content that establishes thought leadership.",
    detail: {
      overview:
        "Early-stage and growth-stage startups need brand presence fast. We create category-defining narratives, earn press coverage, and position founders as industry voices.",
      services: [
        "PR & Media Outreach",
        "Thought Leadership Content",
        "Event & Conference Marketing",
        "Brand Identity & Messaging",
        "Community Building Strategy",
        "Investor-Ready Marketing Materials",
      ],
      results: [
        { metric: "15+", label: "Media placements in 90 days" },
        { metric: "5×", label: "Social following growth" },
        { metric: "2×", label: "Inbound leads from content" },
      ],
      ideal: "Best for: Seed to Series B startups, founder-led brands, venture-backed companies.",
    },
  },
  {
    icon: "🏢",
    industry: "Enterprise Refinement",
    tag: "Strategy & Optimization",
    help: "Optimize existing efforts with marketing consulting, email nurturing, and data-driven strategy roadmaps.",
    detail: {
      overview:
        "Enterprises have the resources but often lack alignment and efficiency. We audit your stack, identify revenue leaks, and build data-driven roadmaps that maximize ROI on existing spend.",
      services: [
        "Marketing Audit & Consulting",
        "Email Nurture Sequence Design",
        "Data-Driven Strategy Roadmaps",
        "MarTech Stack Optimization",
        "Cross-Channel Attribution",
        "Team Training & Enablement",
      ],
      results: [
        { metric: "28%", label: "Reduction in CAC" },
        { metric: "50%", label: "Email open rate improvement" },
        { metric: "3×", label: "ROI on existing ad spend" },
      ],
      ideal: "Best for: Mid-market & enterprise teams, companies with $1M+ marketing budgets.",
    },
  },
  {
    icon: "🛍️",
    industry: "Retail & Consumer Goods",
    tag: "Omnichannel Campaigns",
    help: "Launch campaigns combining brand marketing, social media ads, and event activations.",
    detail: {
      overview:
        "Retail and CPG brands compete for attention both online and in-store. We craft omnichannel campaigns that build brand love, drive foot traffic, and convert shelf browsers into loyal customers.",
      services: [
        "Social Media Advertising (Meta, TikTok)",
        "Brand Campaign Strategy",
        "In-Store & Event Activations",
        "Influencer & Creator Partnerships",
        "Seasonal & Promotional Campaigns",
        "Retail Media Networks",
      ],
      results: [
        { metric: "45%", label: "Uplift in brand awareness" },
        { metric: "30%", label: "Growth in repeat purchases" },
        { metric: "10×", label: "Event-driven social reach" },
      ],
      ideal: "Best for: CPG brands, brick-and-mortar retailers, lifestyle & fashion companies.",
    },
  },
];

export default function UseCasesSection() {
  const [active, setActive] = useState<number | null>(null);

  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const current = active !== null ? useCases[active] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .uc-root {
          position: relative;
          z-index: 10;
          background: #f7f6f2;
          padding: 72px 40px;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
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
          font-size: clamp(30px, 3.5vw, 52px);
          font-weight: 400;
          line-height: 1.15;
          color: #111;
          margin: 0 0 24px;
        }

        .uc-title em {
          color: #6366F1;
          font-style: italic;
        }

        .uc-divider {
          width: 40px;
          height: 2px;
          background: #6366F1;
          border-radius: 2px;
          margin-bottom: 28px;
        }

        .uc-desc {
          font-size: 15px;
          line-height: 1.75;
          color: #666;
          margin: 0 0 40px;
        }

        .uc-proven {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 18px;
          padding: 28px;
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

        /* ── RIGHT CARDS ── */
        .uc-right {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .uc-card {
          background: #fff;
          border: 1px solid #ebebeb;
          border-radius: 18px;
          padding: 20px 22px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          cursor: pointer;
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
        }

        .uc-card:hover,
        .uc-card.active {
          box-shadow: 0 12px 32px rgba(99,102,241,0.1);
          transform: translateY(-2px);
          border-color: #c7c8fc;
        }

        .uc-card.active { background: #fafaff; }

        .uc-icon {
          font-size: 20px;
          width: 44px;
          height: 44px;
          background: #f3f3fe;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .uc-card-body { flex: 1; min-width: 0; }

        .uc-card-top {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 6px;
        }

        .uc-card-title {
          font-size: 15px;
          font-weight: 600;
          color: #111;
        }

        .uc-tag {
          font-size: 11px;
          font-weight: 500;
          color: #6366F1;
          background: #ededfd;
          padding: 3px 10px;
          border-radius: 999px;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .uc-card-desc {
          font-size: 13px;
          line-height: 1.6;
          color: #777;
        }

        .uc-card-arrow {
          font-size: 18px;
          color: #ccc;
          flex-shrink: 0;
          margin-top: 2px;
          transition: color 0.18s, transform 0.18s;
        }

        .uc-card:hover .uc-card-arrow,
        .uc-card.active .uc-card-arrow {
          color: #6366F1;
          transform: translateX(3px);
        }

        /* ── OVERLAY ── */
        .uc-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(3px);
          z-index: 100;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }

        .uc-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        /* ── DRAWER ── */
        .uc-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 440px;
          max-width: 100vw;
          background: #fff;
          z-index: 101;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: -20px 0 60px rgba(0,0,0,0.12);
        }

        .uc-drawer.open { transform: translateX(0); }

        .uc-drawer-header {
          padding: 24px 20px 20px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .uc-drawer-icon {
          font-size: 26px;
          width: 52px;
          height: 52px;
          background: #f3f3fe;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 12px;
        }

        .uc-drawer-tag {
          font-size: 11px;
          font-weight: 500;
          color: #6366F1;
          background: #ededfd;
          padding: 3px 10px;
          border-radius: 999px;
          display: inline-block;
          margin-bottom: 8px;
        }

        .uc-drawer-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: #111;
          margin: 0;
        }

        .uc-close {
          background: #f5f5f5;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          flex-shrink: 0;
          transition: background 0.15s;
          line-height: 1;
        }

        .uc-close:hover { background: #ebebeb; }

        .uc-drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .uc-drawer-overview {
          font-size: 14px;
          line-height: 1.75;
          color: #555;
        }

        .uc-drawer-section h5 {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #aaa;
          margin: 0 0 12px;
        }

        .uc-services {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .uc-service-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #333;
        }

        .uc-service-item::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366F1;
          flex-shrink: 0;
        }

        .uc-results {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .uc-result-card {
          background: #f7f7f5;
          border-radius: 12px;
          padding: 14px 10px;
          text-align: center;
        }

        .uc-result-metric {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 24px;
          color: #6366F1;
          line-height: 1;
          margin-bottom: 6px;
        }

        .uc-result-label {
          font-size: 11px;
          color: #888;
          line-height: 1.4;
        }

        .uc-ideal {
          background: #f3f3fe;
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 13px;
          color: #5557c4;
          line-height: 1.6;
        }

        /* ── RESPONSIVE: tablet ── */
        @media (max-width: 900px) {
          .uc-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .uc-left { position: static; }
          .uc-root { padding: 60px 24px; }
        }

        /* ── RESPONSIVE: mobile ── */
        @media (max-width: 640px) {
          .uc-root { padding: 48px 16px; }

          .uc-title { font-size: 28px; margin-bottom: 16px; }
          .uc-desc  { font-size: 14px; margin-bottom: 28px; }
          .uc-label { margin-bottom: 10px; }
          .uc-divider { margin-bottom: 20px; }

          .uc-proven { padding: 20px; border-radius: 14px; }
          .uc-proven h4 { font-size: 17px; }
          .uc-proven p  { font-size: 13px; margin-bottom: 16px; }
          .uc-cta { font-size: 13px; padding: 10px 18px; }

          .uc-right { gap: 10px; }

          .uc-card {
            padding: 16px 14px;
            gap: 12px;
            border-radius: 14px;
          }

          .uc-icon {
            width: 38px;
            height: 38px;
            font-size: 18px;
            border-radius: 10px;
          }

          .uc-card-title { font-size: 14px; }
          .uc-card-desc  { font-size: 12.5px; }
          .uc-tag        { font-size: 10px; padding: 2px 8px; }
          .uc-card-arrow { font-size: 16px; }

          /* Drawer slides up from bottom on mobile */
          .uc-drawer {
            top: auto;
            bottom: 0;
            right: 0;
            width: 100vw;
            height: 88vh;
            max-width: 100vw;
            border-radius: 20px 20px 0 0;
            transform: translateY(100%);
            box-shadow: 0 -8px 40px rgba(0,0,0,0.15);
          }

          .uc-drawer.open { transform: translateY(0); }

          .uc-drawer-header { padding: 20px 18px 16px; }
          .uc-drawer-icon   { width: 46px; height: 46px; font-size: 22px; margin-bottom: 10px; }
          .uc-drawer-title  { font-size: 20px; }
          .uc-drawer-body   { padding: 20px 18px; gap: 20px; }
          .uc-drawer-overview { font-size: 13.5px; }

          .uc-results { gap: 8px; }
          .uc-result-card   { padding: 12px 8px; border-radius: 10px; }
          .uc-result-metric { font-size: 22px; }
          .uc-result-label  { font-size: 10.5px; }
          .uc-ideal { font-size: 12.5px; padding: 12px 14px; }
        }

        /* ── RESPONSIVE: very small (375px) ── */
        @media (max-width: 390px) {
          .uc-root  { padding: 40px 14px; }
          .uc-title { font-size: 25px; }
          .uc-card  { padding: 14px 12px; gap: 10px; }
          .uc-card-top { gap: 6px; }
          .uc-tag { display: none; }   /* hide tag on very small screens to prevent overflow */
        }
      `}</style>

      {/* ── OVERLAY ── */}
      <div className={`uc-overlay${active !== null ? " open" : ""}`} onClick={close} />

      {/* ── DRAWER ── */}
      <div className={`uc-drawer${active !== null ? " open" : ""}`}>
        {current && (
          <>
            <div className="uc-drawer-header">
              <div>
                <div className="uc-drawer-icon">{current.icon}</div>
                <div className="uc-drawer-tag">{current.tag}</div>
                <h3 className="uc-drawer-title">{current.industry}</h3>
              </div>
              <button className="uc-close" onClick={close}>✕</button>
            </div>

            <div className="uc-drawer-body">
              <p className="uc-drawer-overview">{current.detail.overview}</p>

              <div className="uc-drawer-section">
                <h5>What We Do</h5>
                <div className="uc-services">
                  {current.detail.services.map((s, i) => (
                    <div key={i} className="uc-service-item">{s}</div>
                  ))}
                </div>
              </div>

              <div className="uc-drawer-section">
                <h5>Typical Results</h5>
                <div className="uc-results">
                  {current.detail.results.map((r, i) => (
                    <div key={i} className="uc-result-card">
                      <div className="uc-result-metric">{r.metric}</div>
                      <div className="uc-result-label">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="uc-ideal">{current.detail.ideal}</div>
            </div>
          </>
        )}
      </div>

      {/* ── SECTION ── */}
      <section className="uc-root">
        <div className="uc-inner">

          {/* LEFT */}
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
              <a href="#" className="uc-cta">See your use case in action →</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="uc-right">
            {useCases.map((item, i) => (
              <div
                key={i}
                className={`uc-card${active === i ? " active" : ""}`}
                onClick={() => open(i)}
              >
                <div className="uc-icon">{item.icon}</div>
                <div className="uc-card-body">
                  <div className="uc-card-top">
                    <div className="uc-card-title">{item.industry}</div>
                    <span className="uc-tag">{item.tag}</span>
                  </div>
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