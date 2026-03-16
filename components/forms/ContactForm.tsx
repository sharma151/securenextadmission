"use client";

import { useState, type FormEvent } from "react";
import emailjs from "emailjs-com";

export function ContactForm() {
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
      emailjs.init("g2dbZEziBg4PaCeWz");
      await emailjs.send("service_lgycjmt", "template_s523us8", payload);
      setStatus("success");
    } catch (err) {
      console.error("FAILED...", err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Full Name
          </label>

          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Mobile Number
          </label>

          <input
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}"
            inputMode="numeric"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            placeholder="10-digit number"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 sm:rows-5"
          placeholder="Tell us what you're looking for..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center rounded-full bg-linear-to-r from-primary to-emerald-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:shadow-xl disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {/* Status */}
      {status === "success" && (
        <p className="text-center text-sm text-emerald-600">
          Message sent successfully, We’ll get back to you shortly.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Failed to send message. Please try again later. ❌
        </p>
      )}
    </form>
  );
}
