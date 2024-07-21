<script>
import { ref } from 'vue'
import backgroundImage from '../assets/images/accesories.jpeg' // Adjust the path as necessary

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
        <h2 class="tagline">Where Creativity Meets Innovation ❤️</h2>
      </div>
    </div>
    <div class="about-content">
      <h1>About Us</h1>
      <p>Welcome to Camera Nation, your number one source for all things cameras. We're dedicated to providing you the best of cameras, with a focus on dependability, customer service, and uniqueness.</p>
      <p>Founded in 2020, Camera Nation has come a long way from its beginnings in a home office. When we first started out, our passion for "the best camera equipment" drove us to start our own business.</p>
      <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
      <p>Sincerely,<br>Camera Nation Team</p>
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
  height: 50vh;
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
  color: greenyellow;
  font-size: 3rem;
  margin: 0;
  opacity: 0;
  animation: slideIn 1.5s forwards 1s;
}

.tagline {
  
  font-size: 2.5rem;
  margin: 0;
  opacity: 0;
  animation: slideIn 1.5s forwards 1s;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(-10px);
  }
}

.about-content {
  padding: 2rem;
  text-align: left;
  background: white;
  color: #333;
}

.about-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.about-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}
</style>
