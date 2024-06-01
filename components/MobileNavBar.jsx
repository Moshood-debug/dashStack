"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileSideBar = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className="cursor-pointer sm:hidden"
            src={"/icons/hamburger.svg"}
            width={40}
            height={40}
            alt="hamburger-menu"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1 ">
          <Link className="flex items-center gap-1 w-fit" href="/">
            <p className="text-[20px] font-extrabold text-blue-1">
              Dash<span className="text-white">Stack</span>
            </p>
          </Link>

          <div className="flex flex-col justify-between overflow-y-auto h-[calc(100vh-72px)]">
            <SheetClose asChild>
              <section className="flex h-full flex-col items-center gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(link.route + "/");

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 item-center rounded-lg p-4 w-full max-w-60 ",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.iconUrl}
                          width={20}
                          height={20}
                          alt={link.label}
                        />

                        <p className="font-semibold ">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileSideBar;
