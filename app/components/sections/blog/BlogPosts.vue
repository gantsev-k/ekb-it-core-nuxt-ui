<script setup lang="ts">
const posts = ref([
  {
    title: "Как удалить вирус самостоятельно: пошаговое руководство",
    description:
      "Простая инструкция по обнаружению и удалению вредоносного ПО без переустановки системы. Подходит для Windows 10 и 11.",
    date: "2026-03-24",
    image: "https://placehold.jp/3d4070/ffffff/800x600.png?text=Antivirus",
    to: "/blog/remove-virus-guide",
    badge: "Антивирус",
    tags: ["Антивирус", "Windows"],
  },
  {
    title: "Windows тормозит? 5 простых способов ускорить компьютер",
    description:
      "Практические советы для тех, у кого компьютер стал работать медленно. Чистка автозагрузки, настройка питания и другие методы.",
    date: "2026-03-20",
    image: "https://placehold.jp/3d4070/ffffff/800x600.png?text=Speed",
    to: "/blog/windows-speed-up",
    badge: "Оптимизация",
    tags: ["Оптимизация", "Windows"],
  },
  {
    title: "Что делать, если пропал интернет: простая диагностика",
    description:
      "Пошаговый план действий, чтобы определить причину отсутствия интернета и попытаться восстановить его своими силами.",
    date: "2026-03-15",
    image: "https://placehold.jp/3d4070/ffffff/800x600.png?text=Network",
    to: "/blog/internet-not-working",
    badge: "Сети",
    tags: ["Сети", "Интернет"],
  },
]);

const currentPage = ref(1);
const itemsPerPage = 2;

const totalPages = computed(() => Math.ceil(posts.value.length / itemsPerPage));
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return posts.value.slice(start, end);
});
</script>

<template>
  <UPageSection :ui="{ footer: 'flex items-center justify-center' }">
    <template #body>
      <UBlogPosts>
        <UBlogPost
          v-for="post in paginatedPosts"
          :key="post.title"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :image="post.image"
          :to="post.to"
        >
          <template #badge>
            <div class="flex gap-2">
              <UBadge v-for="tag in post.tags" :key="tag" :label="tag" />
            </div>
          </template>
        </UBlogPost>
      </UBlogPosts>
    </template>

    <template #footer>
      <UPagination
        v-if="totalPages > 1"
        v-model:page="currentPage"
        :total="posts.length"
        :items-per-page="itemsPerPage"
        :sibling-count="1"
        show-edges
        size="md"
      />
    </template>
  </UPageSection>
</template>
