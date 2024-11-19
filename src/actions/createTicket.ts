// app/actions/ticketActions.ts
"use server";

import { db } from "@/db/db";
import { tickets } from "@/db/schema";

export interface TicketDTO {
  title: string;
  description: string;
  user_id: number;
  status?: string;
}

export async function createTicket(ticket: TicketDTO) {
  console.log("test", ticket);
  await db.insert(tickets).values(ticket);
}
