"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

export const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.id} <br />
        <Button onClick={() => signOut()}>Sign Out</Button>
      </>
    );
  }

  return (
    <>
      {/* Not Signed In <br /> */}
      <Button onClick={() => signIn()}>Sign In</Button>
    </>
  );
};

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
