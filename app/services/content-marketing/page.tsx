"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";

interface Step { number: string; title: string; description: string; color: string; }
interface Deliverable { icon: string; title: string; description: string; }
interface FAQ { question: string; answer: string; }

const steps: Step[] = [
  { number: "01", title: "Content Audit & Gap Analysis", description: "We audit everything you've published — blogs, videos, emails, social — against what your competitors produce and what your audience actually searches for. No guesswork, just gaps.", color: "#2BB5A0" },
  { number: "02", title: "Strategy & Content Blueprint", description: "We build a topic universe around your brand's authority zone — the intersection of what you know best and what your buyers care most about. Every pillar has a purpose.", color: "#7B5EA7" },
  { number: "03", title: "Content Production", description: "Our team of writers, designers, and strategists executes the plan. Long-form articles, thought leadership pieces, newsletters, social content — crafted to rank, resonate, and convert.", color: "#F4A432" },
  { number: "04", title: "Distribution & Amplification", description: "Great content without distribution is a tree falling in an empty forest. We get your content in front of the right people through SEO, email, social, and earned media.", color: "#E8456A" },
];

const deliverables: Deliverable[] = [
  { icon: "🗂️", title: "Content Strategy Document", description: "A comprehensive blueprint covering topic clusters, content types, publishing cadence, and success metrics tied to your business goals." },
  { icon: "✍️", title: "Monthly Content Production", description: "SEO-optimised long-form articles, thought leadership pieces, and supporting content — written, edited, and formatted for your channels." },
  { icon: "📧", title: "Email Newsletter System", description: "A fully built newsletter strategy with templates, segmentation logic, and a 90-day editorial calendar your team can run independently." },
  { icon: "📊", title: "SEO Keyword Map", description: "A prioritised keyword map covering short-tail, long-tail, and intent-based terms — tied to stages of your buyer journey." },
  { icon: "📱", title: "Social Content Calendar", description: "Platform-specific content plans for LinkedIn, Instagram, and X — with copy frameworks and repurposing systems built in." },
  { icon: "📈", title: "Monthly Performance Report", description: "Clear reporting on traffic, rankings, engagement, and pipeline influence — with recommendations for what to do next." },
];

const faqs: FAQ[] = [
  { question: "How long before we see results from content marketing?", answer: "SEO-driven content typically takes 3–6 months to gain meaningful traction. However, newsletter and social content can start generating engagement within weeks. We set expectations clearly upfront and track leading indicators — not just lagging ones." },
  { question: "Do you write the content or do we?", answer: "We handle everything — research, writing, editing, and formatting. We conduct a deep-dive interview with your subject matter experts to ensure the content sounds like your team, not a generic agency. You review and approve before anything goes live." },
  { question: "How many pieces of content do you produce per month?", answer: "It depends on your retainer tier. Our standard engagement covers 4–6 long-form articles, a bi-weekly newsletter, and a social content calendar per month. We scale up or down based on your goals and budget." },
  { question: "Can you handle content for technical or niche industries?", answer: "Absolutely. We've produced content for SaaS, fintech, healthcare, and B2B services companies. Our process starts with understanding your domain deeply before we write a word. If you have internal experts, we interview them — then translate that knowledge into content your audience actually wants to read." },
  { question: "How do you measure content marketing ROI?", answer: "We track organic traffic growth, keyword ranking improvements, email open and click rates, content-influenced pipeline, and on-page engagement metrics. Every monthly report ties activity back to business outcomes — not just vanity metrics." },
];

const stats = [
  { value: "3.2×", label: "Avg. Traffic Growth" },
  { value: "180+", label: "Brands Served" },
  { value: "94%", label: "Retention Rate" },
  { value: "60d", label: "Avg. to First Rank" },
];

const dotColors = ["#5B4FCF", "#2BB5A0", "#F4A432", "#E8456A", "#5BBF5B"];

