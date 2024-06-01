"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutBtn from "./SignOutBtn";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex flex-col  h-fit w-fit bg-dark-1 p-6  pt-28 text-white max-sm:hidden md:h-screen lg:w-[240px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 item-center justify-start rounded-lg p-4",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image
                src={link.iconUrl}
                width={24}
                height={24}
                alt={link.label}
              />

              <p className="text-[14px] font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mb-10 max-lg:hidden">
        <Link
          href="/profile"
          className="text-[14px] font-semibold max-lg:hidden"
        >
          Settings
        </Link>
        <SignOutBtn />
      </div>
    </section>
  );
};

export default Sidebar;
