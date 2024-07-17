// src/composables/useAuth.js
import { ref } from 'vue'

const isAuthenticated = ref(false)

const checkAuth = () => {
  isAuthenticated.value = !!localStorage.getItem('user')
}

const login = (token) => {
  localStorage.setItem('user', token)
  checkAuth()
}

const logout = () => {
  localStorage.removeItem('user')
  checkAuth()
}

export { isAuthenticated, checkAuth, login, logout }
