import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const user = defineStore('user', {
  state: () => ({
    user: null,
    loading: false,
    error: false,
    userRegistered: false,
    userLoading: false,
    userError: false
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
    loginUser(payload) {
      this.userLoading = true
      this.userError = false

      axios.get(`http://localhost:3000/user?username=${payload.username}`)
        .then((response) => {
          console.log(response)
          localStorage.setItem('user', JSON.stringify(response.data[0]))
          router.push({ path: '/'})
        })
        .catch((error) => {
          console.log(error)
          this.userError = true
        })
        .finally(() => { this.userLoading = false })
    }
  },
})