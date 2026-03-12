"use client";

import { X } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface SheetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = createContext<SheetContextValue | undefined>(undefined);

export function Sheet({
  children,
  open,
  onOpenChange,
}: {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const valueOpen = isControlled ? open : internalOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <SheetContext.Provider value={{ open: valueOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({
  children,
  ...buttonProps
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  const ctx = useContext(SheetContext);
  if (!ctx) throw new Error("SheetTrigger must be used within Sheet");
  return (
    <button type="button" onClick={() => ctx.setOpen(true)} {...buttonProps}>
      {children}
    </button>
  );
}

export function SheetContent({ children }: { children: ReactNode }) {
  const ctx = useContext(SheetContext);
  if (!ctx || !ctx.open) return null;
  return (
    <div className="mobile-sheet-overlay">
      <div
        className="mobile-sheet-backdrop"
        onClick={() => ctx.setOpen(false)}
      />
      <div className="mobile-sheet-panel">{children}</div>
    </div>
  );
}

export function SheetHeader({ children }: { children: ReactNode }) {
  return <div className="mb-2">{children}</div>;
}

export function SheetTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export function SheetCloseButton() {
  const ctx = useContext(SheetContext);
  if (!ctx) return null;
  return (
    <button
      type="button"
      onClick={() => ctx.setOpen(false)}
      aria-label="Close menu"
      className="absolute right-4 top-4 text-muted-foreground hover:text-foreground "
    >
      <X />
    </button>
  );
}
