import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Navigation } from "@/components/navigation";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Check if the user is the authorized admin
  if (user.email !== ADMIN_EMAIL) {
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">{children}</main>
    </div>
  );
}
