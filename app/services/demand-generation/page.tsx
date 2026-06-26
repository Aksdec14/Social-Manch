"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";

interface Step { number: string; title: string; description: string; color: string; }
interface Deliverable { icon: string; title: string; description: string; }
interface FAQ { question: string; answer: string; }

const steps: Step[] = [
  { number: "01", title: "Audience & Market Research", description: "We map your ideal customer profile in granular detail — their job titles, pain points, watering holes, and the exact moments they're ready to buy. Demand generation built on assumptions is just expensive guesswork.", color: "#E8456A" },
  { number: "02", title: "Campaign Architecture", description: "We design a full-funnel campaign system — from cold awareness to pipeline-ready — with the right mix of paid, organic, and owned channels stitched together into one coherent motion.", color: "#7B5EA7" },
  { number: "03", title: "Launch & Optimise", description: "We go live, measure everything from day one, and optimise ruthlessly. Ad creative, landing pages, email sequences, offer framing — every lever gets pulled based on what the data tells us.", color: "#2BB5A0" },
  { number: "04", title: "Scale What Works", description: "Once we've found the channels and messages that convert, we scale them deliberately — increasing spend and reach without sacrificing the efficiency that made them work in the first place.", color: "#F4A432" },
];

const deliverables: Deliverable[] = [
  { icon: "🎯", title: "ICP & Buyer Journey Map", description: "A detailed profile of your ideal customer and a stage-by-stage map of how they move from unaware to ready-to-buy." },
  { icon: "📣", title: "Full-Funnel Campaign Plan", description: "A documented campaign architecture covering awareness, consideration, and conversion — with channel mix, budget allocation, and KPIs for each stage." },
  { icon: "🖼️", title: "Ad Creative & Copy", description: "High-converting ad creative across formats — static, video scripts, carousel — with messaging variants tested against your core audience segments." },
  { icon: "🏗️", title: "Landing Page Build", description: "Conversion-optimised landing pages built for each campaign — with clear messaging hierarchy, social proof, and a single focused call to action." },
  { icon: "📧", title: "Lead Nurture Sequences", description: "Automated email sequences that move leads from first touch to sales-ready — with personalised messaging based on how they entered your funnel." },
  { icon: "📊", title: "Weekly Performance Dashboard", description: "A live dashboard showing CPL, MQL volume, pipeline influence, and ROAS — updated weekly so you always know exactly what's working." },
];

const faqs: FAQ[] = [
  { question: "What's the difference between demand generation and lead generation?", answer: "Lead generation captures contact details from people who already have a problem. Demand generation creates and amplifies that problem awareness — it builds the audience that lead generation then converts. We do both, but our focus is on building a sustainable pipeline engine, not just filling a spreadsheet with cold contacts." },
  { question: "Which channels do you work with?", answer: "We work across LinkedIn Ads, Google Search and Display, Meta, programmatic display, and organic social. We recommend the right mix based on your ICP, deal size, and budget — not on what we happen to be most comfortable running." },
  { question: "What budget do we need to get started?", answer: "Our recommended minimum ad spend is ₹1.5L/month, with our management retainer on top. Below that threshold, campaigns don't get enough data to optimise effectively. We'd rather tell you that upfront than take your money and underdeliver." },
  { question: "How do you define a Marketing Qualified Lead (MQL)?", answer: "We work with your sales team in week one to define MQL criteria together — so marketing and sales are scoring leads against the same standard. A misaligned MQL definition is the single biggest reason demand generation programmes fail." },
  { question: "How long before we see pipeline impact?", answer: "Most clients see initial lead flow within the first 30 days. Meaningful pipeline impact — opportunities that sales can work — typically emerges at the 60–90 day mark, once campaigns have been optimised and the nurture sequences have had time to run." },
];

