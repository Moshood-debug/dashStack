"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavBar from "./MobileNavBar";
import SearchInput from "./SearchInput";
import { SignedIn, UserButton, useSession } from "@clerk/nextjs";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-5 py-4 lg:px-10">
      <div className="flex items-center gap-3 space-x-20 sm:px-7">
        <Link className="flex items-center gap-1 w-fit " href="/">
          <p className="text-[20px] font-extrabold text-blue-1">
            Dash<span className="text-white">Stack</span>
          </p>
        </Link>

        <SearchInput />
      </div>
      <div className="flex-between items-center ">
        {/* Clerk User Management */}

        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNavBar />

        {/* <Image
          className="cursor-pointer max-sm:hidden"
          src={"/icons/hamburger.svg"}
          width={70}
          height={70}
          alt="hamburger-menu"
          onClick={handleToggle}
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
