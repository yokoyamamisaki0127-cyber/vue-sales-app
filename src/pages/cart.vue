<template>
  <div class="cart">
    <section class="cart-header">
      <h1>ショッピングカート</h1>
    </section>

    <div class="cart-container">
      <section v-if="cartItems.length > 0" class="cart-items">
        <h2>カート内の商品</h2>
        <div class="items-list">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name" class="item-image">
            <div class="item-info">
              <h3>{{ item.name }}</h3>
              <p class="grade">{{ item.grade }}</p>
              <p class="price">¥{{ item.price.toLocaleString() }}</p>
            </div>
            <div class="item-quantity">
              <button @click="decreaseQuantity(item.id)">−</button>
              <input v-model.number="item.quantity" type="number" min="1">
              <button @click="increaseQuantity(item.id)">+</button>
            </div>
            <p class="item-total">¥{{ (item.price * item.quantity).toLocaleString() }}</p>
            <button @click="removeItem(item.id)" class="remove-btn">削除</button>
          </div>
        </div>
      </section>

      <section v-else class="empty-cart">
        <p>カートに商品がありません</p>
        <router-link to="/order" class="continue-shopping">ショッピングを続ける</router-link>
      </section>

      <section v-if="cartItems.length > 0" class="cart-summary">
        <h2>注文概要</h2>
        <div class="summary-row">
          <span>小計：</span>
          <span>¥{{ subtotal.toLocaleString() }}</span>
        </div>
        <div class="summary-row">
          <span>配送料：</span>
          <span>¥{{ shippingCost.toLocaleString() }}</span>
        </div>
        <div class="summary-row total">
          <span>合計：</span>
          <span>¥{{ total.toLocaleString() }}</span>
        </div>
        <button class="checkout-btn">会計に進む</button>
        <router-link to="/order" class="continue-shopping">ショッピングを続ける</router-link>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface CartItem {
  id: number;
  name: string;
  price: number;
  grade: string;
  image: string;
  quantity: number;
}

export default defineComponent({
  name: 'Cart',
  data() {
    return {
      cartItems: [] as CartItem[],
      shippingCost: 1000,
    };
  },
  computed: {
    subtotal(): number {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    total(): number {
      return this.subtotal + this.shippingCost;
    },
  },
  mounted() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      this.cartItems = cart;
    },
    increaseQuantity(id: number) {
      const item = this.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity++;
        this.saveCart();
      }
    },
    decreaseQuantity(id: number) {
      const item = this.cartItems.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        this.saveCart();
      }
    },
    removeItem(id: number) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
  },
});
</script>

<style scoped>
.cart { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #f5f5f5; min-height: 100vh; }
.cart-header { text-align: center; padding: 60px 20px; border-bottom: 3px solid #d4af37; background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); }
.cart-header h1 { font-size: 3rem; color: #d4af37; letter-spacing: 2px; margin: 0; font-weight: 300; }
.cart-container { display: grid; grid-template-columns: 1fr 350px; gap: 40px; padding: 40px 20px; max-width: 1400px; margin: 0 auto; }
.cart-items { background: #1a1a1a; padding: 30px; border: 2px solid #d4af37; border-radius: 8px; }
.cart-items h2 { color: #d4af37; font-size: 1.5rem; margin-bottom: 30px; }
.items-list { display: flex; flex-direction: column; gap: 20px; }
.cart-item { display: grid; grid-template-columns: 100px 1fr 100px 120px 80px; gap: 20px; align-items: center; padding: 15px; background: #000000; border: 1px solid #d4af37; border-radius: 5px; }
.item-image { width: 100px; height: 100px; object-fit: cover; border-radius: 5px; }
.item-info h3 { color: #d4af37; margin: 0 0 5px 0; font-size: 1rem; }
.item-info .grade { color: #bbb; font-size: 0.9rem; margin: 0 0 5px 0; }
.item-info .price { color: #d4af37; font-weight: bold; margin: 0; }
.item-quantity { display: flex; gap: 5px; }
.item-quantity button { background: #d4af37; color: #000000; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px; font-weight: bold; }
.item-quantity input { width: 40px; text-align: center; background: #000000; color: #d4af37; border: 1px solid #d4af37; border-radius: 3px; }
.item-total { color: #d4af37; font-weight: bold; text-align: right; }
.remove-btn { background: #d4af37; color: #000000; border: none; padding: 8px 15px; cursor: pointer; border-radius: 3px; font-weight: bold; transition: all 0.3s ease; }
.remove-btn:hover { background: #f5e6d3; }
.empty-cart { grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #1a1a1a; border: 2px solid #d4af37; border-radius: 8px; }
.empty-cart p { font-size: 1.2rem; color: #bbb; margin-bottom: 20px; }
.cart-summary { background: #1a1a1a; padding: 30px; border: 2px solid #d4af37; border-radius: 8px; height: fit-content; }
.cart-summary h2 { color: #d4af37; font-size: 1.5rem; margin-bottom: 20px; }
.summary-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #d4af37; color: #bbb; }
.summary-row.total { border-bottom: 2px solid #d4af37; color: #d4af37; font-weight: bold; font-size: 1.2rem; margin-bottom: 20px; }
.checkout-btn { display: block; width: 100%; padding: 15px; background-color: #d4af37; color: #000000; border: none; font-weight: bold; letter-spacing: 1px; font-size: 1rem; border-radius: 5px; cursor: pointer; transition: all 0.3s ease; margin-bottom: 10px; }
.checkout-btn:hover { background-color: #f5e6d3; }
.continue-shopping { display: block; text-align: center; padding: 10px; color: #d4af37; text-decoration: none; border: 2px solid #d4af37; border-radius: 5px; transition: all 0.3s ease; }
.continue-shopping:hover { background-color: #d4af37; color: #000000; }
@media (max-width: 900px) { .cart-container { grid-template-columns: 1fr; } .cart-item { grid-template-columns: 80px 1fr; gap: 15px; } .item-quantity, .item-total, .remove-btn { grid-column: 2; } }
</style>