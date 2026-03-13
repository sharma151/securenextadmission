"use client";
"use client";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/navigation";
import Logo from "public/SNAlogo.svg";
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
              <a
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
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* <ThemeToggle /> */}
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
                        <a
                          href={item.href}
                          className="mobile-nav-link"
                          style={
                            isActive
                              ? {
                                  background:
                                    "linear-gradient(90deg, rgba(59,130,246,0.18), rgba(16,185,129,0.14))",
                                  border: "1px solid rgba(59,130,246,0.25)",
                                }
                              : undefined
                          }
                        >
                          <span>{item.title}</span>
                          <span style={{ opacity: 0.65, fontSize: 12 }}>
                            {isActive ? "•" : ""}
                          </span>
                        </a>
                        {/* {item.children && (
                          <div className="mobile-nav-sub">
                            {item.children.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <a
                                  key={child.href}
                                  href={child.href}
                                  className="mobile-nav-sublink"
                                  style={
                                    childActive
                                      ? {
                                          color: "hsl(var(--foreground))",
                                          background:
                                            "rgba(99, 102, 241, 0.12)"
                                        }
                                      : undefined
                                  }
                                >
                                  {child.title}
                                </a>
                              );
                            })}
                          </div>
                        )} */}
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
