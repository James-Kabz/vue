<script setup>
import { ref } from 'vue'

const color = ref('green')
const contactInfo = [
  {
    variant: 'elevated',
    headline: 'Customer Support',
    description: 'For any inquiries regarding our products and services, please contact our customer support team.',
    email: 'support@cameranation.com',
    phone: '+254 740289578'
  },
  {
    variant: 'flat',
    headline: 'Sales',
    description: 'For bulk orders, special offers, and sales-related questions, reach out to our sales department.',
    email: 'sales@cameranation.com',
    phone: '+254 740289578'
  },
  {
    variant: 'tonal',
    headline: 'Technical Support',
    description: 'If you experience any technical issues with our products, please contact our technical support team.',
    email: 'techsupport@cameranation.com',
    phone: '+254 740289578'
  },
  {
    variant: 'outlined',
    headline: 'General Inquiries',
    description: 'For any general questions or comments, feel free to reach out to us.',
    email: 'cameranation@gmail.com',
    phone: '+254 740289578'
  }
]
</script>

<template>
  <v-app>
    <div class="background-image">
      <v-row justify="center">
        <v-col v-for="(info, i) in contactInfo" :key="i" cols="12" md="5">
          <v-card :color="color" :variant="info.variant" class="mx-auto card-animation">
            <v-card-item>
              <div>
                <div class="text-overline mb-1">{{ info.variant }}</div>
                <div class="text-h6 mb-1">{{ info.headline }}</div>
                <div :class="['text-caption', {'white-text': info.variant === 'tonal' || info.variant === 'outlined'}]">{{ info.description }}</div>
                <div :class="['text-caption', {'white-text': info.variant === 'tonal' || info.variant === 'outlined'}]">Email: {{ info.email }}</div>
                <div :class="['text-caption', {'white-text': info.variant === 'tonal' || info.variant === 'outlined'}]">Phone: {{ info.phone }}</div>
              </div>
            </v-card-item>
<!-- 
            <v-card-actions>
              <v-btn :color="color">Contact Us</v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </div>
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
  height: 100%;
  width: 100%;
  background-image: url('../assets/images/table.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mx-auto {
  margin: auto;
}

.text-overline {
  font-size: 0.75rem;
  font-weight: 700; 
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(16, 13, 13, 0.6);
}

.text-h6 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6;
}

.text-caption {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.43;
  color: rgba(0, 0, 0, 0.6);
}

.white-text {
  color: white !important;
}

.v-card-item {
  padding: 20px;
}

.v-card-actions {
  display: flex;
  justify-content: flex-end;
  padding: 8px 16px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-animation {
  animation: fadeInUp 1s ease-in-out;
}
</style>
