import Image from "next/image";
export default function Loading() {
  return (
    <div className="bg-[rgb(2,1,44)]">
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

          <div className="flex justify-between gap-2 items-center px-4 py-3 rounded bg-[#262540] max-w-[119px] float-end cursor-pointer">
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

        <h1 className="font-bold text-white text-center text-[3.25rem] leading-[120%] py-[3rem] lg:py-[4rem]">
          How’s the sky looking today?
        </h1>

        <div className=" lg:max-w-[656px] mx-auto">
          <form className="md:flex items-center gap-[1rem] ">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search for a place..."
                className="bg-[#262540]  w-full text-white font-[500] leading-[120%] text-[1.25rem] py-[1rem] pl-10 rounded-md"
              />
              <Image
                src="/images/icon-search.svg"
                alt="Search icon"
                height={20}
                width={20}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
            </div>
            <button
              type="submit"
              className="bg-[#4658d9] w-full md:w-auto text-center  text-white font-[500] leading-[120%] text-[1.25rem] py-[1rem] px-[1.5rem] mt-[0.75rem] md:mt-0 rounded-md"
            >
              Search
            </button>
          </form>
        </div>

        <div className="text-white mt-[2rem]">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
            <div>
              {/* Current Weather skeleton */}
              <div className="bg-[#262540] h-[286px] rounded-[20px] animate-pulse">
                <div className="flex flex-col gap-4 items-center justify-center h-full">
                  <div className="flex gap-2">
                    <div className="size-2 bg-white rounded-full animate-wave "></div>
                    <div className="size-2 bg-white transform -translate-y-2 rounded-full animate-wave [animation-delay:0.2s]"></div>
                    <div className="size-2 bg-white rounded-full animate-wave [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-center">Loading...</p>
                </div>
              </div>

              {/* Stats section */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 ">
                {/* Feels Like */}
                <div className="bg-[#262540] p-5 rounded-2xl flex flex-col justify-between">
                  <p className="text-lg font-medium text-[#d4d3d9]">
                    Feels Like
                  </p>
                  <div className="animate-pulse">--</div>
                </div>

                {/* Humidity */}
                <div className="bg-[#262540] p-5 rounded-2xl flex flex-col justify-between">
                  <p className="text-lg font-medium text-[#d4d3d9]">Humidity</p>
                  <div className="animate-pulse">--</div>
                </div>

                {/* Wind */}
                <div className="bg-[#262540] p-5 rounded-2xl flex flex-col justify-between">
                  <p className="text-lg font-medium text-[#d4d3d9]">Wind</p>
                  <div className="animate-pulse">--</div>
                </div>

                {/* Precipitation */}
                <div className="bg-[#262540] p-5 rounded-2xl flex flex-col justify-between">
                  <p className="text-lg font-medium text-[#d4d3d9]">
                    Precipitation
                  </p>
                  <div className="animate-pulse">--</div>
                </div>
              </div>

              {/* daily forecats */}
              <div className="mt-12">
                <p className="font-semibold text-white text-xl leading-[120%] mb-5">
                  Daily forecast
                </p>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#3c3b5e] h-[128px] py-4 px-2 rounded-lg"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hourly forecast skeleton */}
            <div className="space-y-5 bg-[#262540] h-[630px] shadow rounded-md p-6 animate-pulse">
              <div className="flex gap-4 justify-between items-center ">
                <div className="font-semibold text-xl leading-[120%]">
                  <p>Hourly forecast</p>
                </div>
                <div>
                  <div className="flex items-center rounded shadow gap-4 p-1 px-4 bg-[#3c3b5e]">
                    <div>-</div>
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
              </div>
              <div className="flex flex-col gap-4 justify-between">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    className=" bg-[#3c3b5e] shadow-md rounded py-8"
                    key={i}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
