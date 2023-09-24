// components/YourComponent.tsx

import { useSession } from "next-auth/react";

function YourComponent() {
  const { data: session } = useSession();

  if (!session) {
    return <div>You are not authenticated.</div>;
  }

  console.log(session.user);
  console.log("data: ", session);

  // Access the updated user.id
  const userId = session.user?.id;

  return (
    <div>
      <p>Welcome, User {userId}!</p>
      {/* Your component content */}
    </div>
  );
}

export default YourComponent;
