<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
}

withDefaults(defineProps<Props>(), {
  size: 'small',
  bold: false,
  align: 'left',
});
</script>

<template>
  <p :class="['blog-paragraph', `size-${size}`, { bold: bold }, `align-${align}`]">
    <slot></slot>
  </p>
</template>

<style scoped>
.blog-paragraph {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.size-small {
  font-size: 0.9rem;
}

.size-medium {
  font-size: 1rem;
}

.size-large {
  font-size: 1.2rem;
}

.bold {
  font-weight: bold;
}

.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

.align-justify {
  text-align: justify;
}
</style>
