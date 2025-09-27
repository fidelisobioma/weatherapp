"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type UnitType = "temperature" | "wind" | "precipitation";
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

const UNIT_LABELS: Record<UnitType, string> = {
  temperature: "Temperature",
  wind: "Wind Speed",
  precipitation: "Precipitation",
};

export default function UnitSwitcher() {
  const [display, setDisplay] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  // check if we are currently in imperial (fahrenheit/mph/inch)
  const isImperial =
    searchParams.get("temperature") === "fahrenheit" &&
    searchParams.get("wind") === "mph" &&
    searchParams.get("precipitation") === "inch";

  const [checked, setChecked] = useState(isImperial);

  useEffect(() => {
    setChecked(isImperial);
  }, [isImperial]);
  const toggleUnits = () => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      // if currently imperial → switch to metric
      params.set("temperature", "celsius");
      params.set("wind", "kmh");
      params.set("precipitation", "mm");
    } else {
      // if currently metric → switch to imperial
      params.set("temperature", "fahrenheit");
      params.set("wind", "mph");
      params.set("precipitation", "inch");
    }

    router.replace(`/?${params.toString()}`);
  };

  //individual switch
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
    router.replace(`/?${query.toString()}`);
  }
  function handleClick() {
    setDisplay(!display);
  }
  return (
    <div>
      <div
        className="flex justify-between gap-2 items-center px-4 py-3 rounded bg-[#262540] hover:bg-[#3c3b5e] transition-colors duration-200  max-w-[119px] float-end cursor-pointer"
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
          <ChevronDown
            size={16}
            className={`text-white transition-transform ${display ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      <div
        className={`${display ? "shadow bg-[#262540] rounded-md flex gap-4 p-2 flex-col w-[200px] absolute right-0 top-12 clear-both  z-50" : "hidden"}`}
      >
        <div className="">
          <button
            onClick={toggleUnits}
            className="text-white font-dmsans cursor-pointer"
          >
            {checked ? "Switch to Metric" : "Switch to Imperial"}
          </button>
        </div>
        {(
          Object.entries(UNIT_OPTIONS) as [
            UnitType,
            { value: string; label: string }[],
          ][]
        ).map(([type, options]) => (
          <div key={type}>
            <h3 className="font-medium text-[14px] leading-[120%] text-[#acacb7]">
              {UNIT_LABELS[type]}
            </h3>
            {options.map((opt) => {
              const isActive = current[type] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleChange(type, opt.value)}
                  className={`flex w-full items-center justify-between rounded-md mt-4 hover:bg-[#3c3b5e] hover:cursor-pointer py-1 px-3 ${
                    isActive ? "bg-[#3c3b5e] py-1 px-3" : ""
                  }`}
                >
                  <span className="block font-dmsans text-sm text-white font-semibold">
                    {opt.label}
                  </span>
                  {isActive && (
                    <div>
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
