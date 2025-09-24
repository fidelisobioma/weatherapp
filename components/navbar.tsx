"use client";

import Image from "next/image";
import UnitSwitcher from "./UnitSwitcher";
const Navbar = () => {
  return (
    <nav className="bg-[rgb(2,1,44)] relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          <div className="w-[8.5625rem] md:w-[9.61rem] lg:w-[11.67875rem]">
            <Image
              src="/images/logo.svg"
              alt="weather logo"
              width={186.86}
              height={40}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
        <UnitSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
