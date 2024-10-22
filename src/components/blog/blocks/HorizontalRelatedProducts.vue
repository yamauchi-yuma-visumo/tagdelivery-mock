<script setup lang="ts">
import { defineProps } from 'vue';
import { Product, formatPrice } from '@/types/product';

interface Props {
  products: Product[];
}

defineProps<Props>();
</script>

<template>
  <div class="products-list">
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
.products-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.product-card {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
}

.product-image {
  width: 40%;
  height: auto;
  object-fit: cover;
}

.product-info {
  width: 60%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-name {
  font-size: 12px;
}

.product-price {
  color: #4a4a4a;
}

@media (max-width: 768px) {
  .product-card {
    flex-direction: column;
  }

  .product-image {
    width: 100%;
  }

  .product-info {
    padding: 1rem;
  }
}
</style>
