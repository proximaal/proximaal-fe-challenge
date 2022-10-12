<script setup>
import { reactive } from 'vue'

const state = reactive({
  username: '',
  password: ''
})
</script>

<template>
  <h1>Login</h1>
  <label for="username">Username</label>
  <input  name="username" v-model="state.username" type="text">
  <label for="password">Password</label>
  <input name="password" v-model="state.password" type="password">
  <button>Login</button>
</template>