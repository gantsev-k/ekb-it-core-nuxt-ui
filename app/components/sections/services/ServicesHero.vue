<script setup lang="ts">
import { icons } from "~/data/icons";
import { navItems } from "~/data/navigation";

const contactButton = computed(() =>
  navItems.find((item) => item.to === "/contacts"),
);
</script>

<template>
  <UPageHero>
    <template #title>
      <span class="text-white">
        <span class="text-primary">Услуги по настройке ПК</span> очно в
        Екатеринбурге и удалённо
      </span>
    </template>

    <template #description>
      Настройка Windows/Linux, удаление вирусов, решение проблем с софтом.
      Удалённо или с выездом. Честно, просто, цена до начала работ.
    </template>

    <template #links>
      <UButton
        to="#services"
        label="Посмотреть услуги"
        variant="solid"
        :trailing-icon="icons.arrowDownward.name"
      />
      <UButton
        v-if="contactButton"
        :to="contactButton.to"
        :label="contactButton.cta"
        variant="outline"
        class="text-white ring-white"
      />
    </template>
  </UPageHero>
</template>
