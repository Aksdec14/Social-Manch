'use client';

import { useEffect, useState } from 'react';
import type { ComponentType, SVGProps } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

interface SubService {
    name: string;
    description: string;
}

interface ServiceCategory {
    id: string;
    name: string;
    tagline: string;
    subServices: SubService[];
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                       */
/* -------------------------------------------------------------------------- */

const iconBase = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};

function MegaphoneIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <path d="M3 10v4a1 1 0 0 0 1 1h2l5 4V5L6 9H4a1 1 0 0 0-1 1z" />
            <path d="M11 8.5 17 5.5v13L11 15.5" />
            <path d="M19 10.5a2 2 0 0 1 0 3" />
        </svg>
    );
}

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <circle cx="12" cy="12" r="8" />
            <path d="M4 12h16" />
            <path d="M12 4c2.2 2.2 3.4 5 3.4 8s-1.2 5.8-3.4 8c-2.2-2.2-3.4-5-3.4-8s1.2-5.8 3.4-8z" />
        </svg>
    );
}

function EnvelopeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3.5 6.5 12 13l8.5-6.5" />
        </svg>
    );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 9.5h18" />
            <path d="M8 3v4" />
            <path d="M16 3v4" />
        </svg>
    );
}

function TargetIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
        </svg>
    );
}

function ChatIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <path d="M4 5.5A2 2 0 0 1 6 3.5h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9.5L5 20V5.5z" />
            <path d="M8 9h8" />
            <path d="M8 12h5" />
        </svg>
    );
}

function CompassIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <circle cx="12" cy="12" r="8" />
            <path d="M14.8 9.2 13 13.8 9.2 14.8 11 10.2z" />
        </svg>
    );
}

function NewspaperIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <rect x="3" y="5" width="14" height="14" rx="1" />
            <path d="M21 8.5V17a2 2 0 0 1-2 2H7" />
            <path d="M6.5 9h7" />
            <path d="M6.5 12h7" />
            <path d="M6.5 15h4" />
        </svg>
    );
}

function PaletteIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2H17a4 4 0 0 0 4-4c0-5-4-7.3-9-7.3z" />
            <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
            <circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="16.5" cy="11" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function SparkleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" />
        </svg>
    );
}

function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <path d="M15 18l-6-6 6-6" />
        </svg>
    );
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...iconBase} {...props}>
            <path d="M9 18l6-6-6-6" />
        </svg>
    );
}

/* -------------------------------------------------------------------------- */
/* Content                                                                     */
/* -------------------------------------------------------------------------- */

