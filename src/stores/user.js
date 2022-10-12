import { defineStore } from 'pinia'
import axios from 'axios'

export const user = defineStore('user', {
  state: () => ({
    user: null,
    loading: false,
    error: false,
    userRegistered: false
  }),

  actions: {
    registerUser(payload) {
     this.loading = true
     this.error = false
     this.userRegistered = false

     axios.post('http://localhost:3000/user', payload)
      .then((response) => {
        console.log(response)
        this.userRegistered = true
      })
      .catch((error) => {
        this.error = true
        console.log(error)
      })
      .finally(() => this.loading = false)
    },
  },
})