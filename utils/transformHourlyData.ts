import { getWeatherIconPath } from "./weatherIcons";
export function transformHourlyData(
  time: string[],
  temps: number[],
  codes: number[],
) {
  const result: Record<string, { hour: string; temp: number; icon: string }[]> =
    {};

  time.forEach((t, i) => {
    const date = new Date(t);
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const h = date.getHours();
    const suffix = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    const hour = `${hour12} ${suffix}`;

    if (!result[weekday]) {
      result[weekday] = [];
    }
    result[weekday].push({
      hour,
      temp: temps[i],
      icon: getWeatherIconPath(codes[i]),
    });
  });

  return result;
}
