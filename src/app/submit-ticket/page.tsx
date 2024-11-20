// pages/submit-ticket.tsx (server-side logic)
import Header from "@/components/Header";
import SubmitTicketForm from "@/components/SubmitTicketForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function SubmitTicketPage() {
  const { isAuthenticated, getPermission } = getKindeServerSession();

  const isLogged = await isAuthenticated();

  if (!isLogged) {
    redirect("/api/auth/login");
  }
  const result = await getPermission("create:ticket");
  if (!result?.isGranted) {
    return <div>Access denied</div>;
  }

  return (
    <>
      <Header />
      <main className="text-center">
        <h1 className="text-3xl font-semibold mt-12 mb-4">Submit Ticket</h1>
        <SubmitTicketForm />
      </main>
    </>
  );
}
