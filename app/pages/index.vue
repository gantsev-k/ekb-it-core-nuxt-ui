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
    <HomeHero />
    <HomeAdvantages />
    <HomeFeaturedPosts />
    <HomeCta />
  </UPage>
</template>

<style lang="css" scoped></style>
