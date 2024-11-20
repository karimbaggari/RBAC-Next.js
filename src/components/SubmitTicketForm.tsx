// components/SubmitTicketForm.tsx (client-side component)
"use client";
import { useState } from "react";
import { createTicket } from "@/actions/createTicket";

export default function SubmitTicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Both title and description are required!");
      return;
    }

    const ticket = {
      title,
      description,
      user_id: 1,  // Example user ID, update as needed
      status: "open",
    };

    try {
      await createTicket(ticket);
      alert("Ticket submitted successfully!");
    } catch (error) {
      console.error("Error submitting ticket:", error);
      alert("Failed to submit the ticket. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 max-w-[350px] mx-auto">
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="py-2 px-3 rounded border"
      />
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your issue"
        rows={5}
        className="py-2 px-3 rounded border"
      />
      <button type="submit" className="bg-blue-500 py-2 px-4 text-white rounded">
        Submit
      </button>
    </form>
  );
}
