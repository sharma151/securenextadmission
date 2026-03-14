import type { Metadata } from "next";
import { cloneElement, ReactElement } from "react";
import {
  GraduationCap,
  Stethoscope,
  Building2,
  UserCheck,
  Users,
  Briefcase,
  CheckCircle2,
  MapPin,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bhopal Admission Consultancy | Expert Engineering & Medical Guidance",
  description:
    "Get expert-led admission guidance for B.Tech, MBBS, and MBA in Bhopal. Personalized counseling from industry professionals.",
};

// --- Helper Components ---

function IconBox({ children }: { children: ReactElement }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E9FAF1] text-[#108A58]">
      {cloneElement(children)}
    </div>
  );
}

function ExpertiseCard({
  icon,
  title,
  description,
  courses,
}: {
  icon: ReactElement;
  title: string;
  description: string;
  courses: string[];
}) {
  return (
    <div className="group shadow-sm flex gap-4 relative rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:border-[#108A58]/20 hover:shadow-xl hover:shadow-[#108A58]/5">
      <IconBox>{icon}</IconBox>
      <div>
        <h3 className=" text-xl font-bold text-slate-900">{title}</h3>
        <p className=" text-sm leading-relaxed text-slate-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {courses.map((course) => (
            <span
              key={course}
              className="rounded-full shrink-0 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 uppercase "
            >
              {course}
            </span>
          ))}
        </div>
        <a
          href="/admission"
          className="mt-8 flex items-center gap-1 text-sm font-bold text-[#108A58] transition-all group-hover:gap-3"
        >
          Learn More <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#E9FAF1]/50 via-white to-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-2 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-emerald-700">
                <MapPin size={16} />
                <span>Bhopal's Education Consultants</span>
              </div>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
                Secure Your{" "}
                <span className="text-[#108A58]">Dream Admission</span> With
                Industry Experts.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Skip the guesswork. Get guided by academic professionals for
                Engineering, Medical, and Management admissions in Bhopal and
                beyond.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#108A58] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#108A58]/20 transition hover:bg-[#0d7349]"
                >
                  Get Free Consultation <PhoneCall size={18} />
                </a>
                <a
                  href="/admission"
                  className="flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold transition hover:bg-slate-50"
                >
                  Explore Admissions
                </a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <UserCheck />,
                    label: "Industry Experts",
                    sub: "To Guide You",
                  },
                  {
                    icon: <Users />,
                    label: "Personalized",
                    sub: "1-on-1 Mentorship",
                  },
                  {
                    icon: <Briefcase />,
                    label: "Career Focus",
                    sub: "Placement Insights",
                  },
                  {
                    icon: <CheckCircle2 />,
                    label: "99% Success",
                    sub: "Admission Rate",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9FAF1] text-[#108A58]">
                      {cloneElement(stat.icon as ReactElement)}
                    </div>
                    <div className="text-lg font-bold">{stat.label}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIALIZATIONS SECTION */}
      <section>
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Specialized Support for{" "}
              <span className="text-[#108A58]">Every Aspirant</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Our industry experts provide deeper insights into curriculum,
              future trends, and college placement realities in Bhopal.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <ExpertiseCard
              icon={<GraduationCap />}
              title="Engineering"
              description="From JEE counseling to direct admission in top Bhopal institutes like LNCT, Oriental, and TIT."
              courses={["B.Tech", "M.Tech", "Lateral Entry"]}
            />
            <ExpertiseCard
              icon={<Stethoscope />}
              title="Medical"
              description="Strategic NEET counseling for MBBS, BDS and B.Pharma in India and abroad with full document support."
              courses={["MBBS", "BDS", "B.Pharma"]}
            />
            <ExpertiseCard
              icon={<Building2 />}
              title="Management"
              description="Get into top-tier B-Schools. We help with profile building for MBA and BBA admissions."
              courses={["MBA", "BBA", "PGDM"]}
            />
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (The Expert Advantage) */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why Students Trust Our{" "}
                <span className="text-[#108A58]">Industry Experts</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Academic Consultants",
                    desc: "Our team includes former admission officers who know exactly what colleges look for.",
                  },
                  {
                    title: "Bhopal Ground Reality",
                    desc: "Direct tie-ups and deep knowledge of Madhya Pradesh DTE counseling processes.",
                  },
                  {
                    title: "Transparency First",
                    desc: "No hidden charges or false promises. We provide ethical, merit-based guidance.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#108A58] text-white">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="relative  overflow-hidden  bg-slate-900 p-8 md:p-16 flex justify-center">
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Take the First Step Towards Your Future.
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Our experts are ready to help you navigate the complex admission
            process in Bhopal.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+919109250739"
              className="flex items-center gap-2 text-xl font-bold text-[#108A58]"
            >
              <PhoneCall /> +91 9109250739
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/20 blur-[80px]" />
      </section>
    </main>
  );
}
