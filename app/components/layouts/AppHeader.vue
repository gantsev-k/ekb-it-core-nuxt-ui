<script setup lang="ts">
import { navItems } from "~/data/navigation";
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
  </UHeader>
</template>

<style lang="css" scoped></style>
