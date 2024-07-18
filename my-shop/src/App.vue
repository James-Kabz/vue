<script setup>
import { ref, computed } from 'vue'
import CartIcon from './components/CartIcon.vue'
import FooterComponent from './components/FooterComponent.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/user'

const userStore = useUserStore()
const isLoggedIn = computed(() => userStore.isLoggedIn)

const drawer = ref(false)
const router = useRouter()

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Camera Nation</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tool-item v-show="!isLoggedIn">
        <v-btn text to="/" class="hidden-sm-and-down">Home</v-btn>
        <v-btn text to="/about" class="hidden-sm-and-down">About</v-btn>
        <v-btn text to="/services" class="hidden-sm-and-down">Services</v-btn>
        <v-btn text to="/login" class="hidden-sm-and-down">Login</v-btn>
        <v-btn text to="/signup" class="hidden-sm-and-down">Sign Up</v-btn>
      </v-tool-item>
      <CartIcon v-show="isLoggedIn" />
      <v-btn text @click="handleLogout" v-show="isLoggedIn">Logout</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Camera Nation</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item link to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/services">
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/login" v-if="!isLoggedIn">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/signup" v-if="!isLoggedIn">
          <v-list-item-title>Sign Up</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/logout" v-if="isLoggedIn" @click="handleLogout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex flex-column">
        <RouterView />
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
