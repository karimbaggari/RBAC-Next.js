"use client"; 
import { createTicket } from "@/actions/createTicket";

export default function SubmitTicketPage() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        const formData = new FormData(e.currentTarget);
        const title = formData.get("title")?.toString();
        const description = formData.get("description")?.toString();
      
        if (!title || !description) {
          alert("Both title and description are required!");
          return;
        }
      
        const ticket = {
            title: title,
            description: description,
            user_id: 1,
            status: "open",
          };

          const data = JSON.parse(JSON.stringify(ticket))

        try {
          await createTicket(data);
          alert("Ticket submitted successfully!");
        } catch (error) {
          console.error("Error submitting ticket:", error);
          alert("Failed to submit the ticket. Please try again.");
        }
      };
      

  return (
    <main className="text-center">
      <h1 className="text-3xl font-semibold mt-12 mb-4">Submit Ticket</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-2 max-w-[350px] mx-auto"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="py-2 px-3 rounded border"
        />
        <textarea
          name="description"
          placeholder="Describe your issue"
          rows={5}
          className="py-2 px-3 rounded border"
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
