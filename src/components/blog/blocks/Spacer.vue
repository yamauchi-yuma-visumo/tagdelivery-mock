<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface Props {
  size?: 'small' | 'medium' | 'large';
  direction?: 'vertical' | 'horizontal';
}
const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  direction: 'vertical',
});
</script>

<template>
  <div :class="['spacer', props.size, props.direction]"></div>
</template>

<style scoped>
.spacer {
  flex: none;
}

.vertical {
  width: 100%;
}

.horizontal {
  height: 100%;
}

.small {
  --size: 1rem;
}

.medium {
  --size: 2rem;
}

.large {
  --size: 3rem;
}

.vertical.small,
.vertical.medium,
.vertical.large {
  height: var(--size);
}

.horizontal.small,
.horizontal.medium,
.horizontal.large {
  width: var(--size);
}
</style>