const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 ${className}`}>{children}</div>
);

const useReveal = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    },
  };
};

const FAQItem = ({ faq, index }: { faq: FAQ; index: number }) => {
  const [open, setOpen] = useState(false);
  const { ref, style } = useReveal(index * 80);
  return (
    <div ref={ref} style={style} className="border-b border-black/10 last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className="font-serif text-base sm:text-lg font-normal text-black leading-snug group-hover:text-gray-600 transition-colors duration-200">{faq.question}</span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-black/15 flex items-center justify-center text-sm transition-all duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", backgroundColor: open ? "#1a1a1a" : "transparent", color: open ? "white" : "#1a1a1a" }}>+</span>
      </button>
      <div className="overflow-hidden" style={{ maxHeight: open ? "300px" : "0px", transition: "max-height 0.4s ease" }}>
        <p className="text-gray-500 text-sm leading-relaxed pb-5 pr-10">{faq.answer}</p>
      </div>
    </div>
  );
};

const StepCard = ({ step, index }: { step: Step; index: number }) => {
  const { ref, style } = useReveal(index * 100);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-2xl p-6 border border-black/[0.06] transition-all duration-300 cursor-default overflow-hidden"
      {...(hovered ? { style: { ...style, transform: "translateY(-4px)", boxShadow: `0 16px 40px ${step.color}20` } } : {})}
    >
      <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-300" style={{ backgroundColor: step.color, opacity: hovered ? 1 : 0.4 }} />
      <span className="text-[11px] font-bold tracking-widest mb-3 block" style={{ color: step.color }}>{step.number}</span>
      <h3 className="font-serif text-lg font-normal text-black mb-2 leading-snug">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
    </div>
  );
};

const DeliverableCard = ({ item, index }: { item: Deliverable; index: number }) => {
  const { ref, style } = useReveal(index * 80);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white/10 rounded-2xl p-5 border border-white/10 transition-all duration-300"
      {...(hovered ? { style: { ...style, backgroundColor: "rgba(255,255,255,0.15)", transform: "translateY(-3px)" } } : {})}
    >
      <span className="text-2xl mb-3 block">{item.icon}</span>
      <h4 className="font-serif text-base font-normal text-white mb-2">{item.title}</h4>
      <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{item.description}</p>
    </div>
  );
};

const MagneticCTA = ({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return (
    <a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave}
      className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase px-6 py-3 rounded-full border transition-all duration-200 ${dark ? "bg-white text-black border-white hover:bg-transparent hover:text-white" : "bg-black text-white border-black hover:bg-transparent hover:text-black"}`}
      style={{ transition: "transform 0.15s ease, background 0.2s, color 0.2s" }}>
      {children}
    </a>
  );
};

const SectionLabel = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <span className="text-[11px] font-semibold tracking-widest uppercase mb-4 block" style={{ color }}>{children}</span>
);

interface WhoItemData { label: string; color: string; description: string; }

