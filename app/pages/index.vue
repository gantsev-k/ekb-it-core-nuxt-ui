<script setup lang="ts">
useSeoMeta({
  title: "Главная",
});

useSchemaOrg([
  defineWebPage({
    name: "Главная",
  }),
]);
</script>

<template>
  <UPage>
    <HomeFeaturedPosts />
  </UPage>
</template>

<style lang="css" scoped></style>
