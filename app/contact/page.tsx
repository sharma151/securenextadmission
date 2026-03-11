// import type { Metadata } from "next";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { ContactForm } from "@/components/forms/ContactForm";

// export function generateMetadata(): Metadata {
//   return {
//     title: "Contact"
//   };
// }

// export default function ContactPage() {
//   return (
//     <section className="bg-background">
//       <div className="mx-auto max-w-6xl px-4 py-12">
//         <header className="mb-10 space-y-4">
//           <p className="inline-flex w-fit rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
//             Let’s talk
//           </p>
//           <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
//             Contact Secure Next Admission
//           </h1>
//           <p className="max-w-2xl text-muted-foreground">
//             Have a question about admissions, counselling rounds, or course
//             selection? Send a message and our expert will respond quickly.
//           </p>
//         </header>

//         <div className="grid gap-8 lg:grid-cols-5">
//           <div className="space-y-4 lg:col-span-2">
//             <article className="gradient-card rounded-2xl border bg-card p-6 shadow-sm">
//               <div className="flex items-start gap-3">
//                 <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20">
//                   <Phone className="h-5 w-5 text-primary" />
//                 </span>
//                 <div>
//                   <h2 className="text-sm font-semibold">Phone</h2>
//                   <p className="mt-1 text-sm text-muted-foreground">
//                     +91 XXXXX XXXXX
//                   </p>
//                 </div>
//               </div>
//             </article>

//             <article className="gradient-card rounded-2xl border bg-card p-6 shadow-sm">
//               <div className="flex items-start gap-3">
//                 <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20">
//                   <Mail className="h-5 w-5 text-primary" />
//                 </span>
//                 <div>
//                   <h2 className="text-sm font-semibold">Email</h2>
//                   <p className="mt-1 text-sm text-muted-foreground">
//                     hello@securenextadmission.com
//                   </p>
//                 </div>
//               </div>
//             </article>

//             <article className="gradient-card rounded-2xl border bg-card p-6 shadow-sm">
//               <div className="flex items-start gap-3">
//                 <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20">
//                   <MapPin className="h-5 w-5 text-primary" />
//                 </span>
//                 <div>
//                   <h2 className="text-sm font-semibold">Office</h2>
//                   <p className="mt-1 text-sm text-muted-foreground">
//                     Bhopal, Madhya Pradesh
//                   </p>
//                 </div>
//               </div>
//             </article>
//           </div>

//           <div className="gradient-card rounded-2xl border bg-card p-6 shadow-sm lg:col-span-3">
//             <h2 className="text-xl font-semibold">Send a message</h2>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Share your details and requirements. We’ll call you back if needed.
//             </p>
//             <div className="mt-6">
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export function generateMetadata(): Metadata {
  return {
    title: "Contact Us | Secure Next Admission",
    description:
      "Get expert admission guidance. Reach out to us for Engineering, Medical, and Management counselling.",
  };
}

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-white py-24">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-50/50 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-16 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600">
            <MessageSquare className="h-3 w-3" />
            Let’s talk
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Connect with our <br />
            <span className="text-emerald-600">Admission Experts.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            Have a question about admissions, counselling rounds, or course
            selection? Send a message and our expert will respond quickly.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info Sidebar */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {[
              {
                label: "Phone",
                value: "+91 XXXXX XXXXX",
                sub: "Mon - Sat, 10am to 7pm",
                icon: Phone,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                label: "Email",
                value: "hello@securenextadmission.com",
                sub: "Expect a reply within 24h",
                icon: Mail,
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                label: "Office",
                value: "Bhopal, Madhya Pradesh",
                sub: "Consultation by appointment",
                icon: MapPin,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="group flex items-center gap-5 rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/40"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.bg} transition-transform group-hover:scale-105`}
                >
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400">
                    {item.label}
                  </h2>
                  <p className="text-lg font-bold text-slate-900">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-500">{item.sub}</p>
                </div>
              </article>
            ))}

            {/* Availability Badge */}
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
              <div className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-medium text-emerald-800">
                Currently accepting new inquiries for 2026 session.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/50 lg:col-span-3 lg:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Send a message
              </h2>
              <p className="mt-2 text-slate-500">
                Share your details and requirements. We’ll call you back to
                discuss your pathway.
              </p>
            </div>

            <div className="relative z-10">
              <ContactForm />
            </div>

            {/* Decorative element for form */}
            <div className="absolute bottom-6 right-6 opacity-[0.03] grayscale">
              <Clock className="h-24 w-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
