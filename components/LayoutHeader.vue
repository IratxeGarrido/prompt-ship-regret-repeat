<template>
  <header
    v-if="logoHeader || title"
    class="flex items-center gap-3"
  >
    <img
      v-if="logoHeader"
      :src="logoHeader"
      width="60"
      height="60"
      class="object-contain"
    />
    <span v-if="title" class="text-sm text-fuchsia-700 dark:text-white">{{ title }}</span>
  </header>
</template>

<script setup lang="ts">
defineProps({
  logoHeader: { type: String },
  title: { type: String },
});
</script>
