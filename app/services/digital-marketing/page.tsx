"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface Channel {
  number: string;
  title: string;
  description: string;
  color: string;
}

interface Deliverable {
  icon: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CaseResult {
  value: string;
  label: string;
  color: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const channels: Channel[] = [
  {
    number: "01",
    title: "Search Engine Optimisation",
    description:
      "We audit your existing content, fix the technical foundations, and build a keyword strategy around the exact queries your buyers type when they're ready to act. Traffic that compounds — not campaigns you switch off.",
    color: "#E8456A",
  },
  {
    number: "02",
    title: "Paid Search & Shopping",
    description:
      "Google Ads managed with negative keyword discipline, Quality Score obsession, and bid strategies tuned for your margins — not for inflated click volume that looks good in a deck but doesn't close deals.",
    color: "#7B5EA7",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    description:
      "Platform-native content for LinkedIn, Instagram, and Meta — built around what each algorithm rewards. Organic reach built on consistency, paid amplification reserved for content that already proves itself.",
    color: "#2BB5A0",
  },
  {
    number: "04",
    title: "Email & Retention",
    description:
      "Segmented, behavioural email sequences that turn one-time buyers into repeat customers and dormant leads into active pipeline. Deliverability audited, subject lines tested, timing data-driven.",
    color: "#F4A432",
  },
];

const deliverables: Deliverable[] = [
  {
    icon: "🔍",
    title: "Full Digital Audit",
    description:
      "A forensic review of your current digital presence — SEO health, ad account structure, social performance, email metrics — with a prioritised fix list and quick-win playbook.",
  },
  {
    icon: "🗺️",
    title: "Channel Strategy Document",
    description:
      "A documented playbook covering which channels to invest in, in what order, at what budget, and why — built around your ICP and deal economics, not industry averages.",
  },
  {
    icon: "✍️",
    title: "Content & Copy Production",
    description:
      "Blog posts, ad copy, landing page copy, email sequences, and social content — all written in your brand voice and optimised for the platform it lives on.",
  },
  {
    icon: "⚙️",
    title: "Campaign Build & Setup",
    description:
      "Full ad account builds with proper campaign structure, tracking, audience segmentation, and conversion events set up correctly from day one.",
  },
  {
    icon: "📱",
    title: "Social Calendar & Publishing",
    description:
      "A 30-day rolling content calendar planned, designed, and published across your active channels — with engagement monitoring and community management included.",
  },
  {
    icon: "📈",
    title: "Monthly Performance Report",
    description:
      "A clear, jargon-free monthly report covering channel performance, budget pacing, wins, what we're changing next month, and what it's all worth to your business.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Do you manage all channels or can we pick and choose?",
    answer:
      "You can start with one channel and expand as results justify it. Most clients begin with either paid search or SEO depending on their timeline — paid for speed, SEO for compounding returns. We're honest about what fits your situation rather than selling you a full retainer you don't need yet.",
  },
  {
    question: "How do you measure success beyond vanity metrics?",
    answer:
      "We tie every channel to metrics that connect to your revenue — leads, MQLs, pipeline influenced, cost per acquisition, and return on ad spend. Impressions and follower counts appear in the report but we never lead with them. If it can't be traced to a business outcome, we flag it as a signal rather than a success.",
  },
  {
    question: "What's your minimum engagement period?",
    answer:
      "We ask for a 3-month initial commitment. Digital channels need time to gather data, test hypotheses, and optimise — campaigns that are judged at 30 days almost always look worse than they'll perform at 90. After the initial term, contracts roll monthly.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. We work with clients across India, Southeast Asia, and the UK. Paid media is managed in your local currency and ad platforms. SEO and content work is language-agnostic. Timezone overlap is something we discuss upfront so reporting and reviews happen at a sensible time for both sides.",
  },
  {
    question: "How much of the work is done in-house vs outsourced?",
    answer:
      "Strategy, account management, and reporting are always in-house. Content production, design, and video are a mix — some in-house, some through a small network of trusted specialists we've worked with for years. We never white-label offshore production without your knowledge.",
  },
];

const stats = [
  { value: "4.1×", label: "Avg. ROAS for paid clients" },
  { value: "68%", label: "Avg. organic traffic growth" },
  { value: "₹210", label: "Avg. cost per lead" },
  { value: "90d", label: "Avg. to meaningful results" },
];

const caseResults: CaseResult[] = [
  { value: "+340%", label: "Organic sessions in 6 months", color: "#E8456A" },
  { value: "2.9×", label: "Return on ad spend", color: "#7B5EA7" },
  { value: "−52%", label: "Cost per lead vs previous agency", color: "#2BB5A0" },
];

const dotColors = ["#5B4FCF", "#2BB5A0", "#F4A432", "#E8456A", "#5BBF5B"];

// ─── Shared components ─────────────────────────────────────────────────────────

const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 ${className}`}
  >
    {children}
  </div>
);

const useReveal = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
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

const MagneticCTA = ({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase px-6 py-3 rounded-full border transition-all duration-200 ${dark
          ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
          : "bg-black text-white border-black hover:bg-transparent hover:text-black"
        }`}
      style={{ transition: "transform 0.15s ease, background 0.2s, color 0.2s" }}
    >
      {children}
    </a>
  );
};

