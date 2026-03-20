<script setup lang="ts">
const { footerColumns } = useFooterColumns();
</script>

<template>
  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns :columns="footerColumns">
          <template #left>
            <div class="flex flex-col gap-2 cursor-default">
              <AppLogo variant="dark" />
              <p class="text-sm text-gray-400">
                Ремонт ПК и настройка Windows / Linux — Екатеринбург
              </p>
            </div>
          </template>

          <template #right>
            <div class="text-sm">
              <p class="font-medium text-gray-200 mb-2">
                Google's First Principle
              </p>

              <blockquote class="border-l-2 border-primary-300 pl-3 mb-2">
                <p class="text-primary-300 italic">
                  "Focus on the user and all else will follow."
                </p>
              </blockquote>

              <p class="text-gray-400">
                I share this philosophy and build my work around this approach.
              </p>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>
  </UFooter>
</template>

<style lang="css" scoped></style>
