<script setup lang="ts">
import { icons } from "~/data/icons";

const timelineItems = [
  {
    date: "2000–2010",
    title: "Системный администратор",
    description:
      "Начинал с полной поддержки пользователей: компьютеры, периферия, локальные сети. Научился не просто чинить, а слышать человека: часто проблема не в технике, а в том, как ей пользуются.",
    icon: icons.computer.name,
    badges: [
      "Техподдержка",
      "Настройка ПК",
      "Windows Server",
      "Локальные сети",
      "Active Directory",
    ],
  },
  {
    date: "2010–2018",
    title: "Специалист по внедрению ПО",
    description:
      "Занимался внедрением корпоративных систем и обучением людей. Понял главное: технология должна помогать, а не усложнять. Научился объяснять сложное простыми словами.",
    icon: icons.chart.name,
    badges: [
      "Внедрение ПО",
      "Обучение",
      "Базы данных",
      "Корпоративные системы",
      "Аналитика",
    ],
  },
  {
    date: "2018–настоящее время",
    title: "Инженер инфраструктуры и автоматизации",
    description:
      "Работаю с Linux, виртуализацией и автоматизацией процессов. Помогаю командам выстроить инфраструктуру без сбоев. Привык, что всё должно работать как часы — и тот же подход применяю в частных задачах.",
    icon: icons.code.name,
    badges: [
      "Linux",
      "Proxmox",
      "Автоматизация",
      "Python/Bash",
      "CI/CD",
      "Docker",
      "Мониторинг",
      "Git",
    ],
  },
];
</script>

<template>
  <UPageSection>
    <template #title>Мой путь в IT</template>

    <template #description>
      Прошёл путь от системного администратора до автоматизации в команде
      разработки. Научился видеть проблему глубже и объяснять сложное просто —
      это и применяю в работе с клиентами.
    </template>

    <UTimeline
      :items="timelineItems"
      size="xl"
      reverse
      :default-value="0"
      :ui="{
        date: 'text-muted',
      }"
    >
      <template #description="{ item }">
        <div>
          <p>{{ item.description }}</p>
          <div class="flex flex-wrap gap-1.5 mt-2">
            <UBadge
              v-for="badge in item.badges"
              :key="badge"
              variant="outline"
              size="sm"
            >
              {{ badge }}
            </UBadge>
          </div>
        </div>
      </template>
    </UTimeline>
  </UPageSection>
</template>

<style lang="css" scoped></style>
