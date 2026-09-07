"use server";

// Stub — booking system migrated to Supabase via /api/submit-booking and /api/admin-bookings
export async function getServices() { return []; }
export async function getBookings() { return { bookings: [], total: 0, pages: 1 }; }
export async function createBooking() { return { error: "Use /api/submit-booking" }; }
export async function updateBookingStatus() { return { error: "Use /api/admin-bookings" }; }
export async function deleteBooking() { return { error: "Use /api/admin-bookings" }; }
export async function getAvailableSlots() { return []; }
export async function getDashboardStats() {
  return { pending: 0, confirmed: 0, completed: 0, cancelled: 0, todayCount: 0, todayBookings: [], monthBookings: 0, revenue: 0 };
}
