<script setup>
import { fetchData } from '../components/composables/fetchData.js'
import SchoolCard from '../components/SchoolCards/SchoolCard.vue'

const { data, loading }  = fetchData('http://localhost:3000/school')
</script>

<template>
  <h1>School Cards</h1>
<section v-if="loading">
  <p>Loading...</p>
</section>
<section v-else-if="data">
  <ul>
    <SchoolCard 
      v-for="school in data" 
      :school="school" 
      :key="school.id" 
      />
  </ul>
</section>
<section v-else>Error</section>
</template>