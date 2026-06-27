"use client";

import { useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { label: "Brands grown", value: "120+" },
  { label: "Average pipeline lift", value: "3.4×" },
  { label: "Time to first results", value: "90 days" },
];

const filterOptions = ["All stages", "Startups", "Mid-Market", "Enterprise"];

const useCases = [
  {
    tag: "Startups",
    emoji: "🚀",
    label: "Early-Stage & Founders",
    headline: "You have a product. Now you need a market.",
    description:
      "You're moving fast, budgets are lean, and every rupee needs to work. We help early-stage founders cut through the noise with sharp positioning, demand-generation engines, and content that converts — so you stop guessing and start growing.",
    points: [
      { icon: "🎯", text: "Define your brand positioning before the market defines it for you" },
      { icon: "⚡", text: "Build lead generation systems that work without a full sales team" },
      { icon: "✍️", text: "Create content that earns trust at scale" },
    ],
    accentColor: "#C8881A",
    accentBg: "#FDF3E3",
    accentBorder: "border-l-[#C8881A]",
    accentText: "text-[#C8881A]",
    accentPillBg: "bg-[#FDF3E3]",
    accentPillText: "text-[#C8881A]",
    accentIconBg: "bg-[#FDF3E3]",
    accentBtn: "border-[#C8881A] text-[#C8881A] hover:bg-[#C8881A] hover:text-white",
  },
  {
    tag: "Mid-Market",
    emoji: "📈",
    label: "Growth-Stage Companies",
    headline: "You've proven the model. Now you need to accelerate it.",
    description:
      "You're past survival mode — but growth has plateaued, or the pipeline isn't predictable enough. We embed with your team to fix what's broken, fill what's missing, and build a marketing engine that scales with your ambition.",
    points: [
      { icon: "🔍", text: "Audit and restructure your demand generation funnel" },
      { icon: "🤝", text: "Align marketing directly with sales pipeline and revenue targets" },
      { icon: "📣", text: "Launch multi-channel campaigns that generate MQLs consistently" },
    ],
    accentColor: "#00A896",
    accentBg: "#E6F8F6",
    accentBorder: "border-l-[#00A896]",
    accentText: "text-[#00A896]",
    accentPillBg: "bg-[#E6F8F6]",
    accentPillText: "text-[#00A896]",
    accentIconBg: "bg-[#E6F8F6]",
    accentBtn: "border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white",
  },
  {
    tag: "Enterprise",
    emoji: "🏢",
    label: "Enterprise & Leadership Teams",
    headline: "You have the brand. Now you need the edge.",
    description:
      "Large organisations face a different problem — not visibility, but relevance, efficiency, and internal alignment. We work with leadership teams to sharpen strategy, modernise marketing operations, and drive digital transformation that sticks.",
    points: [
      { icon: "🧠", text: "Advise CXOs on marketing strategy and operating model design" },
      { icon: "📐", text: "Build governance frameworks that bring consistency across markets" },
      { icon: "🌐", text: "Drive digital capability-building that supports long-term growth" },
    ],
    accentColor: "#7C3AED",
    accentBg: "#F3EEFE",
    accentBorder: "border-l-[#7C3AED]",
    accentText: "text-[#7C3AED]",
    accentPillBg: "bg-[#F3EEFE]",
    accentPillText: "text-[#7C3AED]",
    accentIconBg: "bg-[#F3EEFE]",
    accentBtn: "border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We spend 30 minutes understanding your business, your goals, and the gaps holding you back. No fluff, just real conversation.",
    numberClass: "text-[#C8881A]",
    barClass: "bg-[#C8881A]",
  },
  {
    number: "02",
    title: "Growth Audit",
    description:
      "We map your current marketing ecosystem — what's working, what's broken, and what's missing entirely. Delivered in 5 business days.",
    numberClass: "text-[#00A896]",
    barClass: "bg-[#00A896]",
  },
  {
    number: "03",
    title: "Strategy Blueprint",
    description:
      "A clear 90-day roadmap with prioritised actions, channel recommendations, and measurable milestones tailored to your stage.",
    numberClass: "text-[#7C3AED]",
    barClass: "bg-[#7C3AED]",
  },
  {
    number: "04",
    title: "Execution & Scale",
    description:
      "We roll up our sleeves. Whether we're embedded in your team or running campaigns independently, we move with urgency.",
    numberClass: "text-[#C8881A]",
    barClass: "bg-[#C8881A]",
  },
];

