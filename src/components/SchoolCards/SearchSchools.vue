<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  schools: Array
})
const query = ref('')
const searchedCards = computed(() => {
  return props.schools
    .filter(school => school.name.toLowerCase()
    .includes(query.value.toLowerCase()))
})

</script>

<template>
  <label for="search">Search by name</label>
  <input type="text" placeholder="Search" v-model="query">
  <ul v-if="query !== ''">
    <li v-for="card in searchedCards" :key="card.name">
     {{ card.name }}
    </li>
  </ul>
</template>