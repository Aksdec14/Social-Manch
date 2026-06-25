// app/news/page.tsx

"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";
import Image from "next/image";

interface Post {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  body: string[];
  tags: string[];
  client: string;
  clientUrl: string;
  accentColor: string;
  image: string;
  imageAlt: string;
}

const posts: Post[] = [
  {
    slug: "fusionedge-website-delivery",
    category: "Client Work",
    date: "June 12, 2025",
    readTime: "3 min read",
    title: "Building the Digital Face of FusionEdge — India's AI-Powered FM Platform",
    excerpt:
      "FusionEdge is reimagining how enterprise facility management works — AI-powered, cloud-native, and built from the ground up for real FM operations. A platform this ambitious needed a website to match. We delivered a full-featured marketing website covering their platform modules, industry verticals, architecture philosophy, and pricing tiers. Every section was designed to speak to two audiences simultaneously — the CXO who needs the big picture, and the FM operations leader who needs the detail. Delivered on time, on brief, and live without disrupting their ongoing go-to-market activity.",
    body: [
      "FusionEdge Services Pvt. Ltd., headquartered across Singapore and India, came to us with a demanding brief: translate a technically sophisticated SaaS product into a compelling, conversion-ready web experience — without losing the depth that enterprise buyers need to make decisions.",
      "We delivered a full-featured marketing website covering their platform modules, industry verticals, architecture philosophy, and pricing tiers. Every section was designed to speak to two audiences simultaneously — the CXO who needs the big picture, and the FM operations leader who needs the detail.",
      "Delivered on time, on brief, and live without disrupting their ongoing go-to-market activity. The result is a website that positions FusionEdge as the category-defining platform it is.",
    ],
    tags: ["Web Design", "SaaS", "Enterprise", "Facility Management"],
    client: "FusionEdge",
    clientUrl: "https://www.fusionedge.io",
    accentColor: "#7B5EA7",
    image: "/FusionEdge.png",
    imageAlt: "FusionEdge website — AI-powered facility management platform",
  },
  {
    slug: "jonojug-website-delivery",
    category: "Client Work",
    date: "May 24, 2025",
    readTime: "2 min read",
    title: "Delivering a Fresh Digital Home for Jono Jug Communications",
    excerpt:
      "We partnered closely with the Jono Jug team to understand their positioning, audience, and goals. The brief was clear: build something that communicates trust and expertise the moment a visitor lands. From there, our team designed and developed a website that captures their voice, showcases their services clearly, and creates the right first impression at every touchpoint.",
    body: [
      "We partnered closely with the Jono Jug team to understand their positioning, audience, and goals. The brief was clear: build something that communicates trust and expertise the moment a visitor lands.",
      "From there, our team got to work — designing and developing a website that captures their voice, showcases their services clearly, and creates the right first impression at every touchpoint.",
      "Delivered on time, on brief, and built to perform. Proud to have this one in our portfolio.",
    ],
    tags: ["Web Design", "Communications", "Brand"],
    client: "Jono Jug",
    clientUrl: "https://www.jonojug.com",
    accentColor: "#B8A86A",
    image: "/JonoJug.png",
    imageAlt: "Jono Jug Communications — brand website",
  },
];

const FILTERS = ["All", "Web Design", "Brand"] as const;
type Filter = (typeof FILTERS)[number];

// ─── Cursor-glow featured card ────────────────────────────────────────────────
const FeaturedCard = ({ post }: { post: Post }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    glow.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col sm:flex-row w-full bg-white rounded-2xl overflow-hidden border border-black/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
    >
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute z-10 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 opacity-0"
        style={{
          background: `radial-gradient(circle, ${post.accentColor}22 0%, transparent 70%)`,
        }}
      />

      {/* Image */}
      <div className="relative w-full sm:w-[42%] flex-shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 42vw"
          className="object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
          priority
        />
        {/* Accent strip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
          style={{ backgroundColor: post.accentColor }}
        />
        {/* Tag chips over image */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 sm:px-8 lg:px-10 py-6 sm:py-8 flex flex-col justify-center relative z-20">
        {/* Category badge */}
        <span
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase mb-4 self-start px-3 py-1 rounded-full border transition-all duration-200 group-hover:scale-105"
          style={{
            color: post.accentColor,
            borderColor: post.accentColor + "44",
            backgroundColor: post.accentColor + "15",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
            style={{ backgroundColor: post.accentColor }}
          />
          {post.category}
        </span>

        <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-normal leading-snug text-black mb-3 transition-colors duration-200 group-hover:text-gray-800">
          {post.title}
        </h2>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] text-gray-400 tracking-wide">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="text-[11px] text-gray-400 tracking-wide">{post.readTime}</span>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-4">
          {post.excerpt}
        </p>

        {/* Animated read more */}
        <a
          href={post.clientUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start group/btn inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-black pb-0.5 relative overflow-hidden"
        >
          <span className="relative">
            READ STORY
            <span
              className="absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover/btn:w-full"
              style={{ backgroundColor: post.accentColor }}
            />
          </span>
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
};

// ─── List Card with slide-in reveal ──────────────────────────────────────────
const ListCard = ({ post, index }: { post: Post; index: number }) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="group flex gap-0 py-5 border-b border-black/[0.07] last:border-b-0 rounded-xl px-3 -mx-3 transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-24px)",
        transition: `opacity 0.5s ease ${index * 120}ms, transform 0.5s ease ${index * 120}ms, background 0.2s, box-shadow 0.2s`,
      }}
    >
      {/* Date */}
      <div className="hidden sm:block w-[90px] flex-shrink-0 pt-0.5">
        <p className="text-[10px] text-gray-400 leading-tight whitespace-pre-line font-medium">
          {post.date.replace(", ", ",\n")}
        </p>
      </div>

      {/* Thumbnail */}
      <div className="relative flex-shrink-0 w-[110px] h-[76px] sm:w-[130px] sm:h-[88px] overflow-hidden mr-4 sm:mr-5 rounded-xl">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 110px, 130px"
          className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.06]"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
          style={{ backgroundColor: post.accentColor }}
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <p className="sm:hidden text-[10px] text-gray-400 mb-1">{post.date}</p>

        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase mb-1.5"
          style={{ color: post.accentColor }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: post.accentColor }}
          />
          {post.category}
        </span>

        <h3 className="font-serif text-sm sm:text-base md:text-[15px] font-normal leading-snug text-black mb-2 transition-colors duration-200 group-hover:text-gray-700">
          {post.title}
        </h3>

        <p className="hidden sm:block text-[11px] sm:text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">
          {post.excerpt}
        </p>

        <a
          href={post.clientUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-black self-start"
        >
          <span className="relative">
            READ MORE
            <span
              className="absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover/btn:w-full"
              style={{ backgroundColor: post.accentColor }}
            />
          </span>
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
};

