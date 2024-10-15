<script setup lang="ts">
import { defineProps } from "vue";
import BlogCard from "./BlogCard.vue";

export interface BlogPost {
  id: string;
  title: string;
  imageSrc: string;
  staffName: string;
  staffIcon: string;
  postDate: Date;
}

defineProps<{
  posts: BlogPost[];
}>();
</script>

<template>
  <div class="blog-post-grid">
    <BlogCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped>
.blog-post-grid {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  gap: 24px;
}

/* デフォルト（モバイル）: 1列 */
.blog-post-grid {
  grid-template-columns: 1fr;
}

/* 小型タブレット: 2列 */
@media (min-width: 640px) {
  .blog-post-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 大型タブレット: 3列 */
@media (min-width: 768px) {
  .blog-post-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 小型デスクトップ: 4列 */
@media (min-width: 1024px) {
  .blog-post-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* 大型デスクトップ: 5列 */
@media (min-width: 1280px) {
  .blog-post-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
