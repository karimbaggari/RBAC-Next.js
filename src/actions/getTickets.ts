// app/actions/ticketActions.ts
"use server";

import { db } from "@/db/db";
import { tickets } from "@/db/schema";

export async function getAllTickets() {
  // Fetching all tickets from the database
  const allTickets = await db.select().from(tickets);
  return allTickets;
}
