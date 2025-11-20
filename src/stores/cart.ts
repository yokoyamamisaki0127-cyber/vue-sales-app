import { createStore } from 'vuex';

const store = createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingProduct = state.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },
    CLEAR_CART(state) {
      state.cartItems = [];
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
  },
  getters: {
    cartItems: state => state.cartItems,
    cartTotal: state => {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});

export default store;