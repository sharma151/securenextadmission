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
    title: "Our Services | Secure Next Admission - Bhopal",

    description:
      "Explore the admission services offered by Secure Next Admission in Bhopal including Engineering, Medical, and MBA counselling, college selection, and admission support.",

    keywords: [
      "education consultancy services Bhopal",
      "engineering admission services",
      "medical admission consultancy",
      "MBA admission guidance",
      "college admission services India",
    ],

    openGraph: {
      title: "Admission Services | Secure Next Admission",
      description:
        "Comprehensive admission services for Engineering, Medical, and Management courses.",
      url: "https://securenextadmission.com/services",
      siteName: "Secure Next Admission",
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Admission Services | Secure Next Admission",
      description:
        "Expert admission support for top colleges and universities.",
    },

    robots: {
      index: true,
      follow: true,
    },
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
    /* Added overflow-x-hidden to the main container to prevent any horizontal scroll */
    <section className="relative w-full overflow-x-hidden bg-linear-to-b from-[#E9FAF1]/50 via-white to-white py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-12 md:mb-20 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-slate-100 px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
            <Sparkles className="size-4 text-emerald-600" />
            What we do best
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Services built for <br />
            <span className="text-emerald-600">clarity & outcomes.</span>
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-500">
            Whether you’re targeting top-tier government colleges or seeking the
            best private institution for your budget, our process removes the
            guesswork.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative rounded-2xl md:rounded-3xl border border-slate-100 bg-white p-6 md:p-8 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 shadow-sm "
              >
                <div className="flex gap-5 md:gap-6">
                  <div
                    className={`inline-flex shrink-0 h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl ${service.bg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`h-6 w-6 md:h-7 md:w-7 ${service.color}`}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                      {service.title}
                    </h2>
                    <p className="mt-2 md:mt-3 text-sm md:text-base leading-relaxed text-slate-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative mt-16 md:mt-24 overflow-hidden rounded-3xl bg-slate-900 p-8 md:p-16">
          <div className="relative z-10 flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Ready to secure your future?
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-400">
                Share your rank and budget with us. We’ll provide a tailored
                roadmap to your dream college today.
              </p>
            </div>

            <div className="flex flex-col w-full sm:w-auto gap-3 sm:flex-row lg:mt-0">
              <a
                href="/admission"
                className="inline-flex shrink-0 h-12 md:h-14 items-center justify-center rounded-xl bg-emerald-500 px-8 text-sm font-bold text-white transition-all hover:bg-emerald-400 active:scale-95"
              >
                Get Started Now
              </a>
              <a
                href="/contact"
                className=" shrink-0 inline-flex h-12 md:h-14 items-center justify-center rounded-xl border border-slate-700 bg-transparent px-8 text-sm font-bold text-white transition-all hover:bg-slate-800 active:scale-95"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* Fixed Background Glow: Changed -right-24 to 0 and added max-w-full to prevent overflow */}
          <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/20 blur-[80px]" />
        </div>
      </div>
    </section>
  );
}
