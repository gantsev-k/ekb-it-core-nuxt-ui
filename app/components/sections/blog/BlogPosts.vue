<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const activeTag = ref<string | null>((route.query.tag as string) || null);

const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("blog").all(),
);

const allTags = computed(() => {
  const tags = new Set<string>();
  publishedPosts.value.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
});

const filteredPosts = computed(() => {
  if (!activeTag.value) return publishedPosts.value;
  return publishedPosts.value.filter((post) =>
    post.tags?.includes(activeTag.value as string),
  );
});

const currentPage = ref(1);
const itemsPerPage = 6;

const publishedPosts = computed(() =>
  (posts.value ?? []).filter((post) => post.published),
);

const totalPages = computed(() =>
  Math.ceil(filteredPosts.value.length / itemsPerPage),
);

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredPosts.value.slice(start, end);
});

watch(activeTag, (newTag) => {
  currentPage.value = 1;
  if (newTag) {
    router.replace({ query: { tag: newTag } });
  } else {
    router.replace({ query: {} });
  }
});
</script>

<template>
  <UPageSection :ui="{ footer: 'flex items-center justify-center' }">
    <template #headline>
      <div v-if="allTags.length" class="flex flex-wrap gap-2 mb-8">
        <UBadge
          :variant="!activeTag ? 'solid' : 'outline'"
          :color="!activeTag ? 'primary' : 'neutral'"
          class="cursor-pointer"
          @click="activeTag = null"
        >
          Все
        </UBadge>
        <UBadge
          v-for="tag in allTags"
          :key="tag"
          :variant="activeTag === tag ? 'solid' : 'outline'"
          :color="activeTag === tag ? 'primary' : 'neutral'"
          class="cursor-pointer"
          @click="activeTag = tag"
        >
          {{ tag }}
        </UBadge>
      </div>
    </template>

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
          :ui="{ footer: 'flex items-center p-5' }"
        >
          <template #footer>
            <div class="flex gap-2">
              <UBadge
                v-for="tag in post.tags"
                :key="tag"
                :label="tag"
                size="sm"
              />
            </div>
          </template>
        </UBlogPost>
      </UBlogPosts>
    </template>

    <template #footer>
      <UPagination
        v-if="totalPages > 1"
        v-model:page="currentPage"
        :total="filteredPosts.length"
        :items-per-page="itemsPerPage"
        :sibling-count="1"
        aria-label="Навигация по страницам блога"
      />
    </template>
  </UPageSection>
</template>
