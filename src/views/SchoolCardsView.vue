<script setup>
import { fetchData } from '../components/composables/fetchData.js'
import SchoolCard from '../components/SchoolCards/SchoolCard.vue'
import SearchSchools from "../components/SchoolCards/SearchSchools.vue"

const { data, loading }  = fetchData('http://localhost:3000/school')

const sortCards = (name) => {
  const searchedSchools = data.value.filter(school => school.name === name)
  data.value = searchedSchools
}
</script>

<template>
  <h1>School Cards</h1>
  <section v-if="loading">
    <p>Loading...</p>
  </section>
  <section v-else-if="data">
    <SearchSchools @search-selection="sortCards" :schools="data" />
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