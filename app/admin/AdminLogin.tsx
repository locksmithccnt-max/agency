"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      setError("Incorrect password. Try again.");
    }
    setLoading(false);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#080D1A" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8"
        style={{ backgroundColor: "#0D1627", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🔐</div>
          <h1
            className="text-2xl font-extrabold"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Admin Access
          </h1>
          <p className="text-sm mt-1" style={{ color: "#8B9CB8" }}>
            Enter your password to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoFocus
            className="w-full rounded-xl px-4 py-3 text-sm font-medium outline-none"
            style={{
              backgroundColor: "#080D1A",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#E2E8F0",
            }}
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 disabled:opacity-60"
            style={{ backgroundColor: "#4F8EF7" }}
          >
            {loading ? "Checking..." : "Login →"}
          </button>
        </form>
      </div>
    </div>
  );
}
