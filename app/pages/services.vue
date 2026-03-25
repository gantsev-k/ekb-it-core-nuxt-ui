<script setup lang="ts">
useSeoMeta({
  title: "Услуги",
});

useSchemaOrg([
  defineWebPage({
    name: "Услуги",
  }),
]);
</script>

<template>
  <UPage>
    <ServicesHero />
    <ServicesCta />
  </UPage>
</template>

<style lang="css" scoped></style>
