<template>
  <q-card>
    <q-card-section>
      <h4 class="q-mt-xs">{{ school.name }}</h4>
      <q-markup-table>
        <tbody>
          <tr>
            <td>Status</td>
            <td>{{ school.status }}</td>
          </tr>
          <tr>
            <td>Organisation number</td>
            <td>{{ school.organization_number }}</td>
          </tr>
          <tr>
            <td>Brin number</td>
            <td>{{ school.brin_number }}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{{ school.city }}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{{ school.state }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SchoolCard",
  props: {
    school: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
h4 {
  min-height: 5rem;
}
</style>
