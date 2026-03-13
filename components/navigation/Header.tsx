"use client";
"use client";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/navigation";
import Logo from "public/SNAlogo.svg";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetCloseButton,
} from "@/components/ui/Sheet";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="group flex items-center gap-2">
          <Image
            src={Logo}
            alt="WhatsApp"
            width={34}
            height={34}
            className="relative h-15 w-15"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-wide">
              Secure Next Admission
            </span>
            <span className="text-xs text-muted-foreground">
              Education Consultancy Bhopal
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-muted-foreground transition hover:text-foreground ${
                  isActive ? "text-foreground" : ""
                }`}
              >
                {item.title}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-linear-to-r from-primary to-emerald-500 transition ${
                    isActive ? "scale-x-100" : "group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="md:hidden ">
            <Sheet>
              <SheetTrigger
                aria-label="Open navigation"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-card text-foreground"
              >
                <Menu className="h-4 w-4" />
              </SheetTrigger>
              <SheetContent>
                <SheetCloseButton />
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile navigation" className="mt-3 bg-white">
                  {navLinks.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" &&
                        pathname.startsWith(`${item.href}/`));
                    return (
                      <div key={item.href}>
                        {/* <SheetClose asChild> */}
                          <Link
                            href={item.href}
                            className={`
      flex items-center justify-between px-6 py-4 text-lg font-medium transition-all duration-200 rounded-2xl border
      ${
        isActive
          ? "bg-[#E9FAF1] border-[#108A58]/20 text-[#108A58]"
          : "bg-white border-transparent text-slate-600 hover:bg-slate-50"
      }
    `}
                          >
                            <span>{item.title}</span>

                            {isActive ? (
                              <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#108A58] text-white">
                                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                              </span>
                            ) : (
                              <span className="text-slate-300">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </span>
                            )}
                          </Link>
                        {/* </SheetClose> */}
                      </div>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
