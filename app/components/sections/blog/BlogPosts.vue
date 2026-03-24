<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("blog").all(),
);

const currentPage = ref(1);
const itemsPerPage = 2;

const publishedPosts = computed(() =>
  (posts.value ?? []).filter((post) => post.published),
);

const totalPages = computed(() =>
  Math.ceil(publishedPosts.value.length / itemsPerPage),
);
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return publishedPosts.value.slice(start, end);
});
</script>

<template>
  <UPageSection :ui="{ footer: 'flex items-center justify-center' }">
    <template #body>
      <UBlogPosts>
        <UBlogPost
          v-for="post in paginatedPosts"
          :key="post.id"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :image="post.image"
          :to="post.path"
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
        :total="publishedPosts.length"
        :items-per-page="itemsPerPage"
        :sibling-count="1"
        aria-label="Навигация по страницам блога"
      />
    </template>
  </UPageSection>
</template>
