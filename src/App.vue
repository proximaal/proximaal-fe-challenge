<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UserMenu from './components/icons/UserMenu.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
    <UserMenu v-if="$route.name !== 'login'"/>
  </header>

  <RouterView />
</template>
