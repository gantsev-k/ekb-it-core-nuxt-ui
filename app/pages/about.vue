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
    <AboutHero />
    <AboutTimeline />
    <AboutApproach />
    <AboutSpecialization />
  </UPage>
</template>

<style lang="css" scoped></style>
