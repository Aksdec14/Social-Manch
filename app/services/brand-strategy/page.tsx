"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";

interface Step { number: string; title: string; description: string; color: string; }
interface Deliverable { icon: string; title: string; description: string; }
interface FAQ { question: string; answer: string; }

const steps: Step[] = [
  { number: "01", title: "Discovery & Audit", description: "We dig into your business — your market position, competitors, audience, and current perception. No assumptions, just data and honest conversation.", color: "#7B5EA7" },
  { number: "02", title: "Positioning Workshop", description: "A focused session with your leadership to define what you stand for, who you serve, and why you win. This becomes the foundation everything else is built on.", color: "#2BB5A0" },
  { number: "03", title: "Strategy Development", description: "We translate workshop insights into a complete brand strategy — positioning statement, messaging hierarchy, tone of voice, and audience personas.", color: "#F4A432" },
  { number: "04", title: "Activation Playbook", description: "A channel-by-channel execution guide your team can actually use — from content pillars to campaign frameworks, built for your specific stage of growth.", color: "#E8456A" },
];

const deliverables: Deliverable[] = [
  { icon: "🎯", title: "Brand Positioning Statement", description: "A single, clear articulation of who you are, who you serve, and why you're different." },
  { icon: "🗣️", title: "Messaging Framework", description: "Core messages for every audience — investors, customers, and partners — with proof points for each." },
  { icon: "✍️", title: "Tone of Voice Guide", description: "Rules for how your brand sounds across every touchpoint, from ads to email to sales decks." },
  { icon: "👥", title: "Audience Personas", description: "In-depth profiles of your ideal buyers — their goals, fears, triggers, and where to reach them." },
  { icon: "🗺️", title: "Competitive Landscape Map", description: "A clear picture of where you sit in the market and the white space your brand can own." },
  { icon: "📋", title: "Activation Playbook", description: "A 90-day execution plan that takes your strategy from document to market reality." },
];

const faqs: FAQ[] = [
  { question: "How long does the Brand Strategy engagement take?", answer: "Most engagements run 4–6 weeks from kickoff to final delivery. The timeline depends on the depth of research required and how quickly your leadership team can participate in the positioning workshop." },
  { question: "Who should be involved from our side?", answer: "We recommend having your founder or CEO, head of marketing, and ideally one person from sales. The best brand strategies come from aligning the people who know the product, the market, and the customer." },
  { question: "Do you work with early-stage startups or only established brands?", answer: "Both. Early-stage companies need a strong positioning foundation before spending on marketing. Established brands often need a strategy reset when they're entering new markets or relaunching. We've done both." },
  { question: "What's the difference between Brand Strategy and Brand Identity?", answer: "Strategy is the thinking — who you are, who you serve, what you stand for, and how you communicate. Identity is the visual expression — logo, colors, typography. We handle strategy; we partner with design studios when visual identity work is needed." },
  { question: "Can we implement the strategy ourselves after the engagement?", answer: "Absolutely. The Activation Playbook is designed for your team to run with independently. Many clients also choose to continue with us on retainer for content, demand gen, or campaign execution." },
];

const stats = [
  { value: "200+", label: "Brands Positioned" },
  { value: "4–6", label: "Weeks to Delivery" },
  { value: "92%", label: "Client Retention" },
  { value: "5×", label: "Avg. ROI Uplift" },
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

// ─── Section heading used on left column ──────────────────────────────────────
const SectionLabel = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <span className="text-[11px] font-semibold tracking-widest uppercase mb-4 block" style={{ color }}>{children}</span>
);

