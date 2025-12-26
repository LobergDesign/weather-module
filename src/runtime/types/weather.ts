/**
 * Represents the units for the current weather data from Open-Meteo.
 */
export interface CurrentWeatherUnits {
  /** The time unit, e.g., "iso8601". */
  time: string;
  /** The interval unit, e.g., "seconds". */
  interval: string;
  /** The temperature unit, e.g., "°C". */
  temperature: string;
  /** The wind speed unit, e.g., "km/h". */
  windspeed: string;
  /** The wind direction unit, e.g., "°". */
  winddirection: string;
  /** The unit for whether it is day or night, e.g., "". */
  is_day: string;
  /** The unit for the weather code, e.g., "wmo code". */
  weathercode: string;
}

/**
 * Represents the current weather data from Open-Meteo.
 */
export interface CurrentWeather {
  /** The time of the weather data in ISO 8601 format. */
  time: string;
  /** The interval in seconds. */
  interval: number;
  /** The temperature in the specified unit. */
  temperature: number;
  /** The wind speed in the specified unit. */
  windspeed: number;
  /** The wind direction in degrees. */
  winddirection: number;
  /**  Indicates if it is day (1) or night (0). */
  is_day: number;
  /** The weather code from the WMO code list. */
  weathercode: number;
}
/**
 * Represents the day and night weather icons.
 */
export interface CurrentWeatherDetail {
  /** The weather icon for the day. */
  day: WeatherIcon;
  /** The weather icon for the night. */
  night: WeatherIcon;
}

/**
 * Represents the full response from the Open-Meteo API.
 */
export interface OpenMeteoResponse {
  /** The latitude of the location. */
  latitude: number;
  /** The longitude of the location. */
  longitude: number;
  /** The time taken to generate the response in milliseconds. */
  generationtime_ms: number;
  /** The UTC offset in seconds. */
  utc_offset_seconds: number;
  /** The timezone of the location. */
  timezone: string;
  /** The timezone abbreviation. */
  timezone_abbreviation: string;
  /** The elevation of the location. */
  elevation: number;
  /** The units for the current weather data. */
  current_weather_units: CurrentWeatherUnits;
  /** The current weather data. */
  current_weather: CurrentWeather;
}

/**
 * Represents the possible weather icon names.
 */
export type WeatherIcon =
  | "clear-day"
  | "clear-night"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "overcast-day"
  | "overcast-night"
  | "fog-day"
  | "fog-night"
  | "overcast-day-drizzle"
  | "overcast-night-drizzle"
  | "extreme-day-sleet"
  | "extreme-night-sleet"
  | "overcast-day-rain"
  | "overcast-night-rain"
  | "overcast-day-sleet"
  | "overcast-night-sleet"
  | "overcast-day-snow"
  | "overcast-night-snow"
  | "partly-cloudy-day-rain"
  | "partly-cloudy-night-rain"
  | "partly-cloudy-day-snow"
  | "partly-cloudy-night-snow"
  | "thunderstorms-day-overcast"
  | "thunderstorms-night-overcast"
  | "overcast-day-hail"
  | "overcast-night-hail";
