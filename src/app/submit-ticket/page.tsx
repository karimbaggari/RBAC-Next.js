// pages/submit-ticket.tsx (server-side logic)
import Header from "@/components/Header";
import SubmitTicketForm from "@/components/SubmitTicketForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function SubmitTicketPage() {
  const { isAuthenticated } = getKindeServerSession();

  const isLogged = await isAuthenticated();

  if (!isLogged) {
    redirect("/api/auth/login");
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
