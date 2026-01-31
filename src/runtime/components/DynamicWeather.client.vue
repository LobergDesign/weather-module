<template>
  <div>
    <nuxt-icon
      v-if="status === 'success'"
      class="dynamic-weather-icon"
      :name="`weather/${setIcon}`"
      filled
    />
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useRuntimeConfig } from "#app";
import { $fetch } from "ofetch";
import type { OpenMeteoResponse, WeatherIcon } from "../types/weather";
import { WEATHER_CODE_MAP } from "../utils/constants";

// Expose status via v-model for parent component control
const status = defineModel<"idle" | "pending" | "success" | "error">("status", {
  default: "idle",
});

// Get module configuration from runtime config
const config = useRuntimeConfig();
const { latitude, longitude } = config.public.weatherModule;

// Client-side data fetching
const data = ref<OpenMeteoResponse | null>(null);

const setIcon = computed<WeatherIcon>(() => {
  if (!data.value?.current_weather) return "partly-cloudy-day";

  const { weathercode, is_day } = data.value.current_weather;
  const iconSet = WEATHER_CODE_MAP[weathercode];

  if (!iconSet) return "partly-cloudy-day";

  return is_day === 1 ? iconSet.day : iconSet.night;
});

// Fetch weather data on client mount
onMounted(async () => {
  status.value = "pending";
  try {
    data.value = await $fetch<OpenMeteoResponse>(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    );
    status.value = "success";
  } catch (error) {
    console.error("Error fetching weather data:", error);
    status.value = "error";
  }
});
</script>
<style scoped>
.dynamic-weather-icon :deep(svg) {
  height: clamp(25px, 6vw, 50px);
  width: clamp(25px, 6vw, 50px);
}
</style>
