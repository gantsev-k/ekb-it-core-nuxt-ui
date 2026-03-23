<script setup lang="ts">
import { icons } from "~/data/icons";

const workBenefits = [
  {
    icon: icons.computer.name,
    name: "Удалённо или с выездом",
    title: "Как вам удобнее",
    description:
      "Большинство проблем решаю онлайн через AnyDesk/TeamViewer. Если нужно — приеду по Екатеринбургу.",
    link: "/blog",
    linkText: "Как работает удалёнка? Читайте в блоге",
  },
  {
    icon: icons.currencyRuble.name,
    name: "Диагностика бесплатно",
    title: "Цена до начала работ",
    description:
      "Изучу проблему, назову стоимость заранее. Если в процессе что-то изменится — обязательно согласуем.",
    link: "/services",
    linkText: "Все услуги и цены",
  },
  {
    icon: icons.lightbulb.name,
    name: "Работаю на результат",
    title: "Объясняю просто о сложном",
    description:
      "Мне важно, чтобы у вас всё работало. Расскажу, что сломалось и как избежать этого в будущем.",
    link: "/about",
    linkText: "Обо мне и подходе",
  },
];
</script>

<template>
  <UPageSection>
    <template #body>
      <UAlert
        :icon="icons.info.name"
        title="Важно знать"
        description="95% услуг — работа с ПО. Аппаратный ремонт не выполняю, но помогу с диагностикой и подбором комплектующих."
        variant="outline"
        class="mb-8"
      />

      <UPageGrid>
        <UPageCard
          v-for="(benefit, index) in workBenefits"
          :key="benefit.name"
          as="li"
          spotlight
          :class="index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''"
        >
          <template #leading>
            <div class="flex items-center gap-2">
              <UIcon :name="benefit.icon" class="size-6 text-primary" />
              {{ benefit.name }}
            </div>
          </template>

          <template #title>{{ benefit.title }}</template>

          <template #description>{{ benefit.description }}</template>

          <template #footer>
            <ULink
              :to="benefit.link"
              class="text-primary flex items-center gap-2"
            >
              {{ benefit.linkText }}
              <UIcon :name="icons.arrowForward.name" />
            </ULink>
          </template>
        </UPageCard>
      </UPageGrid>
    </template>

    <template #title> Просто о том, как мы будем работать </template>

    <template #description>
      Никаких скрытых условий и сложных терминов — всё честно и по делу.
    </template>
  </UPageSection>
</template>

<style lang="css" scoped></style>
