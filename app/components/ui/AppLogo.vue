<script setup lang="ts">
import { icons } from "~/data/icons";

const props = withDefaults(defineProps<{ variant?: "light" | "dark" }>(), {
  variant: "light",
});

const textColorClass = computed(() =>
  props.variant === "dark" ? "text-white" : "text-black",
);
</script>

<template>
  <div class="group flex items-center gap-2">
    <div class="flex items-center justify-center bg-primary p-1 rounded">
      <UIcon :name="icons.computer.name" class="size-6 text-white" />
    </div>
    <div class="flex items-center text-primary text-lg font-bold">
      ekb
      <div
        :class="[
          textColorClass,
          'group-hover:text-primary transition-colors duration-200',
        ]"
      >
        -it-core
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