const SectionLabel = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => (
  <span
    className="text-[11px] font-semibold tracking-widest uppercase mb-4 block"
    style={{ color }}
  >
    {children}
  </span>
);

// ─── Section-specific components ───────────────────────────────────────────────

const ChannelCard = ({ channel, index }: { channel: Channel; index: number }) => {
  const reveal = useReveal(index * 100);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={reveal.ref}
      style={
        hovered
          ? {
            ...reveal.style,
            transform: "translateY(-4px)",
            boxShadow: `0 16px 40px ${channel.color}20`,
          }
          : reveal.style
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-2xl p-6 border border-black/[0.06] transition-all duration-300 cursor-default overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-300"
        style={{ backgroundColor: channel.color, opacity: hovered ? 1 : 0.4 }}
      />
      <span
        className="text-[11px] font-bold tracking-widest mb-3 block"
        style={{ color: channel.color }}
      >
        {channel.number}
      </span>
      <h3 className="font-serif text-lg font-normal text-black mb-2 leading-snug">
        {channel.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{channel.description}</p>
    </div>
  );
};

const DeliverableCard = ({
  item,
  index,
}: {
  item: Deliverable;
  index: number;
}) => {
  const reveal = useReveal(index * 80);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={reveal.ref}
      style={
        hovered
          ? {
            ...reveal.style,
            backgroundColor: "rgba(255,255,255,0.15)",
            transform: "translateY(-3px)",
          }
          : reveal.style
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white/10 rounded-2xl p-5 border border-white/10 transition-all duration-300"
    >
      <span className="text-2xl mb-3 block">{item.icon}</span>
      <h4 className="font-serif text-base font-normal text-white mb-2">
        {item.title}
      </h4>
      <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

const FAQItem = ({ faq, index }: { faq: FAQ; index: number }) => {
  const [open, setOpen] = useState(false);
  const reveal = useReveal(index * 80);
  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      className="border-b border-black/10 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-serif text-base sm:text-lg font-normal text-black leading-snug group-hover:text-gray-600 transition-colors duration-200">
          {faq.question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-black/15 flex items-center justify-center text-sm transition-all duration-300"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            backgroundColor: open ? "#1a1a1a" : "transparent",
            color: open ? "white" : "#1a1a1a",
          }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden"
        style={{
          maxHeight: open ? "300px" : "0px",
          transition: "max-height 0.4s ease",
        }}
      >
        <p className="text-gray-500 text-sm leading-relaxed pb-5 pr-10">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

const DigitalMarketingPage = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeIn = (delay: number) => ({
    opacity: titleVisible ? 1 : 0,
    transform: titleVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  // Standalone reveal hooks for sections that previously used IIFEs
  const whatWeDoLeft = useReveal(0);
  const whatWeDoRight = useReveal(120);
  const channelsLeft = useReveal(0);
  const deliverablesLeft = useReveal(0);
  const proofLeft = useReveal(0);
  const whoLeft = useReveal(0);
  const faqLeft = useReveal(0);
  const ctaLeft = useReveal(0);
  const ctaRight = useReveal(150);

  const whoItems = [
    {
      label: "E-commerce & D2C",
      color: "#E8456A",
      description:
        "You have a product that sells online and you need more of the right traffic — not just more traffic. We build paid and organic acquisition that scales revenue without proportionally scaling your ad spend.",
    },
    {
      label: "B2B SaaS & Services",
      color: "#7B5EA7",
      description:
        "Long sales cycles mean your digital marketing has to do heavy lifting early — building brand awareness and intent before sales ever gets involved. We design the full-funnel motion that makes that happen.",
    },
    {
      label: "Local & Regional Businesses",
      color: "#2BB5A0",
      description:
        "You know your market well. We help you dominate it digitally — with local SEO, hyper-targeted paid campaigns, and social content that actually reflects how your customers talk about you.",
    },
  ];

  const whoReveal0 = useReveal(0);
  const whoReveal1 = useReveal(100);
  const whoReveal2 = useReveal(200);
  const whoReveals = [whoReveal0, whoReveal1, whoReveal2];

  return (
    <main className="bg-[#F5F0E8] min-h-screen pt-[72px] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-10 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6" style={fadeIn(100)}>
                <div className="flex gap-1.5">
                  {dotColors.map((c, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                  Our Services
                </span>
              </div>

              <h1
                className="font-serif text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-black leading-[1.0] mb-6"
                style={fadeIn(200)}
              >
                Visibility that<br />
                <em className="not-italic" style={{ color: "#2BB5A0" }}>
                  converts,
                </em>
                <br />
                not just impresses.
              </h1>

              <p
                className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10"
                style={fadeIn(350)}
              >
                Most digital marketing looks busy and proves very little. We build
                channel strategies that are tied to revenue outcomes from day one —
                whether that's paid search, SEO, social, or email. No vanity metrics.
                No bloated retainers. Just clear-eyed work that earns its place in
                your budget every month.
              </p>

              <div
                className="flex flex-wrap items-center gap-4"
                style={fadeIn(480)}
              >
                <MagneticCTA href="/contact">Get a Free Audit →</MagneticCTA>
                <a
                  href="#channels"
                  className="text-[11px] font-semibold tracking-widest uppercase text-black border-b border-black/30 pb-0.5 hover:border-black transition-all duration-200"
                >
                  See Our Channels ↓
                </a>
              </div>
            </div>

            {/* Right — stats panel */}
            <div
              className="bg-white rounded-3xl p-8 border border-black/[0.06]"
              style={fadeIn(300)}
            >
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="bg-[#F5F0E8] rounded-2xl p-5">
                    <p className="font-serif text-3xl font-normal text-black mb-1">
                      {s.value}
                    </p>
                    <p className="text-[10px] font-medium tracking-widest uppercase text-gray-400">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-black/8 pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#F4A432", fontSize: "14px" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-serif text-sm text-black leading-relaxed mb-4">
                  "Social Manch took our Google Ads account from a money pit to our
                  highest-performing acquisition channel in four months. The
                  transparency alone was worth it."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2BB5A0]/20 flex items-center justify-center text-[#2BB5A0] font-semibold text-xs">
                    PK
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-black">Priya Kapoor</p>
                    <p className="text-[10px] text-gray-400">
                      Head of Growth, NestKart
                    </p>
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
            <div ref={whatWeDoLeft.ref} style={whatWeDoLeft.style}>
              <SectionLabel color="#E8456A">✦ What We Do</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-normal text-black leading-snug">
                Digital channels are a tool. We treat them like one.
              </h2>
            </div>
            <div
              ref={whatWeDoRight.ref}
              style={whatWeDoRight.style}
              className="space-y-5 pt-1"
            >
              <p className="text-gray-500 text-sm leading-relaxed">
                The problem with most digital marketing agencies isn't the tactics —
                it's that the tactics are decoupled from your actual business goals.
                You get a report full of impressions and engagement rates, and a
                revenue number that hasn't moved.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We start with what you're trying to achieve — more leads, lower
                acquisition cost, higher repeat purchase rate — and build backwards
                from there. Every channel we recommend, every campaign we run, every
                piece of content we produce has a clear line to a business metric
                you care about.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                And when something isn't working, we tell you before the invoice
                arrives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CHANNELS ── */}
      <section id="channels" className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div
              ref={channelsLeft.ref}
              style={channelsLeft.style}
              className="lg:sticky lg:top-28"
            >
              <SectionLabel color="#7B5EA7">✦ Our Channels</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Four channels.<br />
                One coherent<br />
                <em>strategy.</em>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                We don't recommend channels because we're comfortable running them.
                We recommend the mix that fits your audience, budget, and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {channels.map((channel, i) => (
                <ChannelCard key={channel.number} channel={channel} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="bg-[#1a1a1a] py-16 sm:py-24 relative overflow-hidden">
        <div
          className="absolute w-64 h-64 rounded-full bg-[#2BB5A0] opacity-10 -top-20 -right-20 pointer-events-none"
          style={{ animation: "floatA 9s ease-in-out infinite" }}
        />
        <div
          className="absolute w-40 h-40 rounded-full bg-[#7B5EA7] opacity-10 bottom-0 left-10 pointer-events-none"
          style={{ animation: "floatB 11s ease-in-out infinite" }}
        />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div
              ref={deliverablesLeft.ref}
              style={deliverablesLeft.style}
              className="lg:sticky lg:top-28"
            >
              <SectionLabel color="#2BB5A0">✦ What You Get</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-snug">
                Six things that<br />move the needle.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mt-4">
                Six integrated deliverables built to work as a single growth system —
                not six separate line items.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item, i) => (
                <DeliverableCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROOF ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div
              ref={proofLeft.ref}
              style={proofLeft.style}
              className="lg:sticky lg:top-28"
            >
              <SectionLabel color="#F4A432">✦ Proof</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Numbers from<br />actual clients,<br />
                <em>not case studies.</em>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                Real results from a D2C brand we've worked with for 14 months. Available to discuss on a call.
              </p>
            </div>

            <div className="space-y-4">
              {caseResults.map((r, i) => {
                return (
                  <div
                    key={r.label}
                    className="bg-white rounded-2xl p-7 border border-black/[0.06] flex items-center gap-6"
                  >
                    <span
                      className="font-serif text-4xl sm:text-5xl font-normal flex-shrink-0"
                      style={{ color: r.color }}
                    >
                      {r.value}
                    </span>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.label}</p>
                  </div>
                );
              })}

              <div className="bg-white rounded-2xl p-7 border border-black/[0.06]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#F4A432", fontSize: "14px" }}>★</span>
                  ))}
                </div>
                <p className="font-serif text-base text-black leading-relaxed mb-5">
                  "Every other agency sent us a monthly report and asked us to trust
                  the process. Social Manch told us what was working, what wasn't,
                  and what they were doing about it — every single week."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                    style={{ backgroundColor: "#F4A43220", color: "#F4A432" }}
                  >
                    AM
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-black">Anjali Mehta</p>
                    <p className="text-[10px] text-gray-400">
                      Founder, The Label House
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={whoLeft.ref} style={whoLeft.style} className="lg:sticky lg:top-28">
              <SectionLabel color="#E8456A">✦ Who It's For</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                For businesses that are done settling for inconclusive results.
              </h2>
            </div>

            <div className="space-y-4">
              {whoItems.map((item, i) => (
                <div
                  key={item.label}
                  ref={whoReveals[i].ref}
                  style={whoReveals[i].style}
                  className="bg-white rounded-2xl p-6 border border-black/[0.06] flex gap-5 items-start"
                >
                  <span
                    className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mt-0.5 flex-shrink-0"
                    style={{
                      backgroundColor: item.color + "18",
                      color: item.color,
                    }}
                  >
                    {item.label}
                  </span>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={faqLeft.ref} style={faqLeft.style} className="lg:sticky lg:top-28">
              <SectionLabel color="#E8456A">✦ FAQ</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Questions<br />we always<br />get asked.
              </h2>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div
          className="absolute w-72 h-72 rounded-full bg-[#2BB5A0] opacity-15 -top-20 -right-20 pointer-events-none"
          style={{ animation: "floatA 9s ease-in-out infinite" }}
        />
        <div
          className="absolute w-44 h-44 rounded-full bg-[#7B5EA7] opacity-15 -bottom-12 left-20 pointer-events-none"
          style={{ animation: "floatB 12s ease-in-out infinite" }}
        />
        <div
          className="absolute w-28 h-28 rounded-full bg-[#F4A432] opacity-15 top-12 left-48 pointer-events-none"
          style={{ animation: "floatA 7s ease-in-out infinite reverse" }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div ref={ctaLeft.ref} style={ctaLeft.style}>
              <p className="text-[#2BB5A0] text-[11px] font-semibold tracking-widest uppercase mb-5">
                ✦ Ready to Grow
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal italic text-white mb-6 leading-tight">
                Let's make your<br />
                marketing budget<br />
                earn its keep.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                Digital marketing retainers start at ₹49,999/month, excluding ad
                spend. We'll tell you in the first call whether we think you'll see a
                return — and if we don't think you will, we won't take the project.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <MagneticCTA href="/contact" dark>
                  Start the Conversation →
                </MagneticCTA>
                <a
                  href="/pricing"
                  className="text-[11px] font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200 border-b border-white/20 pb-0.5"
                >
                  View Pricing
                </a>
              </div>
            </div>

            {/* Right — included card */}
            <div
              ref={ctaRight.ref}
              style={ctaRight.style}
              className="bg-white/8 border border-white/10 rounded-3xl p-8"
            >
              <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-6">
                What's included
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Full Digital Audit",
                  "Channel Strategy Document",
                  "Content & Copy Production",
                  "Campaign Build & Setup",
                  "Social Calendar & Publishing",
                  "Monthly Performance Report",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]"
                      style={{ backgroundColor: "#2BB5A0", color: "white" }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-6 flex items-end justify-between">
                <div>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">
                    Starting at
                  </p>
                  <p className="font-serif text-3xl text-white">
                    ₹49,999
                    <span className="text-white/40 text-base font-sans">/mo</span>
                  </p>
                </div>
                <p className="text-white/30 text-xs">Excl. ad spend</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style jsx global>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(14px) scale(0.96); }
        }
      `}</style>
    </main>
  );
};

export default DigitalMarketingPage;