<script setup>
import { reactive } from 'vue'
import { user } from '@/stores/user'
import { NButton } from 'naive-ui'

const state = reactive({
  username: '',
  password: ''
})

const store = user()

const login = (payload) => {
  payload = {
    username: state.username,
    password: state.password
  }
  store.loginUser(payload)
}
</script>

<template>
  <h1>Login</h1>
  <label for="username">Username</label>
  <input  name="username" v-model="state.username" type="text">
  <label for="password">Password</label>
  <input name="password" v-model="state.password" type="password">
  <n-button @click="login">login</n-button>
  <section v-if="store.userError">error</section>
  <section v-if="store.userLoading">loading...</section>
</template>