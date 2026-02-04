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
    <h1>Main page</h1>
  </UPage>
</template>

<style lang="css" scoped></style>
