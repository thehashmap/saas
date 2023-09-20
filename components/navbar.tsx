import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { AuthButton } from "./NavMenu";

function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <AuthButton />
      </div>
    </div>
  );
}

export default Navbar;
