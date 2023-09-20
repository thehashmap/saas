import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const DashboardPage = async () => {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <h1>Protected Route</h1>
      getServerSession Result
      {session?.user?.email ? (
        <div>{session?.user?.email}</div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
};

export default DashboardPage;
