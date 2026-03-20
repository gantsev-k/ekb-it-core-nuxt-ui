<script setup lang="ts">
useSeoMeta({
  title: "Контакты",
});

useSchemaOrg([
  defineWebPage({
    name: "Контакты",
  }),
]);
</script>

<template>
  <UPage>
    <ContactsHero />
    <ContactsMethods />
  </UPage>
</template>

<style lang="css" scoped></style>
