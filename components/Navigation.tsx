"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Navigation() {

  return (
    <>
      <Logo />
      <nav className="fixed top-0 right-0 z-50 p-6 ">
        <div className="flex flex-col items-end space-y-2">
          <Link
            href="/about"
            className="menu-link"
          >
            About
          </Link>
        </div>
      </nav>
    </>
  );
}