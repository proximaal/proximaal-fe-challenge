<template>
  <q-page class="q-px-lg">
    <div class="row">
      <div class="col-12">
        <h1>School overview</h1>
      </div>
      <template v-if="schoolStore.FILTERED_SCHOOLS.length">
        <div
          v-for="(school, index) in schoolStore.FILTERED_SCHOOLS"
          v-bind:key="index"
          class="col-12 col-md-4 col-lg-3 q-pa-md"
        >
          <SchoolCard :school="school" />
        </div>
      </template>
      <template v-else>
        <div class="col-12">
          <p>No results found</p>
        </div>
      </template>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useSchoolStore } from "stores/school";
import SchoolCard from "components/SchoolCard.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    SchoolCard,
  },
  methods: {},
  mounted() {
    this.schoolStore.getSchools();
  },
  setup() {
    const schoolStore = useSchoolStore();

    return {
      schoolStore,
    };
  },
});
</script>
