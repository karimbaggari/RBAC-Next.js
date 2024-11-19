type TicketProps = {
  ticket: {
    id: number;
    title: string;
    description: string;
    status: string | null;
    user_id: number;
    created_at: Date | null;
    updated_at: Date | null;
  };
};

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="font-bold text-lg">{ticket.title}</h2>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status ?? "No status"}</p>
      <p>Created At: {ticket.created_at?.toString() ?? "N/A"}</p>
      <p>Updated At: {ticket.updated_at?.toString() ?? "N/A"}</p>
    </div>
  );
};

export default Ticket;
