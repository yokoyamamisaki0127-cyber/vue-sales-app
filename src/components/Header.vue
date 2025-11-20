<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">外苑の肉直売</router-link>
      <nav class="nav">
        <router-link to="/">ホーム</router-link>
        <router-link to="/order">ご注文</router-link>
        <router-link to="/cart" class="cart-link">
          🛒 カート
          <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  data() {
    return {
      cartCount: 0,
    }
  },
  methods: {
    updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      this.cartCount = cart.reduce((sum: number, item: any) => sum + item.quantity, 0)
    },
  },
  mounted() {
    this.updateCartCount()
    window.addEventListener('storage', this.updateCartCount)
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.updateCartCount)
  },
})
</script>

<style scoped>
.header { background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); border-bottom: 3px solid #d4af37; position: sticky; top: 0; z-index: 100; }
.header-content { display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; max-width: 1400px; margin: 0 auto; }
.logo { font-size: 1.8rem; color: #d4af37; text-decoration: none; font-weight: bold; letter-spacing: 2px; }
.nav { display: flex; gap: 40px; align-items: center; }
.nav a { color: #d4af37; text-decoration: none; font-weight: 600; letter-spacing: 1px; transition: all 0.3s ease; }
.nav a:hover { color: #f5e6d3; }
.cart-link { position: relative; }
.cart-badge { position: absolute; top: -8px; right: -12px; background: #d4af37; color: #000; font-size: 0.8rem; font-weight: bold; padding: 2px 6px; border-radius: 50%; min-width: 20px; text-align: center; }
@media (max-width: 600px) { .header-content { padding: 15px 20px; } .nav { gap: 20px; font-size: 0.9rem; } .logo { font-size: 1.3rem; } }
</style>