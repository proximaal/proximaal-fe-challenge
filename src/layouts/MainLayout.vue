<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <FilterMenu v-if="schoolStore.schools.length" />
        <q-space />
        <SearchBar />
        <q-space />
        <q-btn
          dense
          color="white"
          text-color="primary"
          label="Logout"
          aria-label="Logout"
          @click="logOut"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import FilterMenu from "components/FilterMenu.vue";
import SearchBar from "components/SearchBar.vue";
import { useSchoolStore } from "stores/school";

const linksList = [];

export default defineComponent({
  name: "MainLayout",

  components: {
    FilterMenu,
    SearchBar,
  },

  methods: {
    logOut() {
      sessionStorage.removeItem("token");
      this.$router.push("/login");
    },
  },

  setup() {
    const schoolStore = useSchoolStore();

    return {
      schoolStore,
    };
  },
});
</script>
