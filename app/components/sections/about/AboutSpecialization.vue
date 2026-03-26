<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";
import { icons } from "~/data/icons";

const faqItems = ref<AccordionItem[]>([
  {
    label: "А если проблема в железе?",
    icon: icons.wrench.name,
    content:
      "Проведу диагностику и честно скажу, в чём дело. Если дело в «железе» — ремонт не выполняю, но вы будете точно знать, что менять и где искать решение.",
  },
  {
    label: "А если нужно настроить macOS?",
    icon: icons.computer.name,
    content:
      "Не работаю с техникой Apple — специализируюсь на Windows и Linux. Это позволяет мне делать свою работу максимально качественно.",
  },
  {
    label: "А если нужно срочно?",
    icon: icons.verified.name,
    content:
      "Работаю по договорённости. Если время позволяет — постараюсь помочь оперативно. Если нет — честно скажу, когда смогу взять задачу.",
  },
  {
    label: "А если я не разбираюсь в технике?",
    icon: icons.lightbulb.name,
    content:
      "Объясню всё простыми словами. Мне важно, чтобы вы поняли суть проблемы и могли предотвратить её в будущем.",
  },
  {
    label: "Сколько это стоит?",
    icon: icons.currencyRuble.name,
    content:
      "Диагностика — бесплатно. Цену называю до начала работ, согласовываю, если в процессе что-то меняется. Платите только за то, что делаю.",
  },
]);
</script>

<template>
  <UPageSection>
    <template #title>Важные детали</template>
    <template #description>
      Отвечу на то, что обычно волнует перед началом работы.
    </template>

    <UAccordion
      :items="faqItems"
      :ui="{
        leadingIcon: 'size-5 text-primary',
      }"
      :unmount-on-hide="false"
    />
  </UPageSection>
</template>
