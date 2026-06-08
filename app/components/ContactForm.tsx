"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = event.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || ""),
      organization: String(fd.get("organization") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      opportunityType: String(fd.get("opportunityType") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-950 shadow-2xl"
      noValidate
    >
      <h3 className="text-2xl font-black text-[#0B1F3A]">Opportunity Inquiry</h3>

      {/* Honeypot - hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="mt-6 grid gap-4">
        <input
          name="name"
          required
          placeholder="Name *"
          className="rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />

        <input
          name="organization"
          placeholder="Organization / Agency"
          className="rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          className="rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email *"
          className="rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />

        <select
          name="opportunityType"
          defaultValue="Fleet Vehicle Repair"
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        >
          <option>Fleet Vehicle Repair</option>
          <option>Hail / Storm Response</option>
          <option>Claims Management</option>
          <option>Government Contracting</option>
          <option>Other</option>
        </select>

        <textarea
          name="message"
          required
          placeholder="Tell us about the opportunity... *"
          rows={5}
          className="rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-2xl bg-[#0B1F3A] px-6 py-4 font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit Inquiry"}
        </button>

        {status === "success" && (
          <div
            role="status"
            className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800"
          >
            Thanks. Your inquiry was sent. We&apos;ll be in touch shortly.
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800"
          >
            {errorMsg}
          </div>
        )}
      </div>
    </form>
  );
}