const SERVICES: ServiceCategory[] = [
    {
        id: 'demand-generation',
        name: 'Demand Generation',
        tagline: 'Build awareness and interest before your sales team ever gets involved.',
        subServices: [
            {
                name: 'Top-of-Funnel Content Strategy',
                description:
                    'We plan and produce content built to introduce your brand to a cold audience, educating and building trust long before a sales conversation starts.',
            },
            {
                name: 'Multi-Channel Demand Campaigns',
                description:
                    'We run coordinated campaigns across social, search, and content channels, working together to build consistent awareness around your offer.',
            },
            {
                name: 'MQL Pipelines',
                description:
                    "We build the systems that score and move engaged prospects from 'aware' to 'ready for sales,' so your team only chases leads worth chasing.",
            },
        ],
        Icon: MegaphoneIcon,
    },
    {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        tagline: 'A coordinated presence across every channel your audience already uses.',
        subServices: [
            {
                name: 'Multi-Channel Campaign Management',
                description:
                    'We plan, launch, and manage campaigns across the platforms your audience actually uses, keeping messaging and timing consistent everywhere you show up.',
            },
            {
                name: 'Marketing Automation & Workflows',
                description:
                    'We set up the behind-the-scenes systems that nurture leads, trigger follow-ups, and keep your funnel moving without manual work on your end.',
            },
            {
                name: 'Performance Tracking & Reporting',
                description:
                    "We track what's working across every channel, with clear reporting that shows exactly where your budget is paying off.",
            },
        ],
        Icon: GlobeIcon,
    },
    {
        id: 'email-marketing',
        name: 'Email Marketing',
        tagline: 'Turn your inbox into one of your highest-converting channels.',
        subServices: [
            {
                name: 'Newsletter & Nurture Sequences',
                description:
                    'We write and design newsletters and nurture sequences that keep your brand top of mind and move subscribers steadily closer to a decision.',
            },
            {
                name: 'Lifecycle & Behavioral Automation',
                description:
                    'We build automated flows triggered by what a contact actually does, so the right message lands at the right moment without manual sending.',
            },
            {
                name: 'Deliverability & List Health',
                description:
                    'We monitor sender reputation, clean your list, and fix technical issues quietly holding your open rates back.',
            },
        ],
        Icon: EnvelopeIcon,
    },
    {
        id: 'event-marketing',
        name: 'Event Marketing',
        tagline: 'Make every event, virtual or in-person, work toward your pipeline.',
        subServices: [
            {
                name: 'Webinar & Virtual Event Strategy',
                description:
                    'We plan and promote webinars end-to-end, from topic and registration page to the follow-up sequence that turns attendees into leads.',
            },
            {
                name: 'Trade Show & Conference Planning',
                description:
                    'We handle the marketing side of your trade show presence, including pre-event promotion and a plan to capture leads on the floor.',
            },
            {
                name: 'Post-Event Follow-Up Campaigns',
                description:
                    "We build the follow-up campaigns that turn attendee lists into real conversations, so momentum doesn't disappear the week after.",
            },
        ],
        Icon: CalendarIcon,
    },
    {
        id: 'lead-generation',
        name: 'Lead Generation',
        tagline: 'Fill your pipeline with leads that are actually ready to talk.',
        subServices: [
            {
                name: 'Landing Page & Offer Design',
                description:
                    "We design landing pages and offers built around a single clear action, tested and refined to convert more of the traffic you're already getting.",
            },
            {
                name: 'Lead Magnet Creation',
                description:
                    'We create guides, tools, and resources valuable enough that the right audience will trade their contact details to get them.',
            },
            {
                name: 'Lead Scoring & Qualification',
                description:
                    "We set up scoring criteria that separate genuinely interested leads from casual browsers, so your sales team's time goes where it counts.",
            },
        ],
        Icon: TargetIcon,
    },
    {
        id: 'marketing-consulting',
        name: 'Marketing Consulting',
        tagline: 'Senior strategic guidance, without the overhead of a full in-house team.',
        subServices: [
            {
                name: 'Go-To-Market Planning',
                description:
                    'We build the launch plan for new products, services, or markets, covering positioning, channels, and timeline so your launch has direction from day one.',
            },
            {
                name: 'Marketing Audits & Diagnostics',
                description:
                    "We review your current marketing — campaigns, channels, and conversion points — and tell you plainly what's working and what isn't.",
            },
            {
                name: 'Fractional CMO Support',
                description:
                    'We provide senior marketing leadership on a flexible basis, guiding strategy without a full-time executive hire.',
            },
        ],
        Icon: ChatIcon,
    },
    {
        id: 'marketing-strategy',
        name: 'Marketing Strategy',
        tagline: 'The structured plan that connects every campaign to real business goals.',
        subServices: [
            {
                name: 'Brand Positioning & Messaging',
                description:
                    'We define how your brand should be perceived and the language that communicates it consistently across every channel and piece of content.',
            },
            {
                name: 'Channel & Budget Planning',
                description:
                    'We map out where your marketing budget should go and why, prioritizing the channels most likely to move your specific goals.',
            },
            {
                name: 'Growth Roadmapping',
                description:
                    'We build a phased plan for the next 6–12 months, so every campaign has a clear place in the bigger picture instead of standing alone.',
            },
        ],
        Icon: CompassIcon,
    },
    {
        id: 'public-relations',
        name: 'Public Relations',
        tagline: 'Build credibility and visibility beyond your owned channels.',
        subServices: [
            {
                name: 'Press Outreach & Media Relations',
                description:
                    'We pitch your story to relevant journalists and publications, building the media relationships that turn into genuine coverage over time.',
            },
            {
                name: 'Thought Leadership Placement',
                description:
                    'We position your leadership team as credible voices in your industry, securing bylines, interviews, and speaking opportunities.',
            },
            {
                name: 'Crisis & Reputation Management',
                description:
                    "We help you respond clearly and quickly when something threatens your brand's reputation, protecting the trust you've already built.",
            },
        ],
        Icon: NewspaperIcon,
    },
    {
        id: 'branding',
        name: 'Branding',
        tagline: 'Give your business an identity people recognize and trust.',
        subServices: [
            {
                name: 'Logo & Visual Identity Design',
                description:
                    'We design a distinctive logo and visual system — color, type, and imagery — that works consistently across digital and print.',
            },
            {
                name: 'Brand Voice & Messaging',
                description:
                    "We define how your brand sounds, not just how it looks, so your tone stays consistent whether it's a tagline or a sales deck.",
            },
            {
                name: 'Brand Guidelines & Collateral',
                description:
                    'We document your brand standards and design the templates your team needs to stay consistent without reinventing it every time.',
            },
        ],
        Icon: PaletteIcon,
    },
];

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

