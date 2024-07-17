<!-- src/components/LoginForm.vue -->
<template>
  <v-container>
    <v-form @submit.prevent="handleLogin">
      <v-text-field 
        label="Email" 
        v-model="email" 
        type="email" 
        required 
        outlined 
        dense 
        :rules="[rules.required, rules.email]"
      ></v-text-field>
      <v-text-field 
        label="Password" 
        v-model="password" 
        type="password" 
        required 
        outlined 
        dense 
        :rules="[rules.required]"
      ></v-text-field>
      <v-btn 
        type="submit" 
        color="primary" 
        class="mt-4"
      >Login</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

// Create a reactive variable to store user state
const isAuthenticated = ref(false)
const user = ref(null)

const userStore = useUserStore()

const router = useRouter()
const email = ref('')
const password = ref('')

const rules = {
  required: value => !!value || 'Required.',
  email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
}

async function handleLogin() {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: email.value,
      password: password.value,
    })
    userStore.isLoggedIn = true
    // Assuming successful login returns user data
    user.value = response.data.user
    isAuthenticated.value = true
    localStorage.setItem('user', JSON.stringify(response.data.user))
    router.push('/home')
  } catch (error) {
    console.error('Login failed:', error.response.data.error)
    alert('Login failed: ' + error.response.data.error)
  }
}

// Watch for changes in authentication state to handle navigation
import { watch } from 'vue'
import { useUserStore } from '@/stores/user';

watch(isAuthenticated, (newVal) => {
  if (newVal) {
    router.push('/home')
  }
})
</script>

<style scoped>
.v-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 50px;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.v-text-field {
  margin-bottom: 16px;
}

.mt-4 {
  margin-top: 16px;
}
</style>
