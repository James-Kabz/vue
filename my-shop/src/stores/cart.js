import { defineStore } from 'pinia'

// Cart Store
export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  getters: {
    cartItems: (state) => state.cart,
    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.product_price * item.product_quantity, 0),
    cartCount: (state) => state.cart.length
  },
  actions: {
    increment(product) {
      product.product_quantity++
    },
    decrement(product) {
      if (product.product_quantity > 0) {
        product.product_quantity--
      }
    },
    addToCart(product) {
      const cartProduct = this.cart.find((item) => item.id === product.id)
      if (cartProduct) {
        cartProduct.product_quantity += product.product_quantity
      } else {
        this.cart.push({ ...product })
      }
      product.product_quantity = 0
    },
    clearCart() {
      this.cart = []
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})
