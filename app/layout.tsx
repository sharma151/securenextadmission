import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/navigation/Header";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { navLinks } from "@/config/navigation";
import { Inter, Poppins } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontDisplay = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: {
    default: "Secure Next Admission",
    template: "%s | Best Education Consultancy Bhopal"
  },
  description:
    "Secure Next Admission is a high-performance education consultancy in Bhopal specializing in engineering, medical, and management admissions."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${fontSans.variable} ${fontDisplay.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-muted/40">
              <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                <p>&copy; {new Date().getFullYear()} Secure Next Admission.</p>
                <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
                  {navLinks.map((item) => (
                    <a key={item.href} href={item.href} className="hover:text-foreground">
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </footer>
            <WhatsAppFab />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

