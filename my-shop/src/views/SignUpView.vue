<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const user = reactive({
  name: 'John',
  email: 'John@example.com',
  password: '1234'
})


const signup = async () => {
  try {
    axios.post('http://127.0.0.1:8000/api/signup', user);
  } catch (error) {
  console.log("failed to sign up");
  }
}
</script>
<template>
  <v-container class="pa-5" elevation="8">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Sign Up
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Username"
                v-model="user.name"
                required
                outlined
                prepend-inner-icon="mdi-account"
                class="mb-4"
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="user.email"
                required
                outlined
                prepend-inner-icon="mdi-email"
                class="mb-4"
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="user.password"
                type="password"
                required
                outlined
                prepend-inner-icon="mdi-lock"
                class="mb-4"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn color="primary" @click="signup">
              Sign Up
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.pa-5 {
  padding: 20px;
}
.mb-4 {
  margin-bottom: 16px;
}
</style>


