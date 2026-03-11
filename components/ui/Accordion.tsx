"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface AccordionProps {
  type: "single";
  collapsible?: boolean;
  children: ReactNode;
}

interface AccordionContextValue {
  value: string | null;
  setValue: (value: string | null) => void;
  collapsible: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined
);

const AccordionItemContext = createContext<string | null>(null);

export function Accordion({
  type,
  collapsible = false,
  children
}: AccordionProps) {
  if (type !== "single") {
    throw new Error("Only single type accordion is implemented");
  }
  const [value, setValue] = useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ value, setValue, collapsible }}>
      <div className="divide-y rounded-xl border">{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children
}: {
  value: string;
  children: ReactNode;
}) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ children }: { children: ReactNode }) {
  const accordion = useContext(AccordionContext);
  const itemValue = useContext(AccordionItemContext);
  if (!accordion) {
    throw new Error("AccordionTrigger must be used within Accordion");
  }
  if (!itemValue) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const isOpen = accordion.value === itemValue;

  const toggle = () => {
    if (isOpen && accordion.collapsible) {
      accordion.setValue(null);
    } else {
      accordion.setValue(itemValue);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground"
    >
      {children}
      <span className="text-xs text-muted-foreground">
        {isOpen ? "−" : "+"}
      </span>
    </button>
  );
}

export function AccordionContent({ children }: { children: ReactNode }) {
  const accordion = useContext(AccordionContext);
  const itemValue = useContext(AccordionItemContext);
  if (!accordion || !itemValue) return null;
  const isOpen = accordion.value === itemValue;
  if (!isOpen) return null;
  return (
    <div className="px-4 pb-4 text-sm text-muted-foreground">{children}</div>
  );
}


