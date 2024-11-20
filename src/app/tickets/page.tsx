import { getAllTickets } from "@/actions/getTickets";
import Header from "@/components/Header";
import Ticket from "@/components/Ticket";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function TicketsPage() {
  const allTickets = await getAllTickets();
  const { getPermission } = getKindeServerSession();
  const result = await getPermission("read:ticket");
  if (!result?.isGranted) {
    return <div>Access denied</div>;
  }

  return (
    <>
      <Header />
      <main className="text-center">
        <h1 className="text-3xl font-semibold mt-12 mb-4">Tickets</h1>
        <div>
          {allTickets && allTickets.length > 0 ? (
            allTickets.map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <p>No tickets available.</p>
          )}
        </div>
      </main>
    </>
  );
}
