<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
}

withDefaults(defineProps<Props>(), {
  level: 2,
  bold: false,
});
</script>

<template>
  <component :is="`h${level}`" :class="['blog-heading', { bold }]">
    <slot></slot>
  </component>
</template>

<style scoped>
.blog-heading {
  margin-bottom: 1rem;
  font-weight: normal;
}

.bold {
  font-weight: bold;
}
</style>
