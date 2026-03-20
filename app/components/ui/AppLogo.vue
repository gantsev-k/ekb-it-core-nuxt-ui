<script setup lang="ts">
import { icons } from "~/data/icons";

const props = withDefaults(defineProps<{ variant?: "light" | "dark" }>(), {
  variant: "light",
});

const baseColorClass = computed(() =>
  props.variant === "dark" ? "text-primary-400" : "text-primary",
);

const textColorClass = computed(() =>
  props.variant === "dark" ? "text-white" : "text-black",
);

const hoverColorClass = computed(() =>
  props.variant === "dark"
    ? "group-hover:text-primary-400"
    : "group-hover:text-primary",
);
</script>

<template>
  <div class="group flex items-center gap-2">
    <div class="flex items-center justify-center p-1 rounded bg-primary">
      <UIcon :name="icons.computer.name" class="size-6 text-white" />
    </div>
    <div :class="[baseColorClass, 'flex items-center text-lg font-bold']">
      ekb
      <div
        :class="[
          textColorClass,
          hoverColorClass,
          'transition-colors duration-200',
        ]"
      >
        -it-core
      </div>
    </div>
  </div>
</template>
