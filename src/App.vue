<script setup>
import { RouterView } from 'vue-router'
import UserMenu from './components/UserMenu.vue'
import { user } from '@/stores/user'
import { computed } from 'vue'

const store = user()

const currentUser = computed(() => {
  return store.user || JSON.parse(localStorage.getItem('user'))
})

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <UserMenu v-if="currentUser !== null && $route.name !== 'login'"/>
  </header>
  <RouterView />
</template>
