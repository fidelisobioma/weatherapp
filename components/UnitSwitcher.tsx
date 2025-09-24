"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const UNIT_OPTIONS = {
  temperature: [
    { value: "celsius", label: "Celsius (°C)" },
    { value: "fahrenheit", label: "Fahrenheit (°F)" },
  ],
  wind: [
    { value: "kmh", label: "km/h" },
    { value: "mph", label: "mph" },
  ],
  precipitation: [
    { value: "mm", label: "Millimeters (mm)" },
    { value: "inch", label: "Inches (in)" },
  ],
};

export default function UnitSwitcher() {
  const [display, setDisplay] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  // read current values (defaults if not set)
  const current = {
    temperature: searchParams.get("temperature") || "celsius",
    wind: searchParams.get("wind") || "kmh",
    precipitation: searchParams.get("precipitation") || "mm",
  };

  function handleChange(
    type: "temperature" | "wind" | "precipitation",
    value: string,
  ) {
    const query = new URLSearchParams(searchParams.toString());
    query.set(type, value);
    router.push(`/?${query.toString()}`);
  }
  function handleClick() {
    setDisplay(!display);
  }
  return (
    <div className="">
      <div
        className="flex justify-between gap-2 items-center px-4 py-3 rounded bg-[#262540] max-w-[119px] float-end cursor-pointer"
        onClick={handleClick}
      >
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
      <div
        className={`${display ? "shadow bg-[#262540] rounded-md flex gap-4 p-2 flex-col w-[200px] absolute right-0 top-12 clear-both  z-50" : "hidden"}`}
      >
        {Object.entries(UNIT_OPTIONS).map(([type, options]) => (
          <div key={type} className="">
            <h3 className="font-medium text-[14px]  capitalize leading-[120%] text-[#acacb7]">
              {type}
            </h3>
            {options.map((opt) => {
              const isActive =
                current[type as keyof typeof current] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleChange(type as any, opt.value)}
                  className={`flex w-full items-center justify-between rounded-md mt-4 hover:bg-[#3c3b5e] hover:cursor-pointer py-1 px-3 ${isActive ? "bg-[#3c3b5e] py-1 px-3" : ""}`}
                >
                  <span className="block  text-sm text-white font-semibold">
                    {opt.label}
                  </span>
                  {isActive && (
                    <div className="text-white">
                      <Image
                        src="/images/icon-checkmark.svg"
                        alt="checkmark"
                        width={14}
                        height={17}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
