// components/Maintenance.tsx

import React from "react";

const Maintenance = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F5F0] px-6">

            {/* Decorative Blur */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#5E7BFF]/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#FFCC66]/10 blur-3xl" />

            {/* Small Scribbles */}
            <span className="absolute left-20 top-40 rotate-12 text-5xl text-[#7ED957]">
                /
            </span>

            <div className="absolute right-24 top-44 text-center">
                <p
                    className="rotate-[-5deg] text-xl text-sky-500"
                    style={{ fontFamily: "cursive" }}
                >
                    Back soon
                </p>

                <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                    className="mx-auto mt-2"
                >
                    <path
                        d="M55 5C40 10 25 18 18 34"
                        stroke="#1CB5E0"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M18 34L26 30"
                        stroke="#1CB5E0"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M18 34L20 25"
                        stroke="#1CB5E0"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="mx-auto max-w-3xl text-center">

                {/* Badge */}
                <div className="mb-10 inline-flex items-center rounded-full border border-yellow-400 bg-white/60 px-6 py-2 text-sm font-medium text-yellow-700 backdrop-blur">
                    ✦ We're making something better for you
                </div>

                {/* Heading */}
                <h1
                    className="leading-none tracking-tight text-[#171717]"
                    style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: "clamp(3.5rem,8vw,7rem)",
                        fontWeight: 500,
                    }}
                >
                    Under
                    <br />
                    Maintenance
                </h1>

                {/* Description */}
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
                    We're refining this experience with the same attention to detail that
                    goes into every project we build.
                    <br />
                    This page will be available very soon.
                </p>

                {/* CTA */}
                <div className="mt-14 flex flex-col items-center gap-6">

                    <a href="/" className="rounded-full bg-gradient-to-r from-[#5E7BFF] to-[#7C4DFF] px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        Return Home
                    </a>

                    <p
                        className="text-xl text-orange-500"
                        style={{ fontFamily: "cursive" }}
                    >
                        Thanks for your patience ✨
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Maintenance;