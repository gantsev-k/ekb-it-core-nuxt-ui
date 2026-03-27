<script setup lang="ts">
import { icons } from "~/data/icons";

const getIcon = (name: string) => icons[name as keyof typeof icons]?.name;

const { data: services } = await useAsyncData("services", () =>
  queryCollection("services").all(),
);
</script>

<template>
  <UPageSection id="services">
    <template #title>Компьютерная помощь в Екатеринбурге</template>

    <template #description>
      Решаю проблемы с компьютером: установка ОС, удаление вирусов, настройка
      сети. Честно, прозрачно, с гарантией результата. Работаю очно и удалённо.
    </template>

    <template #features>
      <UPageCard
        v-for="service in services"
        :key="service.slug"
        :title="service.title"
        :description="service.shortDescription"
        :icon="getIcon(service.icon)"
        :to="`/services/${service.slug}`"
      />
    </template>
  </UPageSection>
</template>
