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
      <span class="text-white">Проблемы с компьютером?</span>
    </template>

    <template #description>
      <span class="text-gray-400">
        Выберите удобный вариант: изучите услуги и цены или свяжитесь для
        бесплатной консультации.
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
