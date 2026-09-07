"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string | null;
  status: string;
  created_at: string;
};

const STATUS_COLORS: Record<string, string> = {
  new: "#FBBF24",
  confirmed: "#4F8EF7",
  completed: "#22C55E",
  cancelled: "#EF4444",
};

const STATUSES = ["new", "confirmed", "completed", "cancelled"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function copyBooking(b: Booking) {
  const text = [
    `📋 Booking Details`,
    `──────────────────`,
    `Name:    ${b.name}`,
    `Email:   ${b.email}`,
    `Phone:   ${b.phone}`,
    `Service: ${b.service}`,
    `Date:    ${b.date}`,
    `Status:  ${b.status.toUpperCase()}`,
    b.message ? `Message: ${b.message}` : null,
    `Booked:  ${formatDate(b.created_at)}`,
  ]
    .filter(Boolean)
    .join("\n");
  navigator.clipboard.writeText(text);
}

export default function AdminPanel() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin-bookings");
    if (res.status === 401) { router.refresh(); return; }
    const data = await res.json();
    setBookings(data.bookings ?? []);
    setLoading(false);
  }, [router]);

  useEffect(() => { fetchBookings(); }, [fetchBookings]);

  async function handleDelete(id: string) {
    if (!confirm("Delete this booking?")) return;
    setDeleting(id);
    await fetch("/api/admin-bookings", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setBookings((prev) => prev.filter((b) => b.id !== id));
    setDeleting(null);
  }

  async function handleStatus(id: string, status: string) {
    await fetch("/api/admin-bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  }

  async function handleLogout() {
    await fetch("/api/admin-auth", { method: "DELETE" });
    router.refresh();
  }

  function handleCopy(b: Booking) {
    copyBooking(b);
    setCopied(b.id);
    setTimeout(() => setCopied(null), 2000);
  }

  const filtered = bookings.filter((b) => {
    const matchStatus = filter === "all" || b.status === filter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      b.name.toLowerCase().includes(q) ||
      b.email.toLowerCase().includes(q) ||
      b.phone.includes(q) ||
      b.service.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const counts = {
    all: bookings.length,
    new: bookings.filter((b) => b.status === "new").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    completed: bookings.filter((b) => b.status === "completed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  return (
    <div className="min-h-screen px-4 py-10" style={{ backgroundColor: "#080D1A" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1
              className="text-3xl font-extrabold"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Bookings Admin
            </h1>
            <p className="text-sm mt-1" style={{ color: "#8B9CB8" }}>
              {bookings.length} total booking{bookings.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchBookings}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#0D1627", border: "1px solid rgba(255,255,255,0.10)", color: "#8B9CB8" }}
            >
              🔄 Refresh
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#0D1627", border: "1px solid rgba(239,68,68,0.3)", color: "#EF4444" }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          {(["all", "new", "confirmed", "completed", "cancelled"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className="rounded-xl py-3 text-center text-sm font-semibold transition-all"
              style={{
                backgroundColor: filter === s ? "rgba(79,142,247,0.15)" : "#0D1627",
                border: filter === s ? "1px solid rgba(79,142,247,0.4)" : "1px solid rgba(255,255,255,0.07)",
                color: filter === s ? "#4F8EF7" : "#8B9CB8",
              }}
            >
              <div
                className="text-xl font-extrabold"
                style={{ color: filter === s ? "#4F8EF7" : STATUS_COLORS[s] ?? "#E2E8F0" }}
              >
                {counts[s]}
              </div>
              <div className="capitalize mt-0.5">{s}</div>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name, email, phone or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none"
            style={{
              backgroundColor: "#0D1627",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#E2E8F0",
            }}
          />
        </div>

        {/* Bookings */}
        {loading ? (
          <div className="text-center py-20" style={{ color: "#8B9CB8" }}>
            Loading bookings...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20" style={{ color: "#8B9CB8" }}>
            {search || filter !== "all" ? "No bookings match your filter." : "No bookings yet."}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((b) => (
              <div
                key={b.id}
                className="rounded-2xl p-5"
                style={{ backgroundColor: "#0D1627", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex flex-wrap items-start gap-4">
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="font-bold text-base" style={{ color: "#E2E8F0" }}>
                        {b.name}
                      </span>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-bold capitalize"
                        style={{
                          backgroundColor: `${STATUS_COLORS[b.status] ?? "#8B9CB8"}20`,
                          color: STATUS_COLORS[b.status] ?? "#8B9CB8",
                          border: `1px solid ${STATUS_COLORS[b.status] ?? "#8B9CB8"}40`,
                        }}
                      >
                        {b.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm mb-3">
                      <span style={{ color: "#8B9CB8" }}>📧 {b.email}</span>
                      <span style={{ color: "#8B9CB8" }}>📞 {b.phone}</span>
                      <span style={{ color: "#8B9CB8" }}>🔧 {b.service}</span>
                      <span style={{ color: "#8B9CB8" }}>📅 {b.date}</span>
                    </div>

                    {b.message && (
                      <p
                        className="text-sm rounded-xl px-3 py-2 mt-1"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.03)",
                          color: "#8B9CB8",
                          border: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        💬 {b.message}
                      </p>
                    )}

                    <p className="text-xs mt-2" style={{ color: "#4A5A6E" }}>
                      Received: {formatDate(b.created_at)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => handleCopy(b)}
                      className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: copied === b.id ? "rgba(34,197,94,0.15)" : "rgba(79,142,247,0.10)",
                        border: copied === b.id ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(79,142,247,0.25)",
                        color: copied === b.id ? "#22C55E" : "#4F8EF7",
                        minWidth: "100px",
                      }}
                    >
                      {copied === b.id ? "✓ Copied!" : "📋 Copy"}
                    </button>

                    <select
                      value={b.status}
                      onChange={(e) => handleStatus(b.id, e.target.value)}
                      className="rounded-xl px-3 py-2 text-xs font-semibold outline-none"
                      style={{
                        backgroundColor: "#080D1A",
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: "#8B9CB8",
                        cursor: "pointer",
                      }}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => handleDelete(b.id)}
                      disabled={deleting === b.id}
                      className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:opacity-50"
                      style={{
                        backgroundColor: "rgba(239,68,68,0.10)",
                        border: "1px solid rgba(239,68,68,0.25)",
                        color: "#EF4444",
                      }}
                    >
                      {deleting === b.id ? "..." : "🗑 Delete"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
