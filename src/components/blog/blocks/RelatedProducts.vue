<script setup lang="ts">
import { defineProps } from 'vue';

interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
}

interface Props {
  products: Product[];
  layout?: 'horizontal' | 'vertical';
}

withDefaults(defineProps<Props>(), {
  layout: 'vertical',
});

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  }).format(price);
};
</script>

<template>
  <div class="related-products" :class="{ 'grid-layout': products.length > 1 }">
    <div v-for="product in products" :key="product.id" class="product-card" :class="layout">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <div class="product-info">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ formatPrice(product.price) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.related-products {
  margin-bottom: 1rem;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.product-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.product-card.horizontal {
  flex-direction: row;
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
}

.horizontal .product-image {
  width: 40%;
}

.product-name {
  font-size: 12px;
  margin-block: 4px;
}

.product-price {
  color: #4a4a4a;
}

.horizontal .product-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
}

@media (max-width: 768px) {
  .product-card.horizontal {
    flex-direction: column;
  }

  .horizontal .product-image {
    width: 100%;
  }
}
</style>
