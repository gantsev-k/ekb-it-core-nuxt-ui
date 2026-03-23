<script setup lang="ts">
import { navItems } from "~/data/navigation";

const heroButtons = computed(() =>
  navItems.filter((item) => ["/services", "/contacts"].includes(item.to)),
);
</script>

<template>
  <UPageCTA
    :ui="{
      root: 'bg-gray-900 rounded-none ring-0',
    }"
  >
    <template #title>
      <span class="text-white">Готовы решить проблему?</span>
    </template>

    <template #description>
      <span class="text-gray-400">
        Не нужно готовить ТЗ. Просто опишите, что не работает — я подскажу
        решение и назову стоимость.
      </span>
    </template>

    <template #links>
      <UButton
        v-for="(item, index) in heroButtons"
        :key="item.to"
        :to="item.to"
        :label="item.cta"
        :variant="index === 0 ? 'solid' : 'outline'"
        :class="index === 0 ? '' : 'text-white ring-white'"
      />
    </template>
  </UPageCTA>
</template>

<style lang="css" scoped></style>
