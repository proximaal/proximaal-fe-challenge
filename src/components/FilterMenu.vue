<template>
  <q-btn
    dense
    color="white"
    text-color="primary"
    label="Filter"
    aria-label="Filter"
    @click="showFilterMenu"
  >
    <q-menu>
      <q-list style="min-width: 16rem">
        <q-item>
          <q-item-section>Filter on status</q-item-section>
        </q-item>
        <q-item
          v-for="(option, index) in propFilterOptions('status')"
          :key="index"
          dense
        >
          <q-item-section>
            <q-checkbox v-model="filters.status[option]" :label="option" />
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section>Filter on city</q-item-section>
        </q-item>
        <q-item
          v-for="(option, index) in propFilterOptions('city')"
          :key="index"
          dense
        >
          <q-item-section>
            <q-checkbox v-model="filters.city[option]" :label="option" />
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section>Filter on state</q-item-section>
        </q-item>
        <q-item
          v-for="(option, index) in propFilterOptions('state')"
          :key="index"
          dense
        >
          <q-item-section>
            <q-checkbox v-model="filters.state[option]" :label="option" />
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable @click="initFilters">
          <q-item-section> Clear all filters </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
import { defineComponent } from "vue";
import { useSchoolStore } from "../stores/school";

export default defineComponent({
  name: "FilterMenu",

  data() {
    return {
      filters: {},
    };
  },

  computed: {},

  watch: {
    filters: {
      handler(newValue) {
        this.schoolStore.activeFilters = this.setActiveFilters(newValue);
      },
      deep: true,
    },
  },

  methods: {
    propFilterOptions(prop) {
      const items = this.schoolStore.schools.map((school) => {
        return school[prop];
      });

      return [...new Set(items)].sort();
    },
    initFilters() {
      const props = ["status", "city", "state"];
      props.forEach((prop) => {
        const propFilterOptions = this.propFilterOptions(prop);
        const propObject = {};
        propFilterOptions.forEach((option) => {
          propObject[option] = false;
        });
        this.filters[prop] = propObject;
      });
    },
    setActiveFilters(filters) {
      const activeFilters = {};
      for (const filter in filters) {
        activeFilters[filter] = [];
        for (const filterProp in filters[filter]) {
          if (filters[filter][filterProp]) {
            activeFilters[filter].push(filterProp);
          }
        }
      }
      return activeFilters;
    },
  },

  mounted() {
    this.initFilters();
  },

  setup() {
    const schoolStore = useSchoolStore();

    return {
      schoolStore,
    };
  },
});
</script>

<style lang="scss" scoped></style>
