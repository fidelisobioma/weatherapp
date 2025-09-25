// app/HourlyForecast.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type HourlyData = {
  [day: string]: { hour: string; temp: number; icon: string }[];
};

export default function HourlyForecast({ data }: { data: HourlyData }) {
  const days = Object.keys(data);
  const [selectedDay, setSelectedDay] = useState(days[0]);

  return (
    <div className="bg-[#262540] shadow rounded-md p-6 space-y-4 h-[630px] overflow-y-scroll relative">
      {/* Day selector */}
      <div className="flex gap-4 justify-between items-center ">
        <div className="font-semibold text-xl leading-[120%]">
          <p>Hourly forecast</p>
        </div>
        <div>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="bg-[#3c3b5e] p-3 rounded "
          >
            {days.map((day) => (
              <option
                key={day}
                value={day}
                className="text-sm font-[500] leading-[100%]"
              >
                {day}
              </option>
            ))}
          </select>
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
              {/* <div className="size-2 bg-white rounded-full"></div> */}
              <Image
                src={item.icon}
                alt="weather icon"
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium">{item.hour}</p>
              </div>
            </div>
            <div>
              <p>{Math.trunc(item.temp)}°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
