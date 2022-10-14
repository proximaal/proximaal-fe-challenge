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
    userError: false,
    noUser: false,
    wrongPass: false
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
      this.wrongPass = false
      this.noUser = false

      axios.get(`http://localhost:3000/user?username=${payload.username}`)
        .then((response) => {
          console.log(response.data)
          // Check for valid username
          if (response.data.length === 0) {
            console.log('no user')
            this.noUser = true
          // Check for valid password  
          } else if (response.data[0].password !== payload.password){
            this.wrongPass = true
          } else {
            this.user = response.data[0]
            localStorage.setItem('user', JSON.stringify(response.data[0]))
            router.push({ path: '/'})
          }
        })
        .catch((error) => {
          console.log(error)
          this.userError = true
        })
        .finally(() => { this.userLoading = false })
    },
    logoutUser() {
      this.user = null
      localStorage.removeItem('user')
      router.push('login')
    }
  },
})