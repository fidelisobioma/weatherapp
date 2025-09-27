"use client";

import Image from "next/image";
const Error = () => {
  return (
    <div className="bg-[rgb(2,1,44)] h-screen">
      <div className="container mx-auto p-[1rem] md:p-[1.5rem] lg:px-[7rem] lg:pt-[3rem]">
        <div className="flex justify-between items-center">
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

          <div className="flex justify-between gap-2 items-center px-4 py-3 rounded bg-[#262540] max-w-[119px] float-end ">
            <div>
              <Image
                src="/images/icon-units.svg"
                alt="setting"
                width={16}
                height={16}
              />
            </div>

            <div className="font-dmsans font-[500] text-white text-sm leading-[120%]">
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
        <div className="flex flex-col  items-center mt-16">
          <div className="flex justify-center">
            <Image
              src="images/icon-error.svg"
              alt="error"
              width={42}
              height={50}
            />
          </div>
          <h2 className="font-bricolage font-bold text-white text-center text-[3.25rem] leading-[120%] my-6">
            Something went wrong
          </h2>
          <p className="font-dmsans text-[#d4d3d9] text-center text-sm">
            We couldn’t connect to the server (API error). Please try again in a
            few moments.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 flex gap-2 bg-[#262540] hover:bg-[#3c3b5e]  items-center rounded-md hover:cursor-pointer"
          >
            <Image
              src="/images/icon-retry.svg"
              alt="retry"
              width={16}
              height={16}
            />
            <span className="font-dmsans text-[#d4d3d9] text-center text-sm">
              Retry
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
