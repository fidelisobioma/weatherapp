"use client";

import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="bg-[rgb(2,1,44)]">
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
        <div className="flex items-center justify-center gap-2 bg-[#262540] p-[0.594rem] md:p-[0.844rem] rounded-md">
          <div>
            <Image
              src="/images/icon-units.svg"
              alt="setting"
              width={16}
              height={16}
            />
          </div>
          <div className="font-[500] text-white text-sm leading-[120%]">
            Units
          </div>
          <div>
            <Image
              src="/images/icon-dropdown.svg"
              alt="dropdown"
              width={12}
              height={18}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
