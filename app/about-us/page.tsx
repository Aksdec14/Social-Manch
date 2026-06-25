'use client'

import React, { useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------ */
/*  Data — every word below is pulled verbatim from socialmanch's     */
/*  existing homepage copy. Nothing new has been invented.            */
/* ------------------------------------------------------------------ */

const stats = [
  { value: '95%', label: 'Complete Customer Satisfaction' },
  { value: '10+', label: 'Innovation and Valuable Insight' },
  { value: '10+', label: 'Years of Proven Excellence' },
  { value: '50M', label: 'Users Worldwide, Providing Them With' },
  { value: '200+', label: 'Brands Served' },
  { value: '10', label: 'Service Lines' },
  { value: '5×', label: 'Avg. ROI' },
]

const services = [
  { icon: '🎯', name: 'Brand Marketing', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80' },
  { icon: '✍️', name: 'Content Marketing', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80' },
  { icon: '🔥', name: 'Demand Generation', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80' },
  { icon: '📈', name: 'Digital Marketing', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80' },
  { icon: '📧', name: 'Email Marketing', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80' },
  { icon: '🎤', name: 'Event Marketing', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80' },
  { icon: '🧲', name: 'Lead Generation', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=80' },
  { icon: '💡', name: 'Marketing Consulting', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=900&q=80' },
  { icon: '🗺️', name: 'Marketing Strategy', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80' },
  { icon: '📣', name: 'Public Relations', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80' },
]

const approachSections = [
  {
    title: 'Demand Generation',
    tagline: 'Build awareness and interest before your sales team ever gets involved.',
    accent: 'teal',
    items: [
      {
        name: 'Top-of-Funnel Content Strategy',
        body: 'We plan and produce content built to introduce your brand to a cold audience, educating and building trust long before a sales conversation starts.',
      },
      {
        name: 'Multi-Channel Demand Campaigns',
        body: 'We run coordinated campaigns across social, search, and content channels, working together to build consistent awareness around your offer.',
      },
      {
        name: 'MQL Pipelines',
        body: "We build the systems that score and move engaged prospects from 'aware' to 'ready for sales,' so your team only chases leads worth chasing.",
      },
    ],
  },
  {
    title: 'Digital Marketing',
    tagline: 'A coordinated presence across every channel your audience already uses.',
    accent: 'indigo',
    items: [
      {
        name: 'Multi-Channel Campaign Management',
        body: 'We plan, launch, and manage campaigns across the platforms your audience actually uses, keeping messaging and timing consistent everywhere you show up.',
      },
      {
        name: 'Marketing Automation & Workflows',
        body: 'We set up the behind-the-scenes systems that nurture leads, trigger follow-ups, and keep your funnel moving without manual work on your end.',
      },
      {
        name: 'Performance Tracking & Reporting',
        body: "We track what's working across every channel, with clear reporting that shows exactly where your budget is paying off.",
      },
    ],
  },
]

const leaderTags = [
  'Enterprise Strategy',
  'Operating Models',
  'Digital Transformation',
  'Governance',
  'CXO Advisory',
  'Growth Leadership',
]

/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                      */
/* ------------------------------------------------------------------ */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[#EAB308]/50 bg-white/50 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-[#B45309]">
    <span aria-hidden="true">✦</span>
    {children}
  </span>
)

const StickyNote = ({
  children,
  color = 'teal',
}: {
  children: React.ReactNode
  color?: 'teal' | 'amber'
}) => {
  const palette =
    color === 'teal'
      ? 'border-[#0E9C9A]/30 bg-[#0E9C9A]/10 text-[#0E9C9A]'
      : 'border-[#E07A2C]/30 bg-[#E07A2C]/10 text-[#E07A2C]'
  return (
    <div className={`sm-hand w-fit -rotate-2 rounded-2xl border px-4 py-2.5 text-lg leading-tight ${palette}`}>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Animated stat (counts up once it scrolls into view)                */
/* ------------------------------------------------------------------ */

function parseStat(raw: string) {
  const match = raw.match(/^([\d.]+)(.*)$/)
  if (!match) return { target: 0, suffix: raw }
  return { target: parseFloat(match[1]), suffix: match[2] }
}

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

const AnimatedStat = ({
  value,
  label,
  active,
  delay,
}: {
  value: string
  label: string
  active: boolean
  delay: number
}) => {
  const { target, suffix } = parseStat(value)
  const [display, setDisplay] = useState(`0${suffix}`)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const isInt = Number.isInteger(target)
    const timer = setTimeout(() => {
      const duration = 1000
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        const current = target * eased
        setDisplay(`${isInt ? Math.round(current) : current.toFixed(1)}${suffix}`)
        if (p < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [active, target, suffix, delay])

  return (
    <div className="sm-card min-w-[160px] flex-shrink-0 snap-start rounded-2xl border border-[#1A1A24]/10 bg-white/60 px-6 py-5">
      <div className="sm-display text-3xl text-[#15151F] md:text-4xl">{display}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-[#5B5B66]">{label}</div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const AboutPage = () => {
  const { ref: statsRef, inView: statsInView } = useInView()
  const [activeService, setActiveService] = useState(0)
  const [activeApproach, setActiveApproach] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const approach = approachSections[activeApproach]
  const approachAccent = approach.accent === 'teal' ? '#0E9C9A' : '#4F46E5'
  const service = services[activeService]

  return (
    <main className="relative overflow-x-clip bg-[#F5F0E6] font-[var(--sm-body)] text-[#1A1A24]">
      {/* Fonts + design tokens + lightweight motion, scoped to this page */}
      <style>{`
        :root {
          --sm-display: var(--font-fraunces), 'Iowan Old Style', serif;
          --sm-body: var(--font-plus-jakarta-sans), system-ui, sans-serif;
          --sm-hand: var(--font-caveat), cursive;
        }

        .sm-display { font-family: var(--sm-display); }
        .sm-hand { font-family: var(--sm-hand); }

        @keyframes smFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sm-fade { animation: smFadeUp 0.6s cubic-bezier(.2,.7,.2,1) both; }
        .sm-fade-1 { animation-delay: .05s; }
        .sm-fade-2 { animation-delay: .15s; }
        .sm-fade-3 { animation-delay: .25s; }

        .sm-card { transition: transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s, background-color .3s; }
        .sm-card:hover { transform: translateY(-3px); }

        .sm-scrollbar-none::-webkit-scrollbar { display: none; }
        .sm-scrollbar-none { scrollbar-width: none; }

        @media (prefers-reduced-motion: reduce) {
          .sm-fade, .sm-card { animation: none !important; transition: none !important; transform: none !important; }
        }
      `}</style>

      {/* ------------------------------ HERO ----------------------------- */}
      <section className="px-6 pb-16 pt-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* left: copy */}
          <div>
            <div className="sm-fade sm-fade-1">
              <Eyebrow>About Us</Eyebrow>
            </div>

            <h1 className="sm-display sm-fade sm-fade-2 mt-6 text-5xl leading-[1.03] tracking-tight text-[#15151F] md:text-6xl lg:text-7xl">
              Strategy-Led
              <br />
              Marketing
            </h1>

            <p className="sm-fade sm-fade-3 mt-7 max-w-xl text-base leading-relaxed text-[#5B5B66] md:text-lg">
              Social Manch is a strategy-led marketing partner for growth-focused businesses. We
              don&rsquo;t just execute campaigns — we build marketing systems that drive pipeline
              and revenue. From brand positioning to demand generation, we work closely with
              leadership teams to create structured, scalable growth engines.
            </p>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="sm-fade sm-fade-3 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F46E5] transition-colors hover:text-[#4338CA]"
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'Read more about us'}
              <span className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>↓</span>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-500 ease-out ${expanded ? 'mt-5 max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="max-w-xl space-y-4 text-base leading-relaxed text-[#5B5B66]">
                <p>
                  With over a decade of experience, we deliver tailored solutions that empower
                  your business to grow — partnering with leadership to build systems that drive
                  real results.
                </p>
                <p>
                  Whether you&rsquo;re a startup scaling fast or an enterprise refining your
                  approach, our expertise turns challenges into opportunities. We focus on
                  ROI-driven results tailored to your goals.
                </p>
              </div>
            </div>
          </div>

          {/* right: floating notes, not centered, anchored to its own column */}
          <div className="flex flex-row gap-4 lg:flex-col lg:items-end lg:pt-6">
            <StickyNote color="teal">
              Grow your
              <br />
              pipeline ↘
            </StickyNote>
            <StickyNote color="amber">It&rsquo;s free to start</StickyNote>

          </div>
        </div>
      </section>

      {/* ----------------------------- STATS ----------------------------- */}
      <section className="border-y border-[#1A1A24]/10 bg-white/30 px-6 py-12 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>By the Numbers</Eyebrow>
          <div
            ref={statsRef}
            className="sm-scrollbar-none mt-6 flex gap-4 overflow-x-auto pb-2 snap-x"
          >
            {stats.map((s, i) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} active={statsInView} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- SERVICES ---------------------------- */}
      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="sm-display mt-4 max-w-xl text-3xl text-[#15151F] md:text-5xl">
            Our Marketing Services
          </h2>
          <p className="mt-4 max-w-lg text-[#5B5B66]">
            Unlock growth with tailored marketing solutions — from strategy to execution, we
            specialize in proven tactics that deliver measurable impact.
          </p>

          <div className="mt-10 grid gap-3 lg:grid-cols-[260px_1fr]">
            {/* clickable list */}
            <div className="sm-scrollbar-none flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {services.map((s, i) => {
                const isActive = i === activeService
                return (
                  <button
                    key={s.name}
                    onClick={() => setActiveService(i)}
                    className={`flex flex-shrink-0 items-center gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors lg:whitespace-normal ${isActive ? 'bg-[#15151F] text-white' : 'text-[#3A3A44] hover:bg-white/70'
                      }`}
                  >
                    <span className="text-base">{s.icon}</span>
                    {s.name}
                  </button>
                )
              })}
            </div>

            {/* spotlight panel */}
            <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_45px_-20px_rgba(26,26,36,0.35)]">
              <div key={service.name} className="sm-fade relative aspect-[16/10] w-full">
                <img src={service.img} alt={service.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <span className="text-2xl">{service.icon}</span>
                  <p className="sm-display mt-2 text-2xl text-white md:text-3xl">{service.name}</p>
                </div>
                <div className="absolute right-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white">
                  {String(activeService + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- APPROACH ---------------------------- */}
      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>One Team, Every Channel Covered</Eyebrow>
          <h2 className="sm-display mt-4 max-w-xl text-3xl text-[#15151F] md:text-5xl">
            Execution-Led Growth
          </h2>
          <p className="mt-4 max-w-lg text-[#5B5B66]">
            Strategists, marketers, and creatives working as one team — covering every channel a
            growth-focused business needs, under a single roof.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {approachSections.map((sec, i) => (
              <button
                key={sec.title}
                onClick={() => setActiveApproach(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${i === activeApproach
                  ? 'bg-[#4F46E5] text-white'
                  : 'border border-[#1A1A24]/15 text-[#3A3A44] hover:bg-white/70'
                  }`}
              >
                {sec.title}
              </button>
            ))}
            <span className="ml-auto text-xs font-medium uppercase tracking-wide text-[#5B5B66]">
              {String(activeApproach + 1).padStart(2, '0')} / {String(approachSections.length).padStart(2, '0')}
            </span>
          </div>

          <div key={approach.title} className="sm-fade mt-6 rounded-3xl border border-[#1A1A24]/10 bg-white/50 p-8 md:p-10">
            <p className="text-sm text-[#5B5B66]">{approach.tagline}</p>
            <div className="mt-6 h-px w-full bg-[#1A1A24]/10" />
            <ul className="mt-6 grid gap-7 md:grid-cols-3">
              {approach.items.map((item) => (
                <li key={item.name}>
                  <p className="text-[15px] font-semibold" style={{ color: approachAccent }}>
                    {item.name}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5B5B66]">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="sm-hand mt-8 max-w-md text-xl text-[#E07A2C]">
            Our strategies adapt to your goals — whether launching, entering markets, or
            sustaining growth.
          </p>
        </div>
      </section>

      {/* ----------------------------- LEADER ----------------------------- */}
      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Meet the Team</Eyebrow>
          <h2 className="sm-display mt-4 max-w-xl text-3xl text-[#15151F] md:text-5xl">
            The Leader Behind Social Manch
          </h2>

          <div className="mt-10 grid items-start gap-10 rounded-[2rem] border border-[#1A1A24]/10 bg-white/50 p-8 md:grid-cols-[280px_1fr] md:p-12">
            <div>
              <div className="h-86 w-56 overflow-hidden">
                <img
                  src="https://social-manch.vercel.app/rana.png"
                  alt="Rana Rajvinder Singh"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="sm-hand mt-4 text-xl text-[#0E9C9A]">✦ 25+ Years</p>
              <h3 className="sm-display mt-2 text-xl text-[#15151F]">Rana Rajvinder Singh</h3>
              <p className="text-sm text-[#5B5B66]">Strategy, Transformation &amp; Execution Leader</p>
              <div className="mt-4 flex gap-4 text-sm font-semibold text-[#4F46E5]">
                <a href="https://www.linkedin.com/company/social-manch/" className="hover:text-[#4338CA]">LinkedIn</a>
                <a href="https://x.com/socialmanch" className="hover:text-[#4338CA]">Twitter / X</a>
              </div>
            </div>

            <div>
              <p className="text-[15px] leading-relaxed text-[#3A3A44]">
                I work at the intersection of strategy, transformation, and execution, helping
                organisations convert complex business challenges into scalable growth
                opportunities.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#3A3A44]">
                With more than 25 years of leadership experience across enterprise organisations
                and high-growth startups, my focus has been on strengthening operating models,
                institutionalising governance frameworks, and building digital capabilities that
                support long-term growth.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#3A3A44]">
                I have collaborated closely with CXOs, founders, boards, and leadership teams to
                drive enterprise transformation and align strategic vision with operational
                execution.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {leaderTags.map((tag) => (
                  <span
                    key={tag}
                    className="sm-card rounded-full border border-[#1A1A24]/10 bg-[#F5F0E6] px-3 py-1 text-xs font-medium text-[#3A3A44] hover:border-[#4F46E5]/40 hover:text-[#4F46E5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#4F46E5] px-6 py-2.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.6)] transition-colors hover:bg-[#4338CA]"
                >
                  Work With Us →
                </a>
                <a
                  href="#"
                  className="rounded-full border border-[#1A1A24]/15 px-6 py-2.5 text-[15px] font-semibold text-[#15151F] transition-colors hover:bg-white"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- CLOSING CTA ----------------------------- */}

    </main>
  )
}

export default AboutPage