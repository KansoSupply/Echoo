"use client";

import Link from "next/link";
import React from "react";
import AgentPulse from "./AgentPulse";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 left-0 right 0 px-4 md:px-0 bg-black">
      <div className="flex justify-between items-center container mx-auto h-16">
        <div className="flex items-center justify-between gap-2">
          <AgentPulse />
          <Link href="/" className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-white">Echoo</h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <SignedIn>
            <Link href="/manageplan">
              <Button>
                <h2>Manage plan</h2>
              </Button>
            </Link>
            <div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" className="text-blue-600">
                <h2>Sign in</h2>
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
