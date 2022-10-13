<script setup>
import { fetchData } from '../components/composables/fetchData.js'
import SchoolCard from '../components/SchoolCards/SchoolCard.vue'
import SearchSchools from "../components/SchoolCards/SearchSchools.vue"
import FilterSchools from "../components/SchoolCards/FilterSchools.vue"

const { data, allData, loading }  = fetchData('http://localhost:3000/school')

const sortCards = (name) => {
  const searchedSchools = data.value.filter(school => school.name === name)
  data.value = searchedSchools
}

const cityChoices = ['Amsterdam', 'Rotterdam', 'Haarlem', 'Den Haag']
const stateChoices = ['Zuid-Holland', 'Noord-Holland']
const statusChoices = ['active', 'pending']

const filterCards = (choice) => {
  // Account for multiple selects
  data.value = allData.value
  if (cityChoices.includes(choice)) {
    const searchedSchools = data.value.filter(school => school.city === choice)
    data.value = searchedSchools
  } else if (stateChoices.includes(choice)) {
    const searchedSchools = data.value.filter(school => school.state === choice)
    data.value = searchedSchools
  } else if (statusChoices.includes(choice)) {
    const searchedSchools = data.value.filter(school => school.status === choice)
    data.value = searchedSchools
  } else {
    data.value = allData.value
  } 
}

const resetSearch = () => {
  data.value = allData.value
}

</script>

<template>
  <div>
    <h1>School Cards</h1>
    <section v-if="loading">
      <p>Loading...</p>
    </section>
    <section v-else-if="data">
      <FilterSchools @filter-selection="filterCards" 
        type="city" :choices="cityChoices" />
      <FilterSchools @filter-selection="filterCards" 
        type="status" :choices="statusChoices" />
      <FilterSchools @filter-selection="filterCards" 
        type="state" :choices="stateChoices" />
      <SearchSchools @search-selection="sortCards" 
      :schools="data" :resetSearch="resetSearch" />
      <ul>
        <SchoolCard 
          v-for="school in data" 
          :school="school" 
          :key="school.id" 
          />
      </ul>
    </section>
    <section v-else>Error</section>
  </div>
</template>