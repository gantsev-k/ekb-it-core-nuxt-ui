<script setup lang="ts">
useSeoMeta({
  title: "Блог",
});

useSchemaOrg([
  defineWebPage({
    name: "Блог",
  }),
]);
</script>

<template>
  <UPage>
    <BlogHero />
  </UPage>
</template>

<style lang="css" scoped></style>
