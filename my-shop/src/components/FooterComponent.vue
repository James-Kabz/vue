<script setup>
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const userStore = useUserStore()
const isLoggedIn = computed(() => userStore.isLoggedIn)
const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <v-footer color="green" app>
    <v-container>
      <v-row class="text-center">
        <v-col>
          <v-btn v-show="!isLoggedIn" text class="footer-link" to="/">Home</v-btn>
          <v-btn v-show="!isLoggedIn" text class="footer-link" to="/about">About</v-btn>
          <v-btn v-show="!isLoggedIn" text class="footer-link" to="/services">Services</v-btn>
          <v-btn v-show="!isLoggedIn" text class="footer-link" to="/login">Login</v-btn>
          <v-btn v-show="!isLoggedIn" text class="footer-link" to="/signup">Sign Up</v-btn>
          <v-btn v-show="isLoggedIn" class="footer-link" @click="handleLogout">Logout</v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <div class="footer-year">
            &copy; {{ new Date().getFullYear() }} — <strong>Kabz Ngarang Shop</strong>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.v-footer {
  padding: 10px 0; /* Reduced height */
  background-color: #f0f0f0; /* Lighter background color */
  color: #333; /* Darker text color */
}

.footer-link {
  color: #333; /* Darker text color */
  font-weight: bold;
  text-decoration: none;
  margin: 0 8px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-link:hover {
  color: #1abc9c; /* Change color on hover */
  transform: scale(1.05); /* Slight scale effect on hover */
}

.footer-year {
  font-size: 14px; /* Smaller font size */
  color: #333; /* Darker text color */
  margin-top: 5px;
}
</style>
