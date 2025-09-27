"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type HourlyData = {
  [day: string]: { hour: string; temp: number; icon: string }[];
};

export default function HourlyForecast({ data }: { data: HourlyData }) {
  const days = Object.keys(data);
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#262540] shadow rounded-md p-6 space-y-4 h-[630px] overflow-y-scroll relative">
      {/* Header */}
      <div className="flex gap-4 justify-between items-center ">
        <div className="font-dmsans font-medium text-xl leading-[120%]">
          <p>Hourly forecast</p>
        </div>

        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-between items-center w-40 bg-[#3c3b5e] px-3 py-2 rounded hover:cursor-pointer"
          >
            <span className="font-dmsans text-sm font-[500] leading-[100%]">
              {selectedDay}
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <ul className="absolute p-2 mt-1 w-40 bg-[#2c2b45] rounded-md shadow-lg z-10">
              {days.map((day) => (
                <li
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setOpen(false);
                  }}
                  className={`flex justify-between items-center px-3 py-2 rounded-md text-sm font-dmsans hover:bg-[#4c4b6e] hover:cursor-pointer ${
                    day === selectedDay
                      ? "bg-[#57568a] text-white font-semibold"
                      : "text-gray-200"
                  }`}
                >
                  {day}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Hourly display */}
      <div className="space-y-5 ">
        {data[selectedDay].map((item, i) => (
          <div
            key={i}
            className="flex justify-between bg-[#3c3b5e] shadow-md rounded p-4"
          >
            <div className="flex gap-2 items-center">
              <Image
                src={item.icon}
                alt="weather icon"
                width={40}
                height={40}
              />
              <div>
                <p className="font-dmsans font-medium text-lg">{item.hour}</p>
              </div>
            </div>
            <div>
              <p className=" text-sm text-white font-dmsans font-medium">
                {Math.trunc(item.temp)}°
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
