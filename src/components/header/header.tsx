"use client";

import Image from "next/image";
import MobileNav from "./mobileNav";

import logo from "@/logos/Sting-logo_wb.png";
import DesktopNav from "./desktopNav";
import { Suspense } from "react";
import { LocaleSwitcher } from "./localeSwitcher";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-8 py-8 md:px-16 md:py-11 flex items-center justify-between bg-transparent absolute z-20">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="Sting studio" width={100} />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Suspense fallback={null}>
          <DesktopNav />
        </Suspense>
        <LocaleSwitcher />
      </div>
      <div className="flex gap-2 items-center md:hidden">
        <LocaleSwitcher />
        <Suspense fallback={null}>
          <MobileNav />
        </Suspense>
      </div>
    </header>
  );
}
