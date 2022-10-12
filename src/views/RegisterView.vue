<script setup>
import { reactive } from 'vue'

const state = reactive({
  username: '',
  password: ''
})
</script>

<template>
  <div>
    <h1>Register</h1>
    <label for="username">Username</label>
    <input  name="username" v-model="state.username" type="text">
    <label for="password">Password</label>
    <input name="password" v-model="state.password" type="password">
    <button>Register</button>
  </div>
</template>

