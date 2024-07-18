<script>
import { ref } from 'vue'
import backgroundImage from '../assets/images/main.jpeg' // Adjust the path as necessary

export default {
  setup() {
    const backgroundImageUrl = ref(backgroundImage)

    return {
      backgroundImageUrl
    }
  }
}
</script>
<template>
  <v-app>
  <div class="background-image" :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
    <div class="overlay">
      <h1 class="company-name">Camera Nation</h1>
      <h2 class="tagline">Unleash Your Creativity with the Latest Camera Equipment Collection</h2>
    </div>
  </div>
  <FooterComponent />
  </v-app>
</template>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.background-image {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.overlay {
  color: white;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  opacity: 0;
  animation: fadeIn 1s forwards 1s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.company-name {
  font-size: 3rem;
  margin: 0;
  opacity: 0;
  animation: slideIn 2s forwards 1s;
}

.tagline {
  font-size: 2.5rem;
  margin: 0;
  opacity: 0;
  animation: slideIn 2s forwards 1.5s;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(-10px);
  }
}
</style>
