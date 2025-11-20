<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <form @submit.prevent="handleCheckout">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="customer.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="customer.email" required />
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="customer.address" required />
      </div>
      <div>
        <label for="payment">Payment Method:</label>
        <select id="payment" v-model="customer.paymentMethod" required>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button type="submit">Complete Purchase</button>
    </form>
    <div v-if="cartItems.length > 0">
      <h2>Your Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">{{ item.name }} - {{ item.price }}</li>
      </ul>
      <p>Total: {{ totalAmount }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const cartItems = store.state.cart.items;
    const totalAmount = store.getters['cart/getTotalAmount'];

    const customer = {
      name: '',
      email: '',
      address: '',
      paymentMethod: 'credit',
    };

    const handleCheckout = () => {
      // Handle checkout logic here
      console.log('Checkout data:', customer);
      // You can also call an API to process the payment
    };

    return {
      cartItems,
      totalAmount,
      customer,
      handleCheckout,
    };
  },
});
</script>

<style scoped>
.checkout {
  max-width: 600px;
  margin: auto;
}
.checkout form {
  display: flex;
  flex-direction: column;
}
.checkout form div {
  margin-bottom: 1em;
}
</style>