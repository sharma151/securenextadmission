import { QuickInquiryDialog } from "@/components/forms/QuickInquiryDialog";
import { InquiryForm } from "@/components/forms/InquiryForm";
import type { Metadata } from "next";
import { MainCarousel } from "@/components/carousel";

export function generateMetadata(): Metadata {
  return {
    title: "Home",
  };
}

export default function HomePage() {
  return (
    <>
      {/* <QuickInquiryDialog /> */}
      {/* <MainCarousel /> */}
      <section className="bg-linear-to-b from-primary/5 via-background to-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1 space-y-6">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Secure Your <span className="">Dream Admission</span> with Expert
              Guidance.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Personalized counselling for Engineering, Medical, and Management
              aspirants. From college shortlisting to final admission, we are
              with you at every step.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/admission"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-primary to-emerald-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-95"
              >
                Explore Admissions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
              >
                Talk to an Expert
              </a>
            </div>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                One-to-one expert counselling
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Support for B.Tech, M.Tech, MBBS, MBA &amp; more
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Transparent &amp; ethical guidance
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                All-India college network
              </li>
            </ul>
          </div>
          {/* <div className="flex-1">
            <div className="gradient-card mx-auto max-w-md rounded-2xl border bg-card p-6 shadow-lg shadow-primary/5">
              <h2 className="mb-1 text-xl font-semibold">
                Quick Admission Inquiry
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Share basic details and our expert counsellor will call you
                back within 24 hours.
              </p>
              <InquiryForm />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
