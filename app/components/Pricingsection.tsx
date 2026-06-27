'use client';

import { useState } from 'react';
import { Inter, Playfair_Display, Caveat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['800'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['600', '700'] });

interface PricingTier {
    name: string;
    tagline: string;
    description: string;
    idealFor: string;
    featured?: boolean;
    features: string[];
    cta: string;
}

const TIERS: PricingTier[] = [
    {
        name: 'Starter',
        tagline: 'Get your brand off the ground',
        description:
            'For founders and early-stage teams who need a clear marketing foundation — messaging, content, and a lead-gen system that actually works.',
        idealFor: 'Ideal for: Startups & early-stage founders',
        features: [
            'Brand positioning & messaging framework',
            'Social content strategy (3 posts/week)',
            'Monthly performance report',
            'Lead generation foundations',
            'Email support',
        ],
        cta: 'Start the conversation',
    },
    {
        name: 'Growth',
        tagline: 'Build a predictable pipeline',
        description:
            'For scaling businesses that need a full demand-generation engine — paid acquisition, multi-channel campaigns, and a dedicated strategist in your corner.',
        idealFor: 'Ideal for: Mid-market & growth-stage companies',
        featured: true,
        features: [
            'Everything in Starter',
            'Paid ad campaign management',
            'Demand generation & nurture flows',
            'Dedicated account strategist',
            'Bi-weekly strategy calls',
            'Sales & marketing alignment',
        ],
        cta: 'Let\'s grow together',
    },
    {
        name: 'Scale',
        tagline: 'Operate at enterprise pace',
        description:
            'For large organisations that need strategic marketing leadership, governance frameworks, and a team that moves at the speed of your ambition.',
        idealFor: 'Ideal for: Enterprise & leadership teams',
        features: [
            'Everything in Growth',
            'CXO-level marketing advisory',
            'Multi-market campaign operations',
            'Custom reporting dashboard',
            'Governance & playbook design',
            'Quarterly business reviews',
        ],
        cta: 'Talk to our team',
    },
];

function CheckIcon() {
    return (
        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#5B5FEF]">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 text-white"
            >
                <path d="M5 13l4 4L19 7" />
            </svg>
        </span>
    );
}

function SparkleIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" />
        </svg>
    );
}

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState<'monthly' | 'project'>('monthly');

    return (
        <section id="pricing" className={`${inter.className} bg-[#F5F1E8] px-4 py-20 sm:px-6 lg:px-8`}>
            <div className="mx-auto max-w-6xl">

                {/* Eyebrow badge */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-amber-600 shadow-sm">
                        <SparkleIcon />
                        <span className="text-sm font-medium">
                            Transparent plans. No surprises.
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <h2
                    className={`${playfair.className} mt-8 text-center text-3xl leading-tight text-[#15182B] sm:text-5xl`}
                >
                    A plan for every{' '}
                    <span className="text-[#5B5FEF]">stage.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-center text-sm text-neutral-500">
                    Whether you&apos;re building from scratch or scaling across markets — we have
                    an engagement model that fits. All plans are custom-scoped to your goals.
                </p>

                {/* Engagement toggle */}
                <div className="mt-10 flex justify-center">
                    <div
                        role="tablist"
                        aria-label="Engagement type"
                        className="relative inline-flex items-center rounded-full bg-[#15182B] p-1"
                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'monthly'}
                            onClick={() => setActiveTab('monthly')}
                            className={`rounded-full px-5 py-2 text-xs font-medium transition-colors ${activeTab === 'monthly'
                                ? 'bg-white text-[#15182B]'
                                : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Retainer
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === 'project'}
                            onClick={() => setActiveTab('project')}
                            className={`rounded-full px-5 py-2 text-xs font-medium transition-colors ${activeTab === 'project'
                                ? 'bg-white text-[#15182B]'
                                : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Project-Based
                        </button>

                        <div
                            className={`${caveat.className} pointer-events-none absolute -right-20 -top-11 hidden -rotate-2 text-lg text-teal-600 sm:block`}
                            aria-hidden="true"
                        >
                            Most popular!
                            <svg
                                viewBox="0 0 60 40"
                                className="h-8 w-14 translate-x-3 -translate-y-0.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            >
                                <path d="M48 4C42 18 28 28 14 31" />
                                <path d="M21 25L11 32L23 35" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Engagement context note */}
                <p className="mt-4 text-center text-xs text-neutral-400">
                    {activeTab === 'monthly'
                        ? 'Ongoing retainer — a dedicated team embedded in your growth, month after month.'
                        : 'Fixed-scope engagements — perfect for audits, launches, and one-time campaigns.'}
                </p>

                {/* Pricing cards */}
                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {TIERS.map((tier) => (
                        <div
                            key={tier.name}
                            className={`flex flex-col rounded-3xl bg-white p-8 ${tier.featured
                                ? 'shadow-xl ring-2 ring-[#5B5FEF]'
                                : 'border border-neutral-200'
                                }`}
                        >
                            {/* Tier header */}
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="text-base font-semibold text-[#15182B]">{tier.name}</h3>
                                {tier.featured && (
                                    <span className="rounded-full bg-[#ECEBFF] px-3 py-1 text-[10px] font-semibold text-[#5B5FEF]">
                                        Most Popular
                                    </span>
                                )}
                            </div>

                            <p className="mt-1 text-xs font-medium text-[#5B5FEF]">{tier.tagline}</p>

                            <p className="mt-4 text-xs leading-relaxed text-neutral-500">
                                {tier.description}
                            </p>

                            <div className="my-5 h-px bg-neutral-100" />

                            <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wide">
                                {tier.idealFor}
                            </p>

                            <button
                                type="button"
                                onClick={() => (window.location.href = '/contact')}
                                className={`mt-5 w-full rounded-full py-3 text-xs font-semibold transition-colors ${tier.featured
                                    ? 'bg-[#5B5FEF] text-white hover:bg-[#4548D9]'
                                    : 'bg-[#ECEBFF] text-[#5B5FEF] hover:bg-[#DEDCFF]'
                                    }`}
                            >
                                {tier.cta} →
                            </button>

                            <ul className="mt-7 space-y-4">
                                {tier.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-xs text-neutral-600"
                                    >
                                        <CheckIcon />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Trust strip */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                        { icon: '🔒', text: 'No lock-in contracts — cancel anytime' },
                        { icon: '📞', text: 'Onboarding begins within 2 weeks' },
                        { icon: '📊', text: 'ROI-focused reporting from day one' },
                    ].map((item) => (
                        <div
                            key={item.text}
                            className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-xs text-neutral-500">{item.text}</span>
                        </div>
                    ))}
                </div>

                {/* Contact banner */}
                <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#15182B] p-8 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-base font-semibold text-white">
                            Need something tailored to your goals?
                        </p>
                        <p className="mt-1 text-sm text-neutral-400">
                            We&apos;ll scope a custom engagement around your stage, team size, and growth targets.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => (window.location.href = '/contact')}
                        className="whitespace-nowrap rounded-full bg-[#5B5FEF] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#4548D9]"
                    >
                        Let&apos;s build your plan →
                    </button>
                </div>

            </div>
        </section>
    );
}