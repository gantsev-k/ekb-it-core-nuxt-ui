<script setup lang="ts">
import { icons } from "~/data/icons";

const formatPrice = (
  price: number | null,
  type: "fixed" | "hourly" | "negotiable",
) => {
  if (type === "negotiable" || price === null) return "по договорённости";
  if (type === "hourly") return `от ${price.toLocaleString("ru-RU")} ₽ / час`;
  return `от ${price.toLocaleString("ru-RU")} ₽`;
};

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
        :ui="{ footer: 'w-full' }"
      >
        <template #footer>
          <div class="flex justify-between items-center">
            <span class="text-primary font-semibold">
              {{ formatPrice(service.price, service.priceType) }}
            </span>
            <span class="flex items-center gap-2">
              Подробнее
              <UIcon
                :name="icons.arrowForward.name"
                class="w-4 h-4 text-muted"
              />
            </span>
          </div>
        </template>
      </UPageCard>
    </template>
  </UPageSection>
</template>