const stats = [
  { value: "2.8×", label: "Avg. Pipeline Growth" },
  { value: "₹380", label: "Avg. Cost Per MQL" },
  { value: "140+", label: "Campaigns Launched" },
  { value: "30d", label: "Avg. to First Lead" },
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

const DemandGenerationPage = () => {
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

      {/* ── HERO ── */}
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
                Pipeline that<br />
                <em className="not-italic" style={{ color: "#E8456A" }}>fills itself,</em><br />
                month after month.
              </h1>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10" style={fadeIn(350)}>
                Most B2B companies are one campaign away from running out of pipeline. We build demand generation systems that make your revenue predictable — by creating the awareness, interest, and intent that sales teams need to close deals consistently.
              </p>
              <div className="flex flex-wrap items-center gap-4" style={fadeIn(480)}>
                <MagneticCTA href="/contact">Build My Pipeline →</MagneticCTA>
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
                  &quot;Within 90 days, Social Manch had filled our pipeline with more qualified leads than our entire previous year of outbound. The quality was night and day.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8456A]/20 flex items-center justify-center text-[#E8456A] font-semibold text-xs">RV</div>
                  <div>
                    <p className="text-xs font-semibold text-black">Rahul Verma</p>
                    <p className="text-[10px] text-gray-400">VP Sales, CloudBridge SaaS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div ref={whatWeDoLeftRef} style={whatWeDoLeftStyle}>
              <SectionLabel color="#E8456A">✦ What We Do</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-normal text-black leading-snug">
                Predictable pipeline is an engineering problem, not a luck problem.
              </h2>
            </div>
            <div ref={whatWeDoRightRef} style={whatWeDoRightStyle} className="space-y-5 pt-1">
              <p className="text-gray-500 text-sm leading-relaxed">Most companies treat demand generation like a tap you turn on when pipeline runs dry. That&apos;s the wrong model. By the time you notice the dryness, you&apos;re already three months behind. The companies that win consistently treat pipeline as infrastructure — something you build, optimise, and maintain, not something you improvise.</p>
              <p className="text-gray-500 text-sm leading-relaxed">We design and run full-funnel demand generation programmes that create systematic awareness among your ideal buyers, nurture that awareness into intent, and hand your sales team a steady flow of genuinely qualified opportunities.</p>
              <p className="text-gray-500 text-sm leading-relaxed">The result is a marketing function that sales actually trusts — because the leads are real, the data is clean, and the system gets better every month.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={processLeftRef} style={processLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#7B5EA7">✦ Our Process</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Four steps from<br />invisible to<br /><em>in-demand</em>.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">A proven system that turns cold audiences into warm pipeline — and warm pipeline into closed revenue.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, i) => <StepCard key={step.number} step={step} index={i} />)}
            </div>
          </div>
        </Container>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="bg-[#1a1a1a] py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-[#E8456A] opacity-10 -top-20 -right-20 pointer-events-none" style={{ animation: "floatA 9s ease-in-out infinite" }} />
        <div className="absolute w-40 h-40 rounded-full bg-[#7B5EA7] opacity-10 bottom-0 left-10 pointer-events-none" style={{ animation: "floatB 11s ease-in-out infinite" }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={deliverablesLeftRef} style={deliverablesLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#E8456A">✦ What You Get</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-snug">
                Everything your pipeline needs to flow.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mt-4">Six integrated deliverables built to work as a single revenue system.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item, i) => <DeliverableCard key={item.title} item={item} index={i} />)}
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={whoItsForLeftRef} style={whoItsForLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#F4A432">✦ Who It&apos;s For</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                For teams tired of crossing their fingers at end of quarter.
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "Series A–B SaaS", color: "#E8456A", description: "You've found product-market fit and now need to scale acquisition without burning through your runway on ads that don&apos;t convert. We build efficient demand engines that grow with your ARR targets." },
                { label: "B2B Services", color: "#7B5EA7", description: "You&apos;re tired of depending entirely on referrals and want a repeatable inbound motion. We create the campaigns and content that put you in front of decision-makers before they&apos;re talking to your competitors." },
                { label: "Sales-Led Companies", color: "#2BB5A0", description: "Your sales team is excellent but they&apos;re spending too much time hunting cold. We warm up the market so your reps spend their time closing, not prospecting." },
              ].map((item, i) => (
                <WhoItem key={item.label} item={item} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={faqLeftRef} style={faqLeftStyle} className="lg:sticky lg:top-28">
              <SectionLabel color="#E8456A">✦ FAQ</SectionLabel>
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

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div className="absolute w-72 h-72 rounded-full bg-[#E8456A] opacity-15 -top-20 -right-20 pointer-events-none" style={{ animation: "floatA 9s ease-in-out infinite" }} />
        <div className="absolute w-44 h-44 rounded-full bg-[#7B5EA7] opacity-15 -bottom-12 left-20 pointer-events-none" style={{ animation: "floatB 12s ease-in-out infinite" }} />
        <div className="absolute w-28 h-28 rounded-full bg-[#F4A432] opacity-15 top-12 left-48 pointer-events-none" style={{ animation: "floatA 7s ease-in-out infinite reverse" }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left */}
            <div ref={ctaLeftRef} style={ctaLeftStyle}>
              <p className="text-[#E8456A] text-[11px] font-semibold tracking-widest uppercase mb-5">✦ Ready to Fill Your Pipeline</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal italic text-white mb-6 leading-tight">
                Let&apos;s build a pipeline<br />your sales team<br />will actually love.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                Our demand generation retainers are built to fill your pipeline with qualified leads and turn that flow into a system your sales team can count on.
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
                      "ICP & Buyer Journey Map",
                      "Full-Funnel Campaign Plan",
                      "Ad Creative & Copy",
                      "Landing Page Build",
                      "Lead Nurture Sequences",
                      "Live Performance Dashboard",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                        <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]" style={{ backgroundColor: "#E8456A", color: "white" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-6 flex items-end justify-between">
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Engagement</p>
                      <p className="font-serif text-3xl text-white">Tailored to You</p>
                    </div>
                    <p className="text-white/30 text-xs">Excl. ad spend</p>
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

export default DemandGenerationPage;