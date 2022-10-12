<script setup>
import { user } from '@/stores/user'
import { computed } from 'vue'
const store = user()

const logout = () => {
  store.logoutUser()
}
const currentUser = computed(() => {
  return store.user || JSON.parse(localStorage.getItem('user'))
})

</script>

<template>
  <p>Logged in as {{ currentUser.username }}</p>
  <button @click="logout">Logout</button>
</template>