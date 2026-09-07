"use server";

// Stub — booking system migrated to Supabase via /api/submit-booking and /api/admin-bookings
export async function getServices(..._a: unknown[]): Promise<unknown[]> { return []; }

export async function getBookings(..._a: unknown[]): Promise<{ bookings: unknown[]; total: number; page: number; pageSize: number; totalPages: number }> {
  return { bookings: [], total: 0, page: 1, pageSize: 10, totalPages: 0 };
}

export async function createBooking(..._a: unknown[]): Promise<{ error?: string; bookingId?: string }> {
  return { error: "Use /api/submit-booking" };
}

export async function updateBookingStatus(..._a: unknown[]): Promise<{ error?: string }> {
  return { error: "Use /api/admin-bookings" };
}

export async function updateBooking(..._a: unknown[]): Promise<{ error?: string }> {
  return { error: "Use /api/admin-bookings" };
}

export async function deleteBooking(..._a: unknown[]): Promise<{ error?: string }> {
  return { error: "Use /api/admin-bookings" };
}

export async function getAvailableSlots(..._a: unknown[]): Promise<unknown[]> { return []; }

export async function getBookingById(..._a: unknown[]): Promise<unknown> { return null; }

export async function getDashboardStats(..._a: unknown[]): Promise<{
  pending: number; confirmed: number; completed: number; cancelled: number;
  todayCount: number; todayBookings: unknown[]; monthBookings: number; revenue: number;
}> {
  return { pending: 0, confirmed: 0, completed: 0, cancelled: 0, todayCount: 0, todayBookings: [], monthBookings: 0, revenue: 0 };
}
