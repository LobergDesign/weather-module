import {
  defineNuxtModule,
  addComponent,
  createResolver,
  updateRuntimeConfig,
} from "@nuxt/kit";

export interface ModuleOptions {
  /**
   * Latitude coordinate for weather location
   * @default 55.676098 (Copenhagen)
   */
  latitude?: number;

  /**
   * Longitude coordinate for weather location
   * @default 12.568337 (Copenhagen)
   */
  longitude?: number;

  /**
   * Icon size (CSS value)
   * @default 'clamp(15px, 5vw, 30px)'
   */
  iconSize?: string;

  /**
   * Whether to register the DynamicWeather component globally
   * @default true
   */
  global?: boolean;

  /**
   * Component name prefix
   * @default ''
   * @example 'Weather' → <WeatherDynamicWeather>
   */
  prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "weather-module",
    configKey: "weatherModule",
    compatibility: {
      nuxt: "^4.0.0",
    },
  },

  defaults: {
    latitude: 55.676098, // Copenhagen
    longitude: 12.568337, // Copenhagen
    iconSize: "clamp(30px, 5vw, 50px)",
    global: true,
    prefix: "",
  },

  moduleDependencies(nuxt) {
    const resolver = createResolver(import.meta.url);

    return {
      "@nuxt/icon": {
        defaults: {
          customCollections: [
            {
              prefix: "weather",
              dir: resolver.resolve("./runtime/icons"),
            },
          ],
        },
      },
    };
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // 1. Inject runtime config for component access
    updateRuntimeConfig({
      public: {
        weatherModule: {
          latitude: options.latitude,
          longitude: options.longitude,
          iconSize: options.iconSize,
        },
      },
    });

    // 2. Register DynamicWeather component
    const componentName = options.prefix
      ? `${options.prefix}DynamicWeather`
      : "DynamicWeather";

    addComponent({
      name: componentName,
      filePath: resolver.resolve(
        "./runtime/components/DynamicWeather.client.vue"
      ),
      global: options.global,
      mode: "client",
    });
  },
});

// Export types for consumers
export type {
  WeatherIcon,
  OpenMeteoResponse,
  CurrentWeather,
  CurrentWeatherDetail,
  CurrentWeatherUnits,
} from "./runtime/types/weather";

export { WEATHER_CODE_MAP } from "./runtime/utils/constants";
