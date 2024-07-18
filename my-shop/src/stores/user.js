import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    role: '' // Add role to the state
  }),

  getters: {
    isAdmin(state) {
      return state.role === 'admin'
    }
  },

  actions: {
    setUserRole(role) {
      this.role = role
    },

    login(token, role) {
      this.isLoggedIn = true
      this.role = role
      localStorage.setItem('access_token', token)
      localStorage.setItem('user_role', role)
    },

    logout() {
      this.isLoggedIn = false
      this.role = ''
      localStorage.removeItem('access_token')
      localStorage.removeItem('user_role')
      location.replace('/')
    }
  }
})
