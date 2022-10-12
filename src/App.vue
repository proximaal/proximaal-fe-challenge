<script setup>
import { RouterLink, RouterView } from 'vue-router'
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

    <div class="wrapper">
      <nav>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
    <UserMenu v-if="currentUser && $route.name !== 'login'"/>
  </header>

  <RouterView />
</template>
