import Ticket from "@/components/ticket";
import prisma from "@/lib/db";

export default async function TicketsPage() {
    const tickets = await prisma.ticket.findMany();

    return (
        <main className="text-center">
            <h1 className="text-3xl font-semibold mt-12 mb-4">
                {tickets.map((ticket) -> (
                    <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </h1>
        </main>
)
}