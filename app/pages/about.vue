<script setup lang="ts">
useSeoMeta({
  title: "Обо мне",
});

useSchemaOrg([
  defineWebPage({
    name: "Обо мне",
  }),
]);
</script>

<template>
  <UPage>
    <h1>About page</h1>
  </UPage>
</template>

<style lang="css" scoped></style>
