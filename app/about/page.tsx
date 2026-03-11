// import type { Metadata } from "next";

// export function generateMetadata(): Metadata {
//   return {
//     title: "About"
//   };
// }

// export default function AboutPage() {
//   return (
//     <section className="bg-background">
//       <div className="mx-auto max-w-6xl px-4 py-12">
//         <header className="mb-10 space-y-4">
//           <p className="inline-flex w-fit rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
//             Trusted Education Consultancy in Bhopal
//           </p>
//           <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
//             We help students choose the right path, faster.
//           </h1>
//           <p className="max-w-2xl text-muted-foreground">
//             Secure Next Admission provides end-to-end admission guidance for
//             Engineering, Medical, and Management programs. Our approach is
//             transparent, data-driven, and personalized to every student’s goals.
//           </p>
//         </header>

//         <div className="grid gap-6 md:grid-cols-3">
//           <article className=" rounded-2xl border bg-card p-6 shadow-sm">
//             <h2 className="text-lg font-semibold">Personalized Counselling</h2>
//             <p className="mt-2 text-sm text-muted-foreground">
//               One-to-one sessions to align courses, colleges, budget, and career
//               aspirations.
//             </p>
//           </article>
//           <article className=" rounded-2xl border bg-card p-6 shadow-sm">
//             <h2 className="text-lg font-semibold">Smart Shortlisting</h2>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Rank-based and preference-based guidance to shortlist the most
//               suitable colleges.
//             </p>
//           </article>
//           <article className=" rounded-2xl border bg-card p-6 shadow-sm">
//             <h2 className="text-lg font-semibold">End-to-End Support</h2>
//             <p className="mt-2 text-sm text-muted-foreground">
//               From documents and deadlines to final reporting—no confusion, no
//               missed steps.
//             </p>
//           </article>
//         </div>

//         <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
//           <div className="space-y-4">
//             <h2 className="text-2xl font-semibold">Why students choose us</h2>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li className="flex gap-2">
//                 <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
//                 Clear, ethical guidance with transparent options.
//               </li>
//               <li className="flex gap-2">
//                 <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
//                 Strong network across government and private institutions.
//               </li>
//               <li className="flex gap-2">
//                 <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
//                 Fast responses and a student-first experience.
//               </li>
//             </ul>
//             <div className="flex flex-col gap-3 sm:flex-row">
//               <a
//                 href="/services"
//                 className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-primary to-emerald-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-95"
//               >
//                 View Services
//               </a>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center rounded-full border bg-card px-6 py-3 text-sm font-semibold transition hover:bg-accent"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//           <aside className=" rounded-2xl border bg-card p-8 shadow-sm">
//             <h3 className="text-lg font-semibold">Our Promise</h3>
//             <p className="mt-2 text-sm text-muted-foreground">
//               We recommend what’s best for the student—not what’s easiest. Every
//               shortlist is curated with long-term career value in mind.
//             </p>
//             <div className="mt-6 rounded-xl border bg-muted/40 p-4">
//               <p className="text-sm font-medium">Need a quick callback?</p>
//               <p className="mt-1 text-xs text-muted-foreground">
//                 Use the Quick Inquiry popup on Home or message us on WhatsApp.
//               </p>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[5%] -left-[5%] h-[35%] w-[35%] rounded-full bg-emerald-50/70 blur-[100px]" />
        <div className="absolute bottom-[5%] right-[0%] h-[25%] w-[25%] rounded-full bg-blue-50/70 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-20 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            <ShieldCheck className="h-4 w-4" />
            Trusted Education Consultancy in Bhopal
          </div>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            We help students choose the <br />
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              right path, faster.
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
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
            },
            {
              title: "Smart Shortlisting",
              desc: "Rank-based and preference-based guidance to shortlist the most suitable colleges.",
              icon: <Microscope className="h-6 w-6 text-blue-600" />,
              accent: "bg-blue-600",
            },
            {
              title: "End-to-End Support",
              desc: "From documents and deadlines to final reporting—no confusion, no missed steps.",
              icon: <Briefcase className="h-6 w-6 text-indigo-600" />,
              accent: "bg-indigo-600",
            },
          ].map((item, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
            >
              <div>
                <div className="mb-6 inline-flex rounded-2xl bg-slate-50 p-4 transition-colors group-hover:bg-white border border-transparent group-hover:border-slate-100">
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
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
                "Clear, ethical guidance with transparent options.",
                "Strong network across government and private institutions.",
                "Fast responses and a student-first experience.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-slate-700">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-600"
              >
                View Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50"
              >
                Contact Us
              </a>
            </div>
          </div>

          <aside className="relative group">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900">Our Promise</h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We recommend what’s{" "}
                <span className="text-emerald-600 font-semibold italic">
                  best for the student
                </span>
                —not what’s easiest. Every shortlist is curated with long-term
                career value in mind.
              </p>

              <div className="mt-10 rounded-2xl bg-slate-50 p-6 border border-slate-100">
                <p className="text-sm font-bold text-slate-900">
                  Need a quick callback?
                </p>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Use the Quick Inquiry popup on Home or message us directly on
                  WhatsApp for priority support.
                </p>
              </div>
            </div>
            {/* Background Offset Card for depth */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2.5rem] bg-slate-100" />
          </aside>
        </div>
      </div>
    </section>
  );
}
