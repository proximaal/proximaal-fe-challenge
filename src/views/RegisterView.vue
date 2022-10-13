<script setup>
import { reactive, ref } from 'vue'
import { user } from '@/stores/user'
import { NButton } from 'naive-ui'

const state = reactive({
  username: '',
  password: ''
})

const store = user()
const required = ref(false)

const register = (payload) => {
  state.required = false
  
  if (state.username === '' || state.password === '') {
    required.value = true
  } else { 
    payload = {
      username: state.username,
      password: state.password
    }
    store.registerUser(payload)
  }
}
</script>

<template>
  <div>
    <h1>Register</h1>
    <label for="username">Username</label>
    <input  name="username" v-model="state.username" type="text">
    <label for="password">Password</label>
    <input name="password" v-model="state.password" type="password">
    <n-button @click="register">Register</n-button>
    <p v-if="required">Username and Password are required fields</p>
    <section v-if="store.error">error</section>
    <section v-if="store.loading">loading...</section>
    <section v-if="store.userRegistered">
      <p>Success!!</p>
      <router-link to="/login">
        Please login
      </router-link>
    </section>
  </div>
</template>

