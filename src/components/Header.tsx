import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Subnit ticket",
    href: "/submit-ticket",
  },
  {
    label: "Tickets",
    href: "/tickets",
  },
];

export default async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isLogged = await isAuthenticated();
  const user = await getUser();

  return (
    <header className="flex items-center justify-between border-b border-black/20 h-[55px] m-4 px-4">
      <nav>
        <ul className="flex items-center gap-x-5">
          {routes.map((route) => (
            <li key={route.href}>
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-x-3 text-sm justify-center">
        {isLogged ? (
          <>
            <div className="flex flex-col">
              <span>
                Logged in as {user.family_name}
              </span>
            </div>
            <LogoutLink className="underline">Logout</LogoutLink>
          </>
        ) : (
          <>
            <LoginLink postLoginRedirectURL="/submit-ticket">Sign in</LoginLink>
            <RegisterLink postLoginRedirectURL="/submit-ticket">
              Sign up
            </RegisterLink>
          </>
        )}{" "}
      </div>
    </header>
  );
}