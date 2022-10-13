<script setup>
import { NCard } from 'naive-ui'

defineProps({
  school: Object
})

</script>

<template>
  <li>
    <n-card 
      :title="school.name"
      >
      <p>
        {{ school.brin_number }}
      </p>
      <p>
        {{ school.city }}
      </p>
      <p>
        {{ school.state }}
      </p>
      <p>
        {{ school.status }}
      </p>
      <p>
        {{ school.organization_number }}
      </p>
    </n-card>
  </li>
</template> 