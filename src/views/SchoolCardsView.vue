<script setup>
import { fetchData } from '../components/composables/fetchData.js'

const { data, loading }  = fetchData('http://localhost:3000/school')
</script>

<template>
  <h1>School Cards</h1>
<section v-if="loading">
  <p>Loading...</p>
</section>
<section v-else-if="data">Data loaded</section>
<section v-else>Error</section>
</template>