// ─── Magnetic CTA button ──────────────────────────────────────────────────────
const MagneticButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      ref={btnRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-white border border-white/30 px-6 py-3 rounded-full transition-all duration-200 hover:bg-white hover:text-black"
      style={{ transition: "transform 0.15s ease, background 0.2s, color 0.2s" }}
    >
      {children}
    </a>
  );
};

// ─── Animated page title ──────────────────────────────────────────────────────
const AnimatedTitle = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);
  return (
    <h1
      className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-black leading-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      News
    </h1>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredPosts = posts.filter((post) => {
    if (activeFilter === "All") return true;
    return post.tags.some((tag) =>
      tag.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <main className="bg-[#F5F0E8] min-h-screen pt-[72px] overflow-x-hidden">

      {/* ── Page wrapper ── */}
      <div className="px-5 sm:px-10 md:px-16 lg:mx-32 lg:px-0 max-w-[960px]">

        {/* ── "News" heading ── */}
        <div className="pt-8 sm:pt-10 pb-6 sm:pb-8 flex items-end justify-between">
          <AnimatedTitle />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-400 mb-2">
            {posts.length} stories
          </span>
        </div>

        {/* ── Rule ── */}
        <hr className="border-t border-black/10 mb-0" />

        {/* ── Featured post ── */}
        <div className="py-6 sm:py-8">
          <FeaturedCard post={posts[0]} />
        </div>

        {/* ── Divider ── */}
        <hr className="border-t border-black/10 mb-0" />

        {/* ── Spacer ── */}
        <div className="h-10 sm:h-14" />

        {/* ── Latest news + filters ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black">
            Latest news
          </h2>

          {/* Filter pills */}
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[10px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border transition-all duration-200 ${activeFilter === f
                  ? "bg-black text-white border-black scale-105"
                  : "bg-white text-gray-500 border-black/10 hover:border-black/40 hover:text-black hover:scale-105"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── List cards ── */}
        <div>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, i) => (
              <ListCard key={post.slug} post={post} index={i} />
            ))
          ) : (
            <p
              className="text-sm text-gray-400 py-8"
              style={{ animation: "fadeIn 0.3s ease" }}
            >
              No posts in this category yet.
            </p>
          )}
        </div>

        {/* ── Load more ── */}
        <div className="pt-6 pb-16 sm:pb-20">
          <button className="group text-[10px] font-semibold tracking-widest uppercase text-black border border-black/20 px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-all duration-200 flex items-center gap-2">
            LOAD MORE
            <span className="transition-transform duration-300 group-hover:rotate-90">+</span>
          </button>
        </div>

      </div>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-16 sm:py-24 px-5 sm:px-10 md:px-16 lg:px-32">
        {/* Animated blobs */}
        <div
          className="absolute w-64 h-64 rounded-full bg-[#5B4FCF] opacity-20 -top-16 -right-16 pointer-events-none"
          style={{ animation: "floatA 8s ease-in-out infinite" }}
        />
        <div
          className="absolute w-40 h-40 rounded-full bg-[#F4A432] opacity-20 -bottom-10 left-16 pointer-events-none"
          style={{ animation: "floatB 10s ease-in-out infinite" }}
        />
        <div
          className="absolute w-24 h-24 rounded-full bg-[#2BB5A0] opacity-20 top-10 left-40 pointer-events-none"
          style={{ animation: "floatA 6s ease-in-out infinite reverse" }}
        />

        <div className="max-w-[960px] relative z-10">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal italic text-white mb-8">
            Start a project?
          </h2>
          <MagneticButton href="/contact">
            CONTACT US →
          </MagneticButton>
        </div>
      </section>



      <style jsx global>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(16px) scale(0.95); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
};

export default NewsPage;