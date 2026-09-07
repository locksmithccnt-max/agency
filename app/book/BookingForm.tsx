"use client";

import { useState } from "react";

interface BookingFormProps {
  services: string[];
}

export default function BookingForm({ services }: BookingFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      service: fd.get("service") as string,
      date: fd.get("date") as string,
      message: fd.get("message") as string,
    };

    try {
      const res = await fetch("/api/submit-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
    } catch {
      setError("Something went wrong. Please WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#E2E8F0" }}>
          Booking Received!
        </h2>
        <p className="mb-6" style={{ color: "#8B9CB8" }}>
          We'll contact you within 1 hour to confirm your consultation.
        </p>
        <button
          onClick={() => setDone(false)}
          className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: "#4F8EF7" }}
        >
          Book Another
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm font-medium transition-colors outline-none focus:ring-2";
  const inputStyle = {
    backgroundColor: "#080D1A",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "#E2E8F0",
  };
  const labelClass = "block text-sm font-medium mb-1.5";
  const labelStyle = { color: "#8B9CB8" };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={labelStyle}>Full Name *</label>
          <input
            name="name"
            required
            placeholder="e.g. Ahmed Khan"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Email Address *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Phone / WhatsApp *</label>
          <input
            name="phone"
            required
            placeholder="+92 300 0000000"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Service Needed *</label>
          <select
            name="service"
            required
            className={inputClass}
            style={{ ...inputStyle, appearance: "none" }}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} style={labelStyle}>Preferred Date *</label>
        <input
          name="date"
          type="date"
          required
          min={new Date().toISOString().split("T")[0]}
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <div>
        <label className={labelClass} style={labelStyle}>Message / Your Goals</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your business and what you'd like to achieve..."
          className={inputClass}
          style={{ ...inputStyle, resize: "none" }}
        />
      </div>

      {error && (
        <p className="text-sm text-red-400 font-medium">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 rounded-xl font-bold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60"
        style={{ backgroundColor: "#4F8EF7" }}
      >
        {submitting ? "Submitting..." : "Book Free Consultation →"}
      </button>

      <p className="text-center text-xs" style={{ color: "#4A5A6E" }}>
        No spam. No obligation. We'll reply within 1 hour.
      </p>
    </form>
  );
}
