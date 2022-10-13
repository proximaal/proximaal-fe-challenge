<script setup>
import { user } from '@/stores/user'
import { computed } from 'vue'
import { NButton } from 'naive-ui'

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
  <n-button @click="logout">Logout</n-button>
</template>