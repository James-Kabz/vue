import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi',
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },

})

app.use(vuetify)
// createApp(App).use(vuetify).mount('#app')
app.use(createPinia())
app.use(router)
app.mount('#app')