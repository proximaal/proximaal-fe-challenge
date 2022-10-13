<script setup>
import { reactive, ref } from 'vue'
import { user } from '@/stores/user'
import { NButton } from 'naive-ui'
import { RouterLink} from 'vue-router'

const state = reactive({
  username: '',
  password: ''
})
const required = ref(false)

const store = user()

const login = (payload) => {
  if (state.username === '' || state.password === '') {
    required.value = true
  } else {
    payload = {
    username: state.username,
    password: state.password
  }
    store.loginUser(payload)
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <label for="username">Username</label>
    <input name="username" v-model="state.username" type="text">
    <label for="password">Password</label>
    <input name="password" v-model="state.password" type="password">
    <p v-if="required">Username and Password are required fields</p>
    <n-button @click="login">login</n-button>
    <section v-if="store.userError">error</section>
    <section v-if="store.userLoading">loading...</section>
    <RouterLink to="/register">Register</RouterLink>
    </div>
</template>