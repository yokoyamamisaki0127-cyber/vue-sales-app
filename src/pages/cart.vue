<template>
  <div class="cart">
    <section class="cart-header">
      <h1>🛒 カート</h1>
      <p>ご注文内容をご確認ください</p>
    </section>

    <div class="cart-container">
      <section v-if="cartItems.length > 0" class="cart-items">
        <h2>商品一覧</h2>
        <div class="items-list">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.name" class="item-image">
            <div class="item-info">
              <h3>{{ item.name }}</h3>
              <p class="price">¥{{ item.price.toLocaleString() }}</p>
            </div>
            <div class="item-quantity">
              <button @click="decreaseQuantity(item.id)">−</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(item.id)">+</button>
            </div>
            <div class="item-total">
              ¥{{ (item.price * item.quantity).toLocaleString() }}
            </div>
            <button @click="removeItem(item.id)" class="remove-btn">削除</button>
          </div>
        </div>
      </section>

      <section v-else class="empty-cart">
        <p>カートに商品がありません</p>
        <router-link to="/order" class="continue-btn">ご注文ページへ</router-link>
      </section>

      <section class="cart-summary">
        <h2>合計金額</h2>
        <div class="summary-box">
          <p class="total">¥{{ totalPrice.toLocaleString() }}</p>
          <router-link to="/checkout" class="checkout-btn">決済へ進む</router-link>
          <router-link to="/order" class="continue-btn">買い物を続ける</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cart',
  data() {
    return {
      cartItems: [] as any[],
    }
  },
  computed: {
    totalPrice(): number {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
  },
  methods: {
    loadCart() {
      const cart = localStorage.getItem('cart')
      this.cartItems = cart ? JSON.parse(cart) : []
    },
    increaseQuantity(itemId: number) {
      const item = this.cartItems.find((i) => i.id === itemId)
      if (item) item.quantity++
      this.saveCart()
    },
    decreaseQuantity(itemId: number) {
      const item = this.cartItems.find((i) => i.id === itemId)
      if (item && item.quantity > 1) item.quantity--
      this.saveCart()
    },
    removeItem(itemId: number) {
      this.cartItems = this.cartItems.filter((i) => i.id !== itemId)
      this.saveCart()
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    },
  },
  mounted() {
    this.loadCart()
  },
})
</script>

<style scoped>
.cart { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #f5f5f5; min-height: 100vh; padding-bottom: 300px; }
.cart-header { text-align: center; padding: 80px 20px; border-bottom: 3px solid #d4af37; background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); }
.cart-header h1 { font-size: 3.5rem; color: #d4af37; letter-spacing: 3px; margin-bottom: 15px; font-weight: 300; }
.cart-header p { color: #bbb; font-size: 1.2rem; letter-spacing: 2px; }
.cart-container { display: grid; grid-template-columns: 1fr 350px; gap: 40px; padding: 60px 20px; max-width: 1400px; margin: 0 auto; }
.cart-items { grid-column: 1; }
.cart-items h2 { font-size: 1.8rem; color: #d4af37; margin-bottom: 30px; letter-spacing: 1px; }
.items-list { display: flex; flex-direction: column; gap: 20px; }
.cart-item { display: grid; grid-template-columns: 100px 1fr 120px 150px 80px; gap: 20px; align-items: center; background: #1a1a1a; border: 2px solid #d4af37; padding: 20px; border-radius: 8px; }
.item-image { width: 100px; height: 100px; object-fit: cover; border-radius: 5px; }
.item-info h3 { color: #d4af37; margin: 0 0 8px 0; font-size: 1.1rem; }
.item-info .price { color: #bbb; margin: 0; }
.item-quantity { display: flex; align-items: center; gap: 10px; justify-content: center; }
.item-quantity button { background: #d4af37; color: #000; border: none; width: 30px; height: 30px; border-radius: 3px; cursor: pointer; font-weight: bold; }
.item-quantity button:hover { background: #f5e6d3; }
.item-quantity span { color: #d4af37; font-weight: bold; min-width: 30px; text-align: center; }
.item-total { color: #d4af37; font-weight: bold; font-size: 1.1rem; text-align: right; }
.remove-btn { background: #d4af37; color: #000; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold; transition: all 0.3s ease; }
.remove-btn:hover { background: #f5e6d3; }
.empty-cart { text-align: center; padding: 60px 20px; grid-column: 1 / -1; }
.empty-cart p { font-size: 1.2rem; color: #bbb; margin-bottom: 30px; }
.cart-summary { grid-column: 2; grid-row: 1; }
.cart-summary h2 { font-size: 1.5rem; color: #d4af37; margin-bottom: 20px; }
.summary-box { background: #1a1a1a; border: 2px solid #d4af37; padding: 30px; border-radius: 8px; text-align: center; }
.summary-box .total { font-size: 2rem; color: #d4af37; font-weight: bold; margin-bottom: 20px; }
.checkout-btn { display: block; padding: 15px 30px; background-color: #d4af37; color: #000000; text-decoration: none; font-weight: bold; border-radius: 5px; margin-bottom: 15px; transition: all 0.3s ease; }
.checkout-btn:hover { background-color: #f5e6d3; transform: scale(1.05); }
.continue-btn { display: block; padding: 15px 30px; background-color: transparent; color: #d4af37; text-decoration: none; font-weight: bold; border: 2px solid #d4af37; border-radius: 5px; transition: all 0.3s ease; }
.continue-btn:hover { background-color: #d4af37; color: #000000; }
@media (max-width: 1200px) { .cart-container { grid-template-columns: 1fr; } .cart-summary { grid-column: 1; } }
@media (max-width: 900px) { .cart-item { grid-template-columns: 80px 1fr 30px; gap: 10px; } .item-quantity, .item-total, .remove-btn { display: none; } }
@media (max-width: 600px) { 
  .cart { padding-bottom: 400px; }
  .cart-container { grid-template-columns: 1fr; padding: 20px 10px; gap: 20px; }
  .cart-items { grid-column: 1; }
  .cart-item { grid-template-columns: 70px 1fr; gap: 10px; padding: 15px; align-items: flex-start; }
  .item-image { width: 70px; height: 70px; flex-shrink: 0; }
  .item-info { display: flex; flex-direction: column; }
  .item-info h3 { font-size: 0.95rem; margin: 0 0 5px 0; }
  .item-info .price { font-size: 0.85rem; }
  .item-quantity { display: flex; gap: 5px; }
  .item-quantity button { width: 25px; height: 25px; padding: 0; font-size: 0.8rem; }
  .item-quantity span { font-size: 0.9rem; }
  .item-total { display: none; }
  .remove-btn { display: none; }
  .cart-summary { grid-column: 1; grid-row: auto; position: fixed; bottom: 0; left: 0; right: 0; background: #1a1a1a; border-top: 3px solid #d4af37; padding: 15px 10px; width: 100%; box-sizing: border-box; }
  .cart-summary h2 { display: none; }
  .summary-box { padding: 10px; }
  .summary-box .total { font-size: 1.3rem; margin-bottom: 10px; }
  .checkout-btn, .continue-btn { padding: 12px 20px; font-size: 0.9rem; margin-bottom: 8px; }
}
</style>