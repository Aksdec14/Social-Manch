"use client";

const TEAM_MEMBER = {
    name: "Rana Rajvinder Singh",
    role: "Strategy, Transformation & Execution Leader",
    bio: [
        "I work at the intersection of strategy, transformation, and execution, helping organisations convert complex business challenges into scalable growth opportunities.",
        "With more than 25 years of leadership experience across enterprise organisations and high-growth startups, my focus has been on strengthening operating models, institutionalising governance frameworks, and building digital capabilities that support long-term growth.",
        "I have collaborated closely with CXOs, founders, boards, and leadership teams to drive enterprise transformation and align strategic vision with operational execution.",
    ],
    image: "./rana.png",
    tags: ["Enterprise Strategy", "Operating Models", "Digital Transformation", "Governance", "CXO Advisory", "Growth Leadership"],
    linkedin: "#",
    twitter: "#",
    stats: [
        { val: "25+", label: "Years Experience" },
        { val: "CXO", label: "Level Advisory" },
        { val: "Global", label: "Enterprise Reach" },
    ],
};

export default function MeetTheTeam() {
    return (
        <>
            <style>{`
        .team-social-btn { transition: all 0.2s ease; }
        .team-social-btn:hover {
          transform: translateY(-2px);
          background: #1a1a1a !important;
          color: #fff !important;
          border-color: #1a1a1a !important;
        }
        .team-cta-btn { transition: all 0.2s ease; }
        .team-cta-btn:hover {
          background: #4361e3 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(87,118,251,0.40) !important;
        }
        .team-tag { transition: background 0.15s, color 0.15s; }
        .team-tag:hover { background: #5776FB !important; color: #fff !important; }

        @keyframes shimmer {
          0%   { opacity: 0; transform: scale(1.04); }
          100% { opacity: 1; transform: scale(1); }
        }
        .team-img { animation: shimmer 0.6s ease both; }

        /* ── Layout ── */
        .team-inner {
          display: flex;
          flex-direction: column;
          gap: 28px;
          align-items: center;
        }
        @media (min-width: 900px) {
          .team-inner {
            flex-direction: row;
            align-items: stretch;
            gap: 44px;
          }
        }

        .team-img-col {
          width: 100%;
          max-width: 340px;
          flex-shrink: 0;
        }
        @media (min-width: 900px) {
          .team-img-col { width: 36%; max-width: 340px; }
        }

        .team-content-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ── Section header: force single line on heading ── */
        .team-section-header {
          text-align: center;
          margin-bottom: clamp(24px, 3.5vw, 40px);
        }

        .team-main-heading {
          font-family: var(--font-instrument-serif), serif;
          font-weight: 400;
          /* Single line: scale down until it fits, but never below 22px */
          font-size: clamp(22px, 3.8vw, 52px);
          color: #1a1a1a;
          line-height: 1.1;
          letter-spacing: -0.5px;
          white-space: nowrap;
          margin: 0 auto;
        }
        /* On very small phones where even 22px wraps, allow wrap gracefully */
        @media (max-width: 420px) {
          .team-main-heading {
            white-space: normal;
            font-size: 22px;
          }
        }

        .team-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 20px;
        }
        @media (max-width: 480px) {
          .team-stats-row { grid-template-columns: 1fr; gap: 8px; }
        }

        .team-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 14px;
        }

        /* ── Mobile content adjustments ── */
        @media (max-width: 899px) {
          .team-content-col h3 { text-align: center; }
          .team-role-text { text-align: center; }
          .team-divider { margin-left: auto !important; margin-right: auto !important; }
          .team-bio-para { text-align: left !important; }
          .team-tags-row { justify-content: center; }
          .team-cta-row { justify-content: center !important; }
        }

        @media (max-width: 600px) {
          .team-img-col { max-width: 280px; }
          .team-cta-row { flex-direction: column; align-items: stretch !important; }
          .team-cta-btn,
          .team-view-profile-btn {
            width: 100%;
            justify-content: center !important;
            text-align: center;
          }
        }
      `}</style>

            <section
                style={{
                    background: "#f5f0e8",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    /* Reduced vertical padding */
                    padding: "clamp(36px, 5vw, 64px) clamp(16px, 5vw, 80px)",
                    position: "relative",
                    zIndex: 1,
                    isolation: "isolate",
                    overflow: "hidden",
                }}
            >
                {/* Dot pattern */}
                <div
                    style={{
                        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                        backgroundImage: "radial-gradient(circle, #1a1a1a14 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
                {/* Blobs */}
                <div style={{ position: "absolute", top: -80, right: -60, width: 280, height: 280, borderRadius: "50%", background: "#5776FB", opacity: 0.06, filter: "blur(80px)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: -60, left: -40, width: 200, height: 200, borderRadius: "50%", background: "#FAD54B", opacity: 0.10, filter: "blur(70px)", pointerEvents: "none" }} />

                <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>

                    {/* ── Section header ── */}
                    <div className="team-section-header">
                        <div
                            style={{
                                display: "inline-flex", alignItems: "center", gap: 6,
                                background: "#fff",
                                border: "1.5px solid #FAD54B",
                                color: "#d6aa1a",
                                fontWeight: 600,
                                fontSize: "clamp(11px, 1.5vw, 13px)",
                                padding: "5px 16px",
                                borderRadius: 999,
                                marginBottom: 14,
                                letterSpacing: "0.3px",
                            }}
                        >
                            <span style={{ fontSize: 9 }}>✦</span>
                            Meet the Team
                        </div>

                        <h2 className="team-main-heading">
                            The Leader Behind{" "}
                            <span style={{ fontStyle: "italic", color: "#5776FB" }}>Social Manch</span>
                        </h2>
                    </div>

                    {/* ── Main card ── */}
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: 28,
                            /* Reduced card padding */
                            padding: "clamp(20px, 3vw, 40px)",
                            boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
                            border: "1.5px solid #ece8df",
                        }}
                    >
                        <div className="team-inner">

                            {/* ── Image column ── */}
                            <div className="team-img-col" style={{ position: "relative" }}>
                                {/* Badge outside overflow:hidden — never overlaps alt text or name overlay */}
                                <div
                                    style={{
                                        position: "absolute", top: 14, left: 14, zIndex: 2,
                                        background: "#FAD54B",
                                        borderRadius: 999,
                                        padding: "4px 12px",
                                        fontSize: 11,
                                        fontWeight: 700,
                                        color: "#1a1a1a",
                                        letterSpacing: "0.3px",
                                        pointerEvents: "none",
                                    }}
                                >
                                    ✦ 25+ Years
                                </div>

                                <div
                                    style={{
                                        position: "relative",
                                        borderRadius: 20,
                                        overflow: "hidden",
                                        aspectRatio: "4/5",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        src={TEAM_MEMBER.image}
                                        alt={TEAM_MEMBER.name}
                                        className="team-img"
                                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                                    />
                                    {/* Name overlay */}
                                    <div
                                        style={{
                                            position: "absolute", inset: "auto 0 0 0",
                                            padding: "36px 16px 16px",
                                            background: "linear-gradient(to top, rgba(26,26,26,0.85), transparent)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontFamily: "var(--font-instrument-serif), serif",
                                                fontSize: "clamp(17px, 2vw, 22px)",
                                                fontWeight: 400,
                                                color: "#fff",
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            {TEAM_MEMBER.name}
                                        </div>
                                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 3, fontWeight: 500 }}>
                                            {TEAM_MEMBER.role}
                                        </div>
                                    </div>
                                </div>

                                {/* Social links */}
                                <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "center" }}>
                                    {[
                                        {
                                            href: TEAM_MEMBER.linkedin, label: "LinkedIn",
                                            icon: (
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                                    <circle cx="4" cy="4" r="2" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            href: TEAM_MEMBER.twitter, label: "Twitter / X",
                                            icon: (
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            ),
                                        },
                                    ].map(({ href, label, icon }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            className="team-social-btn"
                                            style={{
                                                display: "flex", alignItems: "center", gap: 6,
                                                fontSize: 13, fontWeight: 600,
                                                color: "#3a3a3a",
                                                background: "#f5f0e8",
                                                border: "1.5px solid #ece8df",
                                                padding: "7px 14px",
                                                borderRadius: 999,
                                                textDecoration: "none",
                                                cursor: "pointer",
                                                flex: 1,
                                                justifyContent: "center",
                                            }}
                                        >
                                            {icon}
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* ── Content column ── */}
                            <div className="team-content-col">

                                <h3
                                    style={{
                                        fontFamily: "var(--font-instrument-serif), serif",
                                        fontWeight: 400,
                                        fontSize: "clamp(26px, 3vw, 40px)",
                                        color: "#1a1a1a",
                                        lineHeight: 1.1,
                                        marginBottom: 6,
                                    }}
                                >
                                    {TEAM_MEMBER.name}
                                </h3>

                                <p
                                    className="team-role-text"
                                    style={{
                                        fontSize: "clamp(12px, 1.2vw, 14px)",
                                        fontWeight: 600,
                                        color: "#5776FB",
                                        marginBottom: 12,
                                        letterSpacing: "0.2px",
                                    }}
                                >
                                    {TEAM_MEMBER.role}
                                </p>

                                <div
                                    className="team-divider"
                                    style={{ width: 44, height: 3, background: "#FAD54B", borderRadius: 99, marginBottom: 16 }}
                                />

                                {/* Bio — trimmed line-height and margins */}
                                {TEAM_MEMBER.bio.map((para, i) => (
                                    <p
                                        key={i}
                                        className="team-bio-para"
                                        style={{
                                            fontSize: "clamp(13px, 1.3vw, 14.5px)",
                                            color: "#5a5a5a",
                                            lineHeight: 1.7,
                                            textAlign: "left",
                                            marginBottom: i < TEAM_MEMBER.bio.length - 1 ? 10 : 0,
                                        }}
                                    >
                                        {para}
                                    </p>
                                ))}

                                <div className="team-tags-row">
                                    {TEAM_MEMBER.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="team-tag"
                                            style={{
                                                fontSize: 11, fontWeight: 600,
                                                color: "#5776FB",
                                                background: "#5776FB18",
                                                border: "1px solid #5776FB30",
                                                padding: "4px 12px",
                                                borderRadius: 999,
                                                cursor: "default",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div
                                    className="team-cta-row"
                                    style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}
                                >
                                    <button
                                        className="team-cta-btn"
                                        style={{
                                            fontFamily: "var(--font-dm-sans), sans-serif",
                                            fontWeight: 700,
                                            fontSize: "clamp(13px, 1.3vw, 14px)",
                                            color: "#fff",
                                            background: "#5776FB",
                                            border: "none",
                                            cursor: "pointer",
                                            padding: "11px 28px",
                                            borderRadius: 999,
                                            boxShadow: "0 4px 20px rgba(87,118,251,0.30)",
                                        }}
                                    >
                                        Work With Us →
                                    </button>
                                    <a
                                        href={TEAM_MEMBER.linkedin}
                                        className="team-social-btn team-view-profile-btn"
                                        style={{
                                            fontFamily: "var(--font-dm-sans), sans-serif",
                                            fontWeight: 600,
                                            fontSize: "clamp(13px, 1.3vw, 14px)",
                                            color: "#3a3a3a",
                                            background: "transparent",
                                            border: "1.5px solid #ddd8ce",
                                            cursor: "pointer",
                                            padding: "11px 28px",
                                            borderRadius: 999,
                                            textDecoration: "none",
                                            display: "inline-flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}