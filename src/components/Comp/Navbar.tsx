"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 rounded-lg sm:rounded-none inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/users/login">LogIn</HoveredLink>
            <HoveredLink href="/users/signup">SignUp</HoveredLink>
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/profile">Profile</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-1 sm:grid-cols-2 gap-10 p-4 overflow-x-auto">
            <ProductItem
              title="Git Hub"
              href="#"
              src="/img.avif"
              description="Prepare for tech companies"
            />
            <ProductItem
              title="Git Lab"
              href="#"
              src="/img.avif"
              description="Production ready Projects"
            />
            <ProductItem
              title="Twitter"
              href="#"
              src="/img.avif"
              description="Never write from scratch again. Go from idea to Post in minutes."
            />
            <ProductItem
              title="Linkedin"
              href="#"
              src="/img.avif"
              description="Connect to Peaple and Apply the Interview"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Next Auth</HoveredLink>
            <HoveredLink href="/individual">Jwt Auth</HoveredLink>
            <HoveredLink href="/team">Chat App Soon</HoveredLink>
            <HoveredLink href="/enterprise">Something</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
