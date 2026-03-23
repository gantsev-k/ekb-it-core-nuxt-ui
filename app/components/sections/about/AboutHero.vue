<script setup lang="ts">
import { navItems } from "~/data/navigation";

const heroButtons = computed(() =>
  navItems.filter((item) => ["/services", "/contacts"].includes(item.to)),
);
</script>

<template>
  <UPageHero>
    <template #title>
      <span class="text-white">
        <span class="text-primary">Решаю проблемы с ПК</span> — честно и понятно
      </span>
    </template>

    <template #description>
      20 лет в IT. Помогаю решать проблемы с программами, настраивать технику и
      разбираться в том, как это всё работает. Честно, без скрытых условий и
      сложных терминов.
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
  </UPageHero>
</template>

<style lang="css" scoped></style>
