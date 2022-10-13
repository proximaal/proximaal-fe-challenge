<script setup>
import { reactive } from 'vue'

  defineProps({
    choices: Array,
    type: String
  })
  defineEmits(['filterSelection'])

  const state = reactive({
    currentChoice: ''
  })

</script>

<template>
  <div>
    <label for="select">Filter by {{ type }}</label>
    <select name="select" v-model="state.currentChoice" @change="$emit('filterSelection', $event.target.value)">
      <option value="">All</option>
      <option 
        v-for="(choice, i) in choices" 
        :key="i"
        :value="choice"
      >
        {{choice}}
      </option>
    </select>
  </div>
</template>