// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import LoginView from '../components/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import { useUserStore } from '@/stores/user'
import UserDashboard from '@/views/UserDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin-dashboard',
      name: 'admindashboard',
      component: AdminDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user-dashboard',
      name: 'userdashboard',
      component: UserDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('access_token')
    if (token) {
      next()
    } else {
      userStore.isLoggedIn = false
      next('/login')
    }
  } else {
    next()
  }
})

export default router
