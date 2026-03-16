import type { Metadata } from "next";
import AdmissionTab from "@/components/AdmissionTabs/index";

export function generateMetadata(): Metadata {
  return {
    title: "Admission Guidance | Secure Next Admission - Bhopal",

    description:
      "Get expert admission guidance in Bhopal for Engineering, Medical, and MBA programs. Secure Next Admission helps students choose the right colleges and navigate the admission process across India.",

    keywords: [
      "Admission guidance Bhopal",
      "Engineering admission consultancy",
      "Medical admission guidance",
      "MBA admission consultancy Bhopal",
      "college admission counselling",
    ],

    openGraph: {
      title: "Admission Guidance | Secure Next Admission",
      description:
        "Professional admission counselling for Engineering, Medical, and Management courses.",
      url: "https://securenextadmission.com/admission",
      siteName: "Secure Next Admission",
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Admission Guidance | Secure Next Admission",
      description:
        "Expert guidance for Engineering, Medical, and MBA admissions across India.",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AdmissionPage() {
  return (
    <div>
      <AdmissionTab />
    </div>
  );
}
