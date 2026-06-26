"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Maintenance = () => {
    const router = useRouter();

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F5F0] px-5 sm:px-6 lg:px-8">

            {/* Background Blur */}
            <div className="absolute left-[-80px] top-10 h-56 w-56 rounded-full bg-[#5E7BFF]/10 blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
            <div className="absolute right-[-80px] bottom-0 h-56 w-56 rounded-full bg-[#FFCC66]/10 blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96" />

            {/* Left Scribble */}
            <span className="absolute left-6 top-24 hidden rotate-12 text-5xl text-[#7ED957] lg:block">
                /
            </span>

            {/* Right Scribble */}
            <div className="absolute right-10 top-32 hidden text-center lg:block">
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

            {/* Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">

                {/* Badge */}
                <div className="mb-8 inline-flex items-center rounded-full border border-yellow-400 bg-white/70 px-5 py-2 text-xs font-medium text-yellow-700 backdrop-blur sm:text-sm">
                    ✦ We&apos;re making something better for you
                </div>

                {/* Heading */}
                <h1
                    className="font-serif font-medium leading-none tracking-tight text-[#171717]"
                    style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: "clamp(3rem,9vw,7rem)",
                    }}
                >
                    Under
                    <br />
                    Maintenance
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-2xl px-2 text-base leading-7 text-neutral-600 sm:mt-8 sm:px-0 sm:text-lg sm:leading-8">
                    We&apos;re refining this experience with the same attention to detail that
                    goes into every project we build.
                    <br className="hidden sm:block" />
                    This page will be available very soon.
                </p>

                {/* CTA */}
                <div className="mt-10 flex w-full max-w-xs flex-col items-center gap-5 sm:mt-14">

                    <button
                        onClick={() => router.push("/")}
                        className="w-full rounded-full bg-gradient-to-r from-[#5E7BFF] to-[#7C4DFF] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        Return Home
                    </button>

                    <p
                        className="text-lg text-orange-500 sm:text-xl"
                        style={{ fontFamily: "cursive" }}
                    >
                        Thanks for your patience ✨
                    </p>
                </div>

                {/* Bottom Note */}
                <div className="mt-12 text-sm text-neutral-400 sm:mt-16">
                    © {new Date().getFullYear()} Social Manch
                </div>
            </div>
        </section>
    );
};

export default Maintenance;