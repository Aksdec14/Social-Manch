"use client";

export default function Footer() {
    const columns = [
        {
            heading: "Services",
            links: ["Brand Strategy", "Content Marketing", "Demand Generation", "Digital Marketing", "Email Marketing", "Lead Generation"],
        },
        {
            heading: "Company",
            links: ["About Us", "Careers", "News & Blog", "Case Studies", "Partners"],
        },
        {
            heading: "Legal",
            links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Disclaimer"],
        },
    ];

    const socialLinks = [
        {
            label: "LinkedIn", href: "#",
            icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>),
        },
        {
            label: "Twitter / X", href: "#",
            icon: (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>),
        },
        {
            label: "Instagram", href: "#",
            icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>),
        },
        {
            label: "YouTube", href: "#",
            icon: (<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>),
        },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .footer-root {
          font-family: 'DM Sans', sans-serif;
          background: #111111;
          position: relative;
          overflow: hidden;
        }

        /* ── Wave top divider ── */
        .footer-wave {
          display: block;
          width: 100%;
          /* 
            Negative margin pulls the wave flush with whatever is above.
            Adjust the fill colour to match your page background.
          */
          margin-bottom: -2px;
          line-height: 0;
        }
        .footer-wave svg {
          display: block;
          width: 100%;
          height: auto;
        }

        /* ── Tighter vertical padding ── */
        .footer-body {
          padding: clamp(22px, 3vw, 36px) clamp(20px, 6vw, 80px) 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr repeat(3, 1fr) 1.4fr;
          gap: clamp(16px, 3vw, 44px);
          align-items: start;
        }

        .footer-logo-dots {
          display: flex;
          gap: 5px;
          margin-bottom: 6px;
        }
        .footer-logo-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .footer-logo-name {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.04em;
          margin-bottom: 7px;
        }
        .footer-tagline {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
          max-width: 210px;
        }

        .footer-col-heading {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9961A;
          margin-bottom: 10px;
        }
        .footer-col-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .footer-col-links a {
          font-size: 12.5px;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.18s ease;
          display: inline-block;
        }
        .footer-col-links a:hover { color: #C9961A; }

        .footer-contact-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9961A;
          margin-bottom: 6px;
        }
        .footer-contact-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          margin-bottom: 10px;
          line-height: 1.45;
        }
        .footer-cta-btn {
          display: inline-block;
          background: #ffffff;
          color: #111111;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 999px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          margin-bottom: 14px;
          box-shadow: 0 0 16px rgba(201,150,26,0.22);
        }
        .footer-cta-btn:hover {
          background: #f5f0e8;
          transform: translateY(-2px);
          box-shadow: 0 0 28px rgba(201,150,26,0.42);
        }
        .footer-phone-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9961A;
          margin-bottom: 4px;
        }
        .footer-phone-number {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }

        /* ── Bottom bar — tighter ── */
        .footer-bottom {
          margin-top: clamp(18px, 2.5vw, 28px);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 11px clamp(20px, 6vw, 80px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .footer-copyright {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
        }
        .footer-social-row { display: flex; gap: 7px; }
        .footer-social-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: background 0.18s, color 0.18s, transform 0.18s;
        }
        .footer-social-icon:hover {
          background: #C9961A;
          color: #fff;
          border-color: #C9961A;
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr; gap: 20px 28px; }
          .footer-logo-col { grid-column: span 3; }
          .footer-contact-col { grid-column: span 3; display: flex; gap: 28px; flex-wrap: wrap; }
          .footer-contact-col > div { flex: 1; min-width: 140px; }
        }
        @media (max-width: 700px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 18px 18px; }
          .footer-logo-col { grid-column: span 2; }
          .footer-contact-col { grid-column: span 2; flex-direction: column; gap: 14px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
        @media (max-width: 420px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-logo-col, .footer-contact-col { grid-column: span 1; }
          .footer-body { padding-left: 1.25rem; padding-right: 1.25rem; }
          .footer-bottom { padding-left: 1.25rem; padding-right: 1.25rem; }
        }
      `}</style>

            <footer className="footer-root">

                {/* ── Wave top edge ─────────────────────────────────────────
                    The fill colour (#ffffff) should match your page background.
                    Change it to whatever sits above this footer.
                ───────────────────────────────────────────────────────────── */}
                <div className="footer-wave">
                    <svg
                        viewBox="0 0 1440 90"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0 C240,90 480,90 720,45 C960,0 1200,0 1440,60 L1440,0 L0,0 Z"
                            fill="#f2e6d2"
                        />
                    </svg>
                </div>

                {/* Ambient glow blobs */}
                <div style={{ position: "absolute", top: 120, left: -80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(180,120,20,0.15) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
                <div style={{ position: "absolute", top: 100, right: -60, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,160,160,0.11) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

                <div style={{ position: "relative", zIndex: 1 }}>

                    <div className="footer-body">
                        <div className="footer-grid">

                            <div className="footer-logo-col">
                                <div className="footer-logo-dots">
                                    {["#4B6EF5", "#F5C518", "#FF5757", "#2EC4B6", "#9B5DE5"].map((c, i) => (
                                        <div key={i} className="footer-logo-dot" style={{ background: c }} />
                                    ))}
                                </div>
                                <div className="footer-logo-name">SOCIAL MANCH</div>
                                <p className="footer-tagline">
                                    A strategy-led marketing partner for growth-focused businesses. We build systems that drive pipeline and revenue.
                                </p>
                            </div>

                            {columns.map((col) => (
                                <div key={col.heading}>
                                    <div className="footer-col-heading">{col.heading}</div>
                                    <ul className="footer-col-links">
                                        {col.links.map((link) => (
                                            <li key={link}><a href="#">{link}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="footer-contact-col">
                                <div>
                                    <div className="footer-contact-label">Let's Chat</div>
                                    <p className="footer-contact-sub">Have a question or want to work with us?</p>
                                    <a href="#" className="footer-cta-btn">Get in Touch</a>
                                </div>
                                <div>
                                    <div className="footer-phone-label">Call Us</div>
                                    <div className="footer-phone-number">+91 0124-64XXXX</div>
                                    <div style={{ marginTop: 3, fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Mon – Fri, 9AM – 6PM IST</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footer-bottom">
                        <span className="footer-copyright">© 2025 Social Manch. All rights reserved.</span>
                        <div className="footer-social-row">
                            {socialLinks.map(({ label, href, icon }) => (
                                <a key={label} href={href} className="footer-social-icon" aria-label={label}>
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}