<script setup lang="ts">
import { icons } from "~/data/icons";

const approachItems = [
  {
    name: "Честно",
    title: "Цена до начала работ",
    description:
      "Изучу проблему, назову стоимость заранее. Если в процессе что-то изменится — обязательно согласуем.",
    icon: icons.currencyRuble.name,
  },
  {
    name: "Просто",
    title: "Объясняю без терминов",
    description:
      "Не использую «заумные» слова. Расскажу, что сломалось и как избежать этого в будущем — понятным языком.",
    icon: icons.lightbulb.name,
  },
  {
    name: "Надёжно",
    title: "Работаю на результат",
    description:
      "Не пропадаю после оплаты. Проверяю, что всё работает, и остаюсь на связи, если возникнут вопросы.",
    icon: icons.verified.name,
  },
];
</script>

<template>
  <UPageSection
    title="Мой подход к работе"
    description="Никаких скрытых условий и сложных терминов — всё честно и по делу."
    :ui="{ root: 'bg-gray-50' }"
  >
    <template #features>
      <UPageCard
        v-for="(item, index) in approachItems"
        :key="item.name"
        as="li"
        spotlight
        :class="index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''"
      >
        <template #leading>
          <div class="flex items-center gap-2">
            <UIcon :name="item.icon" class="size-6 text-primary" />
            {{ item.name }}
          </div>
        </template>

        <template #title>{{ item.title }}</template>
        <template #description>{{ item.description }}</template>
      </UPageCard>
    </template>

    <UAlert
      :icon="icons.lightbulb.name"
      description="Моя цель — не просто починить компьютер, а чтобы вы поняли причину проблемы и могли предотвратить её в будущем."
      variant="subtle"
    />
  </UPageSection>
</template>
