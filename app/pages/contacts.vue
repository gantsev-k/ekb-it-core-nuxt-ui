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
    <ContactsConditions />
    <ContactsCta />
  </UPage>
</template>

<style lang="css" scoped></style>
