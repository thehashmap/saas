"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export const MobileSidebar = () => {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu />
    </Button>
  );
};
