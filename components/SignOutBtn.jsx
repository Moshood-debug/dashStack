import { SignOutButton, UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

import React from "react";

const SignOutBtn = () => {
  return (
    <div className="flex gap-1 items-center justify-start">
      {/* <span>
        <LogOut />
      </span> */}
      <SignOutButton
        variant="iconButton"
        className="text-[14px] font-semibold max-lg:hidden"
      />
    </div>
  );
};

export default SignOutBtn;
