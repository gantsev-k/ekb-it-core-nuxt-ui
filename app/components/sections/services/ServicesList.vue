<script setup lang="ts">
import { icons } from "~/data/icons";
import type { AccordionItem } from "@nuxt/ui";

type PriceType = "fixed" | "hourly" | "negotiable";

interface ServiceItem extends AccordionItem {
  label: string;
  slot: string;
  icon: string;
  price: number | null;
  priceType: PriceType;
  content: string;
}

const items = ref<ServiceItem[]>([
  {
    label: "Установка Windows",
    slot: "service",
    icon: icons.computer.name,
    price: 1500,
    priceType: "fixed",
    content:
      "Чистая установка или переустановка Windows 10/11. Настройка драйверов, базового ПО и учётных записей. Работаю как с лицензионными ключами, так и с установкой без лицензии (вы получаете рабочую систему, ключ активируете самостоятельно).",
  },
  {
    label: "Установка Linux",
    slot: "service",
    icon: icons.code.name,
    price: 1500,
    priceType: "fixed",
    content:
      "Установка Ubuntu, Debian, Mint или других дистрибутивов. Помогаю выбрать подходящую версию под ваши задачи — от простого домашнего использования до серверных решений.",
  },
  {
    label: "Удаление вирусов и вредоносного ПО",
    slot: "service",
    icon: icons.shield.name,
    price: 1000,
    priceType: "fixed",
    content:
      "Полная проверка и очистка системы от вирусов, троянов, рекламного ПО и майнеров. Восстановление работы системы после заражения. Консультация по профилактике.",
  },
  {
    label: "Удаленная поддержка и консультация",
    slot: "service",
    icon: icons.headset.name,
    price: 500,
    priceType: "hourly",
    content:
      "Оперативная помощь через удаленный доступ. Настройка программ, сети, периферии. Бесплатная консультация перед началом работ — честно оценю, смогу ли помочь дистанционно.",
  },
  {
    label: "Настройка сервера",
    slot: "service",
    icon: icons.code.name,
    price: null,
    priceType: "negotiable",
    content:
      "Настройка и администрирование Linux-серверов (Ubuntu, Debian). Установка и конфигурация Proxmox, веб-серверов (Nginx, Apache), баз данных. Настройка резервного копирования, мониторинга и базовой безопасности. Индивидуальный расчёт стоимости в зависимости от задач и инфраструктуры.",
  },
]);

const formatPrice = (price: number | null, type: PriceType) => {
  if (type === "negotiable" || price === null) return "по договорённости";
  if (type === "hourly") return `от ${price.toLocaleString("ru-RU")} ₽ / час`;
  return `от ${price.toLocaleString("ru-RU")} ₽`;
};
</script>

<template>
  <UPageSection>
    <template #title>Компьютерная помощь в Екатеринбурге</template>

    <template #description>
      Решаю проблемы с компьютером: установка ОС, удаление вирусов, настройка
      сети. Честно, прозрачно, с гарантией результата. Работаю очно и удалённо.
    </template>

    <UAccordion :items="items">
      <template #trailing="{ item }">
        <span v-if="item.priceType" class="flex items-center gap-2 text-muted">
          <p>{{ formatPrice(item.price, item.priceType) }}</p>
        </span>
      </template>
    </UAccordion>
  </UPageSection>
</template>
