<script setup lang="ts">
import { navItems } from "~/data/navigation";
import { contacts } from "~/data/contacts";
</script>

<template>
  <UHeader title="EKB IT Core — Главная">
    <template #title>
      <AppLogo variant="light" />
    </template>

    <template #default>
      <UNavigationMenu
        :items="navItems"
        variant="link"
        :ui="{ linkLeadingIcon: 'hidden' }"
      />
    </template>

    <template #right>
      <UButton
        v-for="contact in contacts"
        :key="contact.label"
        :to="contact.to"
        :target="contact.target"
        :icon="contact.icon"
        :aria-label="contact.label"
        variant="ghost"
      />
    </template>
  </UHeader>
</template>

<style lang="css" scoped></style>
