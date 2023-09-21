import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/auth/SessionProvider";
import NavMenu from "@/components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS",
  description: "AI Saas",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main>
            {/* <NavMenu /> */}
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
