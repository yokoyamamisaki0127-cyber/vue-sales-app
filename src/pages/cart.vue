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
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(item.id)">+</button>
            </div>
            <p class="item-total">¥{{ (item.price * item.quantity).toLocaleString() }}</p>
            <button @click="removeItem(item.id)" class="remove-btn">削除</button>
          </div>
        </div>
      </section>

      <section v-else class="empty-cart">
        <p>カートに商品がありません</p>
      </section>

      <section v-if="cartItems.length > 0" class="cart-summary">
        <h2>注文概要</h2>
        <div class="summary-row">
          <span>合計：</span>
          <span>¥{{ total.toLocaleString() }}</span>
        </div>
        <button class="checkout-btn">会計に進む</button>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  grade: string
  image: string
  quantity: number
}

export default defineComponent({
  name: 'Cart',
  data() {
    return {
      cartItems: [] as CartItem[],
    }
  },
  computed: {
    total(): number {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
  },
  mounted() {
    this.loadCart()
  },
  methods: {
    loadCart() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      this.cartItems = cart
    },
    increaseQuantity(id: number) {
      const item = this.cartItems.find(item => item.id === id)
      if (item) {
        item.quantity++
        this.saveCart()
      }
    },
    decreaseQuantity(id: number) {
      const item = this.cartItems.find(item => item.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
        this.saveCart()
      }
    },
    removeItem(id: number) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
      this.saveCart()
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    },
  },
})
</script>

<style scoped>
.cart { background: #000000; color: #f5f5f5; min-height: 100vh; border-left: 2px solid #d4af37; border-right: 2px solid #d4af37; }
.cart-header { text-align: center; padding: 60px 20px; border-bottom: 3px solid #d4af37; }
.cart-header h1 { font-size: 3rem; color: #d4af37; letter-spacing: 2px; margin: 0; }
.cart-container { display: grid; grid-template-columns: 1fr 350px; gap: 40px; padding: 40px 20px; max-width: 1400px; margin: 0 auto; }
.cart-items { background: #1a1a1a; padding: 30px; border: 2px solid #d4af37; border-radius: 8px; }
.cart-items h2 { color: #d4af37; margin-bottom: 20px; }
.items-list { display: flex; flex-direction: column; gap: 20px; }
.cart-item { display: grid; grid-template-columns: 100px 1fr 100px 120px 80px; gap: 20px; align-items: center; padding: 15px; background: #000000; border: 1px solid #d4af37; border-radius: 5px; }
.item-image { width: 100px; height: 100px; object-fit: cover; border-radius: 5px; }
.item-info h3 { color: #d4af37; margin: 0; }
.item-quantity { display: flex; gap: 10px; align-items: center; }
.item-quantity button { background: #d4af37; color: #000000; border: none; padding: 5px 10px; cursor: pointer; font-weight: bold; }
.item-total { color: #d4af37; font-weight: bold; }
.remove-btn { background: #d4af37; color: #000000; border: none; padding: 8px 15px; cursor: pointer; font-weight: bold; }
.empty-cart { grid-column: 1 / -1; text-align: center; padding: 60px; background: #1a1a1a; border: 2px solid #d4af37; }
.cart-summary { background: #1a1a1a; padding: 30px; border: 2px solid #d4af37; border-radius: 8px; height: fit-content; }
.summary-row { display: flex; justify-content: space-between; padding: 15px 0; color: #d4af37; font-weight: bold; font-size: 1.2rem; }
.checkout-btn { width: 100%; padding: 15px; background: #d4af37; color: #000000; border: none; font-weight: bold; cursor: pointer; border-radius: 5px; margin-top: 20px; }
</style>