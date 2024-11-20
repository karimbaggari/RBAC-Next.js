// app/actions/ticketActions.ts
"use server";

import { db } from "@/db/db";
import { tickets } from "@/db/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export interface TicketDTO {
  title: string;
  description: string;
  user_id: number;
  status?: string;
}

export async function createTicket(ticket: TicketDTO) {
  const { getPermission } = getKindeServerSession();
  const result = await getPermission("create:ticket");
  if (!result?.isGranted) {
      return redirect("/");
  }
  await db.insert(tickets).values(ticket);
}
