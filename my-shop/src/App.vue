<script setup>
import { ref, onMounted } from 'vue'
import CartIcon from './components/CartIcon.vue'
import FooterComponent from './components/FooterComponent.vue'
import { useRouter } from 'vue-router'
import { isAuthenticated, checkAuth, logout } from './composables/useAuth'
import { useUserStore } from './stores/user'

const drawer = ref(false)
const router = useRouter()

onMounted(() => {
  checkAuth()
})

const handleLogout = () => {
  logout()
  router.push('/login')
}
const userStore = useUserStore()
</script>

<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Camera Nation</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tool-item v-show="!isLoggedIn">
        <v-btn text to="/home" class="hidden-sm-and-down">Home</v-btn>
        <v-btn text to="/about" class="hidden-sm-and-down">About</v-btn>
        <v-btn text to="/services" class="hidden-sm-and-down">Services</v-btn>
        <v-btn text to="/product" class="hidden-sm-and-down">Products</v-btn>
        <v-btn text to="/login" v-if="!isAuthenticated" class="hidden-sm-and-down">Login</v-btn>
        <v-btn text to="/signup" v-if="!isAuthenticated" class="hidden-sm-and-down">Sign Up</v-btn>

      </v-tool-item>
              {{  userStore.isLoggedIn }}
      <CartIcon />
      <v-btn
        to="/logout"
        v-if="isAuthenticated"
        class="hidden-sm-and-down"
        @click="handleLogout"
        >Logout</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Cameara Nation</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item link to="/home">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/product">
          <v-list-item-title>Products</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/login" v-if="!isAuthenticated">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/signup" v-if="!isAuthenticated">
          <v-list-item-title>Sign Up</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/logout" v-if="isAuthenticated" @click="handleLogout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex flex-column">
      <v-container class="flex-grow-1">
        <RouterView />
      </v-container>
    </v-main>

    <FooterComponent />
  </v-app>
</template>

<style scoped>
.hidden-sm-and-down {
  display: none;
}

@media (min-width: 600px) {
  .hidden-sm-and-down {
    display: inline-flex;
  }
}

.v-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.flex-grow-1 {
  flex-grow: 1;
}
</style>
