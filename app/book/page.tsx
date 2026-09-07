import type { Metadata } from "next";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book a Free Consultation | SBMP",
  description:
    "Book a free strategy call with our digital marketing experts. Local SEO, Google Ads, Web Design and more. No obligation.",
};

const SERVICES = [
  "Local SEO",
  "Google Ads",
  "Web Design",
  "Social Media Management",
  "Google Business Profile",
  "Reputation Management",
];

export default function BookPage() {
  return (
    <main className="min-h-screen py-16 px-4" style={{ backgroundColor: "#080D1A" }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-5"
            style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}
          >
            📅 Free Consultation
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Book Your Strategy Call
          </h1>
          <p className="text-lg" style={{ color: "#8B9CB8" }}>
            Speak with a local SEO expert. Get a tailored growth plan for your business — completely free.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: "#0D1627", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <BookingForm services={SERVICES} />
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[
            { icon: "🕐", text: "Reply within 1 hour" },
            { icon: "🔒", text: "No obligation" },
            { icon: "📞", text: "60-min strategy call" },
          ].map((item) => (
            <div
              key={item.text}
              className="rounded-xl p-4 text-center text-sm"
              style={{ backgroundColor: "#0D1627", border: "1px solid rgba(255,255,255,0.06)", color: "#8B9CB8" }}
            >
              <div className="text-xl mb-1">{item.icon}</div>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
