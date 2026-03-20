<script setup lang="ts">
const { linkItems, contactItems, groupedItems } = useNavigation();
</script>

<template>
  <UHeader
    title="EKB IT Core — Главная"
    mode="slideover"
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full',
    }"
  >
    <template #title>
      <AppLogo variant="light" />
    </template>

    <template #default>
      <UNavigationMenu
        :items="linkItems"
        variant="link"
        :ui="{ linkLeadingIcon: 'hidden' }"
      />
    </template>

    <template #right>
      <div class="hidden sm:flex items-center gap-1">
        <UButton
          v-for="contact in contactItems"
          :key="contact.label"
          :to="contact.to"
          :target="contact.target"
          :icon="contact.icon"
          :aria-label="contact.label"
          variant="ghost"
        />
      </div>
    </template>

    <template #body>
      <UNavigationMenu :items="groupedItems" orientation="vertical" />
    </template>
  </UHeader>
</template>

<style lang="css" scoped></style>
