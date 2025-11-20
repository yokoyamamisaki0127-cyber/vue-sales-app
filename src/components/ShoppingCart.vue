<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name">
    </div>
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="grade">{{ product.grade }}</p>
      <p class="price">¥{{ product.price?.toLocaleString() }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Product {
  id: number;
  name: string;
  price?: number;
  grade: string;
  image?: string;
}

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-card {
  background: #1a1a1a;
  border: 2px solid #d4af37;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.product-info {
  padding: 20px;
  text-align: center;
}

.product-info h3 {
  font-size: 1.1rem;
  color: #d4af37;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.grade {
  font-size: 0.9rem;
  color: #bbb;
  font-style: italic;
  margin-bottom: 10px;
}

.price {
  font-size: 1.2rem;
  color: #d4af37;
  font-weight: bold;
  margin: 0;
}
</style>