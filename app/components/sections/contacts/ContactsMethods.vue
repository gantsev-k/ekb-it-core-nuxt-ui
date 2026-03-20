<script setup lang="ts">
import { contacts } from "~/data/contacts";
</script>

<template>
  <UPageSection :ui="{ features: '' }">
    <template #title> Начните с простого сообщения </template>

    <template #description>
      Выберите, как вам удобнее связаться — отвечу в ближайшее время.
    </template>

    <template #features>
      <UPageCard
        v-for="(contact, index) in contacts"
        :key="contact.label"
        :title="contact.value"
        :description="contact.description"
        :to="contact.to"
        as="li"
        spotlight
        :class="index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''"
      >
        <template #leading>
          <div class="flex items-center gap-2">
            <UIcon :name="contact.icon" class="size-5 text-primary" />
            <span>{{ contact.name }}</span>
          </div>
        </template>
      </UPageCard>
    </template>
  </UPageSection>
</template>

<style lang="css" scoped></style>
