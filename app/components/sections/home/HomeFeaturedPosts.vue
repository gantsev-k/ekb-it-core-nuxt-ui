<script setup lang="ts">
const { data: featuredPosts } = await useAsyncData("featured-posts", () =>
  queryCollection("blog")
    .where("published", "=", true)
    .where("featured", "=", true)
    .order("date", "DESC")
    .limit(3)
    .all(),
);
</script>

<template>
  <UPageSection :ui="{ root: 'bg-gray-50' }">
    <template #title> Полезные статьи </template>

    <template #description>
      Простым языком о сложном: Windows, Linux, железо и безопасность
    </template>

    <template #body>
      <UBlogPosts as="ul">
        <UBlogPost
          v-for="post in featuredPosts"
          :key="post.id"
          as="li"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :image="post.image"
        />
      </UBlogPosts>
    </template>

    <template #links>
      <div class="flex justify-center">
        <UButton
          to="/blog"
          label="Все статьи"
          trailing-icon="material-symbols:arrow-forward"
        />
      </div>
    </template>
  </UPageSection>
</template>
