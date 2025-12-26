<template>
  <div>
    <Icon v-if="status === 'success'" class="dynamic-weather-icon" :name="`weather:${setIcon}`" />
  </div>
</template>
<script lang="ts" setup>
import { computed, watch } from "vue";
import { useRuntimeConfig, useLazyAsyncData } from "#app";
import { $fetch } from "ofetch";
import type { OpenMeteoResponse, WeatherIcon } from "../types/weather";
import { WEATHER_CODE_MAP } from "../utils/constants";

// Expose status via v-model for parent component control
const status = defineModel<'idle' | 'pending' | 'success' | 'error'>('status', {
  default: 'pending'
});

// Get module configuration from runtime config
const config = useRuntimeConfig();
const { latitude, longitude } = config.public.weatherModule;

const { status: asyncStatus, data, error } = await useLazyAsyncData<OpenMeteoResponse>(
  "weather-icon",
  () =>
    $fetch<OpenMeteoResponse>(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
);

// Sync asyncStatus from useLazyAsyncData to the status model
watch(asyncStatus, (newStatus) => {
  status.value = newStatus;
}, { immediate: true });

if (error.value) {
  console.error("Error fetching weather data:", error.value);
}

const setIcon = computed<WeatherIcon>(() => {
  if (!data.value?.current_weather) return "partly-cloudy-day";

  const { weathercode, is_day } = data.value.current_weather;
  const iconSet = WEATHER_CODE_MAP[weathercode];

  if (!iconSet) return "partly-cloudy-day";

  return is_day === 1 ? iconSet.day : iconSet.night;
});

// Get icon size from config
const iconSize = config.public.weatherModule.iconSize;
</script>
<style scoped>
.dynamic-weather-icon {
  height: v-bind(iconSize);
  width: v-bind(iconSize);
}
</style>