const testimonials = [
  {
    quote:
      "They didn't just give us a marketing plan — they gave us a growth engine. Within 60 days, our MQL volume doubled.",
    name: "Arjun Mehta",
    role: "Co-founder, Fintech Startup",
    initials: "AM",
    avatarBgClass: "bg-[#C8881A]",
  },
  {
    quote:
      "The audit alone was worth it. They identified three funnel leaks we'd been ignoring for over a year. Game-changer.",
    name: "Priya Sharma",
    role: "VP Marketing, SaaS Scale-up",
    initials: "PS",
    avatarBgClass: "bg-[#00A896]",
  },
  {
    quote:
      "As a CXO, I needed someone who could speak both strategy and execution. Rare combination — and they delivered.",
    name: "Vikram Nair",
    role: "CMO, Enterprise Group",
    initials: "VN",
    avatarBgClass: "bg-[#7C3AED]",
  },
];

const faqs = [
  {
    q: "Do you work with businesses outside India?",
    a: "Yes — we work with B2B companies across South Asia, the Middle East, and Southeast Asia. Time zones are no barrier.",
  },
  {
    q: "How quickly do engagements start?",
    a: "After the discovery call, most engagements begin within 2 weeks. We keep onboarding lean so momentum starts early.",
  },
  {
    q: "Can we start small and scale up?",
    a: "Absolutely. Many clients begin with a Growth Audit and then move into full-retainer partnerships once they see the value.",
  },
  {
    q: "What industries do you specialise in?",
    a: "We have deep expertise in B2B SaaS, fintech, professional services, and technology. But our frameworks apply across sectors.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

const UseCasesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All stages");

  const filteredUseCases =
    activeFilter === "All stages"
      ? useCases
      : useCases.filter((uc) => uc.tag === activeFilter);

  return (
    <main className="min-h-screen bg-[#F0EDE6] text-[#1A1A1A]">

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 pt-20 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — heading */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-medium text-gray-500 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8881A]" />
              Use Cases
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] text-black">
              Built for Every
              <br />
              Stage of <em className="italic text-[#00A896]">Growth</em>
            </h1>
          </div>

          {/* Right — description + stats */}
          <div>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Whether you&apos;re finding your first customers or scaling to your next
              hundred — we build the marketing system that gets you there.
            </p>
            <div className="flex flex-col gap-3">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between rounded-xl border border-black/10 bg-[#F5F3EE] px-6 py-4"
                >
                  <span className="text-sm text-gray-500">{s.label}</span>
                  <span className="text-xl font-semibold text-black">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Filter pills ── */}
        <div className="mt-14 flex flex-wrap gap-3">
          {filterOptions.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${activeFilter === f
                  ? "border-black text-black bg-white"
                  : "border-black/15 text-gray-500 bg-white hover:border-black/40 hover:text-black"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Use Case Cards ── */}
        <div className="mt-8 flex flex-col gap-5 pb-16">
          {filteredUseCases.map((uc) => (
            <div
              key={uc.tag}
              className={`rounded-2xl border border-black/10 bg-white overflow-hidden border-l-4 ${uc.accentBorder}`}
            >
              {/* Card grid: left meta | right content */}
              <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-black/8">

                {/* ── Left: identity column ── */}
                <div className="flex lg:flex-col items-start gap-4 px-6 py-6 lg:py-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">{uc.emoji}</span>
                    <div className="flex flex-col gap-1.5">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${uc.accentPillBg} ${uc.accentPillText}`}
                      >
                        {uc.tag}
                      </span>
                      <span className="text-xs text-gray-400">{uc.label}</span>
                    </div>
                  </div>

                  {/* Headline visible only on left column for lg+ */}
                  <h3 className={`hidden lg:block font-serif text-xl text-black leading-snug mt-2 ${uc.accentText} opacity-90`}>
                    {uc.headline}
                  </h3>
                </div>

                {/* ── Right: content column ── */}
                <div className="px-6 py-6 lg:py-8">
                  {/* Headline for mobile (shown above description) */}
                  <h3 className="lg:hidden font-serif text-xl text-black leading-snug mb-4">
                    {uc.headline}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-2xl">
                    {uc.description}
                  </p>

                  <ul className="flex flex-col gap-3 mb-6">
                    {uc.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm ${uc.accentIconBg}`}
                        >
                          {pt.icon}
                        </span>
                        <span className="text-sm text-gray-700 leading-relaxed pt-0.5">
                          {pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-black/8">
                    <a
                      href="/contact"
                      className={`inline-flex items-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition-colors ${uc.accentBtn}`}
                    >
                      Get Started →
                    </a>
                    <a
                      href="/case-studies"
                      className="text-sm text-gray-400 underline underline-offset-4 hover:text-gray-600 transition-colors"
                    >
                      See case studies
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="bg-[#1A1A1A] py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section header: left label | right heading */}
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/50 mb-5">
                ✦ Our Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                From discovery to <em className="italic text-[#C8881A]">results</em>
              </h2>
            </div>
            <p className="text-white/45 text-sm lg:text-base leading-relaxed lg:max-w-sm lg:ml-auto">
              A proven four-step process that moves fast without cutting corners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <span className={`font-serif text-3xl mb-4 ${step.numberClass}`}>
                  {step.number}
                </span>
                <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed flex-1">
                  {step.description}
                </p>
                <div className={`mt-5 h-0.5 w-8 rounded-full opacity-60 ${step.barClass}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-6 bg-[#F0EDE6]">
        <div className="max-w-6xl mx-auto">

          {/* Section header: left label | right heading */}
          <div className="grid lg:grid-cols-2 gap-6 items-end mb-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-medium text-gray-500 mb-5">
                ✦ Client Stories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-black leading-tight">
                What our clients say
              </h2>
            </div>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed lg:max-w-sm lg:ml-auto">
              Real results from real companies at every stage of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span className="font-serif text-5xl text-black/10 leading-none mb-2">
                  &quot;
                </span>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#F0EDE6]">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${t.avatarBgClass}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Section header: left heading | right FAQs */}
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

            {/* Left sticky label */}
            <div className="lg:sticky lg:top-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-[#F0EDE6] px-4 py-2 text-xs font-medium text-gray-500 mb-5">
                ✦ FAQs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-black leading-tight">
                Common questions
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4 max-w-xs">
                Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll get back to you within one business day.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-black border-b border-black/20 pb-0.5 hover:border-black transition-colors"
              >
                Ask us directly →
              </a>
            </div>

            {/* Right FAQ list */}
            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <details key={i} className="group border-b border-[#F0EDE6]">
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden marker:hidden">
                    <span className="font-semibold text-sm sm:text-base text-black">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-black/20 flex items-center justify-center text-gray-400 text-sm transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="border-t border-black/10 bg-[#F0EDE6] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-black mb-2">
              Not sure where you fit?
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Let&apos;s figure it out together — no sales pitch, just a conversation.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 flex-shrink-0 rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black hover:border-black hover:bg-black hover:text-white transition-colors"
          >
            Work with us →
          </a>
        </div>
      </section>

    </main>
  );
};

export default UseCasesPage;