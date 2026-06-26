"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface Service {
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

interface Metric {
  value: string;
  label: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    number: "01",
    title: "List Building & Segmentation",
    description:
      "A big list of the wrong people is worse than a small list of the right ones. We build your subscriber base through high-intent capture points and segment it by behaviour, lifecycle stage, and purchase history from day one.",
    color: "#E8456A",
  },
  {
    number: "02",
    title: "Welcome & Onboarding Flows",
    description:
      "The first 7 days after someone subscribes are the most valuable in their lifecycle. We design onboarding sequences that establish trust, communicate your value clearly, and move new subscribers toward their first meaningful action.",
    color: "#7B5EA7",
  },
  {
    number: "03",
    title: "Nurture & Broadcast Campaigns",
    description:
      "Ongoing email that your subscribers actually want to open — a mix of educational content, curated value, and perfectly timed offers. We plan, write, design, and send every campaign, then report on what it produced.",
    color: "#2BB5A0",
  },
  {
    number: "04",
    title: "Retention & Win-Back Sequences",
    description:
      "Acquiring a new customer costs five times more than keeping one. We build post-purchase sequences, loyalty flows, and win-back campaigns that maximise the lifetime value of every customer who's already chosen you.",
    color: "#F4A432",
  },
];

const deliverables: Deliverable[] = [
  {
    icon: "🗂️",
    title: "List Audit & Segmentation Map",
    description:
      "A full health check of your existing list — deliverability score, engagement rate by segment, suppression recommendations — and a new segmentation architecture built around how your customers actually behave.",
  },
  {
    icon: "✉️",
    title: "Welcome Series (5–7 emails)",
    description:
      "A fully written and designed onboarding sequence that activates new subscribers, communicates your core value proposition, and guides them toward their first conversion — automatically.",
  },
  {
    icon: "📅",
    title: "Monthly Broadcast Calendar",
    description:
      "A 30-day rolling email calendar with campaign briefs, send dates, audience segments, and subject line variants — planned, written, designed, and scheduled by our team.",
  },
  {
    icon: "🔁",
    title: "Automation Flow Build",
    description:
      "Triggered sequences built in your ESP — abandoned cart, post-purchase, browse abandonment, re-engagement — with logic trees, wait conditions, and exit criteria set up correctly.",
  },
  {
    icon: "🧪",
    title: "A/B Testing Programme",
    description:
      "Systematic subject line, send time, CTA, and content testing — with a test log, statistical significance checks, and a running record of what we've learned about your audience.",
  },
  {
    icon: "📊",
    title: "Monthly Email Report",
    description:
      "Open rate, click rate, revenue attributed, unsubscribe rate, and deliverability score — tracked over time so we can show you the trend, not just the snapshot.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Which email platforms do you work with?",
    answer:
      "We work across Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and Brevo. If you're on a different platform, tell us — we've likely worked with it or can learn it fast. Platform migration is also something we handle if you're stuck on a tool that's holding you back.",
  },
  {
    question: "Our list is small. Is email marketing worth it yet?",
    answer:
      "Yes — and it's actually the best time to start. Building the right habits and infrastructure on a small list is far easier than fixing a broken setup on a large one. Many of our best-performing clients started working with us at under 2,000 subscribers. The list grows faster when the fundamentals are right.",
  },
  {
    question: "How do you handle deliverability?",
    answer:
      "We audit your domain authentication (SPF, DKIM, DMARC), warm up new sending infrastructure properly, monitor your sender reputation monthly, and maintain a strict suppression hygiene process. Deliverability isn't an afterthought — it's the foundation everything else sits on.",
  },
  {
    question: "Do you write the emails or do we?",
    answer:
      "We write everything unless you specifically want to be involved in copy. We'll do a brand voice onboarding session in week one — covering tone, vocabulary, things you never say — and then produce copy that sounds like you wrote it on your best day.",
  },
  {
    question: "How do you measure email's contribution to revenue?",
    answer:
      "We set up revenue attribution in your ESP and connect it to your e-commerce platform or CRM. Every campaign and automation is tracked for direct revenue, assisted revenue, and pipeline influence. We report on all three so you have a complete picture of what email is actually worth.",
  },
];

const stats: Metric[] = [
  { value: "38×", label: "Avg. email marketing ROI" },
  { value: "61%", label: "Avg. open rate improvement" },
  { value: "₹180", label: "Avg. revenue per subscriber/yr" },
  { value: "14d", label: "Avg. to first automation live" },
];

