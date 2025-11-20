import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Order from '../pages/Order.vue'
import Products from '../pages/Products.vue'
import Checkout from '../pages/Checkout.vue'
import Cart from '../pages/cart.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/order', component: Order },
  { path: '/products', component: Products },
  { path: '/checkout', component: Checkout },
  { path: '/cart', name: 'Cart', component: Cart }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router