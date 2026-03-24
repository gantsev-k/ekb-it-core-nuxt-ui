<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryCollection("blog").path(`/blog/${route.params.slug}`).first(),
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Пост не найден" });
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogImage: post.value.image,
});
</script>

<template>
  <UPage>
    <UPageHeader>
      <template #headline>
        <UBadge v-for="tag in post!.tags" :key="tag" :label="tag" />
      </template>

      <template #title>
        {{ post!.title }}
      </template>

      <template #description>
        {{ post!.description }}
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer :value="post!" />
    </UPageBody>
  </UPage>
</template>
