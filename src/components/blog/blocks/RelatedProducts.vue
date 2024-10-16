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
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
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
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.product-card.horizontal {
  flex-direction: row;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.horizontal .product-image {
  width: 40%;
}

.product-info {
  padding: 1rem;
}

.product-name {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}

.product-price {
  font-weight: bold;
  color: #4a4a4a;
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
