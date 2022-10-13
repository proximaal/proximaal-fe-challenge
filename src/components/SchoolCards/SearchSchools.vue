<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  schools: Array,
  resetSearch: Function
})

defineEmits(['searchSelection', 'currentQuery'])
const query = ref('')

const searchedCards = computed(() => {
  return props.schools
  .filter(school => school.name.toLowerCase()
  .includes(query.value.toLowerCase())) 
})

watch(query, (newVal) => {
  if (newVal === '') {
    props.resetSearch()
  }
})
</script>

<template>
  <div>
    <label for="search">Search by name</label>
    <input type="text" placeholder="Search" v-model="query">
    <ul v-if="query !== ''">
      <li v-for="card in searchedCards" :key="card.name">
        <p @click="$emit('searchSelection', card.name)"> {{ card.name }}</p>
      </li>
    </ul>
  </div>
</template>