'use client';

import { useState } from 'react';
import { Inter, Playfair_Display, Caveat } from 'next/font/google';

// Brand type system pulled from the hero: an editorial serif for the
// headline, a clean grotesque for everything else, and a script font
// reserved for the hand-drawn-style annotation (the hero's signature device).
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['600', '700'] });

interface PricingTier {
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    featured?: boolean;
    features: string[];
}

const TIERS: PricingTier[] = [
    {
        name: 'Starter',
        description: 'For brands just beginning their growth journey',
        monthlyPrice: 24999,
        yearlyPrice: 19999,
        features: [
            'Brand & social strategy',
            'Content calendar (3 posts/week)',
            'Monthly performance report',
            'Email support',
        ],
    },
    {
        name: 'Growth',
        description: 'For growth-focused businesses ready to scale',
        monthlyPrice: 59999,
        yearlyPrice: 47999,
        featured: true,
        features: [
            'Everything in Starter',
            'Paid ad campaign management',
            'Demand generation campaigns',
            'Dedicated account strategist',
            'Bi-weekly strategy calls',
        ],
    },
    {
        name: 'Scale',
        description: 'For organizations building a full-funnel growth engine',
        monthlyPrice: 149999,
        yearlyPrice: 119999,
        features: [
            'Everything in Growth',
            'Multi-channel growth engine',
            'Custom reporting dashboard',
            'Priority support & SLA',
            'Quarterly business reviews',
        ],
    },
];

const formatINR = (value: number) =>
    new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(value);

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
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className={`${inter.className} bg-[#F5F1E8] px-4 py-20 sm:px-6 lg:px-8`}>
            <div className="mx-auto max-w-6xl">
                {/* Eyebrow badge — same gold pill + sparkle treatment as the hero */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-amber-600 shadow-sm">
                        <SparkleIcon />
                        <span className="text-xs font-medium">
                            Pricing built for growth-focused brands
                        </span>
                    </div>
                </div>

                {/* Heading — echoes the hero's "X-Led Y" serif headline pattern */}
                <h2
                    className={`${playfair.className} mt-8 text-center text-3xl leading-tight text-[#15182B] sm:text-5xl`}
                >
                    Pricing-Led <span className="text-[#5B5FEF]">Growth.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-center text-sm text-neutral-500">
                    Transparent plans for every stage of your growth journey — no hidden
                    fees, no long-term lock-in.
                </p>

                {/* Billing toggle, with a hand-drawn-style callout like the hero's "It's free" note */}
                <div className="mt-10 flex justify-center">
                    <div
                        role="tablist"
                        aria-label="Billing cycle"
                        className="relative inline-flex items-center rounded-full bg-[#15182B] p-1"
                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected={!isYearly}
                            onClick={() => setIsYearly(false)}
                            className={`rounded-full px-5 py-2 text-xs font-medium transition-colors ${!isYearly ? 'bg-white text-[#15182B]' : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={isYearly}
                            onClick={() => setIsYearly(true)}
                            className={`rounded-full px-5 py-2 text-xs font-medium transition-colors ${isYearly ? 'bg-white text-[#15182B]' : 'text-neutral-400 hover:text-neutral-200'
                                }`}
                        >
                            Yearly
                        </button>

                        <div
                            className={`${caveat.className} pointer-events-none absolute -right-16 -top-11 hidden -rotate-2 text-lg text-teal-600 sm:block`}
                            aria-hidden="true"
                        >
                            Save 20%!
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

                {/* Pricing cards */}
                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {TIERS.map((tier) => {
                        const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;

                        return (
                            <div
                                key={tier.name}
                                className={`flex flex-col rounded-3xl bg-white p-8 ${tier.featured
                                        ? 'shadow-xl ring-2 ring-[#5B5FEF]'
                                        : 'border border-neutral-200'
                                    }`}
                            >
                                <h3 className="text-base font-semibold text-[#15182B]">{tier.name}</h3>
                                <p className="mt-1 text-xs text-neutral-500">{tier.description}</p>

                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-[#15182B]">
                                        ₹{formatINR(price)}
                                    </span>
                                    <span className="text-xs text-neutral-400">/month</span>
                                </div>
                                <p className="mt-1 h-4 text-xs text-neutral-400">
                                    {isYearly ? 'Billed annually' : '\u00A0'}
                                </p>

                                <button
                                    type="button"
                                    className={`mt-4 w-full rounded-full py-3 text-xs font-semibold transition-colors ${tier.featured
                                            ? 'bg-[#5B5FEF] text-white hover:bg-[#4548D9]'
                                            : 'bg-[#ECEBFF] text-[#5B5FEF] hover:bg-[#DEDCFF]'
                                        }`}
                                >
                                    Get Started
                                </button>

                                <ul className="mt-8 space-y-4">
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
                        );
                    })}
                </div>

                {/* Contact banner */}
                <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#15182B] p-8 sm:flex-row sm:items-center">
                    <p className="text-base text-white">
                        Need a plan built around your growth goals?
                        <br className="hidden sm:block" /> Let&apos;s build your custom{' '}
                        <span className="text-[#8B8EFF]">growth engine.</span>
                    </p>
                    <button
                        type="button"
                        className="whitespace-nowrap rounded-full bg-[#5B5FEF] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#4548D9]"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}