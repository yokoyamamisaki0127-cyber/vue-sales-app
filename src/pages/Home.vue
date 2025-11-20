<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>外苑の肉直売</h1>
        <p>厳選された最高級和牛・焼肉をお届けします</p>
        <router-link to="/order" class="cta-button">ご注文はこちら</router-link>
      </div>
    </section>

    <section class="featured-products">
      <h2>おすすめ商品</h2>
      <div class="products-grid">
        <div v-for="product in featuredProducts" :key="product.id" class="featured-card">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p class="grade">{{ product.grade }}</p>
        </div>
      </div>
    </section>
    
    <section class="about">
      <h2>こだわり</h2>
      <div class="about-content">
        <div class="about-item">
          <h3>🥩 最高級の品質</h3>
          <p>厳選された A5 ランクの和牛のみを使用しています</p>
        </div>
        <div class="about-item">
          <h3>🚚 新鮮配送</h3>
          <p>毎日新鮮な状態でお客様にお届けします</p>
        </div>
        <div class="about-item">
          <h3>💯 満足保証</h3>
          <p>ご満足いただけない場合は返金対応いたします</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      featuredProducts: [
        { id: 1, name: '上タン塩', grade: 'Premium', price: 5000, image: '/meat1.jpg' },
        { id: 2, name: '上カルビ', grade: 'Premium', price: 10000, image: '/meat2.jpg' },
        { id: 3, name: '上ハラミ', grade: 'Exclusive', price: 5000, image: '/meat3.jpg' },
        { id: 4, name: 'サーロイン', grade: 'Premium', price: 10000, image: '/meat4.jpg' },
      ],
    }
  },
})
</script>

<style scoped>
.home { background: #000000; color: #f5f5f5; border-left: 2px solid #d4af37; border-right: 2px solid #d4af37; min-height: 100vh; }
.hero { background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); padding: 120px 20px; text-align: center; border-bottom: 3px solid #d4af37; }
.hero-content h1 { font-size: 4rem; color: #d4af37; margin-bottom: 20px; letter-spacing: 3px; font-weight: 300; }
.hero-content p { font-size: 1.3rem; color: #bbb; margin-bottom: 40px; letter-spacing: 1px; }
.cta-button { display: inline-block; padding: 18px 50px; background-color: #d4af37; color: #000000; text-decoration: none; font-weight: bold; letter-spacing: 2px; border-radius: 5px; transition: all 0.3s ease; font-size: 1.1rem; }
.cta-button:hover { background-color: #f5e6d3; transform: translateY(-3px); box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3); }
.featured-products { padding: 80px 20px; max-width: 1400px; margin: 0 auto; }
.featured-products h2 { font-size: 2.5rem; color: #d4af37; text-align: center; margin-bottom: 60px; letter-spacing: 2px; font-weight: 300; }
.products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-bottom: 60px; }
.featured-card { background: #1a1a1a; border: 2px solid #d4af37; border-radius: 8px; overflow: hidden; padding: 0; text-align: center; transition: all 0.3s ease; display: flex; flex-direction: column; }
.featured-card:hover { transform: translateY(-10px); box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2); }
.featured-card img { width: 100%; height: 180px; object-fit: cover; }
.featured-card h3 { color: #d4af37; margin: 15px 15px 5px 15px; font-size: 1.1rem; font-weight: 600; }
.featured-card .grade { color: #bbb; font-size: 0.9rem; margin: 5px 15px; }
.featured-card .price { color: #d4af37; font-weight: bold; font-size: 1.3rem; margin: 10px 15px 15px 15px; }
.about { background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); padding: 80px 20px; border-top: 3px solid #d4af37; }
.about h2 { font-size: 2.5rem; color: #d4af37; text-align: center; margin-bottom: 60px; letter-spacing: 2px; font-weight: 300; }
.about-content { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; max-width: 1200px; margin: 0 auto; }
.about-item { text-align: center; padding: 30px; background: #000000; border: 2px solid #d4af37; border-radius: 8px; transition: all 0.3s ease; }
.about-item:hover { transform: translateY(-10px); box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2); }
.about-item h3 { font-size: 1.5rem; color: #d4af37; margin-bottom: 15px; }
.about-item p { color: #bbb; font-size: 0.95rem; line-height: 1.6; }
@media (max-width: 1200px) { .products-grid { grid-template-columns: repeat(3, 1fr); } .about-content { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 900px) { .products-grid { grid-template-columns: repeat(2, 1fr); } .about-content { grid-template-columns: 1fr; } .hero-content h1 { font-size: 2.5rem; } }
@media (max-width: 600px) { .products-grid { grid-template-columns: 1fr; } .hero-content h1 { font-size: 2rem; } }
</style>