<script setup lang="ts">
import { defineProps } from 'vue';

interface ImageProps {
  src: string;
  alt: string;
  link?: string;
}

interface Props {
  images: ImageProps[];
}

defineProps<Props>();
</script>

<template>
  <div class="blog-images">
    <div v-for="(image, index) in images" :key="index" class="image-wrapper">
      <a v-if="image.link" :href="image.link" target="_blank" rel="noopener noreferrer">
        <img :src="image.src" :alt="image.alt" />
      </a>
      <img v-else :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<style scoped>
.blog-images {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.image-wrapper {
  flex: 0 1 calc(33.333% - 0.67rem);
  max-width: calc(33.333% - 0.67rem);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 768px) {
  .image-wrapper {
    flex: 0 1 100%;
    max-width: 100%;
  }
}
</style>
