// Standalone types — no Prisma dependency

export type BookingStatus = "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
export type PaymentStatus = "PENDING" | "PAID" | "FAILED" | "REFUNDED";

export interface BookingWithRelations {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  companyName?: string | null;
  serviceId: string;
  service: { id: string; name: string; slug: string; price: number };
  date: Date;
  time: string;
  notes?: string | null;
  status: BookingStatus;
  payment?: {
    id: string;
    amount: number;
    currency: string;
    status: PaymentStatus;
  } | null;
  reminderSent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingFilters {
  status?: BookingStatus;
  serviceId?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface PaginatedBookings {
  bookings: BookingWithRelations[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
