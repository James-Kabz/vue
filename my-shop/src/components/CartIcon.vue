<template>
  <v-btn icon @click="showCart = !showCart">
    <v-badge :content="cartCount" overlap color="green">
      <v-icon color="black">mdi-cart</v-icon>
    </v-badge>
  </v-btn>
  <v-dialog v-model="showCart" max-width="500">
    <v-card>
      <v-card-title>
        <span>Cart</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="showCart = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="item in cart" :key="item.id">
            <v-list-item-content>
              <v-list-item-title>{{ item.product_name }}</v-list-item-title>
              <v-list-item-subtitle>Quantity: {{ item.product_quantity }}</v-list-item-subtitle>
              <v-list-item-subtitle>
                Price: Shs {{ item.product_price * item.product_quantity }}m
              </v-list-item-subtitle>
              <v-btn @click="removeFromCart(item.id)" variant="tonal">Remove</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div>Total Price: Shs {{ cartTotal }}m</div>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="clearCart" color="error">Clear Cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cart';

const showCart = ref(false);
const cartStore = useCartStore();

const cart = computed(() => cartStore.cart);
const cartTotal = computed(() => cartStore.cartTotal);
// const productCount = computed(() => cartStore.productCount);
const cartCount = computed(() => cartStore.cartCount);

const clearCart = cartStore.clearCart;
const removeFromCart = cartStore.removeFromCart;
</script>
