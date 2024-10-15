<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "small" | "medium" | "large";
  bold?: boolean;
}

withDefaults(defineProps<Props>(), {
  level: 2,
  size: "medium",
  bold: false,
});
</script>

<template>
  <component
    :is="`h${level}`"
    :class="['blog-heading', `size-${size}`, { bold: bold }]"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.blog-heading {
  margin-bottom: 1rem;
}

.size-small {
  font-size: 1.2rem;
}

.size-medium {
  font-size: 1.5rem;
}

.size-large {
  font-size: 2rem;
}

.bold {
  font-weight: bold;
}
</style>
