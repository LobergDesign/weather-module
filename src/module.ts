import {
  defineNuxtModule,
  addComponent,
  createResolver,
  updateRuntimeConfig,
  installModule,
} from "@nuxt/kit";
import { existsSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

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
    global: true,
    prefix: "",
  },

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Install nuxt-icons module
    await installModule("nuxt-icons");

    // Copy weather icons to project's assets/icons/weather folder
    const sourceIconsDir = resolver.resolve("./runtime/icons");
    const targetIconsDir = join(nuxt.options.srcDir, "assets/icons/weather");

    // Ensure target directory exists
    if (!existsSync(targetIconsDir)) {
      mkdirSync(targetIconsDir, { recursive: true });
    }

    // Copy all SVG files
    const iconFiles = readdirSync(sourceIconsDir).filter((f) =>
      f.endsWith(".svg")
    );
    for (const file of iconFiles) {
      const sourcePath = join(sourceIconsDir, file);
      const targetPath = join(targetIconsDir, file);
      if (!existsSync(targetPath)) {
        copyFileSync(sourcePath, targetPath);
      }
    }

    // Inject runtime config for component access
    updateRuntimeConfig({
      public: {
        weatherModule: {
          latitude: options.latitude,
          longitude: options.longitude,
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
        "./runtime/components/DynamicWeather.client.vue",
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
