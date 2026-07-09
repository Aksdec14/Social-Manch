"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  message: string;
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "",
  message: "",
};

const SERVICES = [
  "Brand Identity",
  "Web Design",
  "Web Development",
  "Digital Strategy",
  "SEO & Growth",
  "Something else",
];

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleChange(e: ChangeEvent<FieldElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "sent") setStatus("idle");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "555279c8-2f1d-4664-b474-08fed6dbff13",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm(initialFormState);
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  }

  return (
    <section className="bg-[#F7F0E5] text-black">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28">

        {/* ── Header ── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>

            <h2 className="font-serif text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[6.25rem]">
              Contact Us
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-gray-500 lg:pt-3">
            Explore ideas, strategies, and creative insights that help brands
            grow and digital experiences stand out.
          </p>
        </div>

        {/* ── Content ── */}
        <div className="mt-16 grid grid-cols-1 gap-14 lg:mt-24 lg:grid-cols-[260px_1fr] lg:gap-20">

          {/* Info column */}
          <div className="space-y-10">
            <div>
              <h3 className="mb-2 text-lg font-bold">Office Location</h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Noida,
                <br />
                India
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold">Office Time</h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Monday – Sunday
                <br />
                11am – 7pm
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold">Support</h3>
              <p className="text-sm leading-relaxed text-gray-500">
                reachout@thesocialmanch.com
              </p>
            </div>
          </div>

          {/* Form column */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2"
          >
            <TextField
              label="Enter your name"
              name="name"
              value={form.name}
              onChange={handleChange as (e: ChangeEvent<HTMLInputElement>) => void}
              autoComplete="name"
              required
            />
            <TextField
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange as (e: ChangeEvent<HTMLInputElement>) => void}
              autoComplete="email"
              required
            />
            <TextField
              label="Company name"
              name="company"
              value={form.company}
              onChange={handleChange as (e: ChangeEvent<HTMLInputElement>) => void}
              autoComplete="organization"
            />
            <TextField
              label="www.example.com"
              name="website"
              type="url"
              value={form.website}
              onChange={handleChange as (e: ChangeEvent<HTMLInputElement>) => void}
              autoComplete="url"
            />

            {/* Service select */}
            <div className="sm:col-span-2">
              <label htmlFor="service" className="sr-only">
                Select your services
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none border-b-2 border-red-500 bg-transparent pb-3 pt-1 text-sm text-black outline-none cursor-pointer"
                >
                  <option value="" disabled hidden>
                    Select your services
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-1 top-1.5 h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Message textarea */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">
                Project description
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Project description"
                value={form.message}
                onChange={handleChange}
                rows={2}
                className="w-full resize-none border-b-2 border-red-500 bg-transparent pb-3 pt-1 text-sm text-black placeholder-black/50 outline-none"
              />
            </div>

            {/* Submit */}
            <div className="mt-4 sm:col-span-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-[#F5F0E8] transition-colors duration-200 hover:bg-red-500"
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message"}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── TextField ─────────────────────────────────────────────────────────────────

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}

function TextField({
  label,
  name,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        autoComplete={autoComplete}
        required={required}
        className="w-full border-b-2 border-red-500 bg-transparent pb-3 pt-1 text-sm text-black placeholder-black/50 outline-none transition-colors duration-200 focus:border-black"
      />
    </div>
  );
}