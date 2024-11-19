import { createTicket } from "@actions/actions";

export default async function SubmitTicketPage() {
  return (
    <main className="text-center">
      <h1 className="text-3xl font-semibold mt-12 mb-4">Submit Ticket</h1>
      <form className="flex flex-col gap-y-2 max-w-[350px] mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="py-2 px-3 rounded"
        />
        <textarea
          name="description"
          placeholder="Describe your issue"
          rows={5}
        />
        <button
          type="submit"
          className="bg-blue-500 py-2 px-4 text-white rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
