<template>
  <v-footer color="green" app>
    <v-container>
      <v-row class="text-center">
        <v-col>
          <v-btn text class="footer-link" to="/home">Home</v-btn>
          <v-btn text class="footer-link" to="/about">About</v-btn>
          <v-btn text class="footer-link" to="/contact">Contact</v-btn>
          <v-btn text class="footer-link" to="/product">Products</v-btn>
          <v-btn text class="footer-link" to="/login">Login</v-btn>
          <v-btn text class="footer-link" to="/signup">Sign Up</v-btn>
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

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.v-footer {
  padding: 0px;
  text-align: center;
}

.footer-link {
  color: black !important;
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #19d22c !important;
}

.footer-year {
  font-size: 14px;
  color: white;
}
</style>
