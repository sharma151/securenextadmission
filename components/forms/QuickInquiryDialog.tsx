"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogCloseButton
} from "@/components/ui/Dialog";
import { InquiryForm } from "./InquiryForm";

const STORAGE_KEY = "quick-inquiry-dismissed";

export function QuickInquiryDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setOpen(true);
    }
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next && typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogCloseButton />
        <DialogHeader>
          <DialogTitle>Quick Inquiry</DialogTitle>
          <DialogDescription>
            Fill a short form and our team will help you shortlist the best
            colleges as per your rank and budget.
          </DialogDescription>
        </DialogHeader>
        {/* <InquiryForm /> */}
      </DialogContent>
    </Dialog>
  );
}

