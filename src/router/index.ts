import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Order from '../pages/Order.vue'
import Cart from '../pages/cart.vue'
import Checkout from '../pages/Checkout.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/order', name: 'Order', component: Order },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router