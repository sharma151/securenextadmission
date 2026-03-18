import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { navLinks } from "@/config/navigation";
import { Poppins, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontDisplay = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://securenextadmission.com"),

  title: {
    default: "Secure Next Admission",
    template: "%s | Best Education Consultancy Bhopal",
  },

  description:
    "Secure Next Admission is a trusted education consultancy in Bhopal helping students secure admissions in engineering, medical, MBA, and top universities across India.",

  keywords: [
    "Education consultancy Bhopal",
    "Engineering admission Bhopal",
    "Medical admission consultancy",
    "MBA admission consultant",
    "College admission guidance Bhopal",
    "Secure Next Admission",
  ],

  authors: [{ name: "Secure Next Admission" }],

  openGraph: {
    title: "Secure Next Admission | Best Education Consultancy in Bhopal",
    description:
      "Expert guidance for engineering, medical, and management admissions across India.",
    url: "https://securenextadmission.com",
    siteName: "Secure Next Admission",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Secure Next Admission",
    description:
      "Best consultancy in Bhopal for engineering, medical, and MBA admissions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${fontDisplay.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t bg-muted/40">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground items-center md:flex-row md:justify-between">
              {/* Centered on mobile, left-aligned with padding on desktop */}
              <p className="text-center md:text-left md:pl-7">
                &copy; {new Date().getFullYear()} Secure Next Admission.
              </p>

              {/* Hidden on mobile (hidden), shown on medium screens and up (md:flex) */}
              <nav
                aria-label="Footer navigation"
                className="hidden md:flex flex-wrap gap-4"
              >
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:text-foreground"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </footer>
          <WhatsAppFab />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
