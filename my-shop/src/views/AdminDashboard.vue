<template>
  <v-container>
    <v-btn @click="dialog = true">
      <v-icon left color="black">mdi-shopping</v-icon>
      Add Product
    </v-btn>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="4">
        <v-card color="green">
          <v-img :src="product.product_image" aspect-ratio="1.9" class="mt-3"></v-img>
          <v-card-title>{{ product.product_name }}</v-card-title>
          <v-card-subtitle>Shs {{ product.product_price }}</v-card-subtitle>
          <v-card-subtitle>In Stock: {{ product.product_stock }}</v-card-subtitle>
          <v-card-actions>
            <v-btn @click="decrement(product)" :disabled="product.product_quantity === 0 || product.product_stock === 0">-</v-btn>
            <span>{{ product.product_quantity }}</span>
            <v-btn @click="increment(product)" :disabled="product.product_quantity >= product.product_stock || product.product_stock === 0">+</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn @click="addToCart(product)" :disabled="product.product_quantity === 0 || product.product_stock === 0">
              Add to Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <v-icon>mdi-shopping</v-icon>
          <br>
          <span class="headline">Add New Product</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="newProduct.product_name"
              :rules="[v => !!v || 'Name is required']"
              label="Product Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="newProduct.product_stock"
              :rules="[v => !!v || 'Stock is required']"
              label="Product Stock"
              required
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="newProduct.product_price"
              :rules="[v => !!v || 'Price is required']"
              label="Product Price"
              required
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="newProduct.product_description"
              label="Product Description"
            ></v-text-field>
            <v-text-field
              v-model="newProduct.product_image"
              :rules="[v => !!v || 'Image URL is required']"
              label="Product Image URL"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="submitForm">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useCartStore } from '@/stores/cart';

const dialog = ref(false);
const valid = ref(false);
const products = ref([]);
const cartStore = useCartStore();

const newProduct = ref({
  product_name: '',
  product_stock: 0,
  product_price: 0,
  product_description: '',
  product_image: ''
});

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/getProducts');
    if (response.status === 200) {
      products.value = response.data.map(product => ({
        ...product,
        product_quantity: 0 // Initialize quantity to 0
      }));
    } else {
      console.error('Error fetching products:', response.status, response.data);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const increment = product => {
  if (product.product_quantity < product.product_stock) {
    product.product_quantity++;
  }
};

const decrement = product => {
  if (product.product_quantity > 0) {
    product.product_quantity--;
  }
};

const addToCart = product => {
  if (product.product_quantity === 0 || product.product_stock === 0) return;
  cartStore.addToCart(product);
  product.product_stock -= product.product_quantity;
  product.product_quantity = 0;
};

const submitForm = async () => {
  if (!valid.value) return;
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/addProduct', {
      product_name: newProduct.value.product_name,
      product_stock: newProduct.value.product_stock,
      product_price: newProduct.value.product_price,
      product_description: newProduct.value.product_description,
      product_image: newProduct.value.product_image,
    });
    console.log('Product added to DB:', response.data);
    dialog.value = false;
    resetForm();
    fetchProducts(); // Refresh the product list
  } catch (error) {
    console.error('Error adding product to DB:', error);
  }
};

const resetForm = () => {
  newProduct.value = {
    product_name: '',
    product_stock: 0,
    product_price: 0,
    product_description: '',
    product_image: ''
  };
};

onMounted(fetchProducts);
</script>

<style scoped>
.product {
  margin-bottom: 20px;
}
</style>
