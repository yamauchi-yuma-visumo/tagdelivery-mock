<script setup lang="ts">
import { defineProps, ref } from "vue";
import BlogCard from "./BlogCard.vue";
import BaseModal from "@/components/uiParts/BaseModal.vue";
import BlogContents from "@/components/blog/BlogContents.vue";
import Heading from "@/components/blog/blocks/Heading.vue";
import Paragraph from "@/components/blog/blocks/Paragraph.vue";
import Image from "@/components/blog/blocks/Image.vue";
import ImageCard from "@/components/blog/blocks/ImageCard.vue";
import RelatedProducts from "@/components/blog/blocks/RelatedProducts.vue";

export interface BlogPost {
  id: string;
  title: string;
  imageSrc: string;
  staffName: string;
  staffIcon: string;
  postDate: Date;
}

const props = defineProps<{
  posts: BlogPost[];
}>();

interface Emit {
  (event: "select-blog", id: string): void;
}
const emit = defineEmits<Emit>();

// モーダルの開閉状態
const isModalOpen = ref(false);

const onSelectBlogDetail = (id: string) => {
  console.log(`ブログID: ${id} が選択されました`);
  isModalOpen.value = true;
};
</script>

<template>
  <div class="blog-post-grid">
    <BlogCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @click="onSelectBlogDetail(post.id)"
    />
  </div>
  <BaseModal v-model="isModalOpen" modal-width="100dvw" modal-height="100dvh">
    <BlogContents
      title="StyleNova 2023年秋冬コレクション：都会的エレガンスの進化"
      staffName="山田太郎"
      staffIcon="/images/person.jpeg"
      :postDate="new Date('2023-05-15')"
    >
      <Paragraph size="medium">
        都市生活者のためのファッションブランド、StyleNovaが2023年秋冬コレクションを発表しました。
        今シーズンのテーマは「Urban Elegance
        Evolution」。洗練された都会的なスタイルに、
        クラシックなエレガンスを融合させた斬新なデザインが特徴です。
      </Paragraph>

      <Heading level="2" size="medium" :bold="true"
        >1. モダンなオフィススタイル</Heading
      >

      <Paragraph>
        今シーズンのハイライトは、ビジネスシーンに適した洗練されたデザインです。
        クラシックなテーラリングに現代的なツイストを加え、快適さとスタイルを両立しています。
      </Paragraph>

      <Image
        :images="[
          { src: '/images/office-style-1.jpg', alt: 'スタイリッシュなスーツ' },
          {
            src: '/images/office-style-2.jpg',
            alt: 'モダンなブラウスとスカート',
          },
          { src: '/images/office-style-3.jpg', alt: '洗練されたブレザー' },
        ]"
      />

      <RelatedProduct
        :products="[
          {
            id: 1,
            name: 'エレガントテーラードジャケット',
            price: 29800,
            image: '/products/jacket.jpg',
          },
          {
            id: 2,
            name: 'シルクブレンドブラウス',
            price: 12800,
            image: '/products/blouse.jpg',
          },
        ]"
        layout="horizontal"
      />

      <Heading level="2" size="medium" :bold="true"
        >2. カジュアルシックの新定義</Heading
      >

      <Paragraph>
        週末やカジュアルな場面でも、StyleNovaのエレガンスは健在です。
        快適さを損なうことなく、洗練された雰囲気を醸し出すデザインが揃いました。
      </Paragraph>

      <Image
        :images="[
          {
            src: '/images/casual-chic-1.jpg',
            alt: 'スタイリッシュなニットウェア',
          },
          {
            src: '/images/casual-chic-2.jpg',
            alt: 'エレガントなデニムスタイル',
          },
        ]"
      />

      <Heading level="2" size="medium" :bold="true"
        >3. エコフレンドリーな素材にフォーカス</Heading
      >

      <Paragraph>
        今シーズン、StyleNovaは環境に配慮した素材の使用を大幅に増やしました。
        リサイクルポリエステルやオーガニックコットンを使用し、ファッションと環境保護の両立を目指しています。
      </Paragraph>

      <Image
        :images="[
          {
            src: '/images/eco-friendly.jpg',
            alt: 'エコフレンドリーな素材を使用したアイテム',
            link: 'https://stylenova.com/eco-friendly',
          },
        ]"
      />

      <Paragraph size="small" align="center">
        詳細は当社のエコフレンドリーページをご覧ください。
      </Paragraph>

      <Heading level="2" size="medium" :bold="true">注目のアイテム</Heading>

      <RelatedProduct
        :products="[
          {
            id: 3,
            name: 'エコフレンドリーウールコート',
            price: 49800,
            image: '/products/coat.jpg',
          },
          {
            id: 4,
            name: 'リサイクルデニムジーンズ',
            price: 18800,
            image: '/products/jeans.jpg',
          },
          {
            id: 5,
            name: 'オーガニックコットンニット',
            price: 15800,
            image: '/products/knit.jpg',
          },
        ]"
      />

      <Paragraph size="medium" :bold="true">
        StyleNova
        2023年秋冬コレクションは、都会的なエレガンスと環境への配慮を見事に融合させました。
        新しい季節に向けて、自分らしさを表現しつつ、地球にも優しいファッションを楽しんでみてはいかがでしょうか。
      </Paragraph>
    </BlogContents>
  </BaseModal>
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
