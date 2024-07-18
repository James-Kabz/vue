<template>
  <v-container class="d-flex justify-center align-center">
    <v-card class="pa-4" outlined>
      <v-card-title class="justify-center">
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field 
            label="Email" 
            v-model="email" 
            type="email" 
            required 
            outlined 
            dense 
            :rules="[rules.required, rules.email]"
            class="mb-4"
          ></v-text-field>
          <v-text-field 
            label="Password" 
            v-model="password" 
            type="password" 
            required 
            outlined 
            dense 
            :rules="[rules.required]"
            class="mb-4"
          ></v-text-field>
          <v-btn 
            type="submit" 
            color="primary" 
            class="mt-4"
            block
          >Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '@/stores/user'

const email = ref('')
const password = ref('')

const userStore = useUserStore()
const router = useRouter()

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

    const { access_token, user } = response.data
    userStore.login(access_token, user.role)

    // Redirect based on role
    if (user.role === 'admin') {
      router.push('/admin-dashboard')
    } else {
      router.push('/user-dashboard')
    }
  } catch (error) {
    console.error('Login failed:', error.response.data.error)
    alert('Login failed: ' + error.response.data.error)
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

/* .v-container {
  min-height: 100vh;
} */

.mb-4 {
  margin-bottom: 16px;
}

.v-card {
  max-width: 400px;
  width: 100%;
  padding: 20px;
}

.v-card-title {
  text-align: center;
  font-weight: bold;
}
</style>
