<script setup lang="ts">
import { icons } from "~/data/icons";

const advantages = [
  {
    icon: icons.handshake.name,
    title: "Надёжно",
    description: "Гарантия на все виды работ",
  },
  {
    icon: icons.lightbulb.name,
    title: "Понятно",
    description: "Объясняю сложное простыми словами",
  },
  {
    icon: icons.computer.name,
    title: "Удобно",
    description: "Работаю очно и удалённо",
  },
  {
    icon: icons.currencyRuble.name,
    title: "Выгодно",
    description: "Цены ниже, чем в сервисных центрах",
  },
];
</script>

<template>
  <UPageSection
    :ui="{
      container: 'py-6 sm:py-10 lg:py-12',
      features:
        'grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible',
    }"
  >
    <template #features>
      <UPageFeature
        v-for="(item, index) in advantages"
        :key="index"
        as="li"
        :ui="{ root: 'text-center' }"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        orientation="vertical"
      />
    </template>
  </UPageSection>
</template>

<style lang="css" scoped></style>
