<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <v-card color="green">
          <v-img :src="product.imageUrl" aspect-ratio="1.5" class="mt-3"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>Shs {{ product.price }}m</v-card-subtitle>
          <v-card-actions>
            <v-btn @click="decrement(product)" :disabled="product.quantity === 0">-</v-btn>
            <span>{{ product.quantity }}</span>
            <v-btn @click="increment(product)">+</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn @click="addToCart(product)" :disabled="product.quantity === 0">
              Add to Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useCartStore } from '@/stores/counter';

const cartStore = useCartStore();
const products = cartStore.products;

const increment = cartStore.increment;
const decrement = cartStore.decrement;
const addToCart = cartStore.addToCart;
</script>

<style scoped>
.product {
  margin-bottom: 20px;
}
</style>
