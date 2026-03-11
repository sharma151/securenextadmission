"use client";

import { useState, type FormEvent } from "react";

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...payload, type: "inquiry" })
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Enter your full name"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Mobile Number
        </label>
        <input
          id="phone"
          name="phone"
          required
          pattern="[0-9]{10}"
          className="w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="10-digit mobile number"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="course" className="text-sm font-medium">
          Course Interest
        </label>
        <select
          id="course"
          name="course"
          className="w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          defaultValue="Engineering"
        >
          <option value="Engineering">Engineering (B.Tech / M.Tech)</option>
          <option value="Medical">Medical (MBBS / BDS / BAMS)</option>
          <option value="Management">Management (BBA / MBA)</option>
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-emerald-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-95 disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Request Callback"}
      </button>
      {status === "success" && (
        <p className="text-center text-xs text-muted-foreground">
          Thanks! Our counsellor will contact you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-xs text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to be contacted by our counsellor for admission
        guidance.
      </p>
    </form>
  );
}

