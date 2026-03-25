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
        <span class="text-primary">Ваш надежный IT-специалист</span> для дома и
        малого бизнеса
      </span>
    </template>

    <template #description>
      Решаю проблемы с ПК и софтом: Windows, Linux, вирусы, настройка. Удалённо
      или выездом. Честно, просто, цена до начала работ.
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
