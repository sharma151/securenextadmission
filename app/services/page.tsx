import type { Metadata } from "next";
import {
  GraduationCap,
  FileText,
  Compass,
  PhoneCall,
  Sparkles,
} from "lucide-react";

export function generateMetadata(): Metadata {
  return {
    title: "Our Services | Secure Next Admission",
    description:
      "Expert admission services for Engineering, Medical, and Management students.",
  };
}

const services = [
  {
    title: "Career & Course Counselling",
    description:
      "Understand your strengths and pick the right branch and pathway with expert guidance tailored to your goals.",
    icon: Compass,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "College Shortlisting",
    description:
      "Data-backed shortlisting based on your rank, budget, location, and placement history of top institutions.",
    icon: GraduationCap,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Documents & Application Support",
    description:
      "Hassle-free form filling, document verification, deadline tracking, and precision-driven submissions.",
    icon: FileText,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Admission Helpline",
    description:
      "Real-time assistance for counselling rounds, seat allocation, and final reporting steps at the college.",
    icon: PhoneCall,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative min-h-screen bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-20 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
            <Sparkles className="h-3 w-3 text-[#10b981]" />
            What we do best
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl ">
            Services built for <br />
            <span className="text-emerald-600">clarity & outcomes.</span>
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500 ">
            Whether you’re targeting top-tier government colleges or seeking the
            best private institution for your budget, our process removes the
            guesswork.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative rounded-3xl border shadow-sm border-slate-100 bg-white p-8 transition-all duration-300 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/5 hover:border"
              >
                <div className="flex flex-col gap-6">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`h-7 w-7 ${service.color}`} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-slate-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 shadow-2xl md:p-12 lg:p-16">
          <div className="relative z-10 flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to secure your future?
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Share your rank and budget with us. We’ll provide a tailored
                roadmap to your dream college today.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0">
              <a
                href="/admission"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-emerald-500 px-8 text-sm font-bold text-white transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                Get Started Now
              </a>
              <a
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-700 bg-transparent px-8 text-sm font-bold text-white transition-all hover:bg-slate-800"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* Subtle background glow for CTA */}
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
