import type { Metadata } from "next";
import {
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Microscope,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "About | Secure Next Admission",
    description:
      "Learn how we help students navigate Engineering, Medical, and Management admissions.",
  };
}

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden  py-16 bg-linear-to-b from-[#E9FAF1]/50 via-white to-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-20 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-2 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-emerald-700">
            <ShieldCheck className="size-4" />
            Trusted Education Consultancy in Bhopal
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            We help students choose the <br className="hidden sm:flex" />
            <span className="text-emerald-600">right path, faster.</span>
          </h1>

          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Secure Next Admission provides end-to-end admission guidance for
            <span className="font-semibold text-slate-900">
              {" "}
              Engineering, Medical, and Management{" "}
            </span>
            programs. Our approach is transparent, data-driven, and
            personalized.
          </p>
        </header>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Personalized Counselling",
              desc: "One-to-one sessions to align courses, colleges, budget, and career aspirations.",
              icon: <GraduationCap className="h-6 w-6 text-emerald-600" />,
              accent: "bg-emerald-600",
              bg: "bg-emerald-50",
            },
            {
              title: "Smart Shortlisting",
              desc: "Rank-based and preference-based guidance to shortlist the most suitable colleges.",
              icon: <Microscope className="h-6 w-6 text-blue-600" />,
              accent: "bg-blue-600",
              bg: "bg-blue-50",
            },
            {
              title: "End-to-End Support",
              desc: "From documents and deadlines to final reporting—no confusion, no missed steps.",
              icon: <Briefcase className="h-6 w-6 text-indigo-600" />,
              accent: "bg-indigo-600",
              bg: "bg-indigo-50",
            },
          ].map((item, idx) => (
            <article
              key={idx}
              className="group shadow-sm relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
            >
              <div className="flex gap-5 md:gap-6">
                <div
                  className={`inline-flex shrink-0 h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-110 ${item.bg}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div
                className={`mt-6 h-1 w-12 rounded-full ${item.accent} opacity-20 transition-all duration-500 group-hover:w-full group-hover:opacity-100`}
              />
            </article>
          ))}
        </div>

        {/* Bottom Section: Why us & Our Promise */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Why students choose us
            </h2>
            <ul className="space-y-4">
              {[
                "Trusted Admission Partners",
                "Clear, ethical guidance with transparent options.",
                "Strong network across government and private institutions.",
                "Fast responses and a student-first experience.",
                "Student support 24/7",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:bg-white shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-slate-700">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-600 shadow-sm"
              >
                View Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50 shadow-sm"
              >
                Contact Us
              </a>
            </div>
          </div>

          <aside>
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-900 p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white">Our Promise</h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-500">
                We recommend what’s{" "}
                <span className="text-emerald-600 font-semibold italic">
                  best for the student
                </span>
                —not what’s easiest. Every shortlist is curated with long-term
                career value in mind.
              </p>

              <div className="mt-10 rounded-2xl bg-slate-700 p-6">
                <p className="text-sm font-bold text-white">
                  Need a quick callback?
                </p>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Use the Contact form in contact page or message us directly on
                  WhatsApp for priority support.
                </p>
              </div>
              {/* Fixed Background Glow: Changed -right-24 to 0 and added max-w-full to prevent overflow */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/20 blur-[80px]" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
