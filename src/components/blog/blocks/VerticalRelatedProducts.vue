<script setup lang="ts">
import { defineProps } from 'vue';
import { Product, formatPrice } from '@/types/product';

interface Props {
  products: Product[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="product-grid">
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.product-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.product-name {
  font-size: 12px;
}

.product-price {
  color: #4a4a4a;
}
</style>
