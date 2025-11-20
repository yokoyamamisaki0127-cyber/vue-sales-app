<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">外苑の肉直売</router-link>
    </div>
    <nav class="nav">
      <router-link to="/">ホーム</router-link>
      <router-link to="/order">ご注文</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
})
</script>

<style scoped>
.header {
  background: #000000;
  padding: 20px;
  border-bottom: 2px solid #d4af37;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: #d4af37;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav a {
  color: #d4af37;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.nav a:hover {
  color: #f5e6d3;
}

.nav a.router-link-active {
  border-bottom: 2px solid #d4af37;
}
</style>