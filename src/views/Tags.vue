<script setup lang="ts">
import { ref } from "vue";
import BlogPostGrid, { type BlogPost } from "@/components/blog/BlogGridList.vue";

// サンプルデータ生成関数
const generateSampleData = (count: number): BlogPost[] => {
  const sampleData: BlogPost[] = [];
  const staffMembers = [
    { name: "山田太郎", icon: "/images/person.jpeg" },
    { name: "佐藤花子", icon: "/images/person.jpeg" },
    { name: "鈴木一郎", icon: "/images/person.jpeg" },
  ];

  for (let i = 1; i <= count; i++) {
    const randomStaff =
      staffMembers[Math.floor(Math.random() * staffMembers.length)];
    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000,
    );

    sampleData.push({
      id: i.toString(),
      title: `${
        [
          "【HOT ITEM！】スマホストラップstaff code♡",
          "todays new arrival・・♪",
          "ローズitemに夢中・・♡",
        ][i % 3]
      }`,
      imageSrc: `/images/aparell1.jpg`,
      staffName: randomStaff.name,
      staffIcon: randomStaff.icon,
      postDate: randomDate,
    });
  }

  return sampleData;
};

const blogPosts = ref<BlogPost[]>(generateSampleData(12));
</script>

<template>
  <div class="blog-page">
    <h1>ブログ投稿一覧</h1>
    <BlogPostGrid :posts="blogPosts" />
  </div>
</template>

<style scoped>
.blog-page {
}

h1 {
  font-size: 2rem;
  margin-bottom: 50px;
  text-align: center;
}
</style>
