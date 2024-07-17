// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProductsView from '../views/ProductView.vue'
import LoginView from '../components/LoginView.vue'
import { isAuthenticated, checkAuth } from '../composables/useAuth'

const routes = [
  { path: '/home', component: HomeView, meta: { requiresAuth: true } },
  { path: '/about', component: AboutView, meta: { requiresAuth: true } },
  { path: '/services', component: ServicesView, meta: { requiresAuth: true } },
  { path: '/product', component: ProductsView, meta: { requiresAuth: true } },
  { path: '/login', component: LoginView },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  checkAuth()
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login')
  } else {
    next()
  }
})

export default router
