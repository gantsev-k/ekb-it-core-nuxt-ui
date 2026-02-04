<script setup lang="ts">
import { ru } from "@nuxt/ui/locale";
</script>

<template>
  <UApp :locale="ru">
    <NuxtLayout>
      <UMain as="main">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
  </UApp>
</template>

<style lang="css" scoped></style>
