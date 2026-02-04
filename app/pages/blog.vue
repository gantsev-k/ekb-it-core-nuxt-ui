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
    <h1>Blog page</h1>
  </UPage>
</template>

<style lang="css" scoped></style>
