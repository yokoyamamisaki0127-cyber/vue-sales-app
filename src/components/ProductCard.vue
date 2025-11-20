<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image">
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="grade">{{ product.grade }}</p>
      <p class="price">¥{{ product.price.toLocaleString() }}</p>
      <button @click="addToCart" class="add-btn">カートに追加</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Product {
  id: number;
  name: string;
  price: number;
  grade: string;
  image: string;
}

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
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
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.product-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-card h3 {
  color: #d4af37;
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.grade {
  color: #bbb;
  font-size: 0.85rem;
  margin: 5px 0;
}

.price {
  color: #d4af37;
  font-weight: bold;
  font-size: 1.3rem;
  margin: 12px 0;
}

.add-btn {
  background: #d4af37;
  color: #000000;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.add-btn:hover {
  background: #f5e6d3;
  transform: scale(1.05);
}
</style>