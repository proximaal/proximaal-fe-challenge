<script setup>
import { user } from '@/stores/user'
const store = user()

const logout = () => {
  store.logoutUser()
}
</script>
<template>
  <p>Logged in as...</p>
  <button @click="logout">Logout</button>
</template>