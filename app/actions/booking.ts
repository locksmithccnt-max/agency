"use server";

// Stub — booking system migrated to Supabase via /api/submit-booking and /api/admin-bookings
export async function getServices(..._a: unknown[]) { return []; }
export async function getBookings(..._a: unknown[]) { return { bookings: [], total: 0, pages: 1 }; }
export async function createBooking(..._a: unknown[]) { return { error: "Use /api/submit-booking" }; }
export async function updateBookingStatus(..._a: unknown[]) { return { error: "Use /api/admin-bookings" }; }
export async function updateBooking(..._a: unknown[]) { return { error: "Use /api/admin-bookings" }; }
export async function deleteBooking(..._a: unknown[]) { return { error: "Use /api/admin-bookings" }; }
export async function getAvailableSlots(..._a: unknown[]) { return []; }
export async function getBookingById(..._a: unknown[]) { return null; }
export async function getDashboardStats(..._a: unknown[]) {
  return { pending: 0, confirmed: 0, completed: 0, cancelled: 0, todayCount: 0, todayBookings: [], monthBookings: 0, revenue: 0 };
}
