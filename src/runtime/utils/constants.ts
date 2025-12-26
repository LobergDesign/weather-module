import type { CurrentWeatherDetail } from "../types/weather";

export const CLEAR_DAY: CurrentWeatherDetail = {
  day: "clear-day",
  night: "clear-night",
};

export const PARTLY_CLOUDY: CurrentWeatherDetail = {
  day: "partly-cloudy-day",
  night: "partly-cloudy-night",
};

export const OVERCAST: CurrentWeatherDetail = {
  day: "overcast-day",
  night: "overcast-night",
};

export const FOG: CurrentWeatherDetail = {
  day: "fog-day",
  night: "fog-night",
};

export const DRIZZLE: CurrentWeatherDetail = {
  day: "overcast-day-drizzle",
  night: "overcast-night-drizzle",
};

export const FREEZING_DRIZZLE: CurrentWeatherDetail = {
  day: "extreme-day-sleet",
  night: "extreme-night-sleet",
};

export const RAIN: CurrentWeatherDetail = {
  day: "overcast-day-rain",
  night: "overcast-night-rain",
};

export const FREEZING_RAIN: CurrentWeatherDetail = {
  day: "overcast-day-sleet",
  night: "overcast-night-sleet",
};

export const SNOW: CurrentWeatherDetail = {
  day: "overcast-day-snow",
  night: "overcast-night-snow",
};

export const RAIN_SHOWERS: CurrentWeatherDetail = {
  day: "partly-cloudy-day-rain",
  night: "partly-cloudy-night-rain",
};

export const SNOW_SHOWERS: CurrentWeatherDetail = {
  day: "partly-cloudy-day-snow",
  night: "partly-cloudy-night-snow",
};

export const THUNDERSTORMS: CurrentWeatherDetail = {
  day: "thunderstorms-day-overcast",
  night: "thunderstorms-night-overcast",
};

export const THUNDERSTORMS_HAIL: CurrentWeatherDetail = {
  day: "overcast-day-hail",
  night: "overcast-night-hail",
};

// Weather code to icon mapping
export const WEATHER_CODE_MAP: Record<number, CurrentWeatherDetail> = {
  0: CLEAR_DAY,
  1: PARTLY_CLOUDY,
  2: PARTLY_CLOUDY,
  3: OVERCAST,
  45: FOG,
  48: FOG,
  51: DRIZZLE,
  53: DRIZZLE,
  55: DRIZZLE,
  56: FREEZING_DRIZZLE,
  57: FREEZING_DRIZZLE,
  61: RAIN,
  63: RAIN,
  65: RAIN,
  66: FREEZING_RAIN,
  67: FREEZING_RAIN,
  71: SNOW,
  73: SNOW,
  75: SNOW,
  77: SNOW,
  80: RAIN_SHOWERS,
  81: RAIN_SHOWERS,
  82: RAIN_SHOWERS,
  85: SNOW_SHOWERS,
  86: SNOW_SHOWERS,
  95: THUNDERSTORMS,
  96: THUNDERSTORMS_HAIL,
  99: THUNDERSTORMS_HAIL,
};
