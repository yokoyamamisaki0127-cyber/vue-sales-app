<template>
  <div class="order">
    <section class="order-header">
      <h1>ご注文</h1>
      <p>厳選された精肉をお選びください</p>
    </section>

    <div class="order-container">
      <section class="products-section">
        <h2>商品一覧</h2>
        <div class="products-grid">
          <ProductCard 
            v-for="product in products" 
            :key="product.id" 
            :product="product"
            @add-to-cart="handleAddToCart"
          />
        </div>
      </section>
    </div>

    <section class="cta-section">
      <router-link to="/" class="back-button">← ホームに戻る</router-link>
      <router-link to="/cart" class="cart-button">🛒 カートへ</router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '../components/ProductCard.vue'

export default defineComponent({
  name: 'Order',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        { id: 1, name: '上タン塩', price: 5000, grade: 'Premium', image: 'https://images.unsplash.com/photo-1548103874-63894a301315?w=300&h=200&fit=crop' },
        { id: 2, name: '上カルビ', price: 10000, grade: 'Premium', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561341?w=300&h=200&fit=crop' },
        { id: 3, name: '上ハラミ', price: 5000, grade: 'Premium', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=200&fit=crop' },
        { id: 4, name: 'サーロイン', price: 10000, grade: 'Premium', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop' },
        { id: 5, name: 'ねぎ包み', price: 8000, grade: 'Premium', image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63df2ef?w=300&h=200&fit=crop' },
        { id: 6, name: 'A5ロース', price: 7000, grade: 'Exclusive', image: 'https://images.unsplash.com/photo-1504674900967-69529ec03614?w=300&h=200&fit=crop' },
        { id: 7, name: 'A5サガリ', price: 7000, grade: 'Exclusive', image: 'https://images.unsplash.com/photo-1529193591184-fead5f5e1201?w=300&h=200&fit=crop' },
        { id: 8, name: 'A5ホルモン', price: 7000, grade: 'Standard', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=200&fit=crop' },
        { id: 9, name: '和牛セット', price: 10000, grade: 'Premium', image: 'https://images.unsplash.com/photo-1542183333-430f63602d4f?w=300&h=200&fit=crop' },
        { id: 10, name: 'ファミリーセット', price: 12000, grade: 'Exclusive', image: 'https://images.unsplash.com/photo-1585238341710-4913d3ca7cc0?w=300&h=200&fit=crop' },
        { id: 11, name: 'ステーキセット', price: 16000, grade: 'Exclusive', image: 'https://images.unsplash.com/photo-1576103686620-57c0bf4350ec?w=300&h=200&fit=crop' },
        { id: 12, name: 'プレミアムセット', price: 20000, grade: 'Exclusive', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561352?w=300&h=200&fit=crop' },
      ],
    }
  },
  methods: {
    handleAddToCart(product: any) {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]')
      const existingItem = cart.find((item: any) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        cart.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      alert('カートに追加されました')
    },
  },
})
</script>

<style scoped>
.order { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #f5f5f5; min-height: 100vh; }
.order-header { text-align: center; padding: 80px 20px; border-bottom: 3px solid #d4af37; background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); }
.order-header h1 { font-size: 3.5rem; color: #d4af37; letter-spacing: 3px; margin-bottom: 15px; font-weight: 300; }
.order-header p { color: #bbb; font-size: 1.2rem; letter-spacing: 2px; }
.order-container { padding: 60px 20px; max-width: 1400px; margin: 0 auto; }
.products-section { text-align: center; }
.products-section h2 { font-size: 2.5rem; color: #d4af37; margin-bottom: 50px; letter-spacing: 2px; font-weight: 300; }
.products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-bottom: 60px; }
.cta-section { text-align: center; padding: 40px 20px; border-top: 3px solid #d4af37; display: flex; gap: 20px; justify-content: center; }
.back-button { display: inline-block; padding: 15px 40px; background-color: transparent; color: #d4af37; text-decoration: none; font-weight: bold; letter-spacing: 1px; border: 2px solid #d4af37; border-radius: 5px; transition: all 0.3s ease; }
.back-button:hover { background-color: #d4af37; color: #000000; transform: scale(1.05); }
.cart-button { display: inline-block; padding: 15px 40px; background-color: #d4af37; color: #000000; text-decoration: none; font-weight: bold; letter-spacing: 1px; border-radius: 5px; transition: all 0.3s ease; }
.cart-button:hover { background-color: #f5e6d3; transform: scale(1.05); }
@media (max-width: 1200px) { .products-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 900px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .products-grid { grid-template-columns: 1fr; } }
</style>