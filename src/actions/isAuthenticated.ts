// Server-side redirection using getKindeServerSession
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from 'next/server';

export async function checkAuth() {
  const { isAuthenticated } = getKindeServerSession();

  // If isAuthenticated is a function, we wait for the result
  const isLogged = await isAuthenticated();

  if (!isLogged) {
    // Redirection to login page if not authenticated
    return NextResponse.redirect(new URL('/api/auth/login', window.location.href));
  }

  return isLogged;
}
