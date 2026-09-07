import { cookies } from "next/headers";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin_session")?.value === "authenticated_agency";

  if (!isLoggedIn) return <AdminLogin />;
  return <AdminPanel />;
}
