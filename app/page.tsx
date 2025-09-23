import Navbar from "@/components/Navbar";
import SearchInput from "@/components/Searchinput";
import Weather from "@/components/Weather";

export default async function Home({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const location = searchParams.q || "berlin";

  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`,
    { cache: "no-store" },
  );
  const geoData = await geoRes.json();
  const { latitude, longitude, name, country } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,precipitation,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`,
  );

  const weatherData = await weatherRes.json();

  const weather = {
    location: `${name}, ${country}`,
    current: weatherData.current,
    hourly: weatherData.hourly,
    daily: weatherData.daily,
  };
  console.log(weather);
  return (
    <div className="bg-[rgb(2,1,44)]">
      <div className="container mx-auto p-[1rem] md:p-[1.5rem] lg:px-[7rem] lg:pt-[3rem]">
        <Navbar />
        <h1 className="font-bold text-white text-center text-[3.25rem] leading-[120%] py-[3rem] lg:py-[4rem]">
          How’s the sky looking today?
        </h1>
        <SearchInput />
        <Weather weather={weather} />
      </div>
    </div>
  );
}
