<script setup lang="ts">
import { contacts } from "~/data/contacts";

const contactButtons = computed(() =>
  contacts.filter((c) => !c.to.startsWith("mailto:")),
);
</script>

<template>
  <UPageHero>
    <template #title>
      <span class="text-white">Свяжитесь со мной</span>
    </template>

    <template #description>
      Выберите удобный способ связи: Telegram для быстрых вопросов, телефон для
      срочных задач или почта для подробного описания проблемы.
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
  </UPageHero>
</template>

<style lang="css" scoped></style>
