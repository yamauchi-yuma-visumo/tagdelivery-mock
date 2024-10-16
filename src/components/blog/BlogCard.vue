<script setup lang="ts">
import { computed } from 'vue';

interface BlogPost {
  id: string;
  title: string;
  imageSrc: string;
  staffName: string;
  staffIcon: string;
  postDate: Date;
}

const props = defineProps<{
  post: BlogPost;
}>();

const isNew = computed(() => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - props.post.postDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7; // 7日以内の投稿を「新着」とする
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<template>
  <div class="blog-post-card">
    <div class="image-container">
      <img :src="post.imageSrc" :alt="post.title" class="featured-image" />
      <span v-if="isNew" class="new-tag">NEW</span>
    </div>
    <div class="content">
      <h2 class="title">{{ post.title }}</h2>
      <div class="staff-info">
        <img :src="post.staffIcon" :alt="post.staffName" class="staff-icon" />
        <span class="staff-name">{{ post.staffName }}</span>
      </div>
      <time :datetime="post.postDate.toISOString()" class="post-date">
        {{ formatDate(post.postDate) }}
      </time>
    </div>
  </div>
</template>

<style scoped>
.blog-post-card {
  width: 100%;
  height: 400px; /* カードの全体の高さを固定 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease;
}

.blog-post-card:hover {
  transform: translateY(-5px);
}

.image-container {
  position: relative;
  width: 100%;
  height: 70%; /* カードの70%を画像が占める */
}

.featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.new-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff4081;
  color: white;
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  font-weight: bold;
}

.content {
  height: 30%; /* カードの30%をコンテンツが占める */
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.title {
  margin: 0 0 8px 0;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.staff-info {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.staff-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
}

.staff-name {
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-date {
  font-size: 0.7rem;
  color: #999;
}
</style>
