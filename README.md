# Weather Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module for displaying dynamic weather icons from the Open-Meteo API.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/LobergDesign/weather-module/tree/main)
- [📖 &nbsp;Documentation](#)

## Features

- **Dynamic Icons:** Automatically updates the weather icon based on current weather conditions and time of day.
- **Open-Meteo API:** Uses the free and open-source Open-Meteo API for weather data.
- **Customizable:** Configure the location, icon size, and more.
- **TypeScript Support:** Fully typed for a better development experience.
- **Easy to Use:** Just add the component to your page and it works.

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add weather-module
```

That's it! You can now use the `DynamicWeather` component in your Nuxt app.

## Configuration

The module can be configured in your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  modules: ['weather-module'],
  weatherModule: {
    latitude: 55.676098, // Copenhagen
    longitude: 12.568337, // Copenhagen
    iconSize: 'clamp(30px, 5vw, 50px)',
  },
})
```

| Option      | Type     | Default                         | Description                        |
|-------------|----------|---------------------------------|------------------------------------|
| `latitude`  | `number` | `55.676098` (Copenhagen)        | Latitude for the weather location. |
| `longitude` | `number` | `12.568337` (Copenhagen)        | Longitude for the weather location.|
| `iconSize`  | `string` | `'clamp(30px, 5vw, 50px)'`      | CSS value for the icon size.       |

## Usage

Simply add the `<DynamicWeather />` component to any page or component:

```vue
<template>
  <div>
    <h1>My Awesome App</h1>
    <DynamicWeather />
  </div>
</template>
```

## API Reference

### Components

#### `DynamicWeather`

A client-side component that displays the weather icon. It fetches data from the Open-Meteo API and dynamically selects the appropriate icon from the bundled collection.

### Types

The module exports the following types for use in your application:

- `WeatherIcon`
- `OpenMeteoResponse`
- `CurrentWeather`
- `CurrentWeatherDetail`
- `CurrentWeatherUnits`

You can import them from `weather-module`:

```ts
import type { WeatherIcon } from 'weather-module'
```

## Notes

- **Rate Limits:** The Open-Meteo API is free and does not require an API key. However, it is subject to rate limits. Please refer to the [Open-Meteo documentation](https://open-meteo.com/en/docs) for more information.
- **Client-Only:** The `DynamicWeather` component is client-only and will only be rendered on the client-side. This is because it fetches data from the Open-Meteo API in the browser.

## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  npm install

  # Generate type stubs
  npm run dev:prepare

  # Develop with the playground
  npm run dev

  # Build the playground
  npm run dev:build

  # Run ESLint
  npm run lint

  # Run Vitest
  npm run test
  npm run test:watch

  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/weather-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/weather-module

[npm-downloads-src]: https://img.shields.io/npm/dm/weather-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/weather-module

[license-src]: https://img.shields.io/npm/l/weather-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/weather-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