const WhoItem = ({ item, index }: { item: WhoItemData; index: number }) => {
  const { ref, style } = useReveal(index * 100);
  return (
    <div ref={ref} style={style} className="bg-white rounded-2xl p-6 border border-black/[0.06] flex gap-5 items-start">
      <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mt-0.5 flex-shrink-0" style={{ backgroundColor: item.color + "18", color: item.color }}>{item.label}</span>
      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
};

const ContentMarketingPage = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setTitleVisible(true), 100); return () => clearTimeout(t); }, []);

  const fadeIn = (delay: number) => ({
    opacity: titleVisible ? 1 : 0,
    transform: titleVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  const { ref: whatWeDoLeftRef, style: whatWeDoLeftStyle } = useReveal(0);
  const { ref: whatWeDoRightRef, style: whatWeDoRightStyle } = useReveal(120);
  const { ref: processLeftRef, style: processLeftStyle } = useReveal(0);
  const { ref: deliverablesLeftRef, style: deliverablesLeftStyle } = useReveal(0);
  const { ref: whoItsForLeftRef, style: whoItsForLeftStyle } = useReveal(0);
  const { ref: faqLeftRef, style: faqLeftStyle } = useReveal(0);
  const { ref: ctaLeftRef, style: ctaLeftStyle } = useReveal(0);
  const { ref: ctaRightRef, style: ctaRightStyle } = useReveal(150);

  return (
    <main className="bg-[#F5F0E8] min-h-screen pt-[72px] overflow-x-hidden">

      {/* ── HERO: left = copy, right = stats panel ── */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-10 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6" style={fadeIn(100)}>
                <div className="flex gap-1.5">{dotColors.map((c, i) => <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />)}</div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">Our Services</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-black leading-[1.0] mb-6" style={fadeIn(200)}>
                Content that<br />
                <em className="not-italic" style={{ color: "#2BB5A0" }}>ranks, resonates</em><br />
                and converts.
              </h1>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10" style={fadeIn(350)}>
                Most content marketing fails because it&apos;s built to fill a calendar, not to earn trust. We help ambitious brands build content engines that attract the right audience, demonstrate real expertise, and turn readers into buyers — month after month.
              </p>
              <div className="flex flex-wrap items-center gap-4" style={fadeIn(480)}>
                <MagneticCTA href="/contact">Start a Project →</MagneticCTA>
                <a href="#process" className="text-[11px] font-semibold tracking-widest uppercase text-black border-b border-black/30 pb-0.5 hover:border-black transition-all duration-200">See Our Process ↓</a>
              </div>
            </div>
            {/* Right — stats panel */}
            <div className="bg-white rounded-3xl p-8 border border-black/[0.06]" style={fadeIn(300)}>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="bg-[#F5F0E8] rounded-2xl p-5">
                    <p className="font-serif text-3xl font-normal text-black mb-1">{s.value}</p>
                    <p className="text-[10px] font-medium tracking-widest uppercase text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-black/8 pt-6">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <span key={i} style={{ color: "#F4A432", fontSize: "14px" }}>★</span>)}</div>
                <p className="font-serif text-sm text-black leading-relaxed mb-4">
                  &quot;Social Manch turned our blog from an afterthought into our #1 inbound lead source. Organic traffic tripled in six months.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2BB5A0]/20 flex items-center justify-center text-[#2BB5A0] font-semibold text-xs">PS</div>
                  <div>
                    <p className="text-xs font-semibold text-black">Priya Sharma</p>
                    <p className="text-[10px] text-gray-400">Head of Growth, FinStack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHAT WE DO: left = heading, right = body copy ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div ref={whatWeDoLeftRef} style={whatWeDoLeftStyle}>
              <SectionLabel color="#2BB5A0">✦ What We Do</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-normal text-black leading-snug">
                Content is the highest-leverage channel you&apos;re probably underusing.
              </h2>
            </div>
            <div ref={whatWeDoRightRef} style={whatWeDoRightStyle} className="space-y-5 pt-1">
              <p className="text-gray-500 text-sm leading-relaxed">Paid ads stop the moment you stop paying. Content compounds. A well-researched article published today can be your best-performing lead source two years from now — if it&apos;s built on a real strategy, not just keyword stuffing.</p>
              <p className="text-gray-500 text-sm leading-relaxed">We build content programs from the ground up — starting with a deep understanding of your audience&apos;s questions, fears, and buying triggers, then creating content that meets them at every stage of the journey.</p>
              <p className="text-gray-500 text-sm leading-relaxed">The result is a growing library of assets that builds your authority, earns trust before the first sales conversation, and keeps working for you long after it&apos;s published. That&apos;s the compounding power of content done right.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROCESS: left = heading sticky, right = 2×2 cards ── */}
      <section id="process" className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={processLeftRef} style={processLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#7B5EA7">✦ Our Process</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Four steps from invisible<br />to <em>indispensable</em>.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">A repeatable system that turns your expertise into a pipeline-generating content engine.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, i) => <StepCard key={step.number} step={step} index={i} />)}
            </div>
          </div>
        </Container>
      </section>

      {/* ── DELIVERABLES: left = heading, right = 2×3 grid ── */}
      <section className="bg-[#1a1a1a] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-[#2BB5A0] opacity-10 -top-20 -right-20 pointer-events-none" style={{ animation: "floatA 9s ease-in-out infinite" }} />
        <div className="absolute w-40 h-40 rounded-full bg-[#7B5EA7] opacity-10 bottom-0 left-10 pointer-events-none" style={{ animation: "floatB 11s ease-in-out infinite" }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={deliverablesLeftRef} style={deliverablesLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#2BB5A0">✦ What You Get</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-snug">
                A complete content engine, not just articles.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mt-4">Six deliverables that work together as one system.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item, i) => <DeliverableCard key={item.title} item={item} index={i} />)}
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHO IT'S FOR: left = heading, right = 3 cards stacked ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={whoItsForLeftRef} style={whoItsForLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#E8456A">✦ Who It&apos;s For</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Built for brands ready to play the long game.
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "B2B SaaS", color: "#7B5EA7", description: "Your buyers do months of research before they ever talk to sales. We put your brand in front of them during that research phase — with content that educates, builds trust, and shortens the sales cycle." },
                { label: "Professional Services", color: "#2BB5A0", description: "Thought leadership is your competitive moat. We help consultants, agencies, and firms turn their expertise into content that attracts premium clients without cold outreach." },
                { label: "D2C & E-commerce", color: "#F4A432", description: "You need content that doesn&apos;t just rank — it converts. We build SEO-driven editorial strategies combined with email sequences and social content that moves people from awareness to purchase." },
              ].map((item, i) => (
                <WhoItem key={item.label} item={item} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ: left = heading, right = accordion ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={faqLeftRef} style={faqLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#2BB5A0">✦ FAQ</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Questions<br />we always<br />get asked.
              </h2>
            </div>
            <div>
              {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA: left = copy, right = pricing card ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div className="absolute w-72 h-72 rounded-full bg-[#2BB5A0] opacity-15 -top-20 -right-20 pointer-events-none" style={{ animation: "floatA 9s ease-in-out infinite" }} />
        <div className="absolute w-44 h-44 rounded-full bg-[#7B5EA7] opacity-15 -bottom-12 left-20 pointer-events-none" style={{ animation: "floatB 12s ease-in-out infinite" }} />
        <div className="absolute w-28 h-28 rounded-full bg-[#F4A432] opacity-15 top-12 left-48 pointer-events-none" style={{ animation: "floatA 7s ease-in-out infinite reverse" }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left */}
            <div ref={ctaLeftRef} style={ctaLeftStyle}>
              <p className="text-[#2BB5A0] text-[11px] font-semibold tracking-widest uppercase mb-5">✦ Ready to Start Growing</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal italic text-white mb-6 leading-tight">
                Let&apos;s build content<br />that works while<br />you sleep.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                Our content retainers are built for compounding growth — steady publishing, sharper SEO, and an engine that keeps working long after launch.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <MagneticCTA href="/contact" dark>Start the Conversation →</MagneticCTA>
                <a href="/pricing" className="text-[11px] font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200 border-b border-white/20 pb-0.5">Get a Quote</a>
              </div>
            </div>
            {/* Right — pricing card */}
            <div ref={ctaRightRef} style={ctaRightStyle} className="bg-white/8 border border-white/10 rounded-3xl p-8">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-6">What&apos;s included</p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Content Strategy Document",
                      "Long-Form Article Production",
                      "SEO Keyword Map",
                      "Email Newsletter System",
                      "Social Content Calendar",
                      "Performance Reporting",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                        <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]" style={{ backgroundColor: "#2BB5A0", color: "white" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-6 flex items-end justify-between">
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Engagement</p>
                      <p className="font-serif text-3xl text-white">Tailored to You</p>
                    </div>
                    <p className="text-white/30 text-xs">Ongoing retainer</p>
                  </div>
                </div>
          </div>
        </Container>
      </section>

      <style jsx global>{`
        @keyframes floatA { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-18px) scale(1.04); } }
        @keyframes floatB { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(14px) scale(0.96); } }
      `}</style>
    </main>
  );
};

export default ContentMarketingPage;