const WhoWeServeItem = ({ item, index }: { item: { label: string; color: string; description: string }; index: number }) => {
  const { ref, style } = useReveal(index * 100);
  return (
    <div ref={ref} style={style} className="bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.06] flex flex-col sm:flex-row gap-3 sm:gap-5 items-start">
      <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full self-start sm:mt-0.5 flex-shrink-0" style={{ backgroundColor: item.color + "18", color: item.color }}>{item.label}</span>
      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
};

const BrandStrategyPage = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setTitleVisible(true), 100); return () => clearTimeout(t); }, []);

  const fadeIn = (delay: number) => ({
    opacity: titleVisible ? 1 : 0,
    transform: titleVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  // Standalone reveal hooks for sections that previously used IIFEs
  const { ref: whatWeDoLeft, style: whatWeDoLeftStyle } = useReveal(0);
  const { ref: whatWeDoRight, style: whatWeDoRightStyle } = useReveal(120);
  const { ref: processLeft, style: processLeftStyle } = useReveal(0);
  const { ref: deliverablesLeft, style: deliverablesLeftStyle } = useReveal(0);
  const { ref: whoLeft, style: whoLeftStyle } = useReveal(0);
  const { ref: faqLeft, style: faqLeftStyle } = useReveal(0);
  const { ref: ctaLeft, style: ctaLeftStyle } = useReveal(0);
  const { ref: ctaRight, style: ctaRightStyle } = useReveal(150);

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
                Brand Strategy<br />
                <em className="not-italic" style={{ color: "#7B5EA7" }}>that actually</em><br />
                drives growth.
              </h1>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10" style={fadeIn(350)}>
                Most brands don&apos;t have a strategy problem &mdash; they have a clarity problem. We help growth-focused businesses define exactly who they are, who they serve, and why they win &mdash; then build the systems to communicate it consistently at scale.
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
                  &quot;Social Manch gave us the clarity to say no to the wrong customers and yes to the right ones.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#7B5EA7]/20 flex items-center justify-center text-[#7B5EA7] font-semibold text-xs">AK</div>
                  <div>
                    <p className="text-xs font-semibold text-black">Arjun Kapoor</p>
                    <p className="text-[10px] text-gray-400">Co-Founder, TechScale India</p>
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
            <div ref={whatWeDoLeft} style={whatWeDoLeftStyle}>
              <SectionLabel color="#7B5EA7">✦ What We Do</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-normal text-black leading-snug">
                Clarity is the most underrated growth lever.
              </h2>
            </div>
            <div ref={whatWeDoRight} style={whatWeDoRightStyle} className="space-y-5 pt-1">
              <p className="text-gray-500 text-sm leading-relaxed">When your positioning is vague, your marketing spend is inefficient. Sales cycles get longer. Good-fit buyers take longer to convert &mdash; or don&apos;t convert at all. Brand strategy fixes that.</p>
              <p className="text-gray-500 text-sm leading-relaxed">We work with founders, CMOs, and leadership teams to get ruthlessly clear on what the brand stands for &mdash; then build a framework that every team member, agency, and campaign can execute from.</p>
              <p className="text-gray-500 text-sm leading-relaxed">The result is a company that sounds like itself everywhere: in ads, in sales conversations, in product copy, in hiring. That consistency is what builds trust &mdash; and trust is what builds revenue.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROCESS: left = heading sticky, right = 2×2 cards ── */}
      <section id="process" className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={processLeft} style={processLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#2BB5A0">✦ Our Process</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Four steps from fuzzy<br />to <em>formidable</em>.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">A proven framework built for companies that need more than a logo refresh.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, i) => <StepCard key={step.number} step={step} index={i} />)}
            </div>
          </div>
        </Container>
      </section>

      {/* ── DELIVERABLES: left = heading, right = 2×3 grid ── */}
      <section className="bg-[#1a1a1a] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-[#7B5EA7] opacity-10 -top-20 -right-20 pointer-events-none" style={{ animation: "floatA 9s ease-in-out infinite" }} />
        <div className="absolute w-40 h-40 rounded-full bg-[#F4A432] opacity-10 bottom-0 left-10 pointer-events-none" style={{ animation: "floatB 11s ease-in-out infinite" }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={deliverablesLeft} style={deliverablesLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#F4A432">✦ What You Get</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-snug">
                Everything you need to show up with confidence.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mt-4">Six battle-tested deliverables, ready to activate.</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 sm:gap-10 lg:gap-20 items-start">
            <div ref={whoLeft} style={whoLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#E8456A">✦ Who It&apos;s For</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Built for businesses at a turning point.
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "Startups", color: "#7B5EA7", description: "You have a great product but struggle to articulate why anyone should care. We give you the language to land investors, attract customers, and hire A-players." },
                { label: "Growth-Stage", color: "#2BB5A0", description: "You've grown fast but messaging has gotten messy. Different teams say different things. We bring it back to one clear story everyone can execute from." },
                { label: "Enterprise", color: "#F4A432", description: "You're entering a new market or launching a new product line and need a positioning strategy that doesn't dilute what the parent brand already stands for." },
              ].map((item, i) => (
                <WhoWeServeItem key={item.label} item={item} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ: left = heading, right = accordion ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={faqLeft} style={faqLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#7B5EA7">✦ FAQ</SectionLabel>
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
        <div className="absolute w-72 h-72 rounded-full bg-[#5B4FCF] opacity-15 -top-20 -right-20 pointer-events-none" style={{ animation: "floatA 9s ease-in-out infinite" }} />
        <div className="absolute w-44 h-44 rounded-full bg-[#F4A432] opacity-15 -bottom-12 left-20 pointer-events-none" style={{ animation: "floatB 12s ease-in-out infinite" }} />
        <div className="absolute w-28 h-28 rounded-full bg-[#2BB5A0] opacity-15 top-12 left-48 pointer-events-none" style={{ animation: "floatA 7s ease-in-out infinite reverse" }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left */}
            <div ref={ctaLeft} style={ctaLeftStyle}>
              <p className="text-[#F4A432] text-[11px] font-semibold tracking-widest uppercase mb-5">✦ Ready to Get Clear</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-normal italic text-white mb-6 leading-tight">
                Let&apos;s build a brand<br />worth remembering.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                Every engagement starts with strategy &mdash; clear positioning, sharper messaging, and a system your team can run with long after we&apos;re gone.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <MagneticCTA href="/contact" dark>Start the Conversation →</MagneticCTA>
                <a href="/pricing" className="text-[11px] font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200 border-b border-white/20 pb-0.5">Get a Quote</a>
              </div>
            </div>
            {/* Right — pricing card */}
            <div ref={ctaRight} style={ctaRightStyle} className="bg-white/8 border border-white/10 rounded-3xl p-8">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-6">What&apos;s included</p>
              <ul className="space-y-4 mb-8">
                {["Brand Positioning Statement", "Messaging Framework", "Tone of Voice Guide", "Audience Personas", "Competitive Landscape Map", "Brand Activation Playbook"].map((item) => (
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
                <p className="text-white/30 text-xs">Scoped to your goals</p>
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

export default BrandStrategyPage;
