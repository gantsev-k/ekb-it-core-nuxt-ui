<script setup lang="ts">
import { icons } from "~/data/icons";
</script>

<template>
  <UPageSection>
    <template #title>Компьютерная помощь в Екатеринбурге</template>

    <template #description>
      Решаю проблемы с компьютером: установка ОС, удаление вирусов, настройка
      сети. Честно, прозрачно, с гарантией результата. Работаю очно и удалённо.
    </template>

    <UIcon :name="icons.computer.name" />
    Тут будут карточки услуг
  </UPageSection>
</template>