function usePerPage() {
    const [perPage, setPerPage] = useState(2);

    useEffect(() => {
        function update() {
            if (window.innerWidth < 640) {
                setPerPage(1);
            } else if (window.innerWidth < 1024) {
                setPerPage(2);
            } else {
                setPerPage(3);
            }
        }
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return perPage;
}

/* -------------------------------------------------------------------------- */
/* ServiceCard                                                                 */
/* -------------------------------------------------------------------------- */

function ServiceCard({ service }: { service: ServiceCategory }) {
    const { Icon, name, tagline, subServices } = service;

    return (
        <div
            style={{
                flex: '1 1 0',
                minWidth: 0,
                background: '#fff',
                border: '1px solid #E5E5E5',
                borderRadius: '20px',
                padding: '28px 24px 26px',
                display: 'flex',
                flexDirection: 'column',
                height: '360px',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 4px 24px rgba(91,95,239,0.10)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
        >
            {/* Icon */}
            <div
                style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '13px',
                    background: '#ECEBFF',
                    color: '#5B5FEF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    flexShrink: 0,
                }}
            >
                <Icon style={{ width: '20px', height: '20px' }} />
            </div>

            {/* Name */}
            <h3
                className={playfair.className}
                style={{
                    fontSize: '18px',
                    color: '#15182B',
                    marginBottom: '5px',
                    lineHeight: 1.25,
                    flexShrink: 0,
                }}
            >
                {name}
            </h3>

            {/* Tagline */}
            <p
                style={{
                    fontSize: '12.5px',
                    color: '#737373',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                    flexShrink: 0,
                }}
            >
                {tagline}
            </p>

            {/* Divider */}
            <hr
                style={{
                    border: 'none',
                    borderTop: '1px solid #F0F0F0',
                    marginBottom: '14px',
                    flexShrink: 0,
                }}
            />

            {/* Sub-services */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    overflow: 'hidden',
                    flex: 1,
                }}
            >
                {subServices.map((sub) => (
                    <div key={sub.name}>
                        <p
                            style={{
                                fontSize: '12.5px',
                                fontWeight: 600,
                                color: '#15182B',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '7px',
                                marginBottom: '2px',
                            }}
                        >
                            <span
                                style={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: '#5B5FEF',
                                    flexShrink: 0,
                                    display: 'inline-block',
                                }}
                            />
                            {sub.name}
                        </p>
                        <p
                            style={{
                                fontSize: '11.5px',
                                color: '#9CA3AF',
                                lineHeight: 1.6,
                                paddingLeft: '13px',
                                margin: 0,
                            }}
                        >
                            {sub.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Pagination                                                                  */
/* -------------------------------------------------------------------------- */

interface PaginationProps {
    current: number;
    total: number;
    onPrev: () => void;
    onNext: () => void;
    onDot: (i: number) => void;
}

function Pagination({ current, total, onPrev, onNext, onDot }: PaginationProps) {
    const btnBase: React.CSSProperties = {
        width: '34px',
        height: '34px',
        borderRadius: '50%',
        border: '1px solid #E5E5E5',
        background: '#fff',
        color: '#737373',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'border-color 0.15s, color 0.15s',
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '24px',
            }}
        >
            {/* Prev */}
            <button
                onClick={onPrev}
                disabled={current === 0}
                aria-label="Previous page"
                style={{ ...btnBase, opacity: current === 0 ? 0.35 : 1, cursor: current === 0 ? 'default' : 'pointer' }}
            >
                <ChevronLeftIcon style={{ width: '15px', height: '15px' }} />
            </button>

            {/* Dots */}
            {Array.from({ length: total }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onDot(i)}
                    aria-label={`Page ${i + 1}`}
                    style={{
                        width: i === current ? '22px' : '8px',
                        height: '8px',
                        borderRadius: i === current ? '4px' : '50%',
                        background: i === current ? '#5B5FEF' : '#E5E5E5',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'all 0.2s',
                        flexShrink: 0,
                    }}
                />
            ))}

            {/* Next */}
            <button
                onClick={onNext}
                disabled={current === total - 1}
                aria-label="Next page"
                style={{ ...btnBase, opacity: current === total - 1 ? 0.35 : 1, cursor: current === total - 1 ? 'default' : 'pointer' }}
            >
                <ChevronRightIcon style={{ width: '15px', height: '15px' }} />
            </button>

            {/* Label */}
            <span style={{ fontSize: '12px', color: '#9CA3AF', paddingLeft: '4px' }}>
                {current + 1} / {total}
            </span>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Main Section                                                                */
/* -------------------------------------------------------------------------- */

export default function ServicesSection() {
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = usePerPage();

    const totalPages = Math.ceil(SERVICES.length / perPage);

    // Reset to first page when perPage changes to avoid out-of-range index
    useEffect(() => {
        setCurrentPage(0);
    }, [perPage]);

    const visibleServices = SERVICES.slice(
        currentPage * perPage,
        currentPage * perPage + perPage,
    );

    return (
        <section
            className={inter.className}
            style={{
                background: '#F5F1E8',
                padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 40px)',
                boxSizing: 'border-box',
                width: '100%',
            }}
        >
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Badge */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            border: '1px solid #FCD34D',
                            background: '#fff',
                            borderRadius: '999px',
                            padding: '6px 14px',
                            color: '#D97706',
                            fontSize: '12px',
                            fontWeight: 500,
                        }}
                    >
                        <SparkleIcon style={{ width: '13px', height: '13px', flexShrink: 0 }} />
                        One team, every channel covered
                    </div>
                </div>

                {/* Heading */}
                <h2
                    className={playfair.className}
                    style={{
                        fontSize: 'clamp(26px, 5vw, 48px)',
                        color: '#15182B',
                        textAlign: 'center',
                        margin: '0 0 12px',
                        lineHeight: 1.2,
                    }}
                >
                    Execution-Led{' '}
                    <span style={{ color: '#5B5FEF' }}>Growth.</span>
                </h2>

                <p
                    style={{
                        textAlign: 'center',
                        color: '#737373',
                        fontSize: '13px',
                        maxWidth: '440px',
                        margin: '0 auto 40px',
                        lineHeight: 1.7,
                    }}
                >
                    Strategists, marketers, and creatives working as one team — covering every channel a
                    growth-focused business needs, under a single roof.
                </p>

                {/* Cards */}
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'stretch',
                    }}
                >
                    {visibleServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* Pagination */}
                <Pagination
                    current={currentPage}
                    total={totalPages}
                    onPrev={() => setCurrentPage((p) => Math.max(0, p - 1))}
                    onNext={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                    onDot={(i) => setCurrentPage(i)}
                />
            </div>
        </section>
    );
}