<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  title: string;
  staffName: string;
  staffIcon: string;
  postDate: Date;
}

const props = defineProps<Props>();

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
  <article class="blog-container">
    <header class="blog-header">
      <h1 class="blog-title">{{ title }}</h1>
      <div class="blog-meta">
        <div class="staff-info">
          <img :src="staffIcon" :alt="staffName" class="staff-icon" />
          <span class="staff-name">{{ staffName }}</span>
        </div>
        <time :datetime="postDate.toISOString()" class="post-date">
          {{ formatDate(postDate) }}
        </time>
      </div>
    </header>
    <div class="blog-content">
      <slot> </slot>
    </div>
  </article>
</template>

<style scoped>
.blog-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
}

.blog-header {
  margin-bottom: 24px;
}

.blog-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 16px;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
}

.staff-info {
  display: flex;
  align-items: center;
}

.staff-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
}

.staff-name {
  font-weight: 600;
}

.post-date {
  font-style: italic;
}

.blog-content {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
}

@media (max-width: 768px) {
  .blog-container {
    padding: 16px;
  }

  .blog-title {
    font-size: 1.5rem;
  }

  .blog-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .post-date {
    margin-top: 8px;
  }

  .blog-content {
    font-size: 1rem;
  }
}
</style>
