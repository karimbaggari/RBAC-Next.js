
// app/actions/ticketActions.ts
'use server'

import { db } from '@/db/db';
import { tickets } from '@/db/schema';

export async function createTicket({ title, description, user_id, status }: { title: string, description: string, user_id: number, status?: string }) {
  const newTicket = await db.insert(tickets).values({
    title,
    description,
    user_id,
    status: status || 'open',
  });

  return newTicket;
}
