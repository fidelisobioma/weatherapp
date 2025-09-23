export function getWeatherIconPath(code: number): string {
  if ([0, 1].includes(code)) return "/weatherIcons/icon-sunny.webp";
  if (code === 2) return "/weatherIcons/icon-partly-cloudy.webp";
  if (code === 3) return "/weatherIcons/icon-overcast.webp";
  if ([45, 48].includes(code)) return "/weatherIcons/icon-fog.webp";
  if ([51, 53, 55, 56, 57].includes(code))
    return "/weatherIcons/icon-drizzle.webp";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code))
    return "/weatherIcons/icon-rain.webp";
  if ([71, 73, 75, 77, 85, 86].includes(code))
    return "/weatherIcons/icon-snow.webp";
  if ([95, 96, 99].includes(code)) return "/weatherIcons/icon-storm.webp";

  return "/weatherIcons/icon-error.svg";
}