const proofStats = [
  { value: "71%", label: "Average open rate achieved for a B2B SaaS client — industry average is 21%", color: "#E8456A" },
  { value: "4.6×", label: "Revenue attributed to email vs same period previous year for a D2C fashion brand", color: "#7B5EA7" },
  { value: "−34%", label: "Unsubscribe rate reduction after list hygiene and resegmentation", color: "#2BB5A0" },
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
    className={`w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 ${className}`}
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
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.3
      }px)`;
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

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
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
            boxShadow: `0 16px 40px ${service.color}20`,
          }
          : reveal.style
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-2xl p-6 border border-black/[0.06] transition-all duration-300 cursor-default overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-300"
        style={{ backgroundColor: service.color, opacity: hovered ? 1 : 0.4 }}
      />
      <span
        className="text-[11px] font-bold tracking-widest mb-3 block"
        style={{ color: service.color }}
      >
        {service.number}
      </span>
      <h3 className="font-serif text-lg font-normal text-black mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
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

const EmailMarketingPage = () => {
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

  // Section reveal hooks — all at top level, no IIFEs
  const whatWeDoLeft = useReveal(0);
  const whatWeDoRight = useReveal(120);
  const servicesLeft = useReveal(0);
  const deliverablesLeft = useReveal(0);
  const proofLeft = useReveal(0);
  const whoLeft = useReveal(0);
  const faqLeft = useReveal(0);
  const ctaLeft = useReveal(0);
  const ctaRight = useReveal(150);

  // "Who it's for" rows
  const whoReveal0 = useReveal(0);
  const whoReveal1 = useReveal(100);
  const whoReveal2 = useReveal(200);
  const whoReveals = [whoReveal0, whoReveal1, whoReveal2];

  const whoItems = [
    {
      label: "E-commerce & D2C",
      color: "#E8456A",
      description:
        "Email is the highest-ROI channel available to you, and most e-commerce brands are leaving 30–40% of their potential revenue on the table through weak automations and inconsistent broadcast campaigns. We fix that.",
    },
    {
      label: "SaaS & Subscriptions",
      color: "#7B5EA7",
      description:
        "Churn is expensive. Onboarding emails that activate users, lifecycle campaigns that surface features at the right moment, and win-back sequences that recover cancelled accounts — all of it compounds into measurable retention improvement.",
    },
    {
      label: "Agencies & Consultants",
      color: "#2BB5A0",
      description:
        "Your expertise is what clients pay for. Let us handle the email infrastructure — the nurture sequences, the newsletter, the post-project follow-ups — so your name stays front of mind without you lifting a finger.",
    },
  ];

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
                    <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                  Our Services
                </span>
              </div>

              <h1
                className="font-serif text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-black leading-[1.0] mb-6"
                style={fadeIn(200)}
              >
                Email that people<br />
                <em className="not-italic" style={{ color: "#E8456A" }}>
                  actually open
                </em>
                <br />
                — and act on.
              </h1>

              <p
                className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10"
                style={fadeIn(350)}
              >
                Email is still the highest-ROI channel in digital marketing. The
                problem isn't the channel — it's how most businesses use it. Batch-and-blast
                campaigns, generic copy, and zero segmentation turn a 38× ROI tool
                into a cost centre. We build email programmes that your subscribers
                look forward to, that your ESP loves to deliver, and that your finance
                team can actually justify.
              </p>

              <div className="flex flex-wrap items-center gap-4" style={fadeIn(480)}>
                <MagneticCTA href="/contact">Audit My Email →</MagneticCTA>
                <a
                  href="#services"
                  className="text-[11px] font-semibold tracking-widest uppercase text-black border-b border-black/30 pb-0.5 hover:border-black transition-all duration-200"
                >
                  See What We Build ↓
                </a>
              </div>
            </div>

            {/* Right — stats + testimonial */}
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
                    <span key={i} style={{ color: "#F4A432", fontSize: "14px" }}>★</span>
                  ))}
                </div>
                <p className="font-serif text-sm text-black leading-relaxed mb-4">
                  "Our welcome sequence was three generic emails that went nowhere.
                  Social Manch rebuilt it from scratch — our trial-to-paid conversion
                  went up 28% in the first month."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0"
                    style={{ backgroundColor: "#E8456A20", color: "#E8456A" }}
                  >
                    SK
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-black">Siddharth Kumar</p>
                    <p className="text-[10px] text-gray-400">CEO, Stackform</p>
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
                Most email programmes fail before the first send.
              </h2>
            </div>
            <div
              ref={whatWeDoRight.ref}
              style={whatWeDoRight.style}
              className="space-y-5 pt-1"
            >
              <p className="text-gray-500 text-sm leading-relaxed">
                The failure usually isn't the copy or the design — it's the
                infrastructure. A list that's never been cleaned. Segments that don't
                reflect how customers actually behave. Automations built on guesswork
                rather than real lifecycle data. A sender reputation that's been
                quietly degrading for months.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We start every engagement with a full audit — deliverability, list
                health, automation logic, campaign performance — before we write a
                single word of copy. Because the best email in the world doesn't
                matter if it lands in spam.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Once the foundations are right, we build the campaigns, automations,
                and sequences that turn your list from a cost line into a revenue
                channel — and keep it that way.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="border-t border-black/10 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div ref={servicesLeft.ref} style={servicesLeft.style} className="lg:sticky lg:top-28">
              <SectionLabel color="#7B5EA7">✦ What We Build</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Every stage of<br />the lifecycle,<br />
                <em>covered.</em>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                From the moment someone subscribes to the moment they become your
                most loyal customer — we build the email infrastructure that moves
                them through every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <ServiceCard key={service.number} service={service} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── DELIVERABLES (dark section) ── */}
      <section className="bg-[#1a1a1a] py-16 sm:py-24 relative overflow-hidden">
        <div
          className="absolute w-64 h-64 rounded-full bg-[#E8456A] opacity-10 -top-20 -right-20 pointer-events-none"
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
              <SectionLabel color="#E8456A">✦ What You Get</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-snug">
                Six deliverables.<br />One email engine.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mt-4">
                Everything built, maintained, and improved by our team — so you get
                the results without the operational overhead.
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
            <div ref={proofLeft.ref} style={proofLeft.style} className="lg:sticky lg:top-28">
              <SectionLabel color="#F4A432">✦ Proof</SectionLabel>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-snug">
                Results from<br />real inboxes,<br />
                <em>real people.</em>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                Numbers from clients we've worked with for over 6 months. Available
                to discuss on a call — no anonymised aggregates.
              </p>
            </div>

            <div className="space-y-4">
              {proofStats.map((r) => (
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
              ))}

              {/* Testimonial */}
              <div className="bg-white rounded-2xl p-7 border border-black/[0.06]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#F4A432", fontSize: "14px" }}>★</span>
                  ))}
                </div>
                <p className="font-serif text-base text-black leading-relaxed mb-5">
                  "I thought our email list was a liability — low engagement, high
                  unsubscribes, barely any revenue. Six months later it's our
                  second-highest revenue channel. The list didn't change. The
                  strategy did."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                    style={{ backgroundColor: "#F4A43220", color: "#F4A432" }}
                  >
                    NR
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-black">Neha Rastogi</p>
                    <p className="text-[10px] text-gray-400">Co-founder, Orka Skincare</p>
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
                For anyone with a list they're not making the most of.
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
                    style={{ backgroundColor: item.color + "18", color: item.color }}
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
          className="absolute w-72 h-72 rounded-full bg-[#E8456A] opacity-15 -top-20 -right-20 pointer-events-none"
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
              <p className="text-[#E8456A] text-[11px] font-semibold tracking-widest uppercase mb-5">
                ✦ Ready to Turn Your List Into Revenue
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal italic text-white mb-6 leading-tight">
                Your list is an asset.<br />
                Let's start treating<br />
                it like one.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                We'll audit
                your current setup for free before you commit — so you know exactly
                what you're getting and what it's likely to produce.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <MagneticCTA href="/contact" dark>
                  Get a Free Audit →
                </MagneticCTA>
                <a
                  href="/pricing"
                  className="text-[11px] font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200 border-b border-white/20 pb-0.5"
                >
                  View Pricing
                </a>
              </div>
            </div>

            {/* Tier cards */}
            <div
              ref={ctaRight.ref}
              style={ctaRight.style}
              className="bg-white/8 border border-white/10 rounded-3xl p-8 space-y-4"
            >
              <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-6">
                Choose your plan
              </p>

              {[
                {
                  name: "Starter",
                  description: "Perfect for startups and small businesses looking to establish their online presence.",
                  cta: "Get a Quote",
                },
                {
                  name: "Growth",
                  description: "Designed for growing brands that need consistent marketing and measurable results.",
                  cta: "Schedule a Consultation",
                },
                {
                  name: "Enterprise",
                  description: "Fully customized solutions for organizations with complex business requirements.",
                  cta: "Request a Proposal",
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-start justify-between gap-4 border border-white/10 rounded-2xl p-5"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold mb-1">{tier.name}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{tier.description}</p>
                  </div>
                  <a
                    href="/contact"
                    className="flex-shrink-0 text-[10px] font-semibold tracking-widest uppercase text-white border border-white/20 rounded-full px-4 py-2 hover:bg-white hover:text-[#1a1a1a] transition-all duration-200 whitespace-nowrap"
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
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
    </main >
  );
};

export default EmailMarketingPage;