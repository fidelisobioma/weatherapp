import Image from "next/image";
import HourlyForecast from "./HourlyForecast";
import { transformHourlyData } from "@/utils/transformHourlyData";
import { getWeatherIconPath } from "@/utils/weatherIcons";

interface WeatherData {
  location: string;
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    precipitation: number;
    weather_code: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

export default function Weather({ weather }: { weather: WeatherData }) {
  const hourlyData = transformHourlyData(
    weather.hourly.time,
    weather.hourly.temperature_2m,
    weather.hourly.weather_code,
  );

  return (
    <div className="text-white mt-[2rem]">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* left */}
        <div>
          {/* current weather */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center  bg-[url('/images/bg-today-small.svg')] md:bg-[url('/images/bg-today-large.svg')] bg-cover bg-center bg-no-repeat  h-[286px] p-6 rounded-[20px]">
            <div>
              <h2 className=" text-[1.75rem] text-center font-bold text-white leading-[120%]">
                {weather.location}
              </h2>
              <p className="font-[500] text-[1.25rem] text-center md:text-left leading-[120%] mt-[0.75rem]">
                {(() => {
                  const d = new Date(weather.current.time);
                  const weekday = d.toLocaleDateString("en-US", {
                    weekday: "long",
                  });
                  const day = d.getDate().toString().padStart(2, "0");
                  const year = d.getFullYear();
                  return `${weekday}, ${day}, ${year}`;
                })()}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <Image
                  src={getWeatherIconPath(weather.current.weather_code)}
                  alt="icon-sunny"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <p className="font-[600] text-[3rem] italic tracking-[-2%]">
                  {weather.current.temperature_2m}°
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <div className="bg-[#262540] p-5 rounded-2xl flex flex-col justify-between">
              <p className="text-lg font-medium text-[#d4d3d9]">Feels Like</p>
              <p className="font-[300] text-[1.5rem]">
                {weather.current.apparent_temperature}°
              </p>
            </div>
            <div className="bg-[#262540] p-5 rounded-2xl flex flex-col justify-between">
              <p className="text-lg font-medium text-[#d4d3d9]">Humidity</p>
              <p className="font-[300] text-[1.5rem]">
                {weather.current.relative_humidity_2m}%
              </p>
            </div>
            <div className="bg-[#262540] p-5 rounded-2xl flex flex-col justify-between">
              <p className="text-lg font-medium text-[#d4d3d9]">Wind</p>
              <p className="font-[300] text-[1.5rem] ">
                {weather.current.wind_speed_10m} km/h
              </p>
            </div>
            <div className="bg-[#262540] p-5 rounded-2xl flex flex-col justify-between">
              <p className="text-lg font-medium text-[#d4d3d9] break-words">
                Precipitation
              </p>
              <p className="font-[300] text-[1.5rem]">
                {weather.current.precipitation} mm
              </p>
            </div>
          </div>
          {/* daily forecast */}
          <div className="mt-12">
            <p className="font-semibold text-white text-xl leading-[120%] mb-5">
              Daily forecast
            </p>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
              {weather.daily.time.map((date: string, i: number) => (
                <div key={date} className="bg-[#3c3b5e] py-4 px-2 rounded-lg">
                  <div>
                    <p className="text-center text-white font-medium text-lg leading-[120%] ">
                      {(() => {
                        const d = new Date(date);
                        const weekday = d.toLocaleDateString("en-US", {
                          weekday: "long",
                        });
                        return `${weekday.slice(0, 3)}`;
                      })()}
                    </p>
                  </div>

                  <Image
                    src={getWeatherIconPath(weather.daily.weather_code[i])}
                    alt="Weather icon"
                    width={40}
                    height={40}
                    className="mx-auto"
                  />
                  <div className="flex  items-center justify-between">
                    <div>
                      {Math.trunc(weather.daily.temperature_2m_max[i])}°
                    </div>
                    <div>
                      {Math.trunc(weather.daily.temperature_2m_min[i])}°
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* right */}
        {/* hourly forecast */}
        <div className="">
          <HourlyForecast data={hourlyData} />
        </div>
      </div>
    </div>
  );
}
