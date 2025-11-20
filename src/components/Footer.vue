<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>外苑の肉直売</h3>
        <p>厳選された最高級和牛・焼肉をお届けします</p>
        <p class="contact">📞 0489-28-6777</p>
      </div>
      
      <div class="footer-section">
        <ul>
          <li><router-link to="/">ホーム</router-link></li>
          <li><span class="divider">|</span></li>
          <li><router-link to="/order">ご注文</router-link></li>
          <li><span class="divider">|</span></li>
          <li><router-link to="/cart">カート</router-link></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 <span class="brand">外苑の肉直売</span> All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>

<style scoped>
.footer { 
  background: linear-gradient(180deg, #0a0a0a 0%, #000000 100%);
  color: #f5f5f5; 
  border-top: 3px solid #d4af37; 
  padding: 80px 20px 30px;
}

.footer-content { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 80px; 
  max-width: 1200px; 
  margin: 0 auto 60px;
}

.footer-section h3 { 
  font-size: 2rem; 
  color: #d4af37; 
  margin-bottom: 15px; 
  letter-spacing: 2px; 
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
}

.footer-section p { 
  font-size: 0.95rem; 
  color: #999; 
  line-height: 1.8; 
  margin: 8px 0; 
  text-align: center;
  letter-spacing: 0.5px;
}

.footer-section .contact { 
  color: #d4af37; 
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 15px;
}

.footer-section ul { 
  list-style: none; 
  padding: 0; 
  display: flex; 
  gap: 15px; 
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
}

.footer-section ul li { 
  margin-bottom: 0;
}

.divider {
  color: #d4af37;
  opacity: 0.5;
}

.footer-section a { 
  color: #d4af37; 
  text-decoration: none; 
  transition: all 0.3s ease;
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
}

.footer-section a:hover { 
  color: #f5e6d3;
  border-bottom-color: #d4af37;
  transform: translateY(-2px);
}

.footer-bottom { 
  text-align: center; 
  padding-top: 30px; 
  border-top: 1px solid #d4af37; 
  color: #666; 
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.brand {
  color: #d4af37;
  font-weight: bold;
}
</style>