<template>
  <div class="checkout">
    <h1>会計</h1>
    <p>ご注文ありがとうございます！</p>
    <router-link to="/">ホームに戻る</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Checkout',
});
</script>

<style scoped>
.checkout { 
  background: #000000; 
  color: #f5f5f5; 
  padding: 80px 20px; 
  text-align: center;
  min-height: 100vh;
}
.checkout h1 { color: #d4af37; font-size: 2.5rem; }
.checkout a { color: #d4af37; text-decoration: none; }
</style>