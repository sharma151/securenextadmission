import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export function generateMetadata(): Metadata {
  return {
    title: "Contact Us | Secure Next Admission - Bhopal",

    description:
      "Contact Secure Next Admission in Bhopal for expert counselling on Engineering, Medical, and Management admissions. Get personalized guidance to secure seats in top colleges.",

    keywords: [
      "Contact admission consultant Bhopal",
      "Education consultancy contact Bhopal",
      "college admission help Bhopal",
      "Secure Next Admission contact",
    ],

    openGraph: {
      title: "Contact Secure Next Admission",
      description:
        "Reach out for professional admission counselling and career guidance.",
      url: "https://securenextadmission.com/contact",
      siteName: "Secure Next Admission",
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Contact Secure Next Admission",
      description:
        "Get admission counselling for Engineering, Medical, and MBA programs.",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-linear-to-b from-[#E9FAF1]/50 via-white to-white py-10  sm:py-12 md:py-16 md:px-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs sm:text-sm border font-bold uppercase tracking-wider text-slate-600">
            <MessageSquare className="size-4 text-emerald-600" />
            LET'S TALK
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Connect with our <br />
            <span className="text-emerald-600">Admission Experts.</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
            Have a question about admissions, counselling rounds, or course
            selection? Send a message and our expert will respond quickly.
          </p>
        </header>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-2">
            {[
              {
                label: "Phone",
                value: "+91- 9343003774, 9691598475",
                sub: "Mon - Sat, 10am to 7pm",
                icon: Phone,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                label: "Email",
                value: "contact@securenextadmission.com",
                sub: "Expect a reply within 24h",
                icon: Mail,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                label: "Office",
                value: "misroad, Bhopal, MP",
                sub: "Consultation by appointment",
                icon: MapPin,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 sm:p-5 lg:p-6 transition-all shadow-sm hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/40"
              >
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-xl ${item.bg} transition-transform group-hover:scale-105`}
                >
                  <item.icon
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`}
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="text-[10px] text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </h2>

                  <p className="text-sm md:text-xs xl:text-sm  font-extrabold text-slate-900 leading-tight wrap-break-words">
                    {item.value}
                  </p>

                  {item.sub && (
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
                      {item.sub}
                    </p>
                  )}
                </div>
              </article>
            ))}

            {/* Availability */}
            <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs sm:text-sm font-medium text-emerald-800">
                Currently accepting new inquiries for 2026 session.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="relative rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 lg:p-12 shadow-sm  lg:col-span-3">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Send a message
              </h2>

              <p className="mt-2 text-sm sm:text-base text-slate-500">
                Share your details and requirements. We’ll call you back to
                discuss your pathway.
              </p>
            </div>

            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
