<script setup lang="ts">
import { contacts } from "~/data/contacts";

const contactButtons = computed(() =>
  contacts.filter((c) => !c.to.startsWith("mailto:")),
);
</script>

<template>
  <UPageCTA
    :ui="{
      root: 'bg-gray-900 rounded-none ring-0',
    }"
  >
    <template #title>
      <span class="text-white">Напишите — консультация бесплатна</span>
    </template>

    <template #description>
      Опишите проблему любым удобным способом. Проконсультирую, подскажу
      решение, а если понадобится выезд или настройка — назову точную стоимость
      до начала работ.
    </template>

    <template #links>
      <UButton
        v-for="contact in contactButtons"
        :key="contact.label"
        :to="contact.to"
        :target="contact.target"
        :icon="contact.icon"
        :aria-label="contact.ariaLabel"
        :label="contact.label"
        :variant="contact.icon.includes('telegram') ? 'solid' : 'outline'"
        :class="
          contact.icon.includes('telegram') ? '' : 'text-white ring-white'
        "
      />
    </template>
  </UPageCTA>
</template>

<style lang="css" scoped></style